import type { GlobalConfig } from 'payload'
import { revalidateGlobalAfterChange } from '../hooks/revalidate'

export const SiteSettings: GlobalConfig = {
  hooks: { afterChange: [revalidateGlobalAfterChange] },
  slug: 'site-settings',
  admin: { description: 'Sitewide values referenced everywhere -- firm name, default meta, social links.' },
  fields: [
    { name: 'firmName', type: 'text', defaultValue: 'Law Offices of Edgar P. Lombera', localized: true },
    { name: 'defaultMetaTitle', type: 'text', localized: true },
    { name: 'defaultMetaDescription', type: 'textarea', localized: true },
    { name: 'defaultOgImage', type: 'upload', relationTo: 'media' },
    { name: 'googleReviewUrl', type: 'text' },
    { name: 'facebookUrl', type: 'text' },
  ],
}
