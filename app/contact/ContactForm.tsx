"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { siteContact } from "@/content/site";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
  website: string;
}

export function ContactForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    setSubmitError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = (await res.json().catch(() => ({}))) as {
        ok?: boolean;
        message?: string;
      };
      if (!res.ok || !json.ok) {
        setSubmitError(
          json.message ??
            "Κάτι πήγε στραβά. Δοκίμασε ξανά ή κάλεσέ μας απευθείας."
        );
        return;
      }
      setIsSubmitted(true);
    } catch {
      setSubmitError(
        "Πρόβλημα σύνδεσης. Δοκίμασε ξανά ή κάλεσέ μας απευθείας."
      );
    }
  };

  if (isSubmitted) {
    return (
      <div className="bg-success/10 border border-success/20 rounded-xl p-8 text-center">
        <svg
          className="w-12 h-12 text-success mx-auto mb-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <h3 className="text-xl font-bold text-movus-navy mb-2">
          Ευχαριστούμε!
        </h3>
        <p className="text-dark-gray">
          Λάβαμε το μήνυμά σου. Θα επικοινωνήσουμε μαζί σου σύντομα.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
      {/* Honeypot — visually hidden, bots fill, humans don't. */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-10000px",
          width: "1px",
          height: "1px",
          overflow: "hidden",
        }}
      >
        <label>
          Website
          <input
            type="text"
            tabIndex={-1}
            autoComplete="off"
            {...register("website")}
          />
        </label>
      </div>

      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-movus-navy mb-1.5"
        >
          Ονοματεπώνυμο *
        </label>
        <input
          id="name"
          type="text"
          {...register("name", { required: "Το όνομα είναι υποχρεωτικό" })}
          className="w-full px-4 py-3 rounded-lg border border-light-gray bg-movus-white text-movus-black placeholder:text-medium-gray focus:outline-none focus:ring-2 focus:ring-movus-orange/50 focus:border-movus-orange transition-colors"
          placeholder="Το όνομά σου"
        />
        {errors.name && (
          <p className="text-error text-sm mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-movus-navy mb-1.5"
        >
          Email *
        </label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "Το email είναι υποχρεωτικό",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Μη έγκυρη διεύθυνση email",
            },
          })}
          className="w-full px-4 py-3 rounded-lg border border-light-gray bg-movus-white text-movus-black placeholder:text-medium-gray focus:outline-none focus:ring-2 focus:ring-movus-orange/50 focus:border-movus-orange transition-colors"
          placeholder="email@example.com"
        />
        {errors.email && (
          <p className="text-error text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-movus-navy mb-1.5"
        >
          Τηλέφωνο
        </label>
        <input
          id="phone"
          type="tel"
          {...register("phone")}
          className="w-full px-4 py-3 rounded-lg border border-light-gray bg-movus-white text-movus-black placeholder:text-medium-gray focus:outline-none focus:ring-2 focus:ring-movus-orange/50 focus:border-movus-orange transition-colors"
          placeholder="69x xxx xxxx"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-movus-navy mb-1.5"
        >
          Μήνυμα *
        </label>
        <textarea
          id="message"
          rows={5}
          {...register("message", {
            required: "Το μήνυμα είναι υποχρεωτικό",
          })}
          className="w-full px-4 py-3 rounded-lg border border-light-gray bg-movus-white text-movus-black placeholder:text-medium-gray focus:outline-none focus:ring-2 focus:ring-movus-orange/50 focus:border-movus-orange transition-colors resize-none"
          placeholder="Πες μας πώς μπορούμε να βοηθήσουμε..."
        />
        {errors.message && (
          <p className="text-error text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      {submitError && (
        <div className="rounded-lg border border-error/30 bg-error/5 px-4 py-3 text-sm text-error">
          {submitError}{" "}
          <a
            href={`tel:${siteContact.phoneHref}`}
            className="font-semibold underline"
          >
            {siteContact.phoneDisplay}
          </a>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-movus-orange hover:bg-movus-orange-dark disabled:opacity-60 disabled:cursor-not-allowed text-movus-white text-sm font-semibold uppercase tracking-[0.05em] px-8 py-4 rounded-lg transition-colors duration-200"
      >
        {isSubmitting ? "Αποστολή..." : "Αποστολή Μηνύματος"}
      </button>
    </form>
  );
}
