import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: '404 - Page Not Found',
  description: 'The page you are looking for does not exist.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#7B3AF0] to-[#9B59F3] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-black text-white mb-4">404</h1>
        <h2 className="text-4xl font-bold text-white mb-6">
          Oops! Page Not Found
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-md mx-auto">
          The page you're looking for seems to have gone on a social media break. 
          Let's get you back on track!
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link
            href="/"
            className="bg-black text-white px-8 py-4 rounded-lg font-bold hover:bg-black/80 transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/services"
            className="bg-white text-[#7B3AF0] px-8 py-4 rounded-lg font-bold hover:bg-white/90 transition-colors"
          >
            View Services
          </Link>
          <Link
            href="/contact"
            className="bg-[#FFD700] text-black px-8 py-4 rounded-lg font-bold hover:bg-[#FFD700]/90 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
