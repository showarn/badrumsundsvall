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
 * Vi använder ElementType istället för React.SVGProps<...>
 * för att undvika TS-konflikter med lucide + aria-hidden och JSX-namespace.
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
      "Arbete enligt gällande branschregler",
      "Godkända material och metoder",
      "Dokumentation och intyg",
      "Kontroll enligt rutiner",
      "Rådgivning om lösningar",
      "Besiktningsunderlag vid behov",
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
      "Kakel och klinker sätter stilen i badrummet. Vi hjälper dig hitta rätt utförande och matchar med plattsättare som levererar raka fall, fina fogar och snygga avslut.",
    features: [
      "Vägg- och golvplattor",
      "Mönsterläggning och nischer",
      "Golvvärme under klinker",
      "Fogning och silikon",
      "Hörnlister och avslut",
      "Rådgivning materialval",
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
      "Trygg VVS-installation för dusch, badkar, handfat och WC. Vi matchar dig med behöriga installatörer så att rör och avlopp blir rätt från början.",
    features: [
      "Rördragning och avlopp",
      "Dusch och badkar",
      "Handfat och WC",
      "Blandare och duschset",
      "Tvättmaskinsanslutning",
      "Provtryckning vid behov",
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
      "Säker och funktionell el i våtutrymmen. Vi matchar dig med behöriga elektriker för belysning, uttag, golvvärme och smarta lösningar.",
    features: [
      "Elinstallation i våtrum",
      "Spotlights och belysning",
      "Eluttag och jordfelsbrytare",
      "Golvvärme (el)",
      "Spegelskåp med belysning",
      "Handdukstork",
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
    description:
      "Helrenovering av badrum, tätskikt och våtrum, kakel & klinker, VVS och el i Sundsvall med omnejd.",
    inLanguage: "sv-SE",
    url: `${SITE_URL}/tjanster`,
    mainEntity: {
      "@type": "ItemList",
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      numberOfItems: services.length,
      itemListElement: services.map((s, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        item: {
          "@type": "Service",
          name: s.seo.name,
          serviceType: s.seo.serviceType,
          areaServed: areas.map((name) => ({ "@type": "City", name })),
        },
      })),
    },
  } as const

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-muted py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground">
              Sundsvall med omnejd
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              Tjänster inom badrumsrenovering i Sundsvall
            </h1>
            <p className="mt-4 text-lg text-muted-foreground lg:text-xl">
              Vi förmedlar badrumsrenoveringar i {areas.join(", ")}. Från uppfräschning till helrenovering – du får
              kostnadsfri offert och snabb återkoppling.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="min-h-[48px]">
                <Link href="/kontakt">
                  Få offert
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-card py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => {
              const Icon = service.icon
              const isReversed = index % 2 === 1

              return (
                <Card key={service.slug} className="border-border overflow-hidden">
                  <div className="grid lg:grid-cols-2">
                    <CardHeader
                      className={[
                        "bg-muted p-6 lg:p-8 flex flex-col justify-center",
                        isReversed ? "lg:order-2" : "lg:order-1",
                      ].join(" ")}
                    >
                      <div className="flex items-center gap-4 mb-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                          <Icon className="h-6 w-6 text-primary-foreground" />
                        </div>
                        <CardTitle className="text-xl lg:text-2xl">{service.title}</CardTitle>
                      </div>
                      <p className="text-muted-foreground">{service.description}</p>
                    </CardHeader>

                    <CardContent
                      className={[
                        "p-6 lg:p-8",
                        isReversed ? "lg:order-1" : "lg:order-2",
                      ].join(" ")}
                    >
                      <h2 className="font-semibold text-foreground mb-4">{service.title} – detta ingår</h2>
                      <ul className="grid gap-3 sm:grid-cols-2">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-2">
                            <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                            <span className="text-sm text-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                </Card>
              )
            })}
          </div>

          <div className="mt-14 rounded-xl border border-border bg-muted p-6 lg:p-8">
            <h2 className="text-xl font-semibold text-foreground">Vanliga områden vi förmedlar jobb i</h2>
            <p className="mt-2 text-muted-foreground">
              {areas.join(", ")} – och närliggande orter. Kontakta oss så matchar vi dig med rätt företag för ditt projekt.
            </p>
            <div className="mt-5">
              <Button asChild variant="outline" className="bg-transparent">
                <Link href="/faq">Se vanliga frågor</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl mb-4">Redo att komma igång?</h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Berätta om ditt projekt så hjälper vi dig hitta rätt hantverkare i {areas.join(", ")}.
          </p>
          <Button asChild size="lg" variant="secondary" className="min-h-[48px]">
            <Link href="/kontakt">
              Få kostnadsfri offert
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}
