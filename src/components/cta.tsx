"use client";

import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const CTA = () => {
  return (
    <div className="container mx-auto max-w-screen-xl">
      <div className="flex items-center gap-x-32 bg-[#ebfa9e] px-36 py-16">
        <h3 className="max-w-[483px] font-heading text-[40px] font-semibold text-[#2A514C]">
          Add your own details to this call to action and inform your viewers.
        </h3>
        <div className="b flex w-full flex-col space-y-5">
          <Input
            type="email"
            placeholder="Email address"
            className="w-full rounded-none border-[#2a514c] p-5 font-sans text-[#1C2436] placeholder:text-[#42766F]"
          />
          <Button className="mb-10 mt-6 h-12 w-full rounded-none bg-black px-6 py-[14px] font-sans text-base capitalize text-white hover:bg-black/90">
            Get Started <ArrowUpRight size={24} />
          </Button>
        </div>
      </div>
    </div>
  );
};
