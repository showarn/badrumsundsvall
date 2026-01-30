import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { LeadForm } from "@/components/lead-form"
import { ImageCarousel } from "@/components/image-carousel"
import { 
  CheckCircle, 
  ArrowRight,
  Shield,
  Award,
  Clock,
  Sparkles
} from "lucide-react"

const carouselImages = [
  { src: "/images/carousel-1.jpg", alt: "Modern dusch med regndusch och glasvägg" },
  { src: "/images/carousel-2.jpg", alt: "Elegant badrum med dubbla handfat" },
  { src: "/images/carousel-3.jpg", alt: "Mysigt badrum med fristående badkar" },
  { src: "/images/carousel-4.jpg", alt: "Minimalistiskt badrum med moderna detaljer" },
]

const steps = [
  {
    number: "01",
    title: "Beskriv ditt projekt",
    description: "Fyll i formuläret med dina önskemål och visioner för ditt nya badrum.",
  },
  {
    number: "02", 
    title: "Få matchade offerter",
    description: "Vi förmedlar din förfrågan till certifierade lokala hantverkare i Sundsvall.",
  },
  {
    number: "03",
    title: "Välj din favorit",
    description: "Jämför offerterna i lugn och ro och välj den som passar dig bäst.",
  },
]

const priceRanges = [
  { type: "Litet badrum", size: "under 5 kvm", range: "80 000 – 150 000 kr" },
  { type: "Mellan badrum", size: "5-10 kvm", range: "150 000 – 250 000 kr" },
  { type: "Stort badrum", size: "över 10 kvm", range: "250 000 – 400 000 kr" },
]

const trustFeatures = [
  {
    icon: Shield,
    title: "Certifierade hantverkare",
    description: "GVK- och BKR-certifierade företag med fullständig ansvarsförsäkring.",
  },
  {
    icon: Award,
    title: "Kvalitetsgaranti",
    description: "Garanti på allt utfört arbete enligt branschens högsta standarder.",
  },
  {
    icon: Clock,
    title: "Snabb respons",
    description: "Svar inom 24 timmar, kostnadsfritt hembesök för projektplanering.",
  },
  {
    icon: Sparkles,
    title: "ROT-avdrag",
    description: "Spara upp till 50 000 kr per person med skattesubventionen.",
  },
]

