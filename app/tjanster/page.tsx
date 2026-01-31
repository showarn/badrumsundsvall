import type { Metadata } from "next"
import type { ElementType } from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Bath,
  Droplets,
  Grid3X3,
  Wrench,
  Zap,
  CheckCircle,
  ArrowRight,
} from "lucide-react"

const SITE_URL = "https://badrum-sundsvall.se"

export const metadata: Metadata = {
  title: "Tjänster inom badrumsrenovering i Sundsvall",
  description:
    "Vi erbjuder helrenovering av badrum, tätskikt & våtrum, kakel & klinker, VVS och el i Sundsvall. Få kostnadsfri offert – mål om svar inom 24h.",
  alternates: { canonical: "/tjanster" },
  openGraph: {
    title: "Tjänster inom badrumsrenovering i Sundsvall",
    description:
      "Helrenovering, tätskikt, kakel & klinker, VVS och el i Sundsvall med omnejd. Kostnadsfri offert – mål om svar inom 24h.",
    url: `${SITE_URL}/tjanster`,
    type: "website",
  },
  robots: { index: true, follow: true },
}

type IconComponent = ElementType<{ className?: string }>

type Service = {
  slug: `/${string}`
  icon: IconComponent
  title: string
  description: string
  features: readonly string[]
  seo: {
    name: string
    serviceType: string
  }
}

const areas = ["Sundsvall", "Timrå", "Alnö", "Njurunda"] as const

