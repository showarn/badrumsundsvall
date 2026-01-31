// src/app/tjanster/helrenovering-badrum/page.tsx
import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle, ShieldCheck, Timer, Wrench } from "lucide-react"

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
  title: "Helrenovering av badrum i Sundsvall | Kostnadsfri offert",
  description:
    "Helrenovering av badrum i Sundsvall. Vi förmedlar din förfrågan till lokala, kontrollerade hantverkare. Kostnadsfri offert – mål om svar inom 24h.",
  alternates: { canonical: "/tjanster/helrenovering-badrum" },
  openGraph: {
    title: "Helrenovering av badrum i Sundsvall | Kostnadsfri offert",
    description:
      "Helrenovering av badrum i Sundsvall. Vi förmedlar din förfrågan till lokala, kontrollerade hantverkare. Kostnadsfri offert – mål om svar inom 24h.",
    url: `${SITE_URL}/tjanster/helrenovering-badrum`,
    type: "website",
  },
  robots: { index: true, follow: true },
}

const areas = ["Sundsvall", "Timrå", "Alnö", "Njurunda"] as const

const included = [
  "Rivning och bortforsling",
  "Underarbete och fallspackling vid behov",
  "Tätskikt enligt gällande branschpraxis",
  "Kakel, klinker eller våtrumsmatta (enligt val)",
  "VVS- och elarbeten via behöriga",
  "Montering av inredning och detaljer",
] as const

const steps = [
  { t: "1) Beskriv projektet", d: "Fyll i formuläret med storlek, stil och önskemål." },
  { t: "2) Vi förmedlar", d: "Din förfrågan skickas till lokala företag som kan vara intresserade." },
  { t: "3) Du väljer", d: "Du jämför upplägg och väljer själv om du vill gå vidare." },
] as const

const priceRanges = [
  { label: "Litet badrum", meta: "under 5 kvm", range: "80 000 – 150 000 kr" },
  { label: "Mellan badrum", meta: "5–10 kvm", range: "150 000 – 250 000 kr" },
  { label: "Stort badrum", meta: "över 10 kvm", range: "250 000 – 400 000 kr" },
] as const

const priceDrivers = [
  "Storlek (kvm) och planlösning",
  "Materialval (kakel/klinker, inredning, blandare)",
  "Flytt av avlopp/golvbrunn och omdragning av rör",
  "Elomfattning (spotlights, golvvärme, ny eldragning)",
  "Underarbete (ojämna golv/väggar, fuktskador, förstärkningar)",
  "Leverans- och montagekomplexitet (nischer, speciallösningar)",
] as const

const qualityChecklist = [
  {
    title: "Tätskikt och detaljer",
    desc:
      "Tätskikt, anslutningar vid brunn och genomföringar är det viktigaste i ett badrum. Be alltid om tydligt upplägg för tätskiktssystem och hur kritiska detaljer hanteras.",
    icon: ShieldCheck,
  },
  {
    title: "Behörigheter för el och VVS",
    desc:
      "El och VVS ska göras av behöriga. Säkerställ vem som ansvarar för respektive del och att det framgår i offerten.",
    icon: Wrench,
  },
  {
    title: "Tidsplan och leveranser",
    desc:
      "Tidsplan påverkas av materialleveranser och moment som behöver torka/härda. En seriös offert beskriver etapper och vad som kan påverka tiden.",
    icon: Timer,
  },
] as const

const seoIntro = [
  "En helrenovering av badrum handlar inte bara om ytskikt och inredning – det är framför allt ett fuktsäkert byggprojekt där underarbete, tätskikt, fall mot golvbrunn och korrekt utförda installationer avgör hållbarheten över tid.",
  "För att få ett tryggt resultat behöver offerten vara tydlig: vad som ingår, vilken metod som används, vilka behörigheter som krävs för el och VVS, samt hur dokumentation och slutkontroll hanteras. Det minskar risken för missförstånd och oväntade tillägg.",
  "Nedan beskriver vi processen, prisbild, ROT i praktiken, kvalitetschecklista och vanliga frågor – allt för att du ska kunna fatta ett tryggt beslut inför din badrumsrenovering i Sundsvall med omnejd.",
] as const

