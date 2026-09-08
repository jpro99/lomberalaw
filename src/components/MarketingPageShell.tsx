'use client'

import { usePathname } from 'next/navigation'
import { ContactForm } from '@/components/ContactForm'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { t } from '@/lib/dictionary'
import type { Locale } from '@/lib/payload'
import { cityPhone, cityTel, extractCitySlugFromPath, PRIMARY_PHONE, PRIMARY_TEL } from '@/lib/routing'

function isHomePath(pathname: string) {
  return pathname === '/' || pathname === '/es' || pathname === '/es/inicio'
}

function isPiPathWithDemotedPostCtaHeadings(pathname: string) {
  const normalized = pathname.replace(/\/$/, '')
  return (
    normalized === '/personal-injury/fontana' ||
    normalized === '/es/lesiones-personales/fontana' ||
    normalized === '/personal-injury/riverside' ||
    normalized === '/es/lesiones-personales/riverside' ||
    normalized === '/personal-injury/redlands' ||
    normalized === '/es/lesiones-personales/redlands' ||
    normalized === '/personal-injury/san-bernardino' ||
    normalized === '/es/lesiones-personales/san-bernardino' ||
    normalized === '/personal-injury/moreno-valley' ||
    normalized === '/es/lesiones-personales/moreno-valley' ||
    normalized === '/personal-injury/highland' ||
    normalized === '/es/lesiones-personales/highland' ||
    normalized === '/personal-injury/palm-springs' ||
    normalized === '/es/lesiones-personales/palm-springs' ||
    normalized === '/personal-injury/palm-desert' ||
    normalized === '/es/lesiones-personales/palm-desert' ||
    normalized === '/personal-injury/beaumont' ||
    normalized === '/es/lesiones-personales/beaumont'
  )
}

function skipChrome(pathname: string) {
  return /\/(contact|contacta-con-nosotros|thank-you|gracias)\/?$/.test(pathname)
}

export function MarketingPageChrome({
  locale,
  citySlug,
  showCall = true,
  formHeadingTag = 'h2',
}: {
  locale: Locale
  citySlug?: string
  showCall?: boolean
  formHeadingTag?: 'h2' | 'p'
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
        <ContactForm copy={copy.contact.form} locale={locale} headingTag={formHeadingTag} />
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

  const citySlug = extractCitySlugFromPath(pathname)
  const showCall = !isHomePath(pathname)

  return (
    <>
      {children}
      <MarketingPageChrome
        locale={locale}
        citySlug={citySlug}
        showCall={showCall}
        formHeadingTag={isPiPathWithDemotedPostCtaHeadings(pathname) ? 'p' : 'h2'}
      />
    </>
  )
}
