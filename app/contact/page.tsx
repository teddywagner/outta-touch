"use client";

import { ContactForm } from "@/components";

const Page = () => {
  return (
    <div
      className={`flex-center bg-img bg-boat padding-x pt-28 pb-8 min-h-[90vh] `}
    >
      <div className="backdrop-blur-md text-white padding-x padding-y rounded-md">
        <ContactForm />
      </div>
    </div>
  );
};

export default Page;
