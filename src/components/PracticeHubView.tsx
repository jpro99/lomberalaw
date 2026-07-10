import Link from 'next/link'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { notFound } from 'next/navigation'
import type { Locale } from '@/lib/payload'
import { getPracticeAreaBundle } from '@/lib/getPracticeArea'
import { t } from '@/lib/dictionary'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { TestimonialCard } from '@/components/TestimonialCard'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbSchema, legalServiceSchema } from '@/lib/schema'

type Slug = 'personal-injury' | 'bankruptcy'

export async function getPracticeHubMetadata(slug: Slug, locale: Locale) {
  const bundle = await getPracticeAreaBundle(slug, locale)
  if (!bundle) return {}
  return {
    title: bundle.practiceArea.seo?.metaTitle || `${bundle.practiceArea.name} | Lombera Law`,
    description: bundle.practiceArea.seo?.metaDescription || bundle.practiceArea.intro,
  }
}

// Presentation-only mapping -- no schema change needed. Icons are
// plain characters (no icon library dependency, zero extra weight).
const SERVICE_ICONS: Record<string, string> = {
  'catastrophic-injury': '▲',
  'truck-accidents': '🚛',
  'rideshare-accidents': '🚗',
  'traumatic-brain-injury': '◆',
  'spinal-cord-injury': '◆',
  'wrongful-death': '✦',
  'medical-malpractice': '✚',
  'car-accidents': '🚗',
  'motorcycle-accidents': '🏍',
  'pedestrian-accidents': '🚶',
  'slip-and-fall': '⚠',
  'chapter-7': '§',
  'chapter-13': '§',
  'foreclosure-defense': '⌂',
  'wage-garnishment': '⛔',
}

// Real, specific facts -- the kind of content depth the site was
// missing. Not legal advice, general reference points only; each
// stat should be verified/kept current by staff.
const STAT_BANDS: Record<Slug, { en: { value: string; label: string }[]; es: { value: string; label: string }[] }> = {
  'personal-injury': {
    en: [
      { value: 'FMCSA', label: 'Federal trucking regulations we investigate' },
      { value: '$1M+', label: 'Typical rideshare corporate insurance policy' },
      { value: '2 yrs', label: 'CA injury statute of limitations — CCP §335.1' },
      { value: '6 mo', label: 'Government claim deadline — Gov. Code §911.2' },
    ],
    es: [
      { value: 'FMCSA', label: 'Regulaciones federales de camiones que investigamos' },
      { value: '$1M+', label: 'Póliza de seguro corporativo típica de Uber/Lyft' },
      { value: '2 años', label: 'Plazo de prescripción de CA — CCP §335.1' },
      { value: '6 meses', label: 'Plazo para reclamos gubernamentales — Gov. Code §911.2' },
    ],
  },
  bankruptcy: {
    en: [
      { value: 'Immediate', label: 'Automatic stay halts garnishment & collection calls' },
      { value: '4–5 mo', label: 'Typical Chapter 7 case length' },
      { value: '3–5 yrs', label: 'Chapter 13 repayment plan window' },
      { value: '$0', label: 'Upfront cost for your free consultation' },
    ],
    es: [
      { value: 'Inmediato', label: 'La suspensión automática detiene embargos y cobros' },
      { value: '4–5 meses', label: 'Duración típica de un caso Capítulo 7' },
      { value: '3–5 años', label: 'Ventana del plan de pago del Capítulo 13' },
      { value: '$0', label: 'Costo inicial por su consulta gratuita' },
    ],
  },
}

