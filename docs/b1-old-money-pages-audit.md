# B1 — Old service×city money pages vs new practice×city hubs

**Task:** Phase B1 (report only). **Production checked:** `https://lomberalaw.vercel.app` (2026-10-08). **Index checks:** `site:lomberalaw.com{path}` via Google search HTML (same day). **Code/seed source:** `scripts/seed.ts` tier-1 matrix, Payload collection `service-city-pages`, `src/app/sitemap.ts`, `STATIC_TIER1_MONEY_PAGES` in `src/lib/staticData.ts`.

## Scope — what counts as an “old” URL

| System | Route | Data |
|--------|--------|------|
| **Old** | `/{practice}/{service}/{city}/` | Payload `ServiceCityPages` + `MoneyPageView` |
| **New** | `/{practice}/{city}/` | `LIVE_CITY_SLUGS` + `cityBodyCopy` + `PracticeCityView` |

**Tier-1 matrix in seed (authoritative for Neon/Payload):** 4 services × 6 cities = **24 English money URLs** (not 30 — README’s “5×6” is stale; seed uses `truck-accidents`, `car-accidents`, `chapter-7`, `chapter-13` only).

**Tier-1 cities:** `riverside`, `san-bernardino`, `palm-springs`, `palm-desert`, `indio`, `redlands` (all six are in `LIVE_CITY_SLUGS`).

**Out of scope for the main table (not tier-1 live money pages):**

- Combos with no `service-city-pages` doc → **307** to `/locations/{city}/` (e.g. `/personal-injury/car-accidents/fontana/`).
- `/personal-injury/catastrophic-injury/{city}/` linked from some `/locations/{city}/` hubs → **308** to `/personal-injury/{city}/` (not in sitemap; `catastrophic-injury` is not a live PI service slug in `routing.ts`).

---

## Five-line summary (Jeff)

1. **What changed:** Nothing on the site — this is a research report only. Full audit of **24** tier-1 `/{practice}/{service}/{city}/` URLs vs new `/{practice}/{city}/` hubs.
2. **PR:** Draft PR adding this file under `docs/` (no routing, redirects, or deletions).
3. **Preview:** N/A (markdown-only); site behavior unchanged.
4. **Unverified:** Google index status inferred from `site:` queries (not Search Console). Production DB row counts were not queried directly; URL list matches live sitemap + seed.
5. **Decision needed:** Pick **one** local URL pattern per practice×city — keep thin money pages, **301** them to practice×city hubs, or **301** only PI car/truck and keep BK chapter URLs — then approve redirect/cleanup work in a follow-up PR.

---

## Main table (all tier-1 old URLs)

Production **live** = HTTP **200** with money-page H1 and ~35–37 KB HTML. **Sitemap** = present in `https://lomberalaw.vercel.app/sitemap.xml`. **Indexed** = Google `site:lomberalaw.com{path}` returned a result for that path (2026-10-08).

