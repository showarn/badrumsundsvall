import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { LeadForm } from "@/components/lead-form"
import { CheckCircle, Clock, Shield, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Kontakt & offertförfrågan",
  description: "Få kostnadsfri offert på badrumsrenovering i Sundsvall. Fyll i formuläret och få svar inom 24h. Lokala, certifierade hantverkare.",
}

const benefits = [
  {
    icon: Clock,
    text: "Svar inom 24 timmar",
  },
  {
    icon: CheckCircle,
    text: "Helt kostnadsfritt",
  },
  {
    icon: Shield,
    text: "Inget köpkrav",
  },
  {
    icon: MapPin,
    text: "Lokala hantverkare",
  },
]

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-muted py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 items-start">
            {/* Left Column - Info */}
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
                Få kostnadsfri offert
              </h1>
              <p className="mt-4 text-lg text-muted-foreground">
                Fyll i formuläret så matchar vi dig med kvalitetssäkrade hantverkare i Sundsvall, Timrå, Alnö och Njurunda.
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

              {/* What happens next */}
              <div className="mt-8">
                <h2 className="text-lg font-semibold text-foreground mb-4">
                  Vad händer efter du skickat formuläret?
                </h2>
                <ol className="space-y-3">
                  {[
                    "Vi granskar din förfrågan och matchar dig med passande hantverkare",
                    "Intresserade hantverkare kontaktar dig direkt med offerter",
                    "Du jämför offerterna och väljer det alternativ som passar dig bäst",
                    "Om du inte hittar något som passar tackar du bara nej – helt utan kostnad",
                  ].map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
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
                . Dina uppgifter delas endast med hantverkare som matchar ditt projekt.
              </p>
            </div>

            {/* Right Column - Form */}
            <Card className="border-0 shadow-xl lg:sticky lg:top-24">
              <CardContent className="p-6 lg:p-8">
                <h2 className="text-xl font-semibold text-foreground mb-2">
                  Berätta om ditt projekt
                </h2>
                <p className="text-sm text-muted-foreground mb-6">
                  Fyll i formuläret så återkommer vi inom 24 timmar.
                </p>
                <LeadForm variant="full" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="bg-card py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl mb-4">
              Varför använda vår tjänst?
            </h2>
            <p className="text-muted-foreground mb-8">
              Att hitta rätt hantverkare för din badrumsrenovering kan vara tidskrävande och svårt. 
              Vi gör jobbet åt dig genom att endast förmedla till kvalitetssäkrade, lokala företag 
              med rätt certifieringar och erfarenhet.
            </p>

            <div className="grid gap-6 md:grid-cols-3 text-left">
              <div className="bg-muted rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">Spara tid</h3>
                <p className="text-sm text-muted-foreground">
                  Istället för att ringa till ett dussin företag får du offerter direkt i din inbox.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">Jämför enkelt</h3>
                <p className="text-sm text-muted-foreground">
                  Med flera offerter kan du jämföra pris, innehåll och upplägg för att hitta bästa alternativet.
                </p>
              </div>
              <div className="bg-muted rounded-lg p-6">
                <h3 className="font-semibold text-foreground mb-2">Tryggt val</h3>
                <p className="text-sm text-muted-foreground">
                  Alla hantverkare vi förmedlar till är kontrollerade och har giltiga certifieringar.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
