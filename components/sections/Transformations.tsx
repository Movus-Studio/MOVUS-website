"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const photos = [
  "/images/movus-studio-night.webp",
  "/images/movus-group-training.webp",
  "/images/movus-studio-training.webp",
  "/images/movus-ems-training.webp",
  "/images/movus-ishape-sculpt.webp",
  "/images/movus-imotion-ems-suit.webp",
  "/images/movus-ems-fitness-hero.webp",
  "/images/movus-shapespace-pod.webp",
  "/images/movus-shapespace-cabin.webp",
];

export function Transformations() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      // Desktop only — gating on (pointer: fine). See Hero.tsx for rationale.
      mm.add("(prefers-reduced-motion: no-preference) and (pointer: fine)", () => {
        gsap
          .timeline({
            scrollTrigger: { trigger: sectionRef.current, start: "top 70%" },
          })
          .from(".transform-eyebrow", {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power2.out",
          })
          .fromTo(
            ".transform-word",
            { yPercent: 110 },
            { yPercent: 0, duration: 1.1, ease: "expo.out", stagger: 0.12 },
            "-=0.3"
          );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="bg-movus-white overflow-x-clip"
      id="transformations"
    >
      <div className="spine spine-flush-bottom !gap-16 md:!gap-24 items-center text-center">
        <div className="flex flex-col items-center gap-6">
          <p className="transform-eyebrow overline">
            (Στιγμές από τις Προπονήσεις)
          </p>
          <h2 className="heading-section leading-[0.92] text-movus-black">
            <span className="block overflow-hidden">
              <span className="transform-word inline-block">YOUR MOVUS</span>
            </span>
            <span className="block overflow-hidden">
              <span className="transform-word inline-block text-movus-orange">
                MOMENTS
              </span>
            </span>
          </h2>
        </div>
      </div>

      {/* Photo marquee, infinite scroll, pauses on hover */}
      <div className="group relative w-full overflow-hidden py-12 md:py-16">
        <div className="flex w-max gap-4 md:gap-6 animate-ticker group-hover:[animation-play-state:paused]">
          {[...photos, ...photos].map((src, i) => (
            <div
              key={i}
              className="relative shrink-0 rounded-3xl overflow-hidden shadow-[0_20px_50px_-20px_rgba(0,0,0,0.35)]"
              style={{
                width: "clamp(220px, 22vw, 320px)",
                aspectRatio: "3 / 4",
              }}
            >
              <Image
                src={src}
                alt="MOVUS moment"
                fill
                className="object-cover"
                sizes="320px"
                draggable={false}
              />
            </div>
          ))}
        </div>

        {/* Edge fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-40 bg-gradient-to-r from-movus-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-40 bg-gradient-to-l from-movus-white to-transparent" />
      </div>
    </section>
  );
}
