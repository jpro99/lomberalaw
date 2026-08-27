import type { Locale } from './payload'
import { STATIC_OFFICES } from './staticData'
import { OFFICE_HOURS_EN, OFFICE_HOURS_ES } from './nap'

type OfficeDoc = {
  id: string | number
  name: string
  phone: string
  address: string
  hours?: string
}

/** Static NAP — no Payload round-trip on marketing pages. */
export function getOffices(locale?: Locale): Promise<OfficeDoc[]> {
  const hours = locale === 'es' ? OFFICE_HOURS_ES : OFFICE_HOURS_EN
  return Promise.resolve(
    STATIC_OFFICES.map((o) => ({
      id: o.id,
      name: o.name,
      phone: o.phone,
      address: o.address,
      hours,
    })),
  )
}

export async function getPrimaryPhone(): Promise<string | undefined> {
  return STATIC_OFFICES[0]?.phone
}
