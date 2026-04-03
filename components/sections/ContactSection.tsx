"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
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
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    console.log("Form:", data);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="bg-movus-black py-20 md:py-28" id="contact">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12 text-center">
          <p className="heading-section text-movus-white mb-4">
            <span className="text-movus-orange">Ευχαριστούμε!</span>
          </p>
          <p className="text-movus-white/50" style={{ fontSize: "var(--text-body)" }}>
            Θα επικοινωνήσουμε μαζί σου σύντομα.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-movus-black py-20 md:py-32 lg:py-40" id="contact">
      <div className="mx-auto max-w-[800px] px-5 md:px-8 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.p
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="overline mb-6"
          >
            (Το Επόμενο Σου Βήμα Ξεκινάει Εδώ)
          </motion.p>
          <motion.h2
            initial={prefersReducedMotion ? {} : { opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="heading-display mb-6 leading-[0.85]"
          >
            <span className="block text-movus-white">ΚΛΕΙΣΕ ΔΩΡΕΑΝ</span>
            <span className="block text-movus-orange">ΔΟΚΙΜΑΣΤΙΚΟ</span>
          </motion.h2>
          <motion.p
            initial={prefersReducedMotion ? {} : { opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-movus-white/60 text-lg md:text-xl"
          >
            Έτοιμος/η να αλλάξεις το σώμα σου; Ας χτίσουμε τη πιο δυνατή και γρήγορη εκδοχή σου — μαζί.
          </motion.p>
        </div>

        <motion.form
          onSubmit={handleSubmit(onSubmit)}
          initial={prefersReducedMotion ? {} : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-5"
        >
          {/* Two columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-movus-white/40 mb-2" style={{ fontSize: "var(--text-caption)" }}>Όνομα</label>
              <input
                {...register("name", { required: true })}
                placeholder="Γιώργος Παπαδόπουλος"
                className="w-full bg-dark-gray border-0 rounded-lg px-4 py-3.5 text-movus-white placeholder:text-medium-gray/50 focus:ring-2 focus:ring-movus-orange/50 outline-none transition"
                style={{ fontSize: "var(--text-small)" }}
              />
            </div>
            <div>
              <label className="block text-movus-white/40 mb-2" style={{ fontSize: "var(--text-caption)" }}>Email</label>
              <input
                type="email"
                {...register("email", { required: true })}
                placeholder="email@example.com"
                className="w-full bg-dark-gray border-0 rounded-lg px-4 py-3.5 text-movus-white placeholder:text-medium-gray/50 focus:ring-2 focus:ring-movus-orange/50 outline-none transition"
                style={{ fontSize: "var(--text-small)" }}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div>
              <label className="block text-movus-white/40 mb-2" style={{ fontSize: "var(--text-caption)" }}>Πρόγραμμα</label>
              <select
                {...register("interest")}
                className="w-full bg-dark-gray border-0 rounded-lg px-4 py-3.5 text-movus-white focus:ring-2 focus:ring-movus-orange/50 outline-none transition appearance-none"
                style={{ fontSize: "var(--text-small)" }}
              >
                <option value="ems">i-Motion EMS</option>
                <option value="ishape">i-Shape EMS Suit</option>
                <option value="shapespace">Shape Space</option>
                <option value="group">Ομαδικά</option>
              </select>
            </div>
            <div>
              <label className="block text-movus-white/40 mb-2" style={{ fontSize: "var(--text-caption)" }}>Στόχος</label>
              <select
                {...register("goal")}
                className="w-full bg-dark-gray border-0 rounded-lg px-4 py-3.5 text-movus-white focus:ring-2 focus:ring-movus-orange/50 outline-none transition appearance-none"
                style={{ fontSize: "var(--text-small)" }}
              >
                <option value="weightloss">Απώλεια βάρους</option>
                <option value="toning">Σύσφιξη</option>
                <option value="strength">Ενδυνάμωση</option>
                <option value="recovery">Αποκατάσταση</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-movus-white/40 mb-2" style={{ fontSize: "var(--text-caption)" }}>Μήνυμα</label>
            <textarea
              {...register("message")}
              rows={4}
              placeholder="Πες μας τι ψάχνεις..."
              className="w-full bg-dark-gray border-0 rounded-lg px-4 py-3.5 text-movus-white placeholder:text-medium-gray/50 focus:ring-2 focus:ring-movus-orange/50 outline-none transition resize-none"
              style={{ fontSize: "var(--text-small)" }}
            />
          </div>

          <div className="text-center pt-2">
            <button type="submit" className="btn-primary">
              Ξεκίνα Προπόνηση
            </button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
