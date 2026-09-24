import React, { useState } from 'react';
import { SEOHead } from '../components/SEOHead';
import type { NavigationPath } from '../types';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (path: NavigationPath) => void;
  defaultEnquiryType?: string;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, defaultEnquiryType = 'Work With Us' }) => {
  const [selectedTopic, setSelectedTopic] = useState<string>(defaultEnquiryType);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    organization: '',
    message: ''
  });

  const enquiryTopics = [
    {
      title: "Work With Us",
      description: "For organisations and leaders looking for support with reputation, positioning, storytelling, thought leadership, executive presence or experiences."
    },
    {
      title: "Partnerships",
      description: "For institutions, brands and organisations interested in collaborating across The CENTRESTAGE ecosystem."
    },
    {
      title: "CentreStage Club",
      description: "For schools interested in bringing the CentreStage Club experience to their students."
    },
    {
      title: "Foundation",
      description: "For partnerships across The Women With Stories, Africa Thru My Eyes and our Young Adult Mentorship Programme."
    },
    {
      title: "Media & Speaking",
      description: "For speaking, moderation, interviews and media enquiries."
    },
    {
      title: "General Enquiries",
      description: "For everything else."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <SEOHead
        title="Contact The CENTRESTAGE Company | Start a Conversation"
        description="Talk to The CENTRESTAGE about reputation, positioning, storytelling, thought leadership, executive presence, partnerships and programmes."
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12 pt-32 pb-24 space-y-20">
        
        {/* H1 & Lead */}
        <section className="space-y-8 text-center max-w-4xl mx-auto">
          <span className="text-xs font-mono tracking-[0.3em] text-[#d4af37] uppercase block">
            06 — CONTACT
          </span>
          <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl text-white font-light leading-tight">
            Bring it to <br />
            <span className="text-gold-gradient italic">The CentreStage.</span>
          </h1>

          <div className="space-y-4 text-base sm:text-lg text-neutral-300 font-light max-w-2xl mx-auto leading-relaxed">
            <p>
              Have something worth building, repositioning, communicating or making more visible? We'd like to hear about it.
            </p>
          </div>
        </section>

        {/* Category Selection Grid */}
        <section className="space-y-8">
          <div className="text-center space-y-2">
            <h2 className="font-serif text-2xl sm:text-3xl text-white font-medium uppercase tracking-wide">
              WHAT WOULD YOU LIKE TO TALK ABOUT?
            </h2>
            <p className="text-xs text-neutral-400 font-mono">
              Select an inquiry area below to route your message directly:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enquiryTopics.map((topic) => {
              const isSelected = selectedTopic === topic.title;
              return (
                <div
                  key={topic.title}
                  onClick={() => setSelectedTopic(topic.title)}
                  className={`p-6 rounded-sm border cursor-pointer transition-all flex flex-col justify-between space-y-4 ${
                    isSelected
                      ? 'bg-[#12121c] border-[#d4af37] shadow-xl shadow-[#d4af37]/10'
                      : 'bg-[#0b0b0e] border-neutral-800 hover:border-[#d4af37]/40'
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <h3 className={`font-serif text-xl ${isSelected ? 'text-[#d4af37]' : 'text-white'}`}>
                        {topic.title}
                      </h3>
                      {isSelected && <span className="w-2 h-2 rounded-full bg-[#d4af37]" />}
                    </div>
                    <p className="text-xs text-neutral-400 font-light leading-relaxed">
                      {topic.description}
                    </p>
                  </div>

                  <span className={`text-[10px] font-mono tracking-widest uppercase ${isSelected ? 'text-[#d4af37]' : 'text-neutral-600'}`}>
                    {isSelected ? 'Selected Category' : 'Click to Select'}
                  </span>
                </div>
              );
            })}
          </div>
        </section>

        {/* Intelligent Form Section */}
        <section className="max-w-3xl mx-auto bg-[#0b0b0e] border border-[#d4af37]/30 rounded-sm p-8 md:p-14 shadow-2xl relative">
          
          {submitted ? (
            <div className="py-16 text-center space-y-6 animate-fadeIn">
              <div className="w-16 h-16 rounded-full bg-[#d4af37]/10 border border-[#d4af37] flex items-center justify-center mx-auto text-[#d4af37]">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-3xl text-white">Conversation Initiated.</h3>
              <p className="text-sm text-neutral-300 font-light max-w-md mx-auto leading-relaxed">
                Thank you for bringing your work to The CENTRESTAGE. Our team has received your enquiry regarding <strong className="text-[#d4af37]">{selectedTopic}</strong> and will respond directly.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-neutral-900 border border-neutral-700 text-xs text-neutral-300 hover:text-white uppercase tracking-wider rounded-sm"
                >
                  Send Another Message
                </button>
                <button
                  onClick={() => onNavigate('/')}
                  className="px-6 py-2.5 bg-[#d4af37] text-black font-semibold text-xs uppercase tracking-wider rounded-sm"
                >
                  Return to Home
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              <div className="pb-4 border-b border-neutral-800">
                <span className="text-xs font-mono text-[#d4af37] uppercase tracking-widest block mb-1">
                  ENQUIRY AREA: {selectedTopic.toUpperCase()}
                </span>
                <p className="text-xs text-neutral-400 font-light">
                  Please fill out the form below to begin our conversation.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-neutral-300 uppercase tracking-wider block">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Dr. Eleanor Vance"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-4 py-3 bg-[#101016] border border-neutral-800 text-sm text-white placeholder-neutral-600 rounded-sm focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="text-xs font-mono text-neutral-300 uppercase tracking-wider block">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@organisation.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[#101016] border border-neutral-800 text-sm text-white placeholder-neutral-600 rounded-sm focus:outline-none focus:border-[#d4af37]"
                  />
                </div>

              </div>

              {/* Organization */}
              <div className="space-y-2">
                <label className="text-xs font-mono text-neutral-300 uppercase tracking-wider block">
                  Organisation / Title
                </label>
                <input
                  type="text"
                  placeholder="Company, institution, or executive role"
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                  className="w-full px-4 py-3 bg-[#101016] border border-neutral-800 text-sm text-white placeholder-neutral-600 rounded-sm focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="text-xs font-mono text-neutral-300 uppercase tracking-wider block">
                  What are you looking to build, reposition, or make visible? *
                </label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tell us about your organization, project, or executive goal..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-[#101016] border border-neutral-800 text-sm text-white placeholder-neutral-600 rounded-sm focus:outline-none focus:border-[#d4af37]"
                />
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  className="w-full py-4 bg-[#d4af37] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#e2bd44] transition-all rounded-sm shadow-xl flex items-center justify-center gap-2"
                >
                  <span>Start a Conversation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </form>
          )}

          {/* Discreet Location Statement as requested in Build Notes */}
          <div className="mt-12 pt-8 border-t border-neutral-900 text-center space-y-2">
            <p className="text-xs text-neutral-400 font-light">
              <strong className="text-neutral-200">Headquartered in Abuja, Nigeria. Working across borders.</strong>
            </p>
            <p className="text-[11px] text-neutral-500 font-serif italic">
              Strategy. Story. Visibility.
            </p>
          </div>

        </section>

      </div>
    </>
  );
};