export async function PracticeHubView({ slug, locale }: { slug: Slug; locale: Locale }) {
  const bundle = await getPracticeAreaBundle(slug, locale)
  if (!bundle) notFound()
  const { practiceArea, services, testimonials } = bundle
  const copy = t(locale)
  const prefix = locale === 'en' ? '' : '/es'
  const stats = STAT_BANDS[slug][locale]

  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://lomberalaw.com' + (locale === 'es' ? '/es' : '') },
          { name: practiceArea.name as string, url: `https://lomberalaw.com${prefix}/${slug}` },
        ])}
      />
      <JsonLd
        data={legalServiceSchema({
          name: practiceArea.name as string,
          description: (practiceArea.intro as string) || '',
          url: `https://lomberalaw.com${prefix}/${slug}`,
          areaServed: ['Inland Empire', 'Coachella Valley', 'Riverside County', 'San Bernardino County'],
        })}
      />

      <section className="relative overflow-hidden border-b border-line bg-gradient-to-br from-citrus-soft via-stone to-pool-soft py-14 md:py-20">
        <Container className="relative">
          <Breadcrumbs
            items={[
              { name: 'Home', href: locale === 'en' ? '/' : '/es' },
              { name: practiceArea.name as string, href: `${prefix}/${slug}` },
            ]}
          />
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-ink md:text-5xl">
            {practiceArea.name as string}
          </h1>
          {practiceArea.intro && (
            <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-ink-soft">
              {practiceArea.intro as string}
            </p>
          )}
          <div className="mt-8">
            <Button href={`${prefix}/contact`} size="lg">
              {copy.home.heroCTA}
            </Button>
          </div>
        </Container>
      </section>

      {practiceArea.body && (
        <section className="py-14 md:py-20">
          <Container className="prose prose-headings:font-display prose-headings:text-ink prose-p:font-body prose-p:text-ink-soft prose-a:text-citrus max-w-2xl">
            <RichText data={practiceArea.body as any} />
          </Container>
        </section>
      )}

      {/* Stat band -- real specifics, not filler */}
      <Container>
        <div className="grid grid-cols-2 gap-px overflow-hidden rounded-xl bg-night md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-night p-6">
              <p className="font-display text-2xl font-semibold text-brass md:text-3xl">{stat.value}</p>
              <p className="mt-1 font-body text-xs leading-snug text-night-ink">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>

      {services.length > 0 && (
        <section className="py-14 md:py-20">
          <Container>
            <h2 className="font-display text-2xl font-semibold text-ink">
              {locale === 'es' ? 'Tipos de casos que manejamos' : 'Types of cases we handle'}
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, i) => {
                const featured = i < 2
                const icon = SERVICE_ICONS[service.slug as string] || '•'
                return (
                  <Link
                    key={service.id}
                    href={`${prefix}/${slug}/${service.slug}`}
                    className={`interactive-card block rounded-lg border p-5 ${
                      featured
                        ? 'border-pool bg-gradient-to-br from-pool-soft to-panel'
                        : 'border-line bg-panel hover:border-citrus'
                    }`}
                  >
                    <div
                      className={`mb-3 flex h-9 w-9 items-center justify-center rounded-md text-base ${
                        featured ? 'bg-pool text-white' : 'bg-citrus text-white'
                      }`}
                      aria-hidden
                    >
                      {icon}
                    </div>
                    <span
                      className={`mb-2 inline-block rounded px-2 py-0.5 font-body text-[10px] font-bold uppercase tracking-wide ${
                        featured ? 'bg-pool-soft text-pool-deep' : 'bg-citrus-soft text-citrus-deep'
                      }`}
                    >
                      {featured
                        ? locale === 'es'
                          ? 'Destacado'
                          : 'Featured'
                        : locale === 'es'
                          ? 'Común'
                          : 'Common'}
                    </span>
                    <h3 className="font-display text-base font-semibold text-ink">{service.title as string}</h3>
                    {service.summary && (
                      <p className="mt-1.5 font-body text-xs leading-relaxed text-ink-soft">
                        {service.summary as string}
                      </p>
                    )}
                  </Link>
                )
              })}
            </div>
          </Container>
        </section>
      )}

      {testimonials.length > 0 && (
        <section className="border-t border-line bg-stone py-14 md:py-20">
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
    </main>
  )
}
