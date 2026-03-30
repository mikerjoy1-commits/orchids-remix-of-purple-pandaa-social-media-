/**
 * Analytics utilities for tracking user interactions and conversions
 */

// Google Analytics Event Tracking
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', 'G-XXXXXXXXXX', {
      page_path: url,
    });
  }
};

// Track conversions
export const trackConversion = (conversionId: string, value?: number) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', 'conversion', {
      send_to: conversionId,
      value: value,
      currency: 'INR',
    });
  }
};

// Track form submissions
export const trackFormSubmission = (formName: string) => {
  trackEvent('form_submission', 'engagement', formName);
};

// Track button clicks
export const trackButtonClick = (buttonName: string, location: string) => {
  trackEvent('button_click', 'engagement', `${buttonName} - ${location}`);
};

// Track service inquiries
export const trackServiceInquiry = (serviceName: string) => {
  trackEvent('service_inquiry', 'conversion', serviceName);
};

// Track portfolio views
export const trackPortfolioView = (projectName: string) => {
  trackEvent('portfolio_view', 'engagement', projectName);
};

// Track external link clicks
export const trackExternalLink = (url: string) => {
  trackEvent('external_link', 'engagement', url);
};

// Track scroll depth
export const trackScrollDepth = (percentage: number) => {
  trackEvent('scroll_depth', 'engagement', `${percentage}%`, percentage);
};
