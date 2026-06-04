import { Contact } from "@/components/sections/Contact";
import { STUDIO_NAME } from "@/lib/constants";

export const metadata = {
  title: `Contact — ${STUDIO_NAME}`,
  description: "Send a project enquiry to the studio.",
};

export default function ContactPage() {
  return <Contact />;
}
