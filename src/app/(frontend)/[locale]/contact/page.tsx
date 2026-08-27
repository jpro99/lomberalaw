import { getOffices } from '@/lib/getOffices'
import type { Locale } from '@/lib/payload'
import { t } from '@/lib/dictionary'
import { Container } from '@/components/Container'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { OfficeCard } from '@/components/OfficeCard'
import { ContactForm } from '@/components/ContactForm'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbSchema, localBusinessSchema } from '@/lib/schema'
import { CONTACT_SEO, pageMetadata } from '@/lib/seo'
import { OFFICES, OFFICE_HOURS_EN } from '@/lib/nap'

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  return pageMetadata({
    title: CONTACT_SEO.title,
    description: CONTACT_SEO.description,
    path: '/contact',
    locale,
  })
}

export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const copy = t(locale).contact
  const homeHref = locale === 'en' ? '/' : '/es/inicio/'
  const contactHref = locale === 'es' ? '/es/contacta-con-nosotros/' : '/contact/'

  const offices = await getOffices(locale)
  const officeCards = offices.length > 0
    ? offices.map((o) => ({
        id: o.id,
        name: o.name,
        phone: o.phone,
        address: o.address,
        hours: o.hours,
        mapEmbedUrl: undefined as string | undefined,
      }))
    : OFFICES.map((o) => ({
        id: o.id,
        name: o.name,
        phone: o.phone,
        address: `${o.streetAddress}, ${o.addressLocality}, ${o.addressRegion} ${o.postalCode}`,
        hours: OFFICE_HOURS_EN,
        mapEmbedUrl: undefined as string | undefined,
      }))

  return (
    <main>
      <JsonLd
        data={breadcrumbSchema([
          { name: 'Home', url: `https://lomberalaw.com${homeHref}` },
          { name: CONTACT_SEO.h1, url: `https://lomberalaw.com${contactHref}` },
        ])}
      />
      {officeCards.map((office) => (
        <JsonLd key={office.id} data={localBusinessSchema(office as any, `https://lomberalaw.com${contactHref}`)} />
      ))}

      <section className="border-b border-line bg-stone py-14 md:py-20">
        <Container>
          <Breadcrumbs
            items={[
              { name: 'Home', href: homeHref },
              { name: copy.kicker, href: contactHref },
            ]}
          />
          <p className="mt-4 font-body text-xs font-semibold uppercase tracking-widest text-clay">{copy.kicker}</p>
          <h1 className="mt-2 max-w-2xl font-display text-4xl font-semibold text-ink md:text-5xl">
            {CONTACT_SEO.h1}
          </h1>
          <p className="mt-4 max-w-xl font-body text-base leading-relaxed text-ink-soft">{copy.qualifier}</p>
        </Container>
      </section>

      <section className="py-14 md:py-20">
        <Container>
          <div className="grid gap-6 md:grid-cols-2">
            {officeCards.map((office) => (
              <OfficeCard
                key={office.id}
                name={office.name}
                phone={office.phone}
                address={office.address}
                hours={office.hours}
                mapEmbedUrl={office.mapEmbedUrl}
                callLabel={copy.callLabel}
                directionsLabel={copy.directionsLabel}
                hoursLabel={copy.hoursLabel}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="pb-14 md:pb-20">
        <Container className="max-w-2xl">
          <ContactForm copy={copy.form} locale={locale} />
        </Container>
      </section>
    </main>
  )
}
