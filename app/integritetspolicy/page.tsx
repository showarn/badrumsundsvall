import type { Metadata } from "next"
import Link from "next/link"

const SITE_URL = "https://badrum-sundsvall.se"

export const metadata: Metadata = {
  title: "Integritetspolicy (GDPR) – Badrumsrenovering i Sundsvall",
  description:
    "Läs hur vi hanterar personuppgifter enligt GDPR när du skickar en offertförfrågan för badrumsrenovering i Sundsvall.",
  alternates: { canonical: "/integritetspolicy" },
  openGraph: {
    url: `${SITE_URL}/integritetspolicy`,
    title: "Integritetspolicy (GDPR) – Badrumsrenovering i Sundsvall",
    description:
      "Information om hur vi behandlar personuppgifter enligt GDPR vid offertförfrågningar.",
  },
  robots: { index: true, follow: true },
}

export default function PrivacyPolicyPage() {
  const lastUpdated = "Januari 2026"

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${SITE_URL}/integritetspolicy#webpage`,
        url: `${SITE_URL}/integritetspolicy`,
        name: "Integritetspolicy (GDPR)",
        description:
          "Integritetspolicy för hur personuppgifter hanteras vid offertförfrågan för badrumsrenovering i Sundsvall.",
        inLanguage: "sv-SE",
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${SITE_URL}/integritetspolicy#breadcrumb` },
        dateModified: lastUpdated,
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${SITE_URL}/integritetspolicy#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Startsida", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Integritetspolicy", item: `${SITE_URL}/integritetspolicy` },
        ],
      },
    ],
  } as const

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <header className="bg-muted py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <p className="text-sm uppercase tracking-[0.15em] text-muted-foreground mb-3">
            GDPR
          </p>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Integritetspolicy
          </h1>
          <p className="mt-4 text-muted-foreground">
            Senast uppdaterad: <time dateTime="2026-01">{lastUpdated}</time>
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="bg-card py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <article className="prose prose-gray max-w-none">
            <section aria-labelledby="section-controller" className="space-y-8">
              <div>
                <h2 id="section-controller" className="text-xl font-semibold text-foreground mb-3">
                  1. Personuppgiftsansvarig
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Innovo AB är personuppgiftsansvarig för behandlingen av personuppgifter på denna webbplats.
                  Vi värnar om din integritet och behandlar personuppgifter i enlighet med dataskyddsförordningen (GDPR)
                  och annan tillämplig lagstiftning.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">2. Vilka uppgifter samlar vi in?</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  När du fyller i offertformuläret kan vi samla in:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Namn</li>
                  <li>Telefonnummer</li>
                  <li>Postnummer</li>
                  <li>Information om renoveringsprojektet (t.ex. typ, storlek, tidsram)</li>
                  <li>Eventuell beskrivning som du själv anger</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">3. Varför behandlar vi uppgifterna?</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Vi behandlar personuppgifter för följande ändamål:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong className="text-foreground">Förmedling av offertförfrågningar:</strong> För att matcha
                    dig med passande lokala företag och förmedla din förfrågan till dem.
                  </li>
                  <li>
                    <strong className="text-foreground">Kommunikation:</strong> För att kunna kontakta dig vid behov
                    med frågor kring din förfrågan.
                  </li>
                  <li>
                    <strong className="text-foreground">Förbättring av tjänsten:</strong> För att analysera och förbättra
                    tjänsten i aggregerad/anonymiserad form.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">4. Rättslig grund</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Behandlingen baseras primärt på ditt{" "}
                  <strong className="text-foreground">samtycke</strong> när du skickar in formuläret.
                  Du kan när som helst återkalla ditt samtycke genom att kontakta oss.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">5. Vilka delar vi uppgifterna med?</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Uppgifterna delas endast med företag som kan vara aktuella för ditt projekt.
                  Vi säljer aldrig personuppgifter till tredje part och delar dem inte för andra ändamål än
                  att hantera din förfrågan.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">6. Lagringstid</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Vi sparar personuppgifter så länge det är nödvändigt för att uppfylla ändamålet med behandlingen,
                  normalt upp till <strong className="text-foreground">12 månader</strong> efter att du skickat in
                  förfrågan. Därefter raderas uppgifterna eller anonymiseras.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">7. Dina rättigheter</h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Enligt GDPR har du rätt att:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Begära tillgång till dina uppgifter (registerutdrag)</li>
                  <li>Begära rättelse av felaktiga uppgifter</li>
                  <li>Begära radering (under vissa förutsättningar)</li>
                  <li>Begära begränsning av behandling</li>
                  <li>Begära dataportabilitet</li>
                  <li>Invända mot behandling</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">8. Cookies</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Vi kan använda cookies för att förbättra funktionalitet och analysera trafik.
                  Du kan hantera cookies via inställningar i din webbläsare.
                  Nödvändiga cookies kan krävas för att webbplatsen ska fungera korrekt.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">9. Säkerhet</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Vi vidtar lämpliga tekniska och organisatoriska åtgärder för att skydda personuppgifter
                  mot obehörig åtkomst, förändring, spridning eller förstöring.
                  Dataöverföring sker via krypterade anslutningar (HTTPS).
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">10. Kontakt</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Om du vill utöva dina rättigheter eller har frågor om behandlingen, kontakta oss via{" "}
                  <Link href="/kontakt" className="text-accent hover:underline">
                    kontaktformuläret
                  </Link>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">11. Klagomål</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Om du anser att vi behandlar personuppgifter i strid med GDPR kan du lämna klagomål till
                  Integritetsskyddsmyndigheten (IMY).
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">12. Ändringar i policyn</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Vi kan uppdatera denna policy vid behov. Vid väsentliga ändringar informerar vi på webbplatsen.
                  Vi rekommenderar att du läser igenom policyn regelbundet.
                </p>
              </div>
            </section>
          </article>
        </div>
      </main>

      {/* JSON-LD */}
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  )
}
