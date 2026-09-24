import React from 'react';
import type { InsightArticle } from '../types';
import { X, Clock, Share2, BookOpen } from 'lucide-react';

interface ArticleModalProps {
  article: InsightArticle | null;
  onClose: () => void;
  onContactClick: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose, onContactClick }) => {
  if (!article) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/95 backdrop-blur-md flex items-center justify-center p-4 md:p-8 animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-[#0a0a0d] border border-[#d4af37]/30 rounded-sm shadow-2xl p-6 md:p-12 text-neutral-200 my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-neutral-400 hover:text-white hover:bg-neutral-900 rounded-full transition-colors"
          aria-label="Close Article"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Article Meta */}
        <div className="space-y-4 pb-8 mb-8 border-b border-neutral-800">
          <div className="flex items-center gap-4 text-xs">
            <span className="px-2.5 py-1 bg-[#d4af37]/15 text-[#d4af37] border border-[#d4af37]/30 rounded-sm uppercase tracking-widest font-mono">
              {article.category}
            </span>
            <span className="flex items-center gap-1 text-neutral-400 font-mono">
              <Clock className="w-3.5 h-3.5" />
              {article.readTime}
            </span>
            <span className="text-neutral-500 font-mono">
              Article {article.number}
            </span>
          </div>

          <h1 className="font-serif text-3xl md:text-5xl text-white font-medium leading-tight">
            {article.title}
          </h1>

          <p className="text-base text-neutral-400 font-light italic">
            "{article.excerpt}"
          </p>

          <div className="text-[11px] text-neutral-500 font-mono pt-2">
            SEO Territory: {article.seoTerritory}
          </div>
        </div>

        {/* Article Main Content */}
        <div className="prose prose-invert prose-gold max-w-none space-y-6 text-neutral-300 font-sans leading-relaxed text-sm md:text-base">
          {article.fullContent ? (
            article.fullContent.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h3 key={index} className="font-serif text-2xl text-white pt-6 pb-2 font-medium border-b border-neutral-800">
                    {paragraph.replace('### ', '')}
                  </h3>
                );
              }
              if (paragraph.startsWith('#### ')) {
                return (
                  <h4 key={index} className="font-serif text-xl text-[#d4af37] pt-4 font-medium">
                    {paragraph.replace('#### ', '')}
                  </h4>
                );
              }
              if (paragraph.startsWith('---')) {
                return <div key={index} className="gold-line my-8" />;
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <ul key={index} className="list-disc list-inside space-y-2 text-neutral-300 pl-4">
                    {paragraph.split('\n').map((li, i) => (
                      <li key={i}>{li.replace('- ', '')}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={index} className="text-neutral-300 leading-relaxed font-light">
                  {paragraph}
                </p>
              );
            })
          ) : (
            <div className="p-8 bg-[#0f0f15] border border-neutral-800 rounded-sm text-center space-y-4">
              <BookOpen className="w-8 h-8 text-[#d4af37] mx-auto opacity-60" />
              <h3 className="font-serif text-xl text-white">Full Monograph Available Upon Request</h3>
              <p className="text-xs text-neutral-400 max-w-md mx-auto">
                This insight piece is part of The CENTRESTAGE's original monograph series exploring reputation, authority, and human distinction.
              </p>
            </div>
          )}
        </div>

        {/* Article Footer Actions */}
        <div className="mt-12 pt-8 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => {
              if (navigator.share) {
                navigator.share({ title: article.title, url: window.location.href });
              } else {
                alert("Article title copied to clipboard!");
              }
            }}
            className="flex items-center gap-2 text-xs text-neutral-400 hover:text-[#d4af37] transition-colors"
          >
            <Share2 className="w-4 h-4" />
            <span>Share Insights Monograph</span>
          </button>

          <button
            onClick={() => {
              onClose();
              onContactClick();
            }}
            className="px-6 py-3 bg-[#d4af37] text-black font-semibold text-xs uppercase tracking-wider hover:bg-[#e2bd44] transition-all rounded-sm"
          >
            Discuss This Idea With Us
          </button>
        </div>

      </div>
    </div>
  );
};
