import { getPayload, PayloadUnavailableError } from './payload'
import type { Locale } from './payload'
import { getPiServiceSeo, getBkServiceSeo } from './seo'

const PRACTICE_NAMES = {
  'personal-injury': { en: 'Personal Injury', es: 'Lesiones Personales' },
  bankruptcy: { en: 'Bankruptcy', es: 'Bancarrota' },
} as const

function staticServiceBundle(
  practiceSlug: 'personal-injury' | 'bankruptcy',
  serviceSlug: string,
  locale: Locale,
) {
  const locked =
    practiceSlug === 'personal-injury'
      ? getPiServiceSeo(serviceSlug, locale)
      : getBkServiceSeo(serviceSlug, locale)
  return {
    practiceArea: {
      id: practiceSlug,
      slug: practiceSlug,
      name: PRACTICE_NAMES[practiceSlug][locale],
    },
    service: {
      id: serviceSlug,
      slug: serviceSlug,
      title: locked?.h1 || serviceSlug.replace(/-/g, ' '),
      summary: locked?.description || '',
      body: null,
      seo: locked ? { metaTitle: locked.title, metaDescription: locked.description } : null,
    },
    faqs: [],
    siblingServices: [],
    testimonials: [],
  }
}

export async function getServiceBundle(
  practiceSlug: 'personal-injury' | 'bankruptcy',
  serviceSlug: string,
  locale: Locale,
) {
  try {
    const payload = await getPayload()

    const practiceAreaRes = await payload.find({
      collection: 'practice-areas',
      where: { slug: { equals: practiceSlug } },
      limit: 1,
    })
    const practiceArea = practiceAreaRes.docs[0]
    if (!practiceArea) return staticServiceBundle(practiceSlug, serviceSlug, locale)

    const serviceRes = await payload.find({
      collection: 'services',
      where: { slug: { equals: serviceSlug }, practiceArea: { equals: practiceArea.id } },
      locale,
      depth: 1,
      limit: 1,
    })
    const service = serviceRes.docs[0]
    if (!service) return staticServiceBundle(practiceSlug, serviceSlug, locale)

    const [siblingServices, testimonials, faqsRes] = await Promise.all([
      payload.find({
        collection: 'services',
        where: { practiceArea: { equals: practiceArea.id }, slug: { not_equals: serviceSlug } },
        locale,
        sort: 'displayOrder',
        limit: 10,
      }),
      payload.find({
        collection: 'testimonials',
        where: { practiceArea: { equals: practiceArea.id } },
        locale,
        limit: 3,
      }),
      payload.find({
        collection: 'faqs',
        where: { services: { contains: service.id } },
        locale,
        limit: 10,
      }),
    ])

    return {
      practiceArea,
      service,
      faqs: faqsRes.docs,
      siblingServices: siblingServices.docs,
      testimonials: testimonials.docs,
    }
  } catch (e) {
    if (e instanceof PayloadUnavailableError) return staticServiceBundle(practiceSlug, serviceSlug, locale)
    throw e
  }
}
