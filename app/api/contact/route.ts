import ContactEmail from "@/email"
import { render } from "@react-email/render"
import { NextRequest } from "next/server"
import nodemailer from "nodemailer"
import Mail from "nodemailer/lib/mailer"
import { ReactElement } from "react"

export async function POST(req: NextRequest) {
  const body = await req.json()

  const { name, email, message, subject } = body

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  })

  const emailHtml = render(
    ContactEmail({email, name, subject, message}) as ReactElement
  )

  const mailOptions: Mail.Options = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: subject,
    replyTo: email,
    html: emailHtml,
  }

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          reject(error)
        } else {
          resolve(info.response)
        }
      })
    })

  try {
    await sendMailPromise()
    return new Response("Email sent", { status: 200 })
  } catch (error) {
    console.error(error)
    return new Response("Error sending email", { status: 500 })
  }
}
