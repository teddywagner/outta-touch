"use client";
import Image from "next/image";
import Link from "next/link";
import {
  Instagram,
  PhoneEnabled,
  EmailOutlined,
  Menu as MenuIcon,
  InfoOutlined,
  FilterOutlined,
  MessageOutlined,
} from "@mui/icons-material";
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";

const Header = () => {
  return (
    <header className="flex sm:justify-between items-center bg-gradient-radial from-faded-white w-full absolute padding-y padding-x text-white h-[7rem]">
      <div className="flex sm:flex-1 gap-5">
        <Link href="/about" className="hover:underline hidden sm:flex">
          About us
        </Link>
        <Link href="/gallery" className="hover:underline hidden sm:flex">
          Gallery
        </Link>
      </div>
      <Link href="/" className="flex justify-self-start">
        <Image
          src="/outoftouch.png"
          alt="Outta Touch logo"
          height={100}
          width={200}
          className="object-contain"
        />
      </Link>
      <div className="sm:flex flex-1 justify-end gap-3 hidden">
        <Instagram />
        <PhoneEnabled />
        <EmailOutlined />
      </div>
      <div className="flex flex-1 justify-end sm:hidden">
        <Menu as="div" className="relative inline-block text-left">
          <Menu.Button>
            <MenuIcon />
          </Menu.Button>
          <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none text-black">
            <div className="flex flex-col px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`rounded-md px-1 py-1 ${
                      active && "bg-deep-blue text-white"
                    }`}
                    href="/about"
                  >
                    <InfoOutlined />
                    <span className="ml-1">About us</span>
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`rounded-md px-1 py-1 ${
                      active && "bg-deep-blue text-white"
                    }`}
                    href="/gallery"
                  >
                    <FilterOutlined />
                    <span className="ml-1">Gallery</span>
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`rounded-md px-1 py-1 ${
                      active && "bg-deep-blue text-white"
                    }`}
                    href="/contact"
                  >
                    <MessageOutlined />
                    <span className="ml-1">Contact us</span>
                  </a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>
      </div>
    </header>
  );
};

export default Header;
