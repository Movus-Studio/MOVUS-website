"use client";

import Image from "next/image";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useRef } from "react";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section ref={ref} className="relative min-h-[100vh] overflow-hidden bg-movus-black">
      {/* Background container perfectly mated to the tightened global perimeter border */}
      {/* 24px outer border - 16px border width = 8px inner border radius */}
      <motion.div
        style={prefersReducedMotion ? {} : { y: imgY, scale: imgScale }}
        className="absolute inset-[12px] md:inset-[16px] rounded-[8px] md:rounded-[12px] overflow-hidden bg-movus-black"
      >
        <Image
          src="/images/hero.webp"
          alt="EMS προπόνηση στο MOVUS"
          fill
          className="object-cover object-[center_25%]"
          priority
          sizes="100vw"
          quality={90}
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-movus-black/90 via-movus-black/40 to-transparent z-[1]" />
        <div className="absolute inset-0 bg-gradient-to-r from-movus-black/60 to-transparent z-[1]" />
      </motion.div>

      {/* Content tightly aligned inside the mathematical constraints of the frame */}
      <div className="relative z-10 h-full min-h-[100vh] flex flex-col justify-end mx-auto max-w-[1400px] px-6 md:px-12 lg:px-20 pt-32 pb-12 md:pb-24">
        {/* Social proof */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mb-6"
        >
          {/* Avatar stack */}
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-8 h-8 rounded-full bg-dark-gray border-2 border-movus-black" />
            ))}
          </div>
          <div className="flex items-center gap-1.5">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((i) => (
                <svg key={i} className="w-3 h-3 text-movus-orange fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-movus-white/70 font-medium" style={{ fontSize: "var(--text-caption)" }}>
              4.9/5
            </span>
            <span className="text-movus-white/30" style={{ fontSize: "var(--text-caption)" }}>
              · 100+ Πελάτες
            </span>
          </div>
        </motion.div>

        {/* Headline — MASSIVE, italic, uppercase */}
        <motion.h1
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="heading-display mb-6 max-w-5xl leading-[0.85]"
        >
          <span className="block text-movus-white">Elevate your</span>
          <span className="block">
            <span className="text-movus-orange">EMS</span>
            <span className="text-movus-white"> game</span>
          </span>
        </motion.h1>

        {/* Subline + CTA row */}
        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6"
        >
          <p className="text-movus-white/50 max-w-md leading-relaxed" style={{ fontSize: "var(--text-body)" }}>
            20 λεπτά EMS = 4 ώρες παραδοσιακής προπόνησης. Πιστοποιημένη τεχνολογία i-Motion.
            Premium studio στην Πάτρα.
          </p>
          <a
            href="https://booking.movus.gr"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex-shrink-0"
          >
            Ξεκίνα Τώρα
          </a>
        </motion.div>
      </div>

      {/* Floating video card — right side */}
      <motion.div
        initial={prefersReducedMotion ? {} : { opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="hidden lg:block absolute right-12 bottom-32 z-10"
      >
        <div className="w-[180px] bg-movus-white rounded-xl overflow-hidden shadow-2xl">
          <div className="relative aspect-[4/3]">
            <Image
              src="/images/program-ems.webp"
              alt="EMS training preview"
              fill
              className="object-cover"
              sizes="180px"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-10 h-10 rounded-full bg-movus-white/90 flex items-center justify-center shadow-lg">
                <svg className="w-4 h-4 text-movus-black ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="p-3">
            <p className="text-movus-black font-semibold text-xs">Δες πραγματική προπόνηση</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
