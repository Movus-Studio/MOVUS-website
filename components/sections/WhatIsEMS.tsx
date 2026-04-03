"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";

export function WhatIsEMS() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-movus-black py-20 md:py-28 lg:py-36" id="what-is-ems">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left — text */}
          <div>
            <motion.p
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="overline-light"
            >
              (Το Studio)
            </motion.p>

            <motion.h2
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="heading-section mb-8"
            >
              <span className="text-movus-orange">MOV</span>
              <span className="text-movus-white">US</span>
              <br />
              <span className="text-movus-white">EMS Studio</span>
            </motion.h2>

            <motion.p
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-white/60 leading-[1.8] max-w-md mb-12"
              style={{ fontSize: "var(--text-body)" }}
            >
              Η Ηλεκτρομυοδιέγερση (EMS) χρησιμοποιεί ηλεκτρικά σήματα
              για να ενεργοποιήσει 350+ μύες ταυτόχρονα. Τεχνολογία
              i-Motion από την Ισπανία, πιστοποίηση FDA, πιστοποιημένοι
              γυμναστές ΤΕΦΑΑ. Αυτό είναι το μέλλον του fitness.
            </motion.p>

            {/* Stats — larger, more visible */}
            <motion.div
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="flex gap-12 md:gap-16"
            >
              {[
                { target: 350, suffix: "+", label: "Μύες Ταυτόχρονα" },
                { target: 20, suffix: "'", label: "Ανά Session" },
                { target: 4, suffix: "x", label: "Αποτελεσματικότερο" },
              ].map((stat, i) => (
                <div key={i}>
                  <AnimatedCounter
                    target={stat.target}
                    suffix={stat.suffix}
                    className="text-4xl md:text-5xl font-black text-movus-white tracking-tight leading-none"
                  />
                  <p className="text-white/40 mt-2 font-medium" style={{ fontSize: "var(--text-caption)" }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — image, bigger and brighter */}
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-[4/5] rounded-xl overflow-hidden">
              <Image
                src="/images/ems-suits.webp"
                alt="EMS i-Motion στολές στο MOVUS"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
