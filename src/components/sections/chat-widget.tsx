'use client';

import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import WhatsAppFormDialog from '@/components/whatsapp-form-dialog';

const ChatWidget = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <style>
        {`
          @keyframes pulse-bounce {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.05);
            }
          }
          .animate-pulse-bounce {
            animation: pulse-bounce 2s ease-in-out infinite;
          }
        `}
      </style>
      
      <div className="fixed bottom-24 right-5 z-[999] md:bottom-28 md:right-10">
        <div
          className="relative"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          {/* Tooltip */}
          {showTooltip && (
            <div className="absolute bottom-full right-0 mb-2 whitespace-nowrap rounded-lg bg-brand-dark-navy px-4 py-2 text-sm text-white shadow-lg">
              Chat with an Assistant
              <div className="absolute bottom-[-6px] right-4 h-3 w-3 rotate-45 bg-brand-dark-navy"></div>
            </div>
          )}
          
          {/* Chat Button */}
          <button
            onClick={() => setIsDialogOpen(true)}
            className="animate-pulse-bounce flex h-14 w-14 items-center justify-center rounded-full bg-brand-purple-primary text-white shadow-lg transition-all hover:bg-brand-purple-secondary hover:scale-110 focus:outline-none focus:ring-2 focus:ring-brand-purple-primary focus:ring-offset-2"
            aria-label="Chat with an Assistant"
          >
            <MessageCircle className="h-6 w-6" />
          </button>
        </div>
      </div>
      
      <WhatsAppFormDialog 
        isOpen={isDialogOpen} 
        onClose={() => setIsDialogOpen(false)} 
      />
    </>
  );
};

export default ChatWidget;