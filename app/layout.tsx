import type { Metadata } from "next";
import { Jura, Dela_Gothic_One } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FrameMask } from "@/components/layout/FrameMask";
import { SmoothScroll } from "@/components/layout/SmoothScroll";
import { LoadingScreen } from "@/components/layout/LoadingScreen";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://movus.gr"),
  title: {
    default: "MOVUS, EMS Fitness Studio | Πάτρα",
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
    title: "MOVUS, EMS Fitness Studio | Πάτρα",
    description:
      "Το premium EMS γυμναστήριο της Πάτρας. 20 λεπτά EMS = 4 ώρες παραδοσιακής προπόνησης.",
  },
  twitter: {
    card: "summary_large_image",
    title: "MOVUS, EMS Fitness Studio | Πάτρα",
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
    <html lang="el" className={`${jura.variable} ${delaGothic.variable} antialiased`}>
      <body className="min-h-screen font-[family-name:var(--font-manrope-var)]">
        <LoadingScreen />

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
          className="fixed bottom-0 right-[4px] md:right-[6px] w-[200px] md:w-[245px] h-[60px] md:h-[84px] z-[110] flex items-center justify-center pointer-events-none"
          style={{ padding: '10px 16px 16px 10px' }}
        >
          <a
            href="https://booking.movus.gr"
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
      </body>
    </html>
  );
}
