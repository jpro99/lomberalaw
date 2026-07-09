import type { CollectionConfig } from 'payload'

export const CTAVariants: CollectionConfig = {
  slug: 'cta-variants',
  admin: { useAsTitle: 'label' },
  fields: [
    { name: 'label', type: 'text', required: true, admin: { description: 'Internal name, e.g. "PI Hero — Urgent"' } },
    { name: 'headline', type: 'text', localized: true },
    { name: 'buttonText', type: 'text', localized: true },
    {
      name: 'action',
      type: 'select',
      required: true,
      options: [
        { label: 'Call office phone', value: 'call' },
        { label: 'Open contact form', value: 'form' },
        { label: 'Link to page', value: 'link' },
      ],
    },
    { name: 'linkHref', type: 'text', admin: { condition: (data) => data.action === 'link' } },
  ],
}
