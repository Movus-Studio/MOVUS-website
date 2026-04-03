import Image from "next/image";

const photos = [
  { src: "/images/studio-interior.webp", alt: "MOVUS studio interior" },
  { src: "/images/studio-training.webp", alt: "EMS training session" },
  { src: "/images/program-ems.webp", alt: "i-Motion EMS workout" },
  { src: "/images/program-ishape.webp", alt: "i-Shape boxing training" },
  { src: "/images/studio-night.webp", alt: "Studio at night" },
  { src: "/images/shapespace-red.webp", alt: "Shape Space machine" },
];

export function PhotoGrid() {
  return (
    <section className="bg-movus-black">
      {/* Social ticker */}
      <div className="bg-movus-orange py-6 overflow-hidden" aria-hidden="true">
        <div className="animate-ticker flex whitespace-nowrap items-center">
          {Array.from({ length: 6 }).map((_, i) => (
            <span key={i} className="text-movus-white font-black uppercase tracking-wider mx-12 text-5xl md:text-7xl">
              FOLLOW US ON INSTAGRAM
              <span className="mx-12 text-movus-white/40">*</span>
              FOLLOW US ON INSTAGRAM
              <span className="mx-12 text-movus-white/40">*</span>
            </span>
          ))}
        </div>
      </div>

      {/* Photo row */}
      <div className="grid grid-cols-3 md:grid-cols-6 gap-0">
        {photos.map((photo, i) => (
          <div key={i} className="relative aspect-square overflow-hidden">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              className="object-cover hover:scale-110 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]"
              sizes="(max-width: 768px) 33vw, 16.67vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
