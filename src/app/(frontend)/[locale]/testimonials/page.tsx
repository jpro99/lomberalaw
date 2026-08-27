import type { Locale } from '@/lib/payload'
import { getPayload, PayloadUnavailableError } from '@/lib/payload'
import { Container } from '@/components/Container'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { TestimonialCard } from '@/components/TestimonialCard'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'
import { pageMetadata } from '@/lib/seo'

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  return pageMetadata({
    title:
      locale === 'es'
        ? 'Testimonios de Clientes | Lombera Law'
        : 'Client Testimonials | Lombera Law',
    description:
      locale === 'es'
        ? 'Lo que dicen nuestros clientes sobre el despacho de Edgar P. Lombera.'
        : 'What clients say about the Law Offices of Edgar P. Lombera.',
    path: '/testimonials',
    locale,
  })
}

export default async function TestimonialsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const homeHref = locale === 'en' ? '/' : '/es/inicio/'
  const canonicalPath = locale === 'en' ? '/testimonials/' : '/es/testimonios/'

  let testimonials: { id: string | number; quote: string; author: string; rating?: number }[] = []

  try {
    const payload = await getPayload()
    const res = await payload.find({ collection: 'testimonials', locale, limit: 50, sort: '-rating' })
    testimonials = res.docs.map((tm) => ({
      id: tm.id,
      quote: tm.quote as string,
      author: tm.author as string,
      rating: (tm.rating as number) || 5,
    }))
  } catch (e) {
    if (!(e instanceof PayloadUnavailableError)) throw e
  }

  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: `https://lomberalaw.com${homeHref}` },
          { name: locale === 'es' ? 'Testimonios' : 'Testimonials', url: `https://lomberalaw.com${canonicalPath}` },
        ])}
      />

      <section className="border-b border-line bg-panel py-12 md:py-16">
        <Container>
          <Breadcrumbs
            items={[
              { name: 'Home', href: homeHref },
              { name: locale === 'es' ? 'Testimonios' : 'Testimonials', href: canonicalPath },
            ]}
          />
          <h1 className="mt-4 max-w-2xl font-display text-3xl text-ink md:text-4xl">
            {locale === 'es' ? 'Lo que dicen nuestros clientes' : 'What our clients say'}
          </h1>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container>
          {testimonials.length === 0 ? (
            <p className="font-body text-sm text-ink-muted">
              {locale === 'es' ? 'Próximamente.' : 'Coming soon.'}
            </p>
          ) : (
            <div className="grid gap-5 md:grid-cols-3">
              {testimonials.map((tm) => (
                <TestimonialCard key={tm.id} quote={tm.quote} author={tm.author} rating={tm.rating || 5} />
              ))}
            </div>
          )}
        </Container>
      </section>
    </main>
  )
}
