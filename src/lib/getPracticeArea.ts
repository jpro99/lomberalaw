import { getPayload } from './payload'
import type { Locale } from './payload'

export async function getPracticeAreaBundle(slug: 'personal-injury' | 'bankruptcy', locale: Locale) {
  const payload = await getPayload()

  const practiceAreaRes = await payload.find({
    collection: 'practice-areas',
    where: { slug: { equals: slug } },
    locale,
    limit: 1,
  })
  const practiceArea = practiceAreaRes.docs[0]
  if (!practiceArea) return null

  const [services, testimonials] = await Promise.all([
    payload.find({
      collection: 'services',
      where: { practiceArea: { equals: practiceArea.id } },
      locale,
      limit: 20,
    }),
    payload.find({
      collection: 'testimonials',
      where: { practiceArea: { equals: practiceArea.id } },
      locale,
      limit: 6,
    }),
  ])

  return { practiceArea, services: services.docs, testimonials: testimonials.docs }
}
