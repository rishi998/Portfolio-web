export const STUDIO_NAME = "Puja Daksh";
export const STUDIO_TAGLINE = "Architecture & Spatial Design";

export const WHATSAPP_NUMBER = "917701864514";
export const WHATSAPP_MESSAGE = "hi";
export const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

export const NAV_LINKS = [
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const FILTER_TABS = [
  { id: "All", label: "All Projects" },
  { id: "Residential", label: "Residential" },
  { id: "Commercial", label: "Commercial" },
  { id: "Interior", label: "Interior" },
  { id: "Hospitality", label: "Hospitality" },
  { id: "Visualization", label: "Visualization" },
] as const;

export type FilterId = (typeof FILTER_TABS)[number]["id"];

/** Hospitality project IDs */
export const HOSPITALITY_IDS = new Set([
  "spa-wellness-interior",
  "spa-mezzanine-layout",
  "club-front-commercial",
]);

export const STUDIO_STATS = [
  { value: 15, suffix: "+", label: "Projects Delivered" },
  { value: 8, suffix: "+", label: "Cities & Corridors" },
  { value: 120, suffix: "+", label: "Design Consultations" },
  { value: 6, suffix: "+", label: "Years of Practice" },
] as const;

export const HERO_STATS = [
  { label: "Years", value: "6+" },
  { label: "Projects", value: "15+" },
  { label: "Expertise", value: "NCR · Interior · Residential" },
] as const;

export const PROCESS_STEPS = [
  {
    step: "01",
    title: "Discovery",
    detail: "Site context, program brief, and spatial aspirations.",
  },
  {
    step: "02",
    title: "Concept",
    detail: "Massing studies, zoning logic, and design direction.",
  },
  {
    step: "03",
    title: "Design Development",
    detail: "Plans, sections, MEP coordination, documentation sets.",
  },
  {
    step: "04",
    title: "Visualization",
    detail: "Renders, walkthroughs, and client presentation boards.",
  },
  {
    step: "05",
    title: "Execution Support",
    detail: "Shop drawings, as-built surveys, and site alignment.",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote:
      "Puja translated our wellness program into a spatial experience that feels calm, premium, and technically flawless.",
    name: "SPA Wellness Client",
    project: "Interior · Hospitality",
  },
  {
    quote:
      "The Sector 105 documentation set was delivered with exceptional clarity — zoning, furniture, and washroom layouts aligned perfectly.",
    name: "Residential Developer",
    project: "Residential · Noida",
  },
  {
    quote:
      "From Worldmark office fit-out to airport precinct studies, every drawing reflected architectural rigor and editorial presentation.",
    name: "Commercial Partner",
    project: "Commercial · NCR",
  },
] as const;

export const OFFICE_HOURS = [
  { day: "Mon – Fri", hours: "09:00 – 18:00" },
  { day: "Saturday", hours: "10:00 – 14:00" },
  { day: "Sunday", hours: "By appointment" },
];

export const OFFICE_LOCATION = {
  address: "Noida Sector 105, Uttar Pradesh",
  coordinates: "28.5355° N, 77.3910° E",
};
