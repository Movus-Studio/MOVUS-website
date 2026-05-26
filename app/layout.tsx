import type { Metadata, Viewport } from "next";
import { Jura, Dela_Gothic_One } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FrameMask } from "@/components/layout/FrameMask";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { MotionBoot } from "@/components/layout/MotionBoot";
import { CookieBanner } from "@/components/layout/CookieBanner";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";
import { generateOrganizationSchema, generateWebSiteSchema } from "@/lib/schema";

const jura = Jura({
  variable: "--font-manrope-var",
  subsets: ["latin", "latin-ext", "greek"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const delaGothic = Dela_Gothic_One({
  variable: "--font-display-var",
  subsets: ["latin", "latin-ext", "greek"],
  display: "swap",
  weight: ["400"],
});

const HOMEPAGE_TITLE = "EMS Γυμναστήριο Πάτρα | MOVUS Fitness Studio";
const HOMEPAGE_DESCRIPTION =
  "EMS γυμναστήριο στην Πάτρα, Ιερού Λόχου 1. Συνεδρία EMS 30 λεπτών, personal training, ομαδικά. 300+ μύες σε κάθε προπόνηση.";

export const metadata: Metadata = {
  metadataBase: new URL("https://movus.gr"),
  title: {
    default: HOMEPAGE_TITLE,
    template: "%s | MOVUS",
  },
  description: HOMEPAGE_DESCRIPTION,
  keywords: [
    "EMS",
    "EMS γυμναστήριο",
    "EMS Πάτρα",
    "γυμναστήριο Πάτρα",
    "γυμναστήρια Πάτρα",
    "personal trainer Πάτρα",
    "ομαδικά Πάτρα",
    "MOVUS",
  ],
  authors: [{ name: "K₂O", url: "https://k2o.io" }],
  openGraph: {
    type: "website",
    locale: "el_GR",
    url: "https://movus.gr",
    siteName: "MOVUS",
    title: HOMEPAGE_TITLE,
    description: HOMEPAGE_DESCRIPTION,
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "MOVUS EMS Fitness Studio, Πάτρα",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: HOMEPAGE_TITLE,
    description: HOMEPAGE_DESCRIPTION,
    images: ["/og-image.jpg"],
  },
  alternates: {
    canonical: "https://movus.gr",
    languages: {
      "el-GR": "https://movus.gr",
      "x-default": "https://movus.gr",
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
  verification: {
    google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_VERIFICATION }
      : undefined,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="el"
      className={`${jura.variable} ${delaGothic.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen font-[family-name:var(--font-manrope-var)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateOrganizationSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebSiteSchema()),
          }}
        />

        {/* CSS-only mobile menu toggle. Burger is a <label htmlFor>, menu visibility
            keyed off this checkbox via html:has(#movus-menu-toggle:checked) in globals.css.
            No JavaScript dependency — works even if React hydration fails. */}
        <input type="checkbox" id="movus-menu-toggle" className="movus-menu-toggle-input" aria-hidden="true" tabIndex={-1} />

        <LoadingScreen />
        <MotionBoot />

        <a href="#main-content" className="skip-to-content">
          Μετάβαση στο περιεχόμενο
        </a>

        <SmoothScroll />

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

        {/* Fixed CTA — orange Primary Button inset inside the black Fixed Button island.
            Ports the Framer Primary Button: 3px corner radius + the TL bumped to 14px so
            the orange pill mirrors the island's rounded inner corner and the two layers
            read as one cohesive shape. Text gets a subtle skewX(-8deg) italic — a tamed
            version of Framer's skewX:15 on the original Primary Button. */}
        <div
          className="fixed right-[4px] md:right-[6px] w-[200px] md:w-[245px] h-[60px] md:h-[84px] z-[110] flex items-center justify-center pointer-events-none"
          style={{ padding: '10px 16px 16px 10px', bottom: 'env(safe-area-inset-bottom)' }}
        >
          <a
            href="https://app.movus.gr"
            target="_blank"
            rel="noopener noreferrer"
            className="group pointer-events-auto bg-movus-orange hover:bg-movus-orange-dark transition-colors w-full h-full flex items-center justify-center shadow-2xl
                       rounded-[4px] rounded-tl-[10px] md:rounded-tl-[12px]"
          >
            <span
              className="text-movus-white font-bold uppercase whitespace-nowrap text-[9px] md:text-[11px] tracking-[0.04em] transition-transform duration-300 group-hover:translate-x-[2px]"
              style={{ transform: "skewX(-8deg)" }}
            >
              ΚΛΕΙΣΕ ΤΗΝ ΠΡΩΤΗ ΣΟΥ ΣΥΝΕΔΡΙΑ
            </span>
          </a>
        </div>

        <CookieBanner />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
