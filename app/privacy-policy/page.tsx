import type { Metadata } from "next";
import Link from "next/link";
import { generateBreadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Πολιτική Απορρήτου",
  description:
    "Πώς η MOVUS συλλέγει, χρησιμοποιεί και προστατεύει τα προσωπικά σου δεδομένα, σύμφωνα με τον GDPR.",
  alternates: {
    canonical: "https://movus.gr/privacy-policy",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const LAST_UPDATED = "15 Μαΐου 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            generateBreadcrumbSchema([
              { name: "Αρχική", url: "https://movus.gr" },
              { name: "Πολιτική Απορρήτου", url: "https://movus.gr/privacy-policy" },
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
              <li className="text-movus-white">Πολιτική Απορρήτου</li>
            </ol>
          </nav>

          <span className="inline-block text-xs font-semibold uppercase tracking-[0.1em] text-movus-orange-text mb-4">
            Νομικά
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-[-0.02em] text-movus-white mb-6 leading-[0.95]">
            Πολιτική <span className="text-movus-orange">Απορρήτου</span>.
          </h1>
          <p className="text-sm text-medium-gray uppercase tracking-[0.1em]">
            Τελευταία ενημέρωση: {LAST_UPDATED}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-[820px] px-5 md:px-8 lg:px-12 text-dark-gray leading-[1.8] text-lg space-y-10">
          <p>
            Η παρούσα Πολιτική Απορρήτου εξηγεί πώς η MOVUS – Future of Fitness συλλέγει, χρησιμοποιεί, αποθηκεύει και προστατεύει τα προσωπικά σας δεδομένα όταν χρησιμοποιείτε την Ιστοσελίδα μας. Ο GDPR απαιτεί οι πολιτικές απορρήτου να παρέχουν μεταξύ άλλων την ταυτότητα του υπευθύνου επεξεργασίας, τους σκοπούς συλλογής δεδομένων, τη νομική βάση, τους αποδέκτες, τα δικαιώματα των υποκειμένων και την περίοδο διατήρησης. Παρακαλούμε να διαβάσετε προσεκτικά την πολιτική αυτή.
          </p>

          <div>
            <h2 className="text-2xl md:text-3xl font-black text-movus-navy mb-4 tracking-[-0.01em]">
              1. Υπεύθυνος Επεξεργασίας
            </h2>
            <p className="mb-3">MOVUS – Future of Fitness</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Διεύθυνση: Ιερού Λόγου 1, 26331 Πάτρα, Αχαΐα, Ελλάδα</li>
              <li>
                Ηλεκτρονική διεύθυνση:{" "}
                <a href="mailto:info@movus.gr" className="text-movus-orange-text hover:underline">
                  info@movus.gr
                </a>
              </li>
              <li>
                Τηλέφωνο:{" "}
                <a href="tel:+302611814010" className="text-movus-orange-text hover:underline">
                  +30 2611 814 010
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black text-movus-navy mb-4 tracking-[-0.01em]">
              2. Ποιες πληροφορίες συλλέγουμε
            </h2>
            <p className="mb-4">Συλλέγουμε προσωπικά δεδομένα όταν οι χρήστες:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Συμπληρώνουν τη φόρμα επικοινωνίας ή κρατήσεων (ονοματεπώνυμο, email, τηλέφωνο, προτιμώμενο πρόγραμμα, μήνυμα).</li>
              <li>Συμμετέχουν σε προγράμματα ή αγοράζουν υπηρεσίες (στούντιο EMS, ομαδικά προγράμματα). Ενδέχεται να χρειαστούμε δεδομένα υγείας (π.χ. ιατρικό ιστορικό) για λόγους ασφαλείας και εξατομίκευσης.</li>
              <li>Επικοινωνούν μαζί μας μέσω email ή τηλεφώνου.</li>
              <li>Περιηγούνται στην Ιστοσελίδα, όπου χρησιμοποιούνται αποκλειστικά αναγκαία (essential) cookies για τη βασική λειτουργία της (λεπτομέρειες στην ενότητα 9 «Cookies»).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black text-movus-navy mb-4 tracking-[-0.01em]">
              3. Πώς συλλέγουμε τα δεδομένα
            </h2>
            <p>
              Τα δεδομένα παρέχονται άμεσα από εσάς όταν συμπληρώνετε φόρμες ή επικοινωνείτε μαζί μας. Δεν συλλέγουμε προσωπικά δεδομένα μέσω cookies παρακολούθησης και δεν λαμβάνουμε δεδομένα από τρίτες πηγές.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black text-movus-navy mb-4 tracking-[-0.01em]">
              4. Νομική Βάση Επεξεργασίας
            </h2>
            <p className="mb-4">Η επεξεργασία στηρίζεται σε μία ή περισσότερες από τις παρακάτω νομικές βάσεις:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-movus-navy">Εκτέλεση σύμβασης:</strong> Για να εκπληρώνουμε τις υποχρεώσεις μας προς τα μέλη μας (π.χ. παροχή συνεδριών, διαχείριση κρατήσεων).</li>
              <li><strong className="text-movus-navy">Συγκατάθεση:</strong> Για επικοινωνία marketing (newsletter) ή για τη χρήση μη αναγκαίων cookies παρέχουμε σαφές πεδίο επιλογής. Μπορείτε να αποσύρετε τη συγκατάθεσή σας ανά πάσα στιγμή.</li>
              <li><strong className="text-movus-navy">Νόμιμο συμφέρον:</strong> Για τη βελτίωση των υπηρεσιών και τη διαχείριση της Ιστοσελίδας, υπό τον όρο ότι τα συμφέροντα και τα θεμελιώδη δικαιώματά σας δεν υπερισχύουν.</li>
              <li><strong className="text-movus-navy">Νομική υποχρέωση:</strong> Για την τήρηση υποχρεώσεων που προβλέπουν οι φορολογικοί, λογιστικοί και υγειονομικοί κανονισμοί.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black text-movus-navy mb-4 tracking-[-0.01em]">
              5. Πώς χρησιμοποιούμε τα δεδομένα σας
            </h2>
            <p className="mb-4">Τα δεδομένα χρησιμοποιούνται για τους εξής σκοπούς:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Διαχείριση κρατήσεων, παροχή συνεδριών EMS και ομαδικών προγραμμάτων.</li>
              <li>Επικοινωνία με τους χρήστες για διευκρινίσεις σχετικά με τις υπηρεσίες.</li>
              <li>Αποστολή ενημερωτικών δελτίων ή προσφορών (μόνο με συγκατάθεση).</li>
              <li>Βελτίωση της εμπειρίας χρήστη μέσω αναγκαίων cookies λειτουργικότητας.</li>
              <li>Συμμόρφωση με νομικές υποχρεώσεις.</li>
            </ul>
            <p className="mt-4">
              Δεν πωλούμε τα προσωπικά σας δεδομένα. Ενδέχεται να διαβιβάσουμε δεδομένα σε τρίτους παρόχους (π.χ. υπηρεσίες hosting, λογισμικό κράτησης, συστήματα πληρωμών) μόνο αν αυτοί λειτουργούν ως εκτελούντες επεξεργασία και παρέχουν εγγυήσεις προστασίας.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black text-movus-navy mb-4 tracking-[-0.01em]">
              6. Χρόνος διατήρησης
            </h2>
            <p>
              Διατηρούμε τα προσωπικά σας δεδομένα μόνο για όσο χρόνο απαιτείται για την εκπλήρωση των σκοπών επεξεργασίας ή/και για όσο επιβάλλουν οι νομικές μας υποχρεώσεις. Μετά το πέρας της περιόδου αυτής, τα δεδομένα διαγράφονται ή ανωνυμοποιούνται.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black text-movus-navy mb-4 tracking-[-0.01em]">
              7. Δικαιώματα Χρηστών
            </h2>
            <p className="mb-4">Σύμφωνα με το GDPR, έχετε τα ακόλουθα δικαιώματα:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-movus-navy">Δικαίωμα πρόσβασης:</strong> να ζητήσετε αντίγραφο των προσωπικών σας δεδομένων.</li>
              <li><strong className="text-movus-navy">Δικαίωμα διόρθωσης:</strong> να ζητήσετε τη διόρθωση ανακριβών ή ελλιπών δεδομένων.</li>
              <li><strong className="text-movus-navy">Δικαίωμα διαγραφής («δικαίωμα στη λήθη»):</strong> να ζητήσετε τη διαγραφή των δεδομένων σας κάτω από προϋποθέσεις.</li>
              <li><strong className="text-movus-navy">Δικαίωμα περιορισμού επεξεργασίας:</strong> να ζητήσετε περιορισμό της επεξεργασίας σε ορισμένες περιπτώσεις.</li>
              <li><strong className="text-movus-navy">Δικαίωμα εναντίωσης:</strong> να αντιταχθείτε στην επεξεργασία που βασίζεται σε νόμιμο συμφέρον.</li>
              <li><strong className="text-movus-navy">Δικαίωμα φορητότητας:</strong> να ζητήσετε τη μεταφορά των δεδομένων σας σε άλλον φορέα.</li>
            </ul>
            <p className="mt-4">
              Για να ασκήσετε τα δικαιώματά σας, μπορείτε να επικοινωνήσετε με την Εταιρεία στο{" "}
              <a href="mailto:info@movus.gr" className="text-movus-orange-text hover:underline">
                info@movus.gr
              </a>
              . Θα απαντήσουμε εντός ενός (1) μήνα από τη λήψη του αιτήματος.
            </p>
            <p className="mt-4">
              Έχετε επίσης το δικαίωμα να υποβάλετε καταγγελία στην Αρχή Προστασίας Δεδομένων Προσωπικού Χαρακτήρα (
              <a
                href="https://www.dpa.gr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-movus-orange-text hover:underline"
              >
                www.dpa.gr
              </a>
              ) αν θεωρείτε ότι παραβιάζουμε την ισχύουσα νομοθεσία.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black text-movus-navy mb-4 tracking-[-0.01em]">
              8. Ασφάλεια Δεδομένων
            </h2>
            <p>
              Η Εταιρεία λαμβάνει τεχνικά και οργανωτικά μέτρα για να προστατεύει τα προσωπικά δεδομένα (π.χ. κρυπτογράφηση κατά την αποστολή φορμών, περιορισμένη πρόσβαση, τείχη προστασίας). Παρόλα αυτά, καμία μέθοδος μετάδοσης μέσω Διαδικτύου δεν μπορεί να εγγυηθεί απόλυτη ασφάλεια.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black text-movus-navy mb-4 tracking-[-0.01em]">
              9. Cookies
            </h2>
            <p className="mb-4">
              Η Ιστοσελίδα μας χρησιμοποιεί αποκλειστικά <strong className="text-movus-navy">αναγκαία (essential) cookies</strong>, τα οποία είναι απαραίτητα για τη βασική λειτουργία της (π.χ. ασφάλεια φορμών επικοινωνίας, διατήρηση τεχνικών προτιμήσεων περιήγησης). Σύμφωνα με το άρθρο 4 παρ. 5 του ν. 3471/2006 και τις κατευθυντήριες γραμμές της Αρχής Προστασίας Δεδομένων Προσωπικού Χαρακτήρα, για τα cookies αυτής της κατηγορίας δεν απαιτείται προηγούμενη συγκατάθεση του χρήστη.
            </p>
            <p className="mb-4">
              <strong className="text-movus-navy">Δεν χρησιμοποιούμε:</strong> cookies παρακολούθησης (tracking), διαφημιστικά cookies, ούτε pixels τρίτων (όπως Google Analytics, Meta/Facebook Pixel, διαφημιστικά δίκτυα). Δεν διαβιβάζουμε δεδομένα περιήγησής σας σε τρίτους για σκοπούς προφίλ ή στοχευμένης διαφήμισης.
            </p>
            <p className="mb-4">
              Εάν στο μέλλον εντάξουμε εργαλεία αναλυτικής επισκεψιμότητας ή marketing που απαιτούν μη αναγκαία cookies, θα ζητήσουμε τη ρητή συγκατάθεσή σας μέσω σχετικού banner <strong className="text-movus-navy">πριν</strong> ενεργοποιηθούν, και θα ενημερώσουμε αντίστοιχα την παρούσα Πολιτική.
            </p>
            <p>
              Μπορείτε ανά πάσα στιγμή να διαχειριστείτε ή να απενεργοποιήσετε τα cookies από τις ρυθμίσεις του προγράμματος περιήγησής σας. Σημειώστε ότι η απενεργοποίηση των αναγκαίων cookies ενδέχεται να επηρεάσει τη λειτουργικότητα της Ιστοσελίδας (π.χ. αδυναμία υποβολής της φόρμας επικοινωνίας).
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black text-movus-navy mb-4 tracking-[-0.01em]">
              10. Πολιτικές άλλων ιστοτόπων
            </h2>
            <p>
              Η Ιστοσελίδα μας μπορεί να περιέχει συνδέσμους προς άλλους ιστοτόπους. Η παρούσα πολιτική απορρήτου εφαρμόζεται μόνο στην Ιστοσελίδα movus.gr. Σας συνιστούμε να διαβάσετε τις πολιτικές απορρήτου των ιστοτόπων που επισκέπτεστε μέσω συνδέσμων.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black text-movus-navy mb-4 tracking-[-0.01em]">
              11. Αλλαγές στην Πολιτική Απορρήτου
            </h2>
            <p>
              Η Εταιρεία μπορεί να ανανεώνει την παρούσα πολιτική. Οι αλλαγές θα δημοσιεύονται στην Ιστοσελίδα με ενημερωμένη ημερομηνία. Παρακαλούμε να ελέγχετε τακτικά την πολιτική.
            </p>
          </div>

          <div>
            <h2 className="text-2xl md:text-3xl font-black text-movus-navy mb-4 tracking-[-0.01em]">
              12. Επικοινωνία
            </h2>
            <p>
              Για απορίες ή αιτήματα σχετικά με την πολιτική απορρήτου, επικοινωνήστε στο{" "}
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
