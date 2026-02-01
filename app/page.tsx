import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { LeadForm } from "@/components/lead-form"
import { ImageCarousel } from "@/components/image-carousel"
import { CheckCircle, ArrowRight, Shield, Award, Clock, Sparkles } from "lucide-react"

const SITE_URL = "https://badrum-sundsvall.se"
const PAGE_TITLE = "Badrumsrenovering i Sundsvall | Få kostnadsfri offert"
const PAGE_DESC =
  "Få kostnadsfri offert på badrumsrenovering i Sundsvall. Vi förmedlar din förfrågan till lokala, kontrollerade hantverkare. ROT-avdrag. Svar inom 24h."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: PAGE_TITLE,
  description: PAGE_DESC,

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  keywords: [
    "badrumsrenovering sundsvall",
    "renovera badrum sundsvall",
    "badrum sundsvall",
    "offert badrumsrenovering",
    "kakel klinker sundsvall",
    "tätskikt våtrum sundsvall",
    "vvs badrum sundsvall",
    "el badrum sundsvall",
  ],

  openGraph: {
    type: "website",
    locale: "sv_SE",
    url: "/",
    title: PAGE_TITLE,
    description:
      "Få kostnadsfri offert på badrumsrenovering i Sundsvall. Lokala hantverkare, ROT-avdrag, svar inom 24h.",
    siteName: "Badrum Sundsvall",
    images: [
      {
        url: `${SITE_URL}/og.jpg`,
        width: 1200,
        height: 630,
        alt: "Badrumsrenovering i Sundsvall",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: PAGE_TITLE,
    description: PAGE_DESC,
    images: [`${SITE_URL}/og.jpg`],
  },
}

const carouselImages = [
  {
    src: "/images/badrum-sundsvall-modern-dusch-regndusch.webp",
    alt: "Modern duschlösning med regndusch och glasvägg i badrum i Sundsvall",
  },
  {
    src: "/images/badrum-sundsvall-elegant-badrum-dubbla-handfat.webp",
    alt: "Elegant badrum med dubbla handfat – badrumsrenovering i Sundsvall",
  },
  {
    src: "/images/badrum-sundsvall-fristaende-badkar.webp",
    alt: "Mysigt badrum med fristående badkar efter badrumsrenovering i Sundsvall",
  },
  {
    src: "/images/badrum-sundsvall-minimalistiskt-badrum.webp",
    alt: "Minimalistiskt badrum med moderna detaljer – badrum i Sundsvall",
  },
]

const steps = [
  {
    number: "01",
    title: "Beskriv ditt projekt",
    description: "Fyll i formuläret med dina önskemål och behov för ditt badrum.",
    href: "/kontakt",
    cta: "Skicka förfrågan",
  },
  {
    number: "02",
    title: "Vi förmedlar din förfrågan",
    description: "Din förfrågan skickas till lokala och kontrollerade hantverkare i Sundsvall.",
    href: "/tjanster",
    cta: "Se tjänster",
  },
  {
    number: "03",
    title: "Jämför och välj",
    description: "Du väljer själv om du vill gå vidare och med vem.",
    href: "/faq",
    cta: "Läs vanliga frågor",
  },
] as const

const popularServices = [
  {
    title: "Helrenovering av badrum i Sundsvall",
    desc: "Nyckelfärdigt badrum från rivning till färdig montering av inredning.",
    href: "/tjanster/helrenovering-badrum",
  },
  {
    title: "Tätskikt & våtrum i Sundsvall",
    desc: "Tätskiktssystem och kritiska detaljer – grunden för ett hållbart badrum.",
    href: "/tjanster/tatskikt-vatrum",
  },
  {
    title: "Kakel & klinker i badrum i Sundsvall",
    desc: "Plattsättning med rätt fog, avslut och hållbart resultat.",
    href: "/tjanster/kakel-klinker",
  },
  {
    title: "VVS i badrum i Sundsvall",
    desc: "Rördragning, avlopp och inkoppling av dusch/WC/handfat.",
    href: "/tjanster/vvs-badrum",
  },
  {
    title: "El i badrum i Sundsvall",
    desc: "Belysning, eluttag och golvvärme – planerat och utfört korrekt.",
    href: "/tjanster/el-badrum",
  },
] as const

const priceRanges = [
  { type: "Litet badrum", size: "under 5 kvm", range: "80 000 – 150 000 kr" },
  { type: "Mellan badrum", size: "5–10 kvm", range: "150 000 – 250 000 kr" },
  { type: "Stort badrum", size: "över 10 kvm", range: "250 000 – 400 000 kr" },
]

const trustFeatures = [
  {
    icon: Shield,
    title: "Kontrollerade företag",
    description: "Vi förmedlar förfrågningar till företag som arbetar enligt branschregler för våtrum.",
  },
  {
    icon: Award,
    title: "Trygga villkor",
    description: "Villkor, garanti och omfattning avtalas alltid direkt mellan dig och utförande företag.",
  },
  {
    icon: Clock,
    title: "Snabb respons",
    description: "Målet är svar inom 24 timmar. Kostnadsfritt att skicka in.",
  },
  {
    icon: Sparkles,
    title: "ROT-avdrag",
    description: "ROT kan sänka arbetskostnaden. Utförande företag hanterar avdraget på fakturan.",
  },
]

const miniFaq = [
  {
    question: "Hur fungerar ROT-avdraget?",
    answer:
      "Du kan få avdrag på arbetskostnaden enligt Skatteverkets regler. Utförande företag drar av ROT direkt på fakturan.",
  },
  {
    question: "Hur lång tid tar renoveringen?",
    answer:
      "En normal badrumsrenovering tar ofta 3–6 veckor, men tidsplanen beror på omfattning, material och tillgänglighet.",
  },
  {
    question: "Är hantverkarna certifierade?",
    answer:
      "Vi strävar efter att förmedla till företag som följer branschregler för våtrum. Certifieringar kan variera och bekräftas i offert/avtal.",
  },
] as const

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#service`,
    name: "Badrumsrenovering Sundsvall",
    url: SITE_URL,
    inLanguage: "sv-SE",
    image: `${SITE_URL}/og.jpg`,
    description: "Vi förmedlar offertförfrågningar för badrumsrenovering till lokala företag i Sundsvall.",
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": SITE_URL,
      url: SITE_URL,
      name: PAGE_TITLE,
    },
    provider: {
      "@type": "Organization",
      name: "Innovo AB",
      url: SITE_URL,
    },
    areaServed: [
      { "@type": "City", name: "Sundsvall" },
      { "@type": "City", name: "Timrå" },
      { "@type": "City", name: "Alnö" },
      { "@type": "City", name: "Njurunda" },
    ],
    serviceType: "Badrumsrenovering",
    geo: {
      "@type": "GeoCoordinates",
      latitude: 62.3908,
      longitude: 17.3069,
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tjänster inom badrumsrenovering",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Helrenovering av badrum" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tätskikt & våtrum" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Kakel & klinker" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "VVS i badrum" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "El i badrum" } },
      ],
    },
  } as const

  return (
    <div className="flex flex-col">
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-badrumsrenovering-sundsvall-modern.webp"
            alt="Modern badrumsrenovering i Sundsvall med kakel, dusch och stilren design"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/70 via-foreground/40 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-20 lg:px-8">
          <div className="max-w-xl">
            <p className="text-sm uppercase tracking-[0.2em] text-background/80 mb-4">Badrumsrenovering i Sundsvall</p>
            <h1 className="font-serif text-4xl font-medium tracking-tight text-background sm:text-5xl lg:text-6xl text-balance leading-[1.1]">
              Ditt drömbadrum börjar här
            </h1>
            <p className="mt-6 text-lg text-background/90 leading-relaxed max-w-md">
              Skicka in en kostnadsfri förfrågan – vi förmedlar den till lokala hantverkare. Målet är svar inom 24 timmar.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="min-h-[56px] px-8 text-base bg-background text-foreground hover:bg-background/90"
              >
                <Link href="/kontakt">
                  Få kostnadsfri offert
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
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

            <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-background/80">
              {["Kostnadsfritt", "Ingen bindning", "ROT möjligt"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" aria-hidden="true" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-card">
        <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground mb-3">Inspiration</p>
            <h2 className="font-serif text-3xl font-medium text-foreground sm:text-4xl">Badrumsinspiration</h2>
            <p className="mt-3 text-muted-foreground">
              Exempel på stilar och lösningar – din offert beror på val av material och omfattning.
            </p>
          </div>
          <ImageCarousel images={carouselImages} />
        </div>
      </section>

      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground mb-3">Processen</p>
            <h2 className="font-serif text-3xl font-medium text-foreground sm:text-4xl">Så fungerar det</h2>
          </div>

          <div className="grid gap-12 md:grid-cols-3 md:gap-8">
            {steps.map((step, index) => (
              <div key={step.number} className="relative text-center md:text-left">
                <Link
                  href={step.href}
                  className="group block rounded-2xl border border-transparent p-4 -m-4 transition hover:bg-card hover:border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  aria-label={`${step.title} – ${step.cta}`}
                >
                  <span className="font-serif text-6xl font-light tracking-tight leading-none text-foreground/50 drop-shadow-sm">
                    {step.number}
                  </span>

                  <h3 className="mt-4 text-xl font-semibold text-foreground group-hover:underline underline-offset-4">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-muted-foreground leading-relaxed">{step.description}</p>

                  <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                    {step.cta}
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </p>
                </Link>

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
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-card py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground mb-3">Tjänster</p>
            <h2 className="font-serif text-3xl font-medium text-foreground sm:text-4xl">
              Populära tjänster inom badrumsrenovering
            </h2>
            <p className="mt-3 text-muted-foreground">
              Utforska våra vanligaste tjänster. Varje sida förklarar processen, vad som ingår och vanliga frågor.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {popularServices.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="group rounded-2xl border border-border bg-card p-6 transition hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <h3 className="text-lg font-semibold text-foreground group-hover:underline underline-offset-4">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                <p className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-foreground">
                  Läs mer
                  <ArrowRight
                    className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </p>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="min-h-[56px] px-8 bg-transparent">
              <Link href="/tjanster">Se alla tjänster</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-card py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground mb-3">Priser</p>
              <h2 className="font-serif text-3xl font-medium text-foreground sm:text-4xl mb-6">
                Vad kostar en badrumsrenovering?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-10">
                Priset varierar beroende på storlek, materialval och arbetets omfattning. Här är ungefärliga intervall:
              </p>

              <div className="space-y-0 border-t border-border">
                {priceRanges.map((item) => (
                  <div key={item.type} className="flex justify-between items-center py-5 border-b border-border">
                    <div className="min-w-0">
                      <span className="text-foreground font-medium">{item.type}</span>
                      <span className="text-muted-foreground ml-2 text-sm">({item.size})</span>
                    </div>
                    <span className="font-semibold text-foreground whitespace-nowrap">{item.range}</span>
                  </div>
                ))}
              </div>

              <p className="text-sm text-muted-foreground mt-6">
                * Exempelintervall. ROT kan sänka arbetskostnaden beroende på din situation och Skatteverkets regler.
              </p>
            </div>

            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src="/images/badrumsrenovering-sundsvall-pagaende.webp"
                alt="Pågående badrumsrenovering i Sundsvall"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground py-80 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-sm uppercase tracking-[0.15em] text-primary-foreground/80 mb-3">Trygghet</p>
            <h2 className="font-serif text-3xl font-medium sm:text-4xl">Kvalitet du kan lita på</h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {trustFeatures.map((feature) => (
              <div key={feature.title} className="text-center lg:text-left">
                <feature.icon
                  className="h-8 w-8 mx-auto lg:mx-0 mb-4 text-primary-foreground/80"
                  aria-hidden="true"
                />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-primary-foreground/70 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-card py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground mb-3">Frågor & Svar</p>
            <h2 className="font-serif text-3xl font-medium text-foreground sm:text-4xl">Vanliga frågor</h2>
          </div>

          <div className="max-w-3xl mx-auto divide-y divide-border">
            {miniFaq.map((item) => (
              <div key={item.question} className="py-8">
                <h3 className="text-lg font-semibold text-foreground mb-3">{item.question}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.answer}</p>
                <p className="mt-3">
                  <Link
                    href="/faq"
                    className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:underline underline-offset-4"
                  >
                    Läs fler frågor
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
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

      <section className="bg-muted py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-start">
            <div>
              <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground mb-3">Kom igång</p>
              <h2 className="font-serif text-3xl font-medium text-foreground sm:text-4xl mb-6">
                Redo att förverkliga ditt drömbadrum?
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Fyll i formuläret så förmedlar vi din förfrågan till lokala företag i Sundsvall, Timrå, Alnö och Njurunda.
                Helt kostnadsfritt och utan förpliktelser.
              </p>

              <ul className="space-y-4">
                {[
                  "Kostnadsfri offertförfrågan",
                  "Målet är svar inom 24 timmar",
                  "Jämför flera offerter",
                  "Lokala företag",
                  "Ingen bindning eller köpkrav",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground">
                    <CheckCircle className="h-5 w-5 text-accent shrink-0" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Card className="border-0 shadow-xl bg-card">
              <CardContent className="p-8 lg:p-10">
                <h3 className="font-serif text-2xl font-medium text-foreground mb-8">Få kostnadsfri offert</h3>
                <LeadForm variant="compact" />
              </CardContent>
            </Card>
          </div>
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
