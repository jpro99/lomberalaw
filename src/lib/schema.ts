import { AREA_SERVED, FIRM, OFFICES } from './nap'

type OfficeDoc = {
  name: string
  phone: string
  address: string
  geo?: { latitude?: number; longitude?: number } | [number, number] | null
}

const ABOUT_URL = `${FIRM.url}about-us/`

/** Homepage LegalService + founder + two office addresses. */
export function firmLegalServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'LegalService',
        '@id': `${FIRM.url}#firm`,
        name: FIRM.legalName,
        alternateName: FIRM.brandName,
        url: FIRM.url,
        description:
          'Bilingual personal injury and bankruptcy law firm serving the Inland Empire and Coachella Valley. Free consultation. Hablamos español.',
        telephone: OFFICES.map((o) => o.tel),
        priceRange: 'Free Consultation',
        image: `${FIRM.url}edgar-lombera-hero.jpg`,
        founder: { '@id': `${ABOUT_URL}#edgar-lombera` },
        areaServed: AREA_SERVED.map((name) => ({ '@type': 'AdministrativeArea', name })),
        knowsLanguage: FIRM.languages,
        availableLanguage: FIRM.languages,
      },
      {
        '@type': 'Attorney',
        '@id': `${ABOUT_URL}#edgar-lombera`,
        name: FIRM.founder,
        url: ABOUT_URL,
        identifier: '259393',
        memberOf: { '@type': 'Organization', name: 'State Bar of California' },
        knowsLanguage: FIRM.languages,
      },
      ...OFFICES.map((o) => officeLocalBusinessNode(o)),
    ],
  }
}

function officeLocalBusinessNode(o: (typeof OFFICES)[number]) {
  return {
    '@type': 'LocalBusiness',
    '@id': `${FIRM.url}locations/${o.locationSlug}/#office`,
    name: `${FIRM.legalName} — ${o.name}`,
    telephone: o.tel,
    url: `${FIRM.url}locations/${o.locationSlug}/`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: o.streetAddress,
      addressLocality: o.addressLocality,
      addressRegion: o.addressRegion,
      postalCode: o.postalCode,
      addressCountry: o.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: o.geo.latitude,
      longitude: o.geo.longitude,
    },
  }
}

export function localBusinessSchema(office: OfficeDoc, url: string) {
  const match = OFFICES.find((o) => office.name.includes(o.addressLocality))
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: `${FIRM.legalName} — ${office.name}`,
    telephone: office.phone,
    address: { '@type': 'PostalAddress', streetAddress: office.address },
    url,
    ...(match && {
      geo: {
        '@type': 'GeoCoordinates',
        latitude: match.geo.latitude,
        longitude: match.geo.longitude,
      },
    }),
  }
}

export function attorneySchema(params: {
  name: string
  url: string
  barNumber?: string
  image?: string
  languages?: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Attorney',
    name: params.name,
    url: params.url,
    image: params.image,
    identifier: params.barNumber || '259393',
    knowsLanguage: params.languages,
    memberOf: { '@type': 'Organization', name: 'State Bar of California' },
  }
}

export function legalServiceSchema(params: {
  name: string
  description: string
  url: string
  areaServed: string[]
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: params.name,
    description: params.description,
    url: params.url,
    areaServed: params.areaServed.map((a) => ({ '@type': 'AdministrativeArea', name: a })),
  }
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function faqPageSchema(items: { question: string; answer: string }[]) {
  const valid = items.filter((item) => item.answer && item.answer !== item.question)
  if (valid.length === 0) return null
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: valid.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
}
