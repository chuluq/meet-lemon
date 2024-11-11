import { Header } from "@/components/header";
import { Hero } from "@/components/hero";

export default function Home() {
  return (
    <div className="bg-white selection:bg-[#EBFA9E]">
      <Header />
      <Hero />
    </div>
  );
}
