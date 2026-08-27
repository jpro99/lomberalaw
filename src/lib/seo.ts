import type { Metadata } from 'next'
import type { Locale } from './payload'
import { toSpanishPath } from './spanishPaths'
import { SITE_URL } from './staticData'

type PageMeta = {
  title: string
  description?: string
  path: string
  locale?: Locale
  noindex?: boolean
  nofollow?: boolean
}

function withSlash(path: string) {
  if (!path || path === '/') return `${SITE_URL}/`
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${SITE_URL}${normalized}/`
}

/** Build Next.js metadata with canonical + hreflang. */
export function pageMetadata({ title, description, path, locale = 'en', noindex, nofollow }: PageMeta): Metadata {
  const normalizedEn = path === '/' ? '/' : path.startsWith('/') ? path : `/${path}`
  const enPath = normalizedEn === '/' ? '' : normalizedEn
  const esPath = toSpanishPath(normalizedEn)
  const canonicalPath = locale === 'es' ? esPath : enPath || '/'
  const canonical = withSlash(canonicalPath === '/' ? '' : canonicalPath)

  return {
    title,
    description,
    alternates: {
      canonical,
      languages: {
        en: withSlash(enPath === '/' ? '' : enPath),
        es: withSlash(esPath === '/' ? '' : esPath),
        'x-default': withSlash(enPath === '/' ? '' : enPath),
      },
    },
    robots:
      noindex || nofollow
        ? { index: noindex ? false : true, follow: nofollow ? false : true }
        : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: 'The Law Offices of Edgar P. Lombera',
      locale: locale === 'es' ? 'es_MX' : 'en_US',
      type: 'website',
    },
  }
}

export const HOME_SEO = {
  en: {
    title: 'Inland Empire Attorneys | Redlands & Palm Springs | Lombera',
    description:
      'Bilingual injury and Chapter 7 & 13 lawyers in Redlands and Palm Springs. Free consult. No fee unless we win injury cases. Call (909) 915-0181 today.',
    h1: 'Lombera Law — Attorneys in Redlands and Palm Springs',
    open:
      'Lombera Law is the Law Offices of Edgar Lombera, a bilingual firm with offices in Redlands and Palm Springs. Founding attorney Edgar P. Lombera handles personal injury claims and Chapter 7 and Chapter 13 bankruptcy — those two areas only. The first meeting is free. Injury cases run on contingency: no fee unless we win. Call (909) 915-0181 in Redlands or (760) 835-9353 in Palm Springs. Hablamos Español.',
    cards: {
      pi: {
        eyebrow: 'Practice area',
        name: 'Personal Injury',
        description:
          'Car, truck, motorcycle, rideshare, dog bite, and wrongful death claims on contingency — no fee unless we win.',
      },
      bk: {
        eyebrow: 'Practice area',
        name: 'Bankruptcy',
        description:
          'Chapter 7 and Chapter 13 to stop garnishment, foreclosure, and creditor harassment. Free consultation.',
      },
    },
    h2: {
      offices: 'Two offices',
      why: 'Why clients call Edgar P. Lombera',
      faq: 'FAQ',
    },
    faq: [
      {
        q: 'Do you handle slip-and-fall or product liability cases?',
        a: 'No. We do not handle slip-and-fall or product liability matters. For those cases we can refer you to a trusted colleague.',
      },
      {
        q: 'Is the consultation free?',
        a: 'Yes. Consultations are free and confidential, in English or Spanish, by phone or in person at either office.',
      },
      {
        q: 'Do I pay upfront for a personal injury case?',
        a: 'No. Personal injury cases are handled on contingency — you pay no attorney fee unless we recover money for you.',
      },
    ],
  },
  es: {
    title: 'Abogado Inland Empire | Accidentes y Bancarrota | Lombera',
    h1: 'Oficina Legal de Edgar Lombera — Redlands y Palm Springs',
    description:
      'Abogados bilingües de lesiones y Capítulo 7 y 13 en Redlands y Palm Springs. Consulta gratis. Sin honorarios a menos que ganemos casos de lesiones. (909) 915-0181.',
    open:
      'Lombera Law es el despacho de Edgar Lombera, una firma bilingüe con oficinas en Redlands y Palm Springs. El abogado fundador Edgar P. Lombera maneja reclamos de lesiones personales y bancarrota Capítulo 7 y Capítulo 13 — solo esas dos áreas. La primera reunión es gratis. Los casos de lesiones son a contingencia: no paga a menos que ganemos. Llame al (909) 915-0181 en Redlands o al (760) 835-9353 en Palm Springs. Hablamos Español.',
    cards: {
      pi: {
        eyebrow: 'Área de práctica',
        name: 'Lesiones Personales',
        description:
          'Accidentes de auto, camión, motocicleta, rideshare, mordeduras de perro y muerte por negligencia a contingencia.',
      },
      bk: {
        eyebrow: 'Área de práctica',
        name: 'Bancarrota',
        description:
          'Capítulo 7 y Capítulo 13 para detener embargos, ejecuciones hipotecarias y acoso de acreedores.',
      },
    },
    comingSoon: 'Próximamente',
  },
} as const

export const OFFICE_LOCATION_SEO = {
  'redlands-ca': {
    title: 'Redlands Law Office | Personal Injury & Bankruptcy',
    h1: 'Redlands law office — 2068 Orange Tree Lane, Suite 220, Redlands, CA 92374. (909) 915-0181.',
    description:
      'Lombera Law Redlands office for personal injury and bankruptcy. Free consult. (909) 915-0181. Hablamos Español.',
  },
  'palm-springs': {
    title: 'Palm Springs Law Office | Personal Injury & Bankruptcy',
    h1: 'Palm Springs law office — 1276 N Palm Canyon Dr #107, Palm Springs, CA 92262. (760) 835-9353.',
    description:
      'Lombera Law Palm Springs office for personal injury and bankruptcy. Free consult. (760) 835-9353. Hablamos Español.',
  },
} as const

export const CONTACT_SEO = {
  title: 'Contact Lombera Law | Redlands & Palm Springs',
  h1: 'Contact Lombera Law',
  description:
    'Call the Redlands office at (909) 915-0181 or Palm Springs at (760) 835-9353. Free consultation in English or Spanish.',
}

export const PI_HUB_SEO = {
  title: 'Inland Empire Personal Injury Lawyer | Lombera Law',
  description:
    'Car, truck, and motorcycle accidents in San Bernardino and Riverside County. No fee unless we win. Redlands and Palm Springs. (909) 915-0181.',
  h1: 'Inland Empire personal injury lawyer',
  open:
    'Edgar P. Lombera represents injured people across San Bernardino County, Riverside County, and the Coachella Valley. We handle car, truck, motorcycle, rideshare, dog bite, and wrongful death claims on contingency. You pay nothing unless we win. Call the Redlands office at (909) 915-0181 or Palm Springs at (760) 835-9353.',
}

export const PI_HUB_SEO_ES = {
  title: 'Abogado de Accidentes | Inland Empire | Consulta Gratis',
  description:
    'Accidentes de auto, camión y motocicleta en el condado de San Bernardino y Riverside. Sin honorarios a menos que ganemos. Redlands y Palm Springs. (909) 915-0181.',
  h1: 'Abogado de Lesiones Personales en el Inland Empire',
}

export const BK_HUB_SEO = {
  title: 'Inland Empire Bankruptcy Lawyer | Free Consult | Lombera',
  description:
    'Chapter 7 and Chapter 13 in San Bernardino and Riverside County. Stop garnishment and foreclosure. Free consult. (909) 915-0181.',
  h1: 'Bankruptcy Lawyer for the Inland Empire',
  open:
    'If credit cards, medical bills, wage garnishment, or a foreclosure notice are out of control, bankruptcy can stop collections the day the case is filed. Edgar P. Lombera files Chapter 7 and Chapter 13 for families in the Inland Empire and Coachella Valley. Cases go to the U.S. Bankruptcy Court, Central District of California, 3420 Twelfth Street, Riverside. Free consult. Hablamos español.',
}

export const BK_HUB_SEO_ES = {
  title: 'Abogado de Bancarrota | Inland Empire | Consulta Gratis',
  description:
    'Capítulo 7 y Capítulo 13 en el condado de San Bernardino y Riverside. Detenga embargos y ejecuciones. Consulta gratis. (909) 915-0181.',
  h1: 'Abogado de Bancarrota en el Inland Empire',
}

export const CH7_SEO = {
  title: 'Chapter 7 Bankruptcy Lawyer | Inland Empire',
  description:
    'Wipe credit cards and medical bills in about 3–4 months if you pass the means test. Free consult. (909) 915-0181.',
  h1: 'Chapter 7 bankruptcy lawyer',
}

export const CH13_SEO = {
  title: 'Chapter 13 Bankruptcy Lawyer | Inland Empire',
  description:
    'A 3–5 year plan to catch up the mortgage, stop foreclosure, and keep property. Free consult. (909) 915-0181.',
  h1: 'Chapter 13 bankruptcy lawyer',
}

type ServiceSeoCopy = { title: string; h1: string; description: string }

export const PI_SERVICE_SEO: Record<string, { en: ServiceSeoCopy; es: ServiceSeoCopy }> = {
  'car-accidents': {
    en: {
      title: 'Car Accident Lawyer | Inland Empire | Lombera Law',
      h1: 'Car accident lawyer in the Inland Empire',
      description:
        'Car accident claims in San Bernardino and Riverside County. No fee unless we win. Redlands (909) 915-0181 · Palm Springs (760) 835-9353.',
    },
    es: {
      title: 'Abogado de Accidentes de Auto | Inland Empire | Lombera Law',
      h1: 'Abogado de accidentes de auto en el Inland Empire',
      description:
        'Reclamos por accidentes de auto en el condado de San Bernardino y Riverside. Sin honorarios a menos que ganemos. Redlands (909) 915-0181 · Palm Springs (760) 835-9353.',
    },
  },
  'truck-accidents': {
    en: {
      title: 'Truck Accident Lawyer | Inland Empire | Lombera Law',
      h1: 'Truck accident lawyer in the Inland Empire',
      description:
        'Commercial truck and 18-wheeler crashes across the Inland Empire. Federal safety rules, black box data, corporate defendants. No fee unless we win.',
    },
    es: {
      title: 'Abogado de Accidentes de Camión | Inland Empire | Lombera Law',
      h1: 'Abogado de accidentes de camión en el Inland Empire',
      description:
        'Choques con camiones comerciales en el Inland Empire. Reglas federales de seguridad y demandados corporativos. Sin honorarios a menos que ganemos.',
    },
  },
  'motorcycle-accidents': {
    en: {
      title: 'Motorcycle Accident Lawyer | Inland Empire | Lombera Law',
      h1: 'Motorcycle accident lawyer in the Inland Empire',
      description:
        'Motorcycle crash claims in San Bernardino and Riverside County. Bias against riders — we build cases for trial. Free consult.',
    },
    es: {
      title: 'Abogado de Accidentes de Motocicleta | Inland Empire | Lombera Law',
      h1: 'Abogado de accidentes de motocicleta en el Inland Empire',
      description:
        'Reclamos por choques de motocicleta en el Inland Empire. Preparamos cada caso para juicio. Consulta gratuita.',
    },
  },
  'rideshare-accidents': {
    en: {
      title: 'Rideshare Accident Lawyer | Inland Empire | Lombera Law',
      h1: 'Rideshare accident lawyer in the Inland Empire',
      description:
        'Uber and Lyft crash claims — layered commercial insurance, app status at impact. No fee unless we win.',
    },
    es: {
      title: 'Abogado de Accidentes de Rideshare | Inland Empire | Lombera Law',
      h1: 'Abogado de accidentes de rideshare en el Inland Empire',
      description:
        'Choques de Uber y Lyft — cobertura comercial en capas. Sin honorarios a menos que ganemos.',
    },
  },
  'dog-bites': {
    en: {
      title: 'Dog Bite Lawyer | Inland Empire | Lombera Law',
      h1: 'Dog bite lawyer in the Inland Empire',
      description:
        'Dog bite and animal attack claims in San Bernardino and Riverside County. Medical bills, scarring, liability. Free consult.',
    },
    es: {
      title: 'Abogado de Mordeduras de Perro | Inland Empire | Lombera Law',
      h1: 'Abogado de mordeduras de perro en el Inland Empire',
      description:
        'Reclamos por mordeduras de perro en el Inland Empire. Facturas médicas y responsabilidad del dueño. Consulta gratuita.',
    },
  },
  'wrongful-death': {
    en: {
      title: 'Wrongful Death Lawyer | Inland Empire | Lombera Law',
      h1: 'Wrongful death lawyer in the Inland Empire',
      description:
        'Wrongful death claims for families across the Inland Empire and Coachella Valley. Accountability and financial stability after loss.',
    },
    es: {
      title: 'Abogado de Muerte Injusta | Inland Empire | Lombera Law',
      h1: 'Abogado de muerte injusta en el Inland Empire',
      description:
        'Reclamos por muerte injusta para familias del Inland Empire y el Valle de Coachella. Consulta gratuita.',
    },
  },
  'traumatic-brain-injury': {
    en: {
      title: 'Brain Injury Lawyer | Inland Empire | Lombera Law',
      h1: 'Traumatic brain injury lawyer in the Inland Empire',
      description:
        'TBI claims with neurologists and neuropsychologists. Document the full scope — not just the ER bill. Free consult.',
    },
    es: {
      title: 'Abogado de Lesión Cerebral | Inland Empire | Lombera Law',
      h1: 'Abogado de lesión cerebral traumática en el Inland Empire',
      description:
        'Casos de lesión cerebral con expertos médicos. Documentamos el alcance real de la lesión. Consulta gratuita.',
    },
  },
  'spinal-cord-injury': {
    en: {
      title: 'Spinal Cord Injury Lawyer | Inland Empire | Lombera Law',
      h1: 'Spinal cord injury lawyer in the Inland Empire',
      description:
        'Spinal cord injury cases with lifetime care planning. Wheelchairs, home modifications, ongoing treatment. No fee unless we win.',
    },
    es: {
      title: 'Abogado de Lesión de Médula Espinal | Inland Empire | Lombera Law',
      h1: 'Abogado de lesión de médula espinal en el Inland Empire',
      description:
        'Casos de lesión de médula espinal con planificación de cuidado de por vida. Sin honorarios a menos que ganemos.',
    },
  },
}

const OFFICE_CITY_SLUGS = new Set(['redlands', 'palm-springs'])

const REDLANDS_OFFICE = '2068 Orange Tree Lane Suite 220, Redlands, CA 92374 — (909) 915-0181'
const PALM_SPRINGS_OFFICE = '1276 N Palm Canyon Dr #107, Palm Springs, CA 92262 — (760) 835-9353'

export function practiceCitySeo(
  practiceSlug: 'personal-injury' | 'bankruptcy',
  citySlug: string,
  cityName: string,
  locale: Locale,
): ServiceSeoCopy {
  const isOfficeCity = OFFICE_CITY_SLUGS.has(citySlug)
  const nearestOffice =
    citySlug === 'redlands' || ['san-bernardino', 'fontana', 'riverside', 'moreno-valley', 'highland', 'beaumont', 'hemet', 'colton', 'rancho-cucamonga'].includes(citySlug)
      ? REDLANDS_OFFICE
      : PALM_SPRINGS_OFFICE

  if (practiceSlug === 'personal-injury') {
    if (locale === 'es') {
      return {
        title: `${cityName} Abogado de Lesiones Personales | Lombera Law`,
        h1: `Abogado de lesiones personales en ${cityName}`,
        description: isOfficeCity
          ? citySlug === 'redlands'
            ? `Lesiones personales en ${cityName}. Oficina: ${REDLANDS_OFFICE}. Sin honorarios a menos que ganemos.`
            : `Lesiones personales en ${cityName}. Oficina: ${PALM_SPRINGS_OFFICE}. Sin honorarios a menos que ganemos.`
          : `Lesiones personales en ${cityName}. Oficina más cercana: ${nearestOffice}. Sin honorarios a menos que ganemos.`,
      }
    }
    return {
      title: `${cityName} Personal Injury Lawyer | Lombera Law`,
      h1: `${cityName} personal injury lawyer`,
      description: isOfficeCity
        ? citySlug === 'redlands'
          ? `Personal injury claims in ${cityName}. Office: ${REDLANDS_OFFICE}. No fee unless we win.`
          : `Personal injury claims in ${cityName}. Office: ${PALM_SPRINGS_OFFICE}. No fee unless we win.`
        : `Personal injury claims in ${cityName}. Nearest office: ${nearestOffice}. No fee unless we win.`,
    }
  }

  if (locale === 'es') {
    return {
      title: `${cityName} Abogado de Bancarrota | Lombera Law`,
      h1: `Abogado de bancarrota en ${cityName}`,
      description: isOfficeCity
        ? citySlug === 'redlands'
          ? `Capítulo 7 y 13 en ${cityName}. Oficina: ${REDLANDS_OFFICE}. Consulta gratuita.`
          : `Capítulo 7 y 13 en ${cityName}. Oficina: ${PALM_SPRINGS_OFFICE}. Consulta gratuita.`
        : `Capítulo 7 y 13 en ${cityName}. Oficina más cercana: ${nearestOffice}. Consulta gratuita.`,
    }
  }
  return {
    title: `${cityName} Bankruptcy Lawyer | Lombera Law`,
    h1: `${cityName} bankruptcy lawyer`,
    description: isOfficeCity
      ? citySlug === 'redlands'
        ? `Chapter 7 and Chapter 13 in ${cityName}. Office: ${REDLANDS_OFFICE}. Free consult.`
        : `Chapter 7 and Chapter 13 in ${cityName}. Office: ${PALM_SPRINGS_OFFICE}. Free consult.`
      : `Chapter 7 and Chapter 13 in ${cityName}. Nearest office: ${nearestOffice}. Free consult.`,
  }
}

export function getPiServiceSeo(serviceSlug: string, locale: Locale): ServiceSeoCopy | null {
  const entry = PI_SERVICE_SEO[serviceSlug]
  if (!entry) return null
  return entry[locale]
}

export const ABOUT_SEO = {
  title: 'Edgar P. Lombera | Redlands & Palm Springs Lawyer',
  description:
    'Founding attorney. California Bar 259393. Admitted December 8, 2008. Bilingual personal injury and bankruptcy. Redlands and Palm Springs.',
  h1: 'Edgar P. Lombera',
  open:
    'Edgar P. Lombera is the founding attorney of the Law Offices of Edgar Lombera. He was admitted to the State Bar of California on December 8, 2008 (Bar No. 259393) and has more than 15 years helping Inland Empire and Coachella Valley families with injury claims and bankruptcy. You speak with Edgar, in English or Spanish.',
}
