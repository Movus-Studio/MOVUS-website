"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const photos = [
  "/images/hero-woman.webp",
  "/images/program-group.webp",
  "/images/studio-training.webp",
  "/images/program-ems.webp",
  "/images/program-ishape.webp",
  "/images/ems-suits.webp",
  "/images/shapespace-red.webp",
];

export function Transformations() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".transform-card",
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "expo.out",
            stagger: { each: 0.08, from: "center" },
            scrollTrigger: {
              trigger: ".transform-carousel",
              start: "top 85%",
            },
          }
        );

        gsap
          .timeline({
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 70%",
            },
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
            {
              yPercent: 0,
              duration: 1.1,
              ease: "expo.out",
              stagger: 0.12,
            },
            "-=0.3"
          );
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="bg-movus-white overflow-hidden"
      id="transformations"
    >
      {/* Transform spine, vertical Heading Wrap + Carousel, padding 200/0 */}
      <div className="spine spine-flush-bottom !gap-16 md:!gap-24 items-center text-center">
        {/* Heading Wrap (on top per source design) */}
        <div className="flex flex-col items-center gap-6">
          <p className="transform-eyebrow overline">
            (Τα Αποτελέσματά Τους)
          </p>
          <h2 className="heading-section leading-[0.92] text-movus-black">
            <span className="block overflow-hidden">
              <span className="transform-word inline-block">ΑΠΟ ΤΗΝ ΑΡΧΗ</span>
            </span>
            <span className="block overflow-hidden">
              <span className="transform-word inline-block">ΣΤΗΝ</span>
            </span>
            <span className="block overflow-hidden">
              <span className="transform-word inline-block text-movus-orange">
                ΔΥΝΑΜΗ
              </span>
            </span>
          </h2>
        </div>

        {/* Arc Carousel */}
        <div
          className="transform-carousel relative flex justify-center items-end h-[340px] md:h-[460px] lg:h-[520px] w-full"
          style={{ perspective: 1600 }}
        >
          {photos.map((src, i) => {
            const offset = i - 3; // center index = 3
            const absoluteOffset = Math.abs(offset);
            const rotate = offset * 6;
            const translateX = offset * 140;
            const translateY = absoluteOffset * absoluteOffset * 8;
            const zIndex = 10 - absoluteOffset;
            const isCenter = offset === 0;

            return (
              <div
                key={i}
                className="transform-card absolute"
                style={{
                  zIndex,
                  transform: `translateX(${translateX}px) translateY(${translateY}px) rotate(${rotate}deg)`,
                  transformOrigin: "bottom center",
                }}
              >
                <div
                  className="relative rounded-[28px] overflow-hidden shadow-[0_25px_60px_-20px_rgba(0,0,0,0.45)]"
                  style={{
                    width: "clamp(170px, 18vw, 240px)",
                    aspectRatio: "3 / 4",
                    filter: isCenter
                      ? "none"
                      : "grayscale(100%) brightness(0.55)",
                  }}
                >
                  <Image
                    src={src}
                    alt="Μεταμόρφωση"
                    fill
                    className="object-cover"
                    sizes="240px"
                  />
                  {isCenter && (
                    <>
                      <div className="absolute inset-y-[-8%] left-1/2 -translate-x-1/2 w-[65%] pointer-events-none">
                        <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,107,53,0.55)_0%,rgba(255,107,53,0)_70%)] mix-blend-screen blur-[10px]" />
                      </div>
                      <div className="absolute inset-0 border-x-2 border-movus-orange/40 mix-blend-screen pointer-events-none" />
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
