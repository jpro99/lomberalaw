import path from 'path'
import { fileURLToPath } from 'url'
import { postgresAdapter } from '@payloadcms/db-postgres'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { vercelBlobStorage } from '@payloadcms/storage-vercel-blob'
import { buildConfig } from 'payload'

import { PracticeAreas } from './collections/PracticeAreas'
import { Services } from './collections/Services'
import { Cities } from './collections/Cities'
import { ServiceCityPages } from './collections/ServiceCityPages'
import { Attorneys } from './collections/Attorneys'
import { Testimonials } from './collections/Testimonials'
import { FAQs } from './collections/FAQs'
import { Posts } from './collections/Posts'
import { Redirects } from './collections/Redirects'
import { Media } from './collections/Media'
import { Users } from './collections/Users'
import { Offices } from './collections/Offices'
import { CTAVariants } from './collections/CTAVariants'
import { Contacts } from './collections/Contacts'
import { Events } from './collections/Events'
import { Episodes } from './collections/Episodes'

import { SiteSettings } from './globals/SiteSettings'
import { MainNavigation } from './globals/MainNavigation'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  // NOTE ON LOCALIZATION STRATEGY:
  // We use Payload's native field-level localization rather than
  // duplicate documents per language. A single "Riverside" City
  // record holds both an `en` and `es` value for every localized
  // field. This is what lets a City's courthouse/hospital data be
  // edited once and correctly reflected on both the English and
  // Spanish money pages that reference it -- editors never have
  // to keep two documents in sync by hand.
  localization: {
    locales: [
      { label: 'English', code: 'en' },
      { label: 'Español', code: 'es' },
    ],
    defaultLocale: 'en',
    fallback: true,
  },

  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },

  editor: lexicalEditor(),

  collections: [
    Users,
    Media,
    Offices,
    PracticeAreas,
    Services,
    Cities,
    ServiceCityPages,
    Attorneys,
    Testimonials,
    FAQs,
    Posts,
    CTAVariants,
    Redirects,
    Contacts,
    Events,
    Episodes,
  ],

  globals: [SiteSettings, MainNavigation],

  secret: process.env.PAYLOAD_SECRET || '',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },

  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || '',
    },
  }),

  plugins: [
    // Media assets served from Vercel Blob in all environments so
    // local dev, preview, and prod share one asset store and one
    // set of URLs -- no "works on my machine" image drift.
    vercelBlobStorage({
      collections: { media: true },
      token: process.env.BLOB_READ_WRITE_TOKEN || '',
    }),
  ],
})
