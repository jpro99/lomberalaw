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

      {/* Hero -- photo-forward. Edgar's real photo carries the trust
         signal a name/illustration can't. Optimized via next/image
         (priority + responsive sizes) so a large photo doesn't cost
         speed -- unoptimized size is what's slow, not size itself. */}
      <section className="relative overflow-hidden border-b border-line bg-gradient-to-r from-citrus-soft via-stone to-pool-soft">
        <Container className="relative grid gap-10 py-14 md:grid-cols-[1.1fr_0.9fr] md:items-center md:py-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-panel px-4 py-1.5 font-body text-xs font-bold uppercase tracking-widest text-citrus-deep">
              <span className="h-1.5 w-1.5 rounded-full bg-pool" aria-hidden />
              {copy.heroKicker}
            </span>
            <h1 className="mt-5 max-w-xl font-display text-[2.75rem] font-bold leading-[1.05] tracking-tight text-ink md:text-6xl">
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

            {/* Bold stat strip -- one prominent claim instead of four
               small chips, closer weight to what actually reads as
               "established firm" at a glance. */}
            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
              <div className="flex items-baseline gap-2">
                <span className="font-display text-4xl font-bold text-ink">4.9</span>
                <div>
                  <div className="text-sunset" aria-hidden>★★★★★</div>
                  <p className="font-body text-xs text-ink-muted">Google Reviews</p>
                </div>
              </div>
              <div className="h-10 w-px bg-line-strong" aria-hidden />
              <div>
                <span className="font-display text-2xl font-bold text-ink">2,500+</span>
                <p className="font-body text-xs text-ink-muted">Families Helped</p>
              </div>
              <div className="h-10 w-px bg-line-strong" aria-hidden />
              <div>
                <span className="font-display text-2xl font-bold text-ink">15+</span>
                <p className="font-body text-xs text-ink-muted">Years Practicing</p>
              </div>
            </div>
          </div>

          {/* Edgar's real photo -- large, framed with a bold color
             block instead of a plain border. This is the actual
             trust signal; nothing else in this hero should compete
             with it for attention. */}
          <div className="relative mx-auto w-full max-w-sm md:mx-0">
            <div className="absolute -inset-3 -z-10 rounded-2xl bg-gradient-to-br from-citrus to-pool opacity-90" aria-hidden />
            {attorney?.photo && typeof attorney.photo === 'object' && (attorney.photo as any).url ? (
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border-4 border-panel shadow-xl">
                <Image
                  src={(attorney.photo as any).url}
                  alt={(attorney.photo as any).alt || (attorney?.name as string) || 'Edgar P. Lombera'}
                  fill
                  priority
                  sizes="(min-width: 768px) 420px, 90vw"
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink/80 to-transparent px-5 pb-4 pt-10">
                  <p className="font-display text-lg font-semibold text-white">{attorney?.name as string}</p>
                  <p className="font-body text-xs text-white/80">Founding Attorney</p>
                </div>
              </div>
            ) : (
              <div className="relative flex aspect-[4/5] w-full items-center justify-center rounded-2xl border-4 border-panel bg-panel shadow-xl">
                <span className="font-display text-6xl font-bold text-ink/20">EPL</span>
              </div>
            )}
          </div>
        </Container>

        {/* Vintage regional signage -- secondary touch, smaller and
           quieter now that the photo carries the hero. Real place
           identity, not the main visual statement. */}
        <Container className="relative mt-8 hidden items-end justify-between pb-2 lg:flex">
          <RedlandsSign className="h-16 w-16 opacity-90 drop-shadow-sm xl:h-20 xl:w-20" />
          <PalmSpringsSign className="h-16 w-16 opacity-90 drop-shadow-sm xl:h-20 xl:w-20" />
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

      {/* Meet Edgar -- text only; the hero already leads with his photo */}
      {attorney && (
        <section className="py-16 md:py-24">
          <Container className="max-w-2xl">
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
