/** Services listed on /personal-injury/ hub — live URLs only, no slip-and-fall. */
export const PI_HUB_SERVICES = [
  'car-accidents',
  'truck-accidents',
  'motorcycle-accidents',
  'rideshare-accidents',
  'wrongful-death',
  'dog-bites',
  'traumatic-brain-injury',
  'spinal-cord-injury',
] as const

/** Live PI service slugs — no catastrophic-injury or medical-malpractice. */
export const PI_SERVICES = new Set([
  'car-accidents',
  'truck-accidents',
  'motorcycle-accidents',
  'rideshare-accidents',
  'wrongful-death',
  'traumatic-brain-injury',
  'spinal-cord-injury',
  'dog-bites',
  'pedestrian-accidents',
  'bus-accidents',
  'bicycle-accidents',
])

export const BK_SERVICES = new Set([
  'chapter-7',
  'chapter-13',
  'foreclosure-defense',
  'wage-garnishment',
])

/** Cities with live /personal-injury/{city}/ and /bankruptcy/{city}/ pages. */
export const LIVE_CITY_SLUGS = new Set([
  'redlands',
  'san-bernardino',
  'fontana',
  'riverside',
  'moreno-valley',
  'highland',
  'palm-springs',
  'palm-desert',
  'cathedral-city',
  'indio',
  'beaumont',
  'hemet',
  'colton',
  'desert-hot-springs',
  'rancho-cucamonga',
])

/** Homepage "coming soon" — no money pages. */
export const COMING_SOON_CITY_SLUGS = new Set([
  'yucaipa',
  'ontario',
  'la-quinta',
  'rancho-mirage',
  'indian-wells',
  'coachella',
])

export const IE_CITIES = new Set([
  'redlands',
  'san-bernardino',
  'fontana',
  'riverside',
  'moreno-valley',
  'highland',
  'beaumont',
  'hemet',
  'colton',
  'rancho-cucamonga',
])

export function cityPhone(slug: string): string {
  return IE_CITIES.has(slug) ? '(909) 915-0181' : '(760) 835-9353'
}

export function isPiService(slug: string) {
  return PI_SERVICES.has(slug)
}

export function isBkService(slug: string) {
  return BK_SERVICES.has(slug)
}

export function isLiveCity(slug: string) {
  return LIVE_CITY_SLUGS.has(slug)
}
