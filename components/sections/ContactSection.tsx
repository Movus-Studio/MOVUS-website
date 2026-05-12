"use client";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

interface FormData {
  name: string;
  email: string;
  interest: string;
  goal: string;
  message: string;
}

export function ContactSection() {
  const prefersReducedMotion = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);
  // CRITICAL: gate form behind mounted flag. SharkID + other password-manager
  // extensions inject DOM into form fields between SSR and hydration, causing
  // a hydration mismatch that crashes React on the WHOLE page. Rendering the
  // form post-mount only means SSR has no form for extensions to molest.
  // See sharkid_extension_form_hydration.md memory.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const { register, handleSubmit } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log("Form:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="bg-movus-black" id="contact">
        <div className="spine text-center">
          <p className="heading-section text-movus-white mb-4">
            <span className="text-movus-orange">Ευχαριστούμε!</span>
          </p>
          <p className="text-movus-white/50" style={{ fontSize: "var(--text-body-m)" }}>
            Θα επικοινωνήσουμε μαζί σου σύντομα.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      className="bg-movus-black"
      id="contact"
      style={{
        // Push content above the fixed bottom-right CTA pill (200×60 + safe-area)
        // so the message textarea + submit button aren't covered on mobile.
        paddingBottom: "calc(env(safe-area-inset-bottom) + 80px)",
      }}
    >
      <div className="spine">
        {/* Header */}
        <div className="flex flex-col gap-8">
          <motion.p
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            data-motion-reveal
            className="overline-light"
          >
            (Το Πρώτο Βήμα)
          </motion.p>
          <motion.h2
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            data-motion-reveal
            className="heading-section leading-[0.92]"
          >
            <span className="block text-movus-white">ΞΕΡΕΙΣ ΗΔΗ</span>
            <span className="block text-movus-orange">ΟΤΙ ΘΕΛΕΙΣ ΑΛΛΑΓΗ.</span>
          </motion.h2>
          <motion.div
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ delay: 0.15, duration: 0.6 }}
            data-motion-reveal
            className="max-w-2xl space-y-4 text-movus-white/70 leading-[1.6]"
            style={{ fontSize: "var(--text-body-m)" }}
          >
            <p>Το μόνο που μένει είναι να κάνεις το πρώτο βήμα.</p>
            <p>
              Μίλα με τον coach σου, βρες το πρόγραμμα που σου ταιριάζει και ξεκίνα.
            </p>
          </motion.div>
        </div>

        {mounted && (
        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -5% 0px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          data-motion-reveal
          className="space-y-8"
          suppressHydrationWarning
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8" suppressHydrationWarning>
            <div suppressHydrationWarning>
              <label className="block text-movus-white font-medium mb-3 text-lg">
                Όνομα
              </label>
              <input
                {...register("name", { required: true })}
                placeholder="Γιώργος Παπαδόπουλος"
                className="w-full bg-dark-gray border-0 rounded-xl px-5 py-4 text-movus-white placeholder:text-medium-gray/60 focus:ring-2 focus:ring-movus-orange/50 outline-none transition"
                style={{ fontSize: "var(--text-body)" }}
                suppressHydrationWarning
              />
            </div>
            <div suppressHydrationWarning>
              <label className="block text-movus-white font-medium mb-3 text-lg">
                Email
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="email@example.com"
                className="w-full bg-dark-gray border-0 rounded-xl px-5 py-4 text-movus-white placeholder:text-medium-gray/60 focus:ring-2 focus:ring-movus-orange/50 outline-none transition"
                style={{ fontSize: "var(--text-body)" }}
                suppressHydrationWarning
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8" suppressHydrationWarning>
            <div suppressHydrationWarning>
              <label className="block text-movus-white font-medium mb-3 text-lg">
                Πρόγραμμα
              </label>
              <select
                {...register("interest")}
                className="w-full bg-dark-gray border-0 rounded-xl px-5 py-4 text-movus-white focus:ring-2 focus:ring-movus-orange/50 outline-none transition appearance-none"
                style={{ fontSize: "var(--text-body)" }}
                suppressHydrationWarning
              >
                <option value="ems">i-Motion EMS</option>
                <option value="ishape">i-Shape EMS Suit</option>
                <option value="shapespace">Shape Space</option>
                <option value="group">Ομαδικά</option>
              </select>
            </div>
            <div suppressHydrationWarning>
              <label className="block text-movus-white font-medium mb-3 text-lg">
                Στόχος
              </label>
              <select
                {...register("goal")}
                className="w-full bg-dark-gray border-0 rounded-xl px-5 py-4 text-movus-white focus:ring-2 focus:ring-movus-orange/50 outline-none transition appearance-none"
                style={{ fontSize: "var(--text-body)" }}
                suppressHydrationWarning
              >
                <option value="weightloss">Απώλεια βάρους</option>
                <option value="toning">Σύσφιξη</option>
                <option value="strength">Ενδυνάμωση</option>
                <option value="recovery">Αποκατάσταση</option>
              </select>
            </div>
          </div>

          <div suppressHydrationWarning>
            <label className="block text-movus-white font-medium mb-3 text-lg">
              Μήνυμα
            </label>
            <textarea
              {...register("message")}
              rows={5}
              placeholder="Πες μας τι ψάχνεις..."
              className="w-full bg-dark-gray border-0 rounded-xl px-5 py-4 text-movus-white placeholder:text-medium-gray/60 focus:ring-2 focus:ring-movus-orange/50 outline-none transition resize-none"
              style={{ fontSize: "var(--text-body)" }}
              suppressHydrationWarning
            />
          </div>

          <div className="text-center pt-4">
            <button type="submit" className="btn-primary">
              Ξεκίνα Προπόνηση
            </button>
          </div>
        </motion.form>
        )}
      </div>
    </section>
  );
}
