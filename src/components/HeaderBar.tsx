'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Button } from './Button'

type NavLink = { href: string; label: string }

export function HeaderBar({
  locale,
  primaryPhone,
  links,
  callLabel,
}: {
  locale: 'en' | 'es'
  primaryPhone?: string
  links: NavLink[]
  callLabel: string
}) {
  const [open, setOpen] = useState(false)
  const homeHref = locale === 'en' ? '/' : '/es'
  const otherLocale = locale === 'en' ? 'es' : 'en'
  const otherLocaleHref = otherLocale === 'en' ? '/' : '/es'

  const localized = (href: string) => (locale === 'en' ? href : `/es${href}`)

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-panel/90 backdrop-blur-md">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-6 py-4">
        <Link href={homeHref} className="font-display text-2xl tracking-tight text-ink">
          Lombera Law
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {links.map((link) => (
            <Link
              key={link.href}
              href={localized(link.href)}
              className="font-body text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={otherLocaleHref}
            className="font-body text-sm font-medium text-ink-muted hover:text-ink"
            aria-label={otherLocale === 'es' ? 'Ver en español' : 'View in English'}
          >
            {otherLocale === 'es' ? 'ES' : 'EN'}
          </Link>
          {primaryPhone && (
            <span className="hidden sm:inline-flex">
              <Button href={`tel:${primaryPhone}`} variant="primary" size="md" trackAs="call">
                {callLabel}
              </Button>
            </span>
          )}
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-line text-ink md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span aria-hidden className="flex flex-col gap-1.5">
              <span className={`block h-px w-5 bg-ink transition ${open ? 'translate-y-[3.5px] rotate-45' : ''}`} />
              <span className={`block h-px w-5 bg-ink transition ${open ? 'opacity-0' : ''}`} />
              <span className={`block h-px w-5 bg-ink transition ${open ? '-translate-y-[3.5px] -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div id="mobile-nav" className="border-t border-line bg-panel md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-4" aria-label="Mobile">
            {links.map((link) => (
              <Link
                key={link.href}
                href={localized(link.href)}
                className="py-3 font-body text-base font-medium text-ink"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            {primaryPhone && (
              <Button
                href={`tel:${primaryPhone}`}
                variant="primary"
                size="lg"
                className="mt-3 w-full"
                trackAs="call"
              >
                {callLabel}
              </Button>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
