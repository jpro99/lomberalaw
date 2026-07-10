import type { CollectionConfig } from 'payload'
import { revalidateAfterChange, revalidateAfterDelete } from '../hooks/revalidate'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { seoField } from '../fields/seo'

export const Services: CollectionConfig = {
  hooks: { afterChange: [revalidateAfterChange], afterDelete: [revalidateAfterDelete] },
  slug: 'services',
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'practiceArea', 'slug'] },
  fields: [
    { name: 'title', type: 'text', required: true, localized: true },
    { name: 'slug', type: 'text', required: true, admin: { description: 'e.g. "car-accidents", "chapter-7". Not localized.' } },
    {
      name: 'practiceArea',
      type: 'relationship',
      relationTo: 'practice-areas',
      required: true,
      admin: { description: 'Determines the URL prefix: /personal-injury/[slug]/ or /bankruptcy/[slug]/.' },
    },
    { name: 'summary', type: 'textarea', localized: true, admin: { description: 'Used on hub cards and meta description fallback.' } },
    {
      name: 'displayOrder',
      type: 'number',
      defaultValue: 100,
      admin: { description: 'Lower numbers show first on the practice hub. Used to feature priority case types without depending on creation order.' },
    },
    { name: 'body', type: 'richText', editor: lexicalEditor(), localized: true },
    {
      name: 'faqs',
      type: 'relationship',
      relationTo: 'faqs',
      hasMany: true,
      admin: { description: 'FAQs surfaced on this service page and its child money pages, and used for FAQPage schema.' },
    },
    seoField,
  ],
}
