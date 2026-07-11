import { getPayload } from '@/lib/payload'
import { t } from '@/lib/dictionary'
import type { Locale } from '@/lib/payload'
import { HeaderBar } from './HeaderBar'

export async function Header({ locale }: { locale: Locale }) {
  const payload = await getPayload()
  const copy = t(locale)

  const offices = await payload.find({ collection: 'offices', limit: 1, sort: 'name' })
  const primaryPhone = offices.docs[0]?.phone as string | undefined

  const links = [
    { href: '/personal-injury', label: copy.nav.personalInjury },
    { href: '/bankruptcy', label: copy.nav.bankruptcy },
    { href: '/locations', label: copy.nav.locations },
    { href: '/attorney/edgar-lombera', label: copy.nav.attorney },
    { href: '/contact', label: copy.nav.contact },
  ]

  return (
    <HeaderBar
      locale={locale}
      primaryPhone={primaryPhone}
      links={links}
      callLabel={copy.nav.callNow}
    />
  )
}
