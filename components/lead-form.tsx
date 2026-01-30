"use client"

import React, { useMemo, useState } from "react"
import { useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"

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
  phone: string
  description?: string
}

function toStringValue(v: FormDataEntryValue | null): string {
  return typeof v === "string" ? v.trim() : ""
}

export function LeadForm({ variant = "full" }: LeadFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Controlled values for shadcn Select (so we can submit reliably)
  const [projectType, setProjectType] = useState<string>("")
  const [size, setSize] = useState<string>("")
  const [timeline, setTimeline] = useState<string>("")

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
        projectType: projectType || toStringValue(fd.get("projectType")),
        size: size || toStringValue(fd.get("size")),
        timeline: timeline || toStringValue(fd.get("timeline")),
        postalCode: toStringValue(fd.get("postalCode")),
        name: toStringValue(fd.get("name")),
        phone: toStringValue(fd.get("phone")),
        description: isFull ? toStringValue(fd.get("description")) || undefined : undefined,
      }

      // Minimal client-side guard (server validates too)
      if (!payload.projectType || !payload.size || !payload.timeline) {
        throw new Error("Välj typ av projekt, storlek och tidsram.")
      }
      if (!/^\d{5}$/.test(payload.postalCode)) {
        throw new Error("Postnumret måste vara 5 siffror.")
      }
      if (!payload.name) {
        throw new Error("Fyll i namn.")
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
    } catch (err) {
      const message = err instanceof Error ? err.message : "Något gick fel."
      setError(message)
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Hidden inputs so values exist in FormData even if Select is used */}
      <input type="hidden" name="projectType" value={projectType} />
      <input type="hidden" name="size" value={size} />
      <input type="hidden" name="timeline" value={timeline} />

      <div className="space-y-2">
        <Label htmlFor="projectType">Typ av projekt</Label>
        <Select value={projectType} onValueChange={setProjectType} required>
          <SelectTrigger id="projectType" className="min-h-[44px]">
            <SelectValue placeholder="Välj typ av projekt" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="renovation">Renovering av befintligt badrum</SelectItem>
            <SelectItem value="new">Nytt badrum</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="size">Ungefärlig storlek</Label>
        <Select value={size} onValueChange={setSize} required>
          <SelectTrigger id="size" className="min-h-[44px]">
            <SelectValue placeholder="Välj storlek" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="small">Litet (under 5 kvm)</SelectItem>
            <SelectItem value="medium">Mellan (5–10 kvm)</SelectItem>
            <SelectItem value="large">Stort (över 10 kvm)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="timeline">När vill du starta?</Label>
        <Select value={timeline} onValueChange={setTimeline} required>
          <SelectTrigger id="timeline" className="min-h-[44px]">
            <SelectValue placeholder="Välj tidsram" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="now">Så snart som möjligt</SelectItem>
            <SelectItem value="1-3months">Inom 1–3 månader</SelectItem>
            <SelectItem value="later">Senare / Planerar</SelectItem>
          </SelectContent>
        </Select>
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
        <Input
          id="name"
          name="name"
          type="text"
          placeholder="Ditt namn"
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

      <p className="text-center text-sm text-muted-foreground">
        Inget köpkrav – kostnadsfritt
      </p>
    </form>
  )
}
