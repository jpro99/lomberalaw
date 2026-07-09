import { getPayload } from './payload'
import type { Locale } from './payload'

export async function getGeneralFaqs(locale: Locale) {
  const payload = await getPayload()
  const res = await payload.find({
    collection: 'faqs',
    where: { showOnGeneralFAQPage: { equals: true } },
    locale,
    limit: 100,
  })
  return res.docs
}
