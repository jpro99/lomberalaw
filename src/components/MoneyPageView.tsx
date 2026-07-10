import Link from 'next/link'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { redirect } from 'next/navigation'
import type { Locale } from '@/lib/payload'
import { getMoneyPage } from '@/lib/getLocations'
import { t } from '@/lib/dictionary'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CityFactsCard } from '@/components/CityFactsCard'
import { TestimonialCard } from '@/components/TestimonialCard'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbSchema, legalServiceSchema } from '@/lib/schema'

type PracticeSlug = 'personal-injury' | 'bankruptcy'

export async function getMoneyPageMetadata(
  practiceSlug: PracticeSlug,
  serviceSlug: string,
  citySlug: string,
  locale: Locale,
) {
  const bundle = await getMoneyPage(practiceSlug, serviceSlug, citySlug, locale)
  if (!bundle) return {}
  return {
    title: bundle.page.seo?.metaTitle || `${bundle.page.title} | Lombera Law`,
    description: bundle.page.seo?.metaDescription,
  }
}

export async function MoneyPageView({
  practiceSlug,
  serviceSlug,
  citySlug,
  locale,
}: {
  practiceSlug: PracticeSlug
  serviceSlug: string
  citySlug: string
  locale: Locale
}) {
  const prefix = locale === 'en' ? '' : '/es'
  const bundle = await getMoneyPage(practiceSlug, serviceSlug, citySlug, locale)

  // No tier-1 page for this combo -- send them to the city hub instead
  // of a thin auto-generated page or a dead-end 404.
  if (!bundle) {
    redirect(`${prefix}/locations/${citySlug}`)
  }

  const { page, service, city, practiceArea, testimonials } = bundle
  const copy = t(locale)
  const canonicalUrl = `https://lomberalaw.com${prefix}/${practiceSlug}/${serviceSlug}/${citySlug}`

  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://lomberalaw.com' + (locale === 'es' ? '/es' : '') },
          { name: practiceArea?.name as string, url: `https://lomberalaw.com${prefix}/${practiceSlug}` },
          { name: service.title as string, url: `https://lomberalaw.com${prefix}/${practiceSlug}/${serviceSlug}` },
          { name: city.name as string, url: canonicalUrl },
        ])}
      />
      <JsonLd
        data={legalServiceSchema({
          name: page.title as string,
          description: (city.localIntro as string) || '',
          url: canonicalUrl,
          areaServed: [city.name as string],
        })}
      />

      <section className="border-b border-line bg-stone py-14 md:py-20">
        <Container>
          <Breadcrumbs
            items={[
              { name: 'Home', href: locale === 'en' ? '/' : '/es' },
              { name: practiceArea?.name as string, href: `${prefix}/${practiceSlug}` },
              { name: service.title as string, href: `${prefix}/${practiceSlug}/${serviceSlug}` },
              { name: city.name as string, href: `${prefix}/${practiceSlug}/${serviceSlug}/${citySlug}` },
            ]}
          />
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-ink md:text-5xl">
            {page.title as string}
          </h1>
          {city.localIntro && (
            <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-ink-soft">
              {city.localIntro as string}
            </p>
          )}
          <div className="mt-8">
            <Button href={`${prefix}/contact`} size="lg">
              {copy.home.heroCTA}
            </Button>
          </div>
        </Container>
      </section>

      <Container>
        <hr className="horizon-rule" />
      </Container>

      <section className="py-14 md:py-20">
        <Container className="grid gap-10 md:grid-cols-[1fr_320px]">
          <div className="prose prose-headings:font-display prose-headings:text-ink prose-p:font-body prose-p:text-ink-soft prose-a:text-clay max-w-none">
            {page.localBody && <RichText data={page.localBody as any} />}
          </div>
          <aside className="space-y-5">
            <CityFactsCard
              courthouse={city.courthouse as string}
              hospitals={city.hospitals as any}
              highways={city.highways as any}
              locale={locale}
            />
            {Array.isArray(city.nearbyCities) && city.nearbyCities.length > 0 && (
              <div className="rounded-lg border border-line bg-panel p-6">
                <p className="font-body text-xs font-semibold uppercase tracking-wide text-ink-muted">
                  {locale === 'es' ? 'Ciudades cercanas' : 'Nearby cities'}
                </p>
                <ul className="mt-3 space-y-2">
                  {city.nearbyCities.map((nc: any) => (
                    <li key={nc.id}>
                      <Link
                        href={`${prefix}/${practiceSlug}/${serviceSlug}/${nc.slug}`}
                        className="font-body text-sm text-ink-soft hover:text-clay"
                      >
                        {nc.name} {service.title as string}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </Container>
      </section>

      {testimonials.length > 0 && (
        <section className="border-t border-line bg-stone py-14 md:py-20">
          <Container>
            <h2 className="font-display text-2xl font-semibold text-ink">{copy.home.testimonialsKicker}</h2>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
              {testimonials.map((tm) => (
                <TestimonialCard
                  key={tm.id}
                  quote={tm.quote as string}
                  author={tm.author as string}
                  rating={(tm.rating as number) || 5}
                />
              ))}
            </div>
          </Container>
        </section>
      )}
    </main>
  )
}
