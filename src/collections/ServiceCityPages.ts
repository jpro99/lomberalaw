import type { CollectionConfig } from 'payload'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { seoField } from '../fields/seo'

export const ServiceCityPages: CollectionConfig = {
  slug: 'service-city-pages',
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'service', 'city', 'tier'],
    description:
      'Only create a document here for a Service x City combination that earns a real, fully-localized page. Everything else should rely on the City hub instead of a thin duplicate page.',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      localized: true,
      admin: { description: 'Internal + H1 title, e.g. "Riverside Car Accident Lawyer".' },
    },
    { name: 'service', type: 'relationship', relationTo: 'services', required: true },
    { name: 'city', type: 'relationship', relationTo: 'cities', required: true },
    {
      name: 'tier',
      type: 'select',
      required: true,
      defaultValue: 'tier2',
      options: [
        { label: 'Tier 1 — full localized page', value: 'tier1' },
        { label: 'Tier 2 — lighter treatment', value: 'tier2' },
      ],
    },
    {
      name: 'localBody',
      type: 'richText',
      editor: lexicalEditor(),
      localized: true,
      admin: { description: "City-specific content ONLY -- courthouse, hospitals, highways pull automatically from the City record. Don't repeat them here." },
    },
    {
      name: 'testimonials',
      type: 'relationship',
      relationTo: 'testimonials',
      hasMany: true,
    },
    seoField,
  ],
}
