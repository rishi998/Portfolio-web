import { Contact } from "@/components/sections/Contact";
import { PageHeader } from "@/components/layout/PageHeader";

export const metadata = {
  title: "Contact — Mahto Studio",
  description: "Book a consultation, send an inquiry, or connect via WhatsApp.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        label="Connect"
        title="Contact & Booking"
        description="Schedule a consultation or reach the lead architect directly."
      />
      <Contact showHeading={false} />
    </>
  );
}
