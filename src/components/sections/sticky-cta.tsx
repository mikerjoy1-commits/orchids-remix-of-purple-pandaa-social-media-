"use client";

import React, { useState } from 'react';
import WhatsAppFormDialog from '@/components/whatsapp-form-dialog';

const StickyCta = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsDialogOpen(true)}
        className="fixed bottom-5 right-5 z-[1000] rounded-lg bg-primary px-6 py-4 font-heading text-xl font-black uppercase tracking-widest text-primary-foreground shadow-lg transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 md:bottom-10 md:right-10"
      >
        LET'S WORK TOGETHER!!
      </button>

      <WhatsAppFormDialog
        isOpen={isDialogOpen}
        onClose={() => setIsDialogOpen(false)}
      />
    </>
  );
};

export default StickyCta;
