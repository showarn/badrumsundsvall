"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navigation = [
  { name: "Start", href: "/" },
  { name: "Tjänster", href: "/tjanster" },
  { name: "Vanliga frågor", href: "/faq" },
  { name: "Om oss", href: "/om-oss" },
  { name: "Kontakt", href: "/kontakt" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-serif text-xl font-medium text-foreground tracking-tight">
            Badrumsrenovering
          </span>
          <span className="text-muted-foreground font-light">Sundsvall</span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden lg:flex lg:items-center lg:gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors tracking-wide"
            >
              {item.name}
            </Link>
          ))}
          <Button asChild size="lg" className="ml-4">
            <Link href="/kontakt">Få offert</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="inline-flex items-center justify-center rounded-md p-2.5 text-foreground min-h-[44px] min-w-[44px]"
            aria-label={mobileMenuOpen ? "Stäng meny" : "Öppna meny"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-border">
          <div className="space-y-1 px-4 py-4">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block rounded-lg px-3 py-3 text-base font-medium text-foreground hover:bg-muted min-h-[44px] flex items-center"
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-4">
              <Button asChild className="w-full" size="lg">
                <Link href="/kontakt" onClick={() => setMobileMenuOpen(false)}>
                  Få offert
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
