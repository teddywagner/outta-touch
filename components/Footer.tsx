"use client";
import { Instagram, PhoneEnabled, EmailOutlined } from "@mui/icons-material";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex justify-end flex-col w-full bg-deep-blue text-white padding-y font-mont text-sm">
      <div className="flex-center gap-6">
        <div className="flex flex-1 justify-end">
          <Image
            src="/outoftouch.png"
            alt="Outta Touch logo"
            width={150}
            height={100}
            className="object-contain"
          />
        </div>
        <div className="border-l border-white h-32 w-[1px]"></div>
        <div className="flex-1 flex flex-col justify-end text-sm">
          <span className="text-lg">Contact</span>
          <div className="flex items-center font-[200] gap-1">
            <Instagram />
            @OUTTATOUCHBOAT
          </div>
          <div className="flex items-center font-[200] gap-1">
            <PhoneEnabled />
            214 555 1111
          </div>
          <div className="flex items-center font-[200] gap-1">
            <EmailOutlined />
            EXAMPLE@OUTTATOUCH.COM
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
