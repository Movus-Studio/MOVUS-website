import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { programs } from "@/content/programs";
import { programsFAQ } from "@/content/faq";
import { siteCopy } from "@/content/site";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Προγράμματα",
  description:
    "Τα πιο ευέλικτα προγράμματα γυμναστικής στην Πάτρα. Εξερεύνησε EMS, Shape Space και ομαδικά στο MOVUS.",
  openGraph: {
    title: "Προγράμματα Γυμναστικής MOVUS Πάτρα – EMS, Shape Space, HIIT & Pilates",
    description:
      "Revolutionary EMS training και explosive group fitness programs, η τέλεια συνταγή για αποτελεσματική μεταμόρφωση.",
  },
};

export default function ProgramsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Αρχική", url: "https://movus.gr" },
              { name: "Προγράμματα", url: "https://movus.gr/programs" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(programsFAQ)),
        }}
      />

      {/* Hero */}
      <section className="bg-movus-black pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.1em] text-movus-orange mb-4">
            Τα Προγράμματά μας
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.02em] text-movus-white mb-6 leading-[0.95]">
            Τα πιο ευέλικτα προγράμματα
            <br />
            <span className="text-movus-orange">γυμναστικής στην Πάτρα</span>
          </h1>
          <p className="text-xl text-medium-gray max-w-2xl leading-relaxed">
            Ανακάλυψε τη νέα εποχή του fitness στο MOVUS Πάτρα! Revolutionary EMS
            training και explosive group fitness programs, η τέλεια συνταγή για
            αποτελεσματική μεταμόρφωση.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="bg-movus-black pb-20 md:pb-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programs.map((program) => (
              <Link
                key={program.slug}
                href={`/programs/${program.slug}`}
                className="group block bg-movus-navy/50 border border-white/5 rounded-xl overflow-hidden hover:border-movus-orange/30 transition-all duration-300"
              >
                <div className="aspect-[16/10] bg-movus-navy overflow-hidden relative">
                  <Image
                    src={program.image}
                    alt={program.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-8">
                  <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.1em] text-movus-orange bg-movus-orange/10 px-3 py-1 rounded-full mb-3">
                    {program.tag}
                  </span>
                  <h2 className="text-2xl font-bold text-movus-white mb-3 group-hover:text-movus-orange transition-colors">
                    {program.title}
                  </h2>
                  <p className="text-medium-gray leading-relaxed mb-6">
                    {program.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs text-movus-white/60 mb-5">
                    <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                      Επίπεδο: Για Όλους
                    </span>
                    <span className="bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                      Ένταση: Ρυθμιζόμενη
                    </span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-movus-orange group-hover:gap-2 transition-all duration-200">
                    Μάθε Περισσότερα
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-movus-orange py-20 md:py-28">
        <div className="mx-auto max-w-[900px] px-5 md:px-8 lg:px-12">
          <p className="text-movus-white/70 mb-4 text-sm">(Συχνές ερωτήσεις)</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-[-0.01em] text-movus-white mb-12 leading-[0.95]">
            FAQ
          </h2>
          <div className="space-y-3">
            {programsFAQ.map((faq, i) => (
              <details
                key={i}
                className="group bg-movus-white rounded-xl overflow-hidden open:shadow-lg transition-shadow"
              >
                <summary className="cursor-pointer list-none p-5 flex items-start justify-between gap-4">
                  <span className="font-semibold text-movus-black leading-snug">
                    {faq.question}
                  </span>
                  <span className="text-movus-orange flex-shrink-0 transition-transform group-open:rotate-180">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 pb-5 text-dark-gray leading-relaxed">{faq.answer}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Global CTA band */}
      <section className="bg-movus-black py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
          <div className="bg-movus-orange rounded-3xl px-8 md:px-16 py-14 md:py-20 text-center">
            <p className="text-movus-white/80 text-sm mb-3 tracking-wider">
              {siteCopy.tagline}
            </p>
            <h2 className="text-3xl md:text-5xl font-black tracking-[-0.01em] text-movus-white mb-4 leading-[1.05]">
              {siteCopy.ctaBand.hook}
            </h2>
            <p className="text-lg text-movus-white/90 mb-8 max-w-2xl mx-auto">
              {siteCopy.ctaBand.body}
            </p>
            <Link
              href="/contact"
              className="inline-block bg-movus-black hover:bg-movus-navy text-movus-white text-sm font-semibold uppercase tracking-[0.05em] px-10 py-5 rounded-lg transition-colors"
            >
              {siteCopy.ctaBand.cta}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
