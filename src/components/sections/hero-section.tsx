"use client";
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const HeroSection = () => {
  const marqueeText = "Purple Pandaa's First Creative Agency";
  const marqueeItems = Array(8).fill(marqueeText);
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  useEffect(() => {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = `
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-30px); }
      }
      @keyframes marquee {
        from { transform: translateX(0); }
        to { transform: translateX(-50%); }
      }
    `;
    document.head.appendChild(styleSheet);

    return () => {
      document.head.removeChild(styleSheet);
    };
  }, []);

  return (
    <>
      <div className="bg-gradient-to-br from-purple-600 via-violet-600 to-purple-700" ref={sectionRef}>
        <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
          <motion.div style={{ y: yBg, scale }} className="absolute inset-0">
            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/images/sliderbg-desktop-2.png?"
              alt="Decorative background doodles"
              fill
              sizes="100vw"
              className="hidden h-full w-full object-cover opacity-20 md:block"
              priority />

            <Image
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/images/sliderbg-mobile-3.png?"
              alt="Decorative background doodles"
              fill
              sizes="100vw"
              className="h-full w-full object-cover opacity-20 md:hidden"
              priority />
          </motion.div>

          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="pointer-events-none absolute left-[52%] top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
            style={{ 
              animation: 'float 6s ease-in-out infinite',
              transform: 'translateX(-50%) translateY(-50%) rotate(-12deg)'
            }}>
            <div className="relative" style={{ width: 'clamp(300px, 40vw, 600px)', height: 'clamp(450px, 60vh, 850px)' }}>
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Firefly_Rich_electric_purple___A259FF_or_similar___Crisp_white___FFFFFF__for_highlights__Deep_530176-removebg-preview-1760283122696.png"
                alt="Purple Pandaa character with microphone"
                fill
                className="object-contain"
                priority />
            </div>
          </motion.div>

          <motion.div 
            style={{ opacity }} 
            className="relative mt-16 px-4 text-center md:mt-0"
          >
            <motion.h1 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="relative z-30 font-display font-black uppercase leading-[0.85] tracking-tighter text-white" 
              style={{ fontSize: 'clamp(4rem, 18vw, 12rem)' }}
            >
              FU*K
            </motion.h1>
            <motion.h2 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="relative z-10 font-display font-black uppercase leading-[0.85] tracking-tighter text-white" 
              style={{ fontSize: 'clamp(4rem, 18vw, 12rem)' }}
            >
              REGULAR
            </motion.h2>
            <motion.h2 
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative z-30 font-display font-black uppercase leading-[0.85] tracking-tighter text-white" 
              style={{ fontSize: 'clamp(4rem, 18vw, 12rem)' }}
            >
              AGENCIES
            </motion.h2>
            <motion.p 
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="relative z-30 mt-6 font-body text-xl text-white/95 md:text-3xl"
            >
              Social Media Agency
            </motion.p>
          </motion.div>
        </section>
      </div>

      <div className="overflow-hidden bg-gradient-to-r from-purple-600 to-violet-600 py-5 font-display">
        <div
          className="flex whitespace-nowrap"
          style={{ animation: 'marquee 30s linear infinite' }}>
          {marqueeItems.concat(marqueeItems).map((item, index) =>
            <span key={index} className="mx-6 flex-shrink-0 text-3xl font-black uppercase text-white md:mx-10 md:text-5xl lg:text-6xl">
              {item}
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default HeroSection;