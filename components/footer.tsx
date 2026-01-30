import Link from "next/link"

const footerLinks = [
  { name: "Start", href: "/" },
  { name: "Tjänster", href: "/tjanster" },
  { name: "Vanliga frågor", href: "/faq" },
  { name: "Om oss", href: "/om-oss" },
  { name: "Kontakt", href: "/kontakt" },
  { name: "Integritetspolicy", href: "/integritetspolicy" },
]

const serviceAreas = ["Sundsvall", "Timrå", "Alnö", "Njurunda"]

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-3">
          {/* About */}
          <div>
            <h3 className="font-serif text-xl font-medium mb-4">Badrumsrenovering Sundsvall</h3>
            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Vi förmedlar din offertförfrågan till lokala, kontrollerade badrumsföretag i Sundsvall med omnejd. 
              Kostnadsfritt och utan köpkrav.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm uppercase tracking-widest text-primary-foreground/50 mb-4">Snabblänkar</h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-sm uppercase tracking-widest text-primary-foreground/50 mb-4">Områden vi täcker</h3>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area} className="text-sm text-primary-foreground/70">
                  Badrumsrenovering {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <p className="text-xs text-primary-foreground/60 text-center leading-relaxed">
            Tjänsten drivs av Innovo AB som förmedlar offertförfrågningar till lokala, kontrollerade badrumsföretag.
          </p>
          <p className="text-xs text-primary-foreground/40 text-center mt-2">
            © {new Date().getFullYear()} Alla rättigheter förbehållna.
          </p>
        </div>
      </div>
    </footer>
  )
}
