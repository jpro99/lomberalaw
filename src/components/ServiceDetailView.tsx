import Link from 'next/link'
import { RichText } from '@payloadcms/richtext-lexical/react'
import { notFound } from 'next/navigation'
import type { Locale } from '@/lib/payload'
import { getServiceBundle } from '@/lib/getService'
import { Container } from '@/components/Container'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CopyBody } from '@/components/CopyBody'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbSchema, legalServiceSchema } from '@/lib/schema'
import { pageMetadata, getBkServiceSeo, getPiServiceSeo } from '@/lib/seo'
import { serviceCopy } from '@/lib/serviceBodyCopy'
import { localizedCanonicalUrl, practiceHubHref, serviceHref } from '@/lib/spanishPaths'

type PracticeSlug = 'personal-injury' | 'bankruptcy'

export async function getServiceMetadata(practiceSlug: PracticeSlug, serviceSlug: string, locale: Locale) {
  const staticCopy = serviceCopy(practiceSlug, serviceSlug, locale)
  if (staticCopy) {
    return pageMetadata({
      title: staticCopy.title,
      description: staticCopy.description,
      path: `/${practiceSlug}/${serviceSlug}`,
      locale,
    })
  }
  const locked =
    practiceSlug === 'personal-injury'
      ? getPiServiceSeo(serviceSlug, locale)
      : getBkServiceSeo(serviceSlug, locale)
  if (locked) {
    return pageMetadata({
      title: locked.title,
      description: locked.description,
      path: `/${practiceSlug}/${serviceSlug}`,
      locale,
    })
  }
  const bundle = await getServiceBundle(practiceSlug, serviceSlug, locale)
  if (!bundle) return {}
  return pageMetadata({
    title: (bundle.service.seo?.metaTitle as string) || `${bundle.service.title} | Lombera Law`,
    description: (bundle.service.seo?.metaDescription as string) || (bundle.service.summary as string),
    path: `/${practiceSlug}/${serviceSlug}`,
    locale,
  })
}

export async function ServiceDetailView({
  practiceSlug,
  serviceSlug,
  locale,
}: {
  practiceSlug: PracticeSlug
  serviceSlug: string
  locale: Locale
}) {
  const staticCopy = serviceCopy(practiceSlug, serviceSlug, locale)
  const bundle = await getServiceBundle(practiceSlug, serviceSlug, locale)
  if (!staticCopy && !bundle) notFound()

  const practiceArea = bundle?.practiceArea ?? {
    name:
      practiceSlug === 'personal-injury'
        ? locale === 'es'
          ? 'Lesiones Personales'
          : 'Personal Injury'
        : locale === 'es'
          ? 'Bancarrota'
          : 'Bankruptcy',
  }
  const service = bundle?.service
  const siblingServices = bundle?.siblingServices ?? []

  const homeHref = locale === 'en' ? '/' : '/es/inicio/'
  const homeCrumb = locale === 'es' ? 'Inicio' : 'Home'
  const practicePath = practiceHubHref(locale, practiceSlug)
  const practiceCrumb = practiceArea.name as string
  const canonicalUrl = localizedCanonicalUrl(`/${practiceSlug}/${serviceSlug}`, locale)
  const servicePath = serviceHref(locale, practiceSlug, serviceSlug)

  const h1 = staticCopy?.h1 ?? (service?.title as string)
  const description = staticCopy?.description ?? (service?.summary as string)
  const breadcrumbName = staticCopy?.h1 ?? (service?.title as string)

  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: homeCrumb, url: `https://lomberalaw.com${homeHref}` },
          { name: practiceCrumb, url: `https://lomberalaw.com${practicePath}` },
          { name: breadcrumbName, url: canonicalUrl },
        ])}
      />
      <JsonLd
        data={legalServiceSchema({
          name: h1,
          description: description || '',
          url: canonicalUrl,
          areaServed: ['Inland Empire', 'Coachella Valley', 'Riverside County', 'San Bernardino County'],
        })}
      />

      <section className="border-b border-line bg-panel py-12 md:py-16">
        <Container>
          <Breadcrumbs
            items={[
              { name: homeCrumb, href: homeHref },
              { name: practiceCrumb, href: practicePath },
              { name: breadcrumbName, href: servicePath },
            ]}
          />
          <h1 className="mt-4 font-display text-[2.5rem] leading-tight text-ink">{h1}</h1>
          {staticCopy ? (
            <div className="mt-6">
              <CopyBody lead={staticCopy.lead} sections={staticCopy.sections} />
            </div>
          ) : (
            service?.summary && (
              <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-ink-soft">
                {service.summary as string}
              </p>
            )
          )}
        </Container>
      </section>

      {!staticCopy && service?.body && (
        <section className="py-14 md:py-20">
          <Container className="prose prose-headings:font-display prose-headings:text-ink prose-p:font-body prose-p:text-ink-soft prose-a:text-clay max-w-2xl">
            <RichText data={service.body as never} />
          </Container>
        </section>
      )}

      {siblingServices.length > 0 && (
        <section className="border-t border-line bg-stone py-14 md:py-20">
          <Container>
            <h2 className="font-display text-2xl font-semibold text-ink">
              {locale === 'es' ? 'Otros casos que manejamos' : 'Other cases we handle'}
            </h2>
            <ul className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
              {siblingServices.map((s) => (
                <li key={s.id}>
                  <Link
                    href={serviceHref(locale, practiceSlug, s.slug as string)}
                    className="interactive-card block rounded-md border border-line bg-panel px-5 py-4 font-body text-sm font-medium text-ink hover:border-clay"
                  >
                    {s.title as string}
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
