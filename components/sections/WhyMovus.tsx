"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const leftPoints = [
  {
    title: "Πιστοποιημένη\nΤεχνολογία",
    description: "Εξοπλισμός i-Motion από την Ισπανία με πιστοποίηση FDA. Η πιο προηγμένη EMS τεχνολογία.",
  },
  {
    title: "Διατροφική\nΚαθοδήγηση",
    description: "InBody ανάλυση σώματος και εξατομικευμένες συμβουλές για μέγιστα αποτελέσματα.",
  },
];

const rightPoints = [
  {
    title: "Εξειδικευμένοι\nΓυμναστές",
    description: "Πιστοποιημένοι ΤΕΦΑΑ με ειδίκευση στην EMS. Επιστημονική προσέγγιση σε κάθε session.",
  },
  {
    title: "Premium\nΕμπειρία",
    description: "Max 2 άτομα ανά session. Προσωπική προσοχή και premium χώρος σχεδιασμένος για σένα.",
  },
];

function ConnectorLine({ direction }: { direction: "left" | "right" }) {
  return (
    <div className={`hidden lg:flex items-center gap-0 ${direction === "left" ? "justify-end" : "justify-start"}`}>
      <div className="w-2 h-2 rounded-full bg-movus-orange border-2 border-movus-white" />
      <div className="w-16 xl:w-24 h-px bg-movus-orange/40" />
    </div>
  );
}

export function WhyMovus() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-movus-white py-20 md:py-28 lg:py-36 overflow-hidden" id="why-movus">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
        {/* Header — centered */}
        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="overline text-center"
        >
          (Γιατί MOVUS)
        </motion.p>

        <motion.h2
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="heading-display text-movus-black text-center mb-20 md:mb-28 lg:mb-32 leading-[0.85]"
        >
          <span className="block">
            4 ΛΟΓΟΙ ΝΑ <span className="text-movus-orange">ΕΠΙΛΕΞΕΙΣ</span>
          </span>
          <span className="block">ΤΟ MOVUS</span>
        </motion.h2>

        {/* Three-column layout: left points — center image — right points */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-0 items-center">
          {/* Left points */}
          <div className="space-y-16 lg:space-y-24">
            {leftPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={prefersReducedMotion ? {} : { opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-right"
              >
                <div className="flex items-center justify-end gap-4">
                  <div>
                    <h3
                      className="font-black uppercase text-movus-orange leading-[0.9] tracking-tight whitespace-pre-line text-3xl md:text-5xl"
                    >
                      {point.title}
                    </h3>
                    <p className="text-medium-gray leading-relaxed mt-4 max-w-[260px] ml-auto text-lg">
                      {point.description}
                    </p>
                  </div>
                  <ConnectorLine direction="left" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center image */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto lg:mx-8 xl:mx-12"
          >
            <div className="relative w-[300px] md:w-[360px] lg:w-[340px] xl:w-[400px] aspect-[2/3] rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.15)]">
              <Image
                src="/images/hero-woman.webp"
                alt="EMS προπόνηση στο MOVUS"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 360px, 400px"
              />
            </div>
          </motion.div>

          {/* Right points */}
          <div className="space-y-16 lg:space-y-24">
            {rightPoints.map((point, i) => (
              <motion.div
                key={i}
                initial={prefersReducedMotion ? {} : { opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="text-left"
              >
                <div className="flex items-center gap-4">
                  <ConnectorLine direction="right" />
                  <div>
                    <h3
                      className="font-black uppercase text-movus-orange leading-[0.9] tracking-tight whitespace-pre-line text-3xl md:text-5xl"
                    >
                      {point.title}
                    </h3>
                    <p className="text-medium-gray leading-relaxed mt-4 max-w-[260px] text-lg">
                      {point.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
