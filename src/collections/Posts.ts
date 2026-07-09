import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { seoField } from '../fields/seo'

export const Posts: CollectionConfig = {
  slug: 'posts',
  admin: { useAsTitle: 'title', defaultColumns: ['title', 'publishedAt'] },
  fields: [
    { name: 'title', type: 'text', required: true, localized: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'excerpt', type: 'textarea', localized: true },
    { name: 'coverImage', type: 'upload', relationTo: 'media' },
    { name: 'body', type: 'richText', editor: lexicalEditor(), localized: true },
    { name: 'author', type: 'relationship', relationTo: 'attorneys' },
    {
      name: 'relatedServices',
      type: 'relationship',
      relationTo: 'services',
      hasMany: true,
      required: true,
      admin: { description: 'Required — every post must link down to at least one money page. No dead-end content.' },
    },
    { name: 'publishedAt', type: 'date' },
    seoField,
  ],
}
