import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle, Clock, ShieldCheck, Wrench, Zap, Grid3X3, Droplets } from "lucide-react"

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
  title: "Guide: Så går en badrumsrenovering till | Steg för steg",
  description:
    "Komplett guide: så går en badrumsrenovering till steg för steg. Ordning på moment, tidsplan, kostnadsdrivare, vanliga misstag och vad du ska tänka på i Sundsvall.",
  alternates: { canonical: "/guide" },
  openGraph: {
    title: "Guide: Så går en badrumsrenovering till",
    description:
      "Steg för steg-guide till badrumsrenovering: ordning på moment, tid, kostnad, ROT och vad som är viktigt för tätskikt, VVS och el.",
    url: `${SITE_URL}/guide`,
    type: "article",
  },
  robots: { index: true, follow: true },
}

const areas = ["Sundsvall", "Timrå", "Alnö", "Njurunda"] as const

const steps = [
  {
    t: "1) Planering & behov",
    d: "Mål, budget, stil, funktion. Här bestäms badrummets layout, inredning och krav (t.ex. golvvärme, nisch, duschvägg).",
  },
  {
    t: "2) Rivning & förberedelse",
    d: "Rivning av ytskikt och inredning. Underlaget bedöms och eventuella åtgärder planeras innan uppbyggnad.",
  },
  {
    t: "3) VVS & rördragning",
    d: "Rör och avlopp dras eller justeras för dusch, WC och handfat. En kritisk fas för att undvika framtida läckage.",
  },
  {
    t: "4) El i våtrum",
    d: "Belysning, uttag, golvvärme (el) och handdukstork planeras och installeras enligt våtrumsregler och zonindelning.",
  },
  {
    t: "5) Tätskikt & våtrum",
    d: "Tätskiktet är badrummets viktigaste skydd. Utförandet ska följa branschpraxis och dokumenteras.",
  },
  {
    t: "6) Kakel & klinker",
    d: "Plattsättning, fall mot golvbrunn, fogning och silikon. Här avgörs både känsla och hållbarhet.",
  },
  {
    t: "7) Montering & slutfinish",
    d: "Montering av inredning, blandare, duschvägg, spegel och belysning. Detaljer och avslut kontrolleras.",
  },
  {
    t: "8) Kontroll & överlämning",
    d: "Genomgång, dokumentation och skötselråd. Spara offert, avtal och underlag för garanti och framtida frågor.",
  },
] as const

const costDrivers = [
  {
    title: "Storlek & planlösning",
    desc: "Små badrum kan vara mer tidskrävande per kvm. Flytt av WC/dusch påverkar ofta kostnaden.",
  },
  {
    title: "Materialval",
    desc: "Plattor, inredning, blandare, duschväggar och speciallösningar driver kostnad snabbt.",
  },
  {
    title: "Tekniska moment",
    desc: "VVS, el och tätskikt kräver fackmässigt utförande. Mer förändringar = mer tid och riskhantering.",
  },
  {
    title: "Detaljnivå",
    desc: "Nischer, mönsterläggning, stora plattor, specialfall och snickeridetaljer påverkar tidsplanen.",
  },
] as const

const checklist = [
  "Bestäm budget och mål (funktion + stil)",
  "Välj vilka produkter som ska ingå (WC, handfat, blandare, dusch, belysning)",
  "Tydliggör om något ska flyttas (avlopp, rör, el)",
  "Be om specificerad offert (arbete/material, ROT, tidsplan)",
  "Säkerställ att tätskikt, VVS och el hanteras fackmässigt",
  "Planera alternativt badrum under perioden",
  "Spara dokumentation, kvitton och eventuella intyg",
] as const

const commonMistakes = [
  {
    title: "För lite planering innan start",
    desc: "Bristande beslut kring inredning och placering leder ofta till sena ändringar som fördyrar och förlänger.",
  },
  {
    title: "Fel ordning på moment",
    desc: "Om VVS/el/tätskikt inte koordineras korrekt kan det skapa omarbete och risk för framtida problem.",
  },
  {
    title: "Otydlig offert",
    desc: "En bra offert ska vara specificerad: vad ingår, material, arbete, ROT, tidsplan, villkor.",
  },
  {
    title: "Dålig fokus på fall & detaljer",
    desc: "Fall mot golvbrunn, fog/silikon och avslut är avgörande för både funktion och slutkänsla.",
  },
] as const

