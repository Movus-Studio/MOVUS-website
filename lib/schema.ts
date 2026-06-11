// JSON-LD Schema generators for SEO.
// Business contact details are read from the CMS-managed global Settings
// (content/settings/settings.json via siteContact) so an owner edit to the
// phone/email/address/Instagram flows straight into the structured data.
import { siteContact } from "@/content/site";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HealthClub"],
    "@id": "https://movus.gr/#business",
    name: "MOVUS EMS Fitness Studio",
    alternateName: "MOVUS",
    description:
      "EMS γυμναστήριο στην Πάτρα. Συνεδρία EMS 30 λεπτών με ενεργοποίηση 300+ μυών, personal training και ομαδικά προγράμματα.",
    url: "https://movus.gr",
    telephone: siteContact.phoneHref,
    email: siteContact.email,
    image: "https://movus.gr/og-image.jpg",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteContact.address.street,
      addressLocality: siteContact.address.city,
      addressRegion: siteContact.address.region,
      postalCode: siteContact.address.postalCode,
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
        closes: "14:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "16:00",
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
    sameAs: [siteContact.social.instagram],
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://movus.gr/#organization",
    name: "MOVUS",
    legalName: "MOVUS, Future of Fitness",
    url: "https://movus.gr",
    logo: "https://movus.gr/og-image.jpg",
    sameAs: [siteContact.social.instagram],
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://movus.gr/#website",
    name: "MOVUS",
    alternateName: "MOVUS EMS Fitness Studio",
    url: "https://movus.gr",
    inLanguage: "el-GR",
    publisher: { "@id": "https://movus.gr/#organization" },
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
