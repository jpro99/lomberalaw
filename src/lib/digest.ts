import { getPayload } from './payload'

// Builds and sends the evening digest described in the phone-system
// design doc (§13). Works off whatever data exists today -- right
// now that's web-form leads only, since the phone system isn't
// built yet. Once it is, calls flow into the same Contacts/Events
// collections and show up here automatically -- no changes needed
// to this file.

function startOfTodayISO(): string {
  const d = new Date()
  d.setHours(0, 0, 0, 0)
  return d.toISOString()
}

export async function buildAndSendDailyDigest(): Promise<{ sent: boolean; reason?: string; summary?: string }> {
  const notifyTo = process.env.CONTACT_NOTIFY_TO?.trim()
  if (!notifyTo) return { sent: false, reason: 'CONTACT_NOTIFY_TO is not set.' }
  if (!process.env.RESEND_API_KEY) return { sent: false, reason: 'RESEND_API_KEY is not set.' }

  const payload = await getPayload()
  const since = startOfTodayISO()
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://lomberalaw.com'

  const [contactsToday, eventsToday] = await Promise.all([
    payload.find({
      collection: 'contacts',
      where: { createdAt: { greater_than_equal: since } },
      limit: 100,
      sort: '-createdAt',
    }),
    payload.find({
      collection: 'events',
      where: { occurredAt: { greater_than_equal: since } },
      limit: 200,
    }),
  ])

  const urgentContacts = contactsToday.docs.filter((c) => c.urgencyTier === 'urgent')
  const caseMatchContacts = contactsToday.docs.filter((c) => Array.isArray(c.caseMatch) && c.caseMatch.length > 0)

  const eventCountByType: Record<string, number> = {}
  for (const ev of eventsToday.docs) {
    const type = ev.type as string
    eventCountByType[type] = (eventCountByType[type] || 0) + 1
  }

  const lines: string[] = []
  lines.push(`Lombera Law -- Daily Summary (${new Date().toLocaleDateString('en-US')})`)
  lines.push('')
  lines.push(`New inquiries today: ${contactsToday.docs.length}`)

  if (urgentContacts.length > 0) {
    lines.push('')
    lines.push(`⚠ Flagged as possibly urgent (${urgentContacts.length}) -- these are a rough keyword scan, not a real assessment:`)
    for (const c of urgentContacts) {
      lines.push(`  - ${c.fullName || '(no name)'} -- ${c.phone || c.email || '(no contact info)'}`)
    }
  }

  if (caseMatchContacts.length > 0) {
    lines.push('')
    lines.push(`Matches firm's priority case types (${caseMatchContacts.length}):`)
    for (const c of caseMatchContacts) {
      const tags = Array.isArray(c.caseMatch) ? c.caseMatch.join(', ') : ''
      lines.push(`  - ${c.fullName || '(no name)'} -- ${tags}`)
    }
  }

  if (contactsToday.docs.length > 0) {
    lines.push('')
    lines.push('How today\'s inquiries found us:')
    const sourceCounts: Record<string, number> = {}
    for (const c of contactsToday.docs) {
      const src = (c.referralSource as string) || 'not specified'
      sourceCounts[src] = (sourceCounts[src] || 0) + 1
    }
    for (const [src, count] of Object.entries(sourceCounts)) {
      lines.push(`  - ${src}: ${count}`)
    }
  }

  lines.push('')
  lines.push(`Site activity logged today: ${eventsToday.docs.length} events`)
  for (const [type, count] of Object.entries(eventCountByType)) {
    lines.push(`  - ${type}: ${count}`)
  }

  lines.push('')
  lines.push(`Full detail: ${siteUrl}/admin/collections/contacts`)
  lines.push('')
  lines.push(
    '(This digest currently covers website inquiries only -- once the phone system is built, calls will appear here too, same format.)',
  )

  const summary = lines.join('\n')

  await payload.sendEmail({
    to: notifyTo,
    subject: `Daily Summary -- ${contactsToday.docs.length} new inquir${contactsToday.docs.length === 1 ? 'y' : 'ies'}${urgentContacts.length > 0 ? ` (${urgentContacts.length} urgent)` : ''}`,
    text: summary,
  })

  return { sent: true, summary }
}
