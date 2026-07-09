import { withPayload } from '@payloadcms/next/withPayload'

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '*.public.blob.vercel-storage.com' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  // Legacy URL -> canonical URL redirects also live in the Redirects
  // Payload collection (editor-managed, no redeploy required). This
  // block is reserved for structural/one-time redirects only, e.g.
  // the old flat pattern -> the new nested pattern at the route level.
  async redirects() {
    return [
      {
        source: '/:city-personal-injury-attorney',
        destination: '/personal-injury/car-accidents/:city',
        permanent: true,
      },
    ]
  },
}

export default withPayload(nextConfig, { devBundleServerPackages: false })
