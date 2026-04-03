"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { programs } from "@/content/programs";

const tags = [
  ["Ενδυνάμωση", "Σύσφιξη", "Αντοχή", "Customized"],
  ["Τοπικό πάχος", "Σμίλευμα", "Ενέργεια"],
  ["Μεταβολισμός", "Απώλεια λίπους"],
  ["Ομαδικό πνεύμα", "Διασκέδαση", "Αντοχή"],
];

const SpinningBadge = () => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
    className="w-24 h-24 md:w-32 md:h-32 rounded-full flex items-center justify-center bg-black/40 backdrop-blur-md"
  >
    <svg viewBox="0 0 100 100" className="w-full h-full">
      <defs>
        <path id="circlePath" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
      </defs>
      <text fill="white" fontSize="10.5" fontWeight="700" letterSpacing="4">
        <textPath href="#circlePath">
          PROGRESS · PERFORM · BUILD · TRAIN · 
        </textPath>
      </text>
      <circle cx="50" cy="50" r="12" fill="var(--color-movus-orange)" />
      {/* Arrow inside the dot */}
      <path
        d="M48 52L52 48M52 48H48.5M52 48V51.5"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </motion.div>
);

export function ProgramsGrid() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-movus-white py-20 md:py-32 lg:py-40" id="programs">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12 flex flex-col gap-16 md:gap-24">
        {programs.map((program, i) => {
          // Alternate styles based on index
          const isOrange = i % 2 === 0;
          const bgClass = isOrange ? "bg-movus-orange" : "bg-movus-black";
          const titleColor = "text-movus-white";
          const bodyColor = isOrange ? "text-movus-white" : "text-movus-white/70";
          const labelColor = isOrange ? "text-movus-white" : "text-movus-white/60";
          const valueColor = "text-movus-white";
          const tagClass = isOrange
            ? "border-white/20 bg-black/10 text-white"
            : "border-white/20 bg-white/5 text-movus-white/80";

          return (
            <motion.div
              key={program.slug}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col md:flex-row overflow-hidden rounded-3xl ${bgClass} shadow-2xl relative`}
            >
              {/* Text Side */}
              <div className="w-full md:w-1/2 p-8 md:p-14 lg:p-20 flex flex-col justify-center">
                <h3 className={`heading-section mb-6 ${titleColor} leading-[0.9]`}>
                  {program.title}
                </h3>
                <p className={`text-lg md:text-xl font-medium mb-12 max-w-md leading-relaxed ${bodyColor}`}>
                  {program.shortDescription}
                </p>

                <div className="space-y-4 mb-10">
                  <div className="flex items-center gap-4 text-lg">
                    <span className={`font-bold ${labelColor}`}>Level :</span>
                    <span className={valueColor}>Όλα τα επίπεδα</span>
                  </div>
                  <div className="flex items-center gap-4 text-lg">
                    <span className={`font-bold ${labelColor}`}>Duration :</span>
                    <span className={valueColor}>20 Λεπτά</span>
                  </div>
                </div>

                {/* Tags row */}
                <div className="flex flex-wrap gap-3 mt-auto">
                  {tags[i].map((tag) => (
                    <div
                      key={tag}
                      className={`px-4 py-2 border rounded-full text-sm font-semibold tracking-wide ${tagClass}`}
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Side */}
              <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-full">
                <Image
                  src={program.image}
                  alt={program.imageAlt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              {/* Decorative Spinner - Positional overlap */}
              <div className="absolute right-4 bottom-4 md:right-12 md:bottom-12 z-10 pointer-events-none">
                <SpinningBadge />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

