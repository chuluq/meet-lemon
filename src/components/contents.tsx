import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

import section1 from "@/assets/section-1.png";

export const Contents = () => {
  return (
    <div className="container mx-auto max-w-[980px]">
      <div className="flex justify-center pb-[140px] pt-[124px]">
        <div className="max-w-[440px]">
          <div className="space-y-4">
            <div className="space-y-2">
              <h6 className="font-heading font-semibold uppercase text-[#454C5F]">
                Content Section
              </h6>
              <h3 className="font-heading text-5xl font-semibold leading-snug text-[#1C2436]">
                Introduce a feature with this section.
              </h3>
            </div>
            <p className="font-sans text-lg text-[#1C2436]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <Button className="mb-10 mt-6 h-12 rounded-none bg-[#EBFA9E] px-6 py-[14px] font-sans text-base capitalize text-[#1C2436] hover:bg-[#EBFA9E]/90">
            Get Started <ArrowUpRight size={24} />
          </Button>
          <div className="space-y-[18px]">
            <p className="font-sans text-sm text-[#454C5F]">
              Add an additional detail here.
            </p>
            <div className="flex items-center gap-x-4">
              <Avatar>
                <AvatarImage
                  src="https://github.com/shadcn.png"
                  alt="@shadcn"
                />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <p className="font-sans font-medium capitalize text-[#1C2436]">
                  John Smith
                </p>
                <p className="font-sans text-sm font-medium text-[#586174]">
                  Founder @ Lemon
                </p>
              </div>
            </div>
          </div>
        </div>
        <Image src={section1} alt="section-1" />
      </div>
    </div>
  );
};
