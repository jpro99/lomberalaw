import type { Locale } from './payload'
import { SITE_URL } from './staticData'

/** English service slug → live Spanish URL segment under /es/lesiones-personales/ */
export const EN_TO_ES_PI_SERVICE: Record<string, string> = {
  'car-accidents': 'accidentes-de-auto',
  'truck-accidents': 'accidentes-de-camion',
  'motorcycle-accidents': 'accidentes-de-motocicleta',
  'rideshare-accidents': 'accidentes-de-rideshare',
  'wrongful-death': 'muerte-injusta',
  'dog-bites': 'mordedura-de-perro',
  'traumatic-brain-injury': 'lesion-cerebral',
  'spinal-cord-injury': 'lesiones-de-medula-espinal',
}

/** English service slug → live Spanish URL segment under /es/bancarrota/ */
export const EN_TO_ES_BK_SERVICE: Record<string, string> = {
  'chapter-7': 'bancarrota-capitulo-7',
  'chapter-13': 'bancarrota-capitulo-13',
  'foreclosure-defense': 'defensa-de-ejecucion-hipotecaria',
  'wage-garnishment': 'embargo-de-salario',
}

const ES_TO_EN_PI_SERVICE = Object.fromEntries(
  Object.entries(EN_TO_ES_PI_SERVICE).map(([en, es]) => [es, en]),
)

const ES_TO_EN_BK_SERVICE = Object.fromEntries(
  Object.entries(EN_TO_ES_BK_SERVICE).map(([en, es]) => [es, en]),
)

const HUB_PATH_MAP: Record<string, string> = {
  '/personal-injury': '/es/lesiones-personales',
  '/bankruptcy': '/es/bancarrota',
  '/about-us': '/es/sobre-nosotros',
  '/contact': '/es/contacta-con-nosotros',
  '/testimonials': '/es/testimonios',
  '/frequently-asked-questions': '/es/preguntas-frecuentes',
  '/blog': '/es/blog-espanol',
  '/privacy-policy': '/es/politica-de-privacidad',
  '/terms-of-service': '/es/terminos-de-servicio',
  '/': '/es/inicio',
}

function normalizePath(path: string) {
  const trimmed = path.replace(/\/+$/, '') || '/'
  return trimmed.startsWith('/') ? trimmed : `/${trimmed}`
}

function translatePracticeSegments(
  practice: 'personal-injury' | 'bankruptcy',
  segments: string[],
  toSpanish: boolean,
): string[] {
  const map = practice === 'personal-injury' ? (toSpanish ? EN_TO_ES_PI_SERVICE : ES_TO_EN_PI_SERVICE) : (toSpanish ? EN_TO_ES_BK_SERVICE : ES_TO_EN_BK_SERVICE)
  return segments.map((segment, index) => {
    if (index === 0) return map[segment] ?? segment
    return segment
  })
}

/** Convert an English internal path to the live Spanish canonical path. */
export function toSpanishPath(path: string): string {
  const normalized = normalizePath(path)
  if (HUB_PATH_MAP[normalized]) return HUB_PATH_MAP[normalized]

  const parts = normalized.split('/').filter(Boolean)
  if (parts[0] === 'personal-injury') {
    const rest = translatePracticeSegments('personal-injury', parts.slice(1), true)
    return `/es/lesiones-personales${rest.length ? `/${rest.join('/')}` : ''}`
  }
  if (parts[0] === 'bankruptcy') {
    const rest = translatePracticeSegments('bankruptcy', parts.slice(1), true)
    return `/es/bancarrota${rest.length ? `/${rest.join('/')}` : ''}`
  }

  return `/es${normalized === '/' ? '' : normalized}`
}

/** Full canonical URL for a locale-aware path (English path input). */
export function localizedCanonicalUrl(path: string, locale: Locale): string {
  const normalized = normalizePath(path)
  const localized = locale === 'es' ? toSpanishPath(normalized) : normalized
  return localized === '/' ? `${SITE_URL}/` : `${SITE_URL}${localized}/`
}

