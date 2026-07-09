type OfficeDoc = {
  name: string
  phone: string
  address: string
  geo?: { latitude?: number; longitude?: number } | [number, number] | null
}

// Two LocalBusiness entries (Redlands + Palm Springs) rather than one
// generic entry — each office has its own phone number and address,
// and Google treats multi-location firms correctly only when each
// location gets its own LocalBusiness node.
export function localBusinessSchema(office: OfficeDoc, url: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: `Law Offices of Edgar P. Lombera — ${office.name}`,
    telephone: office.phone,
    address: {
      '@type': 'PostalAddress',
      streetAddress: office.address,
    },
    url,
    priceRange: '$$',
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
    knowsLanguage: params.languages,
    memberOf: {
      '@type': 'Organization',
      name: 'State Bar of California',
    },
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
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  }
}
