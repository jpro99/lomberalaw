import { getPayload, PayloadUnavailableError } from './payload'
import type { Locale } from './payload'
import { STATIC_OFFICES } from './staticData'

type OfficeDoc = {
  id: string | number
  name: string
  phone: string
  address: string
  hours?: string
}

export async function getOffices(_locale?: Locale): Promise<OfficeDoc[]> {
  try {
    const payload = await getPayload()
    const res = await payload.find({ collection: 'offices', limit: 5, sort: 'name' })
    return res.docs as OfficeDoc[]
  } catch (e) {
    if (e instanceof PayloadUnavailableError) {
      return STATIC_OFFICES.map((o) => ({ ...o }))
    }
    throw e
  }
}

export async function getPrimaryPhone(): Promise<string | undefined> {
  const offices = await getOffices()
  return offices[0]?.phone
}
