import type { MetadataRoute } from 'next'
import { getPayload, PayloadUnavailableError } from '@/lib/payload'
import {
  STATIC_BK_SERVICES,
  STATIC_CITY_SLUGS,
  STATIC_PI_SERVICES,
  STATIC_TIER1_MONEY_PAGES,
  SITE_URL,
} from '@/lib/staticData'

function addPath(
  entries: MetadataRoute.Sitemap,
  path: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'],
) {
  entries.push({ url: `${SITE_URL}${path}`, priority, changeFrequency })
  entries.push({ url: `${SITE_URL}/es${path}`, priority, changeFrequency })
}

function staticSitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = []

  addPath(entries, '', 1.0, 'weekly')
  addPath(entries, '/contact', 0.8, 'monthly')
  addPath(entries, '/about-us', 0.7, 'monthly')
  addPath(entries, '/frequently-asked-questions', 0.7, 'monthly')
  addPath(entries, '/testimonials', 0.6, 'monthly')
  addPath(entries, '/locations', 0.8, 'monthly')
  addPath(entries, '/resources', 0.6, 'weekly')

  for (const practice of ['personal-injury', 'bankruptcy'] as const) {
    addPath(entries, `/${practice}`, 0.9, 'monthly')
  }

  for (const service of STATIC_PI_SERVICES) {
    addPath(entries, `/personal-injury/${service}`, 0.8, 'monthly')
  }
  for (const service of STATIC_BK_SERVICES) {
    addPath(entries, `/bankruptcy/${service}`, 0.8, 'monthly')
  }

  for (const city of STATIC_CITY_SLUGS) {
    addPath(entries, `/personal-injury/${city}`, 0.7, 'monthly')
    addPath(entries, `/bankruptcy/${city}`, 0.7, 'monthly')
    addPath(entries, `/locations/${city}`, 0.7, 'monthly')
  }

  for (const page of STATIC_TIER1_MONEY_PAGES) {
    addPath(entries, `/${page.practice}/${page.service}/${page.city}`, 0.9, 'monthly')
  }

  // Spanish WP path aliases (canonical content lives on /es/* internal routes)
  const esAliases = [
    '/es/inicio',
    '/es/lesiones-personales',
    '/es/bancarrota',
    '/es/contacta-con-nosotros',
    '/es/preguntas-frecuentes',
    '/es/testimonios',
  ]
  for (const path of esAliases) {
    entries.push({ url: `${SITE_URL}${path}`, priority: 0.8, changeFrequency: 'monthly' })
  }

  return entries
}

export const dynamic = 'force-dynamic'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const payload = await getPayload()
    const entries: MetadataRoute.Sitemap = []

    const addPathDynamic = (
      path: string,
      priority: number,
      changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'],
    ) => addPath(entries, path, priority, changeFrequency)

    addPathDynamic('', 1.0, 'weekly')
    addPathDynamic('/contact', 0.8, 'monthly')
    addPathDynamic('/about-us', 0.7, 'monthly')
    addPathDynamic('/frequently-asked-questions', 0.7, 'monthly')
    addPathDynamic('/testimonials', 0.6, 'monthly')
    addPathDynamic('/locations', 0.8, 'monthly')
    addPathDynamic('/resources', 0.6, 'weekly')

    for (const practice of ['personal-injury', 'bankruptcy'] as const) {
      addPathDynamic(`/${practice}`, 0.9, 'monthly')
    }

    const services = await payload.find({ collection: 'services', limit: 100, depth: 1 })
    for (const service of services.docs) {
      const practiceArea = service.practiceArea as { slug?: string } | null
      const practiceSlug = practiceArea?.slug
      if (practiceSlug === 'personal-injury' || practiceSlug === 'bankruptcy') {
        addPathDynamic(`/${practiceSlug}/${service.slug}`, 0.8, 'monthly')
      }
    }

    const cities = await payload.find({ collection: 'cities', limit: 100 })
    for (const city of cities.docs) {
      addPathDynamic(`/personal-injury/${city.slug}`, 0.7, 'monthly')
      addPathDynamic(`/bankruptcy/${city.slug}`, 0.7, 'monthly')
      addPathDynamic(`/locations/${city.slug}`, 0.7, 'monthly')
    }

    const moneyPages = await payload.find({ collection: 'service-city-pages', limit: 200, depth: 2 })
    for (const page of moneyPages.docs) {
      const service = page.service as { slug?: string; practiceArea?: { slug?: string } } | null
      const city = page.city as { slug?: string } | null
      const practiceSlug = service?.practiceArea?.slug
      if (practiceSlug && service?.slug && city?.slug) {
        addPathDynamic(`/${practiceSlug}/${service.slug}/${city.slug}`, 0.9, 'monthly')
      }
    }

    const posts = await payload.find({ collection: 'posts', limit: 200 })
    for (const post of posts.docs) {
      addPathDynamic(`/resources/${post.slug}`, 0.6, 'monthly')
    }

    return entries
  } catch (e) {
    if (e instanceof PayloadUnavailableError) return staticSitemap()
    throw e
  }
}
