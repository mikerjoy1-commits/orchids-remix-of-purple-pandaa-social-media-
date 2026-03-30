"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

const features = [
  {
    iconSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/svgs/low-sugar-icon-2.svg',
    textLine1: 'High',
    textLine2: 'Quality',
    alt: 'High Quality Icon',
  },
  {
    iconSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/svgs/fibers-icon-3.svg',
    textLine1: 'Organic',
    textLine2: 'Content',
    alt: 'Organic Content Icon',
  },
  {
    iconSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/svgs/calorie-icon-4.svg',
    textLine1: 'Performance',
    textLine2: 'Marketing',
    alt: 'Performance Marketing Icon',
  },
  {
    iconSrc: 'https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/svgs/preservative-icon-5.svg',
    textLine1: 'Portfolio',
    textLine2: 'Management',
    alt: 'Portfolio Management Icon',
  },
];

const MissionStatement = () => {
  return (
    <section className="bg-white py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-4 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-display font-black text-5xl md:text-6xl lg:text-7xl leading-tight text-brand-mint-green uppercase tracking-tight"
        >
          WE ARE HERE TO MAKE SOCIAL MEDIA STRATEGIC AND RESULTS-DRIVEN.
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-body font-bold text-xl md:text-2xl text-brand-dark-navy mt-8"
        >
          P.S. WITHOUT HIDING ANYTHING :)
        </motion.p>

        <div className="mt-20 max-w-5xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-6 md:gap-x-8 items-start">
            {features.map((feature, index) => (
              <motion.div 
                key={index} 
                className="flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.15,
                  ease: "easeOut" 
                }}
              >
                <motion.div 
                  className="bg-brand-purple-primary w-28 h-28 md:w-32 md:h-32 rounded-full flex items-center justify-center mb-6"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Image
                    src={feature.iconSrc}
                    alt={feature.alt}
                    width={60}
                    height={60}
                    className="w-14 h-14 md:w-16 md:h-16"
                  />
                </motion.div>
                <p className="font-body font-bold text-lg md:text-xl text-brand-dark-navy leading-snug">
                  {feature.textLine1}
                  <br />
                  {feature.textLine2}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionStatement;