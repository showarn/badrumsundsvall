import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Integritetspolicy",
  description: "Läs om hur vi hanterar dina personuppgifter enligt GDPR. Integritetspolicy för badrumsrenovering Sundsvall.",
}

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="bg-muted py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Integritetspolicy
          </h1>
          <p className="mt-4 text-muted-foreground">
            Senast uppdaterad: Januari 2026
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-card py-12 lg:py-16">
        <div className="mx-auto max-w-3xl px-4 lg:px-8">
          <div className="prose prose-gray max-w-none">
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  1. Personuppgiftsansvarig
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Innovo AB är personuppgiftsansvarig för behandlingen av dina personuppgifter 
                  på denna webbplats. Vi är måna om din integritet och behandlar dina 
                  personuppgifter i enlighet med dataskyddsförordningen (GDPR) och annan 
                  tillämplig lagstiftning.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  2. Vilka uppgifter samlar vi in?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  När du fyller i vårt offertformulär samlar vi in följande uppgifter:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Namn</li>
                  <li>Telefonnummer</li>
                  <li>Postnummer</li>
                  <li>Information om ditt renoveringsprojekt (typ, storlek, tidsram)</li>
                  <li>Eventuell beskrivning av projektet som du själv anger</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  3. Varför behandlar vi dina uppgifter?
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Vi behandlar dina personuppgifter för följande ändamål:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong className="text-foreground">Förmedling av offertförfrågningar:</strong> För att kunna 
                    matcha dig med passande lokala hantverkare och förmedla din förfrågan till dem.
                  </li>
                  <li>
                    <strong className="text-foreground">Kommunikation:</strong> För att kunna kontakta dig gällande 
                    din förfrågan om det behövs.
                  </li>
                  <li>
                    <strong className="text-foreground">Förbättring av tjänsten:</strong> För att analysera och 
                    förbättra vår tjänst (i anonymiserad form).
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  4. Rättslig grund
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Behandlingen baseras på ditt samtycke som du ger när du skickar in formuläret. 
                  Du kan när som helst återkalla ditt samtycke genom att kontakta oss.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  5. Vilka delar vi uppgifterna med?
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Dina uppgifter delas endast med de hantverkare som vi bedömer kan vara 
                  intresserade av och lämpliga för ditt projekt. Vi säljer aldrig dina uppgifter 
                  till tredje part och delar dem inte med någon annan än de hantverkare som 
                  matchar ditt projekt.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  6. Hur länge sparar vi uppgifterna?
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Vi sparar dina personuppgifter så länge det är nödvändigt för att uppfylla 
                  ändamålet med behandlingen, normalt i upp till 12 månader efter att du skickat 
                  in din förfrågan. Därefter raderas uppgifterna eller anonymiseras.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  7. Dina rättigheter
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Enligt GDPR har du följande rättigheter:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>
                    <strong className="text-foreground">Rätt till tillgång:</strong> Du har rätt att få bekräftelse 
                    på om vi behandlar dina personuppgifter och i så fall få tillgång till dem.
                  </li>
                  <li>
                    <strong className="text-foreground">Rätt till rättelse:</strong> Du har rätt att få felaktiga 
                    uppgifter rättade.
                  </li>
                  <li>
                    <strong className="text-foreground">Rätt till radering:</strong> Du har rätt att få dina 
                    uppgifter raderade under vissa förutsättningar.
                  </li>
                  <li>
                    <strong className="text-foreground">Rätt till begränsning:</strong> Du har rätt att begära 
                    begränsning av behandlingen.
                  </li>
                  <li>
                    <strong className="text-foreground">Rätt till dataportabilitet:</strong> Du har rätt att få 
                    ut dina uppgifter i ett maskinläsbart format.
                  </li>
                  <li>
                    <strong className="text-foreground">Rätt att invända:</strong> Du har rätt att invända mot 
                    behandlingen av dina personuppgifter.
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  8. Cookies
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Vi använder cookies för att förbättra din upplevelse på webbplatsen och för 
                  att analysera trafik. Cookies är små textfiler som lagras på din enhet. Du kan 
                  hantera dina cookie-inställningar i din webbläsare. Nödvändiga cookies används 
                  för att webbplatsen ska fungera korrekt.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  9. Säkerhet
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Vi vidtar lämpliga tekniska och organisatoriska säkerhetsåtgärder för att 
                  skydda dina personuppgifter mot obehörig åtkomst, förändring, spridning eller 
                  förstöring. All dataöverföring sker via krypterade anslutningar (HTTPS).
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  10. Kontakt
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Om du har frågor om hur vi behandlar dina personuppgifter eller vill utöva 
                  någon av dina rättigheter, vänligen kontakta oss via{" "}
                  <Link href="/kontakt" className="text-accent hover:underline">
                    kontaktformuläret
                  </Link>
                  .
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  11. Klagomål
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Om du anser att vi behandlar dina personuppgifter i strid med 
                  dataskyddsförordningen har du rätt att lämna klagomål till 
                  Integritetsskyddsmyndigheten (IMY).
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-foreground mb-3">
                  12. Ändringar
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Vi kan komma att uppdatera denna integritetspolicy vid behov. Vid väsentliga 
                  ändringar kommer vi att informera om detta på webbplatsen. Vi rekommenderar 
                  att du regelbundet läser igenom policyn för att hålla dig uppdaterad.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
