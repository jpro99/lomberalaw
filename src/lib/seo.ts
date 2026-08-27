import type { Metadata } from 'next'
import type { Locale } from './payload'
import { toSpanishPath } from './spanishPaths'
import { SITE_URL } from './staticData'
import { ABOUT_COPY, CONTACT_COPY, serviceSeo } from './serviceBodyCopy'

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

export function contactSeo(locale: Locale) {
  const copy = CONTACT_COPY[locale]
  return { title: copy.title, h1: copy.h1, description: copy.description }
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

type ServiceSeoCopy = { title: string; h1: string; description: string }

export function getBkServiceSeo(serviceSlug: string, locale: Locale): ServiceSeoCopy | null {
  return serviceSeo('bankruptcy', serviceSlug, locale)
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
  return serviceSeo('personal-injury', serviceSlug, locale)
}

export function aboutSeo(locale: Locale) {
  const copy = ABOUT_COPY[locale]
  return { title: copy.title, h1: copy.h1, description: copy.description }
}

/** @deprecated Use aboutSeo(locale) */
export const ABOUT_SEO = {
  title: ABOUT_COPY.en.title,
  description: ABOUT_COPY.en.description,
  h1: ABOUT_COPY.en.h1,
  open: ABOUT_COPY.en.lead[0],
}
