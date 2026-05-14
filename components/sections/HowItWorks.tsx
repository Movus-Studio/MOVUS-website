"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Αξιολόγηση & InBody",
    description:
      "Ξεκινάμε με πλήρη ανάλυση σώματος InBody και αξιολόγηση υγείας. Θέτουμε μαζί μετρήσιμους στόχους προσαρμοσμένους στο σώμα και τον τρόπο ζωής σου.",
    image: "/images/movus-studio-interior.webp",
  },
  {
    number: "02",
    title: "Εξοπλισμός & Setup",
    description:
      "Φοράς την ειδική στολή EMS i-Motion. Ο γυμναστής ρυθμίζει την ένταση για κάθε μυϊκή ομάδα ξεχωριστά, με βάση το επίπεδό σου.",
    image: "/images/movus-imotion-ems-suit.webp",
  },
  {
    number: "03",
    title: "Προπόνηση 20'",
    description:
      "20 λεπτά δομημένης άσκησης με real-time καθοδήγηση από τον γυμναστή. 350+ μύες ενεργοποιούνται ταυτόχρονα, αδύνατο με παραδοσιακή προπόνηση.",
    image: "/images/movus-ems-core-workout.webp",
  },
  {
    number: "04",
    title: "Tracking & Πρόοδος",
    description:
      "Παρακολούθηση αποτελεσμάτων με νέα InBody μέτρηση, αναπροσαρμογή προγράμματος. Μετρήσιμη, ορατή πρόοδος από τις πρώτες εβδομάδες.",
    image: "/images/movus-ems-controller.webp",
  },
];

export function HowItWorks() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-movus-orange overflow-x-clip" id="how-it-works">
      {/* Process spine, horizontal Content + Step Wrap */}
      <div className="spine spine-row !gap-12 lg:!gap-20">
        {/* Content, sticky on lg */}
        <div className="lg:flex-1 lg:sticky lg:top-28 lg:self-start flex flex-col gap-6">
          <motion.p
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.5 }}
            data-motion-reveal
            className="text-movus-white/80"
            style={{ fontSize: "var(--text-caption)" }}
          >
            (Τα Βήματά Σου)
          </motion.p>

          <motion.h2
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            data-motion-reveal
            className="heading-section-sm text-movus-white leading-[0.92]"
          >
            <span className="block">ΜΙΑ ΑΠΛΗ,</span>
            <span className="block">ΔΟΚΙΜΑΣΜΕΝΗ</span>
            <span className="block text-movus-black">ΔΙΑΔΙΚΑΣΙΑ</span>
          </motion.h2>

          <motion.p
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ delay: 0.1, duration: 0.5 }}
            data-motion-reveal
            className="text-movus-white/85 leading-[1.7]"
            style={{ fontSize: "var(--text-body-m)" }}
          >
            Κάθε πελάτης ακολουθεί μια σαφή, δομημένη διαδικασία, από την αξιολόγηση μέχρι τα αποτελέσματα. Κάθε βήμα σχεδιασμένο για συνέπεια, εμπιστοσύνη και μακροχρόνια πρόοδο.
          </motion.p>
        </div>

        {/* Step Wrap — mobile: horizontal snap-scroll carousel (full bleed);
            lg+: vertical sticky-stack of 4 Step Cards */}
        <div
          className="
            lg:flex-1 flex flex-col gap-6 lg:gap-8
            max-lg:flex-row max-lg:items-stretch max-lg:gap-4
            max-lg:overflow-x-auto max-lg:snap-x max-lg:snap-mandatory
            max-lg:w-screen max-lg:relative max-lg:left-1/2 max-lg:right-1/2
            max-lg:-ml-[50vw] max-lg:-mr-[50vw]
            max-lg:pl-[6%] max-lg:pr-[6%] max-lg:scroll-pl-[6%]
            max-lg:no-scrollbar max-lg:[scrollbar-width:none]
            max-lg:[overscroll-behavior-x:contain]
            max-lg:[-webkit-overflow-scrolling:touch]
          "
        >
          {steps.map((step, i) => (
            <div
              key={i}
              style={{ top: `calc(7rem + ${i * 3}rem)` }}
              className="lg:sticky max-lg:flex-shrink-0 max-lg:w-[85%] max-lg:max-w-[460px] max-lg:snap-start"
            >
              <motion.article
                initial={prefersReducedMotion ? {} : { opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "0px 0px -5% 0px" }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                data-motion-reveal
                className="relative bg-movus-black rounded-3xl overflow-hidden aspect-[4/5] md:aspect-[5/4] lg:h-[min(34rem,calc(100dvh-18rem))] lg:aspect-auto group shadow-[0_30px_60px_-30px_rgba(0,0,0,0.5)]"
              >
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 45vw"
                />
                {/* Top scrim for STEP label readability */}
                <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-black/75 to-transparent" />
                {/* Bottom scrim for title + description readability */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/95 via-black/70 to-transparent" />

                <div className="absolute top-6 left-6 md:top-8 md:left-8">
                  <span className="text-movus-white font-medium tracking-[0.08em] uppercase text-sm md:text-base">
                    Step {step.number}.
                  </span>
                </div>

                <div className="absolute bottom-0 left-0 w-full p-6 md:p-8 lg:p-10">
                  <h3 className="heading-section text-movus-white mb-2 md:mb-3 leading-[0.95]" style={{ fontSize: "clamp(1.5rem, 1.8vw + 0.5rem, 2.5rem)" }}>
                    {step.title}
                  </h3>
                  <p
                    className="text-movus-white/90 leading-[1.55] max-w-md"
                    style={{ fontSize: "var(--text-body-m)" }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.article>
            </div>
          ))}
          {/* Tail spacer so the last card gets a stuck-moment before the section ends */}
          <div aria-hidden className="hidden lg:block lg:h-[28rem]" />
        </div>
      </div>
    </section>
  );
}
