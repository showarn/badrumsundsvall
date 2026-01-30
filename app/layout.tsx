import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CookieNotice } from '@/components/cookie-notice'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: {
    default: 'Badrumsrenovering i Sundsvall | Få kostnadsfri offert',
    template: '%s | Badrumsrenovering Sundsvall',
  },
  description: 'Få kostnadsfri offert på badrumsrenovering i Sundsvall. Vi förmedlar din förfrågan till lokala, kontrollerade hantverkare. ROT-avdrag. Svar inom 24h.',
  keywords: ['badrumsrenovering', 'sundsvall', 'badrum', 'renovering', 'ROT-avdrag', 'våtrum', 'kakel', 'klinker'],
  authors: [{ name: 'Innovo AB' }],
  openGraph: {
    title: 'Badrumsrenovering i Sundsvall | Få kostnadsfri offert',
    description: 'Få kostnadsfri offert på badrumsrenovering i Sundsvall. Lokala hantverkare, ROT-avdrag, svar inom 24h.',
    locale: 'sv_SE',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
    generator: 'v0.app'
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#f5f3ee',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="sv" className="bg-background">
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased`}>
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieNotice />
        <Analytics />
      </body>
    </html>
  )
}