export function practiceHubHref(locale: Locale, practice: 'personal-injury' | 'bankruptcy'): string {
  return locale === 'es'
    ? practice === 'personal-injury'
      ? '/es/lesiones-personales/'
      : '/es/bancarrota/'
    : `/${practice}/`
}

export function serviceHref(
  locale: Locale,
  practice: 'personal-injury' | 'bankruptcy',
  serviceSlug: string,
): string {
  const hub = practiceHubHref(locale, practice)
  if (locale === 'es') {
    const map = practice === 'personal-injury' ? EN_TO_ES_PI_SERVICE : EN_TO_ES_BK_SERVICE
    const esSlug = map[serviceSlug]
    if (!esSlug) return hub
    return `${hub}${esSlug}/`
  }
  return `${hub}${serviceSlug}/`
}

export function practiceCityHref(
  locale: Locale,
  practice: 'personal-injury' | 'bankruptcy',
  citySlug: string,
): string {
  return `${practiceHubHref(locale, practice)}${citySlug}/`
}

/** Rewrite live Spanish PI/BK URLs to internal /es/{practice}/… routes. */
export function rewriteSpanishPracticePath(pathname: string): string | null {
  if (pathname.startsWith('/es/lesiones-personales/')) {
    const rest = pathname.slice('/es/lesiones-personales/'.length).replace(/\/$/, '')
    const segments = rest ? rest.split('/') : []
    const translated = translatePracticeSegments('personal-injury', segments, false)
    return `/es/personal-injury/${translated.join('/')}`.replace(/\/$/, '') + '/'
  }
  if (pathname.startsWith('/es/bancarrota/')) {
    const rest = pathname.slice('/es/bancarrota/'.length).replace(/\/$/, '')
    const segments = rest ? rest.split('/') : []
    const translated = translatePracticeSegments('bankruptcy', segments, false)
    return `/es/bankruptcy/${translated.join('/')}`.replace(/\/$/, '') + '/'
  }
  return null
}

export function hasSpanishServiceSlug(
  practice: 'personal-injury' | 'bankruptcy',
  serviceSlug: string,
): boolean {
  const map = practice === 'personal-injury' ? EN_TO_ES_PI_SERVICE : EN_TO_ES_BK_SERVICE
  return serviceSlug in map
}

/** English paths that should appear in the Spanish sitemap via toSpanishPath. */
export function collectSpanishSitemapEnglishPaths(options?: {
  piServices?: string[]
  bkServices?: string[]
  cities?: string[]
  moneyPages?: { practice: 'personal-injury' | 'bankruptcy'; service: string; city: string }[]
}): string[] {
  const paths = new Set<string>([
    '/',
    '/about-us',
    '/contact',
    '/frequently-asked-questions',
    '/testimonials',
    '/blog',
    '/privacy-policy',
    '/terms-of-service',
    '/personal-injury',
    '/bankruptcy',
  ])

  const piServices = options?.piServices ?? Object.keys(EN_TO_ES_PI_SERVICE)
  const bkServices = options?.bkServices ?? Object.keys(EN_TO_ES_BK_SERVICE)
  const cities = options?.cities ?? []

  for (const service of piServices) {
    paths.add(`/personal-injury/${service}`)
  }
  for (const service of bkServices) {
    paths.add(`/bankruptcy/${service}`)
  }
  for (const city of cities) {
    paths.add(`/personal-injury/${city}`)
    paths.add(`/bankruptcy/${city}`)
  }
  for (const page of options?.moneyPages ?? []) {
    paths.add(`/${page.practice}/${page.service}/${page.city}`)
  }

  return [...paths]
}

export function toSpanishSitemapUrl(englishPath: string): string {
  const esPath = toSpanishPath(englishPath)
  if (esPath.includes('/es/personal-injury') || esPath.includes('/es/bankruptcy')) {
    throw new Error(`Spanish sitemap must not emit English slug path: ${esPath}`)
  }
  return esPath === '/' ? `${SITE_URL}/` : `${SITE_URL}${esPath}/`
}
