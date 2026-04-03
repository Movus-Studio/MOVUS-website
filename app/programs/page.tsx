import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { programs } from "@/content/programs";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Προγράμματα",
  description:
    "Εξερεύνησε τα προγράμματα EMS του MOVUS — i-Motion EMS, i-Shape, Shape Space και ομαδικά. Βρες αυτό που σου ταιριάζει.",
  openGraph: {
    title: "Προγράμματα | MOVUS",
    description:
      "Εξερεύνησε τα προγράμματα EMS του MOVUS — i-Motion EMS, i-Shape, Shape Space και ομαδικά.",
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

      {/* Hero */}
      <section className="bg-movus-black pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
          <span className="inline-block text-xs font-semibold uppercase tracking-[0.1em] text-movus-orange mb-4">
            Προγράμματα
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.02em] text-movus-white">
            Βρες το πρόγραμμα
            <br />
            <span className="text-movus-orange">που σου ταιριάζει</span>
          </h1>
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
                  <p className="text-medium-gray leading-relaxed mb-4">
                    {program.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-movus-orange group-hover:gap-2 transition-all duration-200">
                    Μάθε Περισσότερα
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
