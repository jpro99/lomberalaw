import Image from 'next/image'
import { getPayload, PayloadUnavailableError } from '@/lib/payload'
import type { Locale } from '@/lib/payload'
import { t } from '@/lib/dictionary'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { CopyBody } from '@/components/CopyBody'
import { JsonLd } from '@/components/JsonLd'
import { attorneySchema, breadcrumbSchema } from '@/lib/schema'
import { EDGAR_PHOTO_FALLBACK, resolveMediaUrl } from '@/lib/mediaUrl'
import { aboutSeo, pageMetadata } from '@/lib/seo'
import { ABOUT_COPY } from '@/lib/serviceBodyCopy'
import { getOffices } from '@/lib/getOffices'
import { FIRM } from '@/lib/nap'

export async function getAboutMetadata(locale: Locale, path = '/about-us') {
  const seo = aboutSeo(locale)
  return pageMetadata({ title: seo.title, description: seo.description, path, locale })
}

export async function AboutUsView({ locale, canonicalPath = '/about-us' }: { locale: Locale; canonicalPath?: string }) {
  const prefix = locale === 'en' ? '' : '/es'
  const copy = t(locale)
  const pageCopy = ABOUT_COPY[locale]
  const canonicalUrl = `https://lomberalaw.com${prefix}${canonicalPath}/`

  let photo: { url?: string; alt?: string } | null = null

  try {
    const payload = await getPayload()
    const res = await payload.find({
      collection: 'attorneys',
      where: { slug: { equals: 'edgar-lombera' } },
      locale,
      limit: 1,
    })
    const attorney = res.docs[0] as { photo?: unknown } | undefined
    if (attorney?.photo && typeof attorney.photo === 'object') {
      photo = attorney.photo as { url?: string; alt?: string }
    }
  } catch (e) {
    if (!(e instanceof PayloadUnavailableError)) throw e
  }

  const offices = await getOffices(locale)
  const primaryPhone = offices[0]?.phone
  const photoSrc = resolveMediaUrl(photo, EDGAR_PHOTO_FALLBACK)

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
          name: FIRM.founder,
          url: canonicalUrl,
          barNumber: FIRM.barNumber,
          languages: [...FIRM.languages],
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
            {photoSrc ? (
              <div className="relative h-48 w-48 flex-none overflow-hidden border border-line md:h-[200px] md:w-[200px]">
                <Image
                  src={photoSrc}
                  alt={photo?.alt || FIRM.founder}
                  fill
                  sizes="200px"
                  className="object-cover"
                  priority
                />
              </div>
            ) : (
              <div
                className="flex h-48 w-48 flex-none items-center justify-center border border-line bg-stone md:h-[200px] md:w-[200px]"
                aria-hidden
              >
                <span className="font-display text-4xl text-ink/20">EPL</span>
              </div>
            )}
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                {copy.attorney.kicker}
              </p>
              <h1 className="mt-2 font-display text-3xl text-ink md:text-4xl">{pageCopy.h1}</h1>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="border border-line bg-stone px-3 py-1 font-body text-xs text-ink-soft">
                  {locale === 'es' ? 'Colegio de Abogados' : 'State Bar'} {FIRM.barNumber}
                </span>
                <span className="border border-line bg-stone px-3 py-1 font-body text-xs text-ink-soft">
                  {locale === 'es' ? 'Admitido 8 dic 2008' : 'Admitted Dec 8, 2008'}
                </span>
                <span className="border border-line bg-stone px-3 py-1 font-body text-xs text-ink-soft">
                  Western State College of Law
                </span>
              </div>

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

      <section className="py-12 md:py-16">
        <Container>
          <CopyBody lead={pageCopy.lead} sections={pageCopy.sections} />
        </Container>
      </section>
    </main>
  )
}
