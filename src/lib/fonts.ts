import { Inter, Playfair_Display } from 'next/font/google'

export const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '600'],
  display: 'swap',
  variable: '--font-inter',
})

export const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['600'],
  display: 'swap',
  variable: '--font-playfair',
})
