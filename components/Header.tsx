"use client";
import Image from "next/image";
import { Instagram, PhoneEnabled, EmailOutlined } from "@mui/icons-material";

const Header = () => {
  return (
    <header className="flex-between bg-gradient-radial from-faded-white w-full absolute padding-y padding-x text-white h-[7rem]">
      <div className="flex flex-1 gap-5">
        <div className="">About us</div>
        <div>Gallery</div>
      </div>
      <Image
        src="/outoftouch.png"
        alt="Outta Touch logo"
        height={100}
        width={200}
        className="object-contain"
      />
      <div className="flex flex-1 justify-end gap-3">
        Contact us
        <Instagram />
        <PhoneEnabled />
        <EmailOutlined />
      </div>
    </header>
  );
};

export default Header;
