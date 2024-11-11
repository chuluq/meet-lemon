import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

import logo from "@/assets/logo.png";

export const Header = () => {
  return (
    <header className="border-b border-[#F6F6F9]">
      <div className="container mx-auto flex max-w-screen-xl items-center justify-between">
        <nav className="flex items-center gap-x-8 py-6">
          <Link href="/">
            <Image src={logo} alt="logo" />
          </Link>
          <ul className="flex items-center gap-x-10">
            <li>
              <Link
                href="#"
                className="font-sans text-sm font-medium capitalize text-[#1C2436]"
              >
                Overview
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="font-sans text-sm font-medium capitalize text-[#1C2436]"
              >
                Pages
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="font-sans text-sm font-medium capitalize text-[#1C2436]"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="font-sans text-sm font-medium capitalize text-[#1C2436]"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <Button
          variant="outline"
          className="rounded-none border border-[#E8E7EE] px-6 py-3 font-sans text-sm font-semibold capitalize text-[#1C2436] hover:bg-[#EBFA9E]"
        >
          Purchase Now
        </Button>
      </div>
    </header>
  );
};
