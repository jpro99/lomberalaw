# Lombera Law — rebuild

Bilingual (EN/ES) personal injury + bankruptcy firm site. Next.js App
Router + Payload CMS 3 (embedded, same repo/deploy) + Postgres.

## Status: Visual polish pass

On top of Phases 0-5, plus two real production bugs found and fixed
during first deployment:

**Bugs fixed (both real, both confirmed against actual Vercel build
logs, not guesses):**
- `tailwind.config.cjs` was silently missing from the repo (a Notepad
  save-as mishap), causing every Tailwind utility class sitewide to
  generate zero CSS. Confirmed via the exact Vercel build warning
  before the fix and its absence after.
- `package.json`'s `engines` field (`">=20 <21 || >=22.12.0"`) was
  loosely permissive enough that Vercel silently ran Node 24 despite
  the dashboard being set to 20.x -- now hard-pinned to `"20.x"`.
- Switched from `next/font/google` to a standard Google Fonts
  `<link>` tag, since it was a live variable during debugging and
  removing it costs nothing (slightly less optimal font loading,
  fully acceptable tradeoff for a confirmed-working pipeline).

**Visual polish:**
- `HorizonMotif` component: a restrained line-art desert horizon
  (the recurring signature illustration promised in the design
  brief), placed in the homepage hero and nowhere else -- one idea,
  used once, not sprinkled everywhere.
- `.interactive-card` utility: subtle hover-lift + shadow on every
  clickable card sitewide (practice tiles, service links,
  testimonials, office cards) -- fast, no dramatic animation, respects
  `prefers-reduced-motion`.
- Horizon-rule dividers placed consistently after the hero on every
  major page type (practice hubs, service pages, money pages, city
  hubs) -- previously only existed on the homepage.
- Attorney bio photo: was a blank gray box. Now renders the real
  uploaded photo automatically once one exists in the Attorneys
  collection; falls back to a designed "EPL" monogram placeholder
  (not a blank box, not a fake photo) until then.

**What still needs real assets from you:** attorney headshot, office
photos. I won't fabricate a photo of a real person -- that's a hard
line, not a corner cut for time.

## Status: Phase 5 — FAQ hub, resources/blog, reviews

What's real in this commit (on top of Phases 0-3):

- **`/faq/`** — general FAQ hub, aggregates every FAQ marked
  `showOnGeneralFAQPage`, full FAQPage schema.
- **`/reviews/`** — all testimonials with AggregateRating schema
  (computed from actual seeded ratings, not a hardcoded number).
- **`/resources/`** + **`/resources/[slug]/`** — blog hub and post
  template. Every post is required to link down to at least one
  service page (`relatedServices` is a required field on the Posts
  collection since Phase 0) -- enforced in code, not just policy.
- One real starter post seeded: "What to Do in the First 24 Hours
  After a Car Accident," bilingual, linking to Car Accidents.
- 5 FAQs total now (3 service-specific from Phase 2 + 2 general),
  all bilingual.

Note: Phase 4 (Spanish mirror) in the original phased plan is
already covered -- bilingual routing, field-level localization, and
translated content have existed since Phase 0/1 rather than being
bolted on separately.

What's still open: Twilio/calendar/CRM integration (Phase 6),
performance/SEO hardening pass (Phase 7). The memory architecture
from Phase 1 (Contacts/Events/Episodes) is already positioned for
Phase 6 to plug into.

## Status: Phase 3 — Money pages + locations hub

What's real in this commit (on top of Phases 0-2):

- **18 tier-1 money pages** live: `/personal-injury/car-accidents/[city]/`
  and `/bankruptcy/chapter-7/[city]/` + `/bankruptcy/chapter-13/[city]/`
  for all 6 priority cities (Riverside, San Bernardino, Redlands, Palm
  Springs, Palm Desert, Indio). Each pulls courthouse/highway/nearby-
  city facts from the single City record -- edit a courthouse once,
  every page for that city updates.
- **`/locations/` hub** and **`/locations/[city]/`** hub pages for
  all 12 cities -- every service listed, linking to the tier-1 money
  page where one exists, or the general service page otherwise. This
  is the fallback the IA promised: no thin auto-generated pages for
  the 2nd/3rd-tier combinations.
- Money-page URLs for non-tier-1 combinations **redirect to the city
  hub** instead of 404ing -- e.g. visiting
  `/personal-injury/slip-and-fall/redlands/` (not a tier-1 page)
  sends you to `/locations/redlands/` instead of a dead end.
- Nearby-city cross-linking on both money pages and city hubs, per
  the internal linking strategy.

What's still open:

- Tier-1 set is deliberately narrow (18 pages) -- expanding to more
  cities/services is a content decision for later, not a technical
  blocker.
- `/faq/` general hub page not built yet (Phase 5).
- Resource/blog posts not built yet (Phase 5).

## Status: Phase 2 — Service pages + full collection seeding

What's real in this commit (on top of Phase 0 + Phase 1):

- Individual service pages: `/personal-injury/[service]/` and
  `/bankruptcy/[service]/` for all 11 services — breadcrumbs,
  LegalService + FAQPage + BreadcrumbList schema, sibling-service
  internal linking, FAQ accordion (native `<details>`, zero client JS).
- `Cities` collection seeded with all 12 target cities, courthouse/
  highway data, and nearby-city relationships wired for the internal
  linking strategy. **Courthouse assignments are flagged in the seed
  script for staff verification before these appear on public money
  pages** — getting this wrong on a law firm site is a real problem.
- `FAQs` collection seeded with a starter set, tied to services,
  bilingual.
