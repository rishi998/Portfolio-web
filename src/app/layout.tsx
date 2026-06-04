import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { Navbar } from "@/components/layout/Navbar";
import { WhatsAppBubble } from "@/components/layout/WhatsAppBubble";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Puja Daksh — Architecture Portfolio",
  description:
    "Architecture & spatial design portfolio. Residential, commercial, interior and concept projects.",
  metadataBase: process.env.VERCEL_URL
    ? new URL(`https://${process.env.VERCEL_URL}`)
    : undefined,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var d=document.documentElement;var m=window.matchMedia('(prefers-color-scheme: dark)');function s(e){d.classList.toggle('dark',e.matches)}s(m);m.addEventListener('change',s)}catch(e){}})();`,
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
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
