import Image from "next/image";
import { Dribbble, Facebook, Instagram, Twitter } from "lucide-react";

import { Separator } from "@/components/ui/separator";

import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="container mx-auto max-w-screen-xl">
      <div className="flex flex-col gap-12 py-20">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-[18px]">
            <Image src={logo} alt="logo" />
            <h6 className="font-sans text-sm text-[#1C2436]">Meet Lemon</h6>
          </div>
          <div className="flex items-center space-x-8">
            <p className="font-sans text-sm text-[#1C2436]">Overview</p>
            <p className="font-sans text-sm text-[#1C2436]">Home</p>
            <p className="font-sans text-sm text-[#1C2436]">Template</p>
          </div>
        </div>
        <Separator color="#d7d7d7" />
        <div className="flex items-center justify-between">
          <p className="font-sans text-sm text-[#1C2436]">
            © Template by Flowbase - Powered by Webflow
          </p>
          <div className="flex items-center space-x-4">
            <div className="flex size-11 items-center justify-center border border-[#1C2436]">
              <Facebook size={20} fill="#1C2436" />
            </div>
            <div className="flex size-11 items-center justify-center border border-[#1C2436]">
              <Twitter size={20} fill="#1C2436" />
            </div>
            <div className="flex size-11 items-center justify-center border border-[#1C2436]">
              <Instagram size={20} />
            </div>
            <div className="flex size-11 items-center justify-center border border-[#1C2436]">
              <Dribbble size={20} />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
