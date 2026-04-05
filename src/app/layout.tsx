import { SeoJsonLd } from "@/components/SeoJsonLd";
import { getSiteUrl } from "@/lib/site";
import type { Metadata, Viewport } from "next";
import { DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
});

const dmSansBody = DM_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Exquisite Custom Glass | Custom Showers & Railings | MA & NH",
    template: "%s | Exquisite Custom Glass",
  },
  description:
    "Custom frameless shower enclosures, glass railings, architectural mirrors, and commercial glass in Massachusetts and New Hampshire. Measured, fabricated, and installed in Haverhill, MA.",
  keywords: [
    "custom glass shower",
    "frameless shower enclosure",
    "glass railing Massachusetts",
    "glass railing New Hampshire",
    "Haverhill glass",
    "architectural glass MA",
    "custom mirrors",
    "glass partition",
  ],
  authors: [{ name: "Exquisite Custom Glass" }],
  creator: "Exquisite Custom Glass",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Exquisite Custom Glass",
    title: "Exquisite Custom Glass | MA & NH",
    description:
      "Precision glass for showers, railings, mirrors, and commercial spaces — serving Massachusetts and New Hampshire from Haverhill, MA.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Exquisite Custom Glass | MA & NH",
    description:
      "Custom glass showers, railings, and architectural glass — Massachusetts & New Hampshire.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0a1628",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfairDisplay.variable} ${dmSansBody.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <SeoJsonLd />
        {children}
      </body>
    </html>
  );
}
