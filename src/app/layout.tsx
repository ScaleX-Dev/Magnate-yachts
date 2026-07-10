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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://magnateyachts.com";

const defaultDescription =
  "Sri Lanka's leading sailing yacht agent. Port clearance in Galle & Trincomalee, guided land tours, and everything your crew needs from anchor down to sail out.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Magnate Yachts — Sri Lanka Yacht Clearance & Tours",
    template: "%s | Magnate Yachts",
  },
  description: defaultDescription,
  keywords: [
    "Sri Lanka yacht clearance",
    "Galle port clearance",
    "Trincomalee yacht clearance",
    "sailing Sri Lanka",
    "yacht agent Sri Lanka",
    "sailing tours Sri Lanka",
    "Sri Lanka sailing",
    "yacht agent Galle",
    "yacht clearance agent",
    "Sri Lanka port clearance",
    "Galle harbour yacht",
    "sailing to Sri Lanka",
    "Sri Lanka cruising guide",
    "yacht tours Sri Lanka",
    "land tours Galle",
    "Yala safari from Galle",
    "sailing Indian Ocean",
    "Magnate Yachts",
    "Achintha Hewagamage",
    "SLPA registered yacht agent",
  ],
  authors: [{ name: "Magnate Yachts", url: siteUrl }],
  creator: "Magnate Yachts",
  publisher: "Magnate Yachts",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Magnate Yachts",
    title: "Magnate Yachts — Sri Lanka Yacht Clearance & Tours",
    description: defaultDescription,
    images: [
      {
        url: "/images/site/hero-main.jpg",
        width: 1200,
        height: 630,
        alt: "Magnate Yachts — Sri Lanka yacht clearance and sailing tours from Galle",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Magnate Yachts — Sri Lanka Yacht Clearance & Tours",
    description: defaultDescription,
    images: ["/images/site/hero-main.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TravelAgency",
      "@id": `${siteUrl}/#organization`,
      name: "Magnate Yachts",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/icon.svg`,
      },
      description:
        "Sri Lanka's leading sailing yacht agent — port clearance in Galle and Trincomalee, guided land tours, and complete crew support.",
      telephone: "+94769850115",
      email: "info@magnateyachts.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Galle",
        addressCountry: "LK",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: "6.0535",
        longitude: "80.2210",
      },
      areaServed: ["Galle, Sri Lanka", "Trincomalee, Sri Lanka", "Sri Lanka"],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Magnate Yachts Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Yacht Port Clearance — Galle",
              description:
                "Full immigration, customs, and port authority clearance for yachts arriving at Galle Harbour, Sri Lanka.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Yacht Port Clearance — Trincomalee",
              description:
                "Full immigration, customs, and port authority clearance for yachts arriving at Trincomalee, Sri Lanka.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Sri Lanka Land Tours for Sailors",
              description:
                "Private guided land tours from Galle including Yala safari, Galle Fort, hill country, and multi-day itineraries.",
            },
          },
        ],
      },
      sameAs: ["https://wa.me/94769850115"],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Magnate Yachts",
      description: defaultDescription,
      publisher: { "@id": `${siteUrl}/#organization` },
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
