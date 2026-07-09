import type { CollectionConfig } from 'payload'

export const Cities: CollectionConfig = {
  slug: 'cities',
  admin: { useAsTitle: 'name', defaultColumns: ['name', 'county', 'slug'] },
  fields: [
    { name: 'name', type: 'text', required: true, localized: true },
    { name: 'slug', type: 'text', required: true, unique: true },
    { name: 'county', type: 'select', options: ['San Bernardino County', 'Riverside County'], required: true },
    {
      name: 'servingOffice',
      type: 'relationship',
      relationTo: 'offices',
      admin: { description: 'Which office (Redlands or Palm Springs) serves this city — drives phone number + office card on every page for this city.' },
    },
    {
      name: 'courthouse',
      type: 'text',
      localized: true,
      admin: { description: 'e.g. "Riverside County Superior Court — Riverside Division (4050 Main Street)". Edited once, inherited by every page for this city.' },
    },
    { name: 'hospitals', type: 'array', fields: [{ name: 'name', type: 'text' }] },
    { name: 'highways', type: 'array', fields: [{ name: 'name', type: 'text' }] },
    { name: 'geo', type: 'point' },
    {
      name: 'nearbyCities',
      type: 'relationship',
      relationTo: 'cities',
      hasMany: true,
      admin: { description: 'Powers "nearby cities" internal linking on this city\'s pages. Keep to 3-5 genuinely nearby cities.' },
    },
    { name: 'localIntro', type: 'textarea', localized: true, admin: { description: 'Short local-flavor paragraph reused across this city\'s money pages.' } },
  ],
}
