import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { seoField } from '../fields/seo'

export const Attorneys: CollectionConfig = {
  slug: 'attorneys',
  admin: { useAsTitle: 'name' },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'photo', type: 'upload', relationTo: 'media' },
    { name: 'credentials', type: 'array', fields: [{ name: 'item', type: 'text' }] },
    { name: 'barNumber', type: 'text' },
    { name: 'yearsPracticing', type: 'number' },
    { name: 'bio', type: 'richText', editor: lexicalEditor(), localized: true },
    { name: 'languages', type: 'select', hasMany: true, options: ['English', 'Spanish'] },
    {
      name: 'services',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
      admin: { description: 'Which services this bio should be linked from.' },
    },
    seoField,
  ],
}
