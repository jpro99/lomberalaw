import type { Locale } from '@/lib/payload'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Container } from '@/components/Container'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CopyBody } from '@/components/CopyBody'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'
import { pageMetadata } from '@/lib/seo'
import { cityCopy, cityDisplayName } from '@/lib/cityBodyCopy'
import { isLiveCity } from '@/lib/routing'
import {
  EN_TO_ES_BK_SERVICE,
  localizedCanonicalUrl,
  hasSpanishServiceSlug,
  practiceCityHref,
  practiceHubHref,
  serviceHref,
} from '@/lib/spanishPaths'
import { t } from '@/lib/dictionary'

type PracticeSlug = 'personal-injury' | 'bankruptcy'

const PI_CITY_SERVICES = [
  'truck-accidents',
  'rideshare-accidents',
  'wrongful-death',
  'traumatic-brain-injury',
  'spinal-cord-injury',
  'car-accidents',
  'motorcycle-accidents',
  'dog-bites',
] as const

const BK_CITY_SERVICES = Object.keys(EN_TO_ES_BK_SERVICE)

const SERVICE_LABELS: Record<string, { en: string; es: string }> = {
  'truck-accidents': { en: 'Truck Accidents', es: 'Accidentes de Camión' },
  'rideshare-accidents': { en: 'Rideshare Accidents', es: 'Accidentes de Rideshare' },
  'wrongful-death': { en: 'Wrongful Death', es: 'Muerte Injusta' },
  'traumatic-brain-injury': { en: 'Traumatic Brain Injury', es: 'Lesión Cerebral' },
  'spinal-cord-injury': { en: 'Spinal Cord Injury', es: 'Lesiones de Médula Espinal' },
  'car-accidents': { en: 'Car Accidents', es: 'Accidentes de Auto' },
  'motorcycle-accidents': { en: 'Motorcycle Accidents', es: 'Accidentes de Motocicleta' },
  'dog-bites': { en: 'Dog Bites', es: 'Mordeduras de Perro' },
  'chapter-7': { en: 'Chapter 7 Bankruptcy', es: 'Bancarrota Capítulo 7' },
  'chapter-13': { en: 'Chapter 13 Bankruptcy', es: 'Bancarrota Capítulo 13' },
  'foreclosure-defense': { en: 'Foreclosure Defense', es: 'Defensa de Ejecución Hipotecaria' },
  'wage-garnishment': { en: 'Wage Garnishment', es: 'Embargo de Salario' },
}

