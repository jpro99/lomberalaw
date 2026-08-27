import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { EventBeacon } from '@/components/EventBeacon'
import '../globals.css'

const LOCALES = ['en', 'es'] as const
type Locale = (typeof LOCALES)[number]

// Render on demand — Payload/Postgres may be unavailable at build time
// (CI, local dev without .env). Vercel preview/prod always have DATABASE_URI.
export const dynamic = 'force-dynamic'

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
    <html lang={locale}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <EventBeacon />
        <Header locale={locale as Locale} />
        {children}
        <Footer locale={locale as Locale} />
      </body>
    </html>
  )
}