| Old URL | Live | Sitemap | Indexed | Duplicates / overlap | Recommendation | Target |
|---------|------|---------|---------|----------------------|----------------|--------|
| `/personal-injury/truck-accidents/riverside/` | 200, full | Yes | Yes | Overlaps `/personal-injury/riverside/` — **low text overlap** (~3 templated paragraphs vs long verified hub); **high intent overlap** (truck + city) | **301** after sign-off | `/personal-injury/riverside/` |
| `/personal-injury/car-accidents/riverside/` | 200, full | Yes | Yes | Same hub; money page is generic “car accident in Riverside” template | **301** | `/personal-injury/riverside/` |
| `/personal-injury/truck-accidents/san-bernardino/` | 200, full | Yes | Yes | Overlaps `/personal-injury/san-bernardino/` | **301** | `/personal-injury/san-bernardino/` |
| `/personal-injury/car-accidents/san-bernardino/` | 200, full | Yes | Yes | Same | **301** | `/personal-injury/san-bernardino/` |
| `/personal-injury/truck-accidents/palm-springs/` | 200, full | Yes | Yes | Overlaps `/personal-injury/palm-springs/` | **301** | `/personal-injury/palm-springs/` |
| `/personal-injury/car-accidents/palm-springs/` | 200, full | Yes | Yes | Same | **301** | `/personal-injury/palm-springs/` |
| `/personal-injury/truck-accidents/palm-desert/` | 200, full | Yes | Yes | Overlaps `/personal-injury/palm-desert/` | **301** | `/personal-injury/palm-desert/` |
| `/personal-injury/car-accidents/palm-desert/` | 200, full | Yes | Yes | Same | **301** | `/personal-injury/palm-desert/` |
| `/personal-injury/truck-accidents/indio/` | 200, full | Yes | Yes | Overlaps `/personal-injury/indio/` | **301** | `/personal-injury/indio/` |
| `/personal-injury/car-accidents/indio/` | 200, full | Yes | Yes | Same | **301** | `/personal-injury/indio/` |
| `/personal-injury/truck-accidents/redlands/` | 200, full | Yes | Yes | Overlaps `/personal-injury/redlands/` | **301** | `/personal-injury/redlands/` |
| `/personal-injury/car-accidents/redlands/` | 200, full | Yes | Yes | Same | **301** | `/personal-injury/redlands/` |
| `/bankruptcy/chapter-7/riverside/` | 200, full | Yes | Yes | Overlaps `/bankruptcy/riverside/` — templated Ch.7 copy vs verified BK hub | **301** | `/bankruptcy/riverside/` |
| `/bankruptcy/chapter-13/riverside/` | 200, full | Yes | Yes | Same for Ch.13 | **301** | `/bankruptcy/riverside/` |
| `/bankruptcy/chapter-7/san-bernardino/` | 200, full | Yes | Yes | Overlaps `/bankruptcy/san-bernardino/` | **301** | `/bankruptcy/san-bernardino/` |
| `/bankruptcy/chapter-13/san-bernardino/` | 200, full | Yes | Yes | Same | **301** | `/bankruptcy/san-bernardino/` |
| `/bankruptcy/chapter-7/palm-springs/` | 200, full | Yes | Yes | Overlaps `/bankruptcy/palm-springs/` | **301** | `/bankruptcy/palm-springs/` |
| `/bankruptcy/chapter-13/palm-springs/` | 200, full | Yes | Yes | Same | **301** | `/bankruptcy/palm-springs/` |
| `/bankruptcy/chapter-7/palm-desert/` | 200, full | Yes | Yes | Overlaps `/bankruptcy/palm-desert/` | **301** | `/bankruptcy/palm-desert/` |
| `/bankruptcy/chapter-13/palm-desert/` | 200, full | Yes | Yes | Same | **301** | `/bankruptcy/palm-desert/` |
| `/bankruptcy/chapter-7/indio/` | 200, full | Yes | Yes | Overlaps `/bankruptcy/indio/` | **301** | `/bankruptcy/indio/` |
| `/bankruptcy/chapter-13/indio/` | 200, full | Yes | Yes | Same | **301** | `/bankruptcy/indio/` |
| `/bankruptcy/chapter-7/redlands/` | 200, full | Yes | Yes | Overlaps `/bankruptcy/redlands/` | **301** | `/bankruptcy/redlands/` |
| `/bankruptcy/chapter-13/redlands/` | 200, full | Yes | Yes | Same | **301** | `/bankruptcy/redlands/` |

**Default recommendation rationale:** New practice×city pages are the governed, fact-checked surface (`cityBodyCopy`, `LIVE_CITY_SLUGS`). Old money pages are seed-templated Payload bodies plus shared `city.localIntro` — useful historically, but they compete for the same local queries and lack the hub pages’ canonical/hreflang discipline.

**If Jeff wants to keep any money URLs:** Strongest case is **indexed** URLs with service-specific queries (e.g. “Riverside car accident lawyer”) — but the hub already targets truck/car/BK in structured sections; keeping both requires explicit canonical strategy (see below).

---

## SEO / duplicate-content risks (beyond the table)

### Canonical and hreflang

