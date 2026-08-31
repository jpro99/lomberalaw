import type { Locale } from '@/lib/payload'
import { getPayload, PayloadUnavailableError } from '@/lib/payload'
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
  const homeHref = locale === 'en' ? '/' : '/es/inicio/'
  const homeCrumb = locale === 'es' ? 'Inicio' : 'Home'
  const canonicalPath = locale === 'en' ? '/reviews/' : '/es/reviews/'

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
          { name: homeCrumb, url: `https://lomberalaw.com${homeHref}` },
          { name: locale === 'es' ? 'Reseñas' : 'Reviews', url: `https://lomberalaw.com${canonicalPath}` },
        ])}
      />

      <section className="border-b border-line bg-stone py-14 md:py-20">
        <Container>
          <Breadcrumbs items={[{ name: homeCrumb, href: homeHref }, { name: locale === 'es' ? 'Reseñas' : 'Reviews', href: canonicalPath }]} />
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-ink md:text-5xl">
            {locale === 'es' ? 'Lo que dicen nuestros clientes' : 'What our clients say'}
          </h1>
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container>
          <div className="grid gap-5 md:grid-cols-3">
            {testimonials.map((tm) => (
              <TestimonialCard
                key={tm.id}
                quote={tm.quote}
                author={tm.author}
                rating={tm.rating || 5}
              />
            ))}
          </div>
        </Container>
      </section>
    </main>
  )
}
