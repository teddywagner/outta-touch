"use server";
import nodemailer from "nodemailer";

export async function handleSubmit(formData: FormData) {
  const user = process.env.USER;
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user,
      pass: process.env.PASS,
    },
  });

  // try {
  //   const mail = await transporter.sendMail({
  //     from: user,
  //     to: "twagner981@gmail.com",
  //     replyTo: formData.get("email"),
  //     subject: `Message from ${formData.get("name")}`,
  //     html: `
  //     <p> ${formData.get("message")} </p>
  //     <p> ${formData.get("name")} </p>
  //     <p> ${formData.get("email")} </p>
  //     `,
  //   });
  // } catch (e) {
  //   console.log(e);
  //   return { status: 500, message: "Could not send email" };
  // }
}
