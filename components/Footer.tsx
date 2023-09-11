"use client";
import { EmailOutlined, Instagram, PhoneEnabled } from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { contactInfo } from "@/constants";

const Footer = () => {
  return (
    <footer className="flex justify-end flex-col w-full bg-navy text-white padding-y font-mont text-sm gap-3">
      <div className="flex-center gap-6">
        <Link href="/" className="flex flex-1 justify-end">
          <Image
            src="/outoftouch.png"
            alt="Outta Touch logo"
            width={150}
            height={100}
            className="object-contain"
          />
        </Link>
        <div className="border-l border-white h-32 w-[1px]"></div>
        <div className="flex-1 flex flex-col justify-end text-sm">
          <span className="text-lg">Contact</span>
          <div className="flex items-center font-[200] gap-1">
            <Instagram />@{contactInfo.instagram}
          </div>
          <div className="flex items-center font-[200] gap-1">
            <PhoneEnabled />
            {contactInfo.phone}
          </div>
          <div className="flex items-center font-[200] gap-1">
            <EmailOutlined />
            {contactInfo.email}
          </div>
        </div>
      </div>
      <span className="flex-center text-xs">
        Copyright &copy; 2023 Outta Touch | All Rights Reserved
      </span>
    </footer>
  );
};

export default Footer;
