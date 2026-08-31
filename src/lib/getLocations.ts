import { getPayload, PayloadUnavailableError } from './payload'
import type { Locale } from './payload'

type PracticeSlug = 'personal-injury' | 'bankruptcy'

const STATIC_CITY_DATA: Record<string, { name: string; county: string }> = {
  riverside: { name: 'Riverside', county: 'Riverside County' },
  'san-bernardino': { name: 'San Bernardino', county: 'San Bernardino County' },
  redlands: { name: 'Redlands', county: 'San Bernardino County' },
  'moreno-valley': { name: 'Moreno Valley', county: 'Riverside County' },
  fontana: { name: 'Fontana', county: 'San Bernardino County' },
  ontario: { name: 'Ontario', county: 'San Bernardino County' },
  'palm-springs': { name: 'Palm Springs', county: 'Riverside County' },
  'palm-desert': { name: 'Palm Desert', county: 'Riverside County' },
  indio: { name: 'Indio', county: 'Riverside County' },
  'cathedral-city': { name: 'Cathedral City', county: 'Riverside County' },
  'la-quinta': { name: 'La Quinta', county: 'Riverside County' },
  'rancho-mirage': { name: 'Rancho Mirage', county: 'Riverside County' },
  rialto: { name: 'Rialto', county: 'San Bernardino County' },
  highland: { name: 'Highland', county: 'San Bernardino County' },
  'big-bear-lake': { name: 'Big Bear Lake', county: 'San Bernardino County' },
  beaumont: { name: 'Beaumont', county: 'Riverside County' },
  hemet: { name: 'Hemet', county: 'Riverside County' },
  colton: { name: 'Colton', county: 'San Bernardino County' },
  'desert-hot-springs': { name: 'Desert Hot Springs', county: 'Riverside County' },
  'rancho-cucamonga': { name: 'Rancho Cucamonga', county: 'San Bernardino County' },
}

function staticCities() {
  return Object.entries(STATIC_CITY_DATA).map(([slug, data]) => ({
    id: slug,
    slug,
    name: data.name,
    county: data.county,
  }))
}

export async function getMoneyPage(
  practiceSlug: PracticeSlug,
  serviceSlug: string,
  citySlug: string,
  locale: Locale,
) {
  try {
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
  } catch (e) {
    if (e instanceof PayloadUnavailableError) return null
    throw e
  }
}

export async function getCityHub(citySlug: string, locale: Locale) {
  try {
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
  } catch (e) {
    if (e instanceof PayloadUnavailableError) {
      const city = STATIC_CITY_DATA[citySlug]
      if (!city) return null
      return {
        city: { id: citySlug, slug: citySlug, name: city.name, county: city.county },
        services: [],
      }
    }
    throw e
  }
}

export async function getAllCities(_locale: Locale) {
  try {
    const payload = await getPayload()
    const res = await payload.find({ collection: 'cities', locale: _locale, limit: 50, sort: 'name' })
    return res.docs
  } catch (e) {
    if (e instanceof PayloadUnavailableError) return staticCities()
    throw e
  }
}
