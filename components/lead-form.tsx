"use client"

import React from "react"

import { useState } from "react"
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

interface LeadFormProps {
  variant?: "full" | "compact"
}

export function LeadForm({ variant = "full" }: LeadFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))
    
    router.push("/tack")
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="space-y-2">
        <Label htmlFor="projectType">Typ av projekt</Label>
        <Select name="projectType" required>
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
        <Select name="size" required>
          <SelectTrigger id="size" className="min-h-[44px]">
            <SelectValue placeholder="Välj storlek" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="small">Litet (under 5 kvm)</SelectItem>
            <SelectItem value="medium">Mellan (5-10 kvm)</SelectItem>
            <SelectItem value="large">Stort (över 10 kvm)</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="space-y-2">
        <Label htmlFor="timeline">När vill du starta?</Label>
        <Select name="timeline" required>
          <SelectTrigger id="timeline" className="min-h-[44px]">
            <SelectValue placeholder="Välj tidsram" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="now">Så snart som möjligt</SelectItem>
            <SelectItem value="1-3months">Inom 1-3 månader</SelectItem>
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

      {variant === "full" && (
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
      )}

      <Button 
        type="submit" 
        size="lg" 
        className="w-full min-h-[48px] text-base font-semibold"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Skickar..." : "Få offert inom 24h"}
      </Button>

      <p className="text-center text-sm text-muted-foreground">
        Inget köpkrav – kostnadsfritt
      </p>
    </form>
  )
}
