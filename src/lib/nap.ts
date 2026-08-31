/** Hard-coded NAP — source of truth matches live site schema. Do not invent. */
import type { Locale } from './payload'

export const FIRM = {
  legalName: 'Law Offices of Edgar Lombera',
  brandName: 'Lombera Law',
  url: 'https://lomberalaw.com/',
  founder: 'Edgar P. Lombera',
  barNumber: '259393',
  barAdmitted: '2008-12-08',
  languages: ['English', 'Spanish'],
  practiceAreas: ['Personal Injury', 'Bankruptcy'],
} as const

export const OFFICES = [
  {
    id: 'redlands',
    name: 'Redlands Office',
    streetAddress: '2068 Orange Tree Lane Suite 220',
    addressLocality: 'Redlands',
    addressRegion: 'CA',
    postalCode: '92374',
    addressCountry: 'US',
    phone: '(909) 915-0181',
    tel: '+19099150181',
    geo: { latitude: 34.0688, longitude: -117.2246 },
    locationSlug: 'redlands-ca',
  },
  {
    id: 'palm-springs',
    name: 'Palm Springs Office',
    streetAddress: '1276 N Palm Canyon Dr #107',
    addressLocality: 'Palm Springs',
    addressRegion: 'CA',
    postalCode: '92262',
    addressCountry: 'US',
    phone: '(760) 835-9353',
    tel: '+17608359353',
    geo: { latitude: 33.8407, longitude: -116.5463 },
    locationSlug: 'palm-springs',
  },
] as const

export type OfficeId = (typeof OFFICES)[number]['id']

const OFFICE_LABELS: Record<OfficeId, { en: string; es: string }> = {
  redlands: { en: 'Redlands Office', es: 'Oficina de Redlands' },
  'palm-springs': { en: 'Palm Springs Office', es: 'Oficina de Palm Springs' },
}

/** Localized office name for footer, contact cards, and chrome — not schema/legalName. */
export function officeLabel(officeId: OfficeId, locale: Locale): string {
  return OFFICE_LABELS[officeId][locale === 'es' ? 'es' : 'en']
}

export const AREA_SERVED = [
  'San Bernardino County, California',
  'Riverside County, California',
  'Inland Empire, California',
  'Coachella Valley, California',
] as const

export const OFFICE_HOURS_EN =
  'Mon–Fri: 9am–6pm\nSat: 10am–4pm\nSun: by appointment\nFree consultations by appointment'

export const OFFICE_HOURS_ES =
  'Lun–Vie: 9am–6pm\nSáb: 10am–4pm\nDom: con cita\nConsultas gratuitas con cita previa'
