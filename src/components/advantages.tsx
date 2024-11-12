import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export const Advantages = () => {
  return (
    <div className="container mx-auto max-w-[920px]">
      <div className="grid grid-cols-2 items-center justify-center gap-x-10 pb-32 pt-40">
        <div className="space-y-6">
          <div className="max-w-[440px] space-y-4">
            <div className="space-y-2">
              <h6 className="font-heading font-semibold uppercase text-[#586174]">
                Content Section
              </h6>
              <h3 className="font-heading text-5xl font-semibold leading-snug text-[#1C2436]">
                Build beautiful sites without the stress.
              </h3>
            </div>
            <p className="font-sans text-base text-[#454C5F]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <Button className="mb-10 mt-6 h-12 rounded-none bg-[#EBFA9E] px-6 py-[14px] font-sans text-base capitalize text-[#1C2436] hover:bg-[#EBFA9E]/90">
            Get Started <ArrowUpRight size={24} />
          </Button>
        </div>
        <div className="flex max-w-[440px] flex-col gap-y-14">
          <div className="flex h-16 w-full items-center gap-x-6">
            <div className="flex size-16 items-center justify-center gap-4 bg-[#F2DDCF]">
              <p className="font-heading text-2xl font-semibold text-[#51392A]">
                1
              </p>
            </div>
            <p className="w-full font-sans text-lg text-[#1C2436]">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className="flex h-16 w-full items-center gap-x-6">
            <div className="flex size-16 items-center justify-center gap-4 bg-[#cff2ed]">
              <p className="font-heading text-2xl font-semibold text-[#2a512a]">
                2
              </p>
            </div>
            <p className="w-full font-sans text-lg text-[#1C2436]">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className="flex h-16 w-full items-center gap-x-6">
            <div className="flex size-16 items-center justify-center gap-4 bg-[#e6cff2]">
              <p className="font-heading text-2xl font-semibold text-[#432a51]">
                3
              </p>
            </div>
            <p className="w-full font-sans text-lg text-[#1C2436]">
              Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
