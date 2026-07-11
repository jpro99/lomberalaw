import type { CollectionConfig } from 'payload'

export const Redirects: CollectionConfig = {
  slug: 'redirects',
  admin: {
    useAsTitle: 'from',
    description:
      'Reference list for staff visibility only. The redirects that actually run live in src/lib/legacyRedirects.mjs and are applied by Next.js at build time (zero per-request cost) -- editing an entry here does NOT change site behavior. To add or change a real redirect, a developer needs to edit that file and redeploy.',
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
