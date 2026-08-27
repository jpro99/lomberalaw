import Link from 'next/link'
import type { Locale } from '@/lib/payload'
import { OFFICES, OFFICE_HOURS_EN, OFFICE_HOURS_ES } from '@/lib/nap'
import { OFFICE_LOCATION_SEO, pageMetadata } from '@/lib/seo'
import { t } from '@/lib/dictionary'
import { Container } from '@/components/Container'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Button } from '@/components/Button'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'

type OfficeSlug = keyof typeof OFFICE_LOCATION_SEO

export function isOfficeLocationSlug(slug: string): slug is OfficeSlug {
  return slug in OFFICE_LOCATION_SEO
}

export function getOfficeLocationMetadata(slug: OfficeSlug, locale: Locale) {
  const seo = OFFICE_LOCATION_SEO[slug]
  return pageMetadata({
    title: seo.title,
    description: seo.description,
    path: `/locations/${slug}`,
    locale,
  })
}

export function OfficeLocationView({ slug, locale }: { slug: OfficeSlug; locale: Locale }) {
  const office = OFFICES.find((o) => o.locationSlug === slug)!
  const seo = OFFICE_LOCATION_SEO[slug]
  const copy = t(locale)
  const prefix = locale === 'en' ? '' : '/es'
  const homeHref = locale === 'en' ? '/' : '/es/inicio/'
  const path = `${prefix}/locations/${slug}/`

  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: `https://lomberalaw.com${homeHref}` },
          { name: office.addressLocality, url: `https://lomberalaw.com${path}` },
        ])}
      />

      <section className="border-b border-line bg-panel py-12 md:py-16">
        <Container>
          <Breadcrumbs
            items={[
              { name: 'Home', href: homeHref },
              { name: office.addressLocality, href: path },
            ]}
          />
          <h1 className="mt-4 max-w-3xl font-display text-[2rem] leading-tight text-ink md:text-[2.5rem]">
            {seo.h1}
          </h1>
          <p className="mt-4 max-w-2xl font-body text-sm leading-relaxed text-ink-soft">
            {locale === 'es'
              ? `Oficina de Lombera Law para lesiones personales y bancarrota. Consulta gratuita en inglés o español.`
              : `Lombera Law office for personal injury and bankruptcy. Free consultation in English or Spanish.`}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button href={`tel:${office.tel}`} size="lg" trackAs="call">
              {office.phone}
            </Button>
            <Button
              href={`https://maps.google.com/?q=${encodeURIComponent(`${office.streetAddress}, ${office.addressLocality}, ${office.addressRegion} ${office.postalCode}`)}`}
              variant="secondary"
              size="lg"
            >
              {locale === 'es' ? 'Cómo llegar' : 'Get directions'}
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="font-display text-xl text-ink">
              {locale === 'es' ? 'Áreas de práctica' : 'Practice areas'}
            </h2>
            <ul className="mt-4 space-y-3 font-body text-sm">
              <li>
                <Link
                  href={locale === 'es' ? '/es/lesiones-personales/' : '/personal-injury/'}
                  className="font-medium text-ink hover:text-gold"
                >
                  {copy.nav.personalInjury}
                </Link>
              </li>
              <li>
                <Link
                  href={locale === 'es' ? '/es/bancarrota/' : '/bankruptcy/'}
                  className="font-medium text-ink hover:text-gold"
                >
                  {copy.nav.bankruptcy}
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="font-display text-xl text-ink">
              {locale === 'es' ? 'Horario' : 'Hours'}
            </h2>
            <p className="mt-4 font-body text-sm leading-relaxed text-ink-soft whitespace-pre-line">
              {locale === 'es' ? OFFICE_HOURS_ES : OFFICE_HOURS_EN}
            </p>
          </div>
        </Container>
      </section>

      <section className="bg-navy py-10 text-white">
        <Container className="flex flex-wrap items-center justify-between gap-4">
          <p className="font-body text-sm">{copy.home.finalCTAHeadline}</p>
          <Button href={`tel:${office.tel}`} variant="onDark" size="md" trackAs="call">
            {office.phone}
          </Button>
        </Container>
      </section>
    </main>
  )
}
