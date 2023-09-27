"use client";
import { handleSubmit } from "./actions";
import { SubmitButton } from "@/components";
import { useState } from "react";

const Page = () => {
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [submitted, setSubmitted] = useState<boolean>(false);

  async function onSubmit(formData: FormData) {
    const response = await handleSubmit(formData);
  }

  return (
    <div className={`flex-center bg-img bg-boat padding-x py-8 min-h-[90vh]`}>
      <div className="backdrop-blur-md text-white padding-x padding-y rounded-md">
        {!submitted ? (
          <form action={onSubmit} className="flex flex-col gap-5">
            <div className="flex flex-center">
              <h1 className="font-bold text-[2.5rem]">Get in touch</h1>
            </div>
            <div className="flex flex-col sm:flex-row sm:gap-5">
              <div className="flex flex-1 flex-col gap-3">
                <label htmlFor="first-name">First name</label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="border-2 border-gray-300 rounded-md p-2 text-slate-950"
                  required
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
                required
              />
            </div>
            <div className="flex flex-col gap-3">
              <label htmlFor="phone">Phone number</label>
              <input
                type="tel"
                name="phone"
                id="phone"
                className="border-2 border-gray-300 rounded-md p-2 text-slate-950"
                required
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
          <div className="flex flex-col gap-4">
            <div className="font-bold text-[2.5rem]">Thank you!</div>
            <p className="text-[1.2rem]">
              We will get back to you as soon as possible.
            </p>
            <button
              className="bg-navy text-white py-2 px-3 rounded-md w-fit"
              onClick={() => setSubmitted(false)}
            >
              Send another message
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
