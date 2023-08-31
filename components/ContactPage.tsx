"use client";
import {
  PhoneEnabledOutlined,
  EmailOutlined,
  Instagram,
} from "@mui/icons-material";
import { contactInfo } from "@/constants";
import { ContactForm } from ".";
import { useState } from "react";

interface ContactPageProps {
  landing: boolean;
}

const ContactPage = ({ landing }: ContactPageProps) => {
  const [submitted, setSubmitted] = useState<boolean>(false);
  return (
    <div
      className={`font-mont flex-center bg-img bg-[url('http://34.107.197.90/main/wide-boat.jpg')] padding-x ${
        !landing ? "pt-[112px] pb-4" : "padding-y"
      } ${submitted ? "h-[100vh]" : "h-auto"}`}
    >
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col bg-gray-100 rounded-t-md lg:rounded-l-md lg:rounded-tr-none border-gray-200 padding-x padding-y gap-5">
          <h1 className="font-bold text-[2.5rem]">Get in touch</h1>
          <p className="text-[1.2rem]">Schedule your adventure today!</p>
          <div className="flex flex-col text-gray-600 gap-4">
            <div className="flex gap-3">
              <Instagram />
              <div className="flex flex-col">
                <span>@{contactInfo.instagram}</span>
              </div>
            </div>
            <div className="flex gap-3">
              <PhoneEnabledOutlined />
              <span>{contactInfo.phone}</span>
            </div>
            <div className="flex gap-3">
              <EmailOutlined />
              <span>{contactInfo.email}</span>
            </div>
          </div>
        </div>
        <div className="backdrop-blur-3xl text-white padding-x padding-y border-gray-200 rounded-b-md lg:rounded-r-md lg:rounded-bl-none">
          {!submitted ? (
            <ContactForm setSubmitted={setSubmitted} />
          ) : (
            <div className="flex flex-col gap-4">
              <div className="font-bold text-[2.5rem]">Thank you!</div>
              <p className="text-[1.2rem]">
                We will get back to you as soon as possible.
              </p>
              <button
                className="bg-deep-blue text-white py-2 px-3 rounded-md w-fit"
                onClick={() => setSubmitted(false)}
              >
                Send another message
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
