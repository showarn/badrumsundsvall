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

export const metadata: Metadata = {
  title: "Vanliga frågor om badrumsrenovering",
  description: "Få svar på vanliga frågor om badrumsrenovering i Sundsvall. Pris, tid, ROT-avdrag, bygglov och mer.",
}

const faqs = [
  {
    question: "Vad kostar en badrumsrenovering i Sundsvall?",
    answer: "Priset varierar beroende på badrummets storlek och omfattning. Ett litet badrum (under 5 kvm) kostar vanligtvis 80 000 – 150 000 kr, ett mellanbadrum (5-10 kvm) kostar 150 000 – 250 000 kr, och ett större badrum (över 10 kvm) kan kosta 250 000 – 400 000 kr. Med ROT-avdrag kan du få tillbaka upp till 50 000 kr per person på arbetskostnaden.",
  },
  {
    question: "Hur lång tid tar en badrumsrenovering?",
    answer: "En normal badrumsrenovering tar mellan 3-6 veckor beroende på omfattning. En enklare renovering utan flytt av rör kan vara klar på 2-3 veckor, medan en helrenovering med nya stammar kan ta 4-6 veckor. Väntetider på material kan också påverka tidsplanen.",
  },
  {
    question: "Får man ROT-avdrag på badrumsrenovering?",
    answer: "Ja, du kan få ROT-avdrag på arbetskostnaden vid badrumsrenovering. Avdraget är 30% av arbetskostnaden, upp till max 50 000 kr per person och år. Du måste äga bostaden och vara folkbokförd där. Avdraget gäller inte för materialkostnader.",
  },
  {
    question: "Krävs det bygglov för badrumsrenovering?",
    answer: "Normalt krävs inget bygglov för badrumsrenovering i befintligt utrymme. Däremot kan bygglov eller bygganmälan krävas om du gör större förändringar i planlösningen, flyttar bärande väggar eller ändrar ventilationen. Kontakta Sundsvalls kommun för specifik rådgivning.",
  },
  {
    question: "Är företagen ni förmedlar till certifierade?",
    answer: "Ja, vi samarbetar endast med företag som har giltiga certifieringar för våtrumsarbete. Det innebär att de är GVK-certifierade (Golvbranschens VåtrumsKontroll) eller BKR-certifierade (Byggkeramikrådet). Detta garanterar att arbetet utförs enligt branschens säkerhetsregler.",
  },
  {
    question: "Kan man bo kvar under renoveringen?",
    answer: "Ja, det går oftast att bo kvar under renoveringen, men du kommer inte ha tillgång till badrummet. Vi rekommenderar att ordna tillgång till ett annat badrum under tiden. Vid mer omfattande renoveringar med mycket damm och buller kan det vara bekvämare att bo någon annanstans.",
  },
  {
    question: "Vad ingår i offerten?",
    answer: "En komplett offert ska innehålla detaljerad beskrivning av arbetet, materialkostnader, arbetskostnader (separat för ROT-avdrag), tidsplan, betalningsvillkor och garantier. Vi rekommenderar att alltid be om en skriftlig offert och jämföra flera alternativ.",
  },
  {
    question: "Hur fungerar er tjänst?",
    answer: "Vi är en förmedlingstjänst som hjälper dig hitta rätt hantverkare. Du fyller i ett formulär med information om ditt projekt, sedan matchar vi dig med kvalitetssäkrade lokala företag som kontaktar dig med offerter. Tjänsten är kostnadsfri och utan köpkrav.",
  },
  {
    question: "Vad är tätskikt och varför är det viktigt?",
    answer: "Tätskikt är ett vattentätt membran som appliceras under kakel och klinker i våtutrymmen. Det skyddar väggar och golv från fuktskador. Ett korrekt utfört tätskikt enligt branschreglerna (BBV) är avgörande för att undvika kostsamma vattenskador och mögelbildning.",
  },
  {
    question: "Vilka områden täcker ni?",
    answer: "Vi förmedlar offertförfrågningar till hantverkare i Sundsvall och närliggande områden, inklusive Timrå, Alnö och Njurunda. Om du bor i ett annat område, fyll gärna i formuläret så kontrollerar vi om vi har samarbetspartners i ditt område.",
  },
  {
    question: "Vad händer om något går fel efter renoveringen?",
    answer: "Alla våra samarbetspartners har fullständig ansvarsförsäkring och erbjuder garanti på utfört arbete. Vid certifierat våtrumsarbete finns dessutom en 10-årig försäkringsgaranti. Spara alltid all dokumentation och kontakta företaget omgående om du upptäcker problem.",
  },
  {
    question: "Hur väljer jag rätt kakel och klinker?",
    answer: "Tänk på badrummets storlek, ljusförhållanden och din stil. Ljusa färger får små badrum att kännas större. Större plattor ger ett lugnare intryck med färre fogar. Välj klinker med halkskydd (R-klassning) för golvet. Din hantverkare kan hjälpa dig med materialval.",
  },
]

export default function FaqPage() {
  // Generate FAQ schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-muted py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl text-balance">
              Vanliga frågor om badrumsrenovering
            </h1>
            <p className="mt-4 text-lg text-muted-foreground lg:text-xl">
              Här hittar du svar på de vanligaste frågorna om badrumsrenovering i Sundsvall.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-card py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
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
      </section>

      {/* CTA Section */}
      <section className="bg-muted py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl mb-4">
            Har du fler frågor?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Kontakta oss så hjälper vi dig. Eller fyll i en offertförfrågan så får du personlig rådgivning från lokala hantverkare.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="min-h-[48px]">
              <Link href="/kontakt">
                Få kostnadsfri offert
                <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="min-h-[48px] bg-transparent">
              <Link href="/om-oss">Läs mer om oss</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </div>
  )
}
