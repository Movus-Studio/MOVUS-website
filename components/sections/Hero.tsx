"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const HEADLINE_LINES: { words: { text: string; className: string }[] }[] = [
  {
    words: [
      { text: "FUTURE", className: "text-movus-white" },
      { text: "OF", className: "text-movus-white" },
    ],
  },
  {
    words: [{ text: "FITNESS", className: "text-movus-orange" }],
  },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const intro = gsap.timeline({ delay: 0.2 });
        intro
          .fromTo(
            ".hero-word",
            { yPercent: 110 },
            {
              yPercent: 0,
              duration: 1.1,
              ease: "expo.out",
              stagger: 0.08,
            }
          )
          .from(
            ".hero-fade",
            { opacity: 0, y: 24, duration: 0.8, ease: "power3.out", stagger: 0.15 },
            "-=0.5"
          )
          .from(
            pillRef.current,
            { opacity: 0, y: 60, scale: 0.92, duration: 1, ease: "expo.out" },
            "-=0.7"
          );

        gsap.to(pillRef.current, {
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative h-[100svh] min-h-[640px] overflow-hidden bg-movus-black"
    >
      {/* Gradient bg layer, source design's "Gradient BG" decorative */}
      <div className="absolute inset-0 z-[1] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_15%_100%,rgba(255,107,53,0.45)_0%,rgba(255,107,53,0)_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_85%_20%,rgba(124,92,252,0.18)_0%,rgba(124,92,252,0)_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-movus-black/0 via-movus-black/0 to-movus-black/85" />
      </div>

      {/* Container: full-bleed, end-aligned (bottom), 60px side padding */}
      <div className="relative z-[2] h-full flex items-end gap-6 md:gap-10 px-6 md:px-12 lg:px-[60px]">
        {/* Heading Wrap, 1fr, vertical, end-aligned, pb-60, gap-20.
            Eyebrow + subline above; H1 at the bottom for source-design's "flush with viewport bottom". */}
        <div className="flex-1 flex flex-col justify-between pt-28 md:pt-32 pb-10 md:pb-14 lg:pb-[60px] gap-8">
          <div className="flex flex-col gap-5 max-w-md">
          {/* Eyebrow / social proof */}
          <div className="hero-fade flex items-center gap-3">
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
          </div>

          {/* Subline */}
          <p
            className="hero-fade text-movus-white/65 leading-[1.6]"
            style={{ fontSize: "var(--text-body-m)" }}
          >
            Δεν είναι απλά προπόνηση. Είναι ο πιο έξυπνος τρόπος να εξελίξεις το σώμα σου.
          </p>
          </div>

          {/* Headline, anchored to bottom, source design uses 200px Anton SC, here Dela Gothic */}
          <h1 className="heading-display">
            {HEADLINE_LINES.map((line, lineIdx) => (
              <span key={lineIdx} className="block whitespace-nowrap">
                {line.words.map((word, wordIdx) => (
                  <span key={wordIdx} className="relative inline-block overflow-hidden align-bottom mr-[0.12em] last:mr-0">
                    <span className={`hero-word inline-block ${word.className}`}>
                      {word.text}
                    </span>
                  </span>
                ))}
              </span>
            ))}
          </h1>
        </div>

        {/* Video Wrap, 18% width, 150px bottom pad — small pill in bottom-right */}
        <div className="hidden md:flex w-[22%] lg:w-[18%] flex-col justify-end pb-[80px] lg:pb-[150px]">
          <div
            ref={pillRef}
            className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-[0_30px_60px_-25px_rgba(0,0,0,0.6)] will-change-transform"
          >
            <Image
              src="/images/hero-movus.webp"
              alt="EMS προπόνηση στο MOVUS"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 1024px) 22vw, 216px"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-movus-black/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
