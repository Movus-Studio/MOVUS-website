"use client";

import { motion, useReducedMotion } from "motion/react";

const points = [
  {
    number: "01",
    title: "Πιστοποιημένη Τεχνολογία",
    description:
      "Εξοπλισμός i-Motion από την Ισπανία με πιστοποίηση FDA. Η πιο προηγμένη EMS τεχνολογία.",
  },
  {
    number: "02",
    title: "Εξειδικευμένοι Γυμναστές",
    description:
      "Πιστοποιημένοι ΤΕΦΑΑ με ειδίκευση στην EMS. Επιστημονική προσέγγιση σε κάθε session.",
  },
  {
    number: "03",
    title: "Διατροφική Καθοδήγηση",
    description:
      "InBody ανάλυση σώματος και εξατομικευμένες συμβουλές για μέγιστα αποτελέσματα.",
  },
  {
    number: "04",
    title: "Premium Εμπειρία",
    description:
      "Max 2 άτομα ανά session. Προσωπική προσοχή και premium χώρος σχεδιασμένος για σένα.",
  },
];

export function WhyMovus() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-movus-white overflow-hidden" id="why-movus">
      <div className="spine">
        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="overline"
        >
          (Γιατί Εμάς)
        </motion.p>

        <motion.h2
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="heading-section text-movus-black leading-[0.92]"
        >
          <span className="block">
            4 ΛΟΓΟΙ ΝΑ <span className="text-movus-orange">ΕΠΙΛΕΞΕΙΣ</span>
          </span>
          <span className="block">ΤΟ MOVUS</span>
        </motion.h2>

        {/* Choose Me Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 lg:gap-x-10 mt-6 md:mt-10">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.08,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col gap-4 border-t border-movus-black/10 pt-6"
            >
              <span
                className="font-semibold text-movus-orange tracking-tight"
                style={{ fontSize: "var(--text-body-m)" }}
              >
                ({point.number})
              </span>
              <h3
                className="font-black uppercase text-movus-black leading-[1.05] tracking-tight break-words hyphens-auto"
                style={{
                  fontFamily: "var(--font-display), Impact, sans-serif",
                  fontWeight: 400,
                  fontSize: "clamp(1.25rem, 1vw + 0.75rem, 1.625rem)",
                  letterSpacing: "-0.01em",
                }}
              >
                {point.title}
              </h3>
              <p
                className="text-medium-gray leading-[1.6] max-w-[34ch]"
                style={{ fontSize: "var(--text-body-m)" }}
              >
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
