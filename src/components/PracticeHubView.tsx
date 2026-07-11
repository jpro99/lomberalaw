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
import { QuickAnswers } from '@/components/QuickAnswers'
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

// Typographic markers only — no emoji icons.
const SERVICE_ICONS: Record<string, string> = {
  'catastrophic-injury': 'I',
  'truck-accidents': 'II',
  'rideshare-accidents': 'III',
  'traumatic-brain-injury': 'IV',
  'spinal-cord-injury': 'V',
  'wrongful-death': 'VI',
  'medical-malpractice': 'VII',
  'car-accidents': 'VIII',
  'motorcycle-accidents': 'IX',
  'pedestrian-accidents': 'X',
  'slip-and-fall': 'XI',
  'chapter-7': '7',
  'chapter-13': '13',
  'foreclosure-defense': 'F',
  'wage-garnishment': 'W',
}

// Real, specific facts -- the kind of content depth the site was
// missing. Not legal advice, general reference points only; each
// stat should be verified/kept current by staff.
const QUICK_ANSWERS: Record<Slug, { en: { q: string; a: string }[]; es: { q: string; a: string }[] }> = {
  'personal-injury': {
    en: [
      {
        q: 'Is there a fee upfront?',
        a: 'No. Personal injury cases are handled on contingency \u2014 there is no cost to you unless we recover money.',
      },
      {
        q: 'Does a smaller crash still matter?',
        a: 'It can. If your accident involved a commercial vehicle, a rideshare driver, or a serious injury, the case is often worth far more than it first appears \u2014 that\u2019s exactly the kind of case worth a real conversation.',
      },
      {
        q: 'How long does a serious injury case take?',
        a: 'It depends on the medical recovery and whether the insurer will offer a fair number without a lawsuit. Cases prepared for trial from day one often settle faster \u2014 insurers know which firms will actually go to court.',
      },
    ],
    es: [
      {
        q: '¿Hay algún costo por adelantado?',
        a: 'No. Los casos de lesiones personales se manejan por contingencia \u2014 no hay costo para usted a menos que recuperemos dinero.',
      },
      {
        q: '¿Importa un choque más pequeño?',
        a: 'Puede importar. Si su accidente involucró un vehículo comercial, un conductor de Uber/Lyft o una lesión grave, el caso a menudo vale mucho más de lo que parece al principio \u2014 ese es exactamente el tipo de caso que merece una conversación real.',
      },
      {
        q: '¿Cuánto tiempo toma un caso de lesión grave?',
        a: 'Depende de la recuperación médica y de si la aseguradora ofrecerá una cifra justa sin una demanda. Los casos preparados para juicio desde el primer día a menudo se resuelven más rápido \u2014 las aseguradoras saben qué despachos realmente van a la corte.',
      },
    ],
  },
  bankruptcy: {
    en: [
      {
        q: 'Will I lose my house or car?',
        a: 'Usually not. California\u2019s exemptions protect most essential property in both Chapter 7 and Chapter 13 \u2014 Edgar reviews your specific situation before you decide anything.',
      },
      {
        q: 'How fast does the wage garnishment stop?',
        a: 'Filing triggers an automatic stay that halts garnishment and most collection calls immediately, though timing can depend on how quickly your employer processes the notice.',
      },
      {
        q: 'Is the consultation really free?',
        a: 'Yes, and confidential \u2014 by phone or in person at either office, with no obligation.',
      },
    ],
    es: [
      {
        q: '¿Perderé mi casa o mi auto?',
        a: 'Generalmente no. Las exenciones de California protegen la mayoría de las propiedades esenciales tanto en el Capítulo 7 como en el Capítulo 13 \u2014 Edgar revisa su situación específica antes de que usted decida algo.',
      },
      {
        q: '¿Qué tan rápido se detiene el embargo de salario?',
        a: 'Presentar la solicitud activa una suspensión automática que detiene el embargo y la mayoría de las llamadas de cobro de inmediato, aunque el momento puede depender de qué tan rápido su empleador procese el aviso.',
      },
      {
        q: '¿La consulta es realmente gratis?',
        a: 'Sí, y confidencial \u2014 por teléfono o en persona en cualquiera de las oficinas, sin obligación.',
      },
    ],
  },
}

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
  const quickAnswers = QUICK_ANSWERS[slug][locale]

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

      <section className="relative overflow-hidden border-b border-line bg-panel py-14 md:py-20">
        <Container className="relative">
          <Breadcrumbs
            items={[
              { name: 'Home', href: locale === 'en' ? '/' : '/es' },
              { name: practiceArea.name as string, href: `${prefix}/${slug}` },
            ]}
          />
          <h1 className="mt-4 max-w-2xl font-display text-4xl text-ink md:text-5xl">
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
          <Container className="prose prose-headings:font-display prose-headings:text-ink prose-p:font-body prose-p:text-ink-soft prose-a:text-gold max-w-2xl">
            <RichText data={practiceArea.body as any} />
          </Container>
        </section>
      )}

      {/* Stat band -- real specifics, not filler */}
      <Container>
        <div className="grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-night md:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-night p-6">
              <p className="font-display text-2xl text-gold md:text-3xl">{stat.value}</p>
              <p className="mt-1 font-body text-xs leading-snug text-night-ink">{stat.label}</p>
            </div>
          ))}
        </div>
      </Container>

      <section className="py-14 md:py-20">
        <Container className="max-w-2xl">
          <QuickAnswers
            items={quickAnswers}
            kicker={locale === 'es' ? 'Respuestas Rápidas' : 'Quick Answers'}
          />
        </Container>
      </section>

      {services.length > 0 && (
        <section className="py-14 md:py-20">
          <Container>
            <h2 className="font-display text-2xl font-semibold text-ink">
              {locale === 'es' ? 'Tipos de casos que manejamos' : 'Types of cases we handle'}
            </h2>
            <div className="mt-6 grid gap-0 border-t border-line sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service, i) => {
                const featured = i < 2
                const icon = SERVICE_ICONS[service.slug as string] || '—'
                return (
                  <Link
                    key={service.id}
                    href={`${prefix}/${slug}/${service.slug}`}
                    className="interactive-card block border-b border-line p-5 hover:bg-panel"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <span className="font-data text-xs text-gold" aria-hidden>
                        {icon}
                      </span>
                      {featured && (
                        <span className="font-body text-[10px] font-bold uppercase tracking-wide text-ink-muted">
                          {locale === 'es' ? 'Destacado' : 'Featured'}
                        </span>
                      )}
                    </div>
                    <h3 className="font-display text-xl text-ink">{service.title as string}</h3>
                    {service.summary && (
                      <p className="mt-2 font-body text-sm leading-relaxed text-ink-soft">
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
