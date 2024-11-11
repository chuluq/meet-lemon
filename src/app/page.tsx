import { Banner } from "@/components/banner";
import { Features } from "@/components/features";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <div className="bg-white selection:bg-[#EBFA9E]">
      <Banner />
      <Header />
      <Hero />
      <Features />
      <div className="pb-[140px] pt-[124px]">lll</div>
    </div>
  );
}
