import { RichText } from '@payloadcms/richtext-lexical/react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { getPayload, PayloadUnavailableError } from '@/lib/payload'
import type { Locale } from '@/lib/payload'
import { t } from '@/lib/dictionary'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import { attorneySchema, breadcrumbSchema } from '@/lib/schema'
import { EDGAR_PHOTO_FALLBACK, resolveMediaUrl } from '@/lib/mediaUrl'
import { pageMetadata } from '@/lib/seo'
import { getOffices } from '@/lib/getOffices'
import { FIRM } from '@/lib/nap'

export async function getAboutMetadata(locale: Locale, path = '/about-us') {
  const title =
    locale === 'es'
      ? `${FIRM.founder} — Abogado de Lesiones y Bancarrota | Lombera Law`
      : `${FIRM.founder} — Personal Injury & Bankruptcy Attorney | Lombera Law`
  const description =
    locale === 'es'
      ? 'Conozca a Edgar P. Lombera, abogado bilingüe con más de 15 años de experiencia en lesiones personales y bancarrota en el Inland Empire y el Valle de Coachella.'
      : 'Meet Edgar P. Lombera, bilingual attorney with 15+ years representing personal injury and bankruptcy clients across the Inland Empire and Coachella Valley.'

  return pageMetadata({ title, description, path, locale })
}

export async function AboutUsView({ locale, canonicalPath = '/about-us' }: { locale: Locale; canonicalPath?: string }) {
  const prefix = locale === 'en' ? '' : '/es'
  const copy = t(locale)
  const canonicalUrl = `https://lomberalaw.com${prefix}${canonicalPath}/`

  let attorney: {
    name?: string
    bio?: unknown
    barNumber?: string
    languages?: string[]
    credentials?: { item: string }[]
    photo?: unknown
  } | null = null

  try {
    const payload = await getPayload()
    const res = await payload.find({
      collection: 'attorneys',
      where: { slug: { equals: 'edgar-lombera' } },
      locale,
      limit: 1,
    })
    attorney = (res.docs[0] as unknown as typeof attorney) || null
  } catch (e) {
    if (!(e instanceof PayloadUnavailableError)) throw e
    attorney = { name: FIRM.founder, languages: ['English', 'Spanish'] }
  }

  if (!attorney) notFound()

  const offices = await getOffices(locale)
  const primaryPhone = offices[0]?.phone

  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://lomberalaw.com' + (locale === 'es' ? '/es/inicio/' : '/') },
          {
            name: locale === 'es' ? 'Sobre Nosotros' : 'About Us',
            url: canonicalUrl,
          },
        ])}
      />
      <JsonLd
        data={attorneySchema({
          name: attorney.name as string,
          url: canonicalUrl,
          barNumber: attorney.barNumber as string,
          languages: (attorney.languages as string[]) || [],
        })}
      />

      <section className="border-b border-line bg-panel py-12 md:py-16">
        <Container>
          <Breadcrumbs
            items={[
              { name: 'Home', href: locale === 'en' ? '/' : '/es/inicio/' },
              {
                name: locale === 'es' ? 'Sobre Nosotros' : 'About Us',
                href: `${prefix}${canonicalPath}/`,
              },
            ]}
          />
          <div className="mt-6 grid gap-8 md:grid-cols-[200px_1fr] md:items-start">
            {(() => {
              const photo =
                attorney.photo && typeof attorney.photo === 'object'
                  ? (attorney.photo as { url?: string; alt?: string })
                  : null
              const photoSrc = resolveMediaUrl(photo, EDGAR_PHOTO_FALLBACK)
              return photoSrc ? (
                <div className="relative h-48 w-48 flex-none overflow-hidden border border-line md:h-[200px] md:w-[200px]">
                  <Image
                    src={photoSrc}
                    alt={photo?.alt || (attorney.name as string)}
                    fill
                    sizes="200px"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div
                  className="flex h-48 w-48 flex-none items-center justify-center border border-line bg-stone md:h-[200px] md:w-[200px]"
                  aria-hidden
                >
                  <span className="font-display text-4xl text-ink/20">EPL</span>
                </div>
              )
            })()}
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                {copy.attorney.kicker}
              </p>
              <h1 className="mt-2 font-display text-3xl text-ink md:text-4xl">{attorney.name as string}</h1>

              {Array.isArray(attorney.credentials) && attorney.credentials.length > 0 && (
                <div className="mt-4">
                  <p className="font-body text-xs font-semibold uppercase tracking-wide text-ink-muted">
                    {copy.attorney.credKicker}
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {attorney.credentials.map((c, i) => (
                      <li key={i} className="border border-line bg-stone px-3 py-1 font-body text-xs text-ink-soft">
                        {c.item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {Array.isArray(attorney.languages) && attorney.languages.length > 0 && (
                <div className="mt-4">
                  <p className="font-body text-xs font-semibold uppercase tracking-wide text-ink-muted">
                    {copy.attorney.langKicker}
                  </p>
                  <p className="mt-1 font-body text-sm text-ink-soft">{attorney.languages.join(' · ')}</p>
                </div>
              )}

              {primaryPhone && (
                <div className="mt-6">
                  <Button href={`tel:${primaryPhone.replace(/\D/g, '')}`} size="lg" trackAs="call">
                    {copy.attorney.bioCTA}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {attorney.bio != null && (
        <section className="py-12 md:py-16">
          <Container className="prose prose-headings:font-display prose-headings:text-ink prose-p:font-body prose-p:text-ink-soft prose-a:text-gold max-w-2xl">
            <RichText data={attorney.bio as never} />
          </Container>
        </section>
      )}
    </main>
  )
}
