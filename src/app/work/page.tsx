import { PortfolioGrid } from "@/components/sections/PortfolioGrid";
import { PageHeader } from "@/components/layout/PageHeader";
import { STUDIO_NAME } from "@/lib/constants";

export const metadata = {
  title: `Work — ${STUDIO_NAME}`,
  description: "Selected architectural projects with typology filtering.",
};

export default function WorkPage() {
  return (
    <>
      <PageHeader
        label="Portfolio"
        title="Selected Work"
        description="Explore residential, commercial, interior, industrial, and concept projects from our active studio pipeline."
      />
      <PortfolioGrid showHeading={false} />
    </>
  );
}
