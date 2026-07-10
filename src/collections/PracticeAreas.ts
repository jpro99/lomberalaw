import type { CollectionConfig } from 'payload'
import { revalidateAfterChange, revalidateAfterDelete } from '../hooks/revalidate'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { seoField } from '../fields/seo'

export const PracticeAreas: CollectionConfig = {
  hooks: { afterChange: [revalidateAfterChange], afterDelete: [revalidateAfterDelete] },
  slug: 'practice-areas',
  admin: { useAsTitle: 'name', defaultColumns: ['name', 'slug', 'updatedAt'] },
  fields: [
    { name: 'name', type: 'text', required: true, localized: true },
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      admin: { description: 'URL segment, e.g. "personal-injury". Not localized — the URL structure stays stable across locales.' },
    },
    { name: 'intro', type: 'textarea', localized: true },
    { name: 'body', type: 'richText', editor: lexicalEditor(), localized: true },
    {
      name: 'heroImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'heroCTA',
      type: 'relationship',
      relationTo: 'cta-variants',
      admin: { description: "Which CTA variant renders in this hub's hero. Defaults to the site-wide primary CTA if blank." },
    },
    seoField,
  ],
}
