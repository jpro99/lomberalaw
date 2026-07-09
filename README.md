# Lombera Law — rebuild

Bilingual (EN/ES) personal injury + bankruptcy firm site. Next.js App
Router + Payload CMS 3 (embedded, same repo/deploy) + Postgres.

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
