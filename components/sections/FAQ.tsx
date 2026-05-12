"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { faqItems, type FAQItem } from "@/content/faq";
import { generateFAQSchema } from "@/lib/schema";

interface FAQProps {
  items?: FAQItem[];
  image?: string;
  imageAlt?: string;
  helperText?: string;
}

export function FAQ({
  items = faqItems,
  image = "/images/movus-ems-training.webp",
  imageAlt = "EMS προπόνηση close-up",
  helperText = "Ξεκινώντας κάτι νέο έρχεται πάντα με ερωτήσεις. Εδώ καλύπτουμε τα πιο συχνά θέματα πριν την πρώτη σου συνεδρία.",
}: FAQProps = {}) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="bg-movus-orange" id="faq">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(generateFAQSchema(items)) }}
      />

      <div className="spine">
        <motion.p
          initial={prefersReducedMotion ? {} : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          data-motion-reveal
          className="text-movus-white/80"
          style={{ fontSize: "var(--text-caption)" }}
        >
          (Ρωτάς, Απαντάμε)
        </motion.p>

        <motion.h2
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -10% 0px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          data-motion-reveal
          className="heading-section text-movus-white leading-[0.92]"
        >
          <span className="block">ΣΥΧΝΕΣ</span>
          <span className="block text-movus-black">ΕΡΩΤΗΣΕΙΣ</span>
        </motion.h2>

        {/* 2-col: image left, accordion right.
            On lg+, items-start lets the left column stick independently while
            the right column scrolls past it. */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mt-6 md:mt-10 lg:items-start">
          {/* Image + helper — sticky on lg so it follows the FAQ list */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-black">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <p
              className="text-movus-white/90 leading-relaxed max-w-md"
              style={{ fontSize: "var(--text-small)" }}
            >
              {helperText}
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {items.map((item, index) => (
              <motion.div
                key={index}
                initial={prefersReducedMotion ? {} : { opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -5% 0px" }}
                transition={{
                  delay: index * 0.04,
                  duration: 0.4,
                  ease: [0.22, 1, 0.36, 1],
                }}
                data-motion-reveal
                className="bg-movus-white rounded-xl overflow-hidden"
              >
                <button
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
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
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={
                        prefersReducedMotion
                          ? { opacity: 1 }
                          : { height: 0, opacity: 0 }
                      }
                      animate={{ height: "auto", opacity: 1 }}
                      exit={
                        prefersReducedMotion
                          ? { opacity: 0 }
                          : { height: 0, opacity: 0 }
                      }
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
