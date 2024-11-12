import { Banner } from "@/components/banner";
import { Contents } from "@/components/contents";
import { Features } from "@/components/features";
import { GetStarted } from "@/components/get-started";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { LearnMore } from "@/components/learn-more";
import { Review } from "@/components/review";

export default function Home() {
  return (
    <div className="bg-white selection:bg-[#EBFA9E]">
      <Banner />
      <Header />
      <Hero />
      <Features />
      <Contents />
      <LearnMore />
      <GetStarted />
      <Review />
    </div>
  );
}
