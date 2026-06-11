import type { Metadata } from "next";
import Link from "next/link";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { siteContact, siteCopy } from "@/content/site";
import pageContent from "@/content/personalTraining/personalTraining.json";

const { meta, breadcrumb, hero, whatYouGet, formats, whoItsFor, cta } = pageContent;

export const metadata: Metadata = {
  title: { absolute: meta.title },
  description: meta.description,
  alternates: {
    canonical: meta.canonical,
  },
  openGraph: {
    title: meta.title,
    description: meta.description,
  },
};

export default function PersonalTrainingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "Personal Training Πάτρα",
            description: meta.description,
            url: meta.canonical,
            provider: { "@id": "https://movus.gr/#business" },
            areaServed: { "@type": "City", name: "Πάτρα" },
            serviceType: "Personal Training",
            category: "Fitness Training",
          }),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: breadcrumb.parent, url: "https://movus.gr" },
              {
                name: breadcrumb.current,
                url: meta.canonical,
              },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-movus-white pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-dark-gray/70">
              <li>
                <Link href="/" className="hover:text-movus-orange-text transition-colors">
                  {breadcrumb.parent}
                </Link>
              </li>
              <li>/</li>
              <li className="text-movus-black">{breadcrumb.current}</li>
            </ol>
          </nav>

          <span className="inline-block text-xs font-semibold uppercase tracking-[0.1em] text-movus-orange-text mb-4">
            {hero.eyebrow}
          </span>
          <h1 className="text-hero font-black tracking-[-0.02em] text-movus-black mb-6 leading-[0.95]">
            {hero.headlineLine1}
            <br />
            <span className="text-movus-orange">{hero.headlineLine2}</span>
          </h1>
          <p className="text-xl text-dark-gray max-w-2xl leading-relaxed">
            {hero.body}
          </p>
        </div>
      </section>

      {/* What you get */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-16 items-start">
            <div>
              <span className="inline-block text-xs font-semibold uppercase tracking-[0.1em] text-movus-orange-text mb-4">
                {whatYouGet.eyebrow}
              </span>
              <h2 className="text-section font-black tracking-[-0.01em] text-movus-navy mb-6 leading-[1.05]">
                {whatYouGet.headlineLine1}
              </h2>
              <p className="text-dark-gray leading-relaxed text-lg">
                {whatYouGet.body}
              </p>
            </div>
            <ul className="space-y-3">
              {whatYouGet.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-lg text-movus-navy bg-movus-white border border-light-gray rounded-xl px-5 py-4"
                >
                  <span className="text-movus-orange mt-1 text-2xl leading-none">•</span>
                  <span className="leading-snug">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Formats */}
      <section className="bg-movus-white py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.1em] text-movus-orange-text mb-4">
            {formats.eyebrow}
          </span>
          <h2 className="text-section font-black tracking-[-0.01em] text-movus-navy mb-12 leading-[1.05]">
            {formats.headline}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {formats.items.map((format) => (
              <Link
                key={format.name}
                href={format.href}
                className="group block bg-cream border border-light-gray rounded-2xl p-8 md:p-10 hover:border-movus-orange/40 hover:shadow-lg transition-all duration-300"
              >
                <h3
                  className="text-section-sm tracking-[-0.01em] text-movus-navy mb-2 uppercase"
                  style={{ fontFamily: "var(--font-display), sans-serif", fontWeight: 400, fontSynthesis: "none" }}
                >
                  {format.name}
                </h3>
                <p className="text-lg text-movus-orange font-semibold mb-4">
                  {format.tagline}
                </p>
                <p className="text-dark-gray leading-relaxed mb-6">
                  {format.body}
                </p>
                <span className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.05em] text-movus-navy group-hover:text-movus-orange transition-colors">
                  {formats.ctaLabel}
                  <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Who it's for */}
      <section className="bg-movus-black py-20 md:py-28">
        <div className="mx-auto max-w-[900px] px-5 md:px-8 lg:px-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.1em] text-movus-orange-text mb-4">
            {whoItsFor.eyebrow}
          </span>
          <h2 className="text-section font-black tracking-[-0.01em] text-movus-white mb-8 leading-[1.05]">
            {whoItsFor.headline}
          </h2>
          <div className="space-y-5 text-lg text-medium-gray leading-relaxed">
            {whoItsFor.paragraphs.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + contact */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-[900px] px-5 md:px-8 lg:px-12 text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.1em] text-movus-orange-text mb-4">
            {cta.eyebrow}
          </span>
          <h2 className="text-section font-black tracking-[-0.01em] text-movus-navy mb-6 leading-[1.05]">
            {cta.headline}
          </h2>
          <p className="text-lg text-dark-gray leading-relaxed mb-8 max-w-2xl mx-auto">
            {cta.body}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={cta.contactHref}
              className="inline-block bg-movus-orange hover:bg-movus-orange-dark text-movus-white text-sm font-semibold uppercase tracking-[0.05em] px-10 py-5 rounded-lg transition-colors"
            >
              {siteCopy.ctaBand.cta}
            </Link>
            <a
              href={`tel:${siteContact.phoneHref}`}
              className="inline-block bg-movus-navy hover:bg-movus-black text-movus-white text-sm font-semibold uppercase tracking-[0.05em] px-10 py-5 rounded-lg transition-colors"
            >
              {siteContact.phoneDisplay}
            </a>
          </div>
          <p className="text-sm text-medium-gray mt-6">
            {cta.addressLine}
          </p>
        </div>
      </section>
    </>
  );
}
