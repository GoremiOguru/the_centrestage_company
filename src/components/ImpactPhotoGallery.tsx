import React, { useState } from 'react';
import { GALLERY_PHOTOS, type MediaPhoto } from '../data/mediaAssets';
import { X, Sparkles, Maximize2 } from 'lucide-react';

export const ImpactPhotoGallery: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<MediaPhoto | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Keynote & Speaking', 'Corporate Convenings', 'The Mixer & Networking', 'Foundation & Impact', 'Workshops & Mentorship'];

  const filteredPhotos = activeCategory === 'All'
    ? GALLERY_PHOTOS
    : GALLERY_PHOTOS.filter((p) => p.category === activeCategory);

  return (
    <section className="space-y-8 pt-8">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 text-[10px] font-mono tracking-widest text-[#d4af37] uppercase">
          <Sparkles className="w-3 h-3 text-[#d4af37]" />
          Visual Archive &amp; Proof of Work
        </div>
        <h2 className="font-serif text-3xl sm:text-5xl text-white font-medium">
          A Decade of Distinctive Convenings
        </h2>
        <p className="text-sm sm:text-base text-neutral-400 font-light">
          A glimpse into the rooms, keynotes, masterclasses, and executive dialogues shaped across Africa and global horizons since 2015.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 text-xs rounded-full font-mono uppercase tracking-wider transition-all cursor-pointer ${
              activeCategory === cat
                ? 'bg-[#d4af37] text-black font-semibold shadow-lg shadow-[#d4af37]/20'
                : 'bg-[#0f0f15] text-neutral-400 hover:text-white border border-neutral-800 hover:border-[#d4af37]/40'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Responsive Luxury Photo Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pt-4">
        {filteredPhotos.map((photo) => (
          <div
            key={photo.id}
            onClick={() => setSelectedPhoto(photo)}
            className="group relative aspect-[4/3] rounded-sm overflow-hidden bg-[#0e0e14] border border-[#d4af37]/20 hover:border-[#d4af37] transition-all duration-500 cursor-pointer shadow-xl"
          >
            <img
              src={photo.src}
              alt={photo.alt}
              loading="lazy"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />

            {/* Gradient Scrim */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

            {/* Category Tag Overlay */}
            <div className="absolute top-3 left-3">
              <span className="text-[9px] font-mono uppercase tracking-widest text-[#d4af37] bg-black/80 px-2 py-0.5 rounded-sm border border-[#d4af37]/30 backdrop-blur-sm">
                {photo.category}
              </span>
            </div>

            {/* Zoom Icon indicator */}
            <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity p-1.5 bg-black/80 text-[#d4af37] rounded-sm border border-[#d4af37]/40">
              <Maximize2 className="w-3.5 h-3.5" />
            </div>

            {/* Bottom Caption Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4 space-y-1 transform translate-y-1 group-hover:translate-y-0 transition-transform">
              <h4 className="font-serif text-base text-white font-medium leading-snug">
                {photo.title}
              </h4>
              <p className="text-[11px] text-neutral-300 font-light line-clamp-2">
                {photo.caption}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-[120] bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 animate-fadeIn"
        >
          <button
            onClick={() => setSelectedPhoto(null)}
            className="fixed top-6 right-6 z-[130] p-3 text-white bg-black/80 border border-[#d4af37]/60 hover:bg-[#d4af37] hover:text-black rounded-full transition-all shadow-2xl"
            aria-label="Close photo preview"
          >
            <X className="w-6 h-6" />
          </button>

          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl w-full max-h-[90vh] bg-[#0c0c10] border border-[#d4af37]/40 rounded-sm overflow-hidden flex flex-col shadow-2xl"
          >
            <div className="relative w-full max-h-[70vh] overflow-hidden bg-black flex items-center justify-center">
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>

            <div className="p-6 bg-[#0c0c10] border-t border-neutral-800 space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37]">
                  {selectedPhoto.category}
                </span>
                <span className="text-xs text-neutral-500 font-mono">
                  The CENTRESTAGE Archive
                </span>
              </div>
              <h3 className="font-serif text-2xl text-white">
                {selectedPhoto.title}
              </h3>
              <p className="text-sm text-neutral-300 font-light leading-relaxed">
                {selectedPhoto.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
