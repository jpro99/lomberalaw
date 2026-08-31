import { getPayload, PayloadUnavailableError } from './payload'
import type { Locale } from './payload'

export async function getAllPosts(_locale: Locale) {
  try {
    const payload = await getPayload()
    const res = await payload.find({ collection: 'posts', locale: _locale, limit: 50, sort: '-publishedAt' })
    return res.docs
  } catch (e) {
    if (e instanceof PayloadUnavailableError) return []
    throw e
  }
}

export async function getPostBySlug(slug: string, locale: Locale) {
  try {
    const payload = await getPayload()
    const res = await payload.find({
      collection: 'posts',
      where: { slug: { equals: slug } },
      locale,
      depth: 2,
      limit: 1,
    })
    return res.docs[0] || null
  } catch (e) {
    if (e instanceof PayloadUnavailableError) return null
    throw e
  }
}
