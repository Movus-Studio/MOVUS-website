export interface Program {
  slug: string;
  title: string;
  tag: string;
  shortDescription: string;
  longDescription: string;
  howItWorks: string;
  whoItsFor: string;
  resultsTimeline: string;
  imagePlaceholder: string;
  image: string;
  imageAlt: string;
}

export const programs: Program[] = [
  {
    slug: "ems",
    title: "i-Motion EMS",
    tag: "FLAGSHIP",
    shortDescription:
      "Η κορυφαία τεχνολογία EMS. Ενεργοποίηση 350+ μυών ταυτόχρονα σε μόλις 20 λεπτά.",
    longDescription:
      "Το i-Motion EMS είναι η πιο προηγμένη μέθοδος ηλεκτρομυοδιέγερσης στον κόσμο. Με εξοπλισμό τελευταίας τεχνολογίας από την Ισπανία, ενεργοποιούμε ταυτόχρονα πάνω από 350 μύες — κάτι αδύνατο με παραδοσιακή προπόνηση. Κάθε συνεδρία είναι προσωπική, με πιστοποιημένο γυμναστή ΤΕΦΑΑ που προσαρμόζει την ένταση στο επίπεδό σου.",
    howItWorks:
      "Φοράς μια ειδική στολή με ηλεκτρόδια που στέλνουν ηλεκτρικά παλμά στους μυς σου ενώ εκτελείς απλές ασκήσεις. Ο γυμναστής ελέγχει την ένταση για κάθε μυϊκή ομάδα ξεχωριστά.",
    whoItsFor:
      "Ιδανικό για όσους θέλουν μέγιστα αποτελέσματα σε ελάχιστο χρόνο. Επαγγελματίες με πιεσμένο πρόγραμμα, αθλητές που θέλουν extra boost, ή αρχάριους που ψάχνουν αποτελεσματική εκκίνηση.",
    resultsTimeline:
      "Πρώτα αποτελέσματα σε 4 εβδομάδες. Ορατή αλλαγή στη σύσταση σώματος σε 8-12 εβδομάδες με 2 συνεδρίες/εβδομάδα.",
    imagePlaceholder: "[Hero: Trainer adjusting i-Motion EMS suit on client]",
    image: "/images/program-ems.webp",
    imageAlt: "i-Motion EMS προπόνηση στο MOVUS",
  },
  {
    slug: "i-shape",
    title: "i-Shape EMS Suit",
    tag: "ΣΤΟΧΕΥΜΕΝΟ",
    shortDescription:
      "Στοχευμένη εφαρμογή EMS με φορητή στολή. Ιδανικό για τοπικό σμίλευμα.",
    longDescription:
      "Το i-Shape είναι η πιο εξελιγμένη φορητή στολή EMS. Σχεδιασμένη για στοχευμένη δουλειά σε συγκεκριμένες μυϊκές ομάδες — κοιλιακούς, γλουτούς, μηρούς — με ακρίβεια που δεν επιτρέπει η παραδοσιακή προπόνηση.",
    howItWorks:
      "Η στολή i-Shape εφαρμόζει τέλεια στο σώμα και στέλνει στοχευμένους παλμούς. Συνδυάζεται με ειδικό πρόγραμμα ασκήσεων για μέγιστα αποτελέσματα σε κοιλιά, γλουτούς και μηρούς.",
    whoItsFor:
      "Για όσους θέλουν να δουλέψουν συγκεκριμένες περιοχές. Ιδανικό μετά την εγκυμοσύνη, για τοπικό πάχος, ή ως συμπλήρωμα σε υπάρχον πρόγραμμα.",
    resultsTimeline:
      "Αισθητή σύσφιξη σε 3-4 εβδομάδες. Μετρήσιμη μείωση περιφέρειας σε 6-8 εβδομάδες.",
    imagePlaceholder: "[Hero: Client wearing i-Shape suit during workout]",
    image: "/images/program-ishape.webp",
    imageAlt: "i-Shape EMS Suit προπόνηση",
  },
  {
    slug: "shape-space",
    title: "Shape Space",
    tag: "ΣΜΙΛΕΥΜΑ",
    shortDescription:
      "Πρόγραμμα body sculpting που συνδυάζει τεχνολογία και εξειδικευμένη προπόνηση.",
    longDescription:
      "Το Shape Space είναι το ολοκληρωμένο πρόγραμμα σμιλέματος σώματος του MOVUS. Συνδυάζει EMS τεχνολογία, λειτουργική προπόνηση και διατροφική καθοδήγηση για ολιστική μεταμόρφωση.",
    howItWorks:
      "Ένα personalized πρόγραμμα που περιλαμβάνει EMS sessions, functional training, και nutrition coaching. Ξεκινάμε με InBody ανάλυση σώματος για να θέσουμε μετρήσιμους στόχους.",
    whoItsFor:
      "Για όσους θέλουν ολική μεταμόρφωση — όχι μόνο γυμναστική αλλά ολιστική προσέγγιση στη φυσική κατάσταση. Ιδανικό αν έχεις συγκεκριμένο στόχο σώματος.",
    resultsTimeline:
      "Ορατά αποτελέσματα σε 6 εβδομάδες. Σημαντική αλλαγή σύστασης σώματος σε 12 εβδομάδες.",
    imagePlaceholder: "[Hero: Body sculpting session in progress]",
    image: "/images/program-shapespace.webp",
    imageAlt: "Shape Space body sculpting μηχάνημα",
  },
  {
    slug: "group-classes",
    title: "Ομαδικά Προγράμματα",
    tag: "ΟΜΑΔΙΚΑ",
    shortDescription:
      "Η ενέργεια της ομάδας συναντά την τεχνολογία EMS. Μέχρι 4 άτομα ανά session.",
    longDescription:
      "Τα ομαδικά προγράμματα MOVUS φέρνουν την ενέργεια του group fitness στην τεχνολογία EMS. Μικρές ομάδες μέχρι 4 ατόμων εξασφαλίζουν προσωπική προσοχή σε κάθε μέλος, ενώ η ομαδική δυναμική σε σπρώχνει να δώσεις τα πάντα.",
    howItWorks:
      "Κάθε μέλος φοράει τη δική του EMS στολή. Ο γυμναστής καθοδηγεί την ομάδα σε ένα πρόγραμμα ασκήσεων, προσαρμόζοντας την ένταση για κάθε άτομο ξεχωριστά.",
    whoItsFor:
      "Για ζευγάρια, φίλους, ή οποιονδήποτε αντλεί κίνητρο από την ομάδα. Τέλειο για αρχάριους που θέλουν company.",
    resultsTimeline:
      "Ίδια αποτελέσματα με τις προσωπικές συνεδρίες. Η ομαδική δυναμική βοηθά στη συνέπεια.",
    imagePlaceholder: "[Hero: Small group EMS training session]",
    image: "/images/program-group.webp",
    imageAlt: "Ομαδική EMS προπόνηση στο MOVUS",
  },
];
