"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Αξιολόγηση & InBody",
    description: "Ξεκινάμε με πλήρη ανάλυση σώματος InBody και αξιολόγηση υγείας. Θέτουμε μαζί μετρήσιμους στόχους προσαρμοσμένους στο σώμα και τον τρόπο ζωής σου.",
    image: "/images/studio-interior.webp",
  },
  {
    number: "02",
    title: "Εξοπλισμός & Setup",
    description: "Φοράς την ειδική στολή EMS i-Motion. Ο γυμναστής ρυθμίζει την ένταση για κάθε μυϊκή ομάδα ξεχωριστά, με βάση το επίπεδό σου.",
    image: "/images/ems-suits.webp",
  },
  {
    number: "03",
    title: "Προπόνηση 20'",
    description: "20 λεπτά δομημένης άσκησης με real-time καθοδήγηση από τον γυμναστή. 350+ μύες ενεργοποιούνται ταυτόχρονα — αδύνατο με παραδοσιακή προπόνηση.",
    image: "/images/program-ems.webp",
  },
  {
    number: "04",
    title: "Tracking & Πρόοδος",
    description: "Παρακολούθηση αποτελεσμάτων με νέα InBody μέτρηση, αναπροσαρμογή προγράμματος. Μετρήσιμη, ορατή πρόοδος από τις πρώτες εβδομάδες.",
    image: "/images/program-group.webp",
  },
];

export function HowItWorks() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-movus-orange" id="how-it-works">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
        {/* Sticky two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left column — STICKY */}
          <div className="pt-20 md:pt-28 lg:pt-36 pb-10 lg:pb-0">
            <div className="lg:sticky lg:top-28 lg:pb-36">
              <motion.p
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-movus-white/60 mb-4"
                style={{ fontSize: "var(--text-caption)" }}
              >
                (Πώς Λειτουργεί)
              </motion.p>

              <motion.h2
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="heading-section text-movus-white mb-6"
              >
                Μια απλή,
                <br />δοκιμασμένη{" "}
                <span className="text-movus-black">διαδικασία</span>
              </motion.h2>

              <motion.p
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-movus-white/70 leading-[1.8] max-w-md"
                style={{ fontSize: "var(--text-body)" }}
              >
                Κάθε πελάτης ακολουθεί μια σαφή, δομημένη διαδικασία — από
                την αξιολόγηση μέχρι τα αποτελέσματα. Κάθε βήμα σχεδιασμένο
                για συνέπεια, εμπιστοσύνη και μακροχρόνια πρόοδο.
              </motion.p>
            </div>
          </div>

          {/* Right column — SCROLLS */}
          <div className="py-10 md:py-20 lg:py-36 space-y-6">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="relative bg-black rounded-3xl overflow-hidden aspect-[4/3] md:aspect-[16/10] lg:aspect-[4/3] xl:aspect-[16/10] group"
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                {/* Gradient overlay to make text readable */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/30 to-black/90" />
                
                {/* Step badge top left */}
                <div className="absolute top-6 left-6 md:top-8 md:left-8">
                  <span className="text-movus-white/80 font-medium tracking-wide text-lg md:text-xl">
                    STEP {step.number}.
                  </span>
                </div>

                {/* Content bottom */}
                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 lg:p-10">
                  <h3 className="heading-section text-movus-white mb-2 md:mb-4 leading-[0.9]">
                    {step.title}
                  </h3>
                  <p className="text-movus-white/80 leading-relaxed text-sm md:text-base max-w-md">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
