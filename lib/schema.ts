// JSON-LD Schema generators for SEO

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://movus.gr/#business",
    name: "MOVUS EMS Fitness Studio",
    alternateName: "MOVUS",
    description:
      "Το premium EMS γυμναστήριο της Πάτρας. 20 λεπτά EMS = 4 ώρες παραδοσιακής προπόνησης.",
    url: "https://movus.gr",
    telephone: "+302610000000",
    email: "info@movus.gr",
    image: "https://movus.gr/og-image.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ιερού Λόχου 1",
      addressLocality: "Πάτρα",
      addressRegion: "Αχαΐα",
      postalCode: "26221",
      addressCountry: "GR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 38.2466,
      longitude: 21.7346,
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "09:00",
        closes: "21:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "17:00",
      },
    ],
    priceRange: "€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Credit Card",
    areaServed: {
      "@type": "City",
      name: "Πάτρα",
    },
    sameAs: [
      "https://www.instagram.com/movus.gr",
      "https://www.facebook.com/movus.gr",
      "https://www.tiktok.com/@movus.gr",
    ],
  };
}

export function generateFAQSchema(
  items: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function generateServiceSchema(service: {
  name: string;
  description: string;
  slug: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `https://movus.gr/programs/${service.slug}`,
    provider: {
      "@type": "LocalBusiness",
      name: "MOVUS EMS Fitness Studio",
      url: "https://movus.gr",
    },
    areaServed: {
      "@type": "City",
      name: "Πάτρα",
    },
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  slug: string;
  datePublished: string;
  dateModified: string;
  category: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    url: `https://movus.gr/blog/${article.slug}`,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: {
      "@type": "Organization",
      name: "MOVUS",
      url: "https://movus.gr",
    },
    publisher: {
      "@type": "Organization",
      name: "MOVUS",
      url: "https://movus.gr",
    },
    articleSection: article.category,
  };
}
