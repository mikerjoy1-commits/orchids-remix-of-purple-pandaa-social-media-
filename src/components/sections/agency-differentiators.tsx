'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import { Target, Lightbulb, TrendingUp, Zap, Search, Palette, Handshake } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface Differentiator {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}

const differentiatorsData: Differentiator[] = [
  {
    icon: Target,
    title: "Targeted Strategies",
    description: "We focus on reaching the right audience for maximum conversions.",
  },
  {
    icon: Lightbulb,
    title: "Creativity That Stands Out",
    description: "Innovative campaigns that make your brand memorable.",
  },
  {
    icon: TrendingUp,
    title: "ROI-Focused",
    description: "Every effort is designed to deliver measurable results and growth.",
  },
  {
    icon: Zap,
    title: "Agile & Adaptive",
    description: "Quick optimizations to ensure campaigns always perform at their best.",
  },
  {
    icon: Search,
    title: "Data-Driven Decisions",
    description: "Analytics guide our strategy to maximize efficiency.",
  },
  {
    icon: Palette,
    title: "Visually Engaging",
    description: "Designs and content that instantly capture attention.",
  },
  {
    icon: Handshake,
    title: "Relationship-Driven",
    description: "We prioritize meaningful engagement over mere clicks.",
  },
];

const DifferentiatorCard = ({ item, index, totalCards }: { item: Differentiator; index: number; totalCards: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [hasUnfolded, setHasUnfolded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const IconComponent = item.icon;
  
  // Calculate top offset for stacking effect
  const topOffset = 80 + (index * 24);
  // Calculate scale for depth effect
  const scale = 1 - (index * 0.02);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasUnfolded) {
            // Delay unfold based on card index for staggered effect
            setTimeout(() => {
              setHasUnfolded(true);
            }, index * 150);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [index, hasUnfolded]);

  return (
    <div
      ref={cardRef}
      className="relative"
      style={{ 
        paddingTop: index === 0 ? '0' : '24px',
        perspective: '1000px',
      }}
    >
      <div
        className={`group sticky cursor-pointer rounded-2xl bg-gradient-to-br from-brand-purple-primary to-brand-purple-secondary p-6 shadow-lg transition-all duration-1000 ease-out md:p-8 hover:scale-[1.02] hover:shadow-2xl`}
        style={{ 
          top: `${topOffset}px`,
          zIndex: totalCards - index,
          transform: hasUnfolded 
            ? `scale(${scale})` 
            : `scale(0.8) rotateX(-15deg) translateY(50px)`,
          transformOrigin: 'top center',
          opacity: hasUnfolded ? 1 : 0,
          filter: hasUnfolded ? 'blur(0px)' : 'blur(4px)',
        }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <div className="flex items-start gap-4">
          <div 
            className="flex-shrink-0 rounded-full bg-white/20 p-3 transition-transform duration-700 ease-out"
            style={{
              transform: hasUnfolded ? 'scale(1) rotate(0deg)' : 'scale(0) rotate(-180deg)',
            }}
          >
            <IconComponent className="h-8 w-8 text-white md:h-10 md:w-10" />
          </div>
          <div className="flex-1">
            <h3 
              className="font-heading text-xl font-bold uppercase tracking-tight text-white md:text-2xl lg:text-3xl transition-all duration-700 ease-out"
              style={{
                transform: hasUnfolded ? 'translateX(0)' : 'translateX(-30px)',
                opacity: hasUnfolded ? 1 : 0,
              }}
            >
              {item.title}
            </h3>
            <div
              className={`mt-3 overflow-hidden transition-all duration-300 ${
                isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 md:max-h-40 md:opacity-100'
              }`}
            >
              <p className="font-body text-sm leading-relaxed text-white/90 md:text-base lg:text-lg">
                {item.description}
              </p>
            </div>
            <p className="mt-2 text-xs text-white/70 md:hidden">
              {isExpanded ? 'Tap to collapse' : 'Tap to expand'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const AgencyDifferentiators = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  return (
    <section ref={sectionRef} className="relative bg-white py-10 md:py-20 overflow-hidden">
      {/* Top warning tape */}
      <div className="absolute top-0 left-0 w-full h-20 -rotate-2 z-10 pointer-events-none">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/svgs/strip-1-10.svg?"
          alt="Warning tape"
          fill
          className="object-cover opacity-80"
        />
      </div>
      
      {/* Middle warning tape */}
      <div className="absolute top-1/2 left-0 w-full h-20 rotate-1 z-10 pointer-events-none">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/svgs/strip-2-11.svg?"
          alt="Warning tape"
          fill
          className="object-cover opacity-80"
        />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-heading text-4xl font-black uppercase leading-none text-brand-dark-navy sm:text-5xl lg:text-6xl">
            Our USPs
          </h2>
          <p className="mx-auto mt-8 max-w-3xl font-body text-lg leading-tight text-muted-foreground">
            What makes Purple Pandaa different? We combine creativity, data, and relationships to deliver campaigns that actually work.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-6xl md:mt-16 pb-16 md:pb-24">
          {differentiatorsData.map((item, index) => (
            <DifferentiatorCard 
              key={index} 
              item={item} 
              index={index}
              totalCards={differentiatorsData.length}
            />
          ))}
        </div>
      </div>
      
      {/* Bottom warning tape */}
      <div className="absolute bottom-0 left-0 w-full h-20 -rotate-2 z-10 pointer-events-none">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/svgs/strip-1-10.svg?"
          alt="Warning tape"
          fill
          className="object-cover opacity-80"
        />
      </div>
    </section>
  );
};

export default AgencyDifferentiators;