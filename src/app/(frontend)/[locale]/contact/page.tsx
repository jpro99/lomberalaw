import type { Locale } from '@/lib/payload'
import { t } from '@/lib/dictionary'
import { Container } from '@/components/Container'
import { Breadcrumbs } from '@/components/Breadcrumbs'
import { OfficeCard } from '@/components/OfficeCard'
import { ContactForm } from '@/components/ContactForm'
import { EdgarHeadshot } from '@/components/EdgarHeadshot'
import { JsonLd } from '@/components/JsonLd'
import { breadcrumbSchema, localBusinessSchema } from '@/lib/schema'
import { CONTACT_SEO, pageMetadata } from '@/lib/seo'
import { OFFICES, OFFICE_HOURS_EN, OFFICE_HOURS_ES } from '@/lib/nap'

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
  const hours = locale === 'es' ? OFFICE_HOURS_ES : OFFICE_HOURS_EN

  const officeCards = OFFICES.map((o) => ({
    id: o.id,
    name: o.name,
    phone: o.phone,
    address: `${o.streetAddress}, ${o.addressLocality}, ${o.addressRegion} ${o.postalCode}`,
    hours,
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

      <section className="border-b border-line bg-navy text-white">
        <Container className="grid items-center gap-8 py-10 md:grid-cols-[1fr_auto] md:py-12">
          <div>
            <Breadcrumbs
              items={[
                { name: 'Home', href: homeHref },
                { name: copy.kicker, href: contactHref },
              ]}
            />
            <p className="mt-4 font-body text-xs font-semibold uppercase tracking-widest text-gold">{copy.kicker}</p>
            <h1 className="mt-2 max-w-2xl font-display text-3xl font-semibold text-white md:text-4xl">
              {CONTACT_SEO.h1}
            </h1>
            <p className="mt-4 max-w-xl font-body text-sm leading-relaxed text-white/80">{copy.qualifier}</p>
          </div>
          <div className="justify-self-center md:justify-self-end">
            <EdgarHeadshot />
          </div>
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
