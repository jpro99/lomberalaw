import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { EventBeaconLazy } from '@/components/EventBeaconLazy'
import { inter, playfair } from '@/lib/fonts'
import '../globals.css'

const LOCALES = ['en', 'es'] as const
type Locale = (typeof LOCALES)[number]

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }))
}

export const metadata: Metadata = {
  title: 'Law Offices of Edgar P. Lombera',
  description: 'Bilingual personal injury and bankruptcy attorney serving the Inland Empire and Coachella Valley.',
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ locale: string }>
}) {
  const { locale } = await params
  if (!LOCALES.includes(locale as Locale)) notFound()

  return (
    <html lang={locale} className={`${inter.variable} ${playfair.variable}`}>
      <body className="font-body antialiased">
        <Header locale={locale as Locale} />
        {children}
        <Footer locale={locale as Locale} />
        <EventBeaconLazy />
      </body>
    </html>
  )
}
