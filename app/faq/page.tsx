import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ArrowRight } from "lucide-react"

const SITE_URL = "https://badrum-sundsvall.se"

type FaqItem = {
  question: string
  answer: string
}

export const metadata: Metadata = {
  title: "Vanliga frågor om badrumsrenovering i Sundsvall",
  description:
    "Svar på vanliga frågor om badrumsrenovering i Sundsvall: pris, tidsplan, ROT-avdrag, tätskikt, certifieringar och hur tjänsten fungerar.",
  alternates: { canonical: "/faq" },
  openGraph: {
    url: `${SITE_URL}/faq`,
    title: "Vanliga frågor om badrumsrenovering i Sundsvall",
    description:
      "Pris, tid, ROT-avdrag, tätskikt och hur offertförfrågan fungerar. Samlad FAQ för badrumsrenovering i Sundsvall.",
  },
  robots: { index: true, follow: true },
}

const faqs: FaqItem[] = [
  {
    question: "Vad kostar en badrumsrenovering i Sundsvall?",
    answer:
      "Priset varierar beroende på badrummets storlek, materialval och omfattning. Som riktmärke: litet badrum (under 5 kvm) cirka 80 000–150 000 kr, mellan (5–10 kvm) cirka 150 000–250 000 kr och större (över 10 kvm) cirka 250 000–400 000 kr. ROT-avdrag kan sänka arbetskostnaden beroende på din situation.",
  },
  {
    question: "Hur lång tid tar en badrumsrenovering?",
    answer:
      "En vanlig badrumsrenovering tar ofta 3–6 veckor, men tidsplanen beror på omfattning, material, planlösning och tillgänglighet. En enklare renovering utan större ändringar kan gå snabbare, medan mer omfattande jobb kan ta längre tid.",
  },
  {
    question: "Får man ROT-avdrag på badrumsrenovering?",
    answer:
      "Ja, ROT-avdrag kan gälla för arbetskostnaden vid badrumsrenovering enligt Skatteverkets regler. Avdraget gäller normalt inte material. Du behöver uppfylla villkoren (t.ex. äga bostaden) och utförande företag hanterar avdraget på fakturan.",
  },
  {
    question: "Krävs det bygglov för badrumsrenovering?",
    answer:
      "Vanligtvis krävs inget bygglov för renovering i befintligt badrum. Men om du gör större ändringar i planlösningen, flyttar bärande delar eller påverkar ventilation kan det krävas bygganmälan/bygglov. Kontakta Sundsvalls kommun för bedömning i ditt fall.",
  },
  {
    question: "Är företagen ni förmedlar till certifierade?",
    answer:
      "Vi strävar efter att matcha din förfrågan med företag som följer branschregler för våtrum och har relevant erfarenhet. Exakta certifieringar och behörigheter kan variera och bekräftas alltid i offert och avtal med utförande företag.",
  },
  {
    question: "Kan man bo kvar under renoveringen?",
    answer:
      "Det går ofta att bo kvar, men du har vanligtvis begränsad eller ingen tillgång till badrummet under perioden. Många ordnar ett alternativt badrum (t.ex. i förening, hos familj eller via tillfälliga lösningar) för att underlätta.",
  },
  {
    question: "Vad ingår i offerten?",
    answer:
      "En tydlig offert bör innehålla en specificerad beskrivning av arbetet, material, arbetskostnad (ofta separat för ROT), tidsplan, betalningsvillkor och eventuella garantier. Jämför gärna flera offerter och ställ frågor om något är oklart.",
  },
  {
    question: "Hur fungerar er tjänst?",
    answer:
      "Du fyller i ett formulär med information om ditt projekt. Vi förmedlar förfrågan till passande lokala företag som kan vara intresserade. Företagen kontaktar dig sedan med frågor eller offert. Tjänsten är kostnadsfri och utan köpkrav.",
  },
  {
    question: "Vad är tätskikt och varför är det viktigt?",
    answer:
      "Tätskikt är ett vattentätt skydd under ytskikt (t.ex. kakel/klinker) i våtrum. Det minskar risken för fuktskador och mögel. Ett korrekt utfört tätskikt enligt branschregler är en av de viktigaste delarna i en badrumsrenovering.",
  },
  {
    question: "Vilka områden täcker ni?",
    answer:
      "Vi förmedlar förfrågningar i Sundsvall med omnejd, exempelvis Timrå, Alnö och Njurunda. Om du bor utanför området kan du ändå skicka in en förfrågan så kontrollerar vi om det finns passande företag.",
  },
  {
    question: "Vad händer om något går fel efter renoveringen?",
    answer:
      "Villkor, garanti och ansvar regleras mellan dig och utförande företag. Spara alltid offert, avtal, kvitton och eventuell dokumentation från våtrumsarbetet. Om något uppstår kontaktar du utförande företag direkt så att de kan hantera ärendet.",
  },
  {
    question: "Hur väljer jag rätt kakel och klinker?",
    answer:
      "Utgå från badrummets storlek, ljus och stil. Ljusa färger kan göra små badrum luftigare. Större plattor ger ofta ett lugnare uttryck (färre fogar). För golv är halkskydd viktigt. Be gärna utförande företag om råd kring materialval och underlag.",
  },
]

function buildFaqJsonLd(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } as const
}

export default function FaqPage() {
  const faqJsonLd = buildFaqJsonLd(faqs)

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <header className="bg-muted py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground mb-3">
              Frågor & svar
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              Vanliga frågor om badrumsrenovering
            </h1>
            <p className="mt-4 text-lg text-muted-foreground lg:text-xl">
              Samlade svar om pris, tidsplan, ROT-avdrag, tätskikt och hur offertförfrågan fungerar i Sundsvall.
            </p>
          </div>
        </div>
      </header>

      {/* FAQ */}
      <main className="bg-card py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq) => (
              <AccordionItem
                key={faq.question}
                value={faq.question}
                className="border border-border rounded-lg px-6 data-[state=open]:bg-muted/50"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </main>

      {/* CTA */}
      <section className="bg-muted py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl mb-4">
            Har du fler frågor?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Skicka en offertförfrågan så kan lokala företag återkomma med upplägg och frågor kring ditt projekt.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="min-h-[48px]">
              <Link href="/kontakt">
                Få kostnadsfri offert
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="min-h-[48px] bg-transparent">
              <Link href="/om-oss">Läs mer om tjänsten</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </div>
  )
}
