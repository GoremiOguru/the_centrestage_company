import React, { useEffect } from 'react';
import type { CaseStudy } from '../types';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';

interface CaseStudyModalProps {
  caseStudy: CaseStudy | null;
  onClose: () => void;
  onContactClick: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ caseStudy, onClose, onContactClick }) => {
  useEffect(() => {
    if (caseStudy) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [caseStudy]);

  if (!caseStudy) return null;

  return (
    <div className="fixed inset-0 z-[100] overflow-y-auto bg-black/95 backdrop-blur-md flex items-start justify-center p-4 sm:p-6 md:p-10 animate-fadeIn">
      
      {/* Sticky/Fixed High-Visibility Close 'X' Button pinned to viewport */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 sm:top-6 sm:right-6 z-[110] p-3 text-white bg-[#0e0e14]/90 border border-[#d4af37]/50 hover:bg-[#d4af37] hover:text-black rounded-full transition-all shadow-2xl flex items-center justify-center cursor-pointer group"
        aria-label="Close Case Monograph"
      >
        <X className="w-6 h-6 transition-transform group-hover:rotate-90" />
      </button>

      <div className="relative w-full max-w-4xl bg-[#0b0b0e] border border-[#d4af37]/30 rounded-sm shadow-2xl p-6 sm:p-10 md:p-12 text-neutral-200 my-8">
        
        {/* Header tag & title */}
        <div className="space-y-3 pb-8 mb-8 border-b border-neutral-800 pr-8">
          <span className="text-xs font-mono tracking-widest text-[#d4af37] uppercase">
            {caseStudy.clientCategory}
          </span>
          <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-white font-medium leading-tight">
            {caseStudy.title}
          </h2>
          <p className="text-sm md:text-base text-neutral-400 font-light">
            {caseStudy.summary}
          </p>
        </div>

        {/* 4-Part Structure: Context -> What We Saw -> What We Did -> What Changed */}
        <div className="space-y-8">
          
          {/* Part 1: THE CONTEXT */}
          <div className="p-6 bg-[#0e0e14] border-l-2 border-neutral-600 rounded-r-sm">
            <h4 className="text-xs font-mono tracking-[0.2em] text-neutral-400 uppercase mb-2">
              THE CONTEXT
            </h4>
            <p className="text-sm md:text-base leading-relaxed text-neutral-200">
              {caseStudy.context}
            </p>
          </div>

          {/* Part 2: WHAT WE SAW (High emphasis strategic vision) */}
          <div className="p-6 bg-[#12121c] border-l-2 border-[#d4af37] rounded-r-sm">
            <h4 className="text-xs font-mono tracking-[0.2em] text-[#d4af37] uppercase mb-2 font-semibold">
              WHAT WE SAW
            </h4>
            <p className="font-serif text-lg md:text-xl text-white leading-relaxed italic">
              "{caseStudy.whatWeSaw}"
            </p>
          </div>

          {/* Part 3: WHAT WE DID */}
          <div className="p-6 bg-[#0e0e14] border-l-2 border-neutral-600 rounded-r-sm">
            <h4 className="text-xs font-mono tracking-[0.2em] text-neutral-400 uppercase mb-2">
              WHAT WE DID
            </h4>
            <p className="text-sm md:text-base leading-relaxed text-neutral-200">
              {caseStudy.whatWeDid}
            </p>
          </div>

          {/* Part 4: WHAT CHANGED */}
          <div className="p-6 bg-[#0f1712] border-l-2 border-emerald-500 rounded-r-sm">
            <div className="flex items-center gap-2 mb-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <h4 className="text-xs font-mono tracking-[0.2em] text-emerald-400 uppercase font-semibold">
                WHAT CHANGED
              </h4>
            </div>
            <p className="text-sm md:text-base leading-relaxed text-emerald-100">
              {caseStudy.whatChanged}
            </p>
          </div>

          {/* Optional Metrics */}
          {caseStudy.metrics && caseStudy.metrics.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-4">
              {caseStudy.metrics.map((m, idx) => (
                <div key={idx} className="p-4 bg-[#14141d] border border-neutral-800 rounded-sm text-center">
                  <span className="font-serif text-2xl md:text-3xl text-[#d4af37] font-bold block mb-1">
                    {m.value}
                  </span>
                  <span className="text-[11px] text-neutral-400 uppercase tracking-wider block">
                    {m.label}
                  </span>
                </div>
              ))}
            </div>
          )}

          {/* Quote */}
          {caseStudy.quote && (
            <div className="pt-6 border-t border-neutral-800">
              <blockquote className="font-serif italic text-lg text-neutral-300">
                "{caseStudy.quote.text}"
              </blockquote>
              <div className="mt-2 text-xs text-neutral-500 font-sans uppercase tracking-wider">
                — {caseStudy.quote.author}, <span className="text-[#d4af37]">{caseStudy.quote.role}</span>
              </div>
            </div>
          )}

        </div>

        {/* Modal Footer Action */}
        <div className="mt-10 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-xs text-neutral-500 font-serif italic">
            Make great work impossible to overlook.
          </span>
          <button
            onClick={() => {
              onClose();
              onContactClick();
            }}
            className="w-full sm:w-auto px-6 py-3 bg-[#d4af37] text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#e2bd44] transition-all rounded-sm flex items-center justify-center gap-2 whitespace-normal break-words"
          >
            <span>Start a Similar Engagement</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
