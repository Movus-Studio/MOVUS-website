"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ProgramCard, type Program } from "./ProgramCard";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function EmsPinnedSection({ programs }: { programs: Program[] }) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (typeof window === "undefined") return;

      const mm = gsap.matchMedia();

      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const track = trackRef.current;
        const pin = pinRef.current;
        if (!track || !pin) return;

        // Cards end aligned with the right column of the Personal section
        // below — translate distance is only `scrollWidth - innerWidth`,
        // no extra exit travel. Separately, we stretch the vertical-scroll
        // budget by one viewport's worth so the pin lasts long enough to
        // feel cinematic; the cards just translate more slowly.
        const getMoveDistance = () => track.scrollWidth - window.innerWidth;
        const getScrollDuration = () => getMoveDistance() + window.innerWidth;

        const tween = gsap.to(track, {
          x: () => -getMoveDistance(),
          ease: "none",
          scrollTrigger: {
            trigger: pin,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${getScrollDuration()}`,
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
    <div
      id="ems"
      ref={sectionRef}
      className="pt-10 md:pt-14 first:pt-0 scroll-mt-24 md:scroll-mt-28"
    >
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12 mb-6 md:mb-8">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-movus-orange">EMS</h2>
      </div>

      {/* Mobile — same horizontal carousel as the other categories */}
      <div className="lg:hidden">
        <div className="no-scrollbar flex items-stretch gap-4 overflow-x-auto snap-x snap-mandatory px-5 md:px-8 scroll-pl-5 md:scroll-pl-8 [scrollbar-width:none] [overscroll-behavior-x:contain] [-webkit-overflow-scrolling:touch]">
          {programs.map((program) => (
            <div
              key={program.slug}
              className="flex-shrink-0 w-[85%] max-w-[440px] snap-start"
            >
              <ProgramCard program={program} />
            </div>
          ))}
        </div>
      </div>

      {/* Desktop — GSAP-pinned horizontal scroll, same mechanic as homepage ProgramsGrid.
          Track padding mirrors the Personal/Ομαδικά grid container
          (max-w-1280 px-12) on wide viewports, so the first and last cards
          align with the columns of the grid below. */}
      <div ref={pinRef} className="hidden lg:block h-screen overflow-hidden">
        <div
          ref={trackRef}
          className="h-screen flex items-center gap-8 will-change-transform"
          style={{
            paddingLeft: "max(3rem, calc((100vw - 1280px) / 2 + 3rem))",
            paddingRight: "max(3rem, calc((100vw - 1280px) / 2 + 3rem))",
          }}
        >
          {programs.map((program) => (
            <div
              key={program.slug}
              className="flex-shrink-0 h-[720px]"
              style={{ width: "calc((min(100vw, 1280px) - 128px) / 2)" }}
            >
              <ProgramCard program={program} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
