import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Locale } from '@/lib/payload'
import { getCityHub } from '@/lib/getLocations'
import { t } from '@/lib/dictionary'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CityFactsCard } from '@/components/CityFactsCard'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbSchema } from '@/lib/schema'

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

  const personalInjury = services.filter((s: any) => s.practiceArea?.slug === 'personal-injury')
  const bankruptcy = services.filter((s: any) => s.practiceArea?.slug === 'bankruptcy')

  const serviceLink = (s: any) => {
    const practiceSlug = s.practiceArea?.slug === 'bankruptcy' ? 'bankruptcy' : 'personal-injury'
    return s.hasMoneyPage
      ? `${prefix}/${practiceSlug}/${s.slug}/${citySlug}`
      : `${prefix}/${practiceSlug}/${s.slug}`
  }

  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://lomberalaw.com' + (locale === 'es' ? '/es' : '') },
          { name: locale === 'es' ? 'Ubicaciones' : 'Locations', url: `https://lomberalaw.com${prefix}/locations` },
          { name: city.name as string, url: `https://lomberalaw.com${prefix}/locations/${citySlug}` },
        ])}
      />

      <section className="border-b border-line bg-stone py-14 md:py-20">
        <Container>
          <Breadcrumbs
            items={[
              { name: 'Home', href: locale === 'en' ? '/' : '/es' },
              { name: locale === 'es' ? 'Ubicaciones' : 'Locations', href: `${prefix}/locations` },
              { name: city.name as string, href: `${prefix}/locations/${citySlug}` },
            ]}
          />
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-ink md:text-5xl">
            {locale === 'es' ? `Abogado en ${city.name}` : `${city.name} Attorney`}
          </h1>
          {city.localIntro && (
            <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-ink-soft">
              {city.localIntro as string}
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
                {personalInjury.map((s: any) => (
                  <li key={s.id}>
                    <Link
                      href={serviceLink(s)}
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
                {bankruptcy.map((s: any) => (
                  <li key={s.id}>
                    <Link
                      href={serviceLink(s)}
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
              courthouse={city.courthouse as string}
              hospitals={city.hospitals as any}
              highways={city.highways as any}
              locale={locale}
            />
            {Array.isArray(city.nearbyCities) && city.nearbyCities.length > 0 && (
              <div className="rounded-lg border border-line bg-panel p-6">
                <p className="font-body text-xs font-semibold uppercase tracking-wide text-ink-muted">
                  {locale === 'es' ? 'Ciudades cercanas' : 'Nearby cities'}
                </p>
                <ul className="mt-3 space-y-2">
                  {city.nearbyCities.map((nc: any) => (
                    <li key={nc.id}>
                      <Link href={`${prefix}/locations/${nc.slug}`} className="font-body text-sm text-ink-soft hover:text-clay">
                        {nc.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </aside>
        </Container>
      </section>
    </main>
  )
}
