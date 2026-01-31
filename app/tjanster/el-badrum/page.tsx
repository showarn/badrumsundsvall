import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  Zap,
  ShieldCheck,
  AlertTriangle,
  Lightbulb,
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
  title: "El i badrum i Sundsvall | Säker elinstallation i våtrum",
  description:
    "El i badrum i Sundsvall. Säker elinstallation i våtrum med behöriga elektriker. Belysning, eluttag, golvvärme och handdukstork. Kostnadsfri offert.",
  alternates: { canonical: "/tjanster/el-badrum" },
  openGraph: {
    title: "El i badrum i Sundsvall",
    description:
      "Professionell elinstallation i badrum. Säker el i våtrum enligt gällande regler.",
    url: `${SITE_URL}/tjanster/el-badrum`,
    type: "website",
  },
  robots: { index: true, follow: true },
}

const areas = ["Sundsvall", "Timrå", "Alnö", "Njurunda"] as const

const included = [
  "Elinstallation i våtrum",
  "Spotlights och badrumsbelysning",
  "Eluttag och jordfelsbrytare",
  "Golvvärme (el)",
  "Spegelskåp med belysning",
  "Handdukstork",
] as const

const introText = [
  "El i badrum ställer höga krav på säkerhet, planering och korrekt utförande. Eftersom badrum är våtutrymmen gäller särskilda regler för hur el får installeras.",
  "Felaktig elinstallation i badrum kan innebära allvarliga säkerhetsrisker, påverka försäkringen och i värsta fall leda till personskador.",
  "Vid badrumsrenovering är det därför viktigt att all el utförs av behöriga elektriker och att installationen anpassas efter både funktion och säkerhet.",
] as const

const focusAreas = [
  {
    title: "Elsäkerhet i våtrum",
    desc:
      "Badrum klassas som våtrum och omfattas av särskilda säkerhetszoner och regler.",
    icon: ShieldCheck,
  },
  {
    title: "Belysning & funktion",
    desc:
      "Rätt belysning skapar både trygghet och trivsel – från arbetsljus till stämningsljus.",
    icon: Lightbulb,
  },
  {
    title: "Behörig elektriker",
    desc:
      "El i badrum ska alltid installeras fackmässigt för att uppfylla gällande krav.",
    icon: Zap,
  },
  {
    title: "Risk vid felaktig el",
    desc:
      "Felaktigt utförd el kan orsaka kortslutning, brand eller elolyckor.",
    icon: AlertTriangle,
  },
] as const

