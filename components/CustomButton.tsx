"use client";

import Link from "next/link";
import localFont from "next/font/local";
import { Jost } from "next/font/google";

const jost = Jost({ subsets: ["latin"] });
const aragon = localFont({ src: "../fonts/Aragon_Sans_SC_Regular.otf" });

const CustomButton = ({ title, href }: { title: string; href: string }) => {
  title = title.toUpperCase();

  return (
    <Link
      style={jost.style}
      href={href}
      className="flex-center border-2 border-gold rounded-md w-56 hover:bg-gold py-3"
    >
      <span className="flex font-light">
        {title}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="w-6 h-6"
          viewBox="0 0 16 16"
        >
          <path d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z" />
        </svg>
      </span>
    </Link>
  );
};

export default CustomButton;
