"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const HEADLINE_LINES: { words: { text: string; className: string }[] }[] = [
  { words: [{ text: "FUTURE", className: "text-movus-white" }] },
  { words: [{ text: "OF", className: "text-movus-white" }] },
  { words: [{ text: "FITNESS", className: "text-movus-orange" }] },
];

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Desktop only — gating on (pointer: fine) so touch devices (mobile/tablet)
      // get snappy static rendering. iOS Safari unreliably fires ScrollTrigger/RAF
      // during page-load lifecycle, leaving elements stuck at their `from` state.
      mm.add("(prefers-reduced-motion: no-preference) and (pointer: fine)", () => {
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
            imageRef.current,
            { opacity: 0, scale: 1.08, duration: 1.4, ease: "expo.out" },
            0
          );

        gsap.to(imageRef.current, {
          yPercent: 12,
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
      {/* Full-bleed hero image */}
      <div ref={imageRef} className="absolute inset-0 z-0 will-change-transform">
        <Image
          src="/images/movus-ems-fitness-hero.webp"
          alt="EMS προπόνηση στο MOVUS"
          fill
          className="object-cover object-[68%_35%] md:object-[40%_center]"
          priority
          sizes="100vw"
          quality={100}
        />
      </div>

      {/* Text contrast overlays — strong band at bottom (mobile) + radial at bottom-left (desktop) */}
      <div className="absolute inset-x-0 bottom-0 h-[55%] md:h-1/2 z-[1] pointer-events-none bg-gradient-to-t from-black via-black/80 to-transparent md:from-black/75 md:via-black/30 md:to-transparent" />
      <div className="hidden md:block absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(85%_80%_at_0%_100%,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.55)_35%,rgba(0,0,0,0)_70%)]" />

      {/* Container: full-bleed, end-aligned (bottom), 60px side padding */}
      <div className="relative z-[2] h-full flex items-end gap-6 md:gap-10 px-6 md:px-12 lg:px-[60px]">
        {/* Heading Wrap, 1fr, vertical, end-aligned, pb-60, gap-20.
            Eyebrow + subline above; H1 at the bottom for source-design's "flush with viewport bottom". */}
        <div className="flex-1 flex flex-col justify-end pb-24 md:pb-14 lg:pb-[60px] gap-5 md:gap-6">
          {/* Top: avatars + stars social proof */}
          <div className="hero-fade flex items-center gap-3">
            <div className="flex -space-x-2">
              {[
                "https://i.pravatar.cc/80?img=47",
                "https://i.pravatar.cc/80?img=12",
                "https://i.pravatar.cc/80?img=49",
              ].map((src) => (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  key={src}
                  src={src}
                  alt=""
                  loading="lazy"
                  className="w-8 h-8 rounded-full object-cover border-2 border-movus-black bg-dark-gray"
                />
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
              <span className="text-movus-white/80 font-medium" style={{ fontSize: "var(--text-caption)" }}>
                5/5
              </span>
              <span className="text-movus-white/50" style={{ fontSize: "var(--text-caption)" }}>
                · 100+ Πελάτες
              </span>
            </div>
          </div>

          {/* Bottom: title with subline underneath */}
          <div className="flex flex-col gap-5 md:gap-6 max-w-md">
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

            <p
              className="hero-fade text-movus-white/85 leading-[1.6]"
              style={{ fontSize: "var(--text-body-m)" }}
            >
              Δεν είναι απλά προπόνηση. Είναι ο πιο έξυπνος τρόπος να εξελίξεις το σώμα σου.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
