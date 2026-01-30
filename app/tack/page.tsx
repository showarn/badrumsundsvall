import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Clock, Phone, ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "Tack för din förfrågan",
  description: "Vi har tagit emot din offertförfrågan för badrumsrenovering. Du kommer att kontaktas inom 24 timmar.",
}

const nextSteps = [
  {
    icon: CheckCircle,
    title: "Förfrågan mottagen",
    description: "Vi har tagit emot din förfrågan och granskar den.",
  },
  {
    icon: Clock,
    title: "Svar inom 24h",
    description: "Intresserade hantverkare kontaktar dig direkt med offerter.",
  },
  {
    icon: Phone,
    title: "Var redo",
    description: "Se till att du kan svara i telefon de närmaste dagarna.",
  },
]

export default function ThankYouPage() {
  return (
    <div className="flex flex-col min-h-[70vh]">
      <section className="flex-1 flex items-center bg-muted py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8 w-full">
          <Card className="border-0 shadow-xl">
            <CardContent className="p-8 lg:p-12 text-center">
              {/* Success Icon */}
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-accent/20 mb-6">
                <CheckCircle className="h-8 w-8 text-accent" aria-hidden="true" />
              </div>

              {/* Heading */}
              <h1 className="text-2xl font-bold text-foreground sm:text-3xl mb-3">
                Tack för din förfrågan!
              </h1>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Vi har tagit emot din offertförfrågan för badrumsrenovering i Sundsvall. 
                Du kommer att kontaktas av intresserade hantverkare inom kort.
              </p>

              {/* Next Steps */}
              <div className="grid gap-4 sm:grid-cols-3 mb-8">
                {nextSteps.map((step) => (
                  <div 
                    key={step.title}
                    className="bg-muted rounded-lg p-4 text-left"
                  >
                    <step.icon className="h-5 w-5 text-accent mb-2" aria-hidden="true" />
                    <h3 className="font-semibold text-foreground text-sm mb-1">
                      {step.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Info Box */}
              <div className="bg-primary/5 rounded-lg p-4 mb-8 text-left">
                <h3 className="font-semibold text-foreground mb-2">
                  Vad händer nu?
                </h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li>1. Vi matchar din förfrågan med lämpliga lokala hantverkare</li>
                  <li>2. Intresserade hantverkare kontaktar dig med offerter</li>
                  <li>3. Du jämför och väljer det alternativ som passar dig bäst</li>
                  <li>4. Kom ihåg – du är inte bunden att tacka ja till något</li>
                </ul>
              </div>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild variant="outline" size="lg" className="min-h-[48px] bg-transparent">
                  <Link href="/">
                    Tillbaka till startsidan
                  </Link>
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

          {/* Additional Info */}
          <p className="text-center text-sm text-muted-foreground mt-6">
            Har du frågor? Läs vår{" "}
            <Link href="/faq" className="text-accent hover:underline">
              FAQ
            </Link>
            {" "}eller{" "}
            <Link href="/om-oss" className="text-accent hover:underline">
              läs mer om hur tjänsten fungerar
            </Link>
            .
          </p>
        </div>
      </section>
    </div>
  )
}
