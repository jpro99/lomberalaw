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
    <footer className="mt-24 border-t border-line bg-panel">
      <Container className="py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="font-display text-lg font-semibold text-ink">Lombera Law</p>
            <p className="mt-2 max-w-xs font-body text-sm text-ink-muted">
              {locale === 'es'
                ? 'Abogado bilingüe de lesiones personales y bancarrota.'
                : 'Bilingual personal injury and bankruptcy attorney.'}
            </p>
          </div>

          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-wide text-ink-muted">
              {copy.nav.personalInjury}
            </p>
            <ul className="mt-3 space-y-2 font-body text-sm text-ink-soft">
              <li><Link href={`${prefix}/personal-injury`}>{copy.nav.personalInjury}</Link></li>
              <li><Link href={`${prefix}/bankruptcy`}>{copy.nav.bankruptcy}</Link></li>
              <li><Link href={`${prefix}/locations`}>{copy.nav.locations}</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-wide text-ink-muted">
              {copy.nav.offices}
            </p>
            <ul className="mt-3 space-y-3 font-body text-sm text-ink-soft">
              {offices.docs.map((office) => (
                <li key={office.id}>
                  <p className="font-medium text-ink">{office.name as string}</p>
                  <a href={`tel:${office.phone}`} className="font-data text-xs text-ink-muted">
                    {office.phone as string}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body text-xs font-semibold uppercase tracking-wide text-ink-muted">
              {copy.nav.contact}
            </p>
            <ul className="mt-3 space-y-2 font-body text-sm text-ink-soft">
              <li><Link href={`${prefix}/contact`}>{copy.nav.contact}</Link></li>
              <li><Link href={`${prefix}/attorney/edgar-lombera`}>{copy.nav.attorney}</Link></li>
              <li><Link href={`${prefix}/faq`}>FAQ</Link></li>
              <li><Link href={`${prefix}/resources`}>{locale === 'es' ? 'Recursos' : 'Resources'}</Link></li>
              <li><Link href={`${prefix}/reviews`}>{locale === 'es' ? 'Reseñas' : 'Reviews'}</Link></li>
            </ul>
          </div>
        </div>

        <hr className="horizon-rule mt-12" />

        <div className="mt-6 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <p className="max-w-2xl font-body text-xs leading-relaxed text-ink-muted">
            {copy.footer.disclaimer}
          </p>
          <p className="whitespace-nowrap font-body text-xs text-ink-muted">
            © {new Date().getFullYear()} Law Offices of Edgar P. Lombera. {copy.footer.rights}
          </p>
        </div>
      </Container>
    </footer>
  )
}
