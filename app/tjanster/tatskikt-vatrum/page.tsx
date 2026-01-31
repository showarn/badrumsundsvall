import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  Droplets,
  FileCheck,
  AlertTriangle,
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

type FaqItem = {
  q: string
  a: string
}

export const metadata: Metadata = {
  title: "Tätskikt & våtrum i Sundsvall | Korrekt utfört tätskikt",
  description:
    "Tätskikt & våtrum i Sundsvall. Rätt utfört tätskikt enligt branschregler minskar risken för fuktskador och försäkringsproblem. Kostnadsfri offert.",
  alternates: { canonical: "/tjanster/tatskikt-vatrum" },
  openGraph: {
    title: "Tätskikt & våtrum i Sundsvall | Korrekt utfört tätskikt",
    description:
      "Tätskikt & våtrum i Sundsvall. Vi förmedlar förfrågan till lokala företag som arbetar enligt gällande branschregler.",
    url: `${SITE_URL}/tjanster/tatskikt-vatrum`,
    type: "website",
  },
  robots: { index: true, follow: true },
}

const areas = ["Sundsvall", "Timrå", "Alnö", "Njurunda"] as const

const included = [
  "Bedömning av våtzoner",
  "Tätskikt enligt gällande branschpraxis",
  "Hantering av genomföringar",
  "Anslutning mot golvbrunn",
  "Kontroll före plattsättning",
  "Dokumentation och kvalitetsunderlag",
] as const

const seoIntro = [
  "Tätskikt är den viktigaste delen i ett våtrum. Det är tätskiktet som skyddar konstruktionen bakom kakel, klinker eller våtrumsmatta från fukt och vatten.",
  "Ett felaktigt eller bristfälligt tätskikt är en av de vanligaste orsakerna till vattenskador i badrum. Skadorna syns ofta först efter flera år – när det redan är för sent.",
  "Därför är det avgörande att tätskikt i badrum och andra våtrum utförs korrekt, med rätt metod, rätt material och tydlig dokumentation. Nedan förklarar vi hur det fungerar, vad du ska kräva och vanliga frågor kring tätskikt & våtrum.",
] as const

const qualityPoints = [
  {
    title: "Våtzoner & riskområden",
    desc:
      "Olika delar av badrummet ställer olika krav. Duschutrymme, golv och väggar nära vatten är särskilt utsatta och kräver korrekt tätskikt.",
    icon: Droplets,
  },
  {
    title: "Branschpraxis & kontroll",
    desc:
      "Tätskikt ska utföras enligt etablerad praxis. Kritiska moment är anslutning mot golvbrunn, hörn, skarvar och genomföringar.",
    icon: ShieldCheck,
  },
  {
    title: "Dokumentation",
    desc:
      "Dokumentation visar hur arbetet utförts och vilka material som använts. Den är viktig vid framtida försäkringsärenden eller försäljning.",
    icon: FileCheck,
  },
  {
    title: "Risk vid fel",
    desc:
      "Fel i tätskikt kan leda till fuktskador, mögel och i värsta fall att försäkringen inte täcker skadan.",
    icon: AlertTriangle,
  },
] as const

const faqs: readonly FaqItem[] = [
  {
    q: "Vad är tätskikt i våtrum?",
    a: "Tätskikt är ett vattentätt skydd som monteras bakom ytskikt som kakel, klinker eller våtrumsmatta. Det förhindrar att vatten tränger in i väggar och golv.",
  },
  {
    q: "Varför är tätskikt så viktigt?",
    a: "Utan korrekt tätskikt kan fukt tränga in i konstruktionen och orsaka mögel, röta och allvarliga vattenskador. Skadorna kan bli mycket kostsamma att åtgärda.",
  },
  {
    q: "Måste man ha tätskikt i hela badrummet?",
    a: "Det beror på utformning och våtzoner. Generellt krävs tätskikt i områden som utsätts för vatten, till exempel golv och väggar i duschzon.",
  },
  {
    q: "Vad är våtzon 1 och våtzon 2?",
    a: "Våtzon 1 är ytor som utsätts för direkt vatten, till exempel duschutrymme. Våtzon 2 är övriga ytor som kan utsättas för fukt.",
  },
  {
    q: "Kan man kakla utan tätskikt?",
    a: "Nej. Kakel och klinker är inte vattentäta i sig. Utan tätskikt riskerar vatten att tränga igenom fogar och orsaka skador.",
  },
  {
    q: "Hur vet jag om tätskiktet är korrekt utfört?",
    a: "Be om dokumentation, foton från arbetets olika steg och tydlig beskrivning i offerten. Seriösa utförare redovisar metod och material.",
  },
  {
    q: "Vad händer om tätskiktet är fel?",
    a: "Felaktigt tätskikt kan leda till fuktskador som ofta upptäcks sent. Det kan även påverka försäkringsersättning negativt.",
  },
  {
    q: "Behöver man byta tätskikt vid badrumsrenovering?",
    a: "Ja, vid helrenovering av badrum ska tätskiktet normalt göras om. Gamla tätskikt uppfyller ofta inte dagens krav.",
  },
  {
    q: "Ingår tätskikt i en badrumsrenovering?",
    a: "I en korrekt utförd renovering ska tätskikt alltid ingå. Det ska dock framgå tydligt i offerten.",
  },
  {
    q: "Hur påverkar tätskikt försäkringen?",
    a: "Försäkringsbolag kan kräva att tätskikt är korrekt utfört. Bristande utförande kan leda till nedsatt eller utebliven ersättning vid vattenskada.",
  },
  {
    q: "Hur lång hållbarhet har ett tätskikt?",
    a: "Ett korrekt utfört tätskikt är tänkt att hålla lika länge som badrummet, ofta 20–30 år, beroende på användning och utförande.",
  },
  {
    q: "Vad ska stå i offerten kring tätskikt?",
    a: "Metod, material, vilka ytor som omfattas, hur genomföringar hanteras samt hur kontroll och dokumentation sker.",
  },
  {
    q: "Kan jag själv kontrollera tätskiktet?",
    a: "Tätskikt ligger dolt bakom ytskikt, så kontroll sker främst genom dokumentation och förtroende för utföraren.",
  },
  {
    q: "Är våtrumsmatta ett tätskikt?",
    a: "Våtrumsmatta fungerar både som ytskikt och tätskikt, men måste monteras korrekt enligt anvisningar.",
  },
  {
    q: "När bör tätskikt bytas även utan renovering?",
    a: "Vid tecken på fuktskada, läckage, dålig lukt eller om badrummet är mycket gammalt kan åtgärd behövas.",
  },
] as const

