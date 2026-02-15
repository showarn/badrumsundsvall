import React from "react"
import type { Metadata, Viewport } from "next"
import Script from "next/script"
import { Inter, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CookieNotice } from "@/components/cookie-notice"

const SITE_URL = "https://badrum-sundsvall.se"
const SITE_NAME = "Badrumsrenovering Sundsvall"

// GA4 (Analytics)
const GA_ID = "G-W7YPFWZ939"

// Google Ads (Conversion tracking base tag)
const GOOGLE_ADS_ID = "AW-17921425094"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  alternates: { canonical: "/" },

  applicationName: SITE_NAME,
  title: {
    default: "Badrumsrenovering i Sundsvall | Få kostnadsfri offert",
    template: "%s | Badrumsrenovering Sundsvall",
  },
  description:
    "Få kostnadsfri offert på badrumsrenovering i Sundsvall. Vi förmedlar din förfrågan till lokala, kontrollerade hantverkare. ROT-avdrag. Svar inom 24h.",
  authors: [{ name: "Innovo AB" }],
  publisher: "Innovo AB",
  referrer: "origin-when-cross-origin",

  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: "Badrumsrenovering i Sundsvall | Få kostnadsfri offert",
    description:
      "Få kostnadsfri offert på badrumsrenovering i Sundsvall. Lokala hantverkare, ROT-avdrag, svar inom 24h.",
    images: [
      {
        url: "/og.jpg",
        width: 1200,
        height: 630,
        alt: "Badrumsrenovering i Sundsvall",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Badrumsrenovering i Sundsvall | Få kostnadsfri offert",
    description:
      "Få kostnadsfri offert på badrumsrenovering i Sundsvall. Lokala hantverkare, ROT-avdrag, svar inom 24h.",
    images: ["/og.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },

  manifest: "/site.webmanifest",
  category: "home improvement",

  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f5f3ee",
  colorScheme: "light",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="sv" className="bg-background">
      <head>
        {/* Google Analytics 4 */}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', {
              anonymize_ip: true,
            });
          `}
        </Script>

        {/* Google Ads tagg */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GOOGLE_ADS_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-ads" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GOOGLE_ADS_ID}');
          `}
        </Script>
      </head>

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
