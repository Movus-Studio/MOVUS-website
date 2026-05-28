import type { Metadata } from "next";
import Link from "next/link";
import { programs } from "@/content/programs";
import { programsFAQ } from "@/content/faq";
import { siteCopy } from "@/content/site";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import { ProgramCard, type Program } from "@/components/programs/ProgramCard";
import { EmsPinnedSection } from "@/components/programs/EmsPinnedSection";

const PROGRAMS_TITLE = "Προγράμματα EMS, Personal & Ομαδικά Πάτρα";
const PROGRAMS_DESCRIPTION =
  "Εννέα προγράμματα γυμναστικής στο MOVUS Πάτρα. EMS, personal training, ομαδικά, Shape Space. Διάλεξε το δικό σου.";

export const metadata: Metadata = {
  title: PROGRAMS_TITLE,
  description: PROGRAMS_DESCRIPTION,
  alternates: {
    canonical: "https://movus.gr/programs",
  },
  openGraph: {
    title: `${PROGRAMS_TITLE} | MOVUS`,
    description: PROGRAMS_DESCRIPTION,
  },
};

function CategorySection({ id, title, programs }: { id: string; title: string; programs: Program[] }) {
  return (
    <div id={id} className="pt-10 md:pt-14 first:pt-0 scroll-mt-24 md:scroll-mt-28">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12 mb-6 md:mb-8">
        <h2 className="text-section text-movus-orange">
          {title}
        </h2>
      </div>

      {/* Mobile — full-bleed horizontal snap-scroll */}
      <div className="lg:hidden">
        <div className="no-scrollbar flex items-stretch gap-4 overflow-x-auto snap-x snap-mandatory px-5 md:px-8 scroll-pl-5 md:scroll-pl-8 [scrollbar-width:none] [overscroll-behavior-x:contain] [-webkit-overflow-scrolling:touch]">
          {programs.map((program) => (
            <div
              key={program.slug}
              className="flex-shrink-0 w-[85%] max-w-[440px] snap-start"
            >
              <ProgramCard program={program} />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop — 2-col grid */}
      <div className="hidden lg:block">
        <div className="mx-auto max-w-[1280px] px-12">
          <div className="grid grid-cols-2 gap-8">
            {programs.map((program) => (
              <ProgramCard key={program.slug} program={program} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

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
      <section className="bg-movus-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.1em] text-movus-orange-text mb-4">
            Τα προγράμματα
          </span>
          <h1 className="text-hero tracking-[-0.02em] text-movus-black mb-6 leading-[0.95]">
            Εννέα προγράμματα.
            <br />
            <span className="text-movus-orange">Ένα σύστημα.</span>
          </h1>
          <p className="text-xl text-dark-gray/80 max-w-2xl leading-relaxed">
            Ομαδικά, στοχευμένα, με τεχνολογία EMS και Shape Space. Διαλέγεις
            αυτό που σου ταιριάζει. Οι coaches το βρίσκουν μαζί σου. Από την
            πρώτη μέρα ξέρεις τι κάνεις και γιατί.
          </p>
        </div>
      </section>

      {/* Programs grouped by category */}
      <section className="bg-movus-white pb-20 md:pb-28">
        <EmsPinnedSection programs={programs.slice(4)} />
        <CategorySection id="personal" title="Personal" programs={programs.slice(2, 4)} />
        <CategorySection id="group" title="Ομαδικά" programs={programs.slice(0, 2)} />
      </section>

      {/* FAQ */}
      <section className="bg-movus-orange py-20 md:py-28">
        <div className="mx-auto max-w-[900px] px-5 md:px-8 lg:px-12">
          <p className="text-movus-white/70 mb-4 text-sm">(Συχνές ερωτήσεις)</p>
          <h2 className="text-section font-black tracking-[-0.01em] text-movus-white mb-12 leading-[0.95]">
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
            <h2 className="text-section font-black tracking-[-0.01em] text-movus-white mb-4 leading-[1.05]">
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
