# Lombera Law — rebuild

Bilingual (EN/ES) personal injury + bankruptcy firm site. Next.js App
Router + Payload CMS 3 (embedded, same repo/deploy) + Postgres.

## Status: Content deepened using competitor structural analysis

Studied Arnold & Itkin's actual live pages (a national mass-tort
firm) for *structure and technique*, not wording -- standard,
ethical competitive research. What was learned and applied, in
original Lombera copy throughout:

- **Stakes → specific expertise → hard credibility number → CTA**
  as the skeleton for every practice-area page. Applied to expand
  Catastrophic Injury and Trucking & Commercial Vehicle Accidents
  from a one-line summary to full body content following this arc.
- **Embedded, direct Q&A answering real objections in the page flow**
  (not buried in a separate FAQ page) -- new `QuickAnswers`
  component, seeded with 3 direct questions each for Personal Injury
  ("Is there a fee upfront?", "Does a smaller crash still matter?")
  and Bankruptcy ("Will I lose my house or car?"), rendered right on
  both practice hubs.

**Deliberately not adopted:** their combative "we outlawyer them,
no matter what" tone. That register works backed by $25B in
verdicts; borrowed by a solo two-office practice it reads as the
"billboard-lawyer energy" the positioning work explicitly ruled
out. What's original to Lombera stays as the actual differentiator:
honest, personal-attention framing ("you work with the attorney,
not a case manager") repeated as the site's own consistent
throughline, same structural technique as their trademarked phrase,
different and true content.

## Status: Photo-forward hero redesign

Direct response to a hard, fair challenge: compared against a
national firm's site (Arnold & Itkin), the illustrated-signs
approach read as decorative rather than as the trust signal a real
photo of the attorney provides. Real critique, owned directly.

**What changed:** Edgar's actual uploaded photo is now the hero's
dominant visual -- large (4:5 portrait frame), a bold citrus→pool
gradient color-block behind it (not a plain border), a dark
gradient overlay at the bottom carrying his name/title directly on
the image, matching the "premium legal brand" visual language
without needing new photography. Headline typography bumped to
bold/tighter-tracking at a genuinely larger size for more
confidence. Trust indicators consolidated from four small chips
into one bold stat strip (4.9★ / 2,500+ / 15+ years) closer to how
established firms present credibility at a glance. The vintage
signs stay, now as a quieter secondary touch rather than the main
visual statement -- the photo carries the hero now.

**On the speed question, explicitly:** a large photo is not
inherently slow -- an *unoptimized* one is. This uses `next/image`
with `priority` (so it's the prioritized LCP element, not competing
with anything else for load order), responsive `sizes`, and
automatic AVIF/WebP conversion (already configured in
`next.config.mjs` from Phase 0). This is the actual "happy medium"
between competitor-grade visual impact and the site's non-negotiable
performance requirement -- both, done correctly, not a tradeoff
between them.

**Honest limit, stated plainly:** this uses the one photo already
uploaded. No new photography was fabricated -- doing so would mean
either an AI-generated image misrepresented as Edgar (a real ethical
line) or an unlicensed stock photo (legal exposure). If a higher-
resolution or environmental portrait becomes available later, this
same treatment will look even stronger with it.

## Status: Fix — sign positioning and broken background trees

Real layout bugs from the last screenshot, both fixed:

**Signs overlapping the CTA buttons.** They were absolutely
positioned at the section's corners with no reserved space, landing
right on top of "Get a Free Consultation" / "Two offices" at normal
content heights. Fixed by moving them into normal document flow --
a dedicated row *after* the hero content grid, inside the same
Container, with `mt-10` spacing. This makes overlap structurally
impossible (no more absolute-positioning math to get wrong) and
also fixes the Palm Springs sign getting clipped at the viewport
edge, since it's now safely within the Container's max-width and
padding instead of bleeding past the section with a negative offset.

**Floating disconnected tree fragments** (the squiggly marks near
"Two offices" in the screenshot) were `SplitHeroArt`, a background
tree-strip meant to span the full hero width at ~100px tall. Its
`viewBox="0 0 1200 400"` with `preserveAspectRatio="xMidYMax meet"`
assumed a roughly-square-ish container; at the hero's actual
extreme-wide/short aspect ratio, "meet" scaling shrank the whole
canvas down and centered it, so the corner-positioned trees ended up
as tiny fragments near the middle instead of anchored at the edges.
Removed entirely rather than patched -- the vintage signs are doing
the real visual work now, and one clear idea beats two competing,
half-broken ones.

Signs still `lg:` and up only (hidden on mobile/tablet) to keep
smaller screens clean and fast.

## Status: Vintage regional signage — colorful, SEO-considered

Direct response to "not a real photo, a colorful digital sign" +
the SEO question about what text belongs where.

**Two new sign illustrations** (`LocationSigns.tsx`), rooted in each
town's actual historic design tradition rather than a generic
"Welcome to" placard:
- `RedlandsSign` -- vintage citrus-crate label style: sunburst,
  ornamental dashed border, orange-grove illustration, bold color
  blocks. This is literally the historic graphic tradition of the
  Redlands citrus industry, not an invented aesthetic.
- `PalmSpringsSign` -- mid-century Palm Springs travel-poster style:
  gradient sky, mountain ridge, sun, three palms, flat bold color
  fields -- the region's real 1950s-60s design identity.

Both use real SVG `<text>` (crawlable, not a rasterized image), and
deliberately keep practice-area keywords **off** the graphic --
that's addressed below.

**SEO decision, made explicit:** practice-area keyword phrases
("Personal Injury & Bankruptcy Attorney") belong in the real H1/
headline text, where Google actually weights them -- not baked into
a decorative sign. Putting them on the sign itself would also read
as billboard-style ad copy, conflicting with the "not hypey, not
billboard-lawyer" brand tone from the positioning work earlier
tonight. Signs stay about place identity; the headline carries the
keywords. "Redlands" (not "Inland Empire") used specifically, since
it matches the site's existing city-targeted page architecture.

Signs are large-screen only (`lg:` breakpoint) to avoid clutter on
mobile -- smaller screens keep the faint tree-strip background
instead. Zero image downloads either way, pure inline SVG.

## Status: Real-color tree illustrations + split-office hero

Direct response to feedback that the trees needed to actually look
like orange/palm trees, and the two offices needed to be visually
distinguishable on the homepage.

**Illustrations rebuilt from monotone silhouettes to real, detailed,
multi-color trees:**
- `OrangeTree` -- layered green canopy (not one flat blob), a real
  brown trunk with visible branch fork, 6 distinct orange fruit with
  highlight dimension, not just tinted circles.
- `PalmTree` -- tall segmented trunk, 7 fan-shaped fronds radiating
  from the crown (Washingtonia/fan-palm style, the actual palm
  associated with Palm Springs specifically), with a slight lean
  variant for a second tree.

**Homepage hero redesigned as a genuine split layout**: left-to-
right gradient (citrus tone → pool tone), a large orange tree
anchored bottom-left, two palm trees anchored bottom-right, and
small location tag pills reading "Redlands, California" /
"Palm Springs, California" -- makes the two-office identity
explicit without literally saying "Welcome."

**Deliberately not using stock photography**, and here's why: real
photos of orange groves/palm trees would need to be licensed --
using unlicensed images is real legal exposure for the firm's site,
not just a style question. It would also add page weight against
the "extremely fast" requirement. Illustration stays pure inline
SVG: zero image downloads, zero licensing risk, zero performance
cost, and can be refined indefinitely at no cost.

City hub pages (which use the smaller `HorizonMotif` variant) get
the same upgraded tree quality automatically -- same underlying
illustrations, smaller scale.

## Status: Slip & Fall removed, homepage attorney photo added

**Slip & Fall removed from seed source.** It won't be recreated on
future `npm run seed` runs. **One manual step needed**: since it may
already exist in your live database from an earlier seed run,
delete it yourself in `/admin` → Services → find "Slip & Fall" →
delete. No code can reach into your live database to remove it for
you.

**Homepage attorney photo — real gap, now fixed.** The homepage
never queried the Attorneys collection at all; the photo you
uploaded only ever showed on the `/attorney/edgar-lombera` page.
Added a "Meet Your Attorney" section on the homepage (between
practice areas and testimonials) that pulls the same photo
automatically -- no second upload needed. Falls back to a styled
"EPL" monogram if no photo exists yet, same pattern as the bio page.
Also pulls the first paragraph of the bio text and links through to
the full bio page.

## Status: Fix — seed script crash from revalidation hooks

Real bug, caught from your terminal output: `npm run seed` crashed
immediately on the very first database write with
`Invariant: static generation store missing in revalidatePath`.

Root cause: `revalidatePath()` (added earlier for on-demand content
updates) only works inside an active Next.js request -- someone
clicking Save in `/admin` from a real browser. The seed script is a
standalone CLI process with no such request, so every write during
seeding tried to revalidate, found no request context, and threw --
killing the whole script partway through.

**Practical consequence: your database is very likely mostly empty
right now** -- the crash happened right after the first office was
created, before practice areas, cities, services, attorney bio,
testimonials, or any of the 30 money pages got written.

**Fix:** `src/hooks/revalidate.ts` now wraps the call in try/catch --
fails silently outside a real request (nothing needs revalidating
during a seed run anyway, there's no live traffic yet), still works
exactly as before for real `/admin` edits.

**You must re-run `npm run seed` after this fix** -- it's safe to
re-run (checks what exists before creating), but it needs to
actually complete this time to populate everything.

## Status: Visual redesign v2 — richer palette + content density

Direct response to feedback that the site felt flat and empty.
Confirmed with a mockup before building (see conversation) — this
is the real implementation.

**Palette expanded from one muted accent to a genuine dual
identity:**
- `citrus` (#D2691E) -- Redlands' actual citrus-belt heritage,
  default brand accent.
- `pool` (#0E8A88) -- Palm Springs' literal pool-turquoise,
  desert-modernist identity, used as the "featured/serious case"
  marker sitewide.
- `sunset` (#E0663D) -- richer, more saturated CTA color, replaces
  the old muted brass on every button.
- Old `clay`/`brass` token *names* still work everywhere unchanged
  (every existing `text-clay`/`bg-brass` className in the codebase
  automatically picks up the new colors) -- only their values moved,
  so this was a low-risk, high-impact change.

**Content density fix** -- the actual "personal injury page has
nothing" complaint: PI/Bankruptcy hubs now have a real stat band
(FMCSA regulations, the actual $1M rideshare policy figure, CA's
2-year statute of limitations with the real CCP §335.1 citation,
Chapter 7/13 timelines) and case-type cards with icons and
descriptions instead of a bare link list, visually split into
Featured (pool-tinted) vs Common (citrus-tinted) tiers matching the
serious-injury positioning.

**PI hub body expanded** with real specifics pulled from the
previous live site as a content brief (topics/facts only, rewritten
in original language -- insurance adjuster tactics, comparative
negligence, CA Civil Code §3294 punitive damages) -- this is both
the visual fix and a legitimate SEO depth improvement, two
independent benefits from one pass.

**Buttons** get a real shadow/glow and lift on hover instead of a
flat color swap. **Trust-indicator chips** on the homepage now carry
color-coded left borders cycling through the palette instead of one
uniform gray box.

Zero performance cost throughout -- every color is flat CSS via
custom properties, no images added.

## Status: Target-all strategy + honest copy + location motifs

Three changes in one pass, per your direction:

**1. Car accidents restored to tier-1.** "Target all" means both
layers: serious-injury positioning leads the brand, but car-accident
searches are the highest-volume local queries and get full city
pages again. Tier-1 is now 5 services × 6 cities = 30 money pages
(truck, catastrophic, car accidents, Ch. 7, Ch. 13). The car-accident
city pages include a deliberate upward bridge: "if your crash
involved a commercial vehicle or serious injuries, those cases are
handled differently -- and that's exactly what this firm is built
for." Volume capture that feeds the bigger cases.

**2. Honest attorney-access copy.** The old "you talk to Edgar, not
a call center / every consultation with Edgar" framing overpromised
-- the office uses AI phone answering, staff handle paperwork and
billing questions. On a law firm site, overpromising attorney access
is a professional-conduct risk, not just a tone issue. New framing
throughout (hero, final CTA, contact page, attorney bio, money-page
bodies): "On personal injury cases, you work directly with Edgar --
not a case manager." Accurate, and still the real differentiator.

**3. Location-aware motifs replace the generic mountains.** Fair
critique that mountain silhouettes could be anywhere. Now three
variants in `HorizonMotif.tsx`: `citrus` (orange branch --
Redlands/IE citrus belt) on San Bernardino-cluster city pages,
`desert` (palms + ridge) on Coachella Valley city pages, `blend`
(both) on the homepage. Selector is the city's serving office, not
county -- Riverside/Moreno Valley are Riverside County but citrus
belt, not desert. Still pure inline SVG: zero image downloads, zero
performance cost.

**Deferred by agreement:** the AI phone system replacement (Twilio +
voice AI + routing + message-taking) is Phase 6 -- a dedicated build
starting with call-flow design, not something to staple onto a copy
pass. The Contacts/Events/Episodes memory architecture is already in
place waiting for it.

## Status: Personal Injury repositioning — serious/catastrophic focus

Strategic shift, reviewed and confirmed before building (per your
instruction): the firm is positioned toward serious injury,
commercial vehicle/trucking, rideshare, catastrophic injury, and
medical malpractice rather than general auto-accident volume.

**What changed:**
- **New services added:** Catastrophic Injury, Traumatic Brain
  Injury, Spinal Cord Injury, Medical Malpractice (confirmed as a
  real practice area, not referral-only).
- **`truck-accidents` retitled** to "Trucking & Commercial Vehicle
  Accidents" — same slug/URL, broader framing.
- **`displayOrder` field added to Services** so the PI hub can be
  curated (serious-injury cases lead) independent of creation order.
  All hub/hub-adjacent queries now sort by it.
- **Tier-1 money page matrix changed**: swapped `car-accidents` for
  `truck-accidents` + `catastrophic-injury` as the featured
  service×city pages (alongside the existing Chapter 7/13
  bankruptcy tier). Car accidents, motorcycle, pedestrian, and slip &
  fall pages still exist for SEO capture -- they're just not what
  the brand leads with.
- **Homepage hero, PI hub intro/body, and contact-page intake
  framing all rewritten** with softened serious-injury positioning
  (first draft was flagged as too exclusive-sounding; this is the
  toned-down version).
- **Three new cities**: Rialto, Highland, Big Bear Lake — all in the
  Redlands cluster. (Victorville considered and deliberately
  excluded -- confirmed not part of the service area.)

**Deliberately not written by me:** full body copy for the new
service pages (Catastrophic Injury, TBI, Spinal Cord Injury, Med
Mal) -- only short summaries. Case-type-specific legal marketing
copy for a newly-emphasized med mal practice is something Edgar
should write or directly review, not something I should generate
unsupervised.

## Status: On-demand content revalidation

Fixes the gap you found: saving a change in `/admin` (like the
attorney photo) wasn't showing up on the live site because several
pages use static generation -- Next.js bakes the HTML at build time
and serves that snapshot until told otherwise.

**Fix:** `src/hooks/revalidate.ts` -- attached to every content
collection (`PracticeAreas`, `Services`, `Cities`,
`ServiceCityPages`, `Attorneys`, `Testimonials`, `FAQs`, `Posts`,
`Offices`, `Media`, `CTAVariants`) and both globals (`SiteSettings`,
`MainNavigation`). The moment you save anything in `/admin`, it
calls `revalidatePath('/', 'layout')` directly -- Payload runs
embedded in the same Next.js process, so no separate API route or
webhook was needed. Every visitor's next page load gets fresh
content within seconds, no redeploy required.

This revalidates broadly (the whole site) rather than precisely
tracking which pages depend on which piece of content -- a Service
edit could touch its hub page, its own page, and money pages built
from it, not worth hand-mapping at this scale. Revalidation is cheap
(cache invalidation, not a rebuild).

## Status: Admin panel fix + favicon fix

Two more real bugs found from actual Vercel runtime logs, not guesses:

- **Blank `/admin` page.** Root cause: `src/app/(payload)/admin/importMap.js`
  was a placeholder empty object since Phase 0 (documented then as
  needing regeneration once real admin components existed). Once
  Vercel Blob storage was added, the admin UI needed
  `VercelBlobClientUploadHandler` from that map and silently failed
  to render when it wasn't there -- page returned 200, logged a
  clear warning (`PayloadComponent not found in importMap`), but
  rendered nothing. Fixed by actually running
  `payload generate:importmap` and committing the real output.
  **Run this again any time a new upload-capable field or admin
  component is added** -- it's not a one-time fix, it's a build step
  that was simply never run.
- **`/favicon.ico` and `/favicon.png` returning 500** on every
  request (visible in runtime logs all night, invisible to actual
  visitors). Root cause: no favicon file existed anywhere, so the
  request was falling through to the `[locale]` catch-all route and
  crashing. Fixed with `src/app/icon.tsx`, Next.js's dynamic icon
  convention -- generates a simple monogram favicon at build time,
  which takes priority over route matching entirely.

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
