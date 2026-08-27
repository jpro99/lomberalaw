import { t } from '@/lib/dictionary'
import type { Locale } from '@/lib/payload'
import { getOffices } from '@/lib/getOffices'
import { HeaderBar } from './HeaderBar'

export async function Header({ locale }: { locale: Locale }) {
  const copy = t(locale)
  await getOffices(locale)

  const links = [
    { href: '/personal-injury/', label: copy.nav.personalInjury },
    { href: '/bankruptcy/', label: copy.nav.bankruptcy },
    { href: '/about-us/', label: copy.nav.attorney },
    { href: '/contact/', label: copy.nav.contact },
  ]

  return <HeaderBar locale={locale} links={links} />
}
