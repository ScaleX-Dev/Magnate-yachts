import type { Metadata } from "next";
import { Cinzel, Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import { UtilityBar } from "@/components/layout/UtilityBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { MobileCtaBar } from "@/components/layout/MobileCtaBar";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Magnate Yachts — Sri Lanka Yacht Clearance & Tours",
    template: "%s | Magnate Yachts",
  },
  description:
    "Sri Lanka's leading sailing yacht agent. Port clearance in Galle & Trincomalee, guided land tours, and everything your crew needs from anchor down to sail out.",
  keywords: ["Sri Lanka yacht", "Galle port clearance", "sailing Sri Lanka", "yacht agent Sri Lanka", "sailing tours Sri Lanka"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Magnate Yachts",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${cormorant.variable} ${dmSans.variable} antialiased`}
    >
      <body className="min-h-dvh flex flex-col bg-[var(--color-midnight)]">
        <UtilityBar />
        <Navbar />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
        {/* Spacer so footer content isn't hidden behind mobile sticky bar */}
        <div className="h-14 lg:hidden" aria-hidden="true" />
        <MobileCtaBar />
      </body>
    </html>
  );
}
