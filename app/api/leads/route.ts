import { NextResponse } from "next/server"
import nodemailer from "nodemailer"
import { z } from "zod"

export const runtime = "nodejs"

const LeadSchema = z.object({
  projectType: z.string().trim().min(1, "projectType saknas"),
  size: z.string().trim().min(1, "size saknas"),
  timeline: z.string().trim().min(1, "timeline saknas"),
  postalCode: z.string().trim().regex(/^\d{5}$/, "postalCode måste vara 5 siffror"),
  name: z.string().trim().min(1, "name saknas"),
  email: z.string().trim().toLowerCase().email("email är ogiltig"),
  phone: z.string().trim().min(1, "phone saknas"),
  description: z.string().trim().optional(),

  // ✅ Källa (valfritt, men skickas från klient)
  sourcePath: z.string().trim().optional(),
  sourceUrl: z.string().trim().url().optional(),
})

type LeadPayload = z.infer<typeof LeadSchema>

function requiredEnv(name: string): string {
  const v = process.env[name]
  if (!v) throw new Error(`Missing env: ${name}`)
  return v
}

function parseSmtpPort(): number {
  const raw = requiredEnv("SMTP_PORT")
  const port = Number(raw)
  if (!Number.isFinite(port) || port <= 0) throw new Error("Invalid SMTP_PORT")
  return port
}

const PROJECT_TYPE_LABEL: Record<string, string> = {
  renovation: "Renovering av befintligt badrum",
  new: "Nytt badrum",
}

const SIZE_LABEL: Record<string, string> = {
  small: "Litet (under 5 kvm)",
  medium: "Mellan (5–10 kvm)",
  large: "Stort (över 10 kvm)",
}

const TIMELINE_LABEL: Record<string, string> = {
  now: "Så snart som möjligt",
  "1-3months": "Inom 1–3 månader",
  later: "Senare / Planerar",
}

function labelOf(map: Record<string, string>, value: string): string {
  return map[value] ?? value
}

function escapeHtml(input: string): string {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;")
}

let transporterSingleton: nodemailer.Transporter | null = null

function getTransporter(): nodemailer.Transporter {
  if (transporterSingleton) return transporterSingleton

  const port = parseSmtpPort()

  transporterSingleton = nodemailer.createTransport({
    host: requiredEnv("SMTP_HOST"),
    port,
    secure: port === 465, // 465 SSL, 587 STARTTLS
    auth: {
      user: requiredEnv("SMTP_USER"),
      pass: requiredEnv("SMTP_PASS"),
    },
  })

  return transporterSingleton
}

function buildSourceLine(p: LeadPayload): string {
  if (p.sourceUrl) return `Källa: ${p.sourceUrl}`
  if (p.sourcePath) return `Källa: ${p.sourcePath}`
  return ""
}

function buildText(p: LeadPayload): string {
  const projectType = labelOf(PROJECT_TYPE_LABEL, p.projectType)
  const size = labelOf(SIZE_LABEL, p.size)
  const timeline = labelOf(TIMELINE_LABEL, p.timeline)
  const description = p.description?.trim() ? p.description.trim() : "-"
  const sourceLine = buildSourceLine(p)

  return `
Ny badrumsförfrågan – Sundsvall

Projekt
Typ: ${projectType}
Storlek: ${size}
Start: ${timeline}
Postnummer: ${p.postalCode}
${sourceLine ? sourceLine : ""}

Kontakt
Namn: ${p.name}
E-post: ${p.email}
Telefon: ${p.phone}

Beskrivning
${description}
  `
    .trim()
    .replace(/\n{3,}/g, "\n\n")
}

function buildHtml(p: LeadPayload): string {
  const projectType = escapeHtml(labelOf(PROJECT_TYPE_LABEL, p.projectType))
  const size = escapeHtml(labelOf(SIZE_LABEL, p.size))
  const timeline = escapeHtml(labelOf(TIMELINE_LABEL, p.timeline))
  const description = escapeHtml(p.description?.trim() ? p.description.trim() : "-")

  const name = escapeHtml(p.name)
  const email = escapeHtml(p.email)
  const phone = escapeHtml(p.phone)
  const postalCode = escapeHtml(p.postalCode)

  const source =
    p.sourceUrl ? escapeHtml(p.sourceUrl) : p.sourcePath ? escapeHtml(p.sourcePath) : ""

  return `
<div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial; line-height: 1.5;">
  <h2 style="margin:0 0 12px;">Ny badrumsförfrågan – Sundsvall</h2>

  <h3 style="margin:16px 0 8px;">Projekt</h3>
  <ul style="margin:0; padding-left:18px;">
    <li><strong>Typ:</strong> ${projectType}</li>
    <li><strong>Storlek:</strong> ${size}</li>
    <li><strong>Start:</strong> ${timeline}</li>
    <li><strong>Postnummer:</strong> ${postalCode}</li>
    ${source ? `<li><strong>Källa:</strong> ${source}</li>` : ""}
  </ul>

  <h3 style="margin:16px 0 8px;">Kontakt</h3>
  <ul style="margin:0; padding-left:18px;">
    <li><strong>Namn:</strong> ${name}</li>
    <li><strong>E-post:</strong> <a href="mailto:${email}">${email}</a></li>
    <li><strong>Telefon:</strong> <a href="tel:${phone}">${phone}</a></li>
  </ul>

  <h3 style="margin:16px 0 8px;">Beskrivning</h3>
  <pre style="white-space: pre-wrap; background:#f6f6f6; padding:12px; border-radius:10px; margin:0;">${description}</pre>
</div>
  `.trim()
}

export async function POST(req: Request) {
  try {
    const bodyUnknown = await req.json().catch(() => null)
    const parsed = LeadSchema.safeParse(bodyUnknown)

    if (!parsed.success) {
      return NextResponse.json({ error: "Invalid payload", issues: parsed.error.issues }, { status: 400 })
    }

    const payload = parsed.data
    const transporter = getTransporter()

    const text = buildText(payload)
    const html = buildHtml(payload)

    await transporter.sendMail({
      from: requiredEnv("SMTP_FROM"),
      to: "linn@innovobygg.se",
      subject: `Ny badrumsförfrågan: ${payload.name} (${payload.postalCode})`,
      text,
      html,
      replyTo: `${payload.name} <${payload.email}>`,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Mail error:", error)
    return NextResponse.json({ error: "Failed to send lead" }, { status: 500 })
  }
}
