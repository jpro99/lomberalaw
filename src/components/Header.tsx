import Link from 'next/link'
import { getPayload } from '@/lib/payload'
import { t } from '@/lib/dictionary'
import type { Locale } from '@/lib/payload'
import { Button } from './Button'

export async function Header({ locale }: { locale: Locale }) {
  const payload = await getPayload()
  const copy = t(locale)

  const offices = await payload.find({ collection: 'offices', limit: 1, sort: 'name' })
  const primaryPhone = offices.docs[0]?.phone as string | undefined

  const links = [
    { href: '/personal-injury', label: copy.nav.personalInjury },
    { href: '/bankruptcy', label: copy.nav.bankruptcy },
    { href: '/attorney/edgar-lombera', label: copy.nav.attorney },
    { href: '/contact', label: copy.nav.contact },
  ]

  const otherLocale = locale === 'en' ? 'es' : 'en'
  const otherLocaleHref = otherLocale === 'en' ? '/' : '/es'

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-panel/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
        <Link href={locale === 'en' ? '/' : '/es'} className="font-display text-lg font-semibold text-ink">
          Lombera Law
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <Link
              key={link.href}
              href={locale === 'en' ? link.href : `/es${link.href}`}
              className="font-body text-sm font-medium text-ink-soft transition-colors hover:text-ink"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href={otherLocaleHref}
            className="font-body text-sm font-medium text-ink-muted hover:text-ink"
            aria-label={otherLocale === 'es' ? 'Ver en español' : 'View in English'}
          >
            {otherLocale === 'es' ? 'ES' : 'EN'}
          </Link>
          {primaryPhone && (
            <Button href={`tel:${primaryPhone}`} variant="primary" size="md" trackAs="call">
              {copy.nav.callNow}
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
