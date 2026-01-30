import type { Metadata } from "next"
import type { ElementType } from "react"
import Link from "next/link"

import {
  ArrowRight,
  Bath,
  CheckCircle,
  Droplets,
  Grid3X3,
  Wrench,
  Zap,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const SITE_URL = "https://badrum-sundsvall.se"

export const metadata: Metadata = {
  title: "Tjänster inom badrumsrenovering i Sundsvall",
  description:
    "Helrenovering av badrum, tätskikt och våtrum, kakel & klinker, VVS och el i Sundsvall med omnejd. Kostnadsfri offert inom 24 timmar.",
  alternates: { canonical: "/tjanster" },
  openGraph: {
    title: "Tjänster inom badrumsrenovering i Sundsvall",
    description:
      "Helrenovering av badrum, tätskikt och våtrum, kakel & klinker, VVS och el i Sundsvall med omnejd. Kostnadsfri offert inom 24 timmar.",
    url: `${SITE_URL}/tjanster`,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tjänster inom badrumsrenovering i Sundsvall",
    description:
      "Helrenovering av badrum, tätskikt och våtrum, kakel & klinker, VVS och el i Sundsvall med omnejd. Kostnadsfri offert inom 24 timmar.",
  },
  robots: { index: true, follow: true },
}

/**
 * VIKTIGT:
 * Vi använder ElementType istället för JSX.Element / SVGProps
 * för att undvika TS + aria-hidden-konflikter
 */
type IconComponent = ElementType<{ className?: string }>

type Service = {
  slug: string
  icon: IconComponent
  title: string
  description: string
  features: string[]
  seo: {
    name: string
    serviceType: string
  }
}

const services: Service[] = [
  {
    slug: "helrenovering-badrum",
    icon: Bath,
    title: "Helrenovering av badrum",
    description:
      "Komplett badrumsrenovering från golv till tak. Alla moment samordnas så du får ett nyckelfärdigt badrum utan att behöva hantera flera entreprenörer.",
    features: [
      "Rivning och bortforsling",
      "Tätskikt enligt branschregler",
      "Kakel, klinker eller våtrumsmatta",
      "VVS- och elarbeten via behöriga",
      "Målning och snickeriavslut",
      "Installation av inredning",
    ],
    seo: {
      name: "Helrenovering av badrum i Sundsvall",
      serviceType: "Bathroom renovation",
    },
  },
  {
    slug: "tatskikt-vatrum",
    icon: Droplets,
    title: "Tätskikt & våtrum",
    description:
      "Ett korrekt utfört tätskikt är grunden för ett hållbart badrum. Arbetet utförs enligt gällande branschregler.",
    features: [
      "Godkända material",
      "Dokumentation och intyg",
      "Kontroll enligt BBV/GVK",
      "Rådgivning om lösningar",
      "Besiktningsunderlag",
      "Tryggt utförande",
    ],
    seo: {
      name: "Tätskikt och våtrum i Sundsvall",
      serviceType: "Waterproofing service",
    },
  },
  {
    slug: "kakel-klinker",
    icon: Grid3X3,
    title: "Kakel & klinker",
    description:
      "Plattsättning med fokus på fall, fogar och detaljer. Anpassat efter badrummets storlek och stil.",
    features: [
      "Vägg- och golvplattor",
      "Mönsterläggning",
      "Golvvärme",
      "Fogning och silikon",
      "Hörnlister",
      "Materialrådgivning",
    ],
    seo: {
      name: "Kakel och klinker i Sundsvall",
      serviceType: "Tile installation",
    },
  },
  {
    slug: "vvs-badrum",
    icon: Wrench,
    title: "VVS i badrum",
    description:
      "Installation av rör, avlopp och sanitet av behöriga installatörer.",
    features: [
      "Rördragning",
      "Dusch & badkar",
      "WC & handfat",
      "Blandare",
      "Tvättmaskin",
      "Provtryckning",
    ],
    seo: {
      name: "VVS i badrum i Sundsvall",
      serviceType: "Plumbing service",
    },
  },
  {
    slug: "el-badrum",
    icon: Zap,
    title: "El i badrum",
    description:
      "Säker elinstallation i våtutrymmen med behöriga elektriker.",
    features: [
      "Spotlights",
      "Eluttag",
      "Golvvärme (el)",
      "Spegelskåp",
      "Handdukstork",
      "Jordfelsbrytare",
    ],
    seo: {
      name: "Elinstallation i badrum i Sundsvall",
      serviceType: "Electrical service",
    },
  },
]

const areas = ["Sundsvall", "Timrå", "Alnö", "Njurunda"] as const

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Tjänster inom badrumsrenovering i Sundsvall",
    url: `${SITE_URL}/tjanster`,
    inLanguage: "sv-SE",
    mainEntity: {
      "@type": "ItemList",
      itemListElement: services.map((s, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "Service",
          name: s.seo.name,
          serviceType: s.seo.serviceType,
          areaServed: areas.map((name) => ({
            "@type": "City",
            name,
          })),
        },
      })),
    },
  }

  return (
    <div className="flex flex-col">
      <section className="bg-muted py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <h1 className="text-3xl font-bold sm:text-5xl">
            Tjänster inom badrumsrenovering i Sundsvall
          </h1>
        </div>
      </section>

      <section className="bg-card py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 space-y-12">
          {services.map((service, index) => {
            const Icon = service.icon
            const reversed = index % 2 === 1

            return (
              <Card key={service.slug} className="overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <CardHeader
                    className={`bg-muted p-6 lg:p-8 ${
                      reversed ? "lg:order-2" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-12 w-12 rounded-lg bg-primary flex items-center justify-center">
                        <Icon className="h-6 w-6 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-xl lg:text-2xl">
                        {service.title}
                      </CardTitle>
                    </div>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardHeader>

                  <CardContent
                    className={`p-6 lg:p-8 ${
                      reversed ? "lg:order-1" : ""
                    }`}
                  >
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {service.features.map((f) => (
                        <li key={f} className="flex gap-2">
                          <CheckCircle className="h-5 w-5 text-accent" />
                          <span>{f}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </Card>
            )
          })}
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}
