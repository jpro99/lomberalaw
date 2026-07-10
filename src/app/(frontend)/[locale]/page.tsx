import { getPayload } from '@/lib/payload'
import { t } from '@/lib/dictionary'
import type { Locale } from '@/lib/payload'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { PracticeCard } from '@/components/PracticeCard'
import { TestimonialCard } from '@/components/TestimonialCard'
import { JsonLd } from '@/components/JsonLd'
import { localBusinessSchema } from '@/lib/schema'
import { HorizonMotif } from '@/components/HorizonMotif'

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const payload = await getPayload()
  const copy = t(locale).home
  const prefix = locale === 'en' ? '' : '/es'

  const [practiceAreas, testimonials, offices] = await Promise.all([
    payload.find({ collection: 'practice-areas', locale, limit: 10 }),
    payload.find({ collection: 'testimonials', where: { featured: { equals: true } }, locale, limit: 6 }),
    payload.find({ collection: 'offices', limit: 5 }),
  ])

  const piArea = practiceAreas.docs.find((p) => p.slug === 'personal-injury')
  const bkArea = practiceAreas.docs.find((p) => p.slug === 'bankruptcy')
  const primaryPhone = offices.docs[0]?.phone as string | undefined

  return (
    <main>
      {offices.docs.map((office) => (
        <JsonLd key={office.id} data={localBusinessSchema(office as any, 'https://lomberalaw.com')} />
      ))}

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line bg-stone">
        <HorizonMotif className="pointer-events-none absolute inset-x-0 bottom-0 h-24 w-full text-ink md:h-32" />
        <Container className="relative grid gap-10 py-16 md:grid-cols-[1.2fr_1fr] md:items-center md:py-24">
          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-clay">
              {copy.heroKicker}
            </p>
            <h1 className="mt-4 max-w-xl font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
              {copy.heroHeadline}
            </h1>
            <p className="mt-5 max-w-lg font-body text-base leading-relaxed text-ink-soft">
              {copy.heroSub}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {primaryPhone && (
                <Button href={`tel:${primaryPhone}`} size="lg" trackAs="call">
                  {copy.heroCTA}
                </Button>
              )}
              <Button href={`${prefix}/contact`} variant="secondary" size="lg">
                {t(locale).contact.headline.split('.')[0]}
              </Button>
            </div>
          </div>

          <dl className="grid grid-cols-2 gap-4">
            {copy.trust.map((item) => (
              <div key={item} className="rounded-md border border-line bg-panel p-5">
                <dt className="sr-only">Trust indicator</dt>
                <dd className="font-body text-sm font-semibold leading-snug text-ink">{item}</dd>
              </div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Practice areas */}
      <section className="py-16 md:py-24">
        <Container>
          <p className="font-body text-xs font-semibold uppercase tracking-widest text-clay">
            {copy.servicesKicker}
          </p>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <PracticeCard
              href={`${prefix}/personal-injury`}
              eyebrow={copy.piName}
              name={(piArea?.name as string) || copy.piName}
              description={(piArea?.intro as string) || copy.piDesc}
              learnMore={copy.learnMore}
            />
            <PracticeCard
              href={`${prefix}/bankruptcy`}
              eyebrow={copy.bkName}
              name={(bkArea?.name as string) || copy.bkName}
              description={(bkArea?.intro as string) || copy.bkDesc}
              learnMore={copy.learnMore}
            />
          </div>
        </Container>
      </section>

      <Container>
        <hr className="horizon-rule" />
      </Container>

      {/* Testimonials */}
      {testimonials.docs.length > 0 && (
        <section className="py-16 md:py-24">
          <Container>
            <p className="font-body text-xs font-semibold uppercase tracking-widest text-clay">
              {copy.testimonialsKicker}
            </p>
            <div className="mt-6 grid gap-5 md:grid-cols-3">
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
      )}

      {/* Final CTA */}
      <section className="bg-night py-16 md:py-20">
        <Container className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-xl font-display text-2xl font-semibold text-white md:text-3xl">
            {copy.finalCTAHeadline}
          </h2>
          {primaryPhone && (
            <Button href={`tel:${primaryPhone}`} size="lg" trackAs="call">
              {copy.heroCTA}
            </Button>
          )}
        </Container>
      </section>
    </main>
  )
}
