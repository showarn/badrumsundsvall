import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const runtime = "nodejs"

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

function isNonEmptyString(v: unknown): v is string {
  return typeof v === "string" && v.trim().length > 0
}

function toTrimmedString(v: unknown): string {
  return typeof v === "string" ? v.trim() : ""
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function requiredEnv(name: string): string {
  const v = process.env[name]
  if (!v) throw new Error(`Missing env: ${name}`)
  return v
}

export async function POST(req: Request) {
  try {
    const dataUnknown = await req.json().catch(() => null)
    if (!dataUnknown || typeof dataUnknown !== "object") {
      return NextResponse.json({ error: "Invalid JSON body" }, { status: 400 })
    }

    const data = dataUnknown as Partial<LeadPayload>

    const projectType = toTrimmedString(data.projectType)
    const size = toTrimmedString(data.size)
    const timeline = toTrimmedString(data.timeline)
    const postalCode = toTrimmedString(data.postalCode)
    const name = toTrimmedString(data.name)
    const email = toTrimmedString(data.email).toLowerCase()
    const phone = toTrimmedString(data.phone)
    const description = isNonEmptyString(data.description) ? data.description.trim() : undefined

    if (!projectType || !size || !timeline) {
      return NextResponse.json({ error: "Missing project fields" }, { status: 400 })
    }
    if (!/^\d{5}$/.test(postalCode)) {
      return NextResponse.json({ error: "Invalid postal code" }, { status: 400 })
    }
    if (!name) {
      return NextResponse.json({ error: "Missing name" }, { status: 400 })
    }
    if (!email || !isValidEmail(email)) {
      return NextResponse.json({ error: "Missing/invalid email" }, { status: 400 })
    }
    if (!phone) {
      return NextResponse.json({ error: "Missing phone" }, { status: 400 })
    }

    const transporter = nodemailer.createTransport({
      host: requiredEnv("SMTP_HOST"),
      port: Number(requiredEnv("SMTP_PORT")),
      secure: Number(process.env.SMTP_PORT) === 465, // 465 = SSL, 587 = STARTTLS
      auth: {
        user: requiredEnv("SMTP_USER"),
        pass: requiredEnv("SMTP_PASS"),
      },
    })

    const message = `
Ny badrumsförfrågan – Sundsvall

Typ av projekt: ${projectType}
Storlek: ${size}
Start: ${timeline}
Postnummer: ${postalCode}

Namn: ${name}
E-post: ${email}
Telefon: ${phone}

Beskrivning:
${description || "-"}
`.trim()

    await transporter.sendMail({
      from: requiredEnv("SMTP_FROM"),
      to: "linn@innovobygg.se",
      subject: `Ny badrumsförfrågan: ${name} (${postalCode})`,
      text: message,
      // Gör att Linn kan trycka "Svara" och hamna hos kunden
      replyTo: `${name} <${email}>`,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Mail error:", error)
    return NextResponse.json({ error: "Failed to send lead" }, { status: 500 })
  }
}
