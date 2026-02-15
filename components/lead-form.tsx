"use client"

import React, { useMemo, useState } from "react"
import { usePathname, useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"
import { useIsMobile } from "@/hooks/use-mobile"

type LeadFormVariant = "full" | "compact"

interface LeadFormProps {
  variant?: LeadFormVariant
  /**
   * Visa textfältet "Kort beskrivning" även i compact (rekommenderas).
   * Default: true för full, false för compact.
   */
  showDescription?: boolean
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

  // 🔎 Källa
  sourcePath?: string
  sourceUrl?: string
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

type Choice = { value: string; label: string }

const PROJECT_TYPE_CHOICES: Choice[] = [
  { value: "renovation", label: "Renovering" },
  { value: "new", label: "Nytt badrum" },
]

const SIZE_CHOICES: Choice[] = [
  { value: "small", label: "Litet (< 5 kvm)" },
  { value: "medium", label: "Mellan (5–10)" },
  { value: "large", label: "Stort (> 10)" },
]

const TIMELINE_CHOICES: Choice[] = [
  { value: "now", label: "Snarast" },
  { value: "1-3months", label: "1–3 mån" },
  { value: "later", label: "Senare" },
]

function MobileChoiceGroup(props: {
  id: string
  name: string
  label: string
  value: string
  choices: Choice[]
  onChange: (next: string) => void
}) {
  const { id, name, label, value, choices, onChange } = props

  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>

      {/* a11y: hidden input håller required + form semantics */}
      <input id={id} name={name} value={value} readOnly required className="sr-only" />

      <div className="grid grid-cols-2 gap-2">
        {choices.map((c) => {
          const isActive = c.value === value
          return (
            <button
              key={c.value}
              type="button"
              onClick={() => onChange(c.value)}
              className={cn(
                "min-h-[44px] rounded-md border px-3 py-2 text-sm text-left transition",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                isActive ? "border-foreground bg-foreground text-background" : "border-border bg-background"
              )}
              aria-pressed={isActive}
            >
              {c.label}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export function LeadForm({ variant = "full", showDescription }: LeadFormProps) {
  const router = useRouter()
  const pathname = usePathname()
  const isMobile = useIsMobile()

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // För mobil-snabbval (styr UI). På desktop används native <select>.
  const [projectType, setProjectType] = useState<string>("")
  const [size, setSize] = useState<string>("")
  const [timeline, setTimeline] = useState<string>("")

  const isFull = useMemo(() => variant === "full", [variant])
  const shouldShowDescription = showDescription ?? isFull

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)

    if (isSubmitting) return
    setIsSubmitting(true)

    try {
      const form = e.currentTarget
      const fd = new FormData(form)

      const rawDescription = toStringValue(fd.get("description"))

      // Om mobil-snabbval används: våra hidden inputs bär värdet, så fd.get(...) funkar.
      const payload: LeadPayload = {
        projectType: toStringValue(fd.get("projectType")),
        size: toStringValue(fd.get("size")),
        timeline: toStringValue(fd.get("timeline")),
        postalCode: toStringValue(fd.get("postalCode")),
        name: toStringValue(fd.get("name")),
        email: toStringValue(fd.get("email")).toLowerCase(),
        phone: toStringValue(fd.get("phone")),
        description: rawDescription ? rawDescription : undefined,

        // 🔎 källa
        sourcePath: pathname || undefined,
        sourceUrl: typeof window !== "undefined" ? window.location.href : undefined,
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
    } catch (err) {
      const message = err instanceof Error ? err.message : "Något gick fel."
      setError(message)
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* PROJECT TYPE */}
      {isMobile ? (
        <MobileChoiceGroup
          id="projectType"
          name="projectType"
          label="Typ av projekt"
          value={projectType}
          choices={PROJECT_TYPE_CHOICES}
          onChange={setProjectType}
        />
      ) : (
        <div className="space-y-2">
          <Label htmlFor="projectType">Typ av projekt</Label>
          <select
            id="projectType"
            name="projectType"
            required
            className={cn(selectBase, "text-sm")}
            defaultValue=""
          >
            <option value="">Välj typ av projekt</option>
            <option value="renovation">Renovering av befintligt badrum</option>
            <option value="new">Nytt badrum</option>
          </select>
        </div>
      )}

      {/* SIZE */}
      {isMobile ? (
        <MobileChoiceGroup
          id="size"
          name="size"
          label="Ungefärlig storlek"
          value={size}
          choices={SIZE_CHOICES}
          onChange={setSize}
        />
      ) : (
        <div className="space-y-2">
          <Label htmlFor="size">Ungefärlig storlek</Label>
          <select id="size" name="size" required className={cn(selectBase, "text-sm")} defaultValue="">
            <option value="">Välj storlek</option>
            <option value="small">Litet (under 5 kvm)</option>
            <option value="medium">Mellan (5–10 kvm)</option>
            <option value="large">Stort (över 10 kvm)</option>
          </select>
        </div>
      )}

      {/* TIMELINE */}
      {isMobile ? (
        <MobileChoiceGroup
          id="timeline"
          name="timeline"
          label="När vill du starta?"
          value={timeline}
          choices={TIMELINE_CHOICES}
          onChange={setTimeline}
        />
      ) : (
        <div className="space-y-2">
          <Label htmlFor="timeline">När vill du starta?</Label>
          <select id="timeline" name="timeline" required className={cn(selectBase, "text-sm")} defaultValue="">
            <option value="">Välj tidsram</option>
            <option value="now">Så snart som möjligt</option>
            <option value="1-3months">Inom 1–3 månader</option>
            <option value="later">Senare / Planerar</option>
          </select>
        </div>
      )}

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
          autoComplete="tel"
          placeholder="07X XXX XX XX"
          required
          className="min-h-[44px]"
        />
      </div>

      {shouldShowDescription ? (
        <div className="space-y-2">
          <Label htmlFor="description">
            Kort beskrivning <span className="text-muted-foreground">(valfritt)</span>
          </Label>
          <Textarea
            id="description"
            name="description"
            placeholder="Beskriv gärna ditt projekt kort… (t.ex. kakel, golvvärme, planlösning, ev. problem)"
            rows={isFull ? 3 : 2}
            className={cn("resize-none", isFull ? "min-h-[88px]" : "min-h-[72px]")}
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
