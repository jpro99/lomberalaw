import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { seoField } from '../fields/seo'

export const Services: CollectionConfig = {
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
