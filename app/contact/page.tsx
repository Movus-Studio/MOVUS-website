import type { Metadata } from "next";
import Link from "next/link";
import { siteContact, siteCopy } from "@/content/site";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { ContactForm } from "./ContactForm";

export const metadata: Metadata = {
  title: "Επικοινωνία",
  description: `Επικοινώνησε μαζί μας ή επισκέψου μας στην ${siteContact.address.full}. Τηλ: ${siteContact.phoneDisplay}.`,
  openGraph: {
    title: "Επικοινωνήστε με το MOVUS Πάτρα | Κλείστε Ραντεβού",
    description:
      "Ενδιαφέρεστε για τα προγράμματά μας; Στείλτε μας τα στοιχεία σας και θα επικοινωνήσουμε σύντομα μαζί σας!",
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

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.02em] text-movus-white mb-6 leading-[0.95]">
            Είμαστε εδώ για να
            <br />
            <span className="text-movus-orange">
              απαντήσουμε στις ερωτήσεις σας
            </span>
          </h1>
          <p className="text-xl text-medium-gray max-w-2xl leading-relaxed">
            Ενδιαφέρεστε για τα προγράμματά μας; Στείλτε μας τα στοιχεία σας και θα
            επικοινωνήσουμε σύντομα μαζί σας! Ελάτε στο MOVUS, το κορυφαίο EMS
            γυμναστήριο στην Πάτρα, και γνωρίστε το μέλλον της φυσικής κατάστασης!
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
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-movus-navy">Διεύθυνση</p>
                      <p className="text-dark-gray">{siteContact.address.full}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-movus-orange-light text-movus-orange flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-movus-navy">Τηλέφωνο</p>
                      <a
                        href={`tel:${siteContact.phoneHref}`}
                        className="text-dark-gray hover:text-movus-orange transition-colors"
                      >
                        {siteContact.phoneDisplay}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-movus-orange-light text-movus-orange flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-movus-navy">Email</p>
                      <a
                        href={`mailto:${siteContact.email}`}
                        className="text-dark-gray hover:text-movus-orange transition-colors"
                      >
                        {siteContact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-movus-orange-light text-movus-orange flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-movus-navy">Ωράριο</p>
                      <p className="text-dark-gray">{siteContact.hours.weekdaysDisplay}</p>
                      <p className="text-dark-gray">{siteContact.hours.saturdayDisplay}</p>
                      <p className="text-dark-gray">{siteContact.hours.sundayDisplay}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-movus-orange-light text-movus-orange flex items-center justify-center flex-shrink-0">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-semibold text-movus-navy">Instagram</p>
                      <a
                        href={siteContact.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-dark-gray hover:text-movus-orange transition-colors"
                      >
                        {siteContact.social.instagramHandle}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div>
                <h3 className="text-xl font-bold text-movus-navy mb-4">Τοποθεσία</h3>
                <div className="rounded-xl overflow-hidden border border-light-gray h-[320px] bg-light-gray">
                  <iframe
                    title="MOVUS location on Google Maps"
                    src="https://www.google.com/maps?q=Ιερού+Λόχου+1,+Πάτρα+26331&output=embed"
                    width="100%"
                    height="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-movus-black py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
          <div className="bg-movus-orange rounded-3xl px-8 md:px-16 py-14 md:py-20 text-center">
            <p className="text-movus-white/80 text-sm mb-3 tracking-wider">
              {siteCopy.tagline}
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-[-0.01em] text-movus-white mb-4 leading-[1.05]">
              {siteCopy.ctaBand.hook}
            </h2>
            <p className="text-lg text-movus-white/90 max-w-2xl mx-auto">
              {siteCopy.ctaBand.body}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
