"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import section2 from "@/assets/section-2.png";

export const GetStarted = () => {
  return (
    <div className="container mx-auto max-w-screen-lg">
      <div className="flex justify-center pb-40 pt-[140px]">
        <Image alt="section2" src={section2} />
        <div className="max-w-sm space-y-6">
          <div className="space-y-4">
            <h6 className="font-heading font-semibold uppercase text-[#586174]">
              Get Started
            </h6>
            <h3 className="font-heading text-5xl font-semibold leading-snug text-[#1C2436]">
              Start your Lemon journey here.
            </h3>
            <p className="font-sans text-base text-[#454C5F]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <Input
              type="text"
              placeholder="Your Name"
              className="h-12 rounded-none p-4 font-sans text-sm text-[#1C2436] placeholder:text-sm placeholder:text-[#818A9C]"
            />
            <Input
              type="email"
              placeholder="Company Email"
              className="h-12 rounded-none p-4 font-sans text-sm text-[#1C2436] placeholder:text-sm placeholder:text-[#818A9C]"
            />
            <Button className="mb-10 mt-6 h-12 w-full rounded-none bg-[#EBFA9E] px-6 py-[14px] font-sans text-base capitalize text-[#1C2436] hover:bg-[#EBFA9E]/90">
              Get Started <ArrowUpRight size={24} />
            </Button>
          </form>
          <p className="font-sans text-xs font-medium text-[#818A9C]">
            14 day trial – No credit card required
          </p>
        </div>
      </div>
    </div>
  );
};
