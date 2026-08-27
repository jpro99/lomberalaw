/** Hard-coded NAP — source of truth matches live site schema. Do not invent. */
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

export const AREA_SERVED = [
  'San Bernardino County, California',
  'Riverside County, California',
  'Inland Empire, California',
  'Coachella Valley, California',
] as const
