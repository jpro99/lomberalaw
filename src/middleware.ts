import { NextResponse, type NextRequest } from 'next/server'

// ROUTING STRATEGY:
// Public routes are defined once, under src/app/(frontend)/[locale]/...
// The [locale] segment is always "en" or "es" internally. But we do
// NOT want /en/ in the URL bar -- English is the default market and
// keeping it unprefixed preserves the existing site's URL equity.
//
// So: a request to /personal-injury/ is rewritten internally to
// /en/personal-injury/ (invisible to the visitor and to Google --
// the URL bar and canonical tag both stay /personal-injury/). A
// request to /es/personal-injury/ already matches the [locale]
// segment directly and passes through untouched.
//
// This keeps ONE route tree for both languages -- no duplicated
// page files -- while giving English the clean unprefixed URLs the
// brief asked for.

const PASSTHROUGH_PREFIXES = ['/admin', '/api', '/_next', '/favicon.ico', '/robots.txt', '/sitemap.xml', '/es']

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  const isPassthrough = PASSTHROUGH_PREFIXES.some(
    (p) => pathname === p || pathname.startsWith(`${p}/`),
  )
  if (isPassthrough) return NextResponse.next()

  const url = request.nextUrl.clone()
  url.pathname = `/en${pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: [
    /*
     * Match all paths except Next.js internals and static files.
     */
    '/((?!_next/static|_next/image|.*\\.(?:svg|png|jpg|jpeg|webp|avif|ico|css|js)$).*)',
  ],
}
