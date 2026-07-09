import { getPayload } from '../payload'
import type { LogEventInput } from './types'

export async function logEvent(input: LogEventInput) {
  const payload = await getPayload()
  await payload.create({
    collection: 'events',
    data: {
      type: input.type,
      path: input.path,
      sessionId: input.sessionId,
      contact: input.contactId,
      metadata: input.metadata || {},
      occurredAt: new Date().toISOString(),
    },
  })
}
