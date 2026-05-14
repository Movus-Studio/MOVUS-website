import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { programs } from "@/content/programs";
import { siteCopy } from "@/content/site";
import {
  generateServiceSchema,
  generateBreadcrumbSchema,
  generateFAQSchema,
} from "@/lib/schema";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return programs.map((program) => ({
    slug: program.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);

  if (!program) return { title: "Πρόγραμμα" };

  return {
    title: program.title,
    description: program.shortDescription,
    openGraph: {
      title: `${program.title} | MOVUS`,
      description: program.shortDescription,
    },
  };
}

export default async function ProgramPage({ params }: Props) {
  const { slug } = await params;
  const program = programs.find((p) => p.slug === slug);

  if (!program) notFound();

  const related = programs.filter((p) => p.slug !== program.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateServiceSchema({
              name: program.title,
              description: program.shortDescription,
              slug: program.slug,
            })
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Αρχική", url: "https://movus.gr" },
              { name: "Προγράμματα", url: "https://movus.gr/programs" },
              { name: program.title, url: `https://movus.gr/programs/${program.slug}` },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(generateFAQSchema(program.faqs)),
        }}
      />

      {/* Hero */}
      <section className="relative bg-movus-black pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-medium-gray">
              <li>
                <Link href="/" className="hover:text-movus-white transition-colors">
                  Αρχική
                </Link>
              </li>
              <li>/</li>
              <li>
                <Link href="/programs" className="hover:text-movus-white transition-colors">
                  Προγράμματα
                </Link>
              </li>
              <li>/</li>
              <li className="text-movus-white">{program.title}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-10 lg:gap-16 items-center">
            <div>
              <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.1em] text-movus-orange-text bg-movus-orange/10 px-3 py-1 rounded-full mb-4">
                {program.tag}
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.02em] text-movus-white mb-6 leading-[0.95]">
                {program.title}
              </h1>
              <div className="space-y-4 mb-8">
                {program.heroBody.map((p, i) => (
                  <p key={i} className="text-lg text-medium-gray leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
              <a
                href="https://app.movus.gr"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-movus-orange hover:bg-movus-orange-dark text-movus-white text-sm font-semibold uppercase tracking-[0.05em] px-8 py-4 rounded-lg transition-colors"
              >
                {program.ctaLabel}
              </a>
            </div>

            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden">
              <Image
                src={program.image}
                alt={program.imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-movus-black py-20 md:py-28 border-t border-white/5">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
          <h2 className="text-3xl md:text-4xl font-black tracking-[-0.01em] text-movus-white mb-10">
            {program.benefitsTitle}
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
            {program.benefits.map((b, i) => (
              <li
                key={i}
                className="flex items-start gap-3 text-lg text-movus-white bg-white/5 border border-white/10 rounded-xl px-5 py-4"
              >
                <span className="text-movus-orange mt-1 text-2xl leading-none">•</span>
                <span className="leading-snug">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works (Shape Space only) */}
      {program.howItWorks && (
        <section className="bg-cream py-20 md:py-28">
          <div className="mx-auto max-w-[900px] px-5 md:px-8 lg:px-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.1em] text-movus-orange-text mb-4">
              Πως λειτουργεί;
            </span>
            <p className="text-xl md:text-2xl text-movus-navy leading-relaxed">
              {program.howItWorks}
            </p>
          </div>
        </section>
      )}

      {/* Sub-programs (Group / Ομαδικά only) */}
      {program.subPrograms && program.subPrograms.length > 0 && (
        <section className="bg-movus-white py-20 md:py-28">
          <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.1em] text-movus-orange-text mb-4">
              Τα Προγράμματα
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-[-0.01em] text-movus-navy mb-16">
              5 προπονήσεις, μία κοινότητα
            </h2>

            <div className="space-y-16 md:space-y-24">
              {program.subPrograms.map((sub, i) => (
                <div
                  key={sub.name}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ${
                    i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  <div>
                    <span className="inline-block text-[10px] font-semibold uppercase tracking-[0.1em] text-movus-orange-text bg-movus-orange/10 px-2.5 py-1 rounded-full mb-4">
                      {sub.category}
                    </span>
                    <h3
                      className="text-3xl md:text-4xl tracking-[-0.01em] text-movus-navy mb-2 uppercase"
                      style={{ fontFamily: "var(--font-display), sans-serif", fontWeight: 400, fontSynthesis: "none" }}
                    >
                      {sub.name}
                    </h3>
                    <p className="text-xl text-movus-orange font-semibold mb-6">{sub.tagline}</p>
                    <p className="text-dark-gray leading-relaxed mb-6">{sub.description}</p>
                    <div className="flex flex-wrap gap-3 text-sm text-dark-gray mb-8">
                      <span className="bg-cream px-3 py-1.5 rounded-full">
                        Επίπεδο: Για Όλους
                      </span>
                      <span className="bg-cream px-3 py-1.5 rounded-full">
                        Ένταση: Ρυθμιζόμενη
                      </span>
                    </div>
                    <a
                      href="https://app.movus.gr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-movus-black hover:bg-movus-orange text-movus-white text-sm font-semibold uppercase tracking-[0.05em] px-6 py-3 rounded-lg transition-colors"
                    >
                      {sub.ctaLabel}
                    </a>
                  </div>
                  <div className="bg-movus-navy/5 border border-light-gray rounded-2xl p-10 min-h-[280px] flex items-center justify-center">
                    <p className="text-6xl md:text-7xl font-black tracking-[-0.02em] text-movus-navy/20 uppercase">
                      {sub.name}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="bg-movus-orange py-20 md:py-28">
        <div className="mx-auto max-w-[900px] px-5 md:px-8 lg:px-12">
          <p className="text-movus-white/70 mb-4 text-sm">(Συχνές ερωτήσεις)</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black tracking-[-0.01em] text-movus-white mb-12 leading-[0.95]">
            FAQ
          </h2>
          <div className="space-y-3">
            {program.faqs.map((faq, i) => (
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

      {/* Related programs */}
      <section className="bg-movus-black py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.1em] text-movus-orange-text mb-4">
            Ανακαλύψτε άλλα Προγράμματα
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-[-0.01em] text-movus-white mb-12">
            Περισσότερες επιλογές
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {related.map((p) => (
              <Link
                key={p.slug}
                href={`/programs/${p.slug}`}
                className="group block bg-movus-navy/50 border border-white/5 rounded-xl overflow-hidden hover:border-movus-orange/30 transition-all duration-300"
              >
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={p.image}
                    alt={p.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-movus-white mb-2 group-hover:text-movus-orange transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-sm text-medium-gray leading-relaxed">
                    {p.shortDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Global CTA band */}
      <section className="bg-movus-black pb-20 md:pb-28">
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
