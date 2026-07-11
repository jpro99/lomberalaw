import { withPayload } from '@payloadcms/next/withPayload'
import { legacyRedirects } from './src/lib/legacyRedirects.mjs'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      // Exact store hostname — wildcard patterns have been unreliable
      // with next/image + Vercel Blob in production.
      { protocol: 'https', hostname: 'b2mmyv6bmksqmvtb.public.blob.vercel-storage.com' },
      { protocol: 'https', hostname: '*.public.blob.vercel-storage.com' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  // Legacy URL -> new-site URL redirects. Handled here, not via a
  // database check in middleware -- Next.js evaluates this list once
  // at build time with zero per-request cost, which matters on a
  // site where speed is priority one. A middleware DB lookup on
  // every single request (including the ~99% that never need a
  // redirect) would work but would slow down the entire site to
  // serve a feature only old inbound links actually use.
  //
  // IMPORTANT: the Redirects collection in /admin exists for staff
  // visibility of this same list, not as a live-editable source --
  // editing an entry there does NOT change site behavior. To add or
  // change a redirect, edit src/lib/legacyRedirects.ts and redeploy.
  // (See the note in src/collections/Redirects.ts for the same
  // caveat, so it's not a surprise wherever someone encounters it.)
  async redirects() {
    return [
      {
        source: '/:city-personal-injury-attorney',
        destination: '/personal-injury/car-accidents/:city',
        permanent: true,
      },
      ...legacyRedirects.map((r) => ({
        source: r.from,
        destination: r.to,
        permanent: true,
      })),
    ]
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
