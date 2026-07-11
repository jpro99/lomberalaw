/**
 * Resolve a Payload media URL for next/image.
 *
 * Production was serving CMS photos as relative `/api/media/file/...`
 * paths with spaces/commas in the filename. next/image's optimizer
 * double-encodes those and the image 404s — which is why the live
 * hero showed a broken frame with alt text.
 *
 * Prefer absolute https URLs (Vercel Blob). Fall back to a known
 * static public asset when the CMS URL is relative or missing.
 */
export function resolveMediaUrl(
  media: { url?: string | null; alt?: string | null } | null | undefined,
  fallback?: string,
): string | null {
  const url = media?.url?.trim()
  if (url?.startsWith('http://') || url?.startsWith('https://')) {
    return url
  }
  if (fallback) return fallback
  if (url?.startsWith('/')) return url
  return null
}

/** Clean static portrait shipped in /public — always works on Vercel. */
export const EDGAR_PHOTO_FALLBACK = '/edgar-lombera.jpg'
