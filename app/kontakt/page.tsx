import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { LeadForm } from "@/components/lead-form"
import { CheckCircle, Clock, Shield, MapPin } from "lucide-react"

const SITE_URL = "https://badrum-sundsvall.se"

export const metadata: Metadata = {
  title: "Kontakt & offertförfrågan – Badrumsrenovering i Sundsvall",
  description:
    "Skicka en kostnadsfri offertförfrågan för badrumsrenovering i Sundsvall. Vi förmedlar din förfrågan till lokala företag. Målet är svar inom 24 timmar.",
  alternates: { canonical: "/kontakt" },
  openGraph: {
    url: `${SITE_URL}/kontakt`,
    title: "Kontakt & offertförfrågan | Badrumsrenovering i Sundsvall",
    description:
      "Skicka en kostnadsfri offertförfrågan. Vi förmedlar din förfrågan till lokala företag – målet är svar inom 24 timmar.",
  },
  robots: { index: true, follow: true },
}

type Benefit = {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>
  text: string
}

const benefits: Benefit[] = [
  { icon: Clock, text: "Målet är svar inom 24 timmar" },
  { icon: CheckCircle, text: "Helt kostnadsfritt att skicka in" },
  { icon: Shield, text: "Ingen bindning eller köpkrav" },
  { icon: MapPin, text: "Sundsvall med omnejd" },
]

const nextSteps: string[] = [
  "Vi granskar din förfrågan och matchar den med passande lokala företag",
  "Företag som vill lämna offert kontaktar dig direkt",
  "Du jämför pris, upplägg och villkor i lugn och ro",
  "Passar inget – tacka nej utan kostnad",
]

const faq: { q: string; a: string }[] = [
  {
    q: "Är det gratis att skicka in en förfrågan?",
    a: "Ja, det är kostnadsfritt att skicka in. Du väljer själv om du vill gå vidare med någon offert.",
  },
  {
    q: "Hur snabbt blir jag kontaktad?",
    a: "Målet är att första kontakten sker inom 24 timmar, men det kan variera beroende på säsong och omfattning.",
  },
  {
    q: "Måste jag tacka ja till en offert?",
    a: "Nej. Du är inte bunden att acceptera någon offert.",
  },
  {
    q: "Hur hanteras mina personuppgifter?",
    a: "Vi behandlar uppgifter enligt vår integritetspolicy och delar endast relevanta uppgifter med företag som kan vara aktuella för ditt projekt.",
  },
]

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/kontakt#webpage`,
        url: `${SITE_URL}/kontakt`,
        name: "Kontakt & offertförfrågan – Badrumsrenovering i Sundsvall",
        description:
          "Kontakt och offertförfrågan för badrumsrenovering i Sundsvall. Skicka in en kostnadsfri förfrågan.",
        inLanguage: "sv-SE",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${SITE_URL}/kontakt#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/kontakt#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Startsida", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Kontakt", item: `${SITE_URL}/kontakt` },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${SITE_URL}/kontakt#faq`,
        mainEntity: faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  } as const

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-muted py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            {/* Left column */}
            <div>
              <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground mb-3">
                Kontakt
              </p>

              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
                Få kostnadsfri offertförfrågan
              </h1>

              <p className="mt-4 text-lg text-muted-foreground">
                Fyll i formuläret så förmedlar vi din förfrågan till lokala företag i Sundsvall med omnejd
                (t.ex. Timrå, Alnö och Njurunda).
              </p>

              {/* Benefits */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {benefits.map((benefit) => (
                  <div
                    key={benefit.text}
                    className="flex items-center gap-3 bg-card rounded-lg p-4 border border-border"
                  >
                    <benefit.icon className="h-5 w-5 text-accent shrink-0" aria-hidden="true" />
                    <span className="font-medium text-foreground">{benefit.text}</span>
                  </div>
                ))}
              </div>

              {/* Next steps */}
              <div className="mt-8">
                <h2 className="text-lg font-semibold text-foreground mb-4">
                  Vad händer efter att du skickat formuläret?
                </h2>
                <ol className="space-y-3">
                  {nextSteps.map((step, index) => (
                    <li key={step} className="flex items-start gap-3">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent text-accent-foreground text-sm font-medium">
                        {index + 1}
                      </span>
                      <span className="text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Privacy note */}
              <p className="mt-8 text-sm text-muted-foreground">
                Vi behandlar dina uppgifter enligt{" "}
                <Link href="/integritetspolicy" className="text-accent hover:underline">
                  vår integritetspolicy
                </Link>
                . Vi delar endast relevanta uppgifter med företag som kan vara aktuella för ditt projekt.
              </p>

              {/* Small helper links */}
              <div className="mt-6 text-sm text-muted-foreground">
                <span>Vill du läsa mer först? </span>
                <Link href="/om-oss" className="text-accent hover:underline">
                  Så fungerar tjänsten
                </Link>
                <span> • </span>
                <Link href="/faq" className="text-accent hover:underline">
                  Vanliga frågor
                </Link>
              </div>
            </div>

            {/* Right column - form */}
            <Card className="border-0 shadow-xl lg:sticky lg:top-24">
              <CardContent className="p-6 lg:p-8">
                <h2 className="text-xl font-semibold text-foreground mb-2">Berätta om ditt projekt</h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Fyll i formuläret så förmedlar vi din förfrågan. Målet är att du blir kontaktad inom 24 timmar.
                </p>
                <LeadForm variant="full" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional info */}
      <section className="bg-card py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <header className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl mb-4">
              Varför använda vår tjänst?
            </h2>
            <p className="text-muted-foreground mb-8">
              Att hitta rätt företag för badrumsrenovering kan ta tid. Vi gör det enklare genom att förmedla din
              förfrågan så att du kan jämföra offerter och villkor utan att ringa runt.
            </p>
          </header>

          <div className="grid gap-6 md:grid-cols-3 text-left">
            <div className="bg-muted rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-2">Spara tid</h3>
              <p className="text-sm text-muted-foreground">
                Skicka in en förfrågan – och bli kontaktad av företag som vill lämna offert.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-2">Jämför enkelt</h3>
              <p className="text-sm text-muted-foreground">
                Jämför pris, upplägg och villkor så du kan fatta ett tryggt beslut.
              </p>
            </div>
            <div className="bg-muted rounded-lg p-6">
              <h3 className="font-semibold text-foreground mb-2">Du bestämmer</h3>
              <p className="text-sm text-muted-foreground">
                Du väljer själv om du vill gå vidare – annars tackar du nej utan kostnad.
              </p>
            </div>
          </div>

          {/* Mini FAQ (visible) */}
          <div className="max-w-3xl mx-auto mt-14">
            <h2 className="text-xl font-semibold text-foreground mb-6 text-center">Vanliga frågor</h2>
            <div className="divide-y divide-border rounded-lg border border-border bg-card">
              {faq.map((item) => (
                <div key={item.q} className="p-6">
                  <h3 className="font-semibold text-foreground mb-2">{item.q}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
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
