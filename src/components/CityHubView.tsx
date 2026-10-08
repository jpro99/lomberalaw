import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Locale } from '@/lib/payload'
import { getCityHub, type CityHubCity, type CityHubService } from '@/lib/getLocations'
import type { CityHubNamedRow, CityHubPracticeArea } from '@/lib/cityHubTypes'
import { t } from '@/lib/dictionary'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CityFactsCard } from '@/components/CityFactsCard'
import { JsonLd } from '@/components/JsonLd'
import { HorizonMotif } from '@/components/HorizonMotif'
import { breadcrumbSchema } from '@/lib/schema'

function practiceAreaSlug(practiceArea: CityHubPracticeArea): string | undefined {
  return typeof practiceArea === 'object' ? practiceArea.slug : undefined
}

function cityHorizonVariant(servingOffice: CityHubCity['servingOffice']): 'desert' | 'citrus' {
  if (servingOffice && typeof servingOffice === 'object' && servingOffice.name?.includes('Palm Springs')) {
    return 'desert'
  }
  return 'citrus'
}

function namedList(items: CityHubNamedRow[] | null | undefined): { name: string }[] | undefined {
  if (!items?.length) return undefined
  const named = items.flatMap((item) => (item.name ? [{ name: item.name }] : []))
  return named.length > 0 ? named : undefined
}

function serviceLink(s: CityHubService, prefix: string, citySlug: string) {
  const practiceSlug = practiceAreaSlug(s.practiceArea) === 'bankruptcy' ? 'bankruptcy' : 'personal-injury'
  return s.hasMoneyPage
    ? `${prefix}/${practiceSlug}/${s.slug}/${citySlug}`
    : `${prefix}/${practiceSlug}/${s.slug}`
}

export async function getCityHubMetadata(citySlug: string, locale: Locale) {
  const bundle = await getCityHub(citySlug, locale)
  if (!bundle) return {}
  return {
    title: `${locale === 'es' ? 'Abogado en' : 'Attorney in'} ${bundle.city.name} | Lombera Law`,
  }
}

export async function CityHubView({ citySlug, locale }: { citySlug: string; locale: Locale }) {
  const bundle = await getCityHub(citySlug, locale)
  if (!bundle) notFound()
  const { city, services } = bundle
  const copy = t(locale)
  const prefix = locale === 'en' ? '' : '/es'
  const homeCrumb = locale === 'es' ? 'Inicio' : 'Home'
  const homeHref = locale === 'en' ? '/' : '/es/inicio/'

  const personalInjury = services.filter((s) => practiceAreaSlug(s.practiceArea) === 'personal-injury')
  const bankruptcy = services.filter((s) => practiceAreaSlug(s.practiceArea) === 'bankruptcy')

  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: homeCrumb, url: `https://lomberalaw.com${homeHref}` },
          { name: locale === 'es' ? 'Ubicaciones' : 'Locations', url: `https://lomberalaw.com${prefix}/locations` },
          { name: city.name, url: `https://lomberalaw.com${prefix}/locations/${citySlug}` },
        ])}
      />

      <section className="relative overflow-hidden border-b border-line bg-panel py-14 md:py-20">
        <HorizonMotif
          variant={cityHorizonVariant(city.servingOffice)}
          className="pointer-events-none absolute inset-x-0 bottom-0 h-20 w-full text-ink md:h-28"
        />
        <Container>
          <Breadcrumbs
            items={[
              { name: homeCrumb, href: homeHref },
              { name: locale === 'es' ? 'Ubicaciones' : 'Locations', href: `${prefix}/locations` },
              { name: city.name, href: `${prefix}/locations/${citySlug}` },
            ]}
          />
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-ink md:text-5xl">
            {locale === 'es' ? `Abogado en ${city.name}` : `${city.name} Attorney`}
          </h1>
          {city.localIntro && (
            <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-ink-soft">
              {city.localIntro}
            </p>
          )}
          <div className="mt-8">
            <Button href={`${prefix}/contact`} size="lg">
              {copy.home.heroCTA}
            </Button>
          </div>
        </Container>
      </section>

      <Container>
        <hr className="horizon-rule" />
      </Container>

      <section className="py-14 md:py-20">
        <Container className="grid gap-10 md:grid-cols-[1fr_320px]">
          <div className="space-y-10">
            <div>
              <h2 className="font-display text-xl font-semibold text-ink">{copy.home.piName}</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {personalInjury.map((s) => (
                  <li key={s.id}>
                    <Link
                      href={serviceLink(s, prefix, citySlug)}
                      className="interactive-card block rounded-md border border-line bg-panel px-5 py-4 font-body text-sm font-medium text-ink hover:border-clay"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="font-display text-xl font-semibold text-ink">{copy.home.bkName}</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {bankruptcy.map((s) => (
                  <li key={s.id}>
                    <Link
                      href={serviceLink(s, prefix, citySlug)}
                      className="interactive-card block rounded-md border border-line bg-panel px-5 py-4 font-body text-sm font-medium text-ink hover:border-clay"
                    >
                      {s.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <aside className="space-y-5">
            <CityFactsCard
              courthouse={city.courthouse ?? undefined}
              hospitals={namedList(city.hospitals)}
              highways={namedList(city.highways)}
              locale={locale}
            />
            {Array.isArray(city.nearbyCities) && city.nearbyCities.length > 0 && (
              <div className="rounded-lg border border-line bg-panel p-6">
                <p className="font-body text-xs font-semibold uppercase tracking-wide text-ink-muted">
                  {locale === 'es' ? 'Ciudades cercanas' : 'Nearby cities'}
                </p>
                <ul className="mt-3 space-y-2">
                  {city.nearbyCities.map((nc) => {
                    if (typeof nc !== 'object') return null
                    return (
                      <li key={nc.id}>
                        <Link href={`${prefix}/locations/${nc.slug}`} className="font-body text-sm text-ink-soft hover:text-clay">
                          {nc.name}
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </div>
            )}
          </aside>
        </Container>
      </section>
    </main>
  )
}
