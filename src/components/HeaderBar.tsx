'use client'

import Link from 'next/link'
import { useState } from 'react'
import { OFFICES } from '@/lib/nap'

type NavLink = { href: string; label: string }

export function HeaderBar({
  locale,
  links,
}: {
  locale: 'en' | 'es'
  links: NavLink[]
}) {
  const [open, setOpen] = useState(false)
  const homeHref = locale === 'en' ? '/' : '/es/inicio/'
  const otherLocaleHref = locale === 'en' ? '/es/inicio/' : '/'
  const localized = (href: string) => {
    if (locale === 'en') return href.endsWith('/') ? href : `${href}/`
    const esMap: Record<string, string> = {
      '/personal-injury': '/es/lesiones-personales/',
      '/bankruptcy': '/es/bancarrota/',
      '/about-us': '/es/sobre-nosotros/',
      '/contact': '/es/contacta-con-nosotros/',
      '/testimonials': '/es/testimonios/',
      '/blog': '/es/blog-espanol/',
      '/frequently-asked-questions': '/es/preguntas-frecuentes/',
    }
    const base = href.replace(/\/$/, '')
    return esMap[base] || `/es${href}`
  }

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-navy text-white">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between gap-3 px-4 md:px-6">
        <Link href={homeHref} className="shrink-0 font-display text-lg tracking-tight text-white md:text-xl">
          Lombera Law
        </Link>

        <nav className="hidden min-w-0 items-center gap-5 lg:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={localized(link.href)}
              className="whitespace-nowrap font-body text-xs font-semibold uppercase tracking-wide text-white/90 hover:text-gold"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Link
            href={otherLocaleHref}
            className="font-body text-xs font-semibold uppercase text-white/70 hover:text-white"
            aria-label={locale === 'en' ? 'Español' : 'English'}
          >
            {locale === 'en' ? 'ES' : 'EN'}
          </Link>
          <a
            href={`tel:${OFFICES[0].tel}`}
            className="hidden rounded-sm bg-gold px-3 py-1.5 font-body text-xs font-semibold text-navy hover:bg-gold-deep sm:inline-flex"
          >
            {OFFICES[0].phone}
          </a>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center border border-white/20 lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span aria-hidden className="flex flex-col gap-1">
              <span className={`block h-px w-4 bg-white transition ${open ? 'translate-y-[3px] rotate-45' : ''}`} />
              <span className={`block h-px w-4 bg-white transition ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-px w-4 bg-white transition ${open ? '-translate-y-[3px] -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-white/10 bg-navy lg:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col px-4 py-3" aria-label="Mobile">
            {links.map((link) => (
              <Link
                key={link.href}
                href={localized(link.href)}
                className="py-2.5 font-body text-sm font-medium text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <a href={`tel:${OFFICES[0].tel}`} className="mt-2 py-2 font-data text-sm text-gold">
              {OFFICES[0].phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
