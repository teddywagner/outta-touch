"use client";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

const SubmitButton = () => {
  const { pending } = useFormStatus();

  return (
    <button
      className="flex-center font-jost font-light border-2 border-gold rounded-md w-56 hover:bg-gold py-3"
      disabled={pending}
    >
      {pending ? "SENDING..." : "SEND MESSAGE"}
    </button>
  );
};
export default SubmitButton;
