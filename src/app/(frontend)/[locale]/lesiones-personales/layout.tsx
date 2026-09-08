import { notFound } from 'next/navigation'

/** Spanish PI live URLs live only under /es/lesiones-personales/ — never /en/… */
const LOCALE = 'es'

export function generateStaticParams() {
  return [{ locale: LOCALE }]
}

export default async function LesionesPersonalesLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (locale !== LOCALE) notFound()
  return children
}
