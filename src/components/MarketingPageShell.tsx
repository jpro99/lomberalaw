'use client'

import { usePathname } from 'next/navigation'
import { ContactForm } from '@/components/ContactForm'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { t } from '@/lib/dictionary'
import type { Locale } from '@/lib/payload'
import { cityPhone, cityTel, isLiveCity, PRIMARY_PHONE, PRIMARY_TEL } from '@/lib/routing'

function extractCitySlug(pathname: string): string | undefined {
  const parts = pathname.replace(/\/$/, '').split('/').filter(Boolean)
  const offset = parts[0] === 'es' || parts[0] === 'en' ? 1 : 0
  const practice = parts[offset]
  const isPractice =
    practice === 'personal-injury' ||
    practice === 'bankruptcy' ||
    practice === 'lesiones-personales' ||
    practice === 'bancarrota'

  if (!isPractice) {
    if (parts[offset] === 'locations' && parts[offset + 1]) {
      let loc = parts[offset + 1]!
      if (loc === 'redlands-ca') loc = 'redlands'
      return isLiveCity(loc) ? loc : undefined
    }
    return undefined
  }

  const segment = parts[offset + 1]
  if (segment && isLiveCity(segment)) return segment
  const citySegment = parts[offset + 2]
  if (citySegment && isLiveCity(citySegment)) return citySegment
  return undefined
}

function isHomePath(pathname: string) {
  return pathname === '/' || pathname === '/es' || pathname === '/es/inicio'
}

function skipChrome(pathname: string) {
  return /\/(contact|contacta-con-nosotros|thank-you|gracias)\/?$/.test(pathname)
}

export function MarketingPageChrome({
  locale,
  citySlug,
  showCall = true,
}: {
  locale: Locale
  citySlug?: string
  showCall?: boolean
}) {
  const copy = t(locale)
  const phone = citySlug ? cityPhone(citySlug) : PRIMARY_PHONE
  const tel = citySlug ? cityTel(citySlug) : PRIMARY_TEL

  return (
    <section className="border-t border-line bg-panel py-12 md:py-14">
      <Container className="max-w-xl">
        {showCall && (
          <div className="mb-8">
            <Button href={`tel:${tel}`} variant="accent" size="lg" trackAs="call">
              {phone}
            </Button>
            <p className="mt-3 font-body text-sm text-ink-muted">
              {locale === 'es'
                ? 'Consulta gratuita en inglés o español.'
                : 'Free consultation in English or Spanish.'}
            </p>
          </div>
        )}
        <ContactForm copy={copy.contact.form} locale={locale} />
      </Container>
    </section>
  )
}

export function MarketingPageShell({
  locale,
  children,
}: {
  locale: Locale
  children: React.ReactNode
}) {
  const pathname = usePathname() || '/'
  if (skipChrome(pathname)) return <>{children}</>

  const citySlug = extractCitySlug(pathname)
  const showCall = !isHomePath(pathname)

  return (
    <>
      {children}
      <MarketingPageChrome locale={locale} citySlug={citySlug} showCall={showCall} />
    </>
  )
}
