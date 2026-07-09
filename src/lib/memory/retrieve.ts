import { getPayload } from '../payload'
import type { Where } from 'payload'
import type { ContactMemorySnapshot } from './types'

// Selective retrieval, on purpose. This does NOT return every
// episode ever written about a contact -- it returns the profile
// plus at most `maxEpisodes` reviewed episodes, optionally filtered
// to relevant tags. Callers (a future chat/voice agent) should pass
// `relevantTags` for the current context rather than pulling
// everything and letting the prompt sort it out.
export async function getContactMemory(
  contactId: string | number,
  options: { relevantTags?: string[]; maxEpisodes?: number } = {},
): Promise<ContactMemorySnapshot | null> {
  const payload = await getPayload()
  const maxEpisodes = options.maxEpisodes ?? 5

  const contact = await payload.findByID({ collection: 'contacts', id: contactId }).catch(() => null)
  if (!contact) return null

  const episodeWhere: Where = {
    contact: { equals: contactId },
    reviewed: { equals: true }, // unreviewed episodes are never surfaced to retrieval
  }
  if (options.relevantTags?.length) {
    episodeWhere.tag = { in: options.relevantTags }
  }

  const episodes = await payload.find({
    collection: 'episodes',
    where: episodeWhere,
    limit: maxEpisodes,
    sort: '-updatedAt',
  })

  return {
    contactId,
    profile: {
      fullName: contact.fullName as string | undefined,
      languagePreference: contact.languagePreference as string | undefined,
      preferredContactMethod: contact.preferredContactMethod as string | undefined,
      intakeStatus: contact.intakeStatus as string | undefined,
      explicitPreferences: contact.explicitPreferences as string | undefined,
    },
    relevantEpisodes: episodes.docs.map((e) => ({
      summary: e.summary as string,
      tag: e.tag as string,
    })),
  }
}
