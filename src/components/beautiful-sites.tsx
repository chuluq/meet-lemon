import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

import section3 from "@/assets/section-3.png";

export const BeautifulSites = () => {
  return (
    <div className="container mx-auto max-w-screen-lg">
      <div className="flex justify-center py-40">
        <div className="max-w-[440px] space-y-6">
          <div className="space-y-4">
            <h6 className="font-heading font-semibold uppercase text-[#586174]">
              Content Section
            </h6>
            <h3 className="font-heading text-5xl font-semibold leading-snug text-[#1C2436]">
              Build beautiful sites without the stress.
            </h3>
            <p className="font-sans text-base text-[#454C5F]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="flex h-[108px] items-center gap-x-7 border border-[#E8E7EE] p-6">
            <div className="flex items-center gap-x-3">
              <h4 className="font-heading text-[40px] font-semibold text-[#020E27]">
                100<span className="text-[#BFE03E]">+</span>
              </h4>
              <p className="font-sans text-sm font-medium capitalize text-[#1C2436]">
                Successfull Projects
              </p>
            </div>
            <Separator orientation="vertical" color="#E8E7EE" />
            <div className="flex items-center gap-x-3">
              <h4 className="font-heading text-[40px] font-semibold text-[#020E27]">
                39<span className="text-[#BFE03E]">+</span>
              </h4>
              <p className="font-sans text-sm font-medium capitalize text-[#1C2436]">
                Successfull Projects
              </p>
            </div>
          </div>
          <Button className="mb-10 mt-6 h-12 w-full rounded-none bg-[#EBFA9E] px-6 py-[14px] font-sans text-base capitalize text-[#1C2436] hover:bg-[#EBFA9E]/90">
            Get Started <ArrowUpRight size={24} />
          </Button>
        </div>
        <Image src={section3} alt="section-3" />
      </div>
    </div>
  );
};
