"use client";

import { motion, useReducedMotion } from "motion/react";

export function Community() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      className="bg-movus-black overflow-x-clip"
      id="community"
    >
      <div className="spine items-center text-center !gap-6">
        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          data-motion-reveal
          className="overline-light"
        >
          (Η Κοινότητα)
        </motion.p>

        <motion.h2
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          data-motion-reveal
          className="heading-section-sm text-movus-white leading-[0.95] max-w-3xl"
        >
          Υπάρχουν πολλά μέρη να πας να γυμναστείς.{" "}
          <span className="text-movus-orange">
            Λίγα που θα θυμάσαι γιατί πήγες.
          </span>
        </motion.h2>

        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ delay: 0.15, duration: 0.6 }}
          data-motion-reveal
          className="text-movus-white/70 max-w-xl leading-[1.6]"
          style={{ fontSize: "var(--text-body-m)" }}
        >
          Αν ψάχνεις ένα από αυτά, είσαι στο σωστό μέρος.
        </motion.p>

        <motion.a
          href="https://app.movus.gr"
          target="_blank"
          rel="noopener noreferrer"
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ delay: 0.25, duration: 0.6 }}
          data-motion-reveal
          className="group mt-2 inline-flex items-center justify-center bg-movus-orange hover:bg-movus-orange-dark transition-colors w-[200px] md:w-[245px] h-[60px] md:h-[72px] shadow-2xl rounded-[4px] rounded-tl-[10px] md:rounded-tl-[12px]"
        >
          <span
            className="text-movus-white font-bold uppercase whitespace-nowrap text-[9px] md:text-[11px] tracking-[0.04em] transition-transform duration-300 group-hover:translate-x-[2px]"
            style={{ transform: "skewX(-8deg)" }}
          >
            ΚΛΕΙΣΕ ΤΗΝ ΠΡΩΤΗ ΣΟΥ ΣΥΝΕΔΡΙΑ
          </span>
        </motion.a>
      </div>
    </section>
  );
}
