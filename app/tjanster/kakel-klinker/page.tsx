import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  Grid3X3,
  Droplets,
  Ruler,
  Paintbrush,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const SITE_URL = "https://badrum-sundsvall.se"

export const metadata: Metadata = {
  title: "Kakel & klinker i badrum i Sundsvall | Plattsättning",
  description:
    "Kakel & klinker i badrum i Sundsvall. Vi förmedlar förfrågan till lokala plattsättare för snygga, hållbara och korrekt utförda badrum.",
  alternates: { canonical: "/tjanster/kakel-klinker" },
  openGraph: {
    title: "Kakel & klinker i badrum i Sundsvall",
    description:
      "Professionell plattsättning av kakel och klinker i badrum. Kostnadsfri offert – lokala hantverkare.",
    url: `${SITE_URL}/tjanster/kakel-klinker`,
    type: "website",
  },
  robots: { index: true, follow: true },
}

const areas = ["Sundsvall", "Timrå", "Alnö", "Njurunda"] as const

const included = [
  "Vägg- och golvplattor",
  "Mönsterläggning",
  "Golvvärme under klinker",
  "Fogning och silikon",
  "Hörnlister och avslut",
  "Noggrann plattsättning",
] as const

const introText = [
  "Kakel och klinker är det som sätter både stilen och känslan i badrummet. Rätt val av plattor, mönster och fog kan göra stor skillnad – både visuellt och funktionellt.",
  "Utöver utseendet är korrekt utförd plattsättning avgörande för hållbarhet och livslängd. Felaktigt lagda plattor kan leda till sprickor, fuktproblem och onödiga kostnader.",
  "Här går vi igenom vad som är viktigt att tänka på kring kakel och klinker i badrum, vad som ingår i arbetet och vanliga frågor inför renovering.",
] as const

const focusAreas = [
  {
    title: "Materialval",
    desc:
      "Val av kakel och klinker påverkar både utseende, halksäkerhet och underhåll. Olika plattor passar olika delar av badrummet.",
    icon: Grid3X3,
  },
  {
    title: "Plattstorlek & mönster",
    desc:
      "Stora plattor ger ett lugnt uttryck, medan mindre plattor kan passa i duschzoner. Mönsterläggning kräver extra precision.",
    icon: Ruler,
  },
  {
    title: "Fog & silikon",
    desc:
      "Rätt fogbredd och silikon i hörn och övergångar är viktigt för både funktion och estetik.",
    icon: Paintbrush,
  },
  {
    title: "Halkskydd",
    desc:
      "Golvet i badrum utsätts för vatten. Klinker med rätt halkklass minskar risken för olyckor.",
    icon: Droplets,
  },
] as const

const faqs = [
  {
    q: "Vad är skillnaden mellan kakel och klinker?",
    a: "Kakel används främst på väggar och är inte lika tåligt mot slitage. Klinker är hårdare och används oftast på golv, men kan även sättas på vägg.",
  },
  {
    q: "Kan man ha kakel på golvet i badrum?",
    a: "Nej, kakel är inte anpassat för golv i våtrum. Golv ska normalt ha klinker som tål fukt och belastning.",
  },
  {
    q: "Vilken plattstorlek är bäst i badrum?",
    a: "Stora plattor ger färre fogar och ett lugnt intryck, medan mindre plattor passar bra i duschytor och runt golvbrunnar.",
  },
  {
    q: "Är halkskydd viktigt?",
    a: "Ja. Golv i badrum ska ha tillräckligt halkmotstånd, särskilt i duschzoner där det ofta är blött.",
  },
  {
    q: "Hur väljer man rätt fogfärg?",
    a: "Fogfärgen påverkar helhetsintrycket. Ljus fog ger ett enhetligt utseende, mörk fog markerar plattorna mer.",
  },
  {
    q: "Kan man lägga golvvärme under klinker?",
    a: "Ja, klinker är mycket lämpligt tillsammans med golvvärme och ger en behaglig temperatur i badrummet.",
  },
  {
    q: "Hur lång tid tar plattsättning i badrum?",
    a: "Tidsåtgången beror på yta, plattstorlek och mönster. Vanligtvis tar plattsättning flera dagar inklusive torktider.",
  },
  {
    q: "Vad händer om plattorna sätts fel?",
    a: "Felaktig plattsättning kan leda till sprickor, ojämna ytor och i värsta fall fuktskador.",
  },
  {
    q: "Ingår kakel och klinker i offerten?",
    a: "Det varierar. I vissa fall ingår material, i andra specificeras det separat. Kontrollera alltid offerten noggrant.",
  },
  {
    q: "Hur länge håller kakel och klinker i badrum?",
    a: "Med korrekt utförande och underhåll kan kakel och klinker hålla i flera decennier.",
  },
] as const

