"use server";

import { z } from "zod";

export const contactFormSchema = z.object({
  "first-name": z.string().nonempty("Please enter your first name."),
  "last-name": z.string().nonempty("Please enter your last name."),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  message: z.string(),
});

export async function submitContactForm(formData: FormData) {
  const data = contactFormSchema.parse({
    "first-name": formData.get("first-name"),
    "last-name": formData.get("last-name"),
    email: formData.get("email"),
    phone: formData.get("phone"),
    message: formData.get("message"),
  });

  return await fetch("/api", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
}
