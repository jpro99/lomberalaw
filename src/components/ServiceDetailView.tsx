import Link from 'next/link'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { notFound } from 'next/navigation'
import type { Locale } from '@/lib/payload'
import { getServiceBundle } from '@/lib/getService'
import { t } from '@/lib/dictionary'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { FAQAccordion } from '@/components/FAQAccordion'
import { TestimonialCard } from '@/components/TestimonialCard'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbSchema, legalServiceSchema, faqPageSchema } from '@/lib/schema'

type PracticeSlug = 'personal-injury' | 'bankruptcy'

export async function getServiceMetadata(practiceSlug: PracticeSlug, serviceSlug: string, locale: Locale) {
  const bundle = await getServiceBundle(practiceSlug, serviceSlug, locale)
  if (!bundle) return {}
  return {
    title: bundle.service.seo?.metaTitle || `${bundle.service.title} | Lombera Law`,
    description: bundle.service.seo?.metaDescription || bundle.service.summary,
  }
}

export async function ServiceDetailView({
  practiceSlug,
  serviceSlug,
  locale,
}: {
  practiceSlug: PracticeSlug
  serviceSlug: string
  locale: Locale
}) {
  const bundle = await getServiceBundle(practiceSlug, serviceSlug, locale)
  if (!bundle) notFound()
  const { practiceArea, service, faqs, siblingServices, testimonials } = bundle
  const copy = t(locale)
  const prefix = locale === 'en' ? '' : '/es'
  const canonicalUrl = `https://lomberalaw.com${prefix}/${practiceSlug}/${serviceSlug}`

  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://lomberalaw.com' + (locale === 'es' ? '/es' : '') },
          { name: practiceArea.name as string, url: `https://lomberalaw.com${prefix}/${practiceSlug}` },
          { name: service.title as string, url: canonicalUrl },
        ])}
      />
      <JsonLd
        data={legalServiceSchema({
          name: service.title as string,
          description: (service.summary as string) || '',
          url: canonicalUrl,
          areaServed: ['Inland Empire', 'Coachella Valley', 'Riverside County', 'San Bernardino County'],
        })}
      />
      {faqs.length > 0 && (
        <JsonLd
          data={faqPageSchema(
            faqs.map((f) => ({
              question: f.question,
              answer: typeof f.answer === 'string' ? f.answer : (f.question as string),
            })),
          )}
        />
      )}

      <section className="border-b border-line bg-stone py-14 md:py-20">
        <Container>
          <Breadcrumbs
            items={[
              { name: 'Home', href: locale === 'en' ? '/' : '/es' },
              { name: practiceArea.name as string, href: `${prefix}/${practiceSlug}` },
              { name: service.title as string, href: `${prefix}/${practiceSlug}/${serviceSlug}` },
            ]}
          />
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-ink md:text-5xl">
            {service.title as string}
          </h1>
          {service.summary && (
            <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-ink-soft">
              {service.summary as string}
            </p>
          )}
          <div className="mt-8">
            <Button href={`${prefix}/contact`} size="lg">
              {copy.home.heroCTA}
            </Button>
          </div>
        </Container>
      </section>

      {service.body && (
        <section className="py-14 md:py-20">
          <Container className="prose prose-headings:font-display prose-headings:text-ink prose-p:font-body prose-p:text-ink-soft prose-a:text-clay max-w-2xl">
            <RichText data={service.body as any} />
          </Container>
        </section>
      )}

      {faqs.length > 0 && (
        <section className="border-t border-line bg-stone py-14 md:py-20">
          <Container className="max-w-2xl">
            <h2 className="font-display text-2xl font-semibold text-ink">
              {locale === 'es' ? 'Preguntas frecuentes' : 'Frequently asked questions'}
            </h2>
            <div className="mt-6">
              <FAQAccordion faqs={faqs as any} />
            </div>
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

      {siblingServices.length > 0 && (
        <section className="border-t border-line bg-stone py-14 md:py-20">
          <Container>
            <h2 className="font-display text-2xl font-semibold text-ink">
              {locale === 'es' ? 'Otros casos que manejamos' : 'Other cases we handle'}
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {siblingServices.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`${prefix}/${practiceSlug}/${s.slug}`}
                    className="block rounded-md border border-line bg-panel px-5 py-4 font-body text-sm font-medium text-ink transition-colors hover:border-clay"
                  >
                    {s.title as string}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}
    </main>
  )
}
