"use client";

import { Smartphone, Rocket, ShoppingCart, Globe, RefreshCw, Video } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import WhatsAppFormDialog from "@/components/whatsapp-form-dialog";

const services = [
  {
    id: "organic",
    title: "Organic Marketing",
    subtitle: "All Social Media",
    description: "Build authentic engagement and grow your brand presence across all platforms with high-quality content.",
    icon: Smartphone,
    gradient: "from-purple-600 to-purple-800",
  },
  {
    id: "performance",
    title: "Performance Marketing",
    subtitle: "ROI-Focused Campaigns",
    description: "Campaigns designed to maximize results, delivering higher ROAS and ROI through data-driven strategies.",
    icon: Rocket,
    gradient: "from-purple-700 to-indigo-700",
  },
  {
    id: "ecommerce",
    title: "E-commerce Solutions",
    subtitle: "Platform Management",
    description: "End-to-end support to launch, manage, and scale online stores with proven strategies.",
    icon: ShoppingCart,
    gradient: "from-indigo-700 to-blue-700",
  },
  {
    id: "websites",
    title: "Personalized Websites",
    subtitle: "Custom Development",
    description: "Custom websites tailored to your brand, audience, and business goals for maximum impact.",
    icon: Globe,
    gradient: "from-blue-700 to-cyan-600",
  },
  {
    id: "apps",
    title: "Mobile Applications",
    subtitle: "Android & iOS",
    description: "Mobile apps that deliver seamless user experiences and drive engagement on all devices.",
    icon: Smartphone,
    gradient: "from-cyan-600 to-teal-600",
  },
  {
    id: "portfolio360",
    title: "360° Portfolio Management",
    subtitle: "Complete Strategy",
    description: "Comprehensive digital strategy, covering every touchpoint for maximum impact and growth.",
    icon: RefreshCw,
    gradient: "from-teal-600 to-purple-600",
  },
];

export default function ServicesShowcase() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <section id="services" className="relative w-full overflow-hidden py-20 md:py-32 bg-white">
      {/* Warning tape decorations */}
      <motion.div 
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 0.8 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 left-0 w-full h-16 -rotate-2"
      >
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/svgs/strip-1-10.svg?"
          alt="Warning tape decoration"
          fill
          className="object-cover"
        />
      </motion.div>

      <div className="container relative z-10 mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-display font-black text-5xl md:text-6xl lg:text-7xl text-center text-brand-dark-navy mb-4 uppercase tracking-tight"
        >
          Our Services
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-body text-lg md:text-xl text-center text-muted-foreground mb-16 max-w-3xl mx-auto"
        >
          Comprehensive digital solutions designed to elevate your brand and drive measurable results
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} onCtaClick={() => setIsDialogOpen(true)} />
          ))}
        </div>
      </div>

      {/* Bottom warning tape */}
      <motion.div 
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 0.8 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute bottom-0 left-0 w-full h-16 rotate-1"
      >
        <Image
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/svgs/strip-2-11.svg?"
          alt="Warning tape decoration"
          fill
          className="object-cover"
        />
      </motion.div>
      
      <WhatsAppFormDialog 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
      />
    </section>
  );
}

function ServiceCard({ service, index, onCtaClick }: { service: typeof services[0]; index: number; onCtaClick: () => void }) {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group relative bg-gradient-to-br from-purple-50 to-purple-100 rounded-3xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon */}
      <div className="mb-6">
        <motion.div 
          whileHover={{ scale: 1.1, rotate: 6 }}
          transition={{ duration: 0.3 }}
          className={`w-20 h-20 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center`}
        >
          <IconComponent className="w-10 h-10 text-white" strokeWidth={2.5} />
        </motion.div>
      </div>

      {/* Title */}
      <h3 className="font-heading font-bold text-2xl md:text-3xl text-brand-dark-navy mb-2 uppercase leading-tight">
        {service.title}
      </h3>
      
      {/* Subtitle */}
      <p className="font-body text-sm md:text-base text-brand-purple-primary font-semibold mb-4 uppercase tracking-wide">
        {service.subtitle}
      </p>

      {/* Description */}
      <p className="font-body text-base text-muted-foreground leading-relaxed mb-6">
        {service.description}
      </p>

      {/* CTA Button */}
      <button
        onClick={onCtaClick}
        className="w-full mt-4 py-3 px-6 rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 text-white font-heading font-bold uppercase transition-all duration-200 hover:shadow-lg hover:scale-105"
      >
        Get Started
      </button>
    </motion.div>
  );
}