const miniFaq = [
  {
    question: "Hur fungerar ROT-avdraget?",
    answer: "Du får 30% avdrag på arbetskostnaden, max 50 000 kr per person och år. Avdraget dras direkt på fakturan.",
  },
  {
    question: "Hur lång tid tar renoveringen?",
    answer: "En normal badrumsrenovering tar 3-6 veckor beroende på storlek och omfattning.",
  },
  {
    question: "Är alla hantverkare certifierade?",
    answer: "Ja, vi samarbetar endast med GVK- eller BKR-certifierade företag som följer branschreglerna för våtrum.",
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Full Width Image */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-bathroom.jpg"
            alt="Lyxigt skandinaviskt badrum med fristående badkar och naturligt ljus"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
        </div>
        
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 lg:px-8">
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-[0.2em] text-background/80 mb-4">
              Badrumsrenovering i Sundsvall
            </p>
            <h1 className="font-serif text-4xl font-medium tracking-tight text-background sm:text-5xl lg:text-6xl text-balance leading-[1.1]">
              Ditt drömBadrum börjar här
            </h1>
            <p className="mt-6 text-lg text-background/90 leading-relaxed max-w-md">
              Få kostnadsfri offert från lokala, certifierade hantverkare. Svar inom 24 timmar.
            </p>
            
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button 
                asChild 
                size="lg" 
                className="min-h-[56px] px-8 text-base bg-background text-foreground hover:bg-background/90"
              >
                <Link href="/kontakt">
                  Få kostnadsfri offert
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                asChild 
                variant="outline" 
                size="lg" 
                className="min-h-[56px] px-8 text-base border-background/30 text-background hover:bg-background/10 bg-transparent"
              >
                <Link href="/tjanster">Våra tjänster</Link>
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-6 text-sm text-background/80">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Kostnadsfritt</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Ingen bindning</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>ROT-avdrag</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Carousel Section */}
      <section className="bg-card">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground mb-3">
              Inspiration
            </p>
            <h2 className="font-serif text-3xl font-medium text-foreground sm:text-4xl">
              Badrum vi har förmedlat
            </h2>
          </div>
          <ImageCarousel images={carouselImages} />
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground mb-3">
              Processen
            </p>
            <h2 className="font-serif text-3xl font-medium text-foreground sm:text-4xl">
              Så fungerar det
            </h2>
          </div>

          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center md:text-left">
                <span className="font-serif text-6xl font-light text-border/60">
                  {step.number}
                </span>
                <h3 className="mt-4 text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-px bg-border -translate-x-1/2" />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Button asChild size="lg" className="min-h-[56px] px-10">
              <Link href="/kontakt">
                Kom igång
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-card py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground mb-3">
                Priser
              </p>
              <h2 className="font-serif text-3xl font-medium text-foreground sm:text-4xl mb-6">
                Vad kostar en badrumsrenovering?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Priset varierar beroende på storlek, materialval och arbetets omfattning. 
                Här är ungefärliga prisintervall för renoveringar i Sundsvall:
              </p>

              <div className="space-y-0 border-t border-border">
                {priceRanges.map((item) => (
                  <div 
                    key={item.type}
                    className="flex justify-between items-center py-5 border-b border-border"
                  >
                    <div>
                      <span className="text-foreground font-medium">{item.type}</span>
                      <span className="text-muted-foreground ml-2 text-sm">({item.size})</span>
                    </div>
                    <span className="font-semibold text-foreground">{item.range}</span>
                  </div>
                ))}
              </div>

              <p className="text-sm text-muted-foreground mt-6">
                * Priserna inkluderar material och arbete. ROT-avdrag kan sänka kostnaden med upp till 50 000 kr.
              </p>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/bathroom-renovation.jpg"
                alt="Pågående badrumsrenovering i Sundsvall"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-primary text-primary-foreground py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.15em] text-primary-foreground/70 mb-3">
              Trygghet
            </p>
            <h2 className="font-serif text-3xl font-medium sm:text-4xl">
              Kvalitet du kan lita på
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {trustFeatures.map((feature) => (
              <div key={feature.title} className="text-center lg:text-left">
                <feature.icon className="h-8 w-8 mx-auto lg:mx-0 mb-4 text-primary-foreground/80" />
                <h3 className="text-lg font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mini FAQ */}
      <section className="bg-card py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground mb-3">
              Frågor & Svar
            </p>
            <h2 className="font-serif text-3xl font-medium text-foreground sm:text-4xl">
              Vanliga frågor
            </h2>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-border">
            {miniFaq.map((item) => (
              <div key={item.question} className="py-8">
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {item.question}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg" className="min-h-[56px] px-8 bg-transparent">
              <Link href="/faq">Se alla frågor</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section with Form */}
      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground mb-3">
                Kom igång
              </p>
              <h2 className="font-serif text-3xl font-medium text-foreground sm:text-4xl mb-6">
                Redo att förverkliga ditt drömBadrum?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Fyll i formuläret så matchar vi dig med de bästa lokala hantverkarna i Sundsvall, 
                Timrå, Alnö och Njurunda. Helt kostnadsfritt och utan förpliktelser.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Kostnadsfri offertförfrågan",
                  "Svar inom 24 timmar",
                  "Jämför flera offerter",
                  "Lokala, certifierade företag",
                  "Ingen bindning eller köpkrav",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="border-0 shadow-xl bg-card">
              <CardContent className="p-8 lg:p-10">
                <h3 className="font-serif text-2xl font-medium text-foreground mb-8">
                  Få kostnadsfri offert
                </h3>
                <LeadForm variant="compact" />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* LocalBusiness Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "Badrumsrenovering Sundsvall",
            description: "Förmedling av offertförfrågningar för badrumsrenovering till lokala, kontrollerade hantverkare i Sundsvall.",
            serviceType: "Badrumsrenovering",
            areaServed: [
              { "@type": "City", name: "Sundsvall" },
              { "@type": "City", name: "Timrå" },
              { "@type": "City", name: "Alnö" },
              { "@type": "City", name: "Njurunda" },
            ],
            geo: {
              "@type": "GeoCoordinates",
              latitude: 62.3908,
              longitude: 17.3069,
            },
            url: "https://badrumsrenovering-sundsvall.se",
          }),
        }}
      />
    </div>
  )
}
