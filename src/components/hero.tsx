import Image from "next/image";
import { ArrowUpRight, Star } from "lucide-react";

import { Button } from "@/components/ui/button";

import hero from "@/assets/hero.png";

export const Hero = () => {
  return (
    <div className="container mx-auto flex max-w-[980px] gap-x-[70px] pb-32 pt-20">
      <div className="max-w-[404px] space-y-9">
        <div className="space-y-7">
          <div className="space-y-2">
            <h6 className="font-heading font-semibold uppercase text-[#454C5F]">
              Meet Lemon
            </h6>
            <h1 className="font-heading text-7xl font-semibold text-[#1C2436]">
              Build a better site for your business.
            </h1>
          </div>
          <p className="font-sans text-lg text-[#1C2436]">
            [short description here] blorem blipsum dolor sit bamat minim mollit
            non deserunt ullamco lorem ipsum.
          </p>
        </div>
        <div className="flex items-center gap-x-4">
          <Button className="h-14 rounded-none bg-[#EBFA9E] px-8 py-[18px] font-sans text-base capitalize text-[#454C5F] hover:bg-[#EBFA9E]/90">
            buy lemon
          </Button>
          <Button
            variant="outline"
            className="size-14 rounded-none border-[#E8E7EE] p-4"
          >
            <ArrowUpRight size={24} color="#1C2436" />
          </Button>
          <Button
            variant="ghost"
            className="p-0 font-sans text-[#1C2436] hover:bg-transparent"
          >
            Or view in Designer
          </Button>
        </div>
        <div className="flex items-center gap-x-3">
          <div className="flex size-6 items-center justify-center bg-[#EBFA9E]">
            <Star size={14} color="#2A514C" fill="#2A514C" />
          </div>
          <p className="font-sans font-normal text-[#454C5F]">
            Rated <span className="font-medium">4.9/5</span> from over{" "}
            <span className="font-medium">600</span> reviews.
          </p>
        </div>
      </div>
      <Image src={hero} alt="hero" />
    </div>
  );
};
