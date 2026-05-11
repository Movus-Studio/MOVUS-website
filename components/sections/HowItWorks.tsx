"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Αξιολόγηση & InBody",
    description:
      "Ξεκινάμε με πλήρη ανάλυση σώματος InBody και αξιολόγηση υγείας. Θέτουμε μαζί μετρήσιμους στόχους προσαρμοσμένους στο σώμα και τον τρόπο ζωής σου.",
    image: "/images/studio-interior.webp",
  },
  {
    number: "02",
    title: "Εξοπλισμός & Setup",
    description:
      "Φοράς την ειδική στολή EMS i-Motion. Ο γυμναστής ρυθμίζει την ένταση για κάθε μυϊκή ομάδα ξεχωριστά, με βάση το επίπεδό σου.",
    image: "/images/ems-suits.webp",
  },
  {
    number: "03",
    title: "Προπόνηση 20'",
    description:
      "20 λεπτά δομημένης άσκησης με real-time καθοδήγηση από τον γυμναστή. 350+ μύες ενεργοποιούνται ταυτόχρονα, αδύνατο με παραδοσιακή προπόνηση.",
    image: "/images/program-ems.webp",
  },
  {
    number: "04",
    title: "Tracking & Πρόοδος",
    description:
      "Παρακολούθηση αποτελεσμάτων με νέα InBody μέτρηση, αναπροσαρμογή προγράμματος. Μετρήσιμη, ορατή πρόοδος από τις πρώτες εβδομάδες.",
    image: "/images/program-group.webp",
  },
];

export function HowItWorks() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-movus-orange overflow-hidden" id="how-it-works">
      {/* Process spine, horizontal Content + Step Wrap */}
      <div className="spine spine-row !gap-12 lg:!gap-20">
        {/* Content, sticky on lg */}
        <div className="lg:flex-1 lg:sticky lg:top-28 lg:self-start flex flex-col gap-6">
          <motion.p
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-movus-white/80"
            style={{ fontSize: "var(--text-caption)" }}
          >
            (Τα Βήματά Σου)
          </motion.p>

          <motion.h2
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="heading-section-sm text-movus-white leading-[0.92]"
          >
            <span className="block">ΜΙΑ ΑΠΛΗ,</span>
            <span className="block">ΔΟΚΙΜΑΣΜΕΝΗ</span>
            <span className="block text-movus-black">ΔΙΑΔΙΚΑΣΙΑ</span>
          </motion.h2>

          <motion.p
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-movus-white/85 leading-[1.7]"
            style={{ fontSize: "var(--text-body-m)" }}
          >
            Κάθε πελάτης ακολουθεί μια σαφή, δομημένη διαδικασία, από την αξιολόγηση μέχρι τα αποτελέσματα. Κάθε βήμα σχεδιασμένο για συνέπεια, εμπιστοσύνη και μακροχρόνια πρόοδο.
          </motion.p>
        </div>

        {/* Step Wrap, vertical stack of 4 Step Cards */}
        <div className="lg:flex-1 flex flex-col gap-6">
          {steps.map((step, i) => (
            <motion.article
              key={i}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative bg-movus-black rounded-3xl overflow-hidden aspect-[4/5] md:aspect-[5/4] lg:aspect-[4/5] group"
            >
              <Image
                src={step.image}
                alt={step.title}
                fill
                className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 45vw"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/90" />

              <div className="absolute top-6 left-6 md:top-8 md:left-8">
                <span className="text-movus-white font-medium tracking-wide text-lg md:text-xl">
                  STEP {step.number}.
                </span>
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 md:p-10">
                <h3 className="heading-section text-movus-white mb-3 md:mb-4 leading-[0.95]" style={{ fontSize: "clamp(1.75rem, 2.5vw + 0.5rem, 3rem)" }}>
                  {step.title}
                </h3>
                <p
                  className="text-movus-white/85 leading-[1.6] max-w-md"
                  style={{ fontSize: "var(--text-body-m)" }}
                >
                  {step.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
