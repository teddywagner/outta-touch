import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const username = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASS;

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: username,
    pass,
  },
});

const mailOptions = {
  from: username,
  to: username,
};

export async function POST(req: NextRequest) {
  console.log("Sending email...");
  const info = await req.json();
  const {
    "first-name": firstName,
    "last-name": lastName,
    email,
    phone,
    message,
  } = info;
  try {
    await transporter.sendMail({
      ...mailOptions,
      subject:
        "Outta Touch inquiry from " +
        info["first-name"] +
        " " +
        info["last-name"],
      text: "This is a test email",
      html: `<h1>Email from ${firstName} ${lastName}</h1><p>Email: ${email}</p><p>Phone: ${phone}</p><p>Message: ${message}</p>`,
    });
    console.log("Email sent!");
    return NextResponse.json({
      status: 200,
      message: "Message sent successfully.",
    });
  } catch (e) {
    console.error(e);
    return NextResponse.json({
      status: 500,
      message: "Message failed to send.",
    });
  }
}
