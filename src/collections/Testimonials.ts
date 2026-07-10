import type { CollectionConfig } from 'payload'
import { revalidateAfterChange, revalidateAfterDelete } from '../hooks/revalidate'

export const Testimonials: CollectionConfig = {
  hooks: { afterChange: [revalidateAfterChange], afterDelete: [revalidateAfterDelete] },
  slug: 'testimonials',
  admin: { useAsTitle: 'author', defaultColumns: ['author', 'rating', 'practiceArea', 'city'] },
  fields: [
    { name: 'quote', type: 'textarea', required: true, localized: true },
    { name: 'author', type: 'text', required: true },
    { name: 'rating', type: 'number', min: 1, max: 5, defaultValue: 5 },
    { name: 'practiceArea', type: 'relationship', relationTo: 'practice-areas' },
    { name: 'city', type: 'relationship', relationTo: 'cities' },
    {
      name: 'source',
      type: 'select',
      options: ['Google', 'Facebook', 'Direct'],
      defaultValue: 'Google',
    },
    { name: 'featured', type: 'checkbox', defaultValue: false, admin: { description: 'Show on homepage.' } },
  ],
}
