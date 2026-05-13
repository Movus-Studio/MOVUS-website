"use client";

import { motion, useReducedMotion } from "motion/react";
import { testimonials } from "@/content/testimonials";

const cardStyles = [
  { bg: "bg-[#F3F3F3]", text: "text-movus-black", quote: "text-movus-orange", sub: "text-movus-black/60" },
  { bg: "bg-movus-orange", text: "text-movus-white", quote: "text-movus-white", sub: "text-movus-white/80" },
  { bg: "bg-[#F3F3F3]", text: "text-movus-black", quote: "text-movus-orange", sub: "text-movus-black/60" },
  { bg: "bg-[#1A1A1E]", text: "text-movus-white", quote: "text-movus-white", sub: "text-movus-white/60" },
  { bg: "bg-[#F3F3F3]", text: "text-movus-black", quote: "text-movus-orange", sub: "text-movus-black/60" },
];

// Bento positions on 3-col × 3-row grid (desktop). 2 deliberate empty cells per source design.
const bentoPositions = [
  "lg:col-span-1 lg:row-span-1 lg:col-start-1 lg:row-start-1",      // T1
  "lg:col-span-2 lg:row-span-1 lg:col-start-2 lg:row-start-1",      // T2 (wide)
  "lg:col-span-1 lg:row-span-1 lg:col-start-2 lg:row-start-2",      // T3
  "lg:col-span-2 lg:row-span-1 lg:col-start-1 lg:row-start-3",      // T4 (wide)
  "lg:col-span-1 lg:row-span-1 lg:col-start-3 lg:row-start-3",      // T5
];

export function Testimonials() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-movus-white" id="testimonials">
      <div className="spine">
        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          data-motion-reveal
          className="overline"
        >
          (Οι Πελάτες Μας)
        </motion.p>

        <motion.h2
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          data-motion-reveal
          className="heading-section text-movus-black leading-[0.92]"
        >
          {/* Greek words are much wider than the original English design — stack
              each word on its own line on mobile so "ΑΠΟΤΕΛΕΣΜΑΤΑ." never
              overflows the viewport. md+ keeps the two-line composition. */}
          <span className="block md:inline">ΑΛΗΘΙΝΑ</span>{" "}
          <span className="block md:inline text-movus-orange">ΑΠΟΤΕΛΕΣΜΑΤΑ.</span>{" "}
          <span className="block md:inline">ΑΛΗΘΙΝΑ ΛΟΓΙΑ.</span>
        </motion.h2>

        {/* Bento grid: 3 cols × 3 rows desktop, ~280px square cells, 10px gap, 2 deliberate empty cells */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-3 gap-2.5 mt-6 md:mt-10"
          style={{ gridAutoRows: "minmax(280px, 1fr)" }}
        >
          {testimonials.map((t, i) => {
            const style = cardStyles[i] ?? cardStyles[0];
            const isWide = bentoPositions[i]?.includes("col-span-2");
            return (
              <motion.blockquote
                key={i}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -5% 0px" }}
                transition={{
                  delay: (i % 3) * 0.08,
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
                data-motion-reveal
                className={`rounded-3xl p-7 md:p-9 flex flex-col ${style.bg} ${style.text} ${bentoPositions[i] ?? ""}`}
              >
                <svg
                  className={`w-6 h-6 mb-5 ${style.quote}`}
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  aria-hidden="true"
                >
                  <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
                </svg>

                <p
                  className={`flex-1 font-medium leading-[1.5] ${isWide ? "text-base md:text-lg" : "text-[0.95rem] md:text-base"}`}
                >
                  {t.quote}
                </p>

                <footer className="mt-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden bg-white/10 relative shrink-0">
                    <div className="absolute inset-0 flex items-center justify-center font-bold text-base">
                      {t.name.charAt(0)}
                    </div>
                  </div>
                  <div>
                    <p className="font-bold tracking-tight text-sm md:text-base">{t.name}</p>
                    <p className={`text-xs md:text-sm mt-0.5 font-medium ${style.sub}`}>
                      {t.program}
                    </p>
                  </div>
                </footer>
              </motion.blockquote>
            );
          })}

          {/* Decorative REAL RESULTS card — sits in (1,2). The (3,2) cell is intentionally empty. */}
          <div className="hidden lg:flex lg:col-start-1 lg:row-start-2 rounded-3xl bg-movus-black items-center justify-center p-6">
            <p
              className="text-movus-white font-black uppercase leading-[0.95] tracking-tight text-center"
              style={{
                fontFamily: "var(--font-display), Impact, sans-serif",
                fontSize: "clamp(1.25rem, 2vw, 2rem)",
                fontWeight: 400,
              }}
            >
              REAL <span className="text-movus-orange">RESULTS.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