const serviceLinks = [
  {
    href: "/tjanster/helrenovering-badrum",
    title: "Helrenovering av badrum",
    desc: "Nyckelfärdigt badrum från golv till tak – samordnat och tydligt.",
    icon: ShieldCheck,
  },
  {
    href: "/tjanster/tatskikt-vatrum",
    title: "Tätskikt & våtrum",
    desc: "Badrummets viktigaste skydd – rätt utförande och dokumentation.",
    icon: Droplets,
  },
  {
    href: "/tjanster/kakel-klinker",
    title: "Kakel & klinker",
    desc: "Plattsättning, fall, fog och avslut – stil och hållbarhet.",
    icon: Grid3X3,
  },
  {
    href: "/tjanster/vvs-badrum",
    title: "VVS i badrum",
    desc: "Rör, avlopp och inkoppling av sanitet – trygg funktion.",
    icon: Wrench,
  },
  {
    href: "/tjanster/el-badrum",
    title: "El i badrum",
    desc: "Belysning, uttag, golvvärme och handdukstork – säkert i våtrum.",
    icon: Zap,
  },
] as const

const faqs = [
  {
    q: "Hur lång tid tar en badrumsrenovering?",
    a: "Ofta 3–6 veckor, men det beror på omfattning, materialval och om rör/el flyttas. Torktider och detaljnivå påverkar också.",
  },
  {
    q: "I vilken ordning gör man moment i ett badrum?",
    a: "Planering → rivning → VVS → el → tätskikt → kakel/klinker → montering → kontroll/överlämning. Exakta steg kan variera, men principen är att teknik och tätskikt måste sitta innan ytskikt och finish.",
  },
  {
    q: "Vad påverkar priset mest?",
    a: "Storlek, materialval, hur mycket som flyttas (VVS/el), samt detaljnivå (nischer, mönster, stora plattor, speciallösningar).",
  },
  {
    q: "Kan jag få ROT-avdrag?",
    a: "ROT kan ofta sänka arbetskostnaden enligt Skatteverkets regler. Utförande företag hanterar normalt avdraget på fakturan om villkoren är uppfyllda.",
  },
  {
    q: "Vad ska jag kräva i en offert?",
    a: "Specificerad omfattning, material/arbete (separat om möjligt), ROT, tidsplan, betalningsvillkor, samt vad som ingår/inte ingår.",
  },
  {
    q: "Varför är tätskikt så viktigt?",
    a: "Tätskikt skyddar konstruktionen från vatten och fukt. Det är en av de viktigaste faktorerna för att undvika fuktskador i ett badrum.",
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

export default function GuidePage() {
  const faqJsonLd = buildFaqJsonLd(faqs)

  const breadcrumbsJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Start", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Guide", item: `${SITE_URL}/guide` },
    ],
  } as const

  const howToJsonLd = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "Så går en badrumsrenovering till – steg för steg",
    inLanguage: "sv-SE",
    description: metadata.description,
    step: steps.map((s, idx) => ({
      "@type": "HowToStep",
      position: idx + 1,
      name: s.t,
      text: s.d,
      url: `${SITE_URL}/guide#steg-${idx + 1}`,
    })),
  } as const

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-muted py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground">
              Guide • Sundsvall med omnejd
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              Så går en badrumsrenovering till – steg för steg
            </h1>
            <p className="mt-4 text-lg text-muted-foreground lg:text-xl">
              Ordning på moment, tidsplan, kostnadsdrivare och vanliga misstag – plus länkar till alla delar: tätskikt, kakel,
              VVS och el. För dig i {areas.join(", ")}.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="min-h-[48px]">
                <Link href="/kontakt">
                  Få offert
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="min-h-[48px] bg-transparent">
                <Link href="/tjanster">Se alla tjänster</Link>
              </Button>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              {["Trygg ordning", "Spara tid", "Undvik misstag"].map((t) => (
                <div key={t} className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-accent" aria-hidden="true" />
                  <span>{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-card py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 space-y-12">
          <div className="rounded-xl border border-border bg-card p-6 lg:p-8">
            <h2 className="text-xl font-semibold text-foreground">Stegen i rätt ordning</h2>
            <p className="mt-2 text-muted-foreground">
              Den vanligaste och mest praktiska ordningen. Exakta detaljer varierar, men logiken är alltid: teknik → tätskikt → ytskikt → finish.
            </p>

            <ol className="mt-6 grid gap-4 lg:grid-cols-2">
              {steps.map((s, idx) => (
                <li
                  key={s.t}
                  id={`steg-${idx + 1}`}
                  className="rounded-lg border border-border bg-muted p-5"
                >
                  <div className="flex items-start justify-between gap-4">
                    <p className="font-semibold text-foreground">{s.t}</p>
                    <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-4 w-4" aria-hidden="true" />
                      Steg {idx + 1}
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>

                  {/* Context links for maximal SEO */}
                  {idx === 2 && (
                    <p className="mt-3 text-sm text-muted-foreground">
                      Fördjupa dig:{" "}
                      <Link className="underline underline-offset-4 hover:text-foreground" href="/tjanster/vvs-badrum">
                        VVS i badrum
                      </Link>
                      .
                    </p>
                  )}
                  {idx === 3 && (
                    <p className="mt-3 text-sm text-muted-foreground">
                      Fördjupa dig:{" "}
                      <Link className="underline underline-offset-4 hover:text-foreground" href="/tjanster/el-badrum">
                        El i badrum
                      </Link>
                      .
                    </p>
                  )}
                  {idx === 4 && (
                    <p className="mt-3 text-sm text-muted-foreground">
                      Fördjupa dig:{" "}
                      <Link className="underline underline-offset-4 hover:text-foreground" href="/tjanster/tatskikt-vatrum">
                        Tätskikt &amp; våtrum
                      </Link>
                      .
                    </p>
                  )}
                  {idx === 5 && (
                    <p className="mt-3 text-sm text-muted-foreground">
                      Fördjupa dig:{" "}
                      <Link className="underline underline-offset-4 hover:text-foreground" href="/tjanster/kakel-klinker">
                        Kakel &amp; klinker
                      </Link>
                      .
                    </p>
                  )}
                </li>
              ))}
            </ol>
          </div>

          {/* Cost drivers */}
          <div className="rounded-xl border border-border bg-card p-6 lg:p-8">
            <h2 className="text-xl font-semibold text-foreground">Vad påverkar priset mest?</h2>
            <p className="mt-2 text-muted-foreground">
              Om du vill få en bra offert snabbt: var tydlig med storlek, materialval och om något ska flyttas.
            </p>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {costDrivers.map((c) => (
                <div key={c.title} className="rounded-lg bg-muted border border-border p-5">
                  <p className="font-semibold text-foreground">{c.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Checklist */}
          <Card className="border-border overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <CardHeader className="bg-muted p-6 lg:p-8 flex flex-col justify-center">
                <CardTitle className="text-xl lg:text-2xl">Checklista innan du startar</CardTitle>
                <p className="mt-3 text-muted-foreground">
                  Den här listan gör offerten tydligare och minskar risken för dyra ändringar under projektet.
                </p>
              </CardHeader>

              <CardContent className="p-6 lg:p-8">
                <ul className="grid gap-3">
                  {checklist.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </div>
          </Card>

          {/* Common mistakes */}
          <div className="rounded-xl border border-border bg-card p-6 lg:p-8">
            <h2 className="text-xl font-semibold text-foreground">Vanliga misstag att undvika</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {commonMistakes.map((m) => (
                <div key={m.title} className="rounded-lg bg-muted border border-border p-5">
                  <p className="font-semibold text-foreground">{m.title}</p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Service hub links */}
          <div className="rounded-xl border border-border bg-muted p-6 lg:p-8">
            <h2 className="text-xl font-semibold text-foreground">Fördjupa dig i varje delmoment</h2>
            <p className="mt-2 text-muted-foreground">
              Klicka vidare till våra tjänstesidor (djup information + vanliga frågor per område).
            </p>

            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {serviceLinks.map((s) => {
                const Icon = s.icon
                return (
                  <Link
                    key={s.href}
                    href={s.href}
                    className="group rounded-xl border border-border bg-card p-5 hover:bg-card/70 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                        <Icon className="h-5 w-5 text-primary-foreground" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="font-semibold text-foreground group-hover:underline underline-offset-4">
                          {s.title}
                        </p>
                        <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Vill du bara ha en helhetslösning? Läs mer om{" "}
              <Link className="underline underline-offset-4 hover:text-foreground" href="/tjanster/helrenovering-badrum">
                helrenovering av badrum
              </Link>
              .
            </p>
          </div>

          {/* FAQ */}
          <div className="rounded-xl border border-border bg-card p-6 lg:p-8">
            <h2 className="text-xl font-semibold text-foreground">Vanliga frågor</h2>
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

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild variant="outline" className="bg-transparent">
                <Link href="/faq">Se alla frågor</Link>
              </Button>
              <Button asChild>
                <Link href="/kontakt">
                  Få kostnadsfri offert
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-xl border border-border bg-primary p-8 text-primary-foreground text-center">
            <h2 className="text-2xl font-bold">Redo att komma igång?</h2>
            <p className="mt-2 text-primary-foreground/80 max-w-2xl mx-auto">
              Skicka in en kostnadsfri förfrågan – vi förmedlar den till lokala företag i {areas.join(", ")}.
            </p>
            <div className="mt-6">
              <Button asChild size="lg" variant="secondary" className="min-h-[48px]">
                <Link href="/kontakt">
                  Få kostnadsfri offert
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Structured data */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbsJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </div>
  )
}
