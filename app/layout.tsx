import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FrameMask } from "@/components/layout/FrameMask";

const workSans = Work_Sans({
  variable: "--font-work-sans-var",
  subsets: ["latin", "latin-ext"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://movus.gr"),
  title: {
    default: "MOVUS — EMS Fitness Studio | Πάτρα",
    template: "%s | MOVUS",
  },
  description:
    "Το premium EMS γυμναστήριο της Πάτρας. 20 λεπτά EMS = 4 ώρες παραδοσιακής προπόνησης. Κλείσε δοκιμαστικό σήμερα.",
  keywords: [
    "EMS",
    "EMS γυμναστήριο",
    "EMS Πάτρα",
    "ηλεκτρομυοδιέγερση",
    "i-Motion",
    "MOVUS",
    "γυμναστήριο Πάτρα",
    "fitness Πάτρα",
  ],
  authors: [{ name: "K₂O", url: "https://k2o.io" }],
  openGraph: {
    type: "website",
    locale: "el_GR",
    url: "https://movus.gr",
    siteName: "MOVUS",
    title: "MOVUS — EMS Fitness Studio | Πάτρα",
    description:
      "Το premium EMS γυμναστήριο της Πάτρας. 20 λεπτά EMS = 4 ώρες παραδοσιακής προπόνησης.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MOVUS — EMS Fitness Studio | Πάτρα",
    description:
      "Το premium EMS γυμναστήριο της Πάτρας. 20 λεπτά EMS = 4 ώρες παραδοσιακής προπόνησης.",
  },
  alternates: {
    canonical: "https://movus.gr",
    languages: {
      el: "https://movus.gr",
    },
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="el" className={`${workSans.variable} antialiased`}>
      <body className="min-h-screen font-[family-name:var(--font-work-sans-var)]">
        <a href="#main-content" className="skip-to-content">
          Μετάβαση στο περιεχόμενο
        </a>

        {/* Dynamic Curved Cutout Frame Mask */}
        <FrameMask />

        {/* Content wrapper */}
        <div className="relative min-h-screen">
          <Navbar />
          <main id="main-content">
            {children}
          </main>
          <Footer />
        </div>

        {/* Fixed CTA - Positioned absolutely to identically match the Bottom-Right Island bounding box */}
        <div 
          className="fixed bottom-0 right-0 w-[205px] md:w-[220px] h-[72px] md:h-[76px] z-[110] flex items-center justify-center pointer-events-none transition-all"
          style={{ padding: '0px 12px 12px 0px' }} /* Push content toward center of the visual pill avoiding the bottom border */
        >
          <a
            href="https://booking.movus.gr"
            target="_blank"
            rel="noopener noreferrer"
            className="pointer-events-auto btn-primary !rounded-full !text-[11px] md:!text-xs !py-3 md:!py-3.5 !px-5 md:!px-6 shadow-2xl hover:scale-105 transition-transform whitespace-nowrap"
          >
            ΞΕΚΙΝΑ ΠΡΟΠΟΝΗΣΗ
          </a>
        </div>
      </body>
    </html>
  );
}
