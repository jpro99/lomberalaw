import { getPayload } from './payload'
import type { Locale } from './payload'

export async function getAllPosts(locale: Locale) {
  const payload = await getPayload()
  const res = await payload.find({ collection: 'posts', locale, limit: 50, sort: '-publishedAt' })
  return res.docs
}

export async function getPostBySlug(slug: string, locale: Locale) {
  const payload = await getPayload()
  const res = await payload.find({
    collection: 'posts',
    where: { slug: { equals: slug } },
    locale,
    depth: 2,
    limit: 1,
  })
  return res.docs[0] || null
}
