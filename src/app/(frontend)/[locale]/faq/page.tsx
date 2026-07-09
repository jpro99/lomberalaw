import type { Locale } from '@/lib/payload'
import { getGeneralFaqs } from '@/lib/getFaqs'
import { Container } from '@/components/Container'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { FAQAccordion } from '@/components/FAQAccordion'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbSchema, faqPageSchema } from '@/lib/schema'

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  return {
    title: locale === 'es' ? 'Preguntas Frecuentes | Lombera Law' : 'Frequently Asked Questions | Lombera Law',
  }
}

export default async function FAQPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const prefix = locale === 'en' ? '' : '/es'
  const faqs = await getGeneralFaqs(locale)

  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://lomberalaw.com' + (locale === 'es' ? '/es' : '') },
          { name: 'FAQ', url: `https://lomberalaw.com${prefix}/faq` },
        ])}
      />
      {faqs.length > 0 && (
        <JsonLd
          data={faqPageSchema(
            faqs.map((f: any) => ({
              question: f.question,
              answer: typeof f.answer === 'string' ? f.answer : f.question,
            })),
          )}
        />
      )}

      <section className="border-b border-line bg-stone py-14 md:py-20">
        <Container>
          <Breadcrumbs items={[{ name: 'Home', href: locale === 'en' ? '/' : '/es' }, { name: 'FAQ', href: `${prefix}/faq` }]} />
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-ink md:text-5xl">
            {locale === 'es' ? 'Preguntas Frecuentes' : 'Frequently Asked Questions'}
          </h1>
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container className="max-w-2xl">
          <FAQAccordion faqs={faqs as any} />
        </Container>
      </section>
    </main>
  )
}
