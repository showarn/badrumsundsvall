import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Phone, ArrowRight } from "lucide-react"

const SITE_URL = "https://badrum-sundsvall.se"

export const metadata: Metadata = {
  title: "Tack för din förfrågan",
  description:
    "Vi har tagit emot din offertförfrågan för badrumsrenovering. Du kommer att kontaktas av intresserade hantverkare inom kort.",
  alternates: { canonical: "/tack" },
  robots: { index: false, follow: true },
  openGraph: {
    url: `${SITE_URL}/tack`,
    title: "Tack för din förfrågan",
    description:
      "Vi har tagit emot din offertförfrågan för badrumsrenovering. Du kommer att kontaktas av intresserade hantverkare inom kort.",
  },
}

const nextSteps = [
  {
    icon: CheckCircle,
    title: "Förfrågan mottagen",
    description: "Vi har tagit emot din förfrågan och matchar den mot relevanta företag.",
  },
  {
    icon: Clock,
    title: "Svar inom 24h",
    description: "Målet är att du ska bli kontaktad inom 24 timmar.",
  },
  {
    icon: Phone,
    title: "Var redo",
    description: "Ha koll på mobilen de närmaste dagarna så du inte missar samtal.",
  },
] as const

export default function ThankYouPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE_URL}/tack#webpage`,
    url: `${SITE_URL}/tack`,
    name: "Tack för din förfrågan",
    description:
      "Vi har tagit emot din offertförfrågan för badrumsrenovering. Du kommer att kontaktas av intresserade hantverkare inom kort.",
    inLanguage: "sv-SE",
    isPartOf: {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Badrumsrenovering Sundsvall",
    },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Startsida", item: SITE_URL },
        { "@type": "ListItem", position: 2, name: "Tack", item: `${SITE_URL}/tack` },
      ],
    },
  } as const

  return (
    <div className="flex flex-col min-h-[70vh]">
      <section className="flex-1 flex items-center bg-muted py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8 w-full">
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8 lg:p-12 text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 mb-6">
                <CheckCircle className="h-8 w-8 text-accent" aria-hidden="true" />
              </div>

              <h1 className="text-2xl font-bold text-foreground sm:text-3xl mb-3">
                Tack för din förfrågan!
              </h1>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Vi har tagit emot din offertförfrågan för badrumsrenovering i Sundsvall. Du kommer att
                kontaktas av intresserade hantverkare inom kort.
              </p>

              <div className="grid gap-4 sm:grid-cols-3 mb-8">
                {nextSteps.map((step) => (
                  <div key={step.title} className="bg-muted rounded-lg p-4 text-left">
                    <step.icon className="h-5 w-5 text-accent mb-2" aria-hidden="true" />
                    <h2 className="font-semibold text-foreground text-sm mb-1">{step.title}</h2>
                    <p className="text-xs text-muted-foreground">{step.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-primary/5 rounded-lg p-4 mb-8 text-left">
                <h2 className="font-semibold text-foreground mb-2">Vad händer nu?</h2>
                <ol className="text-sm text-muted-foreground space-y-2 list-decimal pl-5">
                  <li>Vi matchar din förfrågan med lämpliga lokala företag.</li>
                  <li>Intresserade företag kontaktar dig med frågor och/eller offert.</li>
                  <li>Du jämför och väljer det alternativ som passar dig bäst.</li>
                  <li>Du är inte bunden att tacka ja.</li>
                </ol>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="outline" size="lg" className="min-h-[48px] bg-transparent">
                  <Link href="/">Tillbaka till startsidan</Link>
                </Button>
                <Button asChild size="lg" className="min-h-[48px]">
                  <Link href="/faq">
                    Vanliga frågor
                    <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Har du frågor? Läs vår{" "}
            <Link href="/faq" className="text-accent hover:underline">
              FAQ
            </Link>{" "}
            eller{" "}
            <Link href="/om-oss" className="text-accent hover:underline">
              läs mer om hur tjänsten fungerar
            </Link>
            .
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </div>
  )
}
