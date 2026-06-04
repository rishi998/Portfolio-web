import { Hero } from "@/components/sections/Hero";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PortfolioGrid />
      <About />
      <Contact />
    </>
  );
}