- Fixed a real gap Jeff hit in testing: `scripts/seed.ts` and
  `scripts/summarize.ts` now load `.env` via `dotenv/config` --
  Payload's own CLI (`payload migrate`) auto-loads env vars, but
  scripts run directly through `tsx` do not.

What's still Phase 3+:

- `ServiceCityPages` (the actual money pages: service × city, tier-1
  only) -- not built yet. Service pages exist now; city-specific
  variants are next.
- `/locations/` hub and per-city hub pages.
- Full internal link graph completion (service pages don't yet link
  down to city pages, since those don't exist).

## Status: Phase 0 — Foundation

What's real in this commit:

- Repo scaffold: Next.js 15, TypeScript strict, Tailwind mapped to a
  documented design-token system (`src/app/(frontend)/globals.css`).
- Payload 3 embedded, Postgres adapter, Vercel Blob storage.
- Full content model implemented as real collections/globals (see
  `src/collections/` and `src/globals/`) — not placeholders. Every
  field from the agreed content model is live and typed.
- i18n routing: English unprefixed at root, Spanish under `/es/`, one
  route tree (`src/middleware.ts` explains the rewrite strategy).
- Payload admin mounted at `/admin`, REST API at `/api`.
- Homepage stub proving routing + DB connection + locale both work
  end to end. **Not real page content — that's Phase 1.**

What's intentionally NOT built yet:

- Real page templates/content (Phase 1)
- Service, city, and money-page routes (Phase 2–3)
- Spanish content (Phase 4 — infrastructure is ready now)
- Twilio/CRM integration (Phase 6 — service boundaries only exist as
  documented intent right now, nothing to wire yet)

## Local setup

```bash
npm install
cp .env.example .env
# fill in DATABASE_URI (Neon/Vercel Postgres) and PAYLOAD_SECRET
npm run dev
```

Visit `/admin` to create the first admin user, `/` for the English
stub homepage, `/es` for the Spanish stub.

## Memory & learning architecture

Built now, not bolted on later — but deliberately NOT autonomous yet.
See `src/collections/Contacts.ts`, `Events.ts`, `Episodes.ts`, and
`src/lib/memory/`.

**Four layers:**

1. **Short-term / session** — `sessionId` on Events ties anonymous
   activity together before a visitor is identified.
2. **Structured profile memory** — `Contacts` collection. Only facts
   stated or directly observed (identity, city, practice-area
   interest, stated contact preference, consent). Never inferred.
3. **Episode memory** — `Episodes` collection. Short, human-readable
   summaries ("visited Chapter 7 pages 4x in 7 days"). Retrieval
   reads ONLY from here, never raw events, never a transcript dump.
4. **Event log** — `Events` collection. High-volume, disposable,
   analytics-shaped. Raw material for the summarizer, not a source
   of truth for retrieval.

**The learning boundary, explicitly:** `src/lib/memory/summarize.ts`
contains fixed, deterministic, auditable rules — not an LLM deciding
what's worth remembering. Every episode it writes starts
`reviewed: false` and `createdBy: "system_rule"`. Nothing produced
by that job is used by `getContactMemory()` (the retrieval function)
until a staff member reviews and checks it off in `/admin`. Run it
with `npm run summarize`, or wire it to Vercel Cron once it's been
watched in practice.

**Retrieval is selective by design.** `getContactMemory(contactId,
{ relevantTags })` returns a small profile + up to 5 relevant
reviewed episodes — never a full history. This is the only function
a future chat, Twilio voice agent, or CRM view should call.

**Review / correction / deletion tools:** Payload's admin UI IS the
review tool for now — `/admin/collections/episodes` lets staff
confirm, edit, or delete any system-generated episode; `/admin/collections/contacts`
gives full CRUD including delete, satisfying the deletion requirement.
A dedicated review-queue UI (approve/reject/defer, à la Kepi Brain)
is a Phase-2-or-later enhancement once there's real data to review.

**Consent:** `Contacts.smsConsent` / `marketingConsent` with a
timestamp — required before any Twilio SMS integration, not
optional groundwork.

**Explicitly deferred:** vector/semantic memory (only as a later
layer, once structured memory is proven out), and any code path
that lets an LLM write to `Episodes` or `Contacts` without going
through the deterministic rules above or a human.

## Rule zero

Every change must pass `npm run build` and `npm run typecheck` before
it's considered done. Lint passing is not proof a feature works.

## Key architecture decisions (don't re-litigate without reason)

- **Payload over custom admin.** Standard content-modeling problem;
  Payload's collections map directly onto it. Custom admin would be
  weeks of work rebuilding what Payload gives for free.
- **Field-level localization, not duplicate documents.** A City or
  Service has one document with `en`/`es` values per localized
  field — not two documents to keep in sync by hand.
- **Unprefixed English, `/es/` for Spanish**, one route tree, via
  middleware rewrite. Preserves existing URL equity on the primary
  market while keeping Spanish a first-class, fully-mirrored site.
- **Nested money-page URLs**: `/personal-injury/car-accidents/riverside/`
  — not flat `/car-accident-lawyer-riverside/`. Clean breadcrumbs,
  clean internal linking, clean redirects from the legacy pattern.
- **Selective local-SEO pages.** `ServiceCityPages` is NOT
  auto-generated for every service × city combination. Only
  high-intent combinations get a full page; the rest rely on the
  City hub. See the IA doc for the tier matrix.
- **CTAVariants and Offices are collections, not globals** — both
  need to be relationship targets from other collections, which
  globals can't be.
