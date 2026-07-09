import type { CollectionConfig } from 'payload'

export const Redirects: CollectionConfig = {
  slug: 'redirects',
  admin: {
    useAsTitle: 'from',
    description: 'Legacy URL -> canonical URL. Checked by middleware on every request that misses a real route. No redeploy needed to add one.',
  },
  fields: [
    { name: 'from', type: 'text', required: true, unique: true, admin: { description: 'e.g. "/san-bernardino-personal-injury-attorney/"' } },
    { name: 'to', type: 'text', required: true, admin: { description: 'e.g. "/personal-injury/car-accidents/san-bernardino/"' } },
    {
      name: 'type',
      type: 'select',
      required: true,
      defaultValue: '301',
      options: ['301', '302'],
    },
  ],
}
