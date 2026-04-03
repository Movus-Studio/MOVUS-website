"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { faqItems } from "@/content/faq";
import { generateFAQSchema } from "@/lib/schema";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-movus-orange py-20 md:py-28 lg:py-36" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(faqItems)) }}
      />

      <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
        {/* Header */}
        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-movus-white/60 mb-4"
          style={{ fontSize: "var(--text-caption)" }}
        >
          (Συχνές Ερωτήσεις)
        </motion.p>

        <motion.h2
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="heading-display text-movus-white mb-16 md:mb-24 leading-[0.85]"
        >
          <span className="block">FREQUENTLY ASKED</span>
          <span className="block text-movus-black">QUESTIONS</span>
        </motion.h2>

        {/* Two column: image left, accordion right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Image + helper text */}
          <div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6">
              <Image
                src="/images/hero-woman.webp"
                alt="EMS training close-up"
                fill={false}
                width={600}
                height={450}
                className="w-full h-full object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <p className="text-movus-white/70 leading-relaxed" style={{ fontSize: "var(--text-small)" }}>
              Ξεκινώντας κάτι νέο έρχεται πάντα με ερωτήσεις. Εδώ καλύπτουμε
              τα πιο συχνά θέματα πριν την πρώτη σου συνεδρία.
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {faqItems.slice(0, 7).map((item, index) => (
              <motion.div
                key={index}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ delay: index * 0.04, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="bg-movus-white rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left"
                  aria-expanded={openIndex === index}
                >
                  <span
                    className="font-semibold text-movus-black pr-4 leading-snug"
                    style={{ fontSize: "var(--text-small)" }}
                  >
                    {item.question}
                  </span>
                  <motion.span
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                    className="flex-shrink-0 text-medium-gray"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={prefersReducedMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={prefersReducedMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p
                        className="px-5 pb-5 text-medium-gray leading-[1.7]"
                        style={{ fontSize: "var(--text-small)" }}
                      >
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