| Page type | `<link rel="canonical">` | hreflang |
|-----------|--------------------------|----------|
| **New** `/personal-injury/{city}/`, `/bankruptcy/{city}/` | Yes — via `pageMetadata()` → `lomberalaw.com` | en + es + x-default |
| **Old** money pages | **No** — `getMoneyPageMetadata()` only sets `title` / `description` | **No** |
| **Old** money pages JSON-LD | `MoneyPageView` sets breadcrumb + `legalServiceSchema` URL to **self** (`https://lomberalaw.com/.../service/city`) | — |

Spanish three-segment URLs (e.g. `/es/lesiones-personales/accidentes-de-auto/riverside/`) **308** to the Spanish **service** hub only (`/es/lesiones-personales/accidentes-de-auto/`) — city is dropped (`toSpanishPath` behavior). No Spanish money-page equivalents in sitemap.

### Internal links to old URLs

| Source | Behavior |
|--------|----------|
| **`CityHubView`** (`/locations/{city}/`) | For each service with a `service-city-pages` row, links to `/{practice}/{service}/{city}/` (not practice×city hub). Also links **catastrophic-injury** paths on several cities → redirect to practice×city. |
| **`MoneyPageView` “Nearby cities”** | Links to same service on adjacent cities (money-page mesh). |
| **`PracticeCityView`** | Links to **service** hubs only (`/personal-injury/car-accidents/`), not money URLs. |
| **Blog/resources** | Related services link to service pages, not money URLs. |

### Sitemap / static fallback mismatch

- Live Payload sitemap lists **all 24** money URLs (priority 0.9).
- `STATIC_TIER1_MONEY_PAGES` (fallback when DB unavailable) lists only **11** entries — missing all `palm-desert`, `indio`, and most truck pages. Risk if sitemap ever serves static fallback.

### Routing behavior

- `getMoneyPage()` does **not** filter `tier === 'tier1'` — any future `service-city-pages` doc could render at the old URL pattern.
- Non–tier-1 combos **307** to `/locations/{city}/` (not practice×city hub).

---

## Risks summary

1. **Cannibalization:** 24 indexed money URLs + 12 practice×city URLs (6 cities × 2 practices) for overlapping intents; hubs are stronger on facts and canonicals; money pages are thinner but indexed.
2. **Canonical gap:** Money pages lack HTML canonical/hreflang while practice×city pages declare `lomberalaw.com` canonical — Google may choose URLs inconsistently.
3. **Schema:** JSON-Ld on money pages asserts the nested URL as the service URL.
4. **Internal linking split:** Location hubs push users and crawl budget to old URLs; practice×city pages do not link back to money URLs.
5. **Ghost catastrophic links:** Location hubs advertise `/personal-injury/catastrophic-injury/{city}/` which 308 to practice×city — confusing IA and wasted crawl (not in sitemap).

---

## Decision for Jeff

Choose one strategy (then implement in a **separate** coder PR with redirects, not in B1):

| Option | Actions |
|--------|---------|
| **A — Consolidate (recommended)** | 301 all 24 money URLs → matching `/personal-injury/{city}/` or `/bankruptcy/{city}/`; update `CityHubView` links; remove money URLs from sitemap; keep Payload docs for admin or archive. |
| **B — Keep money pages** | Add `pageMetadata` canonicals; point canonical to money **or** hub per URL; align internal links; expand money copy to pass duplicate guard vs hubs. |
| **C — Hybrid** | 301 PI car + truck only; keep BK chapter×city until BK hub ranks; revisit in 90 days. |

Until a decision is made: **do not delete** Payload `service-city-pages` rows or remove sitemap entries without redirects in place (per brief).

---

## Method notes

- **Enumerate:** `scripts/seed.ts` lines 670–671 (`tier1Services` × `tier1Cities`); confirmed against production `sitemap.xml` (24 paths).
- **Live:** `curl` status and H1 on `lomberalaw.vercel.app`.
- **Indexed:** Google `site:lomberalaw.com/personal-injury/car-accidents/riverside/` style queries; all 24 returned positive on 2026-10-08. Re-check in Search Console before redirecting.
- **Similarity:** Manual comparison of money `localBody` (3 short paragraphs) vs `cityBodyCopy` hub (multi-section, verified facts) on sample cities (Riverside, Redlands, San Bernardino).
