"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const stats = [
  { target: 300, suffix: "+", label: "Μύες σε κάθε κίνηση" },
  { target: 20, suffix: "'", label: "Ισοδυναμούν με 4 ώρες" },
  { target: 9, suffix: "", label: "Προγράμματα, ένα σύστημα" },
];

export function WhatIsEMS() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // Desktop only — gating on (pointer: fine). See Hero.tsx for rationale.
      mm.add("(prefers-reduced-motion: no-preference) and (pointer: fine)", () => {
        gsap.fromTo(
          ".ems-reveal",
          { yPercent: 100, opacity: 0 },
          {
            yPercent: 0,
            opacity: 1,
            ease: "power2.out",
            stagger: 0.14,
            duration: 1,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );

        gsap.fromTo(
          ".ems-image",
          { scale: 1.1, opacity: 0.4 },
          {
            scale: 1,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "bottom 60%",
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
      className="bg-movus-black overflow-x-clip"
      id="what-is-ems"
    >
      {/* About spine, horizontal Image + Content Wrap (image left on desktop, text right) */}
      <div className="spine spine-row">
        <div className="flex-1 flex flex-col gap-10 order-1 lg:order-none">
          <div className="ems-image relative aspect-[5/6] rounded-2xl overflow-hidden will-change-transform">
            <Image
              src="/images/movus-imotion-ems-suit.webp"
              alt="EMS i-Motion στολές στο MOVUS"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>

          <div className="grid grid-cols-3 gap-4 md:gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="overflow-hidden">
                <div className="ems-reveal">
                  <div className="flex items-start">
                    <AnimatedCounter
                      target={stat.target}
                      className="text-4xl md:text-5xl lg:text-6xl font-black text-movus-white tracking-tight leading-none"
                    />
                    <span className="text-2xl md:text-3xl lg:text-4xl font-black text-movus-white leading-none">
                      {stat.suffix}
                    </span>
                  </div>
                  <p
                    className="text-white/50 mt-3 font-medium"
                    style={{ fontSize: "var(--text-small)" }}
                  >
                    {stat.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-8 order-0 lg:order-none lg:sticky lg:top-28 lg:self-start">
          <div className="overflow-hidden">
            <p className="ems-reveal overline-light">(Ποιοι Είμαστε)</p>
          </div>

          <h2 className="heading-section leading-[0.92]">
            <span className="block overflow-hidden">
              <span className="ems-reveal inline-block text-movus-white">WHAT IS</span>
            </span>
            <span className="block overflow-hidden">
              <span className="ems-reveal inline-block text-movus-orange">MOVUS</span>
            </span>
          </h2>

          <div className="overflow-hidden mt-4 space-y-5 max-w-md">
            <p
              className="ems-reveal text-white/70 leading-[1.6]"
              style={{ fontSize: "var(--text-body-m)" }}
            >
              Το MOVUS δεν είναι γυμναστήριο με κάρτα και μηχανήματα. Είναι ένα περιβάλλον που χτίστηκε με έναν σκοπό: να αλλάζει σώματα και τρόπο ζωής.
            </p>
            <p
              className="ems-reveal text-white/60 leading-[1.6]"
              style={{ fontSize: "var(--text-body-m)" }}
            >
              Κάθε πελάτης έχει δικό του πρόγραμμα, δικό του coach, δικό του πλάνο. Τίποτα γενικό, τίποτα τυχαίο. Από την πρώτη μέρα ξέρεις τι κάνεις και γιατί.
            </p>
            <p
              className="ems-reveal text-white/60 leading-[1.6]"
              style={{ fontSize: "var(--text-body-m)" }}
            >
              Αρχάριος ή επαγγελματίας αθλητής, δεν έχει σημασία από πού ξεκινάς. Έχει σημασία πού θες να φτάσεις.
            </p>
          </div>

          <div className="ems-reveal mt-2">
            <Link
              href="/about"
              className="inline-flex items-center gap-2 border border-white/25 hover:border-movus-orange hover:bg-movus-orange/10 text-movus-white text-sm font-semibold uppercase tracking-[0.05em] px-7 py-4 rounded-lg transition-colors"
            >
              Γιατί MOVUS
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                aria-hidden="true"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m0 0l-6-6m6 6l-6 6" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
