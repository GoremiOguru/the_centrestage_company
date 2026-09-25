import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import { INSIGHTS_ARTICLES } from '../data/siteData';
import { ArticleModal } from '../components/ArticleModal';
import { HorizontalSlider } from '../components/HorizontalSlider';
import type { InsightArticle, NavigationPath } from '../types';
import { ChevronRight, Search, ChevronDown } from 'lucide-react';

interface InsightsPageProps {
  onNavigate: (path: NavigationPath) => void;
  selectedArticleFromParent?: InsightArticle | null;
}

export const InsightsPage: React.FC<InsightsPageProps> = ({ onNavigate, selectedArticleFromParent }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<InsightArticle | null>(selectedArticleFromParent || null);
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [visibleCount, setVisibleCount] = useState<number>(6); // Show initial 6 articles to prevent infinite scrolling

  const categories = [
    'All',
    'Reputation',
    'Leadership',
    'Storytelling',
    'Influence',
    'Future Readiness',
    'Ideas & Culture'
  ];

  const filteredArticles = INSIGHTS_ARTICLES.filter((art) => {
    const matchesCategory = activeCategory === 'All' || art.category === activeCategory;
    const matchesSearch =
      art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const displayedArticles = filteredArticles.slice(0, visibleCount);
  const hasMore = visibleCount < filteredArticles.length;

  return (
    <>
      <SEOHead
        title="Insights on Reputation, Leadership & Influence | The CENTRESTAGE"
        description="Ideas and perspectives from The CENTRESTAGE on reputation, leadership, storytelling, influence, AI, visibility and the future of work."
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-24 space-y-20">
        
        {/* Header & Lead Section */}
        <section className="space-y-8 text-center max-w-4xl mx-auto">
          <span className="text-xs font-mono tracking-[0.3em] text-[#d4af37] uppercase block">
            INSIGHTS JOURNAL
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-white font-light leading-tight">
            Ideas worth putting <br />
            <span className="text-gold-gradient italic">CentreStage.</span>
          </h1>

          <div className="space-y-4 text-base sm:text-lg text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed">
            <p className="font-serif italic text-xl text-white">
              "We don't believe thought leadership means saying more. It means having something worth saying."
            </p>
            <p className="text-sm text-neutral-400">
              This is where we explore the ideas shaping our work and the world around it: reputation, influence, storytelling, leadership, human distinction, AI and the future of work.
            </p>
            <div className="pt-2">
              <span className="text-xs font-mono tracking-[0.2em] text-[#d4af37] uppercase font-semibold">
                Read. Question. Think differently.
              </span>
            </div>
          </div>
        </section>

        {/* Category Filters & Search */}
        <section className="space-y-6 pt-4 border-t border-neutral-900">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            
            {/* Category Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCategory(cat);
                    setVisibleCount(6); // Reset pagination on category change
                  }}
                  className={`px-4 py-2 text-xs font-sans tracking-wider transition-all rounded-sm ${
                    activeCategory === cat
                      ? 'bg-[#d4af37] text-black font-semibold shadow-md'
                      : 'bg-[#101016] text-neutral-400 hover:text-white border border-neutral-800'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search journal..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(6);
                }}
                className="w-full pl-9 pr-4 py-2 bg-[#0e0e14] border border-neutral-800 text-xs text-neutral-200 placeholder-neutral-500 rounded-sm focus:outline-none focus:border-[#d4af37]"
              />
              <Search className="w-4 h-4 text-neutral-500 absolute left-3 top-2.5" />
            </div>

          </div>
        </section>

        {/* HORIZONTALLY ARRANGED LAUNCH MONOGRAPHS SPOTLIGHT */}
        {activeCategory === 'All' && searchQuery === '' && (
          <section className="space-y-4">
            <HorizontalSlider
              title="Featured Launch Monographs"
              subtitle="MUST-READ ESSAYS"
            >
              {INSIGHTS_ARTICLES.filter((a) => a.isPublished).map((article) => (
                <div
                  key={article.id}
                  onClick={() => setActiveArticle(article)}
                  className="interactive-card w-[320px] sm:w-[380px] flex-shrink-0 p-8 bg-[#0d0d14] border border-[#d4af37]/30 rounded-sm space-y-6 cursor-pointer group flex flex-col justify-between snap-start"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="px-2 py-0.5 bg-[#d4af37]/15 text-[#d4af37] border border-[#d4af37]/30 rounded-sm uppercase tracking-wider">
                        {article.category}
                      </span>
                      <span className="text-neutral-500">{article.readTime}</span>
                    </div>

                    <span className="text-xs font-mono text-neutral-500 block">
                      ARTICLE {article.number}
                    </span>

                    <h3 className="font-serif text-2xl text-white group-hover:text-[#d4af37] transition-colors leading-snug">
                      {article.title}
                    </h3>

                    <p className="text-xs text-neutral-300 font-light leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-neutral-900 flex items-center justify-between text-xs text-[#d4af37] font-semibold tracking-wider uppercase">
                    <span>Read Monograph</span>
                    <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              ))}
            </HorizontalSlider>
          </section>
        )}

        {/* Grid of Articles with "View More" Pagination */}
        <section className="space-y-8 pt-6">
          <h2 className="text-xs font-mono text-neutral-400 uppercase tracking-[0.25em]">
            ALL INSIGHT MONOGRAPHS ({filteredArticles.length})
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedArticles.map((article) => (
              <div
                key={article.id}
                onClick={() => setActiveArticle(article)}
                className="interactive-card p-6 bg-[#0b0b0e] border border-neutral-800 rounded-sm space-y-4 cursor-pointer group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-[#d4af37] uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span className="text-neutral-500">{article.readTime}</span>
                  </div>

                  <span className="text-[10px] font-mono text-neutral-600 block">
                    ARTICLE {article.number}
                  </span>

                  <h3 className="font-serif text-xl text-white group-hover:text-[#d4af37] transition-colors leading-snug">
                    {article.title}
                  </h3>

                  <p className="text-xs text-neutral-400 font-light line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-900 flex items-center justify-between text-[11px] text-neutral-400 group-hover:text-[#d4af37] tracking-wider uppercase">
                  <span>{article.isPublished ? 'Read Monograph' : 'Explore Concept'}</span>
                  <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>

          {/* VIEW MORE BUTTON */}
          {hasMore && (
            <div className="text-center pt-8">
              <button
                onClick={() => setVisibleCount((prev) => prev + 6)}
                className="px-8 py-3.5 bg-[#12121a] border border-[#d4af37]/40 hover:border-[#d4af37] text-[#d4af37] hover:text-white text-xs uppercase tracking-widest font-semibold rounded-sm transition-all inline-flex items-center gap-2 group shadow-lg"
              >
                <span>View More Monograph Concepts ({filteredArticles.length - visibleCount} remaining)</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
              </button>
            </div>
          )}
        </section>

      </div>

      {/* Article Reader Modal */}
      <ArticleModal
        article={activeArticle}
        onClose={() => setActiveArticle(null)}
        onContactClick={() => onNavigate('/contact')}
      />
    </>
  );
};