const services: Service[] = [
  {
    slug: "/tjanster/helrenovering-badrum",
    icon: Bath,
    title: "Helrenovering av badrum",
    description:
      "Komplett badrumsrenovering från golv till tak. Vi koordinerar alla moment så du får ett nyckelfärdigt badrum utan att behöva hantera flera olika hantverkare.",
    features: [
      "Rivning och bortforsling",
      "Nytt tätskikt enligt branschregler",
      "Kakel, klinker och våtrumsmatta",
      "VVS och el-arbeten",
      "Målning och lister",
      "Installation av inredning",
    ] as const,
    seo: {
      name: "Helrenovering av badrum i Sundsvall",
      serviceType: "Bathroom renovation",
    },
  },
  {
    slug: "/tjanster/tatskikt-vatrum",
    icon: Droplets,
    title: "Tätskikt & våtrum",
    description:
      "Ett korrekt utfört tätskikt är grunden för ett hållbart badrum. Våra certifierade hantverkare följer gällande branschregler.",
    features: [
      "Tätskikt enligt branschpraxis",
      "Godkända material och metoder",
      "Dokumentation och protokoll",
      "Kontroll och rutiner",
      "Rådgivning",
      "Besiktningsunderlag vid behov",
    ] as const,
    seo: {
      name: "Tätskikt och våtrum i Sundsvall",
      serviceType: "Waterproofing service",
    },
  },
  {
    slug: "/tjanster/kakel-klinker",
    icon: Grid3X3,
    title: "Kakel & klinker",
    description:
      "Kakel och klinker sätter stilen i badrummet. Vi hjälper dig välja material och utförande som passar just ditt badrum.",
    features: [
      "Vägg- och golvplattor",
      "Mönsterläggning",
      "Golvvärme under klinker",
      "Fogning och silikon",
      "Hörnlister",
      "Snygga avslut",
    ] as const,
    seo: {
      name: "Kakel och klinker i Sundsvall",
      serviceType: "Tile installation",
    },
  },
  {
    slug: "/tjanster/vvs-badrum",
    icon: Wrench,
    title: "VVS i badrum",
    description:
      "Professionell VVS-installation för dusch, badkar, handfat och WC. Tryggt utfört av behöriga installatörer.",
    features: [
      "Rördragning och avlopp",
      "Dusch & badkar",
      "Handfat & WC",
      "Blandare",
      "Tvättmaskinsanslutning",
      "Provtryckning",
    ] as const,
    seo: {
      name: "VVS i badrum i Sundsvall",
      serviceType: "Plumbing service",
    },
  },
  {
    slug: "/tjanster/el-badrum",
    icon: Zap,
    title: "El i badrum",
    description:
      "Säker och funktionell el i badrum. El i våtrum ska alltid planeras och utföras korrekt för trygghet och funktion.",
    features: [
      "Elinstallation i våtrum",
      "Spotlights & belysning",
      "Eluttag & jordfelsbrytare",
      "Golvvärme (el)",
      "Spegelskåp",
      "Handdukstork",
    ] as const,
    seo: {
      name: "Elinstallation i badrum i Sundsvall",
      serviceType: "Electrical service",
    },
  },
]

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Tjänster inom badrumsrenovering i Sundsvall",
    description: metadata.description,
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
          url: `${SITE_URL}${s.slug}`,
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
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
              Tjänster inom badrumsrenovering
            </h1>
            <p className="mt-4 text-lg text-muted-foreground lg:text-xl">
              Vi förmedlar badrumsrenoveringar i {areas.join(", ")} – från mindre uppfräschningar till kompletta
              helrenoveringar. Vill du förstå hela processen först? Läs vår{" "}
              <Link
                href="/guide"
                className="underline underline-offset-4 hover:text-foreground"
              >
                guide steg för steg
              </Link>
              .
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg">
                <Link href="/kontakt">
                  Få offert
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent">
                <Link href="/guide">Läs guiden</Link>
              </Button>
            </div>

            {/* Quick nav chips (stark internlänkning) */}
            <div className="mt-8 flex flex-wrap gap-3 text-sm">
              <Link
                href="/guide"
                className="rounded-full border border-border bg-card px-4 py-2 text-foreground hover:bg-card/70 transition-colors"
              >
                Guide
              </Link>
              {services.map((s) => (
                <Link
                  key={s.slug}
                  href={s.slug}
                  className="rounded-full border border-border bg-card px-4 py-2 text-foreground hover:bg-card/70 transition-colors"
                >
                  {s.title}
                </Link>
              ))}
              <Link
                href="/faq"
                className="rounded-full border border-border bg-card px-4 py-2 text-foreground hover:bg-card/70 transition-colors"
              >
                Vanliga frågor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Guide teaser (hub → guide) */}
      <section className="bg-card">
        <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
          <div className="rounded-xl border border-border bg-muted p-6 lg:p-8">
            <h2 className="text-xl font-semibold text-foreground">
              Osäker på var du ska börja?
            </h2>
            <p className="mt-2 text-muted-foreground">
              Vi har samlat ordning på momenten, vad som påverkar pris och hur du undviker vanliga misstag i vår guide.
              Perfekt innan du skickar in en offertförfrågan.
            </p>
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <Button asChild>
                <Link href="/guide">
                  Läs guiden
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="bg-transparent">
                <Link href="/kontakt">Få offert direkt</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-card py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 space-y-12">
          {services.map((service, index) => {
            const Icon = service.icon
            const reversed = index % 2 === 1

            return (
              <Card key={service.slug} className="border-border overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <CardHeader
                    className={[
                      "bg-muted p-6 lg:p-8 flex flex-col justify-center",
                      reversed ? "lg:order-2" : "lg:order-1",
                    ].join(" ")}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                        <Icon className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
                      </div>
                      <CardTitle className="text-xl lg:text-2xl">
                        {service.title}
                      </CardTitle>
                    </div>

                    <p className="text-muted-foreground">{service.description}</p>

                    {/* Läs mer + extra internlänk */}
                    <div className="mt-6 flex flex-col sm:flex-row gap-3">
                      <Button asChild variant="outline" className="bg-transparent">
                        <Link href={service.slug}>Läs mer</Link>
                      </Button>
                      <Button asChild variant="ghost" className="justify-start px-0 text-foreground hover:bg-transparent hover:underline underline-offset-4">
                        <Link href="/guide">Se processen i guiden</Link>
                      </Button>
                    </div>
                  </CardHeader>

                  <CardContent
                    className={[
                      "p-6 lg:p-8",
                      reversed ? "lg:order-1" : "lg:order-2",
                    ].join(" ")}
                  >
                    <h3 className="font-semibold text-foreground mb-4">
                      Detta ingår
                    </h3>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-accent mt-0.5" aria-hidden="true" />
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
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-primary-foreground mb-4">
            Redo att komma igång?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Skicka in en kostnadsfri förfrågan – vi matchar dig med rätt företag i Sundsvall med omnejd. Vill du läsa mer
            först? Ta en snabb titt på{" "}
            <Link
              href="/guide"
              className="underline underline-offset-4 hover:text-primary-foreground"
            >
              vår guide
            </Link>
            .
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" variant="secondary">
              <Link href="/kontakt">
                Få kostnadsfri offert
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
              <Link href="/guide">Läs guiden</Link>
            </Button>
          </div>
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
