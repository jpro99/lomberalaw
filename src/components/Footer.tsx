import Link from 'next/link'
import { t } from '@/lib/dictionary'
import type { Locale } from '@/lib/payload'
import { OFFICES } from '@/lib/nap'
import { Container } from './Container'

export function Footer({ locale }: { locale: Locale }) {
  const copy = t(locale)
  const officeList = OFFICES.map((office) => ({
    id: office.id,
    name: office.name,
    phone: office.phone,
    tel: office.tel,
  }))

  const prefix = locale === 'en' ? '' : '/es'
  const piHref = locale === 'es' ? '/es/lesiones-personales/' : '/personal-injury/'
  const bkHref = locale === 'es' ? '/es/bancarrota/' : '/bankruptcy/'
  const aboutHref = locale === 'es' ? '/es/sobre-nosotros/' : '/about-us/'
  const faqHref = locale === 'es' ? '/es/preguntas-frecuentes/' : '/frequently-asked-questions/'
  const blogHref = locale === 'es' ? '/es/blog-espanol/' : '/blog/'
  const testimonialsHref = locale === 'es' ? '/es/testimonios/' : '/testimonials/'
  const contactHref = locale === 'es' ? '/es/contacta-con-nosotros/' : '/contact/'

  return (
    <footer className="border-t border-line bg-night text-night-ink">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div>
            <p className="font-display text-2xl text-white">Lombera Law</p>
            <p className="mt-3 max-w-xs font-body text-sm text-night-ink/80">
              {locale === 'es'
                ? 'Abogado bilingüe de lesiones personales y bancarrota.'
                : 'Bilingual personal injury and bankruptcy attorney.'}
            </p>
          </div>

          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              {copy.nav.personalInjury}
            </p>
            <ul className="mt-4 space-y-2 font-body text-sm">
              <li><Link href={piHref} className="hover:text-white">{copy.nav.personalInjury}</Link></li>
              <li><Link href={bkHref} className="hover:text-white">{copy.nav.bankruptcy}</Link></li>
              <li>
                <Link href={`${prefix}/locations/redlands-ca/`} className="hover:text-white">
                  {locale === 'es' ? 'Oficina Redlands' : 'Redlands Office'}
                </Link>
              </li>
              <li>
                <Link href={`${prefix}/locations/palm-springs/`} className="hover:text-white">
                  {locale === 'es' ? 'Oficina Palm Springs' : 'Palm Springs Office'}
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              {copy.nav.offices}
            </p>
            <ul className="mt-4 space-y-3 font-body text-sm">
              {officeList.map((office) => (
                <li key={office.id}>
                  <p className="font-medium text-white">{office.name}</p>
                  <a href={`tel:${office.tel}`} className="font-data text-xs text-night-ink/70 hover:text-white">
                    {office.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              {copy.nav.contact}
            </p>
            <ul className="mt-4 space-y-2 font-body text-sm">
              <li><Link href={contactHref} className="hover:text-white">{copy.nav.contact}</Link></li>
              <li><Link href={aboutHref} className="hover:text-white">{copy.nav.attorney}</Link></li>
              <li><Link href={faqHref} className="hover:text-white">FAQ</Link></li>
              <li><Link href={blogHref} className="hover:text-white">{locale === 'es' ? 'Blog' : 'Blog'}</Link></li>
              <li><Link href={testimonialsHref} className="hover:text-white">{locale === 'es' ? 'Testimonios' : 'Testimonials'}</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <p className="max-w-2xl font-body text-xs leading-relaxed text-night-ink/60">
              {copy.footer.disclaimer}
            </p>
            <p className="whitespace-nowrap font-body text-xs text-night-ink/60">
              © {new Date().getFullYear()} Law Offices of Edgar P. Lombera. {copy.footer.rights}
            </p>
          </div>
        </div>
      </Container>
    </footer>
  )
}
