import { getPayload } from '../payload'
import type { LogEventInput } from './types'

function contactRelationId(contactId?: string | number): number | undefined {
  if (contactId === undefined) return undefined
  if (typeof contactId === 'number') return contactId
  const parsed = Number(contactId)
  return Number.isFinite(parsed) ? parsed : undefined
}

export async function logEvent(input: LogEventInput) {
  const payload = await getPayload()
  await payload.create({
    collection: 'events',
    data: {
      type: input.type,
      path: input.path,
      sessionId: input.sessionId,
      contact: contactRelationId(input.contactId),
      metadata: input.metadata || {},
      occurredAt: new Date().toISOString(),
    },
  })
}
