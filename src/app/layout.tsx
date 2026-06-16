import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { UtilityBar } from "@/components/layout/UtilityBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
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
      data-scroll-behavior="smooth"
      className={`${fraunces.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-dvh flex flex-col">
        <UtilityBar />
        <Navbar />
        <main className="flex-1">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
