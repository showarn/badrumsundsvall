import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Users,
  Shield,
  Clock,
  CheckCircle,
  ArrowRight,
  Building2,
  Handshake,
  Award,
} from "lucide-react"

const SITE_URL = "https://badrum-sundsvall.se"

export const metadata: Metadata = {
  title: "Om oss – Så fungerar tjänsten",
  description:
    "Läs om hur vår förmedling fungerar för badrumsrenovering i Sundsvall. Kostnadsfritt, utan köpkrav – vi matchar din förfrågan med lokala hantverkare.",
  alternates: { canonical: "/om-oss" },
  openGraph: {
    url: `${SITE_URL}/om-oss`,
    title: "Om oss – Så fungerar tjänsten | Badrumsrenovering Sundsvall",
    description:
      "Så fungerar vår förmedlingstjänst: skicka in din förfrågan, bli matchad med lokala hantverkare och jämför offerter – helt kostnadsfritt.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

type Benefit = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  title: string
  description: string
}

type HowItWorksItem = {
  step: string
  title: string
  description: string
}

const benefits: Benefit[] = [
  {
    icon: Clock,
    title: "Spara tid",
    description:
      "Istället för att ringa runt till flera företag fyller du i ett formulär och blir kontaktad av intresserade hantverkare.",
  },
  {
    icon: Shield,
    title: "Trygg förmedling",
    description:
      "Vi förmedlar förfrågningar till företag som arbetar enligt branschregler för våtrum och har försäkring.",
  },
  {
    icon: Users,
    title: "Lokala hantverkare",
    description:
      "Vi fokuserar på Sundsvall med omnejd så att du kan få hjälp av företag som kan området och kan planera snabbt.",
  },
  {
    icon: Award,
    title: "Kompetens & dokumentation",
    description:
      "Certifieringar och dokumentation bekräftas i offert/avtal. Du får tydlighet innan du går vidare.",
  },
]

const howItWorks: HowItWorksItem[] = [
  {
    step: "1",
    title: "Du fyller i formuläret",
    description:
      "Berätta kort om projektet: typ av badrum, storlek, tidsram och postnummer. Det tar bara ett par minuter.",
  },
  {
    step: "2",
    title: "Vi matchar din förfrågan",
    description:
      "Vi förmedlar förfrågan vidare till lämpliga lokala företag som kan vara intresserade av uppdraget.",
  },
  {
    step: "3",
    title: "Du blir kontaktad",
    description:
      "Företag som vill lämna offert kontaktar dig direkt. Ofta sker första kontakten inom 24 timmar.",
  },
  {
    step: "4",
    title: "Du väljer själv",
    description:
      "Du jämför upplägg, pris och villkor – och bestämmer själv om du vill gå vidare. Ingen bindning.",
  },
]

const contractorRequirements: string[] = [
  "F-skattsedel och registrerat företag",
  "Ansvarsförsäkring",
  "Erfarenhet av badrum/våtrum",
  "Följer branschregler för våtrum (t.ex. BBV/GVK)",
  "Tydliga villkor i offert/avtal",
  "Lokal närvaro i Sundsvallsområdet",
]

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/om-oss#webpage`,
        url: `${SITE_URL}/om-oss`,
        name: "Om oss – Så fungerar tjänsten",
        description:
          "Information om hur förmedlingstjänsten fungerar för badrumsrenovering i Sundsvall.",
        inLanguage: "sv-SE",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${SITE_URL}/om-oss#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/om-oss#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Startsida",
            item: `${SITE_URL}/`,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Om oss",
            item: `${SITE_URL}/om-oss`,
          },
        ],
      },
    ],
  } as const

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-muted py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground mb-3">
              Om oss
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              Så fungerar vår tjänst
            </h1>
            <p className="mt-4 text-lg text-muted-foreground lg:text-xl">
              Vi hjälper dig att komma i kontakt med lokala företag för badrumsrenovering i
              Sundsvall – enkelt, kostnadsfritt och utan köpkrav.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="min-h-[48px]">
                <Link href="/kontakt">
                  Få kostnadsfri offert
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-h-[48px] bg-transparent">
                <Link href="/tjanster">Se tjänster</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-card py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-muted rounded-full px-4 py-2 mb-6">
                <Handshake className="h-4 w-4 text-accent" aria-hidden="true" />
                <span className="text-sm font-medium text-foreground">Förmedlingstjänst</span>
              </div>

              <h2 className="text-2xl font-bold text-foreground sm:text-3xl mb-4">
                Vad vi gör
              </h2>

              <div className="space-y-4 text-muted-foreground">
                <p>
                  Vi är en förmedlingstjänst som kopplar samman privatpersoner som vill renovera sitt
                  badrum med lokala företag i Sundsvall och omnejd.
                </p>
                <p>
                  Du skickar in en förfrågan via formuläret – sedan förmedlar vi den vidare till
                  passande företag. Företag som är intresserade kontaktar dig direkt.
                </p>
                <p>
                  <strong className="text-foreground">Viktigt:</strong> Vi utför inga renoveringar
                  själva. Villkor, pris, garanti och omfattning avtalas alltid mellan dig och
                  utförande företag.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="border-border">
                  <CardContent className="pt-6">
                    <benefit.icon className="h-8 w-8 text-accent mb-3" aria-hidden="true" />
                    <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <header className="text-center mb-12">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">Så fungerar det</h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Fyra steg från idé till offert – du väljer själv om du vill gå vidare.
            </p>
          </header>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((item) => (
              <article
                key={item.step}
                className="bg-card rounded-lg p-6 border border-border"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="bg-card py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <header className="text-center mb-12">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Våra krav på företag
              </h2>
              <p className="mt-3 text-muted-foreground">
                Vi vill att du ska känna dig trygg när du pratar med företag som kontaktar dig.
              </p>
            </header>

            <ul className="space-y-4">
              {contractorRequirements.map((requirement) => (
                <li
                  key={requirement}
                  className="flex items-start gap-3 bg-muted rounded-lg p-4"
                >
                  <CheckCircle
                    className="h-5 w-5 text-accent shrink-0 mt-0.5"
                    aria-hidden="true"
                  />
                  <span className="text-foreground">{requirement}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm text-muted-foreground">
              Certifieringar och dokumentation kan variera mellan företag och bekräftas alltid i
              offert/avtal innan du bestämmer dig.
            </p>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="bg-muted py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Building2 className="h-12 w-12 text-accent mx-auto mb-4" aria-hidden="true" />
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl mb-4">Om Innovo AB</h2>

            <div className="space-y-4 text-muted-foreground">
              <p>
                Tjänsten drivs av Innovo AB och är skapad för att göra det enklare för konsumenter
                att hitta lokala företag för renovering, samtidigt som lokala företag kan nå nya
                kunder.
              </p>
              <p className="text-sm">
                Vid frågor om tjänsten:{" "}
                <Link href="/kontakt" className="text-accent hover:underline">
                  kontakta oss här
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl mb-4">
            Redo att komma igång?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Skicka in en kostnadsfri förfrågan så får du kontakt med lokala företag. Ingen bindning.
          </p>
          <Button asChild size="lg" variant="secondary" className="min-h-[48px]">
            <Link href="/kontakt">
              Få kostnadsfri offert
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}
