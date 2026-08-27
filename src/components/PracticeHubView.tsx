import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Locale } from '@/lib/payload'
import { getPracticeAreaBundle } from '@/lib/getPracticeArea'
import { t } from '@/lib/dictionary'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbSchema, legalServiceSchema } from '@/lib/schema'
import { pageMetadata, PI_HUB_SEO, BK_HUB_SEO } from '@/lib/seo'
import { PI_SERVICES, BK_SERVICES } from '@/lib/routing'
import { hasSpanishServiceSlug, practiceHubHref, serviceHref } from '@/lib/spanishPaths'
import { OFFICES } from '@/lib/nap'

type Slug = 'personal-injury' | 'bankruptcy'

export async function getPracticeHubMetadata(slug: Slug, locale: Locale) {
  const seo = slug === 'personal-injury' ? PI_HUB_SEO : BK_HUB_SEO
  return pageMetadata({
    title: seo.title,
    description: seo.description,
    path: `/${slug}`,
    locale,
  })
}

export async function PracticeHubView({ slug, locale }: { slug: Slug; locale: Locale }) {
  const bundle = await getPracticeAreaBundle(slug, locale)
  if (!bundle) notFound()

  const allowed = slug === 'personal-injury' ? PI_SERVICES : BK_SERVICES
  const services = bundle.services
    .filter((s) => allowed.has(s.slug as string))
    .filter((s) => locale === 'en' || hasSpanishServiceSlug(slug, s.slug as string))
  const copy = t(locale)
  const seo = slug === 'personal-injury' ? PI_HUB_SEO : BK_HUB_SEO
  const practicePath = practiceHubHref(locale, slug)
  const homeHref = locale === 'en' ? '/' : '/es/inicio/'

  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: `https://lomberalaw.com${homeHref}` },
          { name: seo.h1, url: `https://lomberalaw.com${practicePath}` },
        ])}
      />
      <JsonLd
        data={legalServiceSchema({
          name: seo.h1,
          description: seo.open,
          url: `https://lomberalaw.com${practicePath}`,
          areaServed: ['Inland Empire', 'Coachella Valley', 'Riverside County', 'San Bernardino County'],
        })}
      />

      <section className="border-b border-line bg-panel py-12 md:py-16">
        <Container>
          <Breadcrumbs
            items={[
              { name: 'Home', href: homeHref },
              { name: slug === 'personal-injury' ? copy.nav.personalInjury : copy.nav.bankruptcy, href: practicePath },
            ]}
          />
          <h1 className="mt-4 font-display text-[2.5rem] leading-tight text-ink">{seo.h1}</h1>
          <p className="mt-4 max-w-2xl font-body text-sm leading-relaxed text-ink-soft">{seo.open}</p>
          <div className="mt-6">
            <Button href={locale === 'es' ? '/es/contacta-con-nosotros/' : '/contact/'} size="lg">
              {copy.home.heroCTA}
            </Button>
          </div>
        </Container>
      </section>

      {services.length > 0 && (
        <section className="py-12 md:py-16">
          <Container>
            <h2 className="font-display text-xl text-ink">
              {locale === 'es' ? 'Tipos de casos' : 'Case types'}
            </h2>
            <ul className="mt-6 grid gap-3 border-t border-line sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={serviceHref(locale, slug, service.slug as string)}
                    className="block border-b border-line py-4 font-body text-sm font-medium text-ink hover:text-gold"
                  >
                    {service.title as string}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {slug === 'bankruptcy' && (
        <section className="border-t border-line bg-stone py-10">
          <Container className="max-w-2xl">
            <p className="font-body text-xs leading-relaxed text-ink-muted">
              We are a debt relief agency. We help people file for bankruptcy relief under the Bankruptcy Code.
              Court filing fees are $338 for Chapter 7 and $313 for Chapter 13 (subject to change by the court).
            </p>
          </Container>
        </section>
      )}

      <section className="bg-navy py-10 text-white">
        <Container className="flex flex-wrap items-center justify-between gap-4">
          <p className="font-body text-sm">{copy.home.finalCTAHeadline}</p>
          <Button href={`tel:${OFFICES[0].tel}`} variant="onDark" size="md" trackAs="call">
            {OFFICES[0].phone}
          </Button>
        </Container>
      </section>
    </main>
  )
}
