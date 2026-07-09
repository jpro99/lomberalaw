'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { logEventClient } from '@/lib/memory/logClient'

export function EventBeacon() {
  const pathname = usePathname()

  useEffect(() => {
    logEventClient({ type: 'page_visit', path: pathname })
    // Intentionally only on path change -- one event per page view.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

  return null
}
