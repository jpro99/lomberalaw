# Deployment & Content-Update Playbook

Written after a long debugging session that could have been much
shorter if this had existed beforehand. Read this before the next
time content or database structure changes.

---

## The correct order of operations, every time

When `scripts/seed.ts` changes (new content, new fields, anything):

1. `npm install`
2. If the Payload schema itself changed (new field, new collection):
   `npx payload migrate:create <name>`
3. `git add . && git commit -m "..." && git push`
4. **Wait for the Vercel deployment to finish and show green/Ready.**
   Watch the actual Build Logs, not just the "Deployment created"
   toast — a build can fail after that toast appears.
5. **Only after the deploy is confirmed green:** run `npm run seed`
6. If the seed output doesn't end with `Done. Visit /admin to
   review and refine.`, something failed partway through — scroll
   up and read the actual error, don't assume it worked.
7. **After seed completes, trigger one more deploy** — even an
   empty one:
   ```
   git commit --allow-empty -m "Rebuild with updated content"
   git push
   ```
   This is the step that's easy to forget. Static pages (the
   homepage, practice hubs, etc.) are built once from whatever's in
   the database *at build time*. Running seed *after* a deploy
   updates the database but does **not** update pages that were
   already built from the old data. Only a fresh build after the
   seed picks up the new content.
8. Check the live site yourself, in an **incognito/private window**
   (rules out your own browser cache) — not just Claude's fetch of
   the URL. Claude's fetch tool has shown stale/cached results for
   this domain before; your own browser is the real source of truth.

**The short version: deploy → seed → deploy again.** Two deploys,
one seed run in between, always in that order.

---

## Specific bugs found and fixed tonight (context for why the above matters)

**1. Postgres SSL connection failures.** Neon requires SSL. If
`DATABASE_URI` is ever replaced (rotated, copied from a different
source, etc.) and it's missing `?sslmode=require`, every build fails
at the database-connection step. Fixed at the code level in
`payload.config.ts` (`ssl: { rejectUnauthorized: false }` set
explicitly), so this specific failure shouldn't recur regardless of
the exact connection string format — but if `DATABASE_URI` is ever
replaced, sanity-check the new build's logs anyway.

**2. Seed script silently not updating English content.** The
original "find or create" pattern in `seed.ts` only ever updated the
**Spanish** locale for documents that already existed — English
content was only ever written at creation time. This meant every
English content rewrite made throughout the night updated the
*source code* but silently never reached the database on subsequent
seed runs, since the document already existed and only its Spanish
fields got touched. Fixed in Offices, Practice Areas, and
Testimonials (Services already had the correct pattern). **If a new
seeded collection is added later, make sure its update loop
explicitly writes English fields on every run, not just at creation
— this bug is easy to reintroduce by copying an old pattern.**

**3. Stale placeholder data never gets removed automatically.**
Seeding is additive by default — it finds-or-creates by some key
(author name, slug, etc.), so if new real content uses different
identifying values than old placeholder content, both end up sitting
in the database side by side, and whichever query runs on the public
site may show either one depending on sort order. When replacing
placeholder content with real content under new identifiers, add an
explicit cleanup step that deletes the old records by their known
old values — don't assume the new seed data replaces the old.

---

## A note on verification

A Vercel deployment showing "Ready" and "Production" confirms the
**build succeeded** — it does not confirm the **content is current**.
Those are two different questions, and conflating them cost real
time tonight. Always check actual visible content after a deploy,
not just deployment status.
