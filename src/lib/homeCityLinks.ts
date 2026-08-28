/** Ordered slugs for homepage "Find your city" — Inland Empire belt, then Coachella Valley. */
export const HOME_CITY_SLUGS = [
  'redlands',
  'san-bernardino',
  'fontana',
  'rancho-cucamonga',
  'riverside',
  'moreno-valley',
  'hemet',
  'beaumont',
  'highland',
  'colton',
  'palm-springs',
  'palm-desert',
  'cathedral-city',
  'indio',
  'desert-hot-springs',
] as const

export type HomeCitySlug = (typeof HOME_CITY_SLUGS)[number]

/** Home list PI only — live `/bankruptcy/` URLs 301 to PI (template BK copy). */
export const HOME_CITY_PI_ONLY = new Set<HomeCitySlug>([
  'highland',
  'colton',
  'desert-hot-springs',
])
