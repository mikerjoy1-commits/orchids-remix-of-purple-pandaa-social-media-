"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

const MobileMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;
  
  return (
    <div
      className="fixed inset-0 bg-black/90 z-[10000] flex items-center justify-center md:hidden"
      onClick={onClose}
    >
      <button
        aria-label="Close menu"
        className="absolute top-6 right-6 text-white"
        onClick={onClose}
      >
        <X size={32} />
      </button>
      <nav onClick={(e) => e.stopPropagation()}>
        <ul className="text-center space-y-8">
          <li>
            <Link
              href="#services"
              className="font-display text-4xl text-white font-black uppercase"
              onClick={onClose}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="font-display text-4xl text-white font-black uppercase"
              onClick={onClose}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="font-display text-4xl text-white font-black uppercase"
              onClick={onClose}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link
              href="/our-work"
              className="transition-colors text-2xl"
              style={{
                fontFamily: "Georgia, 'Times New Roman', serif",
                fontStyle: "italic",
                fontWeight: 400,
                textShadow: "0 0 8px rgba(255,255,255,0.95), 0 0 18px rgba(216,180,254,1), 0 0 35px rgba(168,85,247,0.9), 0 0 70px rgba(139,92,246,0.6)",
                color: "white",
                animation: "studioGlowPulse 2.2s ease-in-out infinite",
              }}
              onClick={onClose}
            >
              Our Creative Studio for Creators
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      
      <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20 md:h-24">
            {/* Left: Menu button (mobile) / Nav links (desktop) */}
            <div className="flex items-center">
              <button
                aria-label="Open menu"
                onClick={() => setIsMenuOpen(true)}
                className="text-white md:hidden p-2"
              >
                <Menu size={28} />
              </button>
              
              <nav className="hidden md:flex items-center gap-8 lg:gap-12">
                <Link
                  href="#services"
                  className="font-display text-white text-sm lg:text-base font-bold uppercase hover:text-white/80 transition-colors"
                >
                  Services
                </Link>
                <Link
                  href="#about"
                  className="font-display text-white text-sm lg:text-base font-bold uppercase hover:text-white/80 transition-colors"
                >
                  About
                </Link>
              </nav>
            </div>

            {/* Center: Logo */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
              <Link href="/">
                <span className="font-display text-white font-black uppercase text-xl md:text-2xl tracking-wider">
                  Purple Pandaa
                </span>
              </Link>
            </div>

            {/* Right: Buttons */}
            <div className="flex items-center gap-3 md:gap-4">
              <Link
                href="/our-work"
                className="hidden sm:inline-block border border-purple-400/50 hover:border-purple-300 text-white transition-all px-4 md:px-5 py-2 md:py-2.5 rounded-full text-sm md:text-base relative studio-glow-btn"
                style={{
                  fontFamily: "Georgia, 'Times New Roman', serif",
                  fontStyle: "italic",
                  fontWeight: 400,
                  textShadow: "0 0 8px rgba(255,255,255,0.95), 0 0 18px rgba(216,180,254,1), 0 0 35px rgba(168,85,247,0.9), 0 0 70px rgba(139,92,246,0.6)",
                  boxShadow: "0 0 18px 4px rgba(168,85,247,0.55), 0 0 40px 8px rgba(139,92,246,0.3), inset 0 0 16px rgba(168,85,247,0.15)",
                  animation: "studioGlowPulse 2.2s ease-in-out infinite",
                }}
              >
                Our Creative Studio for Creators
              </Link>
              <Link
                href="https://wa.me/917208263013"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-display uppercase text-xs md:text-sm font-bold px-4 md:px-6 py-2 md:py-3 rounded-full transition-all"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </header>

    </>
  );
}