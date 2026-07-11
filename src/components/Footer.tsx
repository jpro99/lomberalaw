import Link from 'next/link'
import { getPayload } from '@/lib/payload'
import { t } from '@/lib/dictionary'
import type { Locale } from '@/lib/payload'
import { Container } from './Container'

export async function Footer({ locale }: { locale: Locale }) {
  const payload = await getPayload()
  const copy = t(locale)
  const offices = await payload.find({ collection: 'offices', limit: 5, sort: 'name' })

  const prefix = locale === 'en' ? '' : '/es'

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
              <li><Link href={`${prefix}/personal-injury`} className="hover:text-white">{copy.nav.personalInjury}</Link></li>
              <li><Link href={`${prefix}/bankruptcy`} className="hover:text-white">{copy.nav.bankruptcy}</Link></li>
              <li><Link href={`${prefix}/locations`} className="hover:text-white">{copy.nav.locations}</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-gold">
              {copy.nav.offices}
            </p>
            <ul className="mt-4 space-y-3 font-body text-sm">
              {offices.docs.map((office) => (
                <li key={office.id}>
                  <p className="font-medium text-white">{office.name as string}</p>
                  <a href={`tel:${office.phone}`} className="font-data text-xs text-night-ink/70 hover:text-white">
                    {office.phone as string}
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
              <li><Link href={`${prefix}/contact`} className="hover:text-white">{copy.nav.contact}</Link></li>
              <li><Link href={`${prefix}/attorney/edgar-lombera`} className="hover:text-white">{copy.nav.attorney}</Link></li>
              <li><Link href={`${prefix}/faq`} className="hover:text-white">FAQ</Link></li>
              <li><Link href={`${prefix}/resources`} className="hover:text-white">{locale === 'es' ? 'Recursos' : 'Resources'}</Link></li>
              <li><Link href={`${prefix}/reviews`} className="hover:text-white">{locale === 'es' ? 'Reseñas' : 'Reviews'}</Link></li>
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
