// Legacy URL -> new-site URL mapping, pulled from the actual live
// site's real navigation and footer (not guessed). This exists
// specifically because of what happened last time this firm changed
// platforms: per Jeff, the original HTML site ranked #1 across most
// of the service area; the move to WordPress lost that ranking for
// years because redirects weren't handled carefully, and that's the
// direct reason the firm started paying for ads. This list is the
// safeguard against that happening a second time.
//
// Single source of truth, used two ways:
//   1. next.config.mjs imports this to generate Next.js's built-in
//      redirects() config -- evaluated once at build time, zero
//      per-request cost. This is what actually redirects visitors
//      and search engines.
//   2. scripts/seed.ts imports this to populate the Redirects
//      collection in Payload, purely for admin visibility -- so
//      staff can see the full list in /admin without reading this
//      file. Editing entries there does NOT change live behavior
//      until this file is updated and the site is redeployed --
//      see the note in src/collections/Redirects.ts.

export const legacyRedirects = [
  // Core pages
  { from: '/testimonials/', to: '/reviews' },
  { from: '/about-us/', to: '/attorney/edgar-lombera' },
  { from: '/blog/', to: '/resources' },
  { from: '/frequently-asked-questions/', to: '/faq' },
  { from: '/es/inicio/', to: '/es' },

  // Personal injury services -- direct matches
  { from: '/personal-injury/car-accidents/', to: '/personal-injury/car-accidents' },
  { from: '/personal-injury/truck-accidents/', to: '/personal-injury/truck-accidents' },
  { from: '/personal-injury/motorcycle-accidents/', to: '/personal-injury/motorcycle-accidents' },
  { from: '/personal-injury/rideshare-accidents/', to: '/personal-injury/rideshare-accidents' },
  { from: '/personal-injury/wrongful-death/', to: '/personal-injury/wrongful-death' },
  { from: '/personal-injury/traumatic-brain-injury/', to: '/personal-injury/traumatic-brain-injury' },

  // Personal injury services no longer offered on the new site --
  // route to the practice hub rather than 404, without overstating
  // what's still offered.
  { from: '/personal-injury/slip-and-fall/', to: '/personal-injury' },
  { from: '/personal-injury/premises-liability/', to: '/personal-injury' },
  { from: '/personal-injury/dog-bites/', to: '/personal-injury' },

  // Bankruptcy services
  { from: '/bankruptcy/foreclosure-defense/', to: '/bankruptcy/foreclosure-defense' },
  { from: '/bankruptcy/wage-garnishment/', to: '/bankruptcy/wage-garnishment' },
  { from: '/bankruptcy/bankruptcy-process/', to: '/bankruptcy' },
  { from: '/bankruptcy/bankruptcy-resources/', to: '/resources' },

  // City pages that exist on both sites -- old site split PI/BK per
  // city with no shared hub; new site has one city hub covering
  // both, so both old paths converge there.
  ...['redlands', 'san-bernardino', 'fontana', 'riverside', 'moreno-valley', 'highland', 'palm-springs', 'palm-desert', 'cathedral-city', 'indio'].flatMap(
    (city) => [
      { from: `/personal-injury/${city}/`, to: `/locations/${city}` },
      { from: `/bankruptcy/${city}/`, to: `/locations/${city}` },
    ],
  ),

  // City pages on the old site with no equivalent on the new one --
  // send to the general locations hub instead of 404ing.
  ...['rancho-cucamonga', 'hemet', 'beaumont', 'colton', 'desert-hot-springs'].flatMap((city) => [
    { from: `/personal-injury/${city}/`, to: '/locations' },
    { from: `/bankruptcy/${city}/`, to: '/locations' },
  ]),

  // Legacy keyword-first landing page URLs found in the footer --
  // likely predate the current site structure.
  { from: '/san-bernardino-personal-injury-attorney/', to: '/personal-injury' },
  { from: '/car-accident-lawyer-san-bernardino/', to: '/personal-injury/car-accidents/san-bernardino' },
  { from: '/california-motorcycle-accident-lawyer/', to: '/personal-injury/motorcycle-accidents' },
  { from: '/truck-accident-attorney-los-angeles/', to: '/personal-injury/truck-accidents' },
  { from: '/uber-accident-lawyers/', to: '/personal-injury/rideshare-accidents' },
  { from: '/brain-injury-attorney-riverside/', to: '/personal-injury/traumatic-brain-injury' },
]
