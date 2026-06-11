import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { programs } from "@/content/programs";
import { FAQ } from "@/components/sections/FAQ";
import { Experience } from "@/components/sections/Experience";
import { MovusTech } from "@/components/sections/MovusTech";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";
import pageContent from "@/content/about/about.json";

const ABOUT_TITLE = pageContent.meta.title;
const ABOUT_DESCRIPTION = pageContent.meta.description;

export const metadata: Metadata = {
  title: ABOUT_TITLE,
  description: ABOUT_DESCRIPTION,
  alternates: {
    canonical: "https://movus.gr/about",
  },
  openGraph: {
    title: `${ABOUT_TITLE} | MOVUS`,
    description: ABOUT_DESCRIPTION,
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Αρχική", url: "https://movus.gr" },
              { name: "Σχετικά", url: "https://movus.gr/about" },
            ])
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(pageContent.faq.items)) }}
      />

      {/* Hero */}
      <section className="bg-movus-black pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-medium-gray">
              <li>
                <Link href="/" className="hover:text-movus-white transition-colors">
                  {pageContent.hero.breadcrumbHome}
                </Link>
              </li>
              <li>/</li>
              <li className="text-movus-white">{pageContent.hero.breadcrumbCurrent}</li>
            </ol>
          </nav>

          <span className="inline-block text-xs font-semibold uppercase tracking-[0.1em] text-movus-orange-text mb-4">
            {pageContent.hero.eyebrow}
          </span>
          <h1 className="text-hero font-black tracking-[-0.02em] text-movus-white mb-6 leading-[0.95]">
            <span className="text-movus-orange">{pageContent.hero.headlineLine1Orange}</span>{pageContent.hero.headlineLine1Plain}
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative">
                <Image
                  src={pageContent.story.image}
                  alt={pageContent.story.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div>
              <h2 className="text-section font-black tracking-[-0.01em] text-movus-navy mb-8 leading-[1.05]">
                {pageContent.story.heading}
              </h2>
              <div className="space-y-6 text-dark-gray leading-[1.8] text-lg">
              <p>
                {pageContent.story.paragraph1Prefix} <strong className="text-movus-navy">{pageContent.story.paragraph1StrongWord}</strong> {pageContent.story.paragraph1Suffix}{" "}
                <em>&ldquo;{pageContent.story.paragraph1Em1}&rdquo;</em>: <em>{pageContent.story.paragraph1Em2}</em>.{" "}
                {pageContent.story.paragraph1Rest}
              </p>
              <p>
                {pageContent.story.paragraph2}
              </p>
              <p>
                {pageContent.story.paragraph3}
              </p>
              <p className="text-movus-navy font-semibold">
                {pageContent.story.paragraph4Strong}
              </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience (moved from homepage) */}
      <Experience />

      {/* MOVUS Tech (moved from homepage) */}
      <MovusTech />

      {/* Future of Fitness — CTA */}
      <section className="bg-movus-orange py-20 md:py-28 lg:py-36 relative overflow-hidden">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12 relative text-center">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.1em] text-movus-white/80 mb-4">
            {pageContent.cta.eyebrow}
          </span>
          <h2 className="text-section font-black tracking-[-0.01em] text-movus-white mb-10 leading-[1] max-w-4xl mx-auto">
            {pageContent.cta.headlineLine1}{" "}
            <span className="text-movus-black">{pageContent.cta.headlineLine2Black}</span>
          </h2>
          <p className="text-xl text-movus-white/90 leading-relaxed max-w-3xl mx-auto mb-12">
            {pageContent.cta.body}
          </p>
          <blockquote className="max-w-3xl mx-auto mb-12">
            <p className="text-2xl md:text-3xl font-semibold text-movus-white leading-snug italic">
              &ldquo;{pageContent.cta.quote}&rdquo;
            </p>
            <cite className="block mt-4 text-sm text-movus-white/70 not-italic font-medium uppercase tracking-wider">
              {pageContent.cta.quoteAuthor}
            </cite>
          </blockquote>
          <Link
            href={pageContent.cta.ctaHref}
            className="inline-block bg-movus-black hover:bg-movus-navy text-movus-white text-sm font-semibold uppercase tracking-[0.05em] px-10 py-5 rounded-lg transition-colors"
          >
            {pageContent.cta.ctaLabel}
          </Link>
        </div>
      </section>

      {/* Programs teaser */}
      <section className="bg-movus-black py-20 md:py-28 border-t border-white/5">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.1em] text-movus-orange-text mb-4">
            {pageContent.programs.eyebrow}
          </span>
          <h2 className="text-section-sm font-black tracking-[-0.01em] text-movus-white mb-12">
            {pageContent.programs.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {programs.map((program) => (
              <Link
                key={program.slug}
                href={`/programs/${program.slug}`}
                className="group block bg-movus-navy/50 border border-white/5 rounded-xl overflow-hidden hover:border-movus-orange/30 transition-all duration-300"
              >
                <div className="aspect-square relative overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-bold text-movus-white mb-2 group-hover:text-movus-orange transition-colors">
                    {program.title}
                  </h3>
                  <p className="text-xs text-medium-gray leading-relaxed line-clamp-3">
                    {program.shortDescription}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <FAQ
        items={pageContent.faq.items}
        image={pageContent.faq.image}
        imageAlt={pageContent.faq.imageAlt}
        imageVariant="illustration"
        helperText={pageContent.faq.helperText}
      />

    </>
  );
}
