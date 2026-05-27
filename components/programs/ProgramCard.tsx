import Link from "next/link";
import Image from "next/image";
import { programs } from "@/content/programs";

type Program = (typeof programs)[number];

export function ProgramCard({ program }: { program: Program }) {
  return (
    <Link
      href={`/programs/${program.slug}`}
      className="group h-full flex flex-col bg-movus-black border border-movus-black/10 rounded-xl overflow-hidden hover:border-movus-orange/40 shadow-[0_20px_45px_-25px_rgba(0,0,0,0.35)] transition-all duration-300"
    >
      <div className="aspect-[5/4] md:aspect-[16/10] bg-movus-navy overflow-hidden relative">
        <Image
          src={program.image}
          alt={program.imageAlt}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          style={program.imagePosition ? { objectPosition: program.imagePosition } : undefined}
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
      <div className="p-8 flex flex-col flex-1">
        <span className="inline-block self-start text-[10px] font-semibold uppercase tracking-[0.1em] text-movus-orange bg-movus-orange/10 px-3 py-1 rounded-full mb-3">
          {program.tag}
        </span>
        <h3
          className="text-xl md:text-2xl text-movus-white mb-3 group-hover:text-movus-orange transition-colors uppercase tracking-[-0.02em] leading-[0.95] break-words hyphens-auto"
          style={{ fontFamily: "var(--font-display), sans-serif", fontWeight: 400, fontSynthesis: "none" }}
        >
          {program.title}
        </h3>
        <p className="text-medium-gray leading-relaxed mb-6 line-clamp-4">
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
        <span className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-movus-orange group-hover:gap-2 transition-all duration-200">
          Μάθε Περισσότερα
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </div>
    </Link>
  );
}

export type { Program };
