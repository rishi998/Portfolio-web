import { Hero } from "@/components/sections/Hero";
import { StatsSection } from "@/components/sections/StatsSection";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { About } from "@/components/sections/About";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsSection />
      <FeaturedProject />
      <PortfolioGrid />
      <About />
      <ProcessTimeline />
      <Testimonials />
      <Contact />
    </>
  );
}
