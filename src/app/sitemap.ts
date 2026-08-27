import type { MetadataRoute } from 'next'
import { getPayload, PayloadUnavailableError } from '@/lib/payload'
import {
  STATIC_BK_SERVICES,
  STATIC_CITY_SLUGS,
  STATIC_PI_SERVICES,
  STATIC_TIER1_MONEY_PAGES,
  SITE_URL,
} from '@/lib/staticData'

/** Spanish hub URLs only — never /es/personal-injury or other English slugs under /es. */
const SPANISH_SITEMAP_PATHS = [
  '/es/inicio',
  '/es/lesiones-personales',
  '/es/bancarrota',
  '/es/sobre-nosotros',
  '/es/preguntas-frecuentes',
  '/es/testimonios',
  '/es/contacta-con-nosotros',
] as const

function addEnPath(
  entries: MetadataRoute.Sitemap,
  path: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'],
) {
  const url = path === '' || path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}/`
  entries.push({ url, priority, changeFrequency })
}

function addSpanishHubs(entries: MetadataRoute.Sitemap, priority = 0.8) {
  for (const path of SPANISH_SITEMAP_PATHS) {
    entries.push({
      url: `${SITE_URL}${path}/`,
      priority,
      changeFrequency: 'monthly',
    })
  }
}

function staticSitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  addEnPath(entries, '', 1.0, 'weekly')
  addEnPath(entries, '/contact', 0.8, 'monthly')
  addEnPath(entries, '/about-us', 0.7, 'monthly')
  addEnPath(entries, '/frequently-asked-questions', 0.7, 'monthly')
  addEnPath(entries, '/testimonials', 0.6, 'monthly')
  addEnPath(entries, '/blog', 0.6, 'weekly')
  addEnPath(entries, '/locations', 0.8, 'monthly')
  addEnPath(entries, '/privacy-policy', 0.3, 'yearly')
  addEnPath(entries, '/terms-of-service', 0.3, 'yearly')
  addEnPath(entries, '/locations/redlands-ca', 0.7, 'monthly')
  addEnPath(entries, '/locations/palm-springs', 0.7, 'monthly')

  for (const practice of ['personal-injury', 'bankruptcy'] as const) {
    addEnPath(entries, `/${practice}`, 0.9, 'monthly')
  }

  for (const service of STATIC_PI_SERVICES) {
    addEnPath(entries, `/personal-injury/${service}`, 0.8, 'monthly')
  }
  for (const service of STATIC_BK_SERVICES) {
    addEnPath(entries, `/bankruptcy/${service}`, 0.8, 'monthly')
  }

  for (const city of STATIC_CITY_SLUGS) {
    addEnPath(entries, `/personal-injury/${city}`, 0.7, 'monthly')
    addEnPath(entries, `/bankruptcy/${city}`, 0.7, 'monthly')
    addEnPath(entries, `/locations/${city}`, 0.7, 'monthly')
  }

  for (const page of STATIC_TIER1_MONEY_PAGES) {
    addEnPath(entries, `/${page.practice}/${page.service}/${page.city}`, 0.9, 'monthly')
  }

  addSpanishHubs(entries)

  return entries
}

export const dynamic = 'force-dynamic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const payload = await getPayload()
    const entries: MetadataRoute.Sitemap = []

    addEnPath(entries, '', 1.0, 'weekly')
    addEnPath(entries, '/contact', 0.8, 'monthly')
    addEnPath(entries, '/about-us', 0.7, 'monthly')
    addEnPath(entries, '/frequently-asked-questions', 0.7, 'monthly')
    addEnPath(entries, '/testimonials', 0.6, 'monthly')
    addEnPath(entries, '/blog', 0.6, 'weekly')
    addEnPath(entries, '/locations', 0.8, 'monthly')
    addEnPath(entries, '/privacy-policy', 0.3, 'yearly')
    addEnPath(entries, '/terms-of-service', 0.3, 'yearly')
    addEnPath(entries, '/locations/redlands-ca', 0.7, 'monthly')
    addEnPath(entries, '/locations/palm-springs', 0.7, 'monthly')

    for (const practice of ['personal-injury', 'bankruptcy'] as const) {
      addEnPath(entries, `/${practice}`, 0.9, 'monthly')
    }

    const services = await payload.find({ collection: 'services', limit: 100, depth: 1 })
    for (const service of services.docs) {
      const practiceArea = service.practiceArea as { slug?: string } | null
      const practiceSlug = practiceArea?.slug
      if (practiceSlug === 'personal-injury' || practiceSlug === 'bankruptcy') {
        addEnPath(entries, `/${practiceSlug}/${service.slug}`, 0.8, 'monthly')
      }
    }

    const cities = await payload.find({ collection: 'cities', limit: 100 })
    for (const city of cities.docs) {
      addEnPath(entries, `/personal-injury/${city.slug}`, 0.7, 'monthly')
      addEnPath(entries, `/bankruptcy/${city.slug}`, 0.7, 'monthly')
      addEnPath(entries, `/locations/${city.slug}`, 0.7, 'monthly')
    }

    const moneyPages = await payload.find({ collection: 'service-city-pages', limit: 200, depth: 2 })
    for (const page of moneyPages.docs) {
      const service = page.service as { slug?: string; practiceArea?: { slug?: string } } | null
      const city = page.city as { slug?: string } | null
      const practiceSlug = service?.practiceArea?.slug
      if (practiceSlug && service?.slug && city?.slug) {
        addEnPath(entries, `/${practiceSlug}/${service.slug}/${city.slug}`, 0.9, 'monthly')
      }
    }

    const posts = await payload.find({ collection: 'posts', limit: 200 })
    for (const post of posts.docs) {
      addEnPath(entries, `/blog/${post.slug}`, 0.6, 'monthly')
    }

    addSpanishHubs(entries)

    return entries
  } catch (e) {
    if (e instanceof PayloadUnavailableError) return staticSitemap()
    throw e
  }
}
