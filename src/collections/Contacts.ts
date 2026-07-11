import type { CollectionConfig } from 'payload'
import { isAdmin } from '../access/isAdmin'

// STRUCTURED PROFILE MEMORY.
// Holds only facts that are either explicitly given by the person
// (name, phone, stated preference) or directly observable (which
// city/practice-area pages they came through). Nothing inferred or
// speculative belongs here -- that's what reviewed Episodes are for,
// and even those go through human review before they're trusted.
export const Contacts: CollectionConfig = {
  slug: 'contacts',
  admin: {
    useAsTitle: 'fullName',
    defaultColumns: ['fullName', 'phone', 'intakeStatus', 'languagePreference', 'updatedAt'],
    description: 'Structured profile memory. Only facts stated or directly observed -- never inferred.',
  },
  access: {
    create: () => true, // contact forms / intake create these before anyone is authenticated
    read: isAdmin,
    update: isAdmin,
    delete: isAdmin, // deletion tool required by the memory architecture -- staff can remove a contact and everything cascades via relatedEvents/episodes cleanup done manually or via a future job
  },
  fields: [
    { name: 'fullName', type: 'text' },
    { name: 'email', type: 'text' },
    { name: 'phone', type: 'text' },
    {
      name: 'preferredContactMethod',
      type: 'select',
      options: ['phone', 'sms', 'email'],
      admin: { description: 'Only set when the person has explicitly stated a preference.' },
    },
    { name: 'languagePreference', type: 'select', options: ['en', 'es'] },
    { name: 'city', type: 'relationship', relationTo: 'cities' },
    { name: 'practiceAreaInterest', type: 'relationship', relationTo: 'practice-areas', hasMany: true },
    {
      name: 'intakeStatus',
      type: 'select',
      defaultValue: 'new',
      options: ['new', 'contacted', 'consult_scheduled', 'consult_completed', 'client', 'declined'],
    },
    { name: 'priorConsultationStatus', type: 'checkbox', defaultValue: false },
    {
      name: 'explicitPreferences',
      type: 'textarea',
      admin: { description: 'Only what the person themselves stated -- e.g. "prefers text after 6pm." Not a place for staff impressions.' },
    },
    {
      name: 'source',
      type: 'select',
      options: ['website_form', 'call', 'chat', 'sms', 'referral'],
      admin: { description: 'Which channel created this record (how they reached us just now) -- not the same as referralSource below (how they originally discovered the firm).' },
    },
    {
      name: 'referralSource',
      type: 'select',
      options: [
        { label: 'Google / online search', value: 'search' },
        { label: 'Referral \u2014 friend or family', value: 'referral_personal' },
        { label: 'Referral \u2014 another attorney', value: 'referral_attorney' },
        { label: 'Google Maps / Business listing', value: 'maps' },
        { label: 'Social media', value: 'social' },
        { label: 'Saw the website directly', value: 'website' },
        { label: 'Other', value: 'other' },
      ],
      admin: { description: 'How they originally discovered the firm -- the actual marketing-attribution question. Asked on both the phone system and this form so the two data sources build one consistent picture.' },
    },
    {
      name: 'referralSourceDetail',
      type: 'text',
      admin: { description: 'Their own words, if given -- e.g. "my cousin Maria told me." Kept alongside the categorized referralSource above, not instead of it.' },
    },

    // --- Consent (TCPA / CA privacy) ---
    { name: 'smsConsent', type: 'checkbox', defaultValue: false },
    { name: 'smsConsentTimestamp', type: 'date', admin: { condition: (data) => Boolean(data.smsConsent) } },
    { name: 'marketingConsent', type: 'checkbox', defaultValue: false },
  ],
}
