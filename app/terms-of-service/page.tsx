import type { Metadata } from "next";
import Link from "next/link";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Όροι Χρήσης",
  description:
    "Οι όροι και προϋποθέσεις χρήσης της ιστοσελίδας movus.gr και των υπηρεσιών MOVUS.",
  alternates: {
    canonical: "https://movus.gr/terms-of-service",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TermsOfServicePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Αρχική", url: "https://movus.gr" },
              { name: "Όροι Χρήσης", url: "https://movus.gr/terms-of-service" },
            ])
          ),
        }}
      />

      {/* Hero */}
      <section className="bg-movus-black pt-32 pb-16 md:pt-40 md:pb-20">
        <div className="mx-auto max-w-[1280px] px-5 md:px-8 lg:px-12">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-medium-gray">
              <li>
                <Link href="/" className="hover:text-movus-white transition-colors">
                  Αρχική
                </Link>
              </li>
              <li>/</li>
              <li className="text-movus-white">Όροι Χρήσης</li>
            </ol>
          </nav>

          <span className="inline-block text-xs font-semibold uppercase tracking-[0.1em] text-movus-orange-text mb-4">
            Νομικά
          </span>
          <h1 className="text-hero font-black tracking-[-0.02em] text-movus-white mb-6 leading-[0.95]">
            Όροι <span className="text-movus-orange">Χρήσης</span> &amp; Προϋποθέσεις.
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-[820px] px-5 md:px-8 lg:px-12 text-dark-gray leading-[1.8] text-lg space-y-10">
          <div>
            <h2 className="text-block font-black text-movus-navy mb-4 tracking-[-0.01em]">
              1. Εισαγωγή
            </h2>
            <p className="mb-4">
              Η ιστοσελίδα movus.gr (εφεξής «Ιστοσελίδα») ανήκει στην εταιρεία MOVUS – Future of Fitness (εφεξής «Εταιρεία», «εμείς», «μας»). Μέσω της Ιστοσελίδας παρουσιάζουμε πληροφορίες για τις υπηρεσίες μας (ηλεκτρομυοδιέγερση – EMS, ομαδικά προγράμματα, i‑Shape κ.λπ.), παρέχουμε δυνατότητα επικοινωνίας και προσφέρουμε διαδικτυακό σύστημα προκρατήσεων. Η έδρα της εταιρείας βρίσκεται στην Ιερού Λόγου 1, 26331 Πάτρα, Αχαΐα, Ελλάδα, το email επικοινωνίας είναι{" "}
              <a href="mailto:info@movus.gr" className="text-movus-orange-text hover:underline">
                info@movus.gr
              </a>{" "}
              και το τηλέφωνο{" "}
              <a href="tel:+302611814010" className="text-movus-orange-text hover:underline">
                +30 2611 814 010
              </a>
              .
            </p>
            <p>
              Με την πρόσβαση ή/και χρήση της Ιστοσελίδας συμφωνείτε ότι δεσμεύεστε από τους παρόντες Όρους Χρήσης. Αν δεν συμφωνείτε, παρακαλούμε μη χρησιμοποιείτε την Ιστοσελίδα.
            </p>
          </div>

          <div>
            <h2 className="text-block font-black text-movus-navy mb-4 tracking-[-0.01em]">
              2. Παρεχόμενες Υπηρεσίες
            </h2>
            <p>
              Η Εταιρεία προσφέρει στούντιο ηλεκτρομυοδιέγερσης (EMS) με ειδικά γιλέκα i‑Motion και i‑Shape, ομαδικά προγράμματα (π.χ. Yoga, Pilates, functional training και circuit training) και άλλες υπηρεσίες φυσικής άσκησης. Οι περιγραφές των υπηρεσιών έχουν πληροφοριακό χαρακτήρα. Η Εταιρεία μπορεί να τροποποιεί ή να διακόπτει οποιαδήποτε υπηρεσία χωρίς προειδοποίηση.
            </p>
          </div>

          <div>
            <h2 className="text-block font-black text-movus-navy mb-4 tracking-[-0.01em]">
              3. Χρήση της Ιστοσελίδας
            </h2>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong className="text-movus-navy">Ευχρηστία.</strong> Η Ιστοσελίδα προορίζεται για ενημέρωση και για προκρατήσεις συνεδριών. Ο χρήστης οφείλει να δηλώνει αληθή στοιχεία κατά την υποβολή φόρμας επικοινωνίας ή προκράτησης.
              </li>
              <li>
                <strong className="text-movus-navy">Υπεύθυνη χρήση.</strong> Δεν επιτρέπεται η χρησιμοποίηση της Ιστοσελίδας με τρόπο που παραβιάζει την ισχύουσα νομοθεσία, συμπεριλαμβανομένης της αποστολής ψευδών ή συκοφαντικών πληροφοριών, της παραβίασης πνευματικών δικαιωμάτων ή της προσπάθειας μη εξουσιοδοτημένης πρόσβασης σε συστήματα.
              </li>
              <li>
                <strong className="text-movus-navy">Ηλικιακό όριο.</strong> Οι υπηρεσίες απευθύνονται σε ενήλικες. Συμμετοχή ανηλίκων επιτρέπεται μόνο με τη ρητή συναίνεση των γονέων/κηδεμόνων.
              </li>
            </ol>
          </div>

          <div>
            <h2 className="text-block font-black text-movus-navy mb-4 tracking-[-0.01em]">
              4. Κρατήσεις και Πληρωμές
            </h2>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong className="text-movus-navy">Κρατήσεις.</strong> Η κράτηση πραγματοποιείται μέσω της φόρμας επικοινωνίας ή τηλεφωνικά. Η επιβεβαίωση της κράτησης παρέχεται από τη γραμματεία της Εταιρείας.
              </li>
              <li>
                <strong className="text-movus-navy">Τιμολογιακή πολιτική.</strong> Οι τιμές για συνεδρίες και προγράμματα αναρτώνται στον χώρο της Εταιρείας και ενδέχεται να αλλάξουν χωρίς προειδοποίηση. Οι πληρωμές μπορούν να γίνονται επιτόπου ή μέσω ασφαλών συνεργαζόμενων παρόχων (π.χ. τράπεζες, συστήματα ηλεκτρονικών πληρωμών). Οι καταβολές είναι προπληρωτέες και δεν επιστρέφονται μετά την παροχή της υπηρεσίας.
              </li>
              <li>
                <strong className="text-movus-navy">Ακυρώσεις.</strong> Η ακύρωση ή αλλαγή ραντεβού πρέπει να γνωστοποιείται τουλάχιστον 24 ώρες πριν. Διαφορετικά, η συνεδρία θεωρείται ότι πραγματοποιήθηκε και ενδέχεται να χρεωθεί.
              </li>
            </ol>
          </div>

          <div>
            <h2 className="text-block font-black text-movus-navy mb-4 tracking-[-0.01em]">
              5. Περιορισμός Ευθύνης
            </h2>
            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <strong className="text-movus-navy">Ιατρική ευθύνη.</strong> Η συμμετοχή στα προγράμματα απαιτεί καλή κατάσταση υγείας. Οι χρήστες δηλώνουν υπεύθυνα ότι είναι ικανοί να ακολουθήσουν τα προγράμματα και ότι έχουν λάβει ιατρική έγκριση, όπου χρειάζεται. Η Εταιρεία και οι συνεργάτες της δεν φέρουν ευθύνη για τυχόν τραυματισμούς που οφείλονται σε λανθασμένη χρήση του εξοπλισμού ή απόκρυψη ιατρικών προβλημάτων.
              </li>
              <li>
                <strong className="text-movus-navy">Αποποίηση εγγυήσεων.</strong> Η Εταιρεία καταβάλλει προσπάθεια να διατηρεί την Ιστοσελίδα ενημερωμένη και ασφαλή, χωρίς να εγγυάται ότι το περιεχόμενο είναι ακριβές, πλήρες ή απαλλαγμένο από σφάλματα. Δεν ευθυνόμαστε για τυχόν απώλειες (άμεσες ή έμμεσες) από τη χρήση της Ιστοσελίδας ή των υπηρεσιών.
              </li>
            </ol>
          </div>

          <div>
            <h2 className="text-block font-black text-movus-navy mb-4 tracking-[-0.01em]">
              6. Πνευματική Ιδιοκτησία
            </h2>
            <p>
              Όλο το περιεχόμενο της Ιστοσελίδας (σήματα, λογότυπα, κείμενα, φωτογραφίες, βίντεο κ.λπ.) αποτελεί πνευματική ιδιοκτησία της Εταιρείας ή τρίτων προμηθευτών και προστατεύεται από ελληνική και ευρωπαϊκή νομοθεσία. Απαγορεύεται η αναπαραγωγή, αντιγραφή, πώληση ή διανομή του περιεχομένου χωρίς προηγούμενη γραπτή άδεια.
            </p>
          </div>

          <div>
            <h2 className="text-block font-black text-movus-navy mb-4 tracking-[-0.01em]">
              7. Προστασία Προσωπικών Δεδομένων
            </h2>
            <p>
              Η Εταιρεία επεξεργάζεται προσωπικά δεδομένα σύμφωνα με τον GDPR και την ελληνική νομοθεσία. Ανατρέξτε στην{" "}
              <Link href="/privacy-policy" className="text-movus-orange-text hover:underline">
                Πολιτική Απορρήτου
              </Link>{" "}
              για λεπτομέρειες σχετικά με τη συλλογή, χρήση και αποθήκευση των δεδομένων σας.
            </p>
          </div>

          <div>
            <h2 className="text-block font-black text-movus-navy mb-4 tracking-[-0.01em]">
              8. Τροποποιήσεις Όρων
            </h2>
            <p>
              Η Εταιρεία διατηρεί το δικαίωμα να τροποποιεί τους παρόντες Όρους Χρήσης ανά πάσα στιγμή. Οι αλλαγές θα δημοσιεύονται στην Ιστοσελίδα και θα ισχύουν από τη δημοσίευσή τους. Συνιστούμε να ελέγχετε τακτικά τους Όρους.
            </p>
          </div>

          <div>
            <h2 className="text-block font-black text-movus-navy mb-4 tracking-[-0.01em]">
              9. Εφαρμοστέο Δίκαιο και Δικαιοδοσία
            </h2>
            <p>
              Οι παρόντες Όροι και κάθε διαφορά που προκύπτει από τη χρήση της Ιστοσελίδας διέπονται από το ελληνικό δίκαιο. Αρμόδια είναι τα δικαστήρια της Πάτρας.
            </p>
          </div>

          <div>
            <h2 className="text-block font-black text-movus-navy mb-4 tracking-[-0.01em]">
              10. Επικοινωνία
            </h2>
            <p>
              Για οποιαδήποτε απορία σχετικά με τους παρόντες Όρους, μπορείτε να επικοινωνήσετε μαζί μας στο{" "}
              <a href="mailto:info@movus.gr" className="text-movus-orange-text hover:underline">
                info@movus.gr
              </a>{" "}
              ή στο τηλέφωνο{" "}
              <a href="tel:+302611814010" className="text-movus-orange-text hover:underline">
                +30 2611 814 010
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
