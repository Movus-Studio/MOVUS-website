import type { Metadata } from "next";
import Link from "next/link";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Επικοινωνία",
  description:
    "Επικοινώνησε μαζί μας ή επισκέψου μας στην Ιερού Λόχου 1, Πάτρα. Τηλ: +30 2610 000 000. Δευ-Παρ 09:00-21:00.",
  openGraph: {
    title: "Επικοινωνία | MOVUS",
    description:
      "Επικοινώνησε μαζί μας ή επισκέψου μας στην Πάτρα.",
  },
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Αρχική", url: "https://movus.gr" },
              { name: "Επικοινωνία", url: "https://movus.gr/contact" },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-movus-black pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-medium-gray">
              <li>
                <Link href="/" className="hover:text-movus-white transition-colors">
                  Αρχική
                </Link>
              </li>
              <li>/</li>
              <li className="text-movus-white">Επικοινωνία</li>
            </ol>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.02em] text-movus-white mb-4">
            Επικοινωνία
          </h1>
          <p className="text-xl text-medium-gray max-w-2xl">
            Στείλε μας μήνυμα ή επισκέψου μας. Θα χαρούμε να σε γνωρίσουμε.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <div>
              <h2 className="text-2xl font-bold text-movus-navy mb-6">
                Στείλε μας μήνυμα
              </h2>
              <ContactForm />
            </div>

            {/* Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-movus-navy mb-6">
                  Στοιχεία επικοινωνίας
                </h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-movus-orange-light text-movus-orange flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-movus-navy">Διεύθυνση</p>
                      <p className="text-dark-gray">Ιερού Λόχου 1, Πάτρα 26221</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-movus-orange-light text-movus-orange flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-movus-navy">Τηλέφωνο</p>
                      <a
                        href="tel:+302610000000"
                        className="text-dark-gray hover:text-movus-orange transition-colors"
                      >
                        +30 2610 000 000
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-movus-orange-light text-movus-orange flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-movus-navy">Email</p>
                      <a
                        href="mailto:info@movus.gr"
                        className="text-dark-gray hover:text-movus-orange transition-colors"
                      >
                        info@movus.gr
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-movus-orange-light text-movus-orange flex items-center justify-center flex-shrink-0">
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-movus-navy">Ωράριο</p>
                      <p className="text-dark-gray">Δευ-Παρ: 09:00–21:00</p>
                      <p className="text-dark-gray">Σάβ: 09:00–17:00</p>
                      <p className="text-dark-gray">Κυρ: Κλειστά</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-xl overflow-hidden border border-light-gray h-[280px] bg-light-gray flex items-center justify-center text-medium-gray text-sm">
                [Google Maps Embed — Ιερού Λόχου 1, Πάτρα]
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
