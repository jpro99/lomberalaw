import { withPayload } from '@payloadcms/next/withPayload'
import { legacyRedirects } from './src/lib/legacyRedirects.mjs'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'b2mmyv6bmksqmvtb.public.blob.vercel-storage.com' },
      { protocol: 'https', hostname: '*.public.blob.vercel-storage.com' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  async redirects() {
    return [
      // www → apex (canonicals are apex + trailing slash)
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.lomberalaw.com' }],
        destination: 'https://lomberalaw.com/:path*',
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
