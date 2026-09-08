/** Services listed on /personal-injury/ hub — live URLs only, no slip-and-fall. */
export const PI_HUB_SERVICES = [
  'car-accidents',
  'truck-accidents',
  'motorcycle-accidents',
  'rideshare-accidents',
  'pedestrian-accidents',
  'dog-bites',
  'traumatic-brain-injury',
  'spinal-cord-injury',
  'wrongful-death',
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
  'yucaipa',
  'la-quinta',
  'ontario',
  'coachella',
])

/** Homepage "coming soon" — no money pages. */
export const COMING_SOON_CITY_SLUGS = new Set([
  'rancho-mirage',
  'indian-wells',
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
  'yucaipa',
  'ontario',
])

export function cityPhone(slug: string): string {
  return IE_CITIES.has(slug) ? '(909) 915-0181' : '(760) 835-9353'
}

export function cityTel(slug: string): string {
  return IE_CITIES.has(slug) ? '+19099150181' : '+17608359353'
}

/** Default call target when no city context (Redlands primary line). */
export const PRIMARY_TEL = '+19099150181'
export const PRIMARY_PHONE = '(909) 915-0181'

export function isPiService(slug: string) {
  return PI_SERVICES.has(slug)
}

export function isBkService(slug: string) {
  return BK_SERVICES.has(slug)
}

export function isLiveCity(slug: string) {
  return LIVE_CITY_SLUGS.has(slug.trim().toLowerCase())
}

function normalizePathSlug(slug: string): string {
  return slug.trim().toLowerCase()
}

/** City slug from marketing paths — used by chrome CTA and sticky header phone. */
export function extractCitySlugFromPath(pathname: string): string | undefined {
  const parts = pathname.replace(/\/$/, '').split('/').filter(Boolean)
  const offset = parts[0] === 'es' || parts[0] === 'en' ? 1 : 0
  const practice = parts[offset]
  const isPractice =
    practice === 'personal-injury' ||
    practice === 'bankruptcy' ||
    practice === 'lesiones-personales' ||
    practice === 'bancarrota'

  if (!isPractice) {
    if (parts[offset] === 'locations' && parts[offset + 1]) {
      let loc = normalizePathSlug(parts[offset + 1]!)
      if (loc === 'redlands-ca') loc = 'redlands'
      return isLiveCity(loc) ? loc : undefined
    }
    return undefined
  }

  const segment = parts[offset + 1] ? normalizePathSlug(parts[offset + 1]!) : undefined
  if (segment && isLiveCity(segment)) return segment
  const citySegment = parts[offset + 2] ? normalizePathSlug(parts[offset + 2]!) : undefined
  if (citySegment && isLiveCity(citySegment)) return citySegment
  return undefined
}