export async function getPracticeCityMetadata(
  practiceSlug: PracticeSlug,
  citySlug: string,
  locale: Locale,
) {
  const pageCopy = cityCopy(practiceSlug, citySlug, locale)
  if (!pageCopy) {
    const name = cityDisplayName(citySlug, locale)
    return pageMetadata({
      title:
        locale === 'es'
          ? `${name} | Lombera Law`
          : `${name} Lawyer | Lombera Law`,
      description:
        locale === 'es'
          ? `Edgar P. Lombera — ${name}. Consulta gratuita.`
          : `Edgar P. Lombera — ${name}. Free consult.`,
      path: `/${practiceSlug}/${citySlug}`,
      locale,
    })
  }
  return pageMetadata({
    title: pageCopy.title,
    description: pageCopy.description,
    path: `/${practiceSlug}/${citySlug}`,
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

  const pageCopy = cityCopy(practiceSlug, citySlug, locale)
  if (!pageCopy) notFound()

  const name = cityDisplayName(citySlug, locale)
  const copy = t(locale)
  const practicePath = practiceHubHref(locale, practiceSlug)
  const cityPath = practiceCityHref(locale, practiceSlug, citySlug)
  const canonicalUrl = localizedCanonicalUrl(`/${practiceSlug}/${citySlug}`, locale)
  const homeHref = locale === 'en' ? '/' : '/es/inicio/'
  const serviceSlugs = practiceSlug === 'personal-injury' ? PI_CITY_SERVICES : BK_CITY_SERVICES
  const services = serviceSlugs.filter(
    (service) => locale === 'en' || hasSpanishServiceSlug(practiceSlug, service),
  )
  const siblingPractice = practiceSlug === 'personal-injury' ? 'bankruptcy' : 'personal-injury'
  const siblingHref = practiceCityHref(locale, siblingPractice, citySlug)
  const siblingLabel =
    locale === 'es'
      ? practiceSlug === 'personal-injury'
        ? `Bancarrota en ${name}`
        : `Lesiones personales en ${name}`
      : practiceSlug === 'personal-injury'
        ? `${name} bankruptcy`
        : `${name} personal injury`
  const homeCrumb = locale === 'es' ? 'Inicio' : 'Home'
  const practiceCrumb =
    practiceSlug === 'personal-injury' ? copy.nav.personalInjury : copy.nav.bankruptcy

  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: homeCrumb, url: `https://lomberalaw.com${homeHref}` },
          {
            name: practiceCrumb,
            url: `https://lomberalaw.com${practicePath}`,
          },
          { name, url: canonicalUrl },
        ])}
      />

      <section className="border-b border-line bg-panel py-12 md:py-16">
        <Container>
          <Breadcrumbs
            items={[
              { name: homeCrumb, href: homeHref },
              {
                name: practiceCrumb,
                href: practicePath,
              },
              { name, href: cityPath },
            ]}
          />
          <h1 className="mt-4 font-display text-[2.5rem] leading-tight text-ink">{pageCopy.h1}</h1>
          <div className="mt-6">
            <CopyBody lead={pageCopy.lead} sections={pageCopy.sections} />
          </div>
          <p className="mt-8 max-w-2xl font-body text-sm leading-relaxed text-ink-soft">
            {locale === 'es' ? (
              <>
                {practiceSlug === 'personal-injury' ? (
                  <>
                    La bancarrota por deuda médica o embargos es un expediente separado — vea{' '}
                    <Link href={siblingHref} className="font-semibold text-gold hover:text-ink">
                      {siblingLabel}
                    </Link>
                    . Se presenta en 3420 Twelfth Street, Riverside.
                  </>
                ) : (
                  <>
                    Un choque o lesión en {name} es un reclamo de contingencia separado — vea{' '}
                    <Link href={siblingHref} className="font-semibold text-gold hover:text-ink">
                      {siblingLabel}
                    </Link>
                    . Sin honorarios a menos que ganemos.
                  </>
                )}
              </>
            ) : (
              <>
                {practiceSlug === 'personal-injury' ? (
                  <>
                    Medical-debt bankruptcy or wage garnishment is a separate federal file — see{' '}
                    <Link href={siblingHref} className="font-semibold text-gold hover:text-ink">
                      {siblingLabel}
                    </Link>
                    . Consumer cases file at 3420 Twelfth Street, Riverside.
                  </>
                ) : (
                  <>
                    A crash or injury in {name} is a separate contingency claim — see{' '}
                    <Link href={siblingHref} className="font-semibold text-gold hover:text-ink">
                      {siblingLabel}
                    </Link>
                    . No fee unless we win.
                  </>
                )}
              </>
            )}
          </p>
        </Container>
      </section>

      {services.length > 0 && (
        <section className="py-12 md:py-16">
          <Container>
            <h2 className="font-display text-xl text-ink">
              {locale === 'es' ? 'También manejamos' : 'We also handle'}
            </h2>
            <ul className="mt-6 grid gap-3 border-t border-line sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => {
                const labels = SERVICE_LABELS[service]
                const label = labels ? labels[locale] : service.replace(/-/g, ' ')
                return (
                  <li key={service}>
                    <Link
                      href={serviceHref(locale, practiceSlug, service)}
                      className="block border-b border-line py-4 font-body text-sm font-medium text-ink hover:text-gold"
                    >
                      {label}
                    </Link>
                  </li>
                )
              })}
            </ul>
            {practiceSlug === 'personal-injury' && (
              <p className="mt-6 max-w-2xl font-body text-sm text-ink-soft">
                {locale === 'es'
                  ? 'No manejamos resbalones y caídas ni responsabilidad de productos.'
                  : 'We do not handle slip-and-fall or product liability.'}
              </p>
            )}
          </Container>
        </section>
      )}
    </main>
  )
}
