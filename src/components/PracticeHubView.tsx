import Link from 'next/link'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { notFound } from 'next/navigation'
import type { Locale } from '@/lib/payload'
import { getPracticeAreaBundle } from '@/lib/getPracticeArea'
import { t } from '@/lib/dictionary'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { TestimonialCard } from '@/components/TestimonialCard'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbSchema, legalServiceSchema } from '@/lib/schema'

type Slug = 'personal-injury' | 'bankruptcy'

export async function getPracticeHubMetadata(slug: Slug, locale: Locale) {
  const bundle = await getPracticeAreaBundle(slug, locale)
  if (!bundle) return {}
  return {
    title: bundle.practiceArea.seo?.metaTitle || `${bundle.practiceArea.name} | Lombera Law`,
    description: bundle.practiceArea.seo?.metaDescription || bundle.practiceArea.intro,
  }
}

export async function PracticeHubView({ slug, locale }: { slug: Slug; locale: Locale }) {
  const bundle = await getPracticeAreaBundle(slug, locale)
  if (!bundle) notFound()
  const { practiceArea, services, testimonials } = bundle
  const copy = t(locale)
  const prefix = locale === 'en' ? '' : '/es'

  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://lomberalaw.com' + (locale === 'es' ? '/es' : '') },
          { name: practiceArea.name as string, url: `https://lomberalaw.com${prefix}/${slug}` },
        ])}
      />
      <JsonLd
        data={legalServiceSchema({
          name: practiceArea.name as string,
          description: (practiceArea.intro as string) || '',
          url: `https://lomberalaw.com${prefix}/${slug}`,
          areaServed: ['Inland Empire', 'Coachella Valley', 'Riverside County', 'San Bernardino County'],
        })}
      />

      <section className="border-b border-line bg-stone py-14 md:py-20">
        <Container>
          <Breadcrumbs
            items={[
              { name: 'Home', href: locale === 'en' ? '/' : '/es' },
              { name: practiceArea.name as string, href: `${prefix}/${slug}` },
            ]}
          />
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-ink md:text-5xl">
            {practiceArea.name as string}
          </h1>
          {practiceArea.intro && (
            <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-ink-soft">
              {practiceArea.intro as string}
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

      {practiceArea.body && (
        <section className="py-14 md:py-20">
          <Container className="prose prose-headings:font-display prose-headings:text-ink prose-p:font-body prose-p:text-ink-soft prose-a:text-clay max-w-2xl">
            <RichText data={practiceArea.body as any} />
          </Container>
        </section>
      )}

      {services.length > 0 && (
        <section className="border-t border-line bg-stone py-14 md:py-20">
          <Container>
            <h2 className="font-display text-2xl font-semibold text-ink">
              {locale === 'es' ? 'Tipos de casos que manejamos' : 'Types of cases we handle'}
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={`${prefix}/${slug}/${service.slug}`}
                    className="interactive-card block rounded-md border border-line bg-panel px-5 py-4 font-body text-sm font-medium text-ink hover:border-clay"
                  >
                    {service.title as string}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {testimonials.length > 0 && (
        <section className="py-14 md:py-20">
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
