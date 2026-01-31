import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  Wrench,
  Droplets,
  ShieldCheck,
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

export const metadata: Metadata = {
  title: "VVS i badrum i Sundsvall | Säker rördragning & installation",
  description:
    "VVS i badrum i Sundsvall. Trygg installation av rör, avlopp, dusch, WC och handfat. Vi förmedlar till behöriga VVS-installatörer. Kostnadsfri offert.",
  alternates: { canonical: "/tjanster/vvs-badrum" },
  openGraph: {
    title: "VVS i badrum i Sundsvall",
    description:
      "Professionell VVS-installation i badrum. Säker rördragning, avlopp och inkoppling av dusch, WC och handfat.",
    url: `${SITE_URL}/tjanster/vvs-badrum`,
    type: "website",
  },
  robots: { index: true, follow: true },
}

const areas = ["Sundsvall", "Timrå", "Alnö", "Njurunda"] as const

const included = [
  "Rördragning för vatten och avlopp",
  "Installation av dusch och badkar",
  "Handfat och WC",
  "Blandare och duschset",
  "Tvättmaskinsanslutning",
  "Provtryckning vid behov",
] as const

const introText = [
  "VVS-arbeten är en av de mest kritiska delarna i ett badrum. Felaktig rördragning eller dåliga kopplingar kan orsaka läckage, fuktskador och stora kostnader.",
  "Vid badrumsrenovering är det därför avgörande att VVS-installationer utförs korrekt från början, av behöriga installatörer och med tydlig dokumentation.",
  "Här förklarar vi vad som ingår i VVS i badrum, varför det är viktigt och vilka frågor som är vanliga inför renovering.",
] as const

const focusAreas = [
  {
    title: "Rör & avlopp",
    desc:
      "Vatten- och avloppsrör ska dras korrekt för att undvika läckage och säkerställa rätt fall och funktion.",
    icon: Droplets,
  },
  {
    title: "Behörighet & säkerhet",
    desc:
      "VVS-arbete i badrum ska utföras fackmässigt. Detta är avgörande för både säkerhet och försäkring.",
    icon: ShieldCheck,
  },
  {
    title: "Installation av inredning",
    desc:
      "Dusch, WC, handfat och blandare måste installeras korrekt för lång livslängd och problemfri användning.",
    icon: Wrench,
  },
  {
    title: "Risk vid fel",
    desc:
      "Felaktig VVS kan leda till dolda vattenskador som upptäcks först långt senare.",
    icon: AlertTriangle,
  },
] as const

