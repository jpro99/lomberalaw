import type { Locale } from '@/lib/payload'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { Button } from '@/components/Button'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'
import { cityPhone, isLiveCity } from '@/lib/routing'
import { pageMetadata } from '@/lib/seo'
import { t } from '@/lib/dictionary'

type PracticeSlug = 'personal-injury' | 'bankruptcy'

const CITY_NAMES: Record<string, string> = {
  redlands: 'Redlands',
  'san-bernardino': 'San Bernardino',
  fontana: 'Fontana',
  riverside: 'Riverside',
  'moreno-valley': 'Moreno Valley',
  highland: 'Highland',
  'palm-springs': 'Palm Springs',
  'palm-desert': 'Palm Desert',
  'cathedral-city': 'Cathedral City',
  indio: 'Indio',
  beaumont: 'Beaumont',
  hemet: 'Hemet',
  colton: 'Colton',
  'desert-hot-springs': 'Desert Hot Springs',
  'rancho-cucamonga': 'Rancho Cucamonga',
}

export async function getPracticeCityMetadata(
  practiceSlug: PracticeSlug,
  citySlug: string,
  locale: Locale,
) {
  const name = CITY_NAMES[citySlug] || citySlug
  if (practiceSlug === 'personal-injury') {
    return pageMetadata({
      title: `${name} Personal Injury Lawyer | Lombera Law`,
      description: `Car, truck, and motorcycle accidents in ${name}. No fee unless we win. Call ${cityPhone(citySlug)}.`,
      path: `/personal-injury/${citySlug}`,
      locale,
    })
  }
  return pageMetadata({
    title: `${name} Bankruptcy Lawyer | Chapter 7 & 13`,
    description: `Chapter 7 and Chapter 13 bankruptcy in ${name}. Stop garnishment and foreclosure. Call ${cityPhone(citySlug)}.`,
    path: `/bankruptcy/${citySlug}`,
    locale,
  })
}

export async function PracticeCityView({
  practiceSlug,
  citySlug,
  locale,
}: {
  practiceSlug: PracticeSlug
  citySlug: string
  locale: Locale
}) {
  if (!isLiveCity(citySlug)) notFound()

  const name = CITY_NAMES[citySlug] || citySlug
  const phone = cityPhone(citySlug)
  const copy = t(locale)
  const prefix = locale === 'en' ? '' : '/es'
  const practicePath =
    locale === 'es'
      ? practiceSlug === 'personal-injury'
        ? '/es/lesiones-personales/'
        : '/es/bancarrota/'
      : `/${practiceSlug}/`
  const canonicalPath = `/${practiceSlug}/${citySlug}/`
  const canonicalUrl = `https://lomberalaw.com${prefix ? '' : ''}${canonicalPath}`.replace('//', '/').replace('https:/', 'https://')
  const homeHref = locale === 'en' ? '/' : '/es/inicio/'

  const h1 =
    practiceSlug === 'personal-injury'
      ? `${name} personal injury lawyer`
      : `${name} bankruptcy lawyer`

  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: `https://lomberalaw.com${homeHref}` },
          {
            name: practiceSlug === 'personal-injury' ? 'Personal Injury' : 'Bankruptcy',
            url: `https://lomberalaw.com${practicePath}`,
          },
          { name, url: `https://lomberalaw.com${canonicalPath}` },
        ])}
      />

      <section className="border-b border-line bg-panel py-12 md:py-16">
        <Container>
          <Breadcrumbs
            items={[
              { name: 'Home', href: homeHref },
              {
                name: practiceSlug === 'personal-injury' ? copy.nav.personalInjury : copy.nav.bankruptcy,
                href: practicePath,
              },
              { name, href: canonicalPath },
            ]}
          />
          <h1 className="mt-4 font-display text-[2.5rem] leading-tight text-ink">{h1}</h1>
          <p className="mt-4 max-w-xl font-body text-sm leading-relaxed text-ink-soft">
            {practiceSlug === 'personal-injury'
              ? `Edgar P. Lombera represents injured people in ${name} and surrounding areas on contingency. You pay no attorney fee unless we recover money.`
              : `Edgar P. Lombera files Chapter 7 and Chapter 13 bankruptcy for families in ${name} and the surrounding area. Free consultation in English or Spanish.`}
          </p>
          <div className="mt-6">
            <Button href={`tel:${phone.replace(/\D/g, '')}`} size="lg" trackAs="call">
              {copy.home.heroCTA}
            </Button>
          </div>
        </Container>
      </section>

      <section className="py-12">
        <Container>
          <h2 className="font-display text-xl text-ink">
            {locale === 'es' ? 'Servicios' : 'Services'}
          </h2>
          <ul className="mt-4 grid gap-2 sm:grid-cols-2">
            {(practiceSlug === 'personal-injury'
              ? ['car-accidents', 'truck-accidents', 'motorcycle-accidents', 'rideshare-accidents', 'wrongful-death', 'dog-bites']
              : ['chapter-7', 'chapter-13', 'foreclosure-defense', 'wage-garnishment']
            ).map((service) => (
              <li key={service}>
                <Link
                  href={`${practicePath}${service}/`}
                  className="font-body text-sm text-ink-soft underline decoration-gold underline-offset-2 hover:text-ink"
                >
                  {service.replace(/-/g, ' ')}
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </main>
  )
}
