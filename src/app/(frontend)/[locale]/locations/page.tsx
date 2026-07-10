import Link from 'next/link'
import type { Locale } from '@/lib/payload'
import { getAllCities } from '@/lib/getLocations'
import { Container } from '@/components/Container'
import { Breadcrumbs } from '@/components/Breadcrumbs'

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  return {
    title: locale === 'es' ? 'Ubicaciones | Lombera Law' : 'Locations | Lombera Law',
    description:
      locale === 'es'
        ? 'Ciudades del Inland Empire y el Valle de Coachella donde atendemos clientes.'
        : 'Cities across the Inland Empire and Coachella Valley we serve.',
  }
}

export default async function LocationsHub({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const prefix = locale === 'en' ? '' : '/es'
  const cities = await getAllCities(locale)

  const byCounty = cities.reduce<Record<string, typeof cities>>((acc, city) => {
    const key = city.county as string
    acc[key] = acc[key] || []
    acc[key].push(city)
    return acc
  }, {})

  return (
    <main>
      <section className="border-b border-line bg-stone py-14 md:py-20">
        <Container>
          <Breadcrumbs items={[{ name: 'Home', href: locale === 'en' ? '/' : '/es' }, { name: 'Locations', href: `${prefix}/locations` }]} />
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-semibold text-ink md:text-5xl">
            {locale === 'es' ? 'Dónde atendemos' : 'Where we serve'}
          </h1>
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container>
          {Object.entries(byCounty).map(([county, countyCities]) => (
            <div key={county} className="mb-10 last:mb-0">
              <h2 className="font-display text-xl font-semibold text-ink">{county}</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
                {countyCities.map((city) => (
                  <li key={city.id}>
                    <Link
                      href={`${prefix}/locations/${city.slug}`}
                      className="interactive-card block rounded-md border border-line bg-panel px-5 py-4 font-body text-sm font-medium text-ink hover:border-clay"
                    >
                      {city.name as string}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </Container>
      </section>
    </main>
  )
}