const faqs = [
  {
    q: "Vad innebär VVS i badrum?",
    a: "VVS omfattar installation och dragning av vatten, avlopp samt inkoppling av dusch, badkar, handfat, WC och andra sanitära produkter.",
  },
  {
    q: "Måste VVS i badrum utföras av behörig installatör?",
    a: "Arbetet ska alltid utföras fackmässigt. Många försäkringsbolag kräver att installationen är korrekt utförd för att ersättning ska gälla.",
  },
  {
    q: "Behöver man byta rör vid badrumsrenovering?",
    a: "Vid äldre badrum är det ofta rekommenderat att se över eller byta rör för att minska risken för framtida läckage.",
  },
  {
    q: "Vad ingår normalt i VVS-arbetet?",
    a: "Rördragning, avlopp, inkoppling av dusch, WC, handfat, blandare samt eventuella tester och kontroller.",
  },
  {
    q: "Kan jag bo kvar under VVS-arbetet?",
    a: "Det går ibland, men tillgången till vatten och WC kan vara begränsad under arbetets gång.",
  },
  {
    q: "Vad händer om ett VVS-arbete blir fel?",
    a: "Felaktigt arbete kan orsaka läckage och vattenskador. Därför är korrekt utförande och dokumentation mycket viktigt.",
  },
  {
    q: "Hur påverkar VVS försäkringen?",
    a: "Vid skada kan försäkringsbolag kräva att VVS-arbetet är korrekt utfört. Brister kan påverka ersättningen.",
  },
  {
    q: "Hur lång tid tar VVS-arbeten i badrum?",
    a: "Tidsåtgången varierar beroende på omfattning, men VVS-momenten utförs ofta under flera dagar i samband med renoveringen.",
  },
  {
    q: "Ingår material i offerten?",
    a: "Det varierar. Offerten ska tydligt specificera vad som ingår – både arbete och material.",
  },
  {
    q: "Får jag dokumentation efteråt?",
    a: "Dokumentation och intyg hanteras av utförande företag och bör alltid sparas.",
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
    name: "VVS i badrum i Sundsvall",
    serviceType: "Plumbing service",
    areaServed: areas.map((a) => ({ "@type": "City", name: a })),
    provider: {
      "@type": "Organization",
      name: "Badrumsrenovering Sundsvall",
      url: SITE_URL,
    },
    url: `${SITE_URL}/tjanster/vvs-badrum`,
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
            VVS i badrum
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Säker VVS-installation för dusch, badkar, handfat och WC. Vi förmedlar till lokala installatörer i{" "}
            {areas.join(", ")}. Vill du förstå hela ordningen på momenten? Läs vår{" "}
            <Link href="/guide" className="underline underline-offset-4 hover:text-foreground">
              guide steg för steg
            </Link>
            .
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
              href="/tjanster/kakel-klinker"
              className="rounded-full border border-border bg-card px-4 py-2 text-foreground hover:bg-card/70 transition-colors"
            >
              Kakel &amp; klinker
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
            <h2 className="text-xl font-semibold">VVS i badrum – grunden för ett fungerande badrum</h2>
            <div className="mt-4 space-y-4 text-muted-foreground leading-relaxed">
              {introText.map((p, idx) => (
                <p key={p}>
                  {p}
                  {idx === 0 && (
                    <>
                      {" "}
                      För att minimera risken för framtida skador måste VVS samordnas med{" "}
                      <Link
                        href="/tjanster/tatskikt-vatrum"
                        className="underline underline-offset-4 hover:text-foreground"
                      >
                        tätskikt &amp; våtrum
                      </Link>{" "}
                      (genomföringar och anslutningar) samt planering av ytskikt som{" "}
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
                      Vill du se helheten? Börja gärna med{" "}
                      <Link
                        href="/guide"
                        className="underline underline-offset-4 hover:text-foreground"
                      >
                        vår guide steg för steg
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
                  Vanliga moment vid VVS-arbeten i badrum. Exakt omfattning framgår i offerten.
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
            <h2 className="text-xl font-semibold">Kvalitet & säkerhet</h2>
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
              VVS är en del av helheten. Här är andra moment som ofta hänger ihop med VVS i badrum.
            </p>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  href: "/tjanster/helrenovering-badrum",
                  title: "Helrenovering av badrum",
                  desc: "Nyckelfärdigt badrum – samordning av VVS, tätskikt, ytskikt, el och finish.",
                },
                {
                  href: "/tjanster/tatskikt-vatrum",
                  title: "Tätskikt & våtrum",
                  desc: "Tätskikt och genomföringar måste bli rätt för att undvika vattenskador.",
                },
                {
                  href: "/tjanster/kakel-klinker",
                  title: "Kakel & klinker",
                  desc: "Ytskikt, fall och avslut – ofta beroende av korrekt VVS-planering.",
                },
                {
                  href: "/tjanster/el-badrum",
                  title: "El i badrum",
                  desc: "Belysning, uttag och golvvärme behöver planeras ihop med VVS och layout.",
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
            <h2 className="text-xl font-semibold">Vanliga frågor om VVS i badrum</h2>
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
            <h2 className="text-2xl font-bold">Redo att få VVS rätt från början?</h2>
            <p className="mt-2 text-primary-foreground/80">
              Skicka in en kostnadsfri förfrågan – vi matchar dig med lokala VVS-installatörer. Vill du läsa mer först?
              Kolla{" "}
              <Link
                href="/guide"
                className="underline underline-offset-4 hover:text-primary-foreground"
              >
                guiden steg för steg
              </Link>
              .
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-center">
              <Button asChild size="lg" variant="secondary">
                <Link href="/kontakt">
                  Få kostnadsfri offert
                  <ArrowRight className="ml-2 h-4 w-4" />
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
