import { getPayload } from './payload'
import type { Locale } from './payload'

type PracticeSlug = 'personal-injury' | 'bankruptcy'

// The dedicated Service x City money page -- only exists for tier-1
// combinations (see the local-SEO tier matrix). Returns null if this
// combo doesn't have a full page yet, in which case the route falls
// back to redirecting to the city hub instead of 404ing.
export async function getMoneyPage(
  practiceSlug: PracticeSlug,
  serviceSlug: string,
  citySlug: string,
  locale: Locale,
) {
  const payload = await getPayload()

  const serviceRes = await payload.find({
    collection: 'services',
    where: { slug: { equals: serviceSlug } },
    locale,
    depth: 1,
    limit: 1,
  })
  const service = serviceRes.docs[0]
  if (!service) return null

  const cityRes = await payload.find({
    collection: 'cities',
    where: { slug: { equals: citySlug } },
    locale,
    depth: 1,
    limit: 1,
  })
  const city = cityRes.docs[0]
  if (!city) return null

  const pageRes = await payload.find({
    collection: 'service-city-pages',
    where: { service: { equals: service.id }, city: { equals: city.id } },
    locale,
    depth: 1,
    limit: 1,
  })
  const page = pageRes.docs[0]
  if (!page) return null

  const practiceAreaRes = await payload.find({
    collection: 'practice-areas',
    where: { slug: { equals: practiceSlug } },
    locale,
    limit: 1,
  })

  return {
    page,
    service,
    city,
    practiceArea: practiceAreaRes.docs[0],
    testimonials: (page.testimonials as any[]) || [],
  }
}

// City hub -- every service available in a city, whether or not that
// combo has a dedicated tier-1 money page. Always exists for all 12
// cities.
export async function getCityHub(citySlug: string, locale: Locale) {
  const payload = await getPayload()

  const cityRes = await payload.find({
    collection: 'cities',
    where: { slug: { equals: citySlug } },
    locale,
    depth: 1,
    limit: 1,
  })
  const city = cityRes.docs[0]
  if (!city) return null

  const [allServices, moneyPages] = await Promise.all([
    payload.find({ collection: 'services', locale, limit: 20, depth: 1, sort: 'displayOrder' }),
    payload.find({
      collection: 'service-city-pages',
      where: { city: { equals: city.id } },
      locale,
      depth: 1,
      limit: 20,
    }),
  ])

  const moneyPageServiceIds = new Set(moneyPages.docs.map((p) => (p.service as any)?.id ?? p.service))

  return {
    city,
    services: allServices.docs.map((s) => ({
      ...s,
      hasMoneyPage: moneyPageServiceIds.has(s.id),
    })),
  }
}

export async function getAllCities(locale: Locale) {
  const payload = await getPayload()
  const res = await payload.find({ collection: 'cities', locale, limit: 50, sort: 'name' })
  return res.docs
}
