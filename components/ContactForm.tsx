"use client";

import { SubmitButton } from "@/components/index";
import { useState } from "react";
import { z } from "zod";

const contactFormSchema = z.object({
  "first-name": z.string().nonempty("Please enter your first name."),
  "last-name": z.string().nonempty("Please enter your last name."),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  message: z.string(),
});

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const submitForm = async (formData: FormData) => {
    setErrorMessage(null);
    try {
      const data = contactFormSchema.parse({
        "first-name": formData.get("first-name"),
        "last-name": formData.get("last-name"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        message: formData.get("message"),
      });

      await fetch("/api", {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      setSubmitted(true);
    } catch (e) {
      if (e instanceof z.ZodError) {
        setErrorMessage(e.issues[0].message);
      } else {
        setErrorMessage("An unknown error occurred.");
      }
    }
  };

  return (
    <div>
      {!submitted ? (
        <form action={submitForm} className="flex flex-col gap-5">
          <div className="flex flex-center">
            <h1 className="font-bold text-5xl">Get in touch</h1>
          </div>
          {errorMessage && (
            <div className="flex-center text-lg text-red-600 bg-red-900/40 rounded-sm px-2 py-1">
              {errorMessage}
            </div>
          )}
          <div className="flex flex-col sm:flex-row sm:gap-5">
            <div className="flex flex-1 flex-col gap-3">
              <label htmlFor="first-name">First name</label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                className="border-2 border-gray-300 rounded-md p-2 text-slate-950"
              />
            </div>
            <div className="flex flex-1 flex-col gap-3">
              <label htmlFor="last-name">Last name</label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                className="border-2 border-gray-300 rounded-md p-2 text-slate-950"
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="border-2 border-gray-300 rounded-md p-2 text-slate-950"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="phone">Phone number</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              className="border-2 border-gray-300 rounded-md p-2 text-slate-950"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              className="border-2 border-gray-300 rounded-md p-2 text-slate-950"
              rows={4}
            ></textarea>
          </div>
          <div className="flex-center">
            <SubmitButton />
          </div>
        </form>
      ) : (
        <div className="flex-center flex-col gap-4 ">
          <div className="font-bold text-[2.5rem]">Thank you!</div>
          <p className="text-[1.2rem]">
            We will get back to you as soon as possible.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="flex-center font-jost font-light border-2 border-gold rounded-md w-56 hover:bg-gold py-3"
          >
            SEND ANOTHER MESSAGE
          </button>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
