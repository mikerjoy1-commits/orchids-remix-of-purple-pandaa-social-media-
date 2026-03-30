"use client";

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import WhatsAppFormDialog from '@/components/whatsapp-form-dialog';

const FinalCta = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.1, 1, 1.05]);

  return (
    <section ref={sectionRef} className="relative w-full bg-brand-dark-navy overflow-hidden">
      {/* Desktop Image */}
      <motion.div style={{ y: yImage, scale }} className="hidden md:block">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Firefly_A-close-up-ultra-wide-angle-fisheye-lens-portrait-of-a-young-charismatic-entrepre-363399-1-1760288081023.jpg"
          alt="Man wearing sunglasses in a forest holding a branded product"
          width={1920}
          height={1080}
          className="w-full h-auto object-cover"
          priority
        />
      </motion.div>
      {/* Mobile Image */}
      <motion.div style={{ y: yImage, scale }} className="block md:hidden">
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Firefly_A-close-up-ultra-wide-angle-fisheye-lens-portrait-of-a-young-charismatic-entrepre-363399-1-1760288081023.jpg?v=mobile2"
          alt="Man wearing sunglasses in a forest holding a branded product"
          width={750}
          height={1334}
          className="w-full h-auto object-cover"
          priority
        />
      </motion.div>

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 pointer-events-none">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-heading text-white font-black uppercase text-5xl sm:text-7xl lg:text-8xl text-center leading-none px-4"
          style={{ textShadow: '0 4px 8px rgba(0, 0, 0, 0.5)' }}
        >
          Level Up
          <br className="md:hidden" /> Your Brand!
        </motion.h2>
        
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsDialogOpen(true)}
          className="pointer-events-auto px-10 py-5 rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 text-white font-heading font-black uppercase text-xl hover:shadow-2xl transition-all duration-200"
        >
          Take My Money!
        </motion.button>
      </div>

      <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute bottom-0 left-0 w-full leading-[0]"
      >
        <svg
          className="w-full h-auto"
          viewBox="0 0 1440 134"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            d="M1440 52.3331C1344.86 20.9304 1243.2 -11.4552 1081.5 5.8331C922.5 22.8331 841 83.3331 667.5 83.3331C494 83.3331 433.5 29.3331 251.5 29.3331C122.3 29.3331 41.6667 44.8331 0 52.3331V134H1440V52.3331Z"
            className="fill-brand-purple-primary"
          />
        </svg>
      </motion.div>
      
      <WhatsAppFormDialog 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
      />
    </section>
  );
};

export default FinalCta;