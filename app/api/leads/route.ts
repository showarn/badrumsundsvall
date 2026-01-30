import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: Request) {
  try {
    const data = await req.json()

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // TLS via STARTTLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    const message = `
Ny badrumsförfrågan – Sundsvall

Typ av projekt: ${data.projectType}
Storlek: ${data.size}
Start: ${data.timeline}
Postnummer: ${data.postalCode}

Namn: ${data.name}
Telefon: ${data.phone}

Beskrivning:
${data.description || "-"}
`

    await transporter.sendMail({
      from: process.env.SMTP_FROM,
      to: "linn@innovobygg.se",
      subject: "Ny badrumsförfrågan",
      text: message,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    console.error("Mail error:", error)
    return NextResponse.json(
      { error: "Failed to send lead" },
      { status: 500 }
    )
  }
}
