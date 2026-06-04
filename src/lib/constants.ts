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
  "All",
  "Residential",
  "Commercial",
  "Interior",
  "Concept",
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
