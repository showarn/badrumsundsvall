"use client"

import React, { useMemo, useState } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

type LeadFormVariant = "full" | "compact"

interface LeadFormProps {
  variant?: LeadFormVariant
}

type LeadPayload = {
  projectType: string
  size: string
  timeline: string
  postalCode: string
  name: string
  email: string
  phone: string
  description?: string
}

function toStringValue(v: FormDataEntryValue | null): string {
  return typeof v === "string" ? v.trim() : ""
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

const selectBase =
  "flex min-h-[44px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background " +
  "placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 " +
  "disabled:cursor-not-allowed disabled:opacity-50"

export function LeadForm({ variant = "full" }: LeadFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const isFull = useMemo(() => variant === "full", [variant])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    if (isSubmitting) return
    setIsSubmitting(true)

    try {
      const form = e.currentTarget
      const fd = new FormData(form)

      const payload: LeadPayload = {
        projectType: toStringValue(fd.get("projectType")),
        size: toStringValue(fd.get("size")),
        timeline: toStringValue(fd.get("timeline")),
        postalCode: toStringValue(fd.get("postalCode")),
        name: toStringValue(fd.get("name")),
        email: toStringValue(fd.get("email")).toLowerCase(),
        phone: toStringValue(fd.get("phone")),
        description: isFull ? toStringValue(fd.get("description")) || undefined : undefined,
      }

      if (!payload.projectType || !payload.size || !payload.timeline) {
        throw new Error("Välj typ av projekt, storlek och tidsram.")
      }
      if (!/^\d{5}$/.test(payload.postalCode)) {
        throw new Error("Postnumret måste vara 5 siffror.")
      }
      if (!payload.name) {
        throw new Error("Fyll i namn.")
      }
      if (!payload.email || !isValidEmail(payload.email)) {
        throw new Error("Fyll i en giltig e-postadress.")
      }
      if (!payload.phone) {
        throw new Error("Fyll i telefonnummer.")
      }

      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        const msg = await res.text().catch(() => "")
        throw new Error(msg || "Något gick fel. Försök igen.")
      }

      router.push("/tack")
      return
    } catch (err) {
      const message = err instanceof Error ? err.message : "Något gick fel."
      setError(message)
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="space-y-2">
        <Label htmlFor="projectType">Typ av projekt</Label>
        <select id="projectType" name="projectType" required className={cn(selectBase, "text-sm")}>
          <option value="">Välj typ av projekt</option>
          <option value="renovation">Renovering av befintligt badrum</option>
          <option value="new">Nytt badrum</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="size">Ungefärlig storlek</Label>
        <select id="size" name="size" required className={cn(selectBase, "text-sm")}>
          <option value="">Välj storlek</option>
          <option value="small">Litet (under 5 kvm)</option>
          <option value="medium">Mellan (5–10 kvm)</option>
          <option value="large">Stort (över 10 kvm)</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="timeline">När vill du starta?</Label>
        <select id="timeline" name="timeline" required className={cn(selectBase, "text-sm")}>
          <option value="">Välj tidsram</option>
          <option value="now">Så snart som möjligt</option>
          <option value="1-3months">Inom 1–3 månader</option>
          <option value="later">Senare / Planerar</option>
        </select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="postalCode">Postnummer</Label>
        <Input
          id="postalCode"
          name="postalCode"
          type="text"
          inputMode="numeric"
          pattern="[0-9]{5}"
          placeholder="t.ex. 85230"
          required
          className="min-h-[44px]"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="name">Namn</Label>
        <Input id="name" name="name" type="text" placeholder="Ditt namn" required className="min-h-[44px]" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">E-post</Label>
        <Input
          id="email"
          name="email"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="din@epost.se"
          required
          className="min-h-[44px]"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Telefon</Label>
        <Input
          id="phone"
          name="phone"
          type="tel"
          inputMode="tel"
          placeholder="07X XXX XX XX"
          required
          className="min-h-[44px]"
        />
      </div>

      {isFull ? (
        <div className="space-y-2">
          <Label htmlFor="description">
            Kort beskrivning <span className="text-muted-foreground">(valfritt)</span>
          </Label>
          <Textarea
            id="description"
            name="description"
            placeholder="Beskriv gärna ditt projekt kort..."
            rows={3}
            className="min-h-[88px] resize-none"
          />
        </div>
      ) : null}

      {error ? (
        <p className="rounded-md border border-destructive/30 bg-destructive/5 px-3 py-2 text-sm text-destructive">
          {error}
        </p>
      ) : null}

      <Button
        type="submit"
        size="lg"
        className="w-full min-h-[48px] text-base font-semibold"
        disabled={isSubmitting}
        aria-disabled={isSubmitting}
      >
        {isSubmitting ? "Skickar..." : "Få offert inom 24h"}
      </Button>

      <p className="text-center text-sm text-muted-foreground">Inget köpkrav – kostnadsfritt</p>
    </form>
  )
}
