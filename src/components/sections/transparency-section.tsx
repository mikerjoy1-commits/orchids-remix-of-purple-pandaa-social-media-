"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import WhatsAppFormDialog from "@/components/whatsapp-form-dialog";

export default function TransparencySection() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const imageRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: imageRef,
    offset: ["start end", "end start"]
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const rotateStar = useTransform(scrollYProgress, [0, 1], [0, 15]);

  return (
    <div className="bg-white">
      <section className="container mx-auto max-w-6xl px-4 py-24 sm:py-32">
        <div className="grid grid-cols-1 items-center gap-x-16 gap-y-20 lg:grid-cols-2">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-start gap-y-6">

            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-heading text-5xl font-bold text-brand-dark-navy">

              We got nothing to hide.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="font-body text-lg leading-relaxed text-slate-600">

              We believe in radical transparency. We show real results and case
              studies from our successful campaigns to demonstrate clear ROI
              metrics. It's all about performance, not just promises.
              <br />
              <strong className="text-brand-dark-navy">Aadarsh K</strong>
              <br />
              <strong className="text-brand-dark-navy">CTO , Purple Pandaa</strong>
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsDialogOpen(true)}
              className="mt-2 inline-block rounded-md bg-black px-8 py-4 font-body text-sm font-bold text-white transition-colors hover:bg-gray-800">

              DOWNLOAD OUR CASE STUDIES
            </motion.button>
          </motion.div>

          {/* Image Content */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative">

            <motion.div style={{ y: yImage }} className="overflow-hidden rounded-2xl">
              <Image
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/WhatsApp-Image-2025-10-12-at-21.37.54_03254a9b-1760285339958.jpg"
                alt="Professional business person representing data-driven approach"
                width={590}
                height={393}
                className="w-full rounded-2xl object-cover" />

            </motion.div>
            <motion.div
              style={{ rotate: rotateStar }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.5, ease: "backOut" }}
              className="absolute -left-10 -top-10 h-44 w-44">

              <div className="relative h-full w-full">
                <Image
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/646419b2-2ffb-45de-9b9a-3a4bb37e17fc-drinkmisfits-com/assets/svgs/star-12.svg?"
                  alt="Yellow starburst"
                  layout="fill"
                  objectFit="contain" />

              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <WhatsAppFormDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)} />

    </div>);

}