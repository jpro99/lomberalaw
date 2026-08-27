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
import { lexicalToPlainText } from '@/lib/lexicalText'
import { pageMetadata, CH7_SEO, CH13_SEO } from '@/lib/seo'
import { localizedCanonicalUrl, practiceHubHref, serviceHref } from '@/lib/spanishPaths'

type PracticeSlug = 'personal-injury' | 'bankruptcy'

export async function getServiceMetadata(practiceSlug: PracticeSlug, serviceSlug: string, locale: Locale) {
  if (practiceSlug === 'bankruptcy' && serviceSlug === 'chapter-7') {
    return pageMetadata({ ...CH7_SEO, path: '/bankruptcy/chapter-7', locale })
  }
  if (practiceSlug === 'bankruptcy' && serviceSlug === 'chapter-13') {
    return pageMetadata({ ...CH13_SEO, path: '/bankruptcy/chapter-13', locale })
  }
  const bundle = await getServiceBundle(practiceSlug, serviceSlug, locale)
  if (!bundle) return {}
  return pageMetadata({
    title: (bundle.service.seo?.metaTitle as string) || `${bundle.service.title} | Lombera Law`,
    description: (bundle.service.seo?.metaDescription as string) || (bundle.service.summary as string),
    path: `/${practiceSlug}/${serviceSlug}`,
    locale,
  })
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
  const practicePath = practiceHubHref(locale, practiceSlug)
  const canonicalUrl = localizedCanonicalUrl(`/${practiceSlug}/${serviceSlug}`, locale)
  const servicePath = serviceHref(locale, practiceSlug, serviceSlug)
  const h1 =
    practiceSlug === 'bankruptcy' && serviceSlug === 'chapter-7'
      ? CH7_SEO.h1
      : practiceSlug === 'bankruptcy' && serviceSlug === 'chapter-13'
        ? CH13_SEO.h1
        : (service.title as string)

  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://lomberalaw.com' + (locale === 'es' ? '/es/inicio/' : '/') },
          { name: practiceArea.name as string, url: `https://lomberalaw.com${practicePath}` },
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
      {faqs.length > 0 && (() => {
        const schema = faqPageSchema(
          faqs.map((f) => ({
            question: f.question as string,
            answer: lexicalToPlainText(f.answer) || '',
          })),
        )
        return schema ? <JsonLd data={schema} /> : null
      })()}

      <section className="border-b border-line bg-panel py-14 md:py-20">
        <Container>
          <Breadcrumbs
            items={[
              { name: 'Home', href: locale === 'en' ? '/' : '/es/inicio/' },
              { name: practiceArea.name as string, href: practicePath },
              { name: service.title as string, href: servicePath },
            ]}
          />
          <h1 className="mt-4 max-w-2xl font-display text-[2.5rem] leading-tight text-ink">{h1}</h1>
          {service.summary && (
            <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-ink-soft">
              {service.summary as string}
            </p>
          )}
          <div className="mt-8">
            <Button href={locale === 'es' ? '/es/contacta-con-nosotros/' : '/contact/'} size="lg">
              {copy.home.heroCTA}
            </Button>
          </div>
        </Container>
      </section>

      <Container>
        <hr className="horizon-rule" />
      </Container>

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
                    href={serviceHref(locale, practiceSlug, s.slug as string)}
                    className="interactive-card block rounded-md border border-line bg-panel px-5 py-4 font-body text-sm font-medium text-ink hover:border-clay"
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
