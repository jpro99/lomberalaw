import type { Locale } from './payload'
import { OFFICE_HOURS_EN } from './nap'

/** Build-time / no-DB fallback — mirrors scripts/seed.ts so pages render without Postgres. */
export const STATIC_OFFICES = [
  {
    id: 'redlands',
    name: 'Redlands Office',
    phone: '(909) 915-0181',
    address: '2068 Orange Tree Lane Suite 220, Redlands, CA 92374',
    hours: OFFICE_HOURS_EN,
    locationSlug: 'redlands-ca',
  },
  {
    id: 'palm-springs',
    name: 'Palm Springs Office',
    phone: '(760) 835-9353',
    address: '1276 N Palm Canyon Dr #107, Palm Springs, CA 92262',
    hours: OFFICE_HOURS_EN,
    locationSlug: 'palm-springs',
  },
] as const

export const STATIC_CITY_SLUGS = [
  'riverside',
  'san-bernardino',
  'redlands',
  'moreno-valley',
  'fontana',
  'ontario',
  'palm-springs',
  'palm-desert',
  'indio',
  'cathedral-city',
  'la-quinta',
  'rancho-mirage',
  'rialto',
  'highland',
  'big-bear-lake',
  'beaumont',
  'hemet',
  'colton',
  'desert-hot-springs',
  'rancho-cucamonga',
] as const

export const STATIC_PI_SERVICES = [
  'catastrophic-injury',
  'truck-accidents',
  'rideshare-accidents',
  'traumatic-brain-injury',
  'spinal-cord-injury',
  'wrongful-death',
  'medical-malpractice',
  'car-accidents',
  'motorcycle-accidents',
  'pedestrian-accidents',
] as const

export const STATIC_BK_SERVICES = [
  'chapter-7',
  'chapter-13',
  'foreclosure-defense',
  'wage-garnishment',
] as const

export const STATIC_TIER1_MONEY_PAGES: { practice: 'personal-injury' | 'bankruptcy'; service: string; city: string }[] = [
  { practice: 'personal-injury', service: 'truck-accidents', city: 'riverside' },
  { practice: 'personal-injury', service: 'truck-accidents', city: 'san-bernardino' },
  { practice: 'personal-injury', service: 'catastrophic-injury', city: 'riverside' },
  { practice: 'personal-injury', service: 'car-accidents', city: 'san-bernardino' },
  { practice: 'personal-injury', service: 'car-accidents', city: 'riverside' },
  { practice: 'personal-injury', service: 'car-accidents', city: 'redlands' },
  { practice: 'personal-injury', service: 'car-accidents', city: 'palm-springs' },
  { practice: 'bankruptcy', service: 'chapter-7', city: 'riverside' },
  { practice: 'bankruptcy', service: 'chapter-7', city: 'san-bernardino' },
  { practice: 'bankruptcy', service: 'chapter-7', city: 'redlands' },
  { practice: 'bankruptcy', service: 'chapter-13', city: 'riverside' },
  { practice: 'bankruptcy', service: 'chapter-13', city: 'san-bernardino' },
]

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://lomberalaw.com'

export function localePrefix(locale: Locale) {
  return locale === 'en' ? '' : '/es'
}

export function canonicalUrl(path: string, locale: Locale) {
  return `${SITE_URL}${localePrefix(locale)}${path}`
}
