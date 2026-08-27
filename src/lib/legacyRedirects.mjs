// Minimal redirects — never remap live paths to new IA.
// Old internal/alternate paths → live canonical paths only.

const CAR_ACCIDENT_CITY_TARGETS = [
  ['palm-springs', '/personal-injury/palm-springs/'],
  ['cathedral-city', '/personal-injury/cathedral-city/'],
  ['redlands', '/personal-injury/car-accidents/'],
  ['san-bernardino', '/personal-injury/car-accidents/'],
  ['fontana', '/personal-injury/car-accidents/'],
  ['riverside', '/personal-injury/car-accidents/'],
  ['moreno-valley', '/personal-injury/car-accidents/'],
  ['highland', '/personal-injury/car-accidents/'],
  ['palm-desert', '/personal-injury/car-accidents/'],
  ['indio', '/personal-injury/car-accidents/'],
  ['beaumont', '/personal-injury/car-accidents/'],
  ['hemet', '/personal-injury/car-accidents/'],
  ['colton', '/personal-injury/car-accidents/'],
  ['desert-hot-springs', '/personal-injury/car-accidents/'],
  ['rancho-cucamonga', '/personal-injury/car-accidents/'],
  ['yucaipa', '/personal-injury/car-accidents/'],
  ['ontario', '/personal-injury/car-accidents/'],
  ['la-quinta', '/personal-injury/car-accidents/'],
  ['rancho-mirage', '/personal-injury/car-accidents/'],
  ['indian-wells', '/personal-injury/car-accidents/'],
  ['coachella', '/personal-injury/car-accidents/'],
  ['barstow', '/personal-injury/car-accidents/'],
  ['rialto', '/personal-injury/car-accidents/'],
  ['big-bear-lake', '/personal-injury/car-accidents/'],
]

const carAccidentLawyerRedirects = CAR_ACCIDENT_CITY_TARGETS.map(([city, to]) => ({
  from: `/car-accident-lawyer-${city}/`,
  to,
}))

export const legacyRedirects = [
  // Junk pages
  { from: '/ethans-page/', to: '/' },
  { from: '/header-2/', to: '/' },
  { from: '/practice-areas/', to: '/' },
  { from: '/contact-v2/', to: '/contact/' },
  { from: '/why-choose-us/', to: '/about-us/' },
  { from: '/frequently-asked-questions-2/', to: '/frequently-asked-questions/' },

  // PI alternates
  { from: '/personal-injury/car-accidents-2/', to: '/personal-injury/car-accidents/' },
  { from: '/personal-injury/slip-and-fall/', to: '/personal-injury/' },
  { from: '/personal-injury/premises-liability/', to: '/personal-injury/' },

  // BK alternates
  { from: '/bankruptcy/stop-foreclosure/', to: '/bankruptcy/foreclosure-defense/' },
  { from: '/bankruptcy/stop-wage-garnishment/', to: '/bankruptcy/wage-garnishment/' },
  { from: '/bankruptcy/chapter-7-free-eval/', to: '/bankruptcy/chapter-7/' },
  { from: '/bankruptcy/chapter-13-free-eval/', to: '/bankruptcy/chapter-13/' },
  { from: '/bankruptcy/file-for-bankruptcy-2315/', to: '/bankruptcy/chapter-7/' },
  { from: '/bankruptcy/file-for-bankruptcy-ps-2/', to: '/bankruptcy/chapter-7/' },
  { from: '/bankruptcy/file-for-bankruptcy-ps-2315/', to: '/bankruptcy/chapter-7/' },
  { from: '/bankruptcy/file-for-bankruptcy-rd-2/', to: '/bankruptcy/chapter-7/' },
  { from: '/bankruptcy/lp-chapter-7-bankruptcy-1/', to: '/bankruptcy/chapter-7/' },

  // Old Next.js internal paths → live paths
  { from: '/attorney/edgar-lombera/', to: '/about-us/' },
  { from: '/reviews/', to: '/testimonials/' },
  { from: '/resources/', to: '/blog/' },
  { from: '/faq/', to: '/frequently-asked-questions/' },

  // Spanish — never serve /es/personal-injury
  { from: '/es/personal-injury/', to: '/es/lesiones-personales/' },
  { from: '/es/', to: '/es/inicio/' },

  // Keyword landing pages → nearest live page
  { from: '/truck-accident-lawyer/', to: '/personal-injury/truck-accidents/' },
  { from: '/truck-accident-attorney-los-angeles/', to: '/personal-injury/truck-accidents/' },
  { from: '/truck-accident-lawyer-san-bernardino-county/', to: '/personal-injury/truck-accidents/' },
  { from: '/truck-accident-san-bernardino-county/', to: '/personal-injury/truck-accidents/' },
  { from: '/uber-accident-lawyers/', to: '/personal-injury/rideshare-accidents/' },
  { from: '/brain-injury-attorney-riverside/', to: '/personal-injury/traumatic-brain-injury/' },
  { from: '/california-motorcycle-accident-lawyer/', to: '/personal-injury/motorcycle-accidents/' },
  { from: '/riverside-motorcycle/', to: '/personal-injury/motorcycle-accidents/' },
  { from: '/riverside-motorcycle-accident-lawyer/', to: '/personal-injury/motorcycle-accidents/' },
  { from: '/traffic-attorney-barstow-ca/', to: '/' },
  { from: '/san-bernardino-personal-injury-attorney/', to: '/personal-injury/' },
  { from: '/termsofservice/', to: '/terms-of-service/' },

  ...carAccidentLawyerRedirects,
]
