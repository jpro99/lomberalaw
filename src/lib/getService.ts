import { getPayload } from './payload'
import type { Locale } from './payload'

export async function getServiceBundle(
  practiceSlug: 'personal-injury' | 'bankruptcy',
  serviceSlug: string,
  locale: Locale,
) {
  const payload = await getPayload()

  const practiceAreaRes = await payload.find({
    collection: 'practice-areas',
    where: { slug: { equals: practiceSlug } },
    limit: 1,
  })
  const practiceArea = practiceAreaRes.docs[0]
  if (!practiceArea) return null

  const serviceRes = await payload.find({
    collection: 'services',
    where: { slug: { equals: serviceSlug }, practiceArea: { equals: practiceArea.id } },
    locale,
    depth: 1,
    limit: 1,
  })
  const service = serviceRes.docs[0]
  if (!service) return null

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
}
