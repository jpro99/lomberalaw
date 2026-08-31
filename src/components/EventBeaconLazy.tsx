'use client'

import dynamic from 'next/dynamic'

const EventBeacon = dynamic(
  () => import('@/components/EventBeacon').then((m) => m.EventBeacon),
  { ssr: false },
)

export function EventBeaconLazy() {
  return <EventBeacon />
}
