"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const testimonialsData = [
  {
    type: 'review' as const,
    quote: "Purple Pandaa rebuilt our content engine. Reels and Shorts are consistently hitting 100k+ views and our inbound leads have doubled in 60 days.",
    name: "Amrita Shinde",
    title: "Head of Marketing, Fintech"
  },
  {
    type: 'image' as const,
    imageSrc: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/IMG_2334-1759660565338.JPG",
    altText: "Showcase of client work and honest reviews",
    overlayText: ["NO B.S.", "HONEST", "REVIEWS :"],
  },
  {
    type: 'review' as const,
    quote: "Their portfolio management ops are elite — assets, approvals, publishing, and reporting are all on rails. I finally have visibility and predictability.",
    name: "Vishal Shetty",
    title: "Creative Director, D2C Brand",
  },
  {
    type: 'review' as const,
    quote: "Our CAC dropped 28% and ROAS is up 2.1x in 8 weeks. They test fast, iterate faster, and scale what works.",
    name: "Pratik Kamath",
    title: "Growth Lead, SaaS",
  }
];

export default function Testimonials() {
  return (
    <section 
      className="bg-brand-purple-primary py-20 lg:py-24"
      style={{
        backgroundColor: '#7B3AF0' 
      }}
    >
      <div className="overflow-x-auto snap-x snap-mandatory">
        <div className="flex w-max mx-auto gap-6 lg:gap-8 px-4 sm:px-6 lg:px-8">
          {testimonialsData.map((item, index) => {
            if (item.type === 'review') {
              return (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 50, rotateY: -15 }}
                  whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.15,
                    ease: "easeOut" 
                  }}
                  whileHover={{ scale: 1.05, y: -10 }}
                  className="flex-shrink-0 snap-center w-[calc(100vw-3rem)] max-w-[380px] h-[475px] bg-white rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-lg"
                >
                  <blockquote className="font-body text-brand-dark-navy text-lg leading-relaxed">
                    {item.quote}
                  </blockquote>
                  <footer className="mt-6">
                    <p className="font-heading font-bold text-xl text-brand-dark-navy">{item.name}</p>
                    <p className="font-body text-base text-muted-foreground">{item.title}</p>
                  </footer>
                </motion.div>
              );
            }
            if (item.type === 'image') {
              return (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  whileHover={{ scale: 1.05 }}
                  className="relative flex-shrink-0 snap-center w-[calc(100vw-3rem)] max-w-[380px] h-[475px] bg-gray-200 rounded-2xl overflow-hidden shadow-lg"
                >
                  <Image
                    src={item.imageSrc}
                    alt={item.altText}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 90vw, 380px"
                  />
                  <div className="absolute inset-0 bg-black/20 flex flex-col justify-end p-6 md:p-8">
                    <motion.h3 
                      initial={{ x: -30, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.3 }}
                      className="font-heading font-black text-white text-[44px] md:text-5xl leading-none"
                    >
                      {item.overlayText.map((line) => (
                        <span key={line} className="block">{line}</span>
                      ))}
                    </motion.h3>
                  </div>
                </motion.div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
}