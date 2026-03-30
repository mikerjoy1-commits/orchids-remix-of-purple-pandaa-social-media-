/**
 * SEO Utility Functions
 * Helper functions for generating SEO-optimized metadata across the site
 */

interface PageSEO {
  title: string;
  description: string;
  keywords?: string[];
  canonical?: string;
  ogImage?: string;
  noindex?: boolean;
}

/**
 * Generate comprehensive metadata for a page
 */
export function generatePageMetadata({
  title,
  description,
  keywords,
  canonical,
  ogImage = '/og-image.png',
  noindex = false,
}: PageSEO) {
  const baseUrl = 'https://purplepandaa.com';
  const fullCanonical = canonical ? `${baseUrl}${canonical}` : baseUrl;

  return {
    title,
    description,
    keywords: keywords?.join(', '),
    alternates: {
      canonical: fullCanonical,
    },
    openGraph: {
      title,
      description,
      url: fullCanonical,
      siteName: 'Purple Pandaa',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: 'en_IN',
      type: 'website' as const,
    },
    twitter: {
      card: 'summary_large_image' as const,
      title,
      description,
      images: [ogImage],
      creator: '@purplepandaa',
    },
    robots: noindex
      ? {
          index: false,
          follow: false,
        }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
  };
}

/**
 * Generate structured data for organization
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Purple Pandaa',
    alternateName: 'Purple Pandaa Social Media Agency',
    url: 'https://purplepandaa.com',
    logo: 'https://purplepandaa.com/logo.png',
    image: 'https://purplepandaa.com/og-image.png',
    description:
      'India\'s leading social media marketing agency offering high-quality content creation, organic reach expertise, and performance marketing.',
    email: 'info@purplepandaa.com',
    telephone: '+917208263013',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    priceRange: '$$',
    sameAs: [
      'https://instagram.com/purplepandaa',
      'https://twitter.com/purplepandaa',
      'https://linkedin.com/company/purplepandaa',
    ],
  };
}

/**
 * Generate structured data for service offerings
 */
export function generateServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'Social Media Marketing',
    provider: {
      '@type': 'Organization',
      name: 'Purple Pandaa',
      url: 'https://purplepandaa.com',
    },
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Social Media Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Content Creation',
            description:
              'High-quality content creation for social media platforms including Instagram, Facebook, Twitter, and LinkedIn.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Performance Marketing',
            description:
              'Data-driven performance marketing campaigns with measurable ROI and transparent reporting.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Social Media Management',
            description:
              'Comprehensive social media management including strategy, content planning, and community engagement.',
          },
        },
      ],
    },
  };
}

/**
 * Generate breadcrumb structured data
 */
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `https://purplepandaa.com${item.url}`,
    })),
  };
}

/**
 * Generate FAQ structured data
 */
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate local business structured data
 */
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': 'https://purplepandaa.com/#organization',
    name: 'Purple Pandaa',
    image: 'https://purplepandaa.com/og-image.png',
    url: 'https://purplepandaa.com',
    telephone: '+917208263013',
    email: 'info@purplepandaa.com',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      addressCountry: 'IN',
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '18:00',
    },
    priceRange: '$$',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '127',
    },
  };
}
