import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Locale } from '@/lib/payload'
import { getPracticeAreaBundle } from '@/lib/getPracticeArea'
import { t } from '@/lib/dictionary'
import { Container } from '@/components/Container'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CopyBody } from '@/components/CopyBody'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbSchema, legalServiceSchema } from '@/lib/schema'
import { pageMetadata, PI_HUB_SEO, PI_HUB_SEO_ES, BK_HUB_SEO, BK_HUB_SEO_ES } from '@/lib/seo'
import { hubCopy } from '@/lib/hubBodyCopy'
import { PI_HUB_SERVICES, BK_SERVICES } from '@/lib/routing'
import { hasSpanishServiceSlug, practiceHubHref, serviceHref } from '@/lib/spanishPaths'

type Slug = 'personal-injury' | 'bankruptcy'

export async function getPracticeHubMetadata(slug: Slug, locale: Locale) {
  if (slug === 'personal-injury') {
    const seo = locale === 'es' ? PI_HUB_SEO_ES : PI_HUB_SEO
    return pageMetadata({
      title: seo.title,
      description: seo.description,
      path: `/${slug}`,
      locale,
    })
  }
  const seo = locale === 'es' ? BK_HUB_SEO_ES : BK_HUB_SEO
  return pageMetadata({
    title: seo.title,
    description: seo.description,
    path: `/${slug}`,
    locale,
  })
}

export async function PracticeHubView({ slug, locale }: { slug: Slug; locale: Locale }) {
  const bundle = await getPracticeAreaBundle(slug, locale)
  if (!bundle) notFound()

  const hubSlugs = slug === 'personal-injury' ? PI_HUB_SERVICES : [...BK_SERVICES]
  const cmsBySlug = new Map(bundle.services.map((s) => [s.slug as string, s]))
  const staticTitles: Record<string, { en: string; es: string }> = {
    'car-accidents': { en: 'Car Accidents', es: 'Accidentes de Auto' },
    'truck-accidents': { en: 'Truck Accidents', es: 'Accidentes de Camión' },
    'motorcycle-accidents': { en: 'Motorcycle Accidents', es: 'Accidentes de Motocicleta' },
    'rideshare-accidents': { en: 'Rideshare Accidents', es: 'Accidentes de Rideshare' },
    'pedestrian-accidents': { en: 'Pedestrian Accidents', es: 'Accidentes de Peatones' },
    'wrongful-death': { en: 'Wrongful Death', es: 'Muerte Injusta' },
    'dog-bites': { en: 'Dog Bites', es: 'Mordeduras de Perro' },
    'traumatic-brain-injury': { en: 'Traumatic Brain Injury', es: 'Lesión Cerebral' },
    'spinal-cord-injury': { en: 'Spinal Cord Injury', es: 'Lesiones de Médula Espinal' },
    'chapter-7': { en: 'Chapter 7 Bankruptcy', es: 'Bancarrota Capítulo 7' },
    'chapter-13': { en: 'Chapter 13 Bankruptcy', es: 'Bancarrota Capítulo 13' },
    'foreclosure-defense': { en: 'Foreclosure Defense', es: 'Defensa de Ejecución Hipotecaria' },
    'wage-garnishment': { en: 'Wage Garnishment', es: 'Embargo de Salario' },
  }
  const services = hubSlugs
    .filter((serviceSlug) => locale === 'en' || hasSpanishServiceSlug(slug, serviceSlug))
    .map((serviceSlug) => {
      const doc = cmsBySlug.get(serviceSlug)
      if (doc) return doc
      const labels = staticTitles[serviceSlug]
      return {
        id: serviceSlug,
        slug: serviceSlug,
        title: labels ? labels[locale] : serviceSlug,
      }
    })
  const copy = t(locale)
  const pageCopy = hubCopy(slug, locale)
  const h1 = pageCopy.h1
  const practicePath = practiceHubHref(locale, slug)
  const homeHref = locale === 'en' ? '/' : '/es/inicio/'

  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: `https://lomberalaw.com${homeHref}` },
          { name: h1, url: `https://lomberalaw.com${practicePath}` },
        ])}
      />
      <JsonLd
        data={legalServiceSchema({
          name: h1,
          description: pageCopy.lead?.[0] || pageCopy.sections[0]?.paragraphs[0] || '',
          url: `https://lomberalaw.com${practicePath}`,
          areaServed: ['Inland Empire', 'Coachella Valley', 'Riverside County', 'San Bernardino County'],
        })}
      />

      <section className="border-b border-line bg-panel py-12 md:py-16">
        <Container>
          <Breadcrumbs
            items={[
              { name: 'Home', href: homeHref },
              { name: slug === 'personal-injury' ? copy.nav.personalInjury : copy.nav.bankruptcy, href: practicePath },
            ]}
          />
          <h1 className="mt-4 font-display text-[2.5rem] leading-tight text-ink">{h1}</h1>
          <div className="mt-6">
            <CopyBody lead={pageCopy.lead} sections={pageCopy.sections} />
          </div>
        </Container>
      </section>

      {services.length > 0 && (
        <section className="py-12 md:py-16">
          <Container>
            <h2 className="font-display text-xl text-ink">
              {locale === 'es' ? 'Tipos de casos' : 'Case types'}
            </h2>
            <ul className="mt-6 grid gap-3 border-t border-line sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={serviceHref(locale, slug, service.slug as string)}
                    className="block border-b border-line py-4 font-body text-sm font-medium text-ink hover:text-gold"
                  >
                    {service.title as string}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}
    </main>
  )
}
