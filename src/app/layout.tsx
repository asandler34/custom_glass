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
    default: "Custom Glass Shower Doors in Haverhill MA | Exquisite Custom Glass",
    template: "%s | Exquisite Custom Glass",
  },
  description:
    "Custom frameless shower doors and glass shower door installation in Haverhill, MA. Serving North Shore MA, Seacoast NH, and Boston within a 36-mile radius.",
  keywords: [
    "custom glass shower doors haverhill ma",
    "frameless shower doors haverhill",
    "glass shower door installation haverhill",
    "custom shower glass near me",
    "frameless shower door installation near me",
    "glass shower doors Andover MA",
    "glass shower doors North Andover",
    "glass shower doors Methuen MA",
    "glass shower doors Lawrence MA",
    "glass shower doors Salem NH",
    "glass shower doors Plaistow NH",
  ],
  authors: [{ name: "Exquisite Custom Glass" }],
  creator: "Exquisite Custom Glass",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Exquisite Custom Glass",
    title: "Custom Glass Shower Doors in Haverhill MA | Exquisite Custom Glass",
    description:
      "Frameless shower doors and custom shower glass installation from Haverhill, MA across North Shore MA, Seacoast NH, and Boston.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Glass Shower Doors in Haverhill MA",
    description:
      "Custom frameless shower doors in Haverhill, MA with a 36-mile service radius.",
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
