import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  admin: { useAsTitle: 'alt' },
  upload: {
    imageSizes: [
      { name: 'thumbnail', width: 400 },
      { name: 'card', width: 800 },
      { name: 'hero', width: 1600 },
    ],
    formatOptions: { format: 'webp', options: { quality: 80 } },
    mimeTypes: ['image/*'],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      required: true,
      localized: true,
      admin: { description: 'Required. Describe the image for screen readers and SEO.' },
    },
    {
      name: 'focalPoint',
      type: 'point',
      admin: { description: 'Optional — used for smart cropping on hero images.' },
    },
  ],
}
