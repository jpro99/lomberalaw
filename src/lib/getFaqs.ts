import { getPayload, PayloadUnavailableError } from './payload'
import type { Locale } from './payload'

export async function getGeneralFaqs(_locale: Locale) {
  try {
    const payload = await getPayload()
    const res = await payload.find({
      collection: 'faqs',
      where: { showOnGeneralFAQPage: { equals: true } },
      locale: _locale,
      limit: 100,
    })
    return res.docs
  } catch (e) {
    if (e instanceof PayloadUnavailableError) return []
    throw e
  }
}
