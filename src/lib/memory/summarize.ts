import { getPayload } from '../payload'

// DETERMINISTIC RULES ONLY.
// This is the entire "learning" the system does on its own. Every
// rule below is a fixed, auditable pattern -- not an LLM deciding
// what's worth remembering. Every episode it writes starts with
// reviewed: false and createdBy: "system_rule", so nothing it
// produces is trusted by retrieval until a person confirms it.
//
// Run this as a scheduled job (Vercel Cron hitting a route that
// calls runSummarizationRules(), or a manual `npm run summarize`).
// It is NOT wired to run automatically on every request -- that
// would be the "uncontrolled autonomous learning" the architecture
// explicitly defers until review tooling has been used in practice.

const DAY_MS = 24 * 60 * 60 * 1000

async function alreadyHasRecentEpisode(payload: any, contactId: string | number, tag: string) {
  const existing = await payload.find({
    collection: 'episodes',
    where: {
      contact: { equals: contactId },
      tag: { equals: tag },
      updatedAt: { greater_than: new Date(Date.now() - 7 * DAY_MS).toISOString() },
    },
    limit: 1,
  })
  return existing.docs.length > 0
}

/**
 * Rule 1 -- repeated_interest
 * 3+ page_visit events to the same service/practice-area path within
 * 7 days, from an identified contact.
 */
async function ruleRepeatedInterest(payload: any, sinceDate: Date) {
  const events = await payload.find({
    collection: 'events',
    where: {
      type: { equals: 'page_visit' },
      contact: { exists: true },
      occurredAt: { greater_than: sinceDate.toISOString() },
    },
    limit: 1000,
  })

  const byContactAndPath = new Map<string, number>()
  for (const e of events.docs) {
    const key = `${e.contact}::${e.path}`
    byContactAndPath.set(key, (byContactAndPath.get(key) || 0) + 1)
  }

  for (const [key, count] of byContactAndPath.entries()) {
    if (count < 3) continue
    const [contactId, path] = key.split('::')
    if (!contactId) continue
    if (await alreadyHasRecentEpisode(payload, contactId, 'repeated_interest')) continue

    await payload.create({
      collection: 'episodes',
      data: {
        contact: contactId,
        tag: 'repeated_interest',
        summary: `Visited ${path} ${count}x in the last 7 days.`,
        createdBy: 'system_rule',
        reviewed: false,
      },
    })
  }
}

/**
 * Rule 2 -- form_abandon
 * form_start with no booked_consult from the same session within 1 hour.
 */
async function ruleFormAbandon(payload: any, sinceDate: Date) {
  const starts = await payload.find({
    collection: 'events',
    where: { type: { equals: 'form_start' }, occurredAt: { greater_than: sinceDate.toISOString() } },
    limit: 1000,
  })

  for (const start of starts.docs) {
    if (!start.contact || !start.sessionId) continue
    const oneHourLater = new Date(new Date(start.occurredAt).getTime() + 60 * 60 * 1000).toISOString()

    const completed = await payload.find({
      collection: 'events',
      where: {
        sessionId: { equals: start.sessionId },
        type: { equals: 'booked_consult' },
        occurredAt: { less_than: oneHourLater },
      },
      limit: 1,
    })
    if (completed.docs.length > 0) continue
    if (await alreadyHasRecentEpisode(payload, start.contact, 'form_abandon')) continue

    await payload.create({
      collection: 'episodes',
      data: {
        contact: start.contact,
        tag: 'form_abandon',
        summary: `Started the intake form on ${start.path || 'an unknown page'} and did not complete it.`,
        relatedEvents: [start.id],
        createdBy: 'system_rule',
        reviewed: false,
      },
    })
  }
}

/**
 * Rule 3 -- after_hours_request
 * booking_attempt or call event outside 8:30am-5:30pm local.
 */
async function ruleAfterHours(payload: any, sinceDate: Date) {
  const events = await payload.find({
    collection: 'events',
    where: {
      type: { in: ['booking_attempt', 'call'] },
      contact: { exists: true },
      occurredAt: { greater_than: sinceDate.toISOString() },
    },
    limit: 1000,
  })

  for (const e of events.docs) {
    const hour = new Date(e.occurredAt).getHours()
    const isAfterHours = hour < 8 || hour >= 18
    if (!isAfterHours) continue
    if (await alreadyHasRecentEpisode(payload, e.contact, 'after_hours_request')) continue

    await payload.create({
      collection: 'episodes',
      data: {
        contact: e.contact,
        tag: 'after_hours_request',
        summary: `Requested contact outside business hours (${new Date(e.occurredAt).toLocaleTimeString()}).`,
        relatedEvents: [e.id],
        createdBy: 'system_rule',
        reviewed: false,
      },
    })
  }
}

export async function runSummarizationRules(sinceDate: Date = new Date(Date.now() - 7 * DAY_MS)) {
  const payload = await getPayload()
  await ruleRepeatedInterest(payload, sinceDate)
  await ruleFormAbandon(payload, sinceDate)
  await ruleAfterHours(payload, sinceDate)
}
