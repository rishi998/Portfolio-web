import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata = {
  title: "Work — Mahto Studio",
  description: "Selected architectural projects with typology filtering.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        label="Portfolio"
        title="Selected Work"
        description="Explore residential, commercial, interior, and concept projects from our active studio pipeline."
      />
      <PortfolioGrid showHeading={false} />
    </>
  );
}
