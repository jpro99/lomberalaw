import type { Metadata } from 'next'
import { t } from '@/lib/dictionary'
import type { Locale } from '@/lib/payload'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { PracticeCard } from '@/components/PracticeCard'
import { EdgarHeadshot } from '@/components/EdgarHeadshot'
import { JsonLd } from '@/components/JsonLd'
import { firmLegalServiceSchema, faqPageSchema } from '@/lib/schema'
import { HOME_SEO, pageMetadata } from '@/lib/seo'
import { OFFICES } from '@/lib/nap'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: Locale }>
}): Promise<Metadata> {
  const { locale } = await params
  if (locale === 'es') {
    return pageMetadata({
      title: HOME_SEO.es.title,
      description: HOME_SEO.es.description,
      path: '/',
      locale: 'es',
    })
  }
  return pageMetadata({
    title: HOME_SEO.en.title,
    description: HOME_SEO.en.description,
    path: '/',
    locale: 'en',
  })
}

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const copy = t(locale).home
  const seo = locale === 'en' ? HOME_SEO.en : HOME_SEO.es
  const h1 = seo.h1

  const faqItems = locale === 'en' ? HOME_SEO.en.faq : []
  const faqSchema = faqPageSchema(faqItems.map((f) => ({ question: f.q, answer: f.a })))

  const piHref = locale === 'es' ? '/es/lesiones-personales/' : '/personal-injury/'
  const bkHref = locale === 'es' ? '/es/bancarrota/' : '/bankruptcy/'

  return (
    <main>
      <JsonLd data={firmLegalServiceSchema()} />
      {faqSchema && <JsonLd data={faqSchema} />}

      <section className="relative overflow-hidden border-b border-line bg-navy text-white">
        <Container className="relative grid items-center gap-6 py-8 md:grid-cols-[1.1fr_auto] md:py-10">
          <div className="max-w-xl">
            <p className="font-body text-[11px] font-bold uppercase tracking-[0.16em] text-gold">
              {copy.officesLine}
            </p>
            <h1 className="mt-3 font-display text-[2rem] leading-[1.12] text-white md:text-[2.5rem]">{h1}</h1>
            <p className="mt-3 max-w-md font-body text-sm leading-relaxed text-white/80 md:text-base">
              {'open' in seo ? seo.open : copy.heroSub}
            </p>
            <div className="mt-5">
              <Button href={`tel:${OFFICES[0].tel}`} variant="onDark" size="md" trackAs="call">
                {copy.heroCTA}
              </Button>
            </div>
            <div className="mt-5 flex flex-wrap gap-6 border-t border-white/10 pt-4">
              {OFFICES.map((office) => (
                <div key={office.id}>
                  <p className="font-body text-[10px] font-bold uppercase tracking-[0.14em] text-gold">
                    {office.addressLocality}
                  </p>
                  <a href={`tel:${office.tel}`} className="font-body text-sm font-medium text-white hover:text-gold">
                    {office.phone}
                  </a>
                </div>
              ))}
            </div>
          </div>
          <div className="justify-self-center md:justify-self-end">
            <EdgarHeadshot priority />
          </div>
        </Container>
      </section>

      <section className="border-b border-line py-12 md:py-16">
        <Container>
          <div className="grid md:grid-cols-2">
            <PracticeCard
              href={piHref}
              eyebrow={'cards' in seo ? seo.cards.pi.eyebrow : copy.servicesKicker}
              name={'cards' in seo ? seo.cards.pi.name : copy.piName}
              description={'cards' in seo ? seo.cards.pi.description : copy.piDesc}
              learnMore={copy.learnMore}
            />
            <PracticeCard
              href={bkHref}
              eyebrow={'cards' in seo ? seo.cards.bk.eyebrow : copy.servicesKicker}
              name={'cards' in seo ? seo.cards.bk.name : copy.bkName}
              description={'cards' in seo ? seo.cards.bk.description : copy.bkDesc}
              learnMore={copy.learnMore}
            />
          </div>
        </Container>
      </section>

      <section className="border-y border-line bg-panel py-12">
        <Container>
          <h2 className="font-display text-2xl text-ink">
            {locale === 'en' ? HOME_SEO.en.h2.offices : 'Dos oficinas'}
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {OFFICES.map((office) => (
              <div key={office.id} className="border border-line p-5">
                <h3 className="font-display text-lg text-ink">{office.addressLocality}</h3>
                <p className="mt-2 font-body text-sm text-ink-soft">
                  {office.streetAddress}, {office.addressLocality}, {office.addressRegion} {office.postalCode}
                </p>
                <a href={`tel:${office.tel}`} className="mt-2 inline-block font-body text-sm font-semibold text-gold">
                  {office.phone}
                </a>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-12 md:py-16">
        <Container className="max-w-2xl">
          <h2 className="font-display text-2xl text-ink">
            {locale === 'en' ? HOME_SEO.en.h2.why : 'Por qué nos llaman'}
          </h2>
          <p className="mt-3 font-body text-sm leading-relaxed text-ink-soft">
            {locale === 'en'
              ? 'You speak with Edgar P. Lombera — not a case manager. More than 15 years in the Inland Empire and Coachella Valley. Bilingual. Free consultation.'
              : 'Usted habla con Edgar P. Lombera — no con un administrador de casos. Más de 15 años en el Inland Empire y el Valle de Coachella. Bilingüe. Consulta gratuita.'}
          </p>
          <Link
            href={locale === 'es' ? '/es/sobre-nosotros/' : '/about-us/'}
            className="mt-4 inline-block font-body text-sm font-semibold text-gold hover:text-ink"
          >
            {copy.meetCTA} →
          </Link>
        </Container>
      </section>

      {locale === 'en' && (
        <section className="border-t border-line bg-stone py-12 md:py-16">
          <Container className="max-w-2xl">
            <h2 className="font-display text-2xl text-ink">{HOME_SEO.en.h2.faq}</h2>
            <dl className="mt-6 space-y-6">
              {HOME_SEO.en.faq.map((item) => (
                <div key={item.q}>
                  <dt className="font-body text-sm font-semibold text-ink">{item.q}</dt>
                  <dd className="mt-2 font-body text-sm leading-relaxed text-ink-soft">{item.a}</dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>
      )}

      {locale === 'es' && (
        <section className="border-t border-line bg-stone py-12">
          <Container className="max-w-2xl">
            <p className="font-body text-sm text-ink-soft">
              Resbalones y caídas / responsabilidad de locales: {HOME_SEO.es.comingSoon}
            </p>
          </Container>
        </section>
      )}

      <section className="bg-navy py-10">
        <Container>
          <p className="max-w-xl font-display text-xl text-white">{copy.finalCTAHeadline}</p>
        </Container>
      </section>
    </main>
  )
}