const faqs: readonly FaqItem[] = [
  {
    q: "Vad innebär en helrenovering av badrum?",
    a: "En helrenovering innebär att badrummet byggs om från grunden. Ofta ingår rivning, underarbete, tätskikt, ytskikt (t.ex. kakel/klinker), el och VVS samt montering av ny inredning. Exakt omfattning ska framgå i offerten.",
  },
  {
    q: "Vad kostar en helrenovering av badrum i Sundsvall?",
    a: "Priset beror på storlek, materialval och omfattning. Som riktmärke ligger många helrenoveringar ungefär inom intervallen 80 000–400 000 kr beroende på kvm och val. En offert är alltid mer exakt än generella riktpriser.",
  },
  {
    q: "Vad påverkar priset mest?",
    a: "De största kostnadsdrivarna är badrummets storlek, materialval, om du flyttar brunn/avlopp, hur mycket el som ska göras (t.ex. golvvärme/spotlights), samt underarbete som krävs (t.ex. ojämna ytor eller tidigare fuktskador).",
  },
  {
    q: "Ingår rivning och bortforsling?",
    a: "Ofta ja, men det ska alltid stå tydligt i offerten. Fråga även om bortforsling av rivningsmaterial och eventuella deponiavgifter ingår eller debiteras separat.",
  },
  {
    q: "Ingår tätskikt i en helrenovering?",
    a: "Ja, tätskikt är en kärndel av renoveringen. Offerten bör specificera metod/system, kritiska detaljer (t.ex. golvbrunn/anslutningar) och hur arbetet kontrolleras och dokumenteras.",
  },
  {
    q: "Behöver golvbrunn bytas vid renovering?",
    a: "Det beror på skick, typ och förutsättningar. Vid helrenovering är det vanligt att kontrollera brunnens status och ofta byta om den är äldre eller om den inte passar med aktuell lösning. Detta avgörs i dialog och offert.",
  },
  {
    q: "Hur lång tid tar en helrenovering av badrum?",
    a: "En vanlig helrenovering tar ofta 3–6 veckor. Tidsplanen påverkas av torktider, materialleveranser, omfattning och om oväntade saker upptäcks när man river.",
  },
  {
    q: "Kan man bo kvar under renoveringen?",
    a: "Ofta går det att bo kvar, men badrummet är vanligtvis helt eller delvis obrukbart under stora delar av tiden. Många löser detta med alternativ dusch/toalett, tillfälliga lösningar eller boende hos familj/vänner.",
  },
  {
    q: "Hur fungerar ROT-avdrag för badrumsrenovering?",
    a: "ROT gäller normalt för arbetskostnaden (inte material). Utförande företag hanterar vanligtvis avdraget på fakturan om du uppfyller villkoren. Hur mycket du kan få beror på din situation och ditt kvarvarande ROT-utrymme.",
  },
  {
    q: "Vad ska en bra offert innehålla?",
    a: "En bra offert beskriver omfattning, material/produkter, arbetsmoment, tidsplan, betalningsvillkor, ROT-upplägg (om relevant), samt vad som gäller för ändringar och tillägg. Den bör också tydliggöra vem som ansvarar för el och VVS.",
  },
  {
    q: "Hur hanteras ändringar och tillägg (ÄTA)?",
    a: "Det bör finnas en tydlig rutin: ändringar ska godkännas skriftligt innan de utförs, med pris och tidskonsekvens. Det minskar risken för obehagliga överraskningar.",
  },
  {
    q: "Vad händer om man hittar fuktskador när man river?",
    a: "Det kan kräva extra underarbete, torkning eller åtgärder innan tätskikt och ytskikt kan byggas upp igen. Detta påverkar ofta tid och pris. En seriös aktör informerar tidigt och föreslår åtgärd samt uppdaterad kostnadsbild.",
  },
  {
    q: "Kan jag flytta dusch/WC/handfat?",
    a: "Ofta ja, men det påverkar VVS, avlopp, fall, och ibland el och ventilation. Det kan även påverka kostnad och tidsplan. Ta upp detta redan i första beskrivningen för att få rätt offert.",
  },
  {
    q: "Kan man göra golvvärme i badrum?",
    a: "Ja, golvvärme är vanligt. Offerten bör beskriva typ, styrning/termostat och hur det påverkar uppbyggnadshöjd.",
  },
  {
    q: "Kakel/klinker eller våtrumsmatta – vad ska jag välja?",
    a: "Kakel/klinker är vanligt för uttryck och hållbarhet, medan våtrumsmatta kan vara prisvärt. Valet beror på budget, stil och underlag.",
  },
  {
    q: "Vad är viktigt med fall mot golvbrunn?",
    a: "Rätt fall är avgörande för att vatten ska rinna mot brunnen. Fråga hur fall kontrolleras och vilka toleranser man arbetar efter.",
  },
  {
    q: "Behöver man göra något med ventilationen?",
    a: "Ventilationen är viktig för fukthantering. Vid renovering kan det vara läge att kontrollera funktion och flöden, särskilt om badrummet byggs om.",
  },
  {
    q: "Vilka områden täcker ni?",
    a: "Vi förmedlar förfrågningar i Sundsvall med omnejd, exempelvis Timrå, Alnö och Njurunda. Skicka in en förfrågan så matchar vi mot passande företag utifrån ditt projekt.",
  },
  {
    q: "Hur fungerar er tjänst – är det bindande?",
    a: "Du skickar in en förfrågan. Vi förmedlar den till lokala företag som kan vara intresserade. Företagen kontaktar dig och du väljer själv om du vill gå vidare. Tjänsten är kostnadsfri och utan köpkrav.",
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
    name: "Helrenovering av badrum i Sundsvall",
    serviceType: "Bathroom renovation",
    areaServed: areas.map((name) => ({ "@type": "City", name })),
    provider: {
      "@type": "Organization",
      name: "Badrumsrenovering Sundsvall",
      url: SITE_URL,
    },
    url: `${SITE_URL}/tjanster/helrenovering-badrum`,
    description: metadata.description,
  } as const

  const faqJsonLd = buildFaqJsonLd(faqs)

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-muted py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground">
              Sundsvall med omnejd
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              Helrenovering av badrum
            </h1>
            <p className="mt-4 text-lg text-muted-foreground lg:text-xl">
              Nyckelfärdigt badrum från golv till tak. Vi förmedlar din förfrågan till lokala, kontrollerade hantverkare i{" "}
              {areas.join(", ")}. Kostnadsfritt och utan bindning. För process, momentordning och vanliga misstag:{" "}
              <Link href="/guide" className="underline underline-offset-4 hover:text-foreground">
                läs vår guide steg för steg
              </Link>
              .
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="min-h-[48px]">
                <Link href="/kontakt">
                  Få offert
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>

              <Button asChild variant="outline" size="lg" className="min-h-[48px] bg-transparent">
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
                href="/tjanster/tatskikt-vatrum"
                className="rounded-full border border-border bg-card px-4 py-2 text-foreground hover:bg-card/70 transition-colors"
              >
                Tätskikt &amp; våtrum
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
        </div>
      </section>

      {/* Content */}
      <section className="bg-card py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 space-y-12">
          {/* SEO intro / topic completeness */}
          <div className="rounded-xl border border-border bg-card p-6 lg:p-8">
            <h2 className="text-xl font-semibold text-foreground">Helrenovering av badrum – tryggt, snyggt och hållbart</h2>
            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              {seoIntro.map((p, idx) => (
                <p key={p}>
                  {p}
                  {idx === 0 && (
                    <>
                      {" "}
                      Hela projektet hänger ihop: korrekt{" "}
                      <Link
                        href="/tjanster/tatskikt-vatrum"
                        className="underline underline-offset-4 hover:text-foreground"
                      >
                        tätskikt &amp; våtrum
                      </Link>{" "}
                      är grunden, val av{" "}
                      <Link
                        href="/tjanster/kakel-klinker"
                        className="underline underline-offset-4 hover:text-foreground"
                      >
                        kakel &amp; klinker
                      </Link>{" "}
                      påverkar både uttryck och praktisk funktion, och både{" "}
                      <Link
                        href="/tjanster/vvs-badrum"
                        className="underline underline-offset-4 hover:text-foreground"
                      >
                        VVS i badrum
                      </Link>{" "}
                      och{" "}
                      <Link
                        href="/tjanster/el-badrum"
                        className="underline underline-offset-4 hover:text-foreground"
                      >
                        el i badrum
                      </Link>{" "}
                      behöver planeras tidigt så allt hamnar rätt.
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

          {/* Detta ingår */}
          <Card className="border-border overflow-hidden">
            <div className="grid lg:grid-cols-2">
              <CardHeader className="bg-muted p-6 lg:p-8 flex flex-col justify-center">
                <CardTitle className="text-xl lg:text-2xl">Detta ingår</CardTitle>
                <p className="mt-3 text-muted-foreground">
                  Vanliga moment i en helrenovering. Exakt omfattning bekräftas i offert och avtal med utförande företag.
                </p>
              </CardHeader>

              <CardContent className="p-6 lg:p-8">
                <ul className="grid gap-3 sm:grid-cols-2">
                  {included.map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent shrink-0 mt-0.5" aria-hidden="true" />
                      <span className="text-sm text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </div>
          </Card>

          {/* Process */}
          <div className="rounded-xl border border-border bg-muted p-6 lg:p-8">
            <h2 className="text-xl font-semibold text-foreground">Så går det till</h2>
            <ol className="mt-4 grid gap-4 sm:grid-cols-3">
              {steps.map((s) => (
                <li key={s.t} className="rounded-lg bg-card border border-border p-5">
                  <p className="font-medium text-foreground">{s.t}</p>
                  <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>

          {/* Pris & ROT */}
          <div className="rounded-xl border border-border bg-card p-6 lg:p-8">
            <h2 className="text-xl font-semibold text-foreground">Pris & ROT – vad påverkar kostnaden?</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Priset på en helrenovering varierar med storlek, material och om du gör större ändringar i VVS/el. Här är
              ungefärliga intervall och de vanligaste sakerna som påverkar totalen.
            </p>

            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <div className="rounded-lg border border-border bg-muted p-5">
                <h3 className="font-semibold text-foreground">Riktpris (exempelintervall)</h3>
                <div className="mt-4 space-y-0 border-t border-border">
                  {priceRanges.map((p) => (
                    <div key={p.label} className="flex items-center justify-between py-4 border-b border-border">
                      <div className="min-w-0">
                        <p className="font-medium text-foreground">{p.label}</p>
                        <p className="text-sm text-muted-foreground">{p.meta}</p>
                      </div>
                      <p className="font-semibold text-foreground whitespace-nowrap">{p.range}</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-sm text-muted-foreground">
                  * Intervall är vägledande. En offert ger den mest träffsäkra prisbilden utifrån ditt badrum och dina val.
                </p>
              </div>

              <div className="rounded-lg border border-border bg-muted p-5">
                <h3 className="font-semibold text-foreground">Vanliga prisdrivare</h3>
                <ul className="mt-4 space-y-3">
                  {priceDrivers.map((x) => (
                    <li key={x} className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5" aria-hidden="true" />
                      <p className="text-sm text-foreground">{x}</p>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-lg bg-card border border-border p-4">
                  <p className="font-medium text-foreground">ROT i praktiken</p>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                    ROT kan ofta minska arbetskostnaden om du uppfyller villkoren. Avdraget beror på hur stor del av offerten
                    som är arbete och hur mycket ROT-utrymme du har kvar. Utförande företag brukar hantera avdraget direkt på
                    fakturan när allt är korrekt.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Regler & kvalitet */}
          <div className="rounded-xl border border-border bg-card p-6 lg:p-8">
            <h2 className="text-xl font-semibold text-foreground">Regler, kvalitet & kontroll</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Ett badrum ska vara fuktsäkert och korrekt utfört. Det viktigaste är att tätskikt och kritiska detaljer blir
              rätt, att el och VVS utförs av behöriga, och att offerten tydligt beskriver omfattning och kontroller.
            </p>

            <div className="mt-8 grid gap-6 lg:grid-cols-3">
              {qualityChecklist.map((x) => (
                <div key={x.title} className="rounded-lg border border-border bg-muted p-5">
                  <x.icon className="h-8 w-8 text-foreground/70" aria-hidden="true" />
                  <h3 className="mt-3 font-semibold text-foreground">{x.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{x.desc}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-lg border border-border bg-muted p-5">
              <h3 className="font-semibold text-foreground">Snabb checklista innan du tackar ja</h3>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  "Står rivning/bortforsling tydligt i offerten?",
                  "Är tätskiktssystem och brunnsanslutning beskrivet?",
                  "Vem gör el och VVS – framgår det tydligt?",
                  "Finns tidsplan med etapper och beroenden?",
                  "Hur hanteras ändringar/tillägg (skriftligt)?",
                  "Vilken dokumentation får du efteråt?",
                ].map((c) => (
                  <li key={c} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-0.5" aria-hidden="true" />
                    <span className="text-sm text-foreground">{c}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Related services (topic cluster) */}
          <div className="rounded-xl border border-border bg-muted p-6 lg:p-8">
            <h2 className="text-xl font-semibold text-foreground">Relaterade tjänster</h2>
            <p className="mt-2 text-muted-foreground">
              En helrenovering består av flera moment. Här är relaterade tjänster som ofta ingår i samma projekt.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  href: "/tjanster/tatskikt-vatrum",
                  title: "Tätskikt & våtrum",
                  desc: "Grunden i ett badrum – kritiskt för kvalitet, livslängd och försäkring.",
                },
                {
                  href: "/tjanster/kakel-klinker",
                  title: "Kakel & klinker",
                  desc: "Plattsättning som sätter stilen och påverkar underhåll och halksäkerhet.",
                },
                {
                  href: "/tjanster/vvs-badrum",
                  title: "VVS i badrum",
                  desc: "Rör, avlopp och genomföringar behöver planeras rätt från start.",
                },
                {
                  href: "/tjanster/el-badrum",
                  title: "El i badrum",
                  desc: "Zoner, belysning, golvvärme och uttag – säkert utfört av behöriga.",
                },
                {
                  href: "/guide",
                  title: "Guide: Badrumsrenovering steg för steg",
                  desc: "Se momentordningen och vad som påverkar tid, pris och kvalitet.",
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

          {/* FAQ (Accordion) */}
          <div className="rounded-xl border border-border bg-card p-6 lg:p-8">
            <h2 className="text-xl font-semibold text-foreground">Vanliga frågor</h2>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              Klicka på en fråga för att läsa svaret. Du kan också skicka en förfrågan så återkommer lokala företag med
              upplägg för just ditt badrum.
            </p>

            <div className="mt-6">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((f) => (
                  <AccordionItem
                    key={f.q}
                    value={f.q}
                    className="border border-border rounded-lg px-6 data-[state=open]:bg-muted/50"
                  >
                    <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-xl border border-border bg-primary p-8 text-primary-foreground text-center">
            <h2 className="text-2xl font-bold">Redo att komma igång?</h2>
            <p className="mt-2 text-primary-foreground/80">
              Skicka in en kostnadsfri förfrågan – målet är återkoppling inom 24 timmar. Vill du först få helhetsbild?{" "}
              <Link href="/guide" className="underline underline-offset-4 hover:text-primary-foreground">
                Läs guiden
              </Link>
              .
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" variant="secondary" className="min-h-[48px]">
                <Link href="/kontakt">
                  Få kostnadsfri offert
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="min-h-[48px] bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link href="/guide">Läs guiden</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Structured data */}
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
