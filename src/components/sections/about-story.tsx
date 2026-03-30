"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const AboutStory = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1, 0.9]);

  return (
    <section id="about" className="bg-white py-20 md:py-32" ref={sectionRef}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center max-w-6xl mx-auto">
          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center"
          >
            <div className="relative w-full max-w-[500px] overflow-hidden rounded-3xl">
              <motion.div style={{ y: yImage, scale }}>
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/IMG_2209-1-1759659866113.JPG"
                  alt="Founder in front of private jet"
                  width={500}
                  height={600}
                  className="object-cover w-full"
                />
              </motion.div>
              {/* Curved gradient shadowy overlay */}
              <div className="absolute inset-0 pointer-events-none rounded-3xl">
                <div 
                  className="absolute inset-0 rounded-3xl" 
                  style={{
                    background: 'radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.5) 100%)'
                  }}
                />
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-left"
          >
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="font-display font-black text-brand-dark-navy text-4xl md:text-5xl lg:text-6xl uppercase leading-tight mb-8"
            >
              A Founder's Journey...
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              Frustrated by the smoke and mirrors of the social media marketing world, I set out on a mission. I saw an industry plagued by empty promises and vanity metrics, where real business results were an afterthought. Determined to make a change, I founded Purple Pandaa. My goal was simple: to build a strategic, results-driven agency that delivers on its word. Today, Purple Pandaa stands for transparency, tangible growth, and a no-BS approach to helping brands win online.
            </motion.p>
          </motion.div>
        </div>

        {/* Underdog Statement - integrated */}
        <div className="mt-32 md:mt-40 text-center">
          <motion.h3 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display font-black text-brand-mint-green uppercase text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[1.1]"
          >
            an underdog agency that's actually better than the market giants
          </motion.h3>
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="block mt-6 font-display font-bold text-brand-dark-navy text-3xl md:text-4xl lg:text-5xl"
          >
            (you know who)
          </motion.span>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;