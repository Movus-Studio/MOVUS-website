"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion } from "motion/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import homeContent from "@/content/home/home.json";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const c = homeContent.howItWorks;
const steps = c.steps;

export function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(
    () => {
      if (typeof window === "undefined") return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const track = trackRef.current;
        const pin = pinRef.current;
        if (!track || !pin) return;

        // Vertical scroll = horizontal travel needed to bring last card flush to right edge.
        // No exit travel — section ends as last card lands, not after empty space.
        const getTotalDistance = () => track.scrollWidth - window.innerWidth + 96;

        const tween = gsap.to(track, {
          x: () => -getTotalDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: pin,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${getTotalDistance()}`,
            invalidateOnRefresh: true,
          },
        });

        return () => {
          tween.scrollTrigger?.kill();
          tween.kill();
        };
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="bg-movus-orange overflow-x-clip"
      id="how-it-works"
    >
      {/* Header */}
      <div className="spine spine-flush-bottom !gap-10">
        <motion.h2
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          data-motion-reveal
          className="heading-section text-movus-white leading-[0.92]"
        >
          <span className="block">{c.headlineLine1}</span>
          <span className="block">{c.headlineLine2}</span>
          <span className="block text-movus-black">{c.headlineLine3}</span>
        </motion.h2>

        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ delay: 0.1, duration: 0.5 }}
          data-motion-reveal
          className="text-movus-white/85 leading-[1.7] max-w-xl"
          style={{ fontSize: "var(--text-body-m)" }}
        >
          {c.intro}
        </motion.p>
      </div>

      {/* Body — mobile horizontal snap-scroll carousel */}
      <div className="lg:hidden pt-[var(--spine-gap)] pb-[var(--spine-pad)]">
        <div className="no-scrollbar flex items-stretch gap-4 overflow-x-auto snap-x snap-mandatory pl-[6%] pr-[6%] scroll-pl-[6%] [scrollbar-width:none] [overscroll-behavior-x:contain] [-webkit-overflow-scrolling:touch]">
          {steps.map((step) => (
            <div
              key={step.number}
              className="flex-shrink-0 w-[85%] max-w-[460px] snap-start"
            >
              <StepCard step={step} />
            </div>
          ))}
        </div>
      </div>

      {/* Body — desktop scroll-pinned horizontal track */}
      <div ref={pinRef} className="hidden lg:block h-screen overflow-hidden mt-[var(--spine-gap)]">
        <div
          ref={trackRef}
          className="h-screen flex items-center gap-6 pl-[94vw] pr-12 will-change-transform"
        >
          {steps.map((step) => (
            <div key={step.number} className="flex-shrink-0 w-[36vw] max-w-[520px]">
              <StepCard step={step} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StepCard({ step }: { step: (typeof steps)[number] }) {
  return (
    <article className="relative bg-movus-black rounded-3xl overflow-hidden aspect-[4/5] lg:aspect-auto lg:h-[min(36rem,calc(100vh-12rem))] shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)]">
      <Image
        src={step.image}
        alt={step.title}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 85vw, 60vw"
      />
      {/* Top scrim for STEP label */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/75 to-transparent" />
      {/* Bottom scrim for title + description */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/95 via-black/70 to-transparent" />

      <div className="absolute top-6 left-6 md:top-8 md:left-8">
        <span className="text-movus-white font-medium tracking-[0.08em] uppercase text-sm md:text-base">
          Step {step.number}.
        </span>
      </div>

      <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 lg:p-10">
        <h3
          className="heading-section text-movus-white mb-2 md:mb-3 leading-[0.95]"
          style={{ fontSize: "clamp(1.5rem, 1.8vw + 0.5rem, 2.5rem)" }}
        >
          {step.title}
        </h3>
        <p
          className="text-movus-white/90 leading-[1.55] max-w-md"
          style={{ fontSize: "var(--text-body-m)" }}
        >
          {step.description}
        </p>
      </div>
    </article>
  );
}
