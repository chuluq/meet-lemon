import { SquareDashedMousePointer } from "lucide-react";

import { Separator } from "@/components/ui/separator";

const Features = () => {
  return (
    <div className="container mx-auto">
      <div className="flex items-center justify-center">
        <Feature />
        <Feature />
        <Feature />
      </div>
    </div>
  );
};

const Feature = () => {
  return (
    <div className="flex h-[82px] w-[354px] items-center gap-x-6 border border-[#E8E7EE] pl-4 pr-16">
      <SquareDashedMousePointer size={32} color="#BFE03E" />
      <Separator orientation="vertical" />
      <p className="max-w-44 font-sans text-sm text-[#454C5F]">
        Lorem ipsum dolor sit amet consectetur.
      </p>
    </div>
  );
};

export { Features };
