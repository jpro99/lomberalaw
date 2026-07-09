import { getPayload } from '@/lib/payload'
import type { Locale } from '@/lib/payload'
import { t } from '@/lib/dictionary'
import { Container } from '@/components/Container'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { OfficeCard } from '@/components/OfficeCard'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbSchema, localBusinessSchema } from '@/lib/schema'

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  return {
    title: locale === 'es' ? 'Contacto | Lombera Law' : 'Contact | Lombera Law',
    description:
      locale === 'es'
        ? 'Comuníquese con el despacho de abogados de Edgar P. Lombera en Redlands o Palm Springs.'
        : 'Reach the Law Offices of Edgar P. Lombera in Redlands or Palm Springs.',
  }
}

export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const payload = await getPayload()
  const prefix = locale === 'en' ? '' : '/es'
  const copy = t(locale).contact

  const offices = await payload.find({ collection: 'offices', locale, limit: 5, sort: 'name' })

  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: 'https://lomberalaw.com' + (locale === 'es' ? '/es' : '') },
          { name: copy.kicker, url: `https://lomberalaw.com${prefix}/contact` },
        ])}
      />
      {offices.docs.map((office) => (
        <JsonLd key={office.id} data={localBusinessSchema(office as any, `https://lomberalaw.com${prefix}/contact`)} />
      ))}

      <section className="border-b border-line bg-stone py-14 md:py-20">
        <Container>
          <Breadcrumbs
            items={[
              { name: 'Home', href: locale === 'en' ? '/' : '/es' },
              { name: copy.kicker, href: `${prefix}/contact` },
            ]}
          />
          <p className="mt-4 font-body text-xs font-semibold uppercase tracking-widest text-clay">{copy.kicker}</p>
          <h1 className="mt-2 max-w-2xl font-display text-4xl font-semibold text-ink md:text-5xl">
            {copy.headline}
          </h1>
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {offices.docs.map((office) => (
              <OfficeCard
                key={office.id}
                name={office.name as string}
                phone={office.phone as string}
                address={office.address as string}
                hours={office.hours as string}
                mapEmbedUrl={office.mapEmbedUrl as string}
                callLabel={copy.callLabel}
                directionsLabel={copy.directionsLabel}
                hoursLabel={copy.hoursLabel}
              />
            ))}
          </div>
        </Container>
      </section>
    </main>
  )
}
