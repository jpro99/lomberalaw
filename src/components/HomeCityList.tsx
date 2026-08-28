import Link from 'next/link'
import type { Locale } from '@/lib/payload'
import { cityDisplayName } from '@/lib/cityBodyCopy'
import { HOME_CITY_SLUGS } from '@/lib/homeCityLinks'
import { practiceCityHref } from '@/lib/spanishPaths'
import { t } from '@/lib/dictionary'
import { Container } from './Container'

export function HomeCityList({ locale }: { locale: Locale }) {
  const nav = t(locale).nav
  const heading = locale === 'es' ? 'Encuentre su ciudad' : 'Find your city'

  return (
    <section className="border-b border-line py-12 md:py-16">
      <Container>
        <h2 className="font-display text-xl text-navy md:text-2xl">{heading}</h2>
        <ul className="mt-6 grid gap-0 border-t border-line sm:grid-cols-2 lg:grid-cols-3">
          {HOME_CITY_SLUGS.map((slug) => {
            const name = cityDisplayName(slug, locale)
            const piHref = practiceCityHref(locale, 'personal-injury', slug)
            const bkHref = practiceCityHref(locale, 'bankruptcy', slug)
            return (
              <li key={slug} className="border-b border-line py-4">
                <p className="font-body text-sm font-semibold text-navy">{name}</p>
                <p className="mt-1 font-body text-sm">
                  <Link href={piHref} className="font-medium text-gold hover:text-navy">
                    {nav.personalInjury}
                  </Link>
                  <span className="mx-2 text-ink-muted">·</span>
                  <Link href={bkHref} className="font-medium text-gold hover:text-navy">
                    {nav.bankruptcy}
                  </Link>
                </p>
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
