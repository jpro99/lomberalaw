import { NextResponse, type NextRequest } from 'next/server'
import { rewriteSpanishPracticePath } from './lib/spanishPaths'

// Spanish live paths use translated slugs — rewrite to internal [locale] routes
// while keeping the URL bar on the live /es/* path.
const SPANISH_EXACT: Record<string, string> = {
  '/es/inicio': '/es',
  '/es/lesiones-personales': '/es/personal-injury',
  '/es/bancarrota': '/es/bankruptcy',
  '/es/sobre-nosotros': '/es/about-us',
  '/es/preguntas-frecuentes': '/es/frequently-asked-questions',
  '/es/testimonios': '/es/testimonials',
  '/es/contacta-con-nosotros': '/es/contact',
  '/es/blog-espanol': '/es/blog',
}

const SPANISH_PREFIX_HUB: [string, string][] = [
  ['/es/lesiones-personales', '/es/personal-injury'],
  ['/es/bancarrota', '/es/bankruptcy'],
]

const PASSTHROUGH = ['/admin', '/api', '/_next', '/favicon.ico', '/robots.txt', '/sitemap.xml']

export function middleware(request: NextRequest) {
  let { pathname } = request.nextUrl

  // Normalize: strip trailing slash for matching, re-add on rewrite
  const hasTrailing = pathname.endsWith('/') && pathname !== '/'
  const bare = hasTrailing ? pathname.slice(0, -1) : pathname

  // Spanish rewrites (before /es passthrough)
  if (bare.startsWith('/es')) {
    for (const [from, to] of Object.entries(SPANISH_EXACT)) {
      if (bare === from) {
        const url = request.nextUrl.clone()
        url.pathname = to + (hasTrailing || to === '/es' ? '/' : '')
        return NextResponse.rewrite(url)
      }
    }
    for (const [from, to] of SPANISH_PREFIX_HUB) {
      if (bare === from) {
        const url = request.nextUrl.clone()
        url.pathname = `${to}/`
        return NextResponse.rewrite(url)
      }
    }
    const rewritten = rewriteSpanishPracticePath(pathname.endsWith('/') ? pathname : `${pathname}/`)
    if (rewritten) {
      const url = request.nextUrl.clone()
      url.pathname = rewritten
      return NextResponse.rewrite(url)
    }
    // Other /es/* paths pass through to [locale] segment
    return NextResponse.next()
  }

  if (PASSTHROUGH.some((p) => pathname === p || pathname.startsWith(`${p}/`))) {
    return NextResponse.next()
  }

  // English unprefixed → internal /en/*
  const url = request.nextUrl.clone()
  url.pathname = `/en${pathname}`
  return NextResponse.rewrite(url)
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|.*\\.(?:svg|png|jpg|jpeg|webp|avif|ico|css|js)$).*)'],
}
