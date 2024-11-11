import { Banner } from "@/components/banner";
import { Contents } from "@/components/contents";
import { Features } from "@/components/features";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { LearnMore } from "@/components/learn-more";

export default function Home() {
  return (
    <div className="bg-white selection:bg-[#EBFA9E]">
      <Banner />
      <Header />
      <Hero />
      <Features />
      <Contents />
      <LearnMore />
    </div>
  );
}
