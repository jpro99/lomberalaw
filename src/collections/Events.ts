import type { CollectionConfig } from 'payload'
import { isAdmin } from '../access/isAdmin'
import { allowAnonymousCreate } from '../access/allowAnonymousCreate'

// EVENT LOG.
// High-volume, cheap, disposable. This is analytics-shaped, not
// memory-shaped -- nothing here is "durable memory" on its own. It
// exists so the rule-based summarizer (src/lib/memory/summarize.ts)
// has raw material to turn into a reviewed Episode when a real
// pattern shows up. Do not query this table directly for retrieval;
// use getContactMemory() instead, which reads Episodes, not Events.
export const Events: CollectionConfig = {
  slug: 'events',
  admin: {
    useAsTitle: 'type',
    defaultColumns: ['type', 'path', 'contact', 'occurredAt'],
    description: 'Raw event log (analytics-shaped, high volume). Not a source of truth for retrieval -- see Episodes.',
  },
  access: {
    create: allowAnonymousCreate,
    read: isAdmin,
    update: isAdmin,
    delete: isAdmin,
  },
  fields: [
    {
      name: 'type',
      type: 'select',
      required: true,
      options: [
        'page_visit',
        'cta_click',
        'form_start',
        'form_abandon',
        'call',
        'sms',
        'chat_session',
        'booking_attempt',
        'booked_consult',
        'intake_milestone',
      ],
    },
    { name: 'path', type: 'text', admin: { description: 'Page path or flow identifier this event happened on/in.' } },
    {
      name: 'sessionId',
      type: 'text',
      admin: { description: 'Ties anonymous short-term-session events together before identity is known.' },
    },
    { name: 'contact', type: 'relationship', relationTo: 'contacts', admin: { description: 'Set once the session is identified; null before that.' } },
    {
      name: 'metadata',
      type: 'json',
      admin: { description: 'Small structured payload only -- e.g. { "service": "chapter-7", "city": "riverside" }. Not a place for free text.' },
    },
    { name: 'occurredAt', type: 'date', defaultValue: () => new Date().toISOString(), required: true },
  ],
}
