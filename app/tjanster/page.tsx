import type { Metadata } from "next"
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
  ArrowRight
} from "lucide-react"

export const metadata: Metadata = {
  title: "Tjänster inom badrumsrenovering",
  description: "Vi erbjuder helrenovering av badrum, tätskikt, kakel & klinker, VVS och el i Sundsvall. Få offert från certifierade hantverkare.",
}

const services = [
  {
    icon: Bath,
    title: "Helrenovering av badrum",
    description: "Komplett badrumsrenovering från golv till tak. Vi koordinerar alla moment så du får ett nyckelfärdigt badrum utan att behöva hantera flera olika hantverkare.",
    features: [
      "Rivning och bortforsling",
      "Nytt tätskikt enligt branschregler",
      "Kakel, klinker och våtrumsmatta",
      "VVS och el-arbeten",
      "Målning och lister",
      "Installation av inredning",
    ],
  },
  {
    icon: Droplets,
    title: "Tätskikt & våtrum",
    description: "Ett korrekt utfört tätskikt är grunden för ett hållbart badrum. Våra certifierade hantverkare följer GVK:s branschregler för våtrum.",
    features: [
      "GVK-certifierade hantverkare",
      "Tätskikt enligt BBV",
      "Godkända material och metoder",
      "10 års försäkringsgaranti",
      "Dokumentation och protokoll",
      "Kontroll och besiktning",
    ],
  },
  {
    icon: Grid3X3,
    title: "Kakel & klinker",
    description: "Kakel och klinker är ofta det som sätter stilen i badrummet. Vi hjälper dig välja material och utförande som passar just ditt badrum.",
    features: [
      "Vägg- och golvplattor",
      "Stort urval av material",
      "Mönsterläggning",
      "Golvvärme under klinker",
      "Fogning och silikonfogning",
      "Hörnlister och avslutningar",
    ],
  },
  {
    icon: Wrench,
    title: "VVS i badrum",
    description: "Professionell VVS-installation för dusch, badkar, handfat och toalett. Vi ser till att alla rör och avlopp fungerar perfekt.",
    features: [
      "Nya stammar och avlopp",
      "Installation av handfat",
      "Dusch och badkar",
      "Toalettinstallation",
      "Blandare och duschmunstycken",
      "Tvättmaskinsanslutning",
    ],
  },
  {
    icon: Zap,
    title: "El i badrum",
    description: "Säker och funktionell elinstallation i våtutrymmen. Våra elektriker är certifierade för arbete i badrum enligt gällande regelverk.",
    features: [
      "Elinstallation i våtrum",
      "Spotlights och belysning",
      "Eluttag (jordfelsbrytare)",
      "Golvvärme-el",
      "Spegelskåp med belysning",
      "Handdukstorkar",
    ],
  },
]

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-muted py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              Tjänster inom badrumsrenovering
            </h1>
            <p className="mt-4 text-lg text-muted-foreground lg:text-xl">
              Vi förmedlar alla typer av badrumsrenoveringar i Sundsvall och omnejd. 
              Från enklare uppfräschningar till kompletta helrenoveringar.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" className="min-h-[48px]">
                <Link href="/kontakt">
                  Få offert
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-card py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="space-y-12">
            {services.map((service, index) => (
              <Card key={service.title} className="border-border overflow-hidden">
                <div className={`grid lg:grid-cols-2 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <CardHeader className="bg-muted p-6 lg:p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary">
                        <service.icon className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
                      </div>
                      <CardTitle className="text-xl lg:text-2xl">{service.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground">
                      {service.description}
                    </p>
                  </CardHeader>
                  <CardContent className="p-6 lg:p-8">
                    <h4 className="font-semibold text-foreground mb-4">Detta ingår:</h4>
                    <ul className="grid gap-3 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-primary-foreground sm:text-3xl mb-4">
            Redo att komma igång?
          </h2>
          <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
            Berätta om ditt projekt så hjälper vi dig hitta rätt hantverkare i Sundsvall, Timrå, Alnö eller Njurunda.
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
