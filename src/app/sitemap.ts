import type { MetadataRoute } from 'next'
import { getPayload, PayloadUnavailableError } from '@/lib/payload'
import { isBkService, isPiService, LIVE_CITY_SLUGS } from '@/lib/routing'
import {
  collectSpanishSitemapEnglishPaths,
  EN_TO_ES_BK_SERVICE,
  EN_TO_ES_PI_SERVICE,
  toSpanishSitemapUrl,
} from '@/lib/spanishPaths'
import {
  STATIC_BK_SERVICES,
  STATIC_CITY_SLUGS,
  STATIC_PI_SERVICES,
  STATIC_TIER1_MONEY_PAGES,
  SITE_URL,
} from '@/lib/staticData'

function addEnPath(
  entries: MetadataRoute.Sitemap,
  path: string,
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'],
) {
  const url = path === '' || path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}/`
  entries.push({ url, priority, changeFrequency })
}

function addSpanishPaths(
  entries: MetadataRoute.Sitemap,
  englishPaths: string[],
  priority: number,
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'],
) {
  for (const path of englishPaths) {
    entries.push({
      url: toSpanishSitemapUrl(path),
      priority,
      changeFrequency,
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

  addSpanishPaths(
    entries,
    collectSpanishSitemapEnglishPaths({
      piServices: Object.keys(EN_TO_ES_PI_SERVICE),
      bkServices: Object.keys(EN_TO_ES_BK_SERVICE),
      cities: [...LIVE_CITY_SLUGS],
    }),
    0.8,
    'monthly',
  )

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
    const piServices: string[] = []
    const bkServices: string[] = []
    for (const service of services.docs) {
      const practiceArea = service.practiceArea as { slug?: string } | null
      const practiceSlug = practiceArea?.slug
      const slug = service.slug as string
      if (practiceSlug === 'personal-injury') {
        if (!isPiService(slug)) continue
        piServices.push(slug)
        addEnPath(entries, `/personal-injury/${slug}`, 0.8, 'monthly')
      } else if (practiceSlug === 'bankruptcy') {
        if (!isBkService(slug)) continue
        bkServices.push(slug)
        addEnPath(entries, `/bankruptcy/${slug}`, 0.8, 'monthly')
      }
    }

    const cities = await payload.find({ collection: 'cities', limit: 100 })
    const liveCitySlugs: string[] = []
    for (const city of cities.docs) {
      const slug = city.slug as string
      if (LIVE_CITY_SLUGS.has(slug)) liveCitySlugs.push(slug)
      addEnPath(entries, `/personal-injury/${slug}`, 0.7, 'monthly')
      addEnPath(entries, `/bankruptcy/${slug}`, 0.7, 'monthly')
      addEnPath(entries, `/locations/${slug}`, 0.7, 'monthly')
    }

    const moneyPageRes = await payload.find({ collection: 'service-city-pages', limit: 200, depth: 2 })
    for (const page of moneyPageRes.docs) {
      const service = page.service as { slug?: string; practiceArea?: { slug?: string } } | null
      const city = page.city as { slug?: string } | null
      const practiceSlug = service?.practiceArea?.slug
      if (practiceSlug && service?.slug && city?.slug) {
        if (practiceSlug === 'personal-injury' && !isPiService(service.slug)) continue
        if (practiceSlug === 'bankruptcy' && !isBkService(service.slug)) continue
        addEnPath(entries, `/${practiceSlug}/${service.slug}/${city.slug}`, 0.9, 'monthly')
      }
    }

    const posts = await payload.find({ collection: 'posts', limit: 200 })
    for (const post of posts.docs) {
      addEnPath(entries, `/blog/${post.slug}`, 0.6, 'monthly')
    }

    addSpanishPaths(
      entries,
      collectSpanishSitemapEnglishPaths({
        piServices: piServices.filter((slug) => slug in EN_TO_ES_PI_SERVICE),
        bkServices: bkServices.filter((slug) => slug in EN_TO_ES_BK_SERVICE),
        cities: liveCitySlugs,
      }),
      0.8,
      'monthly',
    )

    return entries
  } catch (e) {
    if (e instanceof PayloadUnavailableError) return staticSitemap()
    throw e
  }
}
