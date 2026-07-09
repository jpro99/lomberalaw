'use client'

import type { LogEventInput } from './types'

// Fire-and-forget. Never blocks the UI, never throws to the caller.
// keepalive lets the request survive a page navigation.
export function logEventClient(input: LogEventInput) {
  try {
    fetch('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      keepalive: true,
      body: JSON.stringify({
        type: input.type,
        path: input.path ?? window.location.pathname,
        sessionId: input.sessionId,
        contact: input.contactId,
        metadata: input.metadata || {},
        occurredAt: new Date().toISOString(),
      }),
    }).catch(() => {})
  } catch {
    // Never let telemetry break the page.
  }
}
