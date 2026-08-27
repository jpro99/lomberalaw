import type { Metadata } from 'next'
import { t } from '@/lib/dictionary'
import type { Locale } from '@/lib/payload'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { PracticeCard } from '@/components/PracticeCard'
import { EdgarHeadshot } from '@/components/EdgarHeadshot'
import { CopyBody } from '@/components/CopyBody'
import { JsonLd } from '@/components/JsonLd'
import { firmLegalServiceSchema } from '@/lib/schema'
import { HOME_COPY } from '@/lib/hubBodyCopy'
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
  const pageCopy = HOME_COPY[locale]
  const h1 = pageCopy.h1

  const piHref = locale === 'es' ? '/es/lesiones-personales/' : '/personal-injury/'
  const bkHref = locale === 'es' ? '/es/bancarrota/' : '/bankruptcy/'

  const nextSteps =
    locale === 'es'
      ? [
          'Abra la tarjeta que coincida con su problema — lesiones o bancarrota.',
          'Llame a la oficina más cercana y pida a Edgar.',
          'Use el formulario a continuación para enviar un mensaje.',
        ]
      : [
          'Open the card that matches your problem — injury or bankruptcy.',
          'Call the nearer office and ask for Edgar.',
          'Use the form below to send a message.',
        ]

  return (
    <main>
      <JsonLd data={firmLegalServiceSchema()} />

      <section className="relative overflow-hidden border-b border-line bg-navy text-white">
        <Container className="relative grid items-center gap-6 py-8 md:grid-cols-[1.1fr_auto] md:py-10">
          <div className="max-w-xl">
            <p className="font-body text-[11px] font-bold uppercase tracking-[0.16em] text-gold">
              {copy.officesLine}
            </p>
            <h1 className="mt-3 font-display text-[2rem] leading-[1.12] text-white md:text-[2.5rem]">{h1}</h1>
            <div className="mt-5 flex flex-wrap gap-3">
              {OFFICES.map((office) => (
                <Button key={office.id} href={`tel:${office.tel}`} variant="onDark" size="md" trackAs="call">
                  {office.addressLocality} {office.phone}
                </Button>
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

      <section className="border-b border-line bg-panel py-12 md:py-16">
        <Container>
          <CopyBody lead={pageCopy.lead} sections={pageCopy.sections} />
        </Container>
      </section>

      <section className="border-b border-line py-10 md:py-12">
        <Container className="max-w-2xl">
          <h2 className="font-display text-xl text-ink md:text-2xl">
            {locale === 'es' ? 'Siguiente paso' : 'What happens next'}
          </h2>
          <ol className="mt-5 list-decimal space-y-3 pl-5 font-body text-sm leading-relaxed text-ink-soft md:text-base">
            {nextSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          {pageCopy.next && (
            <p className="mt-6 font-body text-sm leading-relaxed text-ink-soft md:text-base">{pageCopy.next}</p>
          )}
        </Container>
      </section>
    </main>
  )
}
