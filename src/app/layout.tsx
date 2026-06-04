import type { Metadata } from "next";
import { Playfair_Display, Manrope, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppBubble } from "@/components/layout/WhatsAppBubble";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Puja Daksh — Architecture & Spatial Design",
  description:
    "Award-caliber architecture portfolio. Luxury residential, commercial, interior and visualization projects across NCR.",
  metadataBase: process.env.VERCEL_URL
    ? new URL(`https://${process.env.VERCEL_URL}`)
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${manrope.variable} ${jetbrains.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-sand font-body antialiased text-foreground">
        <Navbar />
        <main className="min-w-0 overflow-x-hidden pt-[5.25rem] sm:pt-[5.75rem]">
          {children}
        </main>
        <Footer />
        <WhatsAppBubble />
      </body>
    </html>
  );
}
