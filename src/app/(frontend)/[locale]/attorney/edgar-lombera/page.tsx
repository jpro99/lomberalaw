import { RichText } from '@payloadcms/richtext-lexical/react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { getPayload } from '@/lib/payload'
import type { Locale } from '@/lib/payload'
import { t } from '@/lib/dictionary'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { JsonLd } from '@/components/JsonLd'
import { attorneySchema, breadcrumbSchema } from '@/lib/schema'
import { EDGAR_PHOTO_FALLBACK, resolveMediaUrl } from '@/lib/mediaUrl'

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const payload = await getPayload()
  const res = await payload.find({ collection: 'attorneys', where: { slug: { equals: 'edgar-lombera' } }, locale, limit: 1 })
  const attorney = res.docs[0]
  if (!attorney) return {}
  return {
    title: attorney.seo?.metaTitle || `${attorney.name} | Lombera Law`,
    description: attorney.seo?.metaDescription,
  }
}

export default async function AttorneyBioPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const payload = await getPayload()
  const prefix = locale === 'en' ? '' : '/es'
  const copy = t(locale)

  const res = await payload.find({
    collection: 'attorneys',
    where: { slug: { equals: 'edgar-lombera' } },
    locale,
    limit: 1,
  })
  const attorney = res.docs[0]
  if (!attorney) notFound()

  const offices = await payload.find({ collection: 'offices', limit: 1, sort: 'name' })
  const primaryPhone = offices.docs[0]?.phone as string | undefined

  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://lomberalaw.com' + (locale === 'es' ? '/es' : '') },
          { name: attorney.name as string, url: `https://lomberalaw.com${prefix}/attorney/edgar-lombera` },
        ])}
      />
      <JsonLd
        data={attorneySchema({
          name: attorney.name as string,
          url: `https://lomberalaw.com${prefix}/attorney/edgar-lombera`,
          barNumber: attorney.barNumber as string,
          languages: (attorney.languages as string[]) || [],
        })}
      />

      <section className="border-b border-line bg-stone py-14 md:py-20">
        <Container>
          <Breadcrumbs
            items={[
              { name: 'Home', href: locale === 'en' ? '/' : '/es' },
              { name: attorney.name as string, href: `${prefix}/attorney/edgar-lombera` },
            ]}
          />
          <div className="mt-6 grid gap-10 md:grid-cols-[220px_1fr] md:items-start">
            {(() => {
              const photo = attorney.photo && typeof attorney.photo === 'object' ? (attorney.photo as { url?: string; alt?: string }) : null
              const photoSrc = resolveMediaUrl(photo, EDGAR_PHOTO_FALLBACK)
              return photoSrc ? (
                <div className="relative h-56 w-56 flex-none overflow-hidden rounded-lg border border-line md:h-[220px] md:w-[220px]">
                  <Image
                    src={photoSrc}
                    alt={photo?.alt || (attorney.name as string)}
                    fill
                    sizes="220px"
                    className="object-cover"
                  />
                </div>
              ) : (
                <div
                  className="flex h-56 w-56 flex-none items-center justify-center rounded-lg border border-line bg-gradient-to-br from-panel to-stone md:h-[220px] md:w-[220px]"
                  aria-hidden
                >
                  <span className="font-display text-5xl font-semibold text-clay/40">EPL</span>
                </div>
              )
            })()}
            <div>
              <p className="font-body text-xs font-semibold uppercase tracking-widest text-clay">
                {copy.attorney.kicker}
              </p>
              <h1 className="mt-2 font-display text-4xl font-semibold text-ink">{attorney.name as string}</h1>

              {Array.isArray(attorney.credentials) && attorney.credentials.length > 0 && (
                <div className="mt-4">
                  <p className="font-body text-xs font-semibold uppercase tracking-wide text-ink-muted">
                    {copy.attorney.credKicker}
                  </p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {attorney.credentials.map((c: { item: string }, i: number) => (
                      <li key={i} className="rounded-full border border-line bg-panel px-3 py-1 font-body text-xs text-ink-soft">
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
                <div className="mt-7">
                  <Button href={`tel:${primaryPhone}`} size="lg" trackAs="call">
                    {copy.attorney.bioCTA}
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>

      {attorney.bio && (
        <section className="py-14 md:py-20">
          <Container className="prose prose-headings:font-display prose-headings:text-ink prose-p:font-body prose-p:text-ink-soft prose-a:text-clay max-w-2xl">
            <RichText data={attorney.bio as any} />
          </Container>
        </section>
      )}
    </main>
  )
}
