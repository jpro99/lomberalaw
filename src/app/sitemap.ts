import type { MetadataRoute } from 'next'
import { getPayload } from '@/lib/payload'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://lomberalaw.com'
const PRACTICE_SLUGS = ['personal-injury', 'bankruptcy'] as const

// Next.js App Router native sitemap -- served automatically at
// /sitemap.xml. Bilingual: every URL gets both its English
// (unprefixed) and Spanish (/es-prefixed) form, matching the
// locale routing in src/middleware.ts.
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payload = await getPayload()
  const entries: MetadataRoute.Sitemap = []

  const addPath = (path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency']) => {
    entries.push({ url: `${SITE_URL}${path}`, priority, changeFrequency })
    entries.push({ url: `${SITE_URL}/es${path}`, priority, changeFrequency })
  }

  // Static / core pages
  addPath('', 1.0, 'weekly')
  addPath('/contact', 0.8, 'monthly')
  addPath('/faq', 0.7, 'monthly')
  addPath('/locations', 0.8, 'monthly')
  addPath('/reviews', 0.6, 'monthly')
  addPath('/attorney/edgar-lombera', 0.7, 'monthly')
  addPath('/resources', 0.6, 'weekly')

  for (const practice of PRACTICE_SLUGS) {
    addPath(`/${practice}`, 0.9, 'monthly')
  }

  // Services (under both practice areas they belong to)
  const services = await payload.find({ collection: 'services', limit: 100, depth: 1 })
  for (const service of services.docs) {
    const practiceArea = service.practiceArea as { slug?: string } | null
    const practiceSlug = practiceArea?.slug
    if (practiceSlug && (practiceSlug === 'personal-injury' || practiceSlug === 'bankruptcy')) {
      addPath(`/${practiceSlug}/${service.slug}`, 0.8, 'monthly')
    }
  }

  // City hubs
  const cities = await payload.find({ collection: 'cities', limit: 100 })
  for (const city of cities.docs) {
    addPath(`/locations/${city.slug}`, 0.7, 'monthly')
  }

  // Money pages (Service x City -- tier-1 combinations only)
  const moneyPages = await payload.find({ collection: 'service-city-pages', limit: 200, depth: 2 })
  for (const page of moneyPages.docs) {
    const service = page.service as { slug?: string; practiceArea?: { slug?: string } } | null
    const city = page.city as { slug?: string } | null
    const practiceSlug = service?.practiceArea?.slug
    if (practiceSlug && service?.slug && city?.slug) {
      addPath(`/${practiceSlug}/${service.slug}/${city.slug}`, 0.9, 'monthly')
    }
  }

  // Resource posts
  const posts = await payload.find({ collection: 'posts', limit: 200 })
  for (const post of posts.docs) {
    addPath(`/resources/${post.slug}`, 0.6, 'monthly')
  }

  return entries
}
