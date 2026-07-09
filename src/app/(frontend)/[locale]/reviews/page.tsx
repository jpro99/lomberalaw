import type { Locale } from '@/lib/payload'
import { getPayload } from '@/lib/payload'
import { Container } from '@/components/Container'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { TestimonialCard } from '@/components/TestimonialCard'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  return {
    title: locale === 'es' ? 'Reseñas de Clientes | Lombera Law' : 'Client Reviews | Lombera Law',
  }
}

export default async function ReviewsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const prefix = locale === 'en' ? '' : '/es'
  const payload = await getPayload()
  const testimonials = await payload.find({ collection: 'testimonials', locale, limit: 50, sort: '-rating' })

  const avgRating =
    testimonials.docs.length > 0
      ? (
          testimonials.docs.reduce((sum, t) => sum + ((t.rating as number) || 5), 0) / testimonials.docs.length
        ).toFixed(1)
      : null

  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://lomberalaw.com' + (locale === 'es' ? '/es' : '') },
          { name: 'Reviews', url: `https://lomberalaw.com${prefix}/reviews` },
        ])}
      />
      {avgRating && (
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'LegalService',
            name: 'Law Offices of Edgar P. Lombera',
            aggregateRating: {
              '@type': 'AggregateRating',
              ratingValue: avgRating,
              reviewCount: testimonials.docs.length,
            },
          }}
        />
      )}

      <section className="border-b border-line bg-stone py-14 md:py-20">
        <Container>
          <Breadcrumbs items={[{ name: 'Home', href: locale === 'en' ? '/' : '/es' }, { name: 'Reviews', href: `${prefix}/reviews` }]} />
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-ink md:text-5xl">
            {locale === 'es' ? 'Lo que dicen nuestros clientes' : 'What our clients say'}
          </h1>
          {avgRating && (
            <p className="mt-3 font-body text-sm text-ink-soft">
              {avgRating} / 5 · {testimonials.docs.length} {locale === 'es' ? 'reseñas' : 'reviews'}
            </p>
          )}
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.docs.map((tm) => (
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
    </main>
  )
}
