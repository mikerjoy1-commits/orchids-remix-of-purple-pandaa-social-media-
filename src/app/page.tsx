import Navigation from '@/components/sections/navigation';
import HeroSection from '@/components/sections/hero-section';
import LifestyleBanner from '@/components/sections/lifestyle-banner';
import MissionStatement from '@/components/sections/mission-statement';
import AnimatedCharacters from '@/components/sections/animated-characters';
import AgencyDifferentiators from '@/components/sections/agency-differentiators';
import ServicesShowcase from '@/components/sections/services-showcase';
import Testimonials from '@/components/sections/testimonials';
import AboutStory from '@/components/sections/about-story';
import UnderdogBrand from '@/components/sections/underdog-brand';
import TransparencySection from '@/components/sections/transparency-section';
import FinalCta from '@/components/sections/final-cta';
import Footer from '@/components/sections/footer';
import StickyCta from '@/components/sections/sticky-cta';
import ChatWidget from '@/components/sections/chat-widget';
import type { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: "Purple Pandaa - India's Leading Social Media Marketing Agency | Content Creation & Performance Marketing",
  description: "Transform your brand with Purple Pandaa. We deliver high-quality content creation, organic reach strategies, and performance marketing. 100% transparent pricing, no hidden costs. Get measurable results with India's most innovative social media agency.",
  keywords: [
    "social media agency India",
    "content creation services",
    "performance marketing agency",
    "Instagram marketing India",
    "social media management",
    "digital marketing services",
    "organic social media growth",
    "social media strategy",
    "Purple Pandaa agency",
    "best social media agency India",
    "ROI focused marketing",
    "transparent marketing agency"
  ],
  alternates: {
    canonical: 'https://purplepandaa.com',
  },
  openGraph: {
    title: "Purple Pandaa - India's Leading Social Media Marketing Agency",
    description: "High-quality content creation, organic reach expertise, and performance marketing. 100% transparent, results-focused.",
    url: 'https://purplepandaa.com',
    siteName: 'Purple Pandaa',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Purple Pandaa Social Media Agency',
      }
    ],
    locale: 'en_IN',
    type: 'website',
  },
};

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://purplepandaa.com/#organization",
        "name": "Purple Pandaa",
        "alternateName": "Purple Pandaa Social Media Agency",
        "url": "https://purplepandaa.com",
        "logo": {
          "@type": "ImageObject",
          "url": "https://purplepandaa.com/logo.png",
          "width": 250,
          "height": 60
        },
        "image": "https://purplepandaa.com/og-image.png",
        "description": "India's leading social media marketing agency offering high-quality content creation, organic reach expertise, and performance marketing.",
        "email": "info@purplepandaa.com",
        "telephone": "+917208263013",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "IN"
        },
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "priceRange": "$$",
        "sameAs": [
          "https://instagram.com/purplepandaa",
          "https://twitter.com/purplepandaa",
          "https://linkedin.com/company/purplepandaa",
          "https://facebook.com/purplepandaa"
        ],
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.9",
          "reviewCount": "127",
          "bestRating": "5",
          "worstRating": "1"
        }
      },
      {
        "@type": "ProfessionalService",
        "@id": "https://purplepandaa.com/#service",
        "name": "Purple Pandaa",
        "url": "https://purplepandaa.com",
        "serviceType": [
          "Social Media Marketing",
          "Content Creation",
          "Performance Marketing",
          "Social Media Management",
          "Digital Marketing"
        ],
        "provider": {
          "@id": "https://purplepandaa.com/#organization"
        },
        "areaServed": {
          "@type": "Country",
          "name": "India"
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Social Media Marketing Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Content Creation",
                "description": "High-quality content creation for social media platforms including Instagram, Facebook, Twitter, LinkedIn, and YouTube."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Performance Marketing",
                "description": "Data-driven performance marketing campaigns with measurable ROI, transparent reporting, and optimized ad spend."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Social Media Management",
                "description": "Comprehensive social media management including strategy development, content planning, community engagement, and analytics."
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Organic Growth Strategy",
                "description": "Expert organic social media growth strategies to build authentic engagement and expand reach without paid advertising."
              }
            }
          ]
        }
      },
      {
        "@type": "WebSite",
        "@id": "https://purplepandaa.com/#website",
        "url": "https://purplepandaa.com",
        "name": "Purple Pandaa",
        "description": "India's leading social media marketing agency",
        "publisher": {
          "@id": "https://purplepandaa.com/#organization"
        },
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://purplepandaa.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://purplepandaa.com/#webpage",
        "url": "https://purplepandaa.com",
        "name": "Purple Pandaa - India's Leading Social Media Marketing Agency",
        "isPartOf": {
          "@id": "https://purplepandaa.com/#website"
        },
        "about": {
          "@id": "https://purplepandaa.com/#organization"
        },
        "description": "Transform your brand with Purple Pandaa. High-quality content creation, organic reach strategies, and performance marketing. 100% transparent pricing, no hidden costs.",
        "breadcrumb": {
          "@id": "https://purplepandaa.com/#breadcrumb"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://purplepandaa.com/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://purplepandaa.com"
          }
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData)
        }}
        strategy="beforeInteractive"
      />
      <main className="min-h-screen">
        <Navigation />
        <HeroSection />
        <LifestyleBanner />
        <MissionStatement />
        <AnimatedCharacters />
        <AgencyDifferentiators />
        <ServicesShowcase />
        <Testimonials />
        <AboutStory />
        <UnderdogBrand />
        <TransparencySection />
        <FinalCta />
        <Footer />
        <StickyCta />
        <ChatWidget />
      </main>
    </>
  );
}