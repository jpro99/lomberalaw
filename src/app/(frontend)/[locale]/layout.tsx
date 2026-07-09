import type { Metadata } from 'next'
import { Fraunces, Inter, IBM_Plex_Mono } from 'next/font/google'
import { notFound } from 'next/navigation'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { EventBeacon } from '@/components/EventBeacon'
import '../globals.css'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-data',
  weight: ['400', '500'],
  display: 'swap',
})

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
    <html lang={locale} className={`${fraunces.variable} ${inter.variable} ${plexMono.variable}`}>
      <body>
        <EventBeacon />
        <Header locale={locale as Locale} />
        {children}
        <Footer locale={locale as Locale} />
      </body>
    </html>
  )
}
