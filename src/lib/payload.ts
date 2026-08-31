import { getPayload as getPayloadInstance } from 'payload'
import config from '@payload-config'
import { isPayloadAvailable } from './payloadAvailable'

let cached: Awaited<ReturnType<typeof getPayloadInstance>> | null = null

export class PayloadUnavailableError extends Error {
  constructor() {
    super('Payload unavailable — DATABASE_URI or PAYLOAD_SECRET not configured')
    this.name = 'PayloadUnavailableError'
  }
}

export async function getPayload() {
  if (!isPayloadAvailable()) throw new PayloadUnavailableError()
  if (cached) return cached
  cached = await getPayloadInstance({ config })
  return cached
}

export type Locale = 'en' | 'es'
