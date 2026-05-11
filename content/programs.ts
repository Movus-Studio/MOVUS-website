export interface ProgramFAQ {
  question: string;
  answer: string;
}

export interface SubProgram {
  name: string;
  tagline: string;
  category: string;
  audience: string;
  description: string;
  ctaLabel: string;
}

export interface Program {
  slug: string;
  title: string;
  tag: string;
  tags?: string[];
  shortDescription: string;
  heroBody: string[];
  ctaLabel: string;
  howItWorks?: string;
  benefitsTitle: string;
  benefits: string[];
  subPrograms?: SubProgram[];
  faqs: ProgramFAQ[];
  image: string;
  imageAlt: string;
}

export const programs: Program[] = [
  {
    slug: "team",
    title: "MOVUS TEAM",
    tag: "GROUP",
    tags: ["Έως 8 άτομα", "Coach-led", "Group energy"],
    shortDescription:
      "Η ενέργεια της ομάδας συναντά την καθοδήγηση του coach. Προπόνηση σε δυναμικό group έως 8 ατόμων που σε κρατάει consistent, σε ανεβάζει επίπεδο και κάνει το fitness τρόπο ζωής.",
    heroBody: [
      "Η ενέργεια της ομάδας συναντά την καθοδήγηση του coach. Προπόνηση σε δυναμικό group έως 8 ατόμων που σε κρατάει consistent, σε ανεβάζει επίπεδο και κάνει το fitness τρόπο ζωής.",
    ],
    ctaLabel: "Κλείσε θέση στο TEAM",
    benefitsTitle: "Δύο ροές προπόνησης",
    benefits: [
      "FLOW: έλεγχος, κινητικότητα, σύνδεση σώματος",
      "MOVE: δύναμη, ένταση, καύση",
    ],
    subPrograms: [
      {
        name: "FLOW",
        tagline: "Έλεγχος, κινητικότητα, σύνδεση σώματος",
        category: "Mobility & Control",
        audience: "Για όσους θέλουν ποιοτική κίνηση και ισορροπία",
        description:
          "Έλεγχος, κινητικότητα, σύνδεση σώματος. Η ροή που χτίζει βάσεις και ξεκλειδώνει τη φυσική κίνηση.",
        ctaLabel: "Δοκίμασε FLOW",
      },
      {
        name: "MOVE",
        tagline: "Δύναμη, ένταση, καύση",
        category: "Strength & Conditioning",
        audience: "Για όσους ψάχνουν ένταση και αποτέλεσμα",
        description:
          "Δύναμη, ένταση, καύση. Η ροή που σε σπρώχνει σε νέο επίπεδο απόδοσης.",
        ctaLabel: "Δοκίμασε MOVE",
      },
    ],
    faqs: [],
    image: "/images/program-group.webp",
    imageAlt: "MOVUS TEAM ομαδική προπόνηση",
  },
  {
    slug: "squad",
    title: "MOVUS SQUAD",
    tag: "MICRO-GROUP",
    tags: ["Έως 4 άτομα", "Στοχευμένο", "Coach-led"],
    shortDescription:
      "Μικρή ομάδα, μεγάλη προσοχή. Με συμμετοχή έως 4 ατόμων, η προπόνηση γίνεται πιο στοχευμένη, με ουσιαστική καθοδήγηση και προσαρμογή πάνω σου. Για όσους θέλουν κάτι παραπάνω από ένα απλό group.",
    heroBody: [
      "Μικρή ομάδα, μεγάλη προσοχή. Με συμμετοχή έως 4 ατόμων, η προπόνηση γίνεται πιο στοχευμένη, με ουσιαστική καθοδήγηση και προσαρμογή πάνω σου.",
      "Για όσους θέλουν κάτι παραπάνω από ένα απλό group.",
    ],
    ctaLabel: "Κλείσε θέση στο SQUAD",
    benefitsTitle: "Γιατί να επιλέξεις SQUAD",
    benefits: [
      "Έως 4 άτομα ανά session",
      "Στοχευμένη καθοδήγηση",
      "Προσαρμογή στο επίπεδό σου",
      "Ουσιαστική σχέση με τον coach",
    ],
    faqs: [],
    image: "/images/studio-training.webp",
    imageAlt: "MOVUS SQUAD micro-group προπόνηση",
  },
  {
    slug: "personal",
    title: "MOVUS PERSONAL",
    tag: "PERSONAL",
    tags: ["2 άτομα", "Personal", "Εξατομίκευση"],
    shortDescription:
      "Personal coaching εμπειρία σε ένα πιο focused περιβάλλον. Με προπόνηση 2 ατόμων, απολαμβάνεις υψηλό επίπεδο επίβλεψης, τεχνικής και εξατομίκευσης για πιο γρήγορα και ουσιαστικά αποτελέσματα.",
    heroBody: [
      "Personal coaching εμπειρία σε ένα πιο focused περιβάλλον. Με προπόνηση 2 ατόμων, απολαμβάνεις υψηλό επίπεδο επίβλεψης, τεχνικής και εξατομίκευσης για πιο γρήγορα και ουσιαστικά αποτελέσματα.",
    ],
    ctaLabel: "Κλείσε Personal session",
    benefitsTitle: "Τι περιλαμβάνει",
    benefits: [
      "Προπόνηση 2 ατόμων",
      "Υψηλό επίπεδο επίβλεψης",
      "Εστίαση στην τεχνική",
      "Εξατομίκευση πλάνου",
    ],
    faqs: [],
    image: "/images/program-ishape.webp",
    imageAlt: "MOVUS PERSONAL προπόνηση 2 ατόμων",
  },
  {
    slug: "private",
    title: "MOVUS PRIVATE",
    tag: "1-ON-1",
    tags: ["1-on-1", "Premium", "Maximum focus"],
    shortDescription:
      "Η απόλυτη εξατομίκευση. Όλο το πλάνο, η προπόνηση και η προσοχή είναι αποκλειστικά πάνω σου. Μέγιστο αποτέλεσμα, μέγιστη ακρίβεια, χωρίς συμβιβασμούς.",
    heroBody: [
      "Η απόλυτη εξατομίκευση. Όλο το πλάνο, η προπόνηση και η προσοχή είναι αποκλειστικά πάνω σου.",
      "Μέγιστο αποτέλεσμα, μέγιστη ακρίβεια, χωρίς συμβιβασμούς.",
    ],
    ctaLabel: "Κλείσε Private session",
    benefitsTitle: "Γιατί Private",
    benefits: [
      "Αποκλειστικό 1-on-1",
      "Πλήρως εξατομικευμένο πλάνο",
      "Μέγιστη προσοχή σε κάθε λεπτομέρεια",
      "Premium περιβάλλον προπόνησης",
    ],
    faqs: [],
    image: "/images/studio-interior.webp",
    imageAlt: "MOVUS PRIVATE 1-on-1 προπόνηση",
  },
  {
    slug: "ems",
    title: "MOVUS EMS",
    tag: "EMS TECH",
    tags: ["300+ μύες", "20 λεπτά", "Electrical Muscle Stimulation"],
    shortDescription:
      "Η έξυπνη εξέλιξη της προπόνησης. Μέσω της τεχνολογίας Electrical Muscle Stimulation, ενεργοποιείς πάνω από 300 μύες ταυτόχρονα πετυχαίνοντας ένταση και απόδοση που δεν μπορεί να επιτευχθεί με την κλασική προπόνηση.",
    heroBody: [
      "Η έξυπνη εξέλιξη της προπόνησης. Μέσω της τεχνολογίας Electrical Muscle Stimulation, ενεργοποιείς πάνω από 300 μύες ταυτόχρονα πετυχαίνοντας ένταση και απόδοση που δεν μπορεί να επιτευχθεί με την κλασική προπόνηση.",
      "Σε μόλις 20 λεπτά, πραγματοποιείς μια πλήρη και απόλυτα στοχευμένη προπόνηση για δύναμη, σύσφιξη και λιποδιάλυση, με συνεχή καθοδήγηση και έλεγχο της έντασης.",
      "Μεγαλύτερα αποτελέσματα σε λιγότερο χρόνο.",
    ],
    ctaLabel: "Κλείσε EMS συνεδρία",
    benefitsTitle: "Τι κερδίζεις",
    benefits: [
      "Ενεργοποίηση 300+ μυών ταυτόχρονα",
      "Πλήρης προπόνηση σε 20 λεπτά",
      "Δύναμη, σύσφιξη και λιποδιάλυση",
      "Συνεχής καθοδήγηση και έλεγχος έντασης",
    ],
    faqs: [],
    image: "/images/program-ems.webp",
    imageAlt: "MOVUS EMS i-Motion προπόνηση",
  },
  {
    slug: "ems-run",
    title: "EMS RUN",
    tag: "RUN + EMS",
    tags: ["Διάδρομος", "EMS", "Cardio + Strength"],
    shortDescription:
      "Προπόνηση σε διάδρομο με ταυτόχρονη ενεργοποίηση μέσω Electrical Muscle Stimulation, που μετατρέπει ένα απλό τρέξιμο σε υψηλής απόδοσης training session.",
    heroBody: [
      "Προπόνηση σε διάδρομο με ταυτόχρονη ενεργοποίηση μέσω Electrical Muscle Stimulation, που μετατρέπει ένα απλό τρέξιμο σε υψηλής απόδοσης training session.",
      "Το σώμα κινείται φυσικά στο διάδρομο, ενώ το EMS ενεργοποιεί ταυτόχρονα μεγάλο ποσοστό μυών, ανεβάζοντας την ένταση.",
      "Έτσι, κάθε βήμα γίνεται πιο αποδοτικό, με μεγαλύτερη καύση, σύσφιξη και συνολική ενεργοποίηση του σώματος.",
    ],
    ctaLabel: "Κλείσε EMS RUN",
    benefitsTitle: "Γιατί EMS RUN",
    benefits: [
      "Cardio + EMS σε ένα session",
      "Μεγαλύτερη καύση ανά βήμα",
      "Συνολική ενεργοποίηση σώματος",
      "Σύσφιξη μέσω αυξημένης έντασης",
    ],
    faqs: [],
    image: "/images/shapespace-red.webp",
    imageAlt: "EMS RUN διάδρομος με EMS τεχνολογία",
  },
  {
    slug: "shape-space",
    title: "MOVUS SHAPE SPACE",
    tag: "VACUUM + INFRARED",
    tags: ["Vacuum", "Heat 50°C", "EMS", "Wellness"],
    shortDescription:
      "Μια προηγμένη εμπειρία διαμόρφωσης σώματος που συνδυάζει διάδρομο αρνητικής πίεσης, θερμότητα έως 50°C, EMS, θεραπεία κολλαγόνου και αρωματοθεραπεία σε μία ολοκληρωμένη συνεδρία.",
    heroBody: [
      "Μια προηγμένη εμπειρία διαμόρφωσης σώματος που συνδυάζει διάδρομο αρνητικής πίεσης, θερμότητα έως 50°C, EMS, θεραπεία κολλαγόνου και αρωματοθεραπεία σε μία ολοκληρωμένη συνεδρία.",
      "Ο συνδυασμός τεχνολογιών ενεργοποιεί το σώμα, ενισχύει την κυκλοφορία, μειώνει την κατακράτηση και υποστηρίζει τη διαδικασία καύσης και σύσφιξης, ενώ ταυτόχρονα προσφέρει αποφόρτιση και αποκατάσταση.",
      "Το σώμα δουλεύει, αποσυμφορείται και αναδιαμορφώνεται, χωρίς καταπόνηση.",
    ],
    ctaLabel: "Κλείσε SHAPE SPACE",
    benefitsTitle: "Τι σου προσφέρει",
    benefits: [
      "Καύση και σύσφιξη με αρνητική πίεση",
      "Θερμότητα έως 50°C για ενίσχυση κυκλοφορίας",
      "EMS και θεραπεία κολλαγόνου",
      "Αρωματοθεραπεία και αποκατάσταση",
    ],
    faqs: [],
    image: "/images/program-shapespace.webp",
    imageAlt: "MOVUS SHAPE SPACE vacuum infrared διάδρομος",
  },
  {
    slug: "transformation",
    title: "MOVUS TRANSFORMATION",
    tag: "ΠΑΚΕΤΟ",
    tags: ["1 μήνας", "Personal + Shape Space", "Μεταμόρφωση"],
    shortDescription:
      "Το πιο ολοκληρωμένο πακέτο για πραγματική μεταμόρφωση. Συνδυάζει υψηλού επιπέδου personal coaching με την τεχνολογία του MOVUS SHAPE SPACE, δημιουργώντας ένα πλήρες σύστημα προπόνησης, σύσφιξης και εξέλιξης.",
    heroBody: [
      "Το πιο ολοκληρωμένο πακέτο για πραγματική μεταμόρφωση. Συνδυάζει υψηλού επιπέδου personal coaching με την τεχνολογία του MOVUS SHAPE SPACE, δημιουργώντας ένα πλήρες σύστημα προπόνησης, σύσφιξης και εξέλιξης.",
      "Χτίζεις δύναμη, βελτιώνεις την εικόνα του σώματος και επιταχύνεις τη μεταμόρφωση μέσα από έναν συνδυασμό προπόνησης και τεχνολογίας υψηλής απόδοσης.",
    ],
    ctaLabel: "Ξεκίνα TRANSFORMATION",
    benefitsTitle: "Τι περιλαμβάνει",
    benefits: [
      "2 MOVUS PERSONAL προπονήσεις την εβδομάδα",
      "1 συνεδρία MOVUS SHAPE SPACE την εβδομάδα",
      "Διάρκεια προγράμματος: 1 μήνας",
      "Εξατομικευμένη καθοδήγηση και προσαρμογή προπόνησης",
    ],
    faqs: [],
    image: "/images/ems-suits.webp",
    imageAlt: "MOVUS TRANSFORMATION πακέτο προπόνησης",
  },
  {
    slug: "hybrid",
    title: "MOVUS HYBRID",
    tag: "ΠΑΚΕΤΟ",
    tags: ["Δύναμη + Cardio", "EMS RUN", "Hybrid"],
    shortDescription:
      "Το σύγχρονο hybrid σύστημα προπόνησης που συνδυάζει δύναμη, φυσική κατάσταση και τεχνολογία σε ένα ολοκληρωμένο πλάνο. Χτίζεις δύναμη μέσα από καθοδηγούμενη προπόνηση και βελτιώνεις την αντοχή σου μέσω του EMS RUN.",
    heroBody: [
      "Το σύγχρονο hybrid σύστημα προπόνησης που συνδυάζει δύναμη, φυσική κατάσταση και τεχνολογία σε ένα ολοκληρωμένο πλάνο.",
      "Χτίζεις δύναμη μέσα από καθοδηγούμενη προπόνηση και βελτιώνεις την αντοχή σου μέσω του EMS RUN.",
      "Πιο δυνατό σώμα, καλύτερη φυσική κατάσταση και πιο γρήγορη εξέλιξη μέσα από ένα έξυπνο, ισορροπημένο σύστημα.",
    ],
    ctaLabel: "Ξεκίνα HYBRID",
    benefitsTitle: "Τι περιλαμβάνει",
    benefits: [
      "2 προπονήσεις MOVUS SQUAD ή PERSONAL την εβδομάδα",
      "1 συνεδρία EMS RUN",
      "Συνδυασμός δύναμης και conditioning",
      "Καθοδήγηση coach σε κάθε προπόνηση",
    ],
    faqs: [],
    image: "/images/hero-movus.webp",
    imageAlt: "MOVUS HYBRID συνδυασμός δύναμης και EMS RUN",
  },
];
