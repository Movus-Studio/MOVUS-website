import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "404. Η σελίδα δεν βρέθηκε | MOVUS" },
  description:
    "Η σελίδα δεν βρέθηκε. Πήγαινε πίσω στην αρχική του MOVUS, EMS γυμναστήριο στην Πάτρα.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center justify-center bg-movus-black">
      <div className="text-center px-5">
        <p className="text-8xl font-black text-movus-orange mb-4">404</p>
        <h1 className="text-2xl md:text-3xl font-bold text-movus-white mb-4">
          Η σελίδα δεν βρέθηκε
        </h1>
        <p className="text-medium-gray mb-8 max-w-md mx-auto">
          Η σελίδα που αναζητάς δεν υπάρχει ή έχει μετακινηθεί.
        </p>
        <Link
          href="/"
          className="inline-block bg-movus-orange hover:bg-movus-orange-dark text-movus-white text-sm font-semibold uppercase tracking-[0.05em] px-8 py-4 rounded-lg transition-colors duration-200"
        >
          Πίσω στην Αρχική
        </Link>
      </div>
    </section>
  );
}
