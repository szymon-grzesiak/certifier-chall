"use client";

import Link from "next/link";
import { Logo } from "@/components/icons";
import CustomButton from "./Button";
import { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { DialogTitle } from "@radix-ui/react-dialog";

const data = [
  {
    name: "Features",
    href: "/features",
  },
  {
    name: "Solutions",
    href: "/solutions",
  },
  {
    name: "Pricing",
    href: "/pricing",
  },
  {
    name: "Resources",
    href: "/resources",
  },
  {
    name: "Request demo",
    href: "/request-demo",
  },
  {
    name: "Log in",
    href: "/login",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full justify-between bg-transparent flex items-center h-21 mx-auto xl:px-3 px-[25px] md:px-[10%] 2xl:gap-[227px] xl:max-w-xl 2xl:max-w-none 2xl:justify-center">
      <Link href="/">
        <Logo />
      </Link>

      <div className="flex justify-center items-center gap-[35px]">
        <nav className="hidden 2xl:flex items-center justify-center">
          <ul className="flex gap-[35px]">
            {data.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  className="text-[#000] hover:text-[#0070f3] transition-colors duration-200"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <CustomButton>Get started</CustomButton>

        <Drawer open={isOpen} onOpenChange={setIsOpen}>
          <DrawerTrigger className="2xl:hidden flex flex-col justify-center items-center w-8 h-8 gap-1 transition-all duration-300">
            <span
              className={`bg-black block h-0.5 w-6 rounded-sm transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`bg-black block h-0.5 w-6 rounded-sm transition-all duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`bg-black block h-0.5 w-6 rounded-sm transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </DrawerTrigger>

          <DrawerContent className="h-[80vh]">
            <DrawerHeader className="flex items-start flex-row justify-between border-b pb-4">
              <DialogTitle className="text-2xl font-bold mb-4">
                <Logo />
              </DialogTitle>
              <DrawerClose className="flex flex-col justify-center items-center w-8 h-8 gap-1">
                <span className="bg-black block h-0.5 w-6 rounded-sm rotate-45 translate-y-1.5" />
                <span className="bg-black block h-0.5 w-6 rounded-sm opacity-0" />
                <span className="bg-black block h-0.5 w-6 rounded-sm -rotate-45 -translate-y-1.5" />
              </DrawerClose>
            </DrawerHeader>

            <div className="flex flex-col flex-1 justify-between p-6">
              <nav>
                <ul className="flex flex-col space-y-1">
                  {data.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="block px-4 py-3 text-lg text-[#000] hover:text-[#0070f3] hover:bg-gray-50 rounded-md transition-all duration-200"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
              <div className="pt-4 border-t">
                <CustomButton className="w-full">Get started</CustomButton>
              </div>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </header>
  );
}
