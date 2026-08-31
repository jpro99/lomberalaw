import type { Metadata } from 'next'
import { t } from '@/lib/dictionary'
import type { Locale } from '@/lib/payload'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { PracticeCard } from '@/components/PracticeCard'
import { EdgarHeadshot } from '@/components/EdgarHeadshot'
import { HomeCityList } from '@/components/HomeCityList'
import { HomeHeroBackdrop } from '@/components/HomeHeroBackdrop'
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
  const redlands = OFFICES[0]

  const piHref = locale === 'es' ? '/es/lesiones-personales/' : '/personal-injury/'
  const bkHref = locale === 'es' ? '/es/bancarrota/' : '/bankruptcy/'

  const nextStep =
    locale === 'es'
      ? 'Elija lesiones personales o bancarrota a continuación, o use el formulario para hablar con Edgar.'
      : 'Choose personal injury or bankruptcy below, or use the form to reach Edgar.'

  return (
    <main>
      <JsonLd data={firmLegalServiceSchema()} />

      <section className="relative isolate overflow-hidden border-b border-line">
        <HomeHeroBackdrop />
        <Container className="relative z-0 grid items-center gap-10 py-12 md:grid-cols-[1.05fr_auto] md:gap-12 md:py-16 lg:py-20">
          <div className="max-w-xl">
            <p className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-gold">
              {copy.officesLine}
            </p>
            <h1 className="mt-4 font-display text-[2rem] leading-[1.12] text-navy md:text-[2.75rem]">{h1}</h1>
            {pageCopy.lead?.[0] && (
              <p className="mt-5 max-w-lg font-body text-base leading-relaxed text-navy">{pageCopy.lead[0]}</p>
            )}
            <div className="mt-8">
              <Button href={`tel:${redlands.tel}`} variant="accent" size="lg" trackAs="call">
                {redlands.phone}
              </Button>
              <p className="mt-4 max-w-md font-body text-sm leading-relaxed text-navy">{nextStep}</p>
            </div>
          </div>
          <div className="justify-self-center md:justify-self-end">
            <EdgarHeadshot priority feathered />
          </div>
        </Container>
      </section>

      <section className="border-b border-line bg-stone py-14 md:py-16">
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

      <HomeCityList locale={locale} />
    </main>
  )
}
