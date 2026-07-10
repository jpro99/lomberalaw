import type { CollectionConfig } from 'payload'
import { revalidateAfterChange, revalidateAfterDelete } from '../hooks/revalidate'
import { lexicalEditor } from '@payloadcms/richtext-lexical'

export const FAQs: CollectionConfig = {
  hooks: { afterChange: [revalidateAfterChange], afterDelete: [revalidateAfterDelete] },
  slug: 'faqs',
  admin: { useAsTitle: 'question' },
  fields: [
    { name: 'question', type: 'text', required: true, localized: true },
    { name: 'answer', type: 'richText', editor: lexicalEditor(), required: true, localized: true },
    { name: 'services', type: 'relationship', relationTo: 'services', hasMany: true },
    { name: 'cities', type: 'relationship', relationTo: 'cities', hasMany: true },
    {
      name: 'showOnGeneralFAQPage',
      type: 'checkbox',
      defaultValue: false,
      admin: { description: 'Also list this on the site-wide /faq/ hub, not just its linked service/city pages.' },
    },
  ],
}
