"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

const desktopChars = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/svgs/monkey-6.svg?",
    alt: "Quirky monkey-like character with goggles",
    width: 400,
    height: 400,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/svgs/face-2-7.svg?",
    alt: "Stylized character face",
    width: 400,
    height: 400,
  },
];

const mobileChars = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/svgs/money-full-8.svg?",
    alt: "Quirky monkey-like character with goggles",
    width: 360,
    height: 360,
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/svgs/mango-girl-9.svg?",
    alt: "Stylized girl character",
    width: 360,
    height: 360,
  },
];

const DesktopMarquee = ({ reverse = false }) => {
  const content = "CHOOSE PURPLE NOT BLAND";
  const items = Array(6).fill(content);

  return (
    <div className="relative flex overflow-hidden">
      <div
        className={`flex shrink-0 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {items.map((item, i) => (
          <span
            key={i}
            className="text-[120px] leading-none font-black font-display text-black whitespace-nowrap px-8"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

const MobileMarquee = ({ reverse = false }) => {
  const items = Array(8).fill(0);

  return (
    <div className="relative flex overflow-hidden">
      <div
        className={`flex shrink-0 ${
          reverse ? "animate-marquee-reverse" : "animate-marquee"
        }`}
      >
        {items.map((_, i) => (
          <div
            key={i}
            className="text-center px-4 whitespace-nowrap shrink-0"
          >
            <span className="text-6xl font-black font-display text-black leading-tight">
              CHOOSE PURPLE
              <br />
              NOT BLAND
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

const AnimatedCharacters = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveImageIndex((prevIndex) => (prevIndex + 1) % 2);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative overflow-hidden bg-brand-yellow">
      {/* Desktop Version */}
      <div className="hidden md:block relative min-h-screen">
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          {desktopChars.map((char, index) => (
            <div
              key={index}
              className={`absolute transition-opacity duration-1000 ${
                index === activeImageIndex
                  ? "opacity-100 animate-float"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <Image
                src={char.src}
                alt={char.alt}
                width={char.width}
                height={char.height}
                className="object-contain"
              />
            </div>
          ))}
        </div>
        <div className="absolute inset-0 z-10 flex flex-col justify-center space-y-4 lg:space-y-8 -rotate-3 scale-110">
          <DesktopMarquee />
          <DesktopMarquee reverse={true} />
          <DesktopMarquee />
          <DesktopMarquee reverse={true} />
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden relative h-screen flex flex-col justify-center">
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          {mobileChars.map((char, index) => (
            <div
              key={index}
              className={`absolute transition-opacity duration-1000 ${
                index === activeImageIndex
                  ? "opacity-100 animate-float"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              <Image
                src={char.src}
                alt={char.alt}
                width={char.width}
                height={char.height}
                className="w-[300px] h-auto object-contain"
              />
            </div>
          ))}
        </div>
        <div className="relative z-10 flex flex-col justify-center space-y-6 -rotate-3 scale-125">
          <MobileMarquee />
          <MobileMarquee reverse={true} />
          <MobileMarquee />
          <MobileMarquee reverse={true} />
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 25s linear infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(-2deg); }
          50% { transform: translateY(-25px) rotate(2deg); }
        }
        .animate-float {
          animation: float 7s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default AnimatedCharacters;