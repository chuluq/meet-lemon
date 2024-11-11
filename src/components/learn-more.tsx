import { ArrowUpRight, Box } from "lucide-react";
import { Button } from "@/components/ui/button";

export const LearnMore = () => {
  return (
    <div className="container mx-auto max-w-screen-xl">
      <div className="bg-[url('../assets/background.png')]">
        <div className="grid grid-cols-3 items-center justify-center p-12">
          <Item />
          <Item />
          <Item />
        </div>
      </div>
    </div>
  );
};

const Item = () => {
  return (
    <div className="flex flex-col items-center gap-y-6 p-12">
      <div className="w-fit bg-[#CFF2ED] p-4">
        <Box size={40} color="#2A514C" />
      </div>
      <div className="w-[272px] space-y-3">
        <h5 className="text-center font-heading text-2xl font-semibold text-white">
          Layouts
        </h5>
        <p className="text-center font-sans text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </p>
      </div>
      <Button className="bg-[#1C2436] py-3 pl-6 pr-3 font-sans">
        Learn more <ArrowUpRight size={24} color="white" />
      </Button>
    </div>
  );
};
