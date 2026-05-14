"use client";

import { motion, useReducedMotion } from "motion/react";

export function CTABlock() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-movus-black py-20 md:py-28 lg:py-36">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12 text-center">
        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="overline-light"
        >
          (Έτοιμος;)
        </motion.p>

        <motion.h2
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="heading-section text-movus-white mb-6"
        >
          Η πρώτη συνεδρία
          <br />είναι <span className="text-movus-orange">δωρεάν.</span>
        </motion.h2>

        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-movus-white/35 max-w-md mx-auto mb-10 leading-relaxed"
          style={{ fontSize: "var(--text-body)" }}
        >
          Κλείσε τη δική σου δοκιμαστική συνεδρία EMS
          και δες γιατί 350+ μύες σε 20 λεπτά αλλάζουν τα πάντα.
        </motion.p>

        <motion.div
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <a
            href="https://app.movus.gr"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Κλείσε Δοκιμαστικό
          </a>
        </motion.div>
      </div>
    </section>
  );
}
