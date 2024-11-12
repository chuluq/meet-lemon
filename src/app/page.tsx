import { Advantages } from "@/components/advantages";
import { Banner } from "@/components/banner";
import { BeautifulSites } from "@/components/beautiful-sites";
import { Blog } from "@/components/blog";
import { Contents } from "@/components/contents";
import { CTA } from "@/components/cta";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";
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
      <BeautifulSites />
      <Blog />
      <Advantages />
      <CTA />
      <Footer />
    </div>
  );
}
