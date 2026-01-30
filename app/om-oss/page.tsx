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
  Award
} from "lucide-react"

export const metadata: Metadata = {
  title: "Om oss",
  description: "Vi förmedlar offertförfrågningar för badrumsrenovering till lokala, kontrollerade hantverkare i Sundsvall. Läs mer om hur vår tjänst fungerar.",
}

const benefits = [
  {
    icon: Clock,
    title: "Spara tid",
    description: "Istället för att ringa runt till flera företag fyller du i ett formulär och får offerter direkt.",
  },
  {
    icon: Shield,
    title: "Trygg förmedling",
    description: "Vi samarbetar endast med kontrollerade företag som uppfyller våra kvalitetskrav.",
  },
  {
    icon: Users,
    title: "Lokala hantverkare",
    description: "Alla våra samarbetspartners är lokala företag med god kännedom om Sundsvall.",
  },
  {
    icon: Award,
    title: "Certifierade",
    description: "Företagen vi förmedlar till har giltiga certifieringar för våtrumsarbete.",
  },
]

const howItWorks = [
  {
    step: "1",
    title: "Du fyller i formuläret",
    description: "Berätta om ditt projekt – storlek, typ av renovering och när du vill starta. Det tar bara ett par minuter.",
  },
  {
    step: "2",
    title: "Vi matchar dig",
    description: "Vi förmedlar din förfrågan till passande lokala hantverkare som är intresserade av ditt projekt.",
  },
  {
    step: "3",
    title: "Få offerter",
    description: "Du får offerter direkt från hantverkarna, oftast inom 24 timmar. Jämför och välj själv.",
  },
  {
    step: "4",
    title: "Välj det bästa",
    description: "Du bestämmer själv vilken offert du vill gå vidare med – eller tackar nej till alla. Utan köpkrav.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-muted py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              Om vår tjänst
            </h1>
            <p className="mt-4 text-lg text-muted-foreground lg:text-xl">
              Vi hjälper dig hitta rätt hantverkare för din badrumsrenovering i Sundsvall – enkelt, kostnadsfritt och utan köpkrav.
            </p>
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
              <p className="text-muted-foreground mb-4">
                Vi är en förmedlingstjänst som kopplar samman privatpersoner som vill renovera sitt badrum 
                med kvalitetssäkrade, lokala hantverkare i Sundsvall och omnejd.
              </p>
              <p className="text-muted-foreground mb-4">
                Vår uppgift är att göra det enkelt för dig att få tag på pålitliga offerter utan att 
                behöva ringa runt till flera olika företag. Du fyller i ett formulär, och vi ser till 
                att rätt hantverkare kontaktar dig.
              </p>
              <p className="text-muted-foreground">
                <strong className="text-foreground">Viktigt att veta:</strong> Vi utför inga 
                renoveringar själva. Tjänsten är helt kostnadsfri för dig och innebär inget köpkrav.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit) => (
                <Card key={benefit.title} className="border-border">
                  <CardContent className="pt-6">
                    <benefit.icon className="h-8 w-8 text-accent mb-3" aria-hidden="true" />
                    <h3 className="font-semibold text-foreground mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
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
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
              Så fungerar det
            </h2>
            <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">
              Fyra enkla steg till din badrumsrenovering
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {howItWorks.map((item) => (
              <div key={item.step} className="bg-card rounded-lg p-6 border border-border">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-foreground mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Requirements */}
      <section className="bg-card py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                Våra krav på hantverkare
              </h2>
              <p className="mt-3 text-muted-foreground">
                Vi samarbetar endast med företag som uppfyller följande krav
              </p>
            </div>

            <ul className="space-y-4">
              {[
                "F-skattsedel och registrerat företag",
                "Giltiga certifieringar för våtrumsarbete (GVK eller BKR)",
                "Fullständig ansvarsförsäkring",
                "Goda referenser och dokumenterad erfarenhet",
                "Lokal förankring i Sundsvallsområdet",
                "Följer branschens säkerhetsregler (BBV)",
              ].map((requirement) => (
                <li key={requirement} className="flex items-start gap-3 bg-muted rounded-lg p-4">
                  <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-foreground">{requirement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="bg-muted py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <Building2 className="h-12 w-12 text-accent mx-auto mb-4" aria-hidden="true" />
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl mb-4">
              Om Innovo AB
            </h2>
            <p className="text-muted-foreground mb-6">
              Denna tjänst drivs av Innovo AB, ett svenskt företag som specialiserar sig på att 
              förmedla tjänster inom bygg- och renoveringsbranschen. Vi strävar efter att göra det 
              enklare för konsumenter att hitta pålitliga hantverkare, samtidigt som vi hjälper 
              lokala företag att nå nya kunder.
            </p>
            <p className="text-sm text-muted-foreground">
              Vid frågor om tjänsten, vänligen kontakta oss via{" "}
              <Link href="/kontakt" className="text-accent hover:underline">
                kontaktformuläret
              </Link>
              .
            </p>
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
            Fyll i formuläret så matchar vi dig med de bästa lokala hantverkarna. 
            Kostnadsfritt och utan köpkrav.
          </p>
          <Button asChild size="lg" variant="secondary" className="min-h-[48px]">
            <Link href="/kontakt">
              Få kostnadsfri offert
              <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
