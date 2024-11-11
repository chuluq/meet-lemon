import Image from "next/image";

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
          <button className="bg-[#EBFA9E] px-8 py-[18px] font-sans font-medium capitalize text-[#454C5F]">
            buy lemon
          </button>
          <button className="border border-[#E8E7EE] p-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6 stroke-[#1C2436]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </button>
          <button className="font-sans text-sm font-medium text-[#1C2436]">
            Or view in Designer
          </button>
        </div>
        <div className="flex items-center gap-x-3">
          <div className="flex size-6 items-center justify-center bg-[#EBFA9E]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 fill-[#2A514C]"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
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
