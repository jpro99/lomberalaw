import { getPayload } from '@/lib/payload'
import { t } from '@/lib/dictionary'
import type { Locale } from '@/lib/payload'
import Image from 'next/image'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { PracticeCard } from '@/components/PracticeCard'
import { TestimonialCard } from '@/components/TestimonialCard'
import { JsonLd } from '@/components/JsonLd'
import { localBusinessSchema } from '@/lib/schema'
import { SplitHeroArt } from '@/components/HorizonMotif'
import { RedlandsSign, PalmSpringsSign } from '@/components/LocationSigns'

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const payload = await getPayload()
  const copy = t(locale).home
  const prefix = locale === 'en' ? '' : '/es'

  const [practiceAreas, testimonials, offices, attorneys] = await Promise.all([
    payload.find({ collection: 'practice-areas', locale, limit: 10 }),
    payload.find({ collection: 'testimonials', where: { featured: { equals: true } }, locale, limit: 6 }),
    payload.find({ collection: 'offices', limit: 5 }),
    payload.find({ collection: 'attorneys', where: { slug: { equals: 'edgar-lombera' } }, locale, limit: 1 }),
  ])

  const piArea = practiceAreas.docs.find((p) => p.slug === 'personal-injury')
  const bkArea = practiceAreas.docs.find((p) => p.slug === 'bankruptcy')
  const primaryPhone = offices.docs[0]?.phone as string | undefined
  const attorney = attorneys.docs[0]

  return (
    <main>
      {offices.docs.map((office) => (
        <JsonLd key={office.id} data={localBusinessSchema(office as any, 'https://lomberalaw.com')} />
      ))}

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-line bg-gradient-to-r from-citrus-soft via-stone to-pool-soft">
        <SplitHeroArt className="pointer-events-none absolute inset-x-0 bottom-0 h-24 w-full opacity-40 md:h-32" />

        {/* Vintage regional signage -- real place identity, colorful,
           rooted in each town's actual historic design tradition.
           Practice-area keywords live in the H1 below, not here. */}
        <RedlandsSign className="pointer-events-none absolute -left-6 bottom-4 hidden h-28 w-28 drop-shadow-lg lg:block xl:h-36 xl:w-36" />
        <PalmSpringsSign className="pointer-events-none absolute -right-6 bottom-4 hidden h-28 w-28 drop-shadow-lg lg:block xl:h-36 xl:w-36" />

        <Container className="relative grid gap-10 py-16 md:grid-cols-[1.2fr_1fr] md:items-center md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-4 py-1.5 font-body text-xs font-bold uppercase tracking-widest text-citrus-deep">
              <span className="h-1.5 w-1.5 rounded-full bg-pool" aria-hidden />
              {copy.heroKicker}
            </span>
            <h1 className="mt-5 max-w-xl font-display text-4xl font-semibold leading-tight text-ink md:text-5xl">
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
            {copy.trust.map((item, i) => {
              const borders = ['border-l-pool', 'border-l-citrus', 'border-l-sunset', 'border-l-brass']
              return (
                <div key={item} className={`rounded-md border border-line border-l-4 ${borders[i % borders.length]} bg-panel/95 p-5 backdrop-blur`}>
                  <dt className="sr-only">Trust indicator</dt>
                  <dd className="font-body text-sm font-semibold leading-snug text-ink">{item}</dd>
                </div>
              )
            })}
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

      {/* Meet Edgar */}
      {attorney && (
        <section className="py-16 md:py-24">
          <Container className="grid gap-10 md:grid-cols-[220px_1fr] md:items-center">
            {attorney.photo && typeof attorney.photo === 'object' && (attorney.photo as any).url ? (
              <div className="relative mx-auto h-48 w-48 flex-none overflow-hidden rounded-lg border border-line md:mx-0 md:h-[200px] md:w-[200px]">
                <Image
                  src={(attorney.photo as any).url}
                  alt={(attorney.photo as any).alt || (attorney.name as string)}
                  fill
                  sizes="200px"
                  className="object-cover"
                />
              </div>
            ) : (
              <div
                className="mx-auto flex h-48 w-48 flex-none items-center justify-center rounded-lg border border-line bg-gradient-to-br from-citrus-soft to-pool-soft md:mx-0 md:h-[200px] md:w-[200px]"
                aria-hidden
              >
                <span className="font-display text-4xl font-semibold text-ink/30">EPL</span>
              </div>
            )}
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-widest text-citrus-deep">
                {copy.meetKicker}
              </p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-ink md:text-3xl">
                {attorney.name as string}
              </h2>
              {attorney.bio && (
                <div className="prose prose-sm prose-p:font-body prose-p:text-ink-soft mt-3 max-w-xl">
                  {(() => {
                    const bioRoot: any = attorney.bio
                    const firstParaText = bioRoot?.root?.children?.[0]?.children?.[0]?.text
                    return firstParaText ? <p>{firstParaText}</p> : null
                  })()}
                </div>
              )}
              <div className="mt-5">
                <Link
                  href={`${prefix}/attorney/edgar-lombera`}
                  className="font-body text-sm font-semibold text-pool-deep hover:text-pool"
                >
                  {copy.meetCTA} →
                </Link>
              </div>
            </div>
          </Container>
        </section>
      )}

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
