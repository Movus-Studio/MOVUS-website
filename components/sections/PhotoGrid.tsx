"use client";

import Image from "next/image";

const photos = [
  { src: "/images/movus-studio-interior.webp", alt: "MOVUS studio interior" },
  { src: "/images/movus-studio-training.webp", alt: "EMS training session" },
  { src: "/images/movus-ems-training.webp", alt: "i-Motion EMS workout" },
  { src: "/images/movus-ishape-sculpt.webp", alt: "i-Shape training" },
  { src: "/images/movus-studio-night.webp", alt: "Studio at night" },
  { src: "/images/movus-shapespace-cabin.webp", alt: "Shape Space machine" },
];

export function PhotoGrid() {
  return (
    <section className="bg-movus-black" aria-label="Instagram">
      {/* Ticker */}
      <div className="bg-movus-orange py-5 md:py-6 overflow-hidden" aria-hidden="true">
        <div className="animate-ticker flex whitespace-nowrap items-center">
          {Array.from({ length: 6 }).map((_, i) => (
            <span
              key={i}
              className="text-movus-white uppercase tracking-wider mx-10 text-4xl md:text-6xl lg:text-7xl"
              style={{ fontFamily: "var(--font-display), sans-serif", fontWeight: 400, fontSynthesis: "none" }}
            >
              FOLLOW US ON INSTAGRAM
              <span className="mx-10 text-movus-white/50">*</span>
              FOLLOW US ON INSTAGRAM
              <span className="mx-10 text-movus-white/50">*</span>
            </span>
          ))}
        </div>
      </div>

      {/* 6-col photo grid */}
      <a
        href="https://www.instagram.com/movusfitness/"
        target="_blank"
        rel="noopener noreferrer"
        className="block"
        aria-label="Ακολουθήστε το MOVUS στο Instagram"
      >
        <div className="grid grid-cols-3 md:grid-cols-6 gap-0">
          {photos.map((photo, i) => (
            <div key={i} className="relative aspect-square overflow-hidden group">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-110"
                sizes="(max-width: 768px) 33vw, 16.6vw"
              />
              <div className="absolute inset-0 bg-movus-black/0 group-hover:bg-movus-black/30 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </a>
    </section>
  );
}
