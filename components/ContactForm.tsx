import { FormEvent } from "react";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });

interface ContactFormProps {
  setSubmitted: (submitted: boolean) => void;
}

const ContactForm = ({ setSubmitted }: ContactFormProps) => {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      name:
        e.currentTarget["first-name"].value +
        " " +
        e.currentTarget["last-name"].value,
      email: e.currentTarget["email"].value as string,
      phone: e.currentTarget["phone"].value as string,
      message: e.currentTarget["message"].value,
    };

    const res = await fetch("/api/submit-form", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      setSubmitted(true);
    } else {
      console.log("error");
    }
  };

  return (
    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
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
        <button
          style={jost.style}
          className="flex-center border-2 border-gold rounded-md w-56 hover:bg-gold py-3"
        >
          <span className="flex font-light">SEND MESSAGE</span>
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
