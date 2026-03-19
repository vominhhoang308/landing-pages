import type { VercelRequest, VercelResponse } from '@vercel/node'
import nodemailer from 'nodemailer'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { email } = req.body
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'A valid email address is required.' })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
  })

  try {
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.NOTIFICATION_EMAIL || 'hoang.vo@asgar.ai',
      subject: 'New Beta Signup + GEO Guide Download',
      text: `New signup from: ${email}\n\nThis user signed up for early beta access and downloaded the GEO Strategy Guide.`,
      html: `<p><strong>New signup from:</strong> ${email}</p><p>This user signed up for early beta access and downloaded the GEO Strategy Guide.</p>`,
    })
    res.json({ success: true })
  } catch (err) {
    console.error('Email send error:', err)
    res.status(500).json({ error: 'Failed to process subscription. Please try again.' })
  }
}