function buildFaqJsonLd(items: readonly FaqItem[]) {
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
    name: "Tätskikt & våtrum i Sundsvall",
    serviceType: "Waterproofing service",
    areaServed: areas.map((name) => ({ "@type": "City", name })),
    provider: {
      "@type": "Organization",
      name: "Badrum Sundsvall",
      url: SITE_URL,
    },
    url: `${SITE_URL}/tjanster/tatskikt-vatrum`,
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
            Tätskikt & våtrum
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Korrekt utfört tätskikt är grunden för ett hållbart och tryggt badrum. Vi förmedlar din förfrågan till lokala
            företag i {areas.join(", ")}. Vill du förstå hela renoveringsordningen? Läs{" "}
            <Link href="/guide" className="underline underline-offset-4 hover:text-foreground">
              vår guide steg för steg
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
              href="/tjanster/kakel-klinker"
              className="rounded-full border border-border bg-card px-4 py-2 text-foreground hover:bg-card/70 transition-colors"
            >
              Kakel &amp; klinker
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
            <h2 className="text-xl font-semibold">Tätskikt i våtrum – därför är det avgörande</h2>
            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              {seoIntro.map((p, idx) => (
                <p key={p}>
                  {p}
                  {idx === 0 && (
                    <>
                      {" "}
                      Tätskiktet måste alltid samordnas med{" "}
                      <Link
                        href="/tjanster/vvs-badrum"
                        className="underline underline-offset-4 hover:text-foreground"
                      >
                        VVS i badrum
                      </Link>{" "}
                      (genomföringar och rör) och med ytskikt som{" "}
                      <Link
                        href="/tjanster/kakel-klinker"
                        className="underline underline-offset-4 hover:text-foreground"
                      >
                        kakel &amp; klinker
                      </Link>
                      .
                    </>
                  )}
                  {idx === 2 && (
                    <>
                      {" "}
                      Om du planerar en hel renovering kan du även läsa{" "}
                      <Link
                        href="/tjanster/helrenovering-badrum"
                        className="underline underline-offset-4 hover:text-foreground"
                      >
                        helrenovering av badrum
                      </Link>{" "}
                      för helhetsbild och vanliga moment.
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
                  Vanliga moment vid tätskikt &amp; våtrumsarbete. Exakt omfattning bekräftas i offert.
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
            <h2 className="text-xl font-semibold">Kvalitet & kontroll</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {qualityPoints.map((q) => (
                <div key={q.title} className="rounded-lg bg-muted border border-border p-5">
                  <q.icon className="h-8 w-8" aria-hidden="true" />
                  <h3 className="mt-3 font-semibold text-foreground">{q.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{q.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related services (topic cluster) */}
          <div className="rounded-xl border border-border bg-muted p-6 lg:p-8">
            <h2 className="text-xl font-semibold text-foreground">Relaterade tjänster</h2>
            <p className="mt-2 text-muted-foreground">
              Tätskikt påverkas av flera moment. Här är andra tjänster som ofta hänger ihop med tätskikt &amp; våtrum.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  href: "/tjanster/helrenovering-badrum",
                  title: "Helrenovering av badrum",
                  desc: "Nyckelfärdigt badrum – samordning av tätskikt, VVS, ytskikt, el och finish.",
                },
                {
                  href: "/tjanster/kakel-klinker",
                  title: "Kakel & klinker",
                  desc: "Ytskikt som kräver korrekt underlag och kontrollerat tätskikt innan plattsättning.",
                },
                {
                  href: "/tjanster/vvs-badrum",
                  title: "VVS i badrum",
                  desc: "Genomföringar och anslutningar måste hanteras korrekt för att undvika läckage.",
                },
                {
                  href: "/tjanster/el-badrum",
                  title: "El i badrum",
                  desc: "Planering av placering och zoner påverkar helheten i våtutrymmet.",
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
            <h2 className="text-xl font-semibold">Vanliga frågor om tätskikt & våtrum</h2>
            <div className="mt-6">
              <Accordion type="single" collapsible className="space-y-4">
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
          </div>

          <div className="rounded-xl bg-primary p-8 text-center text-primary-foreground">
            <h2 className="text-2xl font-bold">Vill du säkerställa rätt tätskikt?</h2>
            <p className="mt-2 text-primary-foreground/80">
              Skicka in en kostnadsfri förfrågan – vi matchar dig med lokala företag med erfarenhet av våtrum. Läs gärna{" "}
              <Link
                href="/guide"
                className="underline underline-offset-4 hover:text-primary-foreground"
              >
                guiden steg för steg
              </Link>{" "}
              om du vill ha helhetsbild först.
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
