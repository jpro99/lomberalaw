import type { CollectionConfig } from 'payload'

// Two documents live here at launch: Redlands and Palm Springs.
// Modeled as a collection (not a global) specifically so Cities
// can hold a relationship to "which office serves this city" --
// a global can't be a relationship target.
export const Offices: CollectionConfig = {
  slug: 'offices',
  admin: { useAsTitle: 'name' },
  fields: [
    { name: 'name', type: 'text', required: true, admin: { description: 'e.g. "Redlands Office"' } },
    { name: 'phone', type: 'text', required: true },
    { name: 'address', type: 'text', required: true },
    { name: 'geo', type: 'point' },
    { name: 'hours', type: 'textarea', localized: true },
    { name: 'mapEmbedUrl', type: 'text' },
  ],
}
