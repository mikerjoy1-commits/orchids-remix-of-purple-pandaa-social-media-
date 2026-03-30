import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL('https://purplepandaa.com'),
  title: {
    default: "Purple Pandaa - Strategic Social Media Marketing Agency in India",
    template: "%s | Purple Pandaa"
  },
  description: "Purple Pandaa is India's leading social media marketing agency offering high-quality content creation, organic reach expertise, and performance marketing. 100% transparent, results-focused, no hidden costs.",
  keywords: [
    "social media agency",
    "social media marketing",
    "content creation",
    "performance marketing",
    "digital marketing agency India",
    "Instagram marketing",
    "Facebook marketing",
    "social media management",
    "Purple Pandaa",
    "organic reach",
    "ROI marketing",
    "best social media agency",
    "transparent marketing",
    "Mumbai social media agency",
    "Delhi social media agency",
    "Bangalore social media agency"
  ],
  authors: [{ name: "Purple Pandaa", url: "https://purplepandaa.com" }],
  creator: "Purple Pandaa",
  publisher: "Purple Pandaa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://purplepandaa.com',
    siteName: 'Purple Pandaa',
    title: 'Purple Pandaa - Strategic Social Media Marketing Agency',
    description: 'India\'s leading social media agency. High-quality content, organic reach, performance marketing. 100% transparent, no hidden costs.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Purple Pandaa - Social Media Agency',
        type: 'image/png',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@purplepandaa',
    creator: '@purplepandaa',
    title: 'Purple Pandaa - Strategic Social Media Marketing Agency',
    description: 'India\'s leading social media agency. High-quality content, organic reach, performance marketing.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    other: {
      'facebook-domain-verification': 'your-facebook-verification-code',
    },
  },
  category: 'business',
  classification: 'Social Media Marketing Agency',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="canonical" href="https://purplepandaa.com" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#7B3AF0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Purple Pandaa" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#7B3AF0" />
        <meta name="msapplication-config" content="/browserconfig.xml" />
        
        {/* Preconnect to external domains for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />
        
        {/* Alternate language/region versions if applicable */}
        <link rel="alternate" hrefLang="en-IN" href="https://purplepandaa.com" />
        <link rel="alternate" hrefLang="en" href="https://purplepandaa.com" />
        <link rel="alternate" hrefLang="x-default" href="https://purplepandaa.com" />
      </head>
      <body className="antialiased">
        <ErrorReporter />
        {children}
        <VisualEditsMessenger />
        
        {/* Google Analytics - Replace with your GA4 ID */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX');
          `}
        </Script>
      </body>
    </html>
  );
}