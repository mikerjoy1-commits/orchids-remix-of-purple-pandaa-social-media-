"use client";

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';

const LifestyleBanner = () => {
    const scrollText = "CHASING QUALITY, NOT JUST CLICKS.";
    const marqueeContent = Array(5).fill(scrollText);
    const imageRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: imageRef,
        offset: ["start end", "end start"]
    });

    const yImage = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    return (
        <section>
            {/* 
              The style tag is necessary to define the keyframes for the scrolling animation,
              as we cannot modify tailwind.config.js or globals.css directly. 
              Using a plain style tag is the sanctioned workaround when a single file output is required and styled-jsx is forbidden.
            */}
            <style>
                {`
                    @keyframes scroll {
                        from { transform: translateX(0); }
                        to { transform: translateX(-100%); }
                    }
                    .animate-scroll {
                        animation: scroll 40s linear infinite;
                    }
                `}
            </style>
            
            {/* Scrolling Text Banner */}
            <div className="bg-background text-foreground overflow-hidden py-6 whitespace-nowrap">
                <div className="flex">
                    <div className="flex-shrink-0 flex items-center animate-scroll">
                        {marqueeContent.map((text, i) => (
                            <p key={`first-${i}`} className="font-heading font-black text-4xl md:text-5xl lg:text-7xl mx-6 uppercase">
                                {text}
                            </p>
                        ))}
                    </div>
                    <div className="flex-shrink-0 flex items-center animate-scroll" aria-hidden="true">
                        {marqueeContent.map((text, i) => (
                            <p key={`second-${i}`} className="font-heading font-black text-4xl md:text-5xl lg:text-7xl mx-6 uppercase">
                                {text}
                            </p>
                        ))}
                    </div>
                </div>
            </div>

            {/* Lifestyle Image with Wave Overlay */}
            <div className="relative overflow-hidden" ref={imageRef}>
                <motion.div style={{ y: yImage }} className="hidden md:block">
                    <Image
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Green-Blue-and-White-Minimalist-Landscape-Desktop-Wallpaper-1760290197556.png?t=1744747200000"
                        alt="A group of young people in trendy clothes sitting on steps in front of a graffiti wall"
                        width={1920}
                        height={1080}
                        className="w-full h-auto object-cover"
                        priority
                    />
                </motion.div>
                <motion.div style={{ y: yImage }} className="md:hidden">
                    <Image
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/Green-Blue-and-White-Minimalist-Landscape-Desktop-Wallpaper-1760290197556.png?v=mobile4"
                        alt="A group of young people in trendy clothes sitting on steps in front of a graffiti wall"
                        width={750}
                        height={1334}
                        className="w-full h-auto object-cover"
                        priority
                    />
                </motion.div>
                
                {/* Wave Overlay */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <Image
                        src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/svgs/wave-1.svg?"
                        alt="White wave overlay"
                        width={1440}
                        height={140}
                        className="absolute bottom-0 left-0 w-full h-auto z-10"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default LifestyleBanner;