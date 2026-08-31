import Link from 'next/link'
import { t } from '@/lib/dictionary'
import type { Locale } from '@/lib/payload'
import { OFFICES, officeLabel } from '@/lib/nap'
import { Container } from './Container'

export function Footer({ locale }: { locale: Locale }) {
  const copy = t(locale)

  const prefix = locale === 'en' ? '' : '/es'
  const piHref = locale === 'es' ? '/es/lesiones-personales/' : '/personal-injury/'
  const bkHref = locale === 'es' ? '/es/bancarrota/' : '/bankruptcy/'
  const aboutHref = locale === 'es' ? '/es/sobre-nosotros/' : '/about-us/'
  const faqHref = locale === 'es' ? '/es/preguntas-frecuentes/' : '/frequently-asked-questions/'
  const blogHref = locale === 'es' ? '/es/blog-espanol/' : '/blog/'
  const contactHref = locale === 'es' ? '/es/contacta-con-nosotros/' : '/contact/'

  return (
    <footer className="border-t border-line bg-stone text-ink">
      <Container className="py-14 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className="font-display text-2xl text-navy">Lombera Law</p>
            <p className="mt-3 max-w-sm font-body text-sm leading-relaxed text-ink-soft">
              {locale === 'es'
                ? 'Edgar P. Lombera — abogado bilingüe de lesiones personales y bancarrota en el Inland Empire y el Valle de Coachella.'
                : 'Edgar P. Lombera — bilingual personal injury and bankruptcy attorney serving the Inland Empire and Coachella Valley.'}
            </p>
          </div>

          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              {copy.nav.personalInjury}
            </p>
            <ul className="mt-4 space-y-2 font-body text-sm">
              <li>
                <Link href={piHref} className="text-ink-soft hover:text-navy">
                  {copy.nav.personalInjury}
                </Link>
              </li>
              <li>
                <Link href={bkHref} className="text-ink-soft hover:text-navy">
                  {copy.nav.bankruptcy}
                </Link>
              </li>
              <li>
                <Link href={aboutHref} className="text-ink-soft hover:text-navy">
                  {copy.nav.attorney}
                </Link>
              </li>
              <li>
                <Link href={contactHref} className="text-ink-soft hover:text-navy">
                  {copy.nav.contact}
                </Link>
              </li>
              <li>
                <Link href={faqHref} className="text-ink-soft hover:text-navy">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href={blogHref} className="text-ink-soft hover:text-navy">
                  {locale === 'es' ? 'Blog' : 'Blog'}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              {copy.nav.offices}
            </p>
            <ul className="mt-4 space-y-5 font-body text-sm">
              {OFFICES.map((office) => (
                <li key={office.id}>
                  <p className="font-medium text-navy">{officeLabel(office.id, locale)}</p>
                  <p className="mt-1 text-ink-soft">
                    {office.streetAddress}
                    <br />
                    {office.addressLocality}, {office.addressRegion} {office.postalCode}
                  </p>
                  <a href={`tel:${office.tel}`} className="mt-1 inline-block font-data text-sm text-gold hover:text-navy">
                    {office.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <p className="max-w-2xl font-body text-xs leading-relaxed text-ink-muted">
              {copy.footer.disclaimer}
            </p>
            <p className="whitespace-nowrap font-body text-xs text-ink-muted">
              © {new Date().getFullYear()} Law Offices of Edgar P. Lombera. {copy.footer.rights}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
