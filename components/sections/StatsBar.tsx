"use client";

import { ScrollReveal } from "@/components/shared/ScrollReveal";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { motion } from "motion/react";

const stats = [
  { value: 350, suffix: "+", label: "μύες ταυτόχρονα" },
  { value: 20, suffix: " λεπτά", label: "ανά συνεδρία" },
  { value: 4, suffix: "x", label: "πιο αποτελεσματικό" },
  { value: 4, suffix: " εβδομάδες", label: "μέχρι τα πρώτα αποτελέσματα" },
];

export function StatsBar() {
  return (
    <section className="bg-movus-navy py-12 md:py-16 border-y border-white/5">
      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={staggerItem}
              className="text-center"
            >
              <AnimatedCounter
                target={stat.value}
                suffix={stat.suffix}
                className="text-4xl md:text-5xl lg:text-6xl font-black text-movus-orange tracking-[-0.02em]"
              />
              <p className="text-sm md:text-base text-medium-gray mt-2 font-medium">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
