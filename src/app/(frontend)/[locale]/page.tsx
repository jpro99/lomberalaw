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
import { EDGAR_PHOTO_FALLBACK, resolveMediaUrl } from '@/lib/mediaUrl'

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
  const photo =
    attorney?.photo && typeof attorney.photo === 'object'
      ? (attorney.photo as { url?: string; alt?: string })
      : null
  const photoSrc = resolveMediaUrl(photo, EDGAR_PHOTO_FALLBACK) || EDGAR_PHOTO_FALLBACK
  const photoAlt = photo?.alt || (attorney?.name as string) || 'Edgar P. Lombera'

  return (
    <main>
      {offices.docs.map((office) => (
        <JsonLd key={office.id} data={localBusinessSchema(office as any, 'https://lomberalaw.com')} />
      ))}

      {/* Full-bleed photo hero — one composition: brand, headline,
         one supporting line, one CTA, dominant attorney image. */}
      <section className="relative min-h-[88vh] overflow-hidden bg-night text-white">
        <div className="absolute inset-0">
          <Image
            src={photoSrc}
            alt={photoAlt}
            fill
            priority
            sizes="100vw"
            className="animate-image object-cover object-[center_20%] md:object-[70%_20%]"
          />
          <div
            className="absolute inset-0 bg-gradient-to-r from-night via-night/85 to-night/25 md:via-night/75 md:to-transparent"
            aria-hidden
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-transparent to-night/40 md:to-night/20" aria-hidden />
        </div>

        <Container className="relative flex min-h-[88vh] flex-col justify-end pb-16 pt-28 md:justify-center md:pb-24 md:pt-24">
          <div className="max-w-xl">
            <p className="animate-rise font-display text-3xl tracking-tight text-white md:text-4xl">
              Lombera Law
            </p>
            <p className="animate-rise-delay mt-3 font-body text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              {copy.officesLine}
            </p>
            <h1 className="animate-rise-delay mt-6 font-display text-[2.35rem] leading-[1.08] text-white md:text-5xl">
              {copy.heroHeadline}
            </h1>
            <p className="animate-rise-delay-2 mt-5 max-w-md font-body text-base leading-relaxed text-white/75 md:text-lg">
              {copy.heroSub}
            </p>
            <div className="animate-rise-delay-2 mt-8 flex flex-wrap gap-3">
              {primaryPhone && (
                <Button href={`tel:${primaryPhone}`} variant="onDark" size="lg" trackAs="call">
                  {copy.heroCTA}
                </Button>
              )}
            </div>
          </div>
        </Container>
      </section>

      {/* Quiet proof strip — below the first viewport */}
      <section className="border-b border-line bg-panel">
        <Container className="flex flex-wrap items-center justify-between gap-6 py-8">
          <div className="flex items-baseline gap-2">
            <span className="font-display text-3xl text-ink">4.9</span>
            <div>
              <div className="text-gold" aria-hidden>
                ★★★★★
              </div>
              <p className="font-body text-xs text-ink-muted">Google Reviews</p>
            </div>
          </div>
          <div>
            <span className="font-display text-2xl text-ink">2,500+</span>
            <p className="font-body text-xs text-ink-muted">
              {locale === 'es' ? 'Familias ayudadas' : 'Families Helped'}
            </p>
          </div>
          <div>
            <span className="font-display text-2xl text-ink">15+</span>
            <p className="font-body text-xs text-ink-muted">
              {locale === 'es' ? 'Años de práctica' : 'Years Practicing'}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28">
        <Container>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            {copy.servicesKicker}
          </p>
          <div className="mt-8 grid gap-0 border-t border-line md:grid-cols-2">
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

      {attorney && (
        <section className="border-y border-line bg-panel py-20 md:py-28">
          <Container className="max-w-2xl">
            <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              {copy.meetKicker}
            </p>
            <h2 className="mt-3 font-display text-3xl text-ink md:text-4xl">
              {attorney.name as string}
            </h2>
            {attorney.bio && (
              <div className="prose prose-sm prose-p:font-body prose-p:text-ink-soft mt-4 max-w-xl">
                {(() => {
                  const bioRoot: any = attorney.bio
                  const firstParaText = bioRoot?.root?.children?.[0]?.children?.[0]?.text
                  return firstParaText ? <p>{firstParaText}</p> : null
                })()}
              </div>
            )}
            <div className="mt-6">
              <Link
                href={`${prefix}/attorney/edgar-lombera`}
                className="font-body text-sm font-semibold text-ink underline decoration-gold underline-offset-4 hover:decoration-ink"
              >
                {copy.meetCTA} →
              </Link>
            </div>
          </Container>
        </section>
      )}

      {testimonials.docs.length > 0 && (
        <section className="py-20 md:py-28">
          <Container>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-gold">
              {copy.testimonialsKicker}
            </p>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
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

      <section className="bg-night py-20 md:py-24">
        <Container className="flex flex-col items-start gap-8 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-xl font-display text-3xl text-white md:text-4xl">
            {copy.finalCTAHeadline}
          </h2>
          {primaryPhone && (
            <Button href={`tel:${primaryPhone}`} variant="onDark" size="lg" trackAs="call">
              {copy.heroCTA}
            </Button>
          )}
        </Container>
      </section>
    </main>
  )
}
