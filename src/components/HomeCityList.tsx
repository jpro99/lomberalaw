import Link from 'next/link'
import type { Locale } from '@/lib/payload'
import { cityDisplayName } from '@/lib/cityBodyCopy'
import { HOME_CITY_SLUGS, HOME_CITY_PI_ONLY } from '@/lib/homeCityLinks'
import { practiceCityHref } from '@/lib/spanishPaths'
import { t } from '@/lib/dictionary'
import { Container } from './Container'

export function HomeCityList({ locale }: { locale: Locale }) {
  const nav = t(locale).nav
  const heading = locale === 'es' ? 'Encuentre su ciudad' : 'Find your city'
  const sub =
    locale === 'es'
      ? 'Quince ciudades del Inland Empire y el Valle de Coachella.'
      : 'Fifteen cities across the Inland Empire and Coachella Valley.'

  return (
    <section className="border-b border-line bg-panel py-14 md:py-16">
      <Container>
        <h2 className="font-display text-xl text-navy md:text-2xl">{heading}</h2>
        <p className="mt-2 font-body text-sm text-ink-muted">{sub}</p>
        <ul className="mt-8 grid gap-x-10 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
          {HOME_CITY_SLUGS.map((slug) => {
            const name = cityDisplayName(slug, locale)
            const piHref = practiceCityHref(locale, 'personal-injury', slug)
            const bkHref = practiceCityHref(locale, 'bankruptcy', slug)
            const showBk = !HOME_CITY_PI_ONLY.has(slug)
            return (
              <li key={slug} className="font-body text-sm">
                <span className="font-medium text-navy">{name}</span>
                <span className="text-ink-muted"> — </span>
                <Link href={piHref} className="text-gold hover:text-navy">
                  {nav.personalInjury}
                </Link>
                {showBk && (
                  <>
                    <span className="text-ink-muted"> · </span>
                    <Link href={bkHref} className="text-gold hover:text-navy">
                      {nav.bankruptcy}
                    </Link>
                  </>
                )}
              </li>
            )
          })}
        </ul>
      </Container>
    </section>
  )
}