function buildFaqJsonLd(items: readonly { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  } as const
}

export default function Page() {
  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Kakel & klinker i badrum i Sundsvall",
    serviceType: "Tiling service",
    areaServed: areas.map((a) => ({ "@type": "City", name: a })),
    provider: {
      "@type": "Organization",
      name: "Badrumsrenovering Sundsvall",
      url: SITE_URL,
    },
    url: `${SITE_URL}/tjanster/kakel-klinker`,
    description: metadata.description,
  } as const

  const faqJsonLd = buildFaqJsonLd(faqs)

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-muted py-12 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground">
            Sundsvall med omnejd
          </p>
          <h1 className="mt-3 text-3xl font-bold sm:text-4xl lg:text-5xl">
            Kakel &amp; klinker i badrum
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Snygg och hållbar plattsättning av kakel och klinker i badrum. Vi förmedlar din förfrågan till lokala företag
            i {areas.join(", ")}. För helhetsbild kring momentordning och vad som påverkar pris/tid:{" "}
            <Link href="/guide" className="underline underline-offset-4 hover:text-foreground">
              läs vår guide steg för steg
            </Link>
            .
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg">
              <Link href="/kontakt">
                Få offert
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="bg-transparent">
              <Link href="/tjanster">Tillbaka till tjänster</Link>
            </Button>
          </div>

          {/* Quick internal links (SEO + UX) */}
          <div className="mt-8 flex flex-wrap gap-3 text-sm">
            <Link
              href="/guide"
              className="rounded-full border border-border bg-card px-4 py-2 text-foreground hover:bg-card/70 transition-colors"
            >
              Guide: Badrumsrenovering steg för steg
            </Link>
            <Link
              href="/tjanster/helrenovering-badrum"
              className="rounded-full border border-border bg-card px-4 py-2 text-foreground hover:bg-card/70 transition-colors"
            >
              Helrenovering av badrum
            </Link>
            <Link
              href="/tjanster/tatskikt-vatrum"
              className="rounded-full border border-border bg-card px-4 py-2 text-foreground hover:bg-card/70 transition-colors"
            >
              Tätskikt &amp; våtrum
            </Link>
            <Link
              href="/tjanster/vvs-badrum"
              className="rounded-full border border-border bg-card px-4 py-2 text-foreground hover:bg-card/70 transition-colors"
            >
              VVS i badrum
            </Link>
            <Link
              href="/tjanster/el-badrum"
              className="rounded-full border border-border bg-card px-4 py-2 text-foreground hover:bg-card/70 transition-colors"
            >
              El i badrum
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-card py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 space-y-12">
          <div className="rounded-xl border border-border bg-card p-6 lg:p-8">
            <h2 className="text-xl font-semibold">Kakel &amp; klinker – mer än bara utseende</h2>
            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              {introText.map((p, idx) => (
                <p key={p}>
                  {p}
                  {idx === 1 && (
                    <>
                      {" "}
                      För bästa resultat ska plattsättning alltid ske på korrekt underlag och efter att{" "}
                      <Link
                        href="/tjanster/tatskikt-vatrum"
                        className="underline underline-offset-4 hover:text-foreground"
                      >
                        tätskikt &amp; våtrum
                      </Link>{" "}
                      är kontrollerat. Planera även tidigt för{" "}
                      <Link
                        href="/tjanster/vvs-badrum"
                        className="underline underline-offset-4 hover:text-foreground"
                      >
                        VVS i badrum
                      </Link>{" "}
                      (genomföringar) och{" "}
                      <Link
                        href="/tjanster/el-badrum"
                        className="underline underline-offset-4 hover:text-foreground"
                      >
                        el i badrum
                      </Link>{" "}
                      (zoner/belysning) så allt hamnar rätt.
                    </>
                  )}
                </p>
              ))}
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button asChild variant="outline" className="bg-transparent">
                <Link href="/guide">Läs guiden</Link>
              </Button>
              <Button asChild>
                <Link href="/kontakt">
                  Få kostnadsfri offert
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>

          <Card className="border-border overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <CardHeader className="bg-muted p-6 lg:p-8">
                <CardTitle>Detta ingår</CardTitle>
                <p className="mt-3 text-muted-foreground">
                  Vanliga moment vid kakel- och klinkerarbeten. Exakt omfattning framgår i offert.
                </p>
              </CardHeader>
              <CardContent className="p-6 lg:p-8">
                <ul className="grid gap-3 sm:grid-cols-2">
                  {included.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5" aria-hidden="true" />
                      <span className="text-sm text-foreground">{i}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </div>
          </Card>

          <div className="rounded-xl border border-border bg-card p-6 lg:p-8">
            <h2 className="text-xl font-semibold">Viktiga val vid plattsättning</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {focusAreas.map((f) => (
                <div key={f.title} className="rounded-lg bg-muted border border-border p-5">
                  <f.icon className="h-8 w-8" aria-hidden="true" />
                  <h3 className="mt-3 font-semibold text-foreground">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related services (topic cluster) */}
          <div className="rounded-xl border border-border bg-muted p-6 lg:p-8">
            <h2 className="text-xl font-semibold text-foreground">Relaterade tjänster</h2>
            <p className="mt-2 text-muted-foreground">
              Plattsättning hänger ihop med tätskikt, genomföringar och planering. Här är relaterade tjänster som ofta
              ingår i samma projekt.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  href: "/tjanster/helrenovering-badrum",
                  title: "Helrenovering av badrum",
                  desc: "Nyckelfärdigt badrum – samordning av tätskikt, VVS, ytskikt, el och finish.",
                },
                {
                  href: "/tjanster/tatskikt-vatrum",
                  title: "Tätskikt & våtrum",
                  desc: "Grunden bakom plattorna – kritiskt för kvalitet, hållbarhet och försäkring.",
                },
                {
                  href: "/tjanster/vvs-badrum",
                  title: "VVS i badrum",
                  desc: "Rör och genomföringar ska sitta rätt innan plattsättning – annars blir det dyrt att ändra.",
                },
                {
                  href: "/tjanster/el-badrum",
                  title: "El i badrum",
                  desc: "Planering av zoner och placering påverkar val av inredning, belysning och helhetslayout.",
                },
                {
                  href: "/guide",
                  title: "Guide: Badrumsrenovering steg för steg",
                  desc: "Se ordningen på momenten och vad som påverkar tid, pris och kvalitet.",
                },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="rounded-xl border border-border bg-card p-5 hover:bg-card/70 transition-colors"
                >
                  <p className="font-semibold text-foreground underline-offset-4 hover:underline">
                    {l.title}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                    {l.desc}
                  </p>
                </Link>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 lg:p-8">
            <h2 className="text-xl font-semibold">Vanliga frågor om kakel &amp; klinker</h2>
            <Accordion type="single" collapsible className="mt-6 space-y-4">
              {faqs.map((f) => (
                <AccordionItem key={f.q} value={f.q} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold py-5">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-muted-foreground leading-relaxed">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="rounded-xl bg-primary p-8 text-center text-primary-foreground">
            <h2 className="text-2xl font-bold">Redo att sätta stilen i badrummet?</h2>
            <p className="mt-2 text-primary-foreground/80">
              Skicka in en kostnadsfri förfrågan – vi matchar dig med lokala plattsättare. Vill du först få helhetsbild?{" "}
              <Link
                href="/guide"
                className="underline underline-offset-4 hover:text-primary-foreground"
              >
                Läs guiden
              </Link>
              .
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/kontakt">
                  Få kostnadsfri offert
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link href="/guide">Läs guiden</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </div>
  )
}
