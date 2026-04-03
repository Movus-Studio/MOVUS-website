"use client";

import { motion, useReducedMotion } from "motion/react";
import { testimonials } from "@/content/testimonials";

const cardVariants = [
  "bg-[#F2F2F2] text-movus-black",
  "bg-[#F2F2F2] text-movus-black",
  "bg-[#1A1A1E] text-movus-white",
];

const quoteColors = [
  "text-movus-orange",
  "text-movus-orange",
  "text-movus-white",
];

export function Testimonials() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-movus-white py-20 md:py-32 lg:py-40" id="testimonials">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
        {/* Header */}
        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="overline"
        >
          (Τι Λένε οι Πελάτες)
        </motion.p>

        <motion.h2
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="heading-display text-movus-black mb-16 md:mb-24 leading-[0.85]"
        >
          <span className="block">
            ΑΛΗΘΙΝΑ <span className="text-movus-orange">ΑΠΟΤΕΛΕΣΜΑΤΑ.</span>
          </span>
          <span className="block">ΑΛΗΘΙΝΑ ΛΟΓΙΑ.</span>
        </motion.h2>

        {/* 3 Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(0, 3).map((t, i) => (
            <motion.blockquote
              key={i}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className={`rounded-3xl p-8 md:p-10 flex flex-col min-h-[380px] ${cardVariants[i]}`}
            >
              {/* Quote mark icon or text */}
              <span className={`text-4xl font-black leading-none mb-6 font-serif ${quoteColors[i]}`}>
                &ldquo;
              </span>

              <p className="leading-relaxed flex-1 font-medium text-lg lg:text-xl">
                {t.quote}
              </p>

              <footer className="mt-10 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-movus-orange/10 relative shrink-0">
                  {/* Fallback avatar if no image (using initial) inside absolute centered div */}
                  <div className="absolute inset-0 flex items-center justify-center text-movus-orange font-bold text-lg">
                    {t.name.charAt(0)}
                  </div>
                </div>
                <div>
                  <p className="font-bold tracking-tight text-base">{t.name}</p>
                  <p className="opacity-60 text-sm mt-0.5 font-medium">{t.program}</p>
                </div>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
