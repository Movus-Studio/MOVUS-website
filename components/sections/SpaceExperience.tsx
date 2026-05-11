"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function SpaceExperience() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".space-image",
          { scale: 1.15, opacity: 0.5 },
          {
            scale: 1,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 85%",
              end: "bottom 50%",
              scrub: 0.6,
            },
          }
        );

        gsap.fromTo(
          ".space-reveal",
          { yPercent: 100, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            ease: "power2.out",
            stagger: 0.12,
            duration: 0.9,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-movus-black overflow-hidden"
      id="space"
    >
      {/* Full-bleed cinematic image */}
      <div className="space-image relative w-full h-[60vh] md:h-[75vh] lg:h-[85vh] will-change-transform">
        <Image
          src="/images/studio-night.webp"
          alt="Ο χώρος του MOVUS"
          fill
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-movus-black via-movus-black/40 to-transparent" />
      </div>

      {/* Copy block */}
      <div className="relative -mt-32 md:-mt-44 lg:-mt-56 z-10 mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12 pb-24 md:pb-32 lg:pb-40">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 items-end">
          <div>
            <div className="overflow-hidden mb-6">
              <p className="space-reveal overline-light">(Χώρος / Εμπειρία)</p>
            </div>
            <h2 className="heading-display leading-[0.88]">
              <span className="block overflow-hidden">
                <span className="space-reveal inline-block text-movus-white">ΕΝΑΣ</span>
              </span>
              <span className="block overflow-hidden">
                <span className="space-reveal inline-block text-movus-orange">ΧΩΡΟΣ</span>
              </span>
              <span className="block overflow-hidden">
                <span className="space-reveal inline-block text-movus-white">ΓΙΑ ΑΠΟΔΟΣΗ</span>
              </span>
            </h2>
          </div>

          <div className="space-y-5 max-w-2xl">
            <p
              className="space-reveal text-movus-white/85 leading-[1.8]"
              style={{ fontSize: "var(--text-body)" }}
            >
              Μπαίνεις και το καταλαβαίνεις αμέσως. Ένας χώρος φτιαγμένος αποκλειστικά για να αποδίδεις, χωρίς περισπασμούς, χωρίς συμβιβασμούς.
            </p>
            <p
              className="space-reveal text-movus-white/65 leading-[1.8]"
              style={{ fontSize: "var(--text-body)" }}
            >
              Από την αίθουσα προπόνησης μέχρι το Shape Space, κάθε γωνιά έχει έναν ρόλο. Και εσύ νιώθεις τη διαφορά από την πρώτη μέρα.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
