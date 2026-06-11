"use client";

import { motion, useReducedMotion } from "motion/react";
import homeContent from "@/content/home/home.json";

const c = homeContent.whyMovus;
const points = c.reasons;

export function WhyMovus() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-movus-white overflow-x-clip" id="why-movus">
      <div className="spine">
        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          data-motion-reveal
          className="overline"
        >
          {c.eyebrow}
        </motion.p>

        <motion.h2
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          data-motion-reveal
          className="heading-section text-movus-black leading-[0.92]"
        >
          <span className="block">{c.headlineLine1}</span>
          <span className="block">
            {c.headlineLine2Prefix} <span className="text-movus-orange">MOVUS</span>
          </span>
        </motion.h2>

        {/* Choose Me Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 lg:gap-x-10 mt-6 md:mt-10">
          {points.map((point, i) => (
            <motion.div
              key={i}
              initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{
                delay: i * 0.08,
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
              data-motion-reveal
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
