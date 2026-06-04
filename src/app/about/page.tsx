import { About } from "@/components/sections/About";
import { PageHeader } from "@/components/layout/PageHeader";
import { STUDIO_NAME } from "@/lib/constants";

export const metadata = {
  title: `About — ${STUDIO_NAME}`,
  description: "Design philosophy, credentials, and spatial approach.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        label="Studio"
        title="About & Philosophy"
        description="Editorial minimalist practice rooted in technical documentation and spatial clarity."
      />
      <About />
    </>
  );
}
