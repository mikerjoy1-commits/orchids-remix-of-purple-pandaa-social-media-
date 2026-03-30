"use client";

import React, { useState } from 'react';
import { X } from 'lucide-react';

interface WhatsAppFormDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WhatsAppFormDialog({ isOpen, onClose }: WhatsAppFormDialogProps) {
  const [step, setStep] = useState(1);
  const [answers, setAnswers] = useState({
    serious: '',
    doingYourself: '',
    priority: ''
  });

  if (!isOpen) return null;

  const handleAnswer = (field: keyof typeof answers, value: string) => {
    setAnswers(prev => ({ ...prev, [field]: value }));
    if (step < 3) {
      setStep(step + 1);
    }
  };

  const handleSubmit = () => {
    const message = `Hi! I'm interested in Purple Pandaa's services. Here are my details:

🎯 Serious about marketing? ${answers.serious}
👤 Doing it yourself? ${answers.doingYourself}
💡 Priority focus: ${answers.priority}

Let's discuss how you can help my brand!`;

    const whatsappUrl = `https://wa.me/917208263013?text=${encodeURIComponent(message)}`;
    
    // Check if in iframe
    const isInIframe = window.self !== window.top;
    if (isInIframe) {
      window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url: whatsappUrl } }, "*");
    } else {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }
    
    // Reset and close
    setStep(1);
    setAnswers({ serious: '', doingYourself: '', priority: '' });
    onClose();
  };

  const isComplete = answers.serious && answers.doingYourself && answers.priority;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Header */}
        <div className="bg-gradient-to-br from-purple-600 to-purple-800 px-8 py-10 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-black text-white uppercase mb-2">
            Let's Get Started!
          </h2>
          <p className="font-body text-white/90 text-sm md:text-base">
            Answer 3 quick questions before we chat
          </p>
        </div>

        {/* Form Content */}
        <div className="px-8 py-10">
          {/* Progress indicator */}
          <div className="flex gap-2 mb-8">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className={`h-2 flex-1 rounded-full transition-all duration-300 ${
                  num <= step ? 'bg-purple-600' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>

          {/* Question 1 */}
          <div className={`space-y-4 transition-opacity duration-300 ${step === 1 ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-brand-dark-navy mb-6">
              Are you really serious about marketing?
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleAnswer('serious', 'Yes')}
                className="py-4 px-6 rounded-xl border-2 border-purple-600 bg-purple-50 hover:bg-purple-600 hover:text-white font-heading font-bold uppercase transition-all duration-200 text-brand-dark-navy"
              >
                Yes
              </button>
              <button
                onClick={() => handleAnswer('serious', 'No')}
                className="py-4 px-6 rounded-xl border-2 border-gray-300 hover:border-purple-600 hover:bg-purple-50 font-heading font-bold uppercase transition-all duration-200 text-brand-dark-navy"
              >
                No
              </button>
            </div>
          </div>

          {/* Question 2 */}
          <div className={`space-y-4 transition-opacity duration-300 ${step === 2 ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-brand-dark-navy mb-6">
              Are you doing it yourself?
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleAnswer('doingYourself', 'Yes')}
                className="py-4 px-6 rounded-xl border-2 border-purple-600 bg-purple-50 hover:bg-purple-600 hover:text-white font-heading font-bold uppercase transition-all duration-200 text-brand-dark-navy"
              >
                Yes
              </button>
              <button
                onClick={() => handleAnswer('doingYourself', 'No')}
                className="py-4 px-6 rounded-xl border-2 border-gray-300 hover:border-purple-600 hover:bg-purple-50 font-heading font-bold uppercase transition-all duration-200 text-brand-dark-navy"
              >
                No
              </button>
            </div>
          </div>

          {/* Question 3 */}
          <div className={`space-y-4 transition-opacity duration-300 ${step === 3 ? 'opacity-100' : 'opacity-0 hidden'}`}>
            <h3 className="font-heading text-xl md:text-2xl font-bold text-brand-dark-navy mb-6">
              When you think marketing, do you think about budget first or strategy first?
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={() => handleAnswer('priority', 'Budget')}
                className="py-4 px-6 rounded-xl border-2 border-purple-600 bg-purple-50 hover:bg-purple-600 hover:text-white font-heading font-bold uppercase transition-all duration-200 text-brand-dark-navy"
              >
                Budget
              </button>
              <button
                onClick={() => handleAnswer('priority', 'Strategy')}
                className="py-4 px-6 rounded-xl border-2 border-gray-300 hover:border-purple-600 hover:bg-purple-50 font-heading font-bold uppercase transition-all duration-200 text-brand-dark-navy"
              >
                Strategy
              </button>
            </div>
          </div>

          {/* Submit button (shown when all answered) */}
          {isComplete && (
            <button
              onClick={handleSubmit}
              className="w-full mt-8 py-4 px-6 rounded-xl bg-gradient-to-br from-purple-600 to-purple-800 text-white font-heading font-black uppercase text-lg hover:shadow-lg hover:scale-105 transition-all duration-200 animate-in fade-in slide-in-from-bottom-4"
            >
              💬 Start WhatsApp Chat
            </button>
          )}
        </div>
      </div>
    </div>
  );
}