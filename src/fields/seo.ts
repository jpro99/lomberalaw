import type { Field } from 'payload'

// Reused on every public-facing collection so metadata strategy is
// consistent site-wide: editors always get the same three controls
// (title override, description, indexing) rather than ad-hoc fields
// per collection that drift out of sync over time.
export const seoField: Field = {
  name: 'seo',
  type: 'group',
  label: 'SEO',
  localized: false,
  fields: [
    {
      name: 'metaTitle',
      type: 'text',
      localized: true,
      admin: { description: 'Falls back to the page title if left blank. Keep under 60 characters.' },
    },
    {
      name: 'metaDescription',
      type: 'textarea',
      localized: true,
      admin: { description: 'Keep under 155 characters.' },
    },
    {
      name: 'noIndex',
      type: 'checkbox',
      defaultValue: false,
      admin: { description: 'Rarely needed — hides the page from search engines.' },
    },
  ],
}
