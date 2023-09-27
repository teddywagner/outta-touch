"use client";
import { ContactForm } from ".";
import { useState } from "react";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  return (
    <div className={`flex-center bg-img bg-boat padding-x py-28 min-h-screen`}>
      <div className="backdrop-blur-md text-white padding-x padding-y rounded-md">
        {!submitted ? (
          <ContactForm setSubmitted={setSubmitted} />
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

export default ContactPage;