const faqs = [
  {
    q: "Vad innebär el i badrum?",
    a: "El i badrum omfattar belysning, eluttag, golvvärme, handdukstork, spegelskåp med belysning samt övriga fasta elinstallationer i våtutrymmet.",
  },
  {
    q: "Måste el i badrum utföras av behörig elektriker?",
    a: "Ja. Elinstallationer i badrum ska utföras fackmässigt och enligt gällande elsäkerhetsregler.",
  },
  {
    q: "Vad är zonindelning i badrum?",
    a: "Badrum delas in i olika säkerhetszoner som avgör var eluttag, belysning och utrustning får placeras.",
  },
  {
    q: "Kan man ha vanliga eluttag i badrum?",
    a: "Ja, men endast på godkända platser och alltid skyddade med jordfelsbrytare.",
  },
  {
    q: "Ingår jordfelsbrytare?",
    a: "Jordfelsbrytare är ett krav för el i våtrum och ska alltid finnas med i installationen.",
  },
  {
    q: "Är golvvärme i badrum säkert?",
    a: "Ja, elburen golvvärme är säker när den installeras korrekt och enligt tillverkarens anvisningar.",
  },
  {
    q: "Påverkar elarbetet försäkringen?",
    a: "Vid skada kan försäkringsbolag kräva att elinstallationen är korrekt utförd enligt regler.",
  },
  {
    q: "Hur planerar man elen i badrum?",
    a: "Planering sker utifrån badrummets layout, belysningsbehov, säkerhetszoner och önskad funktion.",
  },
  {
    q: "Kan man bo kvar under elarbetet?",
    a: "Ofta ja, men elen kan behöva stängas av tillfälligt under installationen.",
  },
  {
    q: "Får man dokumentation efteråt?",
    a: "Dokumentation och kontrolluppgifter lämnas av utförande elektriker.",
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
    name: "El i badrum i Sundsvall",
    serviceType: "Electrical service",
    areaServed: areas.map((a) => ({ "@type": "City", name: a })),
    provider: {
      "@type": "Organization",
      name: "Badrumsrenovering Sundsvall",
      url: SITE_URL,
    },
    url: `${SITE_URL}/tjanster/el-badrum`,
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
            El i badrum
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Säker och funktionell elinstallation i badrum. Vi förmedlar till behöriga elektriker i{" "}
            {areas.join(", ")}.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Button asChild size="lg">
              <Link href="/kontakt">
                Få offert
                <ArrowRight className="ml-2 h-4 w-4" />
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
              href="/tjanster/tatskikt-vatrum"
              className="rounded-full border border-border bg-card px-4 py-2 text-foreground hover:bg-card/70 transition-colors"
            >
              Tätskikt &amp; våtrum
            </Link>
            <Link
              href="/tjanster/helrenovering-badrum"
              className="rounded-full border border-border bg-card px-4 py-2 text-foreground hover:bg-card/70 transition-colors"
            >
              Helrenovering av badrum
            </Link>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-card py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 lg:px-8 space-y-12">
          <div className="rounded-xl border border-border bg-card p-6 lg:p-8">
            <h2 className="text-xl font-semibold">El i badrum – säkerhet först</h2>

            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              {introText.map((p, idx) => (
                <p key={p}>
                  {p}
                  {idx === 0 && (
                    <>
                      {" "}
                      I praktiken behöver elen planeras tillsammans med{" "}
                      <Link
                        href="/tjanster/tatskikt-vatrum"
                        className="underline underline-offset-4 hover:text-foreground"
                      >
                        tätskikt &amp; våtrum
                      </Link>{" "}
                      så att placeringar, genomföringar och lösningar blir rätt från början.
                    </>
                  )}
                  {idx === 2 && (
                    <>
                      {" "}
                      Om du vill förstå hela ordningen på momenten kan du börja med vår{" "}
                      <Link
                        href="/guide"
                        className="underline underline-offset-4 hover:text-foreground"
                      >
                        guide: så går en badrumsrenovering till steg för steg
                      </Link>
                      .
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
                  Vanliga elmoment vid badrumsrenovering. Exakt omfattning framgår i offerten.
                </p>
              </CardHeader>
              <CardContent className="p-6 lg:p-8">
                <ul className="grid gap-3 sm:grid-cols-2">
                  {included.map((i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-accent mt-0.5" />
                      <span className="text-sm">{i}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </div>
          </Card>

          <div className="rounded-xl border border-border bg-card p-6 lg:p-8">
            <h2 className="text-xl font-semibold">Kvalitet & trygghet</h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {focusAreas.map((f) => (
                <div key={f.title} className="rounded-lg bg-muted border border-border p-5">
                  <f.icon className="h-8 w-8" />
                  <h3 className="mt-3 font-semibold">{f.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Related services (topic cluster) */}
          <div className="rounded-xl border border-border bg-muted p-6 lg:p-8">
            <h2 className="text-xl font-semibold text-foreground">Relaterade tjänster</h2>
            <p className="mt-2 text-muted-foreground">
              Elen är en del av helheten. Här är andra moment som ofta hänger ihop med el i badrum.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  href: "/tjanster/helrenovering-badrum",
                  title: "Helrenovering av badrum",
                  desc: "Nyckelfärdigt badrum från golv till tak – samordnat och tydligt.",
                },
                {
                  href: "/tjanster/tatskikt-vatrum",
                  title: "Tätskikt & våtrum",
                  desc: "Badrummets viktigaste skydd – rätt utförande och dokumentation.",
                },
                {
                  href: "/tjanster/vvs-badrum",
                  title: "VVS i badrum",
                  desc: "Rör och avlopp för dusch, WC och handfat – trygg funktion.",
                },
                {
                  href: "/tjanster/kakel-klinker",
                  title: "Kakel & klinker",
                  desc: "Plattsättning, fall, fog och avslut – stil och hållbarhet.",
                },
                {
                  href: "/guide",
                  title: "Guide: Badrumsrenovering steg för steg",
                  desc: "Lär dig ordningen på momenten och vad som påverkar tid och pris.",
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
            <h2 className="text-xl font-semibold">Vanliga frågor om el i badrum</h2>
            <Accordion type="single" collapsible className="mt-6 space-y-4">
              {faqs.map((f) => (
                <AccordionItem key={f.q} value={f.q} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left font-semibold py-5">
                    {f.q}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-muted-foreground">
                    {f.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="rounded-xl bg-primary p-8 text-center text-primary-foreground">
            <h2 className="text-2xl font-bold">Redo att installera el säkert?</h2>
            <p className="mt-2 text-primary-foreground/80">
              Skicka in en kostnadsfri förfrågan – vi matchar dig med rätt elektriker.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/kontakt">
                  Få kostnadsfri offert
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link href="/guide">Läs guiden först</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </div>
  )
}
