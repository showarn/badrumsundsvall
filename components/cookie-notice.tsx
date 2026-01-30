"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CookieNotice() {
  const [showNotice, setShowNotice] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      setShowNotice(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted")
    setShowNotice(false)
  }

  if (!showNotice) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-card border-t border-border p-4 shadow-lg">
      <div className="mx-auto max-w-7xl flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          Vi använder cookies för att förbättra din upplevelse på vår webbplats.{" "}
          <Link href="/integritetspolicy" className="underline hover:text-foreground">
            Läs mer
          </Link>
        </p>
        <Button 
          onClick={handleAccept} 
          size="sm"
          className="min-h-[44px] sm:min-h-[36px] shrink-0"
        >
          Acceptera
        </Button>
      </div>
    </div>
  )
}
