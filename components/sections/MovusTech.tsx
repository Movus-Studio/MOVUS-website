"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function MovusTech() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference) and (pointer: fine)", () => {
        gsap.fromTo(
          ".tech-reveal",
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
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      className="bg-movus-black overflow-x-clip"
      id="movus-tech"
    >
      <div className="spine">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20">
          <div>
            <div className="overflow-hidden mb-6">
              <p className="tech-reveal overline-light">(Το Σύστημα)</p>
            </div>
            <h2 className="heading-section leading-[0.92]">
              <span className="block overflow-hidden">
                <span className="tech-reveal inline-block">
                  <span className="text-movus-white">THE </span>
                  <span className="text-movus-orange">MOVUS</span>
                </span>
              </span>
              <span className="block overflow-hidden">
                <span className="tech-reveal inline-block text-movus-orange">TECH</span>
              </span>
            </h2>
          </div>
          <div className="space-y-5">
            <p
              className="tech-reveal text-white/80 leading-[1.7]"
              style={{ fontSize: "var(--text-body-m)" }}
            >
              Από ομαδική προπόνηση μέχρι τεχνολογίες που δεν τις βρίσκεις εύκολα αλλού.
            </p>
            <p
              className="tech-reveal text-white/65 leading-[1.7]"
              style={{ fontSize: "var(--text-body-m)" }}
            >
              EMS που ενεργοποιεί το σώμα σου σε βάθος μέσα σε 20 λεπτά, εκεί που η κλασική προπόνηση δεν φτάνει. Συνεδρίες που συνδυάζουν θερμότητα, αρνητική πίεση, αρωματοθεραπεία και αναδόμηση κολλαγόνου. Το σώμα σου δουλεύει ενώ εσύ αποσυμφορείσαι.
            </p>
            <p
              className="tech-reveal text-white/65 leading-[1.7]"
              style={{ fontSize: "var(--text-body-m)" }}
            >
              Εμπειρίες που δεν τις περιγράφεις εύκολα, αλλά τις νιώθεις από την πρώτη φορά.
            </p>
            <p
              className="tech-reveal text-movus-white font-semibold leading-[1.4]"
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
