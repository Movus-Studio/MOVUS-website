"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference) and (pointer: fine)", () => {
        gsap.fromTo(
          ".exp-reveal",
          { yPercent: 100, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            ease: "power2.out",
            stagger: 0.12,
            duration: 0.9,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );

        gsap.fromTo(
          ".exp-image",
          { scale: 1.1, opacity: 0.5 },
          {
            scale: 1,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "bottom 50%",
              scrub: 0.6,
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
      className="bg-movus-white overflow-x-clip"
      id="experience"
    >
      <div className="spine spine-row">
        <div className="flex-1 flex flex-col gap-8">
          <div className="overflow-hidden">
            <p className="exp-reveal overline">(Η Εμπειρία)</p>
          </div>

          <h2 className="heading-section leading-[0.92] text-movus-black">
            <span className="block overflow-hidden">
              <span className="exp-reveal inline-block">ΚΑΤΙ</span>
            </span>
            <span className="block overflow-hidden">
              <span className="exp-reveal inline-block">ΠΟΥ</span>
            </span>
            <span className="block overflow-hidden">
              <span className="exp-reveal inline-block text-movus-orange">ΝΙΩΘΕΙΣ</span>
            </span>
          </h2>

          <div className="overflow-hidden mt-4 space-y-5 max-w-md">
            <p
              className="exp-reveal text-movus-black/80 leading-[1.6]"
              style={{ fontSize: "var(--text-body-m)" }}
            >
              Η προπόνηση εδώ δεν μοιάζει με τίποτα άλλο που έχεις κάνει.
            </p>
            <p
              className="exp-reveal text-movus-black/65 leading-[1.6]"
              style={{ fontSize: "var(--text-body-m)" }}
            >
              Όχι γιατί το λέμε εμείς. Γιατί η ένταση, η ενέργεια και η ατμόσφαιρα του χώρου δημιουργούν κάτι που δύσκολα το εξηγείς. Το νιώθεις. Κάθε session έχει δυναμισμό, έχει ρυθμό, έχει μια αίσθηση ότι αυτή η ώρα μετράει.
            </p>
            <p
              className="exp-reveal text-movus-black font-semibold leading-[1.4]"
              style={{ fontSize: "var(--text-body-l)" }}
            >
              Η προπόνηση γίνεται κάτι που περιμένεις. Όχι κάτι που αναβάλλεις.
            </p>
          </div>
        </div>

        <div className="flex-1">
          <div className="exp-image relative aspect-[5/6] rounded-2xl overflow-hidden will-change-transform">
            <Image
              src="/images/movus-studio-interior.webp"
              alt="Ο χώρος προπόνησης στο MOVUS"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
