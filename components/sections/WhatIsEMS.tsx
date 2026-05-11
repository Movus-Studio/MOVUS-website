"use client";

import Image from "next/image";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const stats = [
  { target: 350, suffix: "+", label: "Μύες Ταυτόχρονα" },
  { target: 20, suffix: "'", label: "Ανά Session" },
  { target: 4, suffix: "x", label: "Αποτελεσματικότερο" },
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
      {/* About spine, horizontal Content + Image Wrap */}
      <div className="spine spine-row">
        <div className="flex-1 flex flex-col gap-8">
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
              Τα περισσότερα γυμναστήρια σου δίνουν έναν χώρο και μια κάρτα. Το MOVUS σου δίνει ένα σύστημα.
            </p>
            <p
              className="ems-reveal text-white/60 leading-[1.6]"
              style={{ fontSize: "var(--text-body-m)" }}
            >
              Ένα σύγχρονο training environment που συνδυάζει προπόνηση δύναμης, φυσική κατάσταση και τεχνολογία αιχμής, με έναν και μόνο σκοπό: να βλέπεις αποτέλεσμα. Πραγματικό, μετρήσιμο, γρήγορο.
            </p>
            <p
              className="ems-reveal text-white/60 leading-[1.6]"
              style={{ fontSize: "var(--text-body-m)" }}
            >
              Δεν υπάρχει «ένα πρόγραμμα για όλους». Υπάρχει το σωστό πρόγραμμα για εσένα, χτισμένο γύρω από τον στόχο σου, τον χρόνο σου και το σώμα σου.
            </p>
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-10">
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
      </div>

      {/* THE MOVUS SYSTEM, second spine, flush-top via -mt to share padding */}
      <div className="spine spine-flush-top">
        <div className="border-t border-white/10 pt-16 md:pt-20 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20">
          <div>
            <div className="overflow-hidden mb-6">
              <p className="ems-reveal overline-light">(Το Σύστημα)</p>
            </div>
            <h3 className="heading-section leading-[0.92]">
              <span className="block overflow-hidden">
                <span className="ems-reveal inline-block text-movus-white">THE MOVUS</span>
              </span>
              <span className="block overflow-hidden">
                <span className="ems-reveal inline-block text-movus-orange">SYSTEM</span>
              </span>
            </h3>
          </div>
          <div className="space-y-5">
            <p
              className="ems-reveal text-white/80 leading-[1.7]"
              style={{ fontSize: "var(--text-body-m)" }}
            >
              Κάθε πρόγραμμα στο MOVUS έχει ρόλο. Κανένα στοιχείο δεν είναι τυχαίο.
            </p>
            <p
              className="ems-reveal text-white/65 leading-[1.7]"
              style={{ fontSize: "var(--text-body-m)" }}
            >
              Χτίζεις δύναμη μέσα από δομημένη, καθοδηγούμενη προπόνηση. Βελτιώνεις τη φυσική κατάσταση με έξυπνη ένταση και progression. Ενεργοποιείς το σώμα σου σε βάθος με τεχνολογία EMS που δεν μπορεί να αντικαταστήσει καμία κλασική προπόνηση. Αποκαθιστάς, σφίγγεις και αναδιαμορφώνεις με wellness τεχνολογίες που δουλεύουν ενώ εσύ χαλαρώνεις.
            </p>
            <p
              className="ems-reveal text-white/65 leading-[1.7]"
              style={{ fontSize: "var(--text-body-m)" }}
            >
              Όλα συνδέονται. Όλα δουλεύουν μαζί. Γιατί το σώμα δεν εξελίσσεται με τύχη, εξελίσσεται με σύστημα.
            </p>
            <p
              className="ems-reveal text-movus-white font-semibold leading-[1.4]"
              style={{ fontSize: "var(--text-body-l)" }}
            >
              Αυτό είναι το MOVUS.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
