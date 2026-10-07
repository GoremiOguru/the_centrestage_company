import React, { useState, useRef } from 'react';
import { SEOHead } from '../components/SEOHead';
import { 
  WORKSHOP_META, 
  WORKSHOP_CLASSES, 
  WORKSHOP_PRICING_TIERS, 
  WORKSHOP_TARGET_AUDIENCE 
} from '../data/workshopData';
import type { NavigationPath } from '../types';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  MessageSquare, 
  Sparkles, 
  Users, 
  Loader2, 
  Send 
} from 'lucide-react';

interface WorkshopPageProps {
  onNavigate: (path: NavigationPath) => void;
}

export const WorkshopPage: React.FC<WorkshopPageProps> = ({ onNavigate }) => {
  const [selectedTier, setSelectedTier] = useState<string>('three-class');
  const [selectedClasses, setSelectedClasses] = useState<string[]>([
    'irreplaceable-business',
    'mindset-advantage',
    'communication-advantage'
  ]);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    numberOfSeats: '1',
    participantType: 'Individual Attendee',
    notes: ''
  });

  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const bookingFormRef = useRef<HTMLDivElement>(null);

  const scrollToBooking = (tierId?: string, classId?: string) => {
    if (tierId) setSelectedTier(tierId);
    if (classId && !selectedClasses.includes(classId)) {
      setSelectedClasses((prev) => [...prev, classId]);
    }
    if (bookingFormRef.current) {
      bookingFormRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const toggleClassSelection = (id: string) => {
    if (selectedClasses.includes(id)) {
      if (selectedClasses.length > 1) {
        setSelectedClasses(selectedClasses.filter((c) => c !== id));
      }
    } else {
      setSelectedClasses([...selectedClasses, id]);
    }
  };

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    const chosenTierObj = WORKSHOP_PRICING_TIERS.find((t) => t.id === selectedTier);
    const chosenClassNames = WORKSHOP_CLASSES.filter((c) => selectedClasses.includes(c.id)).map((c) => c.title).join(', ');

    try {
      await fetch('https://formsubmit.co/ajax/thecentrestageevents@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          _subject: `BAW Workshop Seat Reservation: ${formData.fullName} - ${chosenTierObj?.name || selectedTier}`,
          workshop: "The Business Advantage Workshop (BAW)",
          pricing_tier: chosenTierObj?.name || selectedTier,
          price_estimate: chosenTierObj?.price || 'Custom',
          selected_classes: chosenClassNames,
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          organization: formData.organization || 'Individual',
          number_of_seats: formData.numberOfSeats,
          participant_type: formData.participantType,
          notes: formData.notes
        })
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead
        title="The Business Advantage Workshop (BAW) | Dr. Naomi | The CENTRESTAGE"
        description="Six practical masterclasses in Abuja to help business owners, leaders and teams turn internal value into turnover, pricing power and market influence."
      />

      <div className="space-y-28 pb-24 pt-28 sm:pt-32">
        
        {/* HERO SECTION */}
        <section className="relative max-w-6xl mx-auto px-6 md:px-12 text-center space-y-8 overflow-hidden">
          
          {/* Subtle Ambient Radial Backlight */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[500px] bg-[#d4af37]/8 rounded-full blur-[140px] pointer-events-none" />

          {/* Top Pill Tag */}
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#d4af37]/40 bg-[#d4af37]/10 backdrop-blur-md shadow-lg shadow-[#d4af37]/5">
            <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
            <span className="text-xs font-mono tracking-[0.25em] text-[#d4af37] uppercase font-semibold">
              EXECUTIVE MASTERCLASS SERIES • ABUJA
            </span>
          </div>

          {/* Main Title */}
          <div className="space-y-4 max-w-4xl mx-auto">
            <h1 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white font-light leading-tight">
              The Business Advantage <br />
              <span className="italic text-gold-gradient font-normal">Workshop (BAW)</span>
            </h1>
            <p className="font-serif text-xl sm:text-2xl md:text-3xl text-[#d4af37] font-light italic">
              "The advantage your organisation needs may already be inside it."
            </p>
          </div>

          {/* Lead Intro */}
          <p className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-neutral-300 font-light leading-relaxed">
            Helping business owners, leaders, and teams strengthen the way their organisations think, communicate, use their people, and earn enduring trust in an AI-driven world.
          </p>

          {/* Logistics Quick Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto pt-2">
            <div className="p-3.5 bg-[#0e0e14] border border-[#d4af37]/20 rounded-sm flex items-center justify-center gap-2.5 text-xs text-neutral-300 font-mono">
              <Calendar className="w-4 h-4 text-[#d4af37]" />
              <span>Oct 15 – Nov 19, 2026</span>
            </div>
            <div className="p-3.5 bg-[#0e0e14] border border-[#d4af37]/20 rounded-sm flex items-center justify-center gap-2.5 text-xs text-neutral-300 font-mono">
              <Clock className="w-4 h-4 text-[#d4af37]" />
              <span>Thursdays • 11 AM – 4 PM</span>
            </div>
            <div className="p-3.5 bg-[#0e0e14] border border-[#d4af37]/20 rounded-sm flex items-center justify-center gap-2.5 text-xs text-neutral-300 font-mono">
              <MapPin className="w-4 h-4 text-[#d4af37]" />
              <span>Abuja, Nigeria</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => scrollToBooking()}
              className="w-full sm:w-auto px-8 py-4 bg-[#d4af37] text-black font-semibold text-xs tracking-widest uppercase hover:bg-[#e2bd44] transition-all rounded-sm shadow-xl shadow-[#d4af37]/15 flex items-center justify-center gap-2"
            >
              <span>Book Your Seat Now</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={WORKSHOP_META.contactWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-[#12121c] border border-neutral-700 hover:border-[#d4af37] text-white font-medium text-xs tracking-widest uppercase transition-all rounded-sm flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 text-[#d4af37]" />
              <span>Chat With Cora ({WORKSHOP_META.contactPhone})</span>
            </a>
          </div>

        </section>

        {/* SECTION: THE COST OF UNSEEN FRICTION */}
        <section className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="bg-[#0b0b0f] border border-[#d4af37]/30 rounded-sm p-8 md:p-14 space-y-8 shadow-2xl relative overflow-hidden">
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-mono tracking-[0.3em] text-[#d4af37] uppercase block">
                THE REVENUE REALITY
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium">
                Where Is Value Silently Leaking in Your Business?
              </h2>
              <p className="text-sm text-neutral-400 font-light leading-relaxed">
                Small operational and communication fractures produce compound revenue damage:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              {[
                { title: "Inquiries that go nowhere", desc: "Leads inquire with interest but ghost when value isn't framed with clarity." },
                { title: "Proposals that sound generic", desc: "Submitting bids that sound identical to competitors, forcing price discounting." },
                { title: "Work that has to be done twice", desc: "Vague briefs and poor handovers creating expensive internal rework and delays." },
                { title: "Capable people waiting for decisions", desc: "Underused employee strengths causing executive bottlenecks and lost momentum." },
                { title: "Customers who buy once & vanish", desc: "Post-purchase gaps that quietly kill repeat business and natural referrals." },
                { title: "Competing on price instead of distinction", desc: "Lacking the language to justify premium pricing in an AI-disrupted market." }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-5 bg-[#101017] border border-neutral-800 rounded-sm space-y-2 hover:border-[#d4af37]/40 transition-colors"
                >
                  <div className="w-2 h-2 rounded-full bg-[#d4af37]" />
                  <h3 className="font-serif text-lg text-white font-medium">{item.title}</h3>
                  <p className="text-xs text-neutral-400 font-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="p-6 bg-[#12121c] border-l-2 border-[#d4af37] rounded-r-sm space-y-2">
              <p className="font-serif italic text-white text-base sm:text-lg">
                "Each of these directly affects revenue, costs and sustainable growth. BAW is engineered to fix them at the root."
              </p>
              <span className="text-xs font-mono text-[#d4af37] uppercase tracking-wider block">
                — Six practical classes. Attend one, choose any three, or take the full series.
              </span>
            </div>
          </div>
        </section>

        {/* SECTION: 6 PRACTICAL MASTERCLASSES CURRICULUM */}
        <section className="max-w-7xl mx-auto px-6 md:px-12 space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-mono tracking-[0.3em] text-[#d4af37] uppercase block">
              THE 6 MASTERCLASSES
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-medium">
              Practical, Outcome-Driven Modules
            </h2>
            <p className="text-sm text-neutral-400 font-light">
              Each class stands entirely on its own and gives participants actionable tools they can apply the very next morning.
            </p>
          </div>

          {/* Interactive Class Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {WORKSHOP_CLASSES.map((cls) => (
              <div
                key={cls.id}
                className="interactive-card p-6 sm:p-8 bg-[#0c0c10] border border-neutral-800 hover:border-[#d4af37]/50 rounded-sm space-y-6 flex flex-col justify-between group transition-all shadow-xl"
              >
                <div className="space-y-4">
                  {/* Photo Thumbnail Header */}
                  <div className="relative aspect-[16/10] w-full rounded-sm overflow-hidden border border-neutral-800 group-hover:border-[#d4af37]/40 transition-colors">
                    <img
                      src={cls.image}
                      alt={cls.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    <span className="absolute top-3 left-3 text-[9px] font-mono uppercase tracking-widest text-[#d4af37] bg-black/80 px-2 py-0.5 rounded-sm border border-[#d4af37]/30">
                      Class {cls.number}
                    </span>
                    <span className="absolute bottom-3 left-3 text-[10px] font-mono text-neutral-300 bg-black/80 px-2 py-0.5 rounded-sm">
                      {cls.date}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#d4af37] block">
                      {cls.badge}
                    </span>
                    <h3 className="font-serif text-2xl text-white group-hover:text-[#d4af37] transition-colors">
                      {cls.title}
                    </h3>
                    <p className="font-serif italic text-xs text-neutral-300">
                      "{cls.coreQuestion}"
                    </p>
                    <p className="text-xs text-neutral-400 font-light leading-relaxed">
                      {cls.description}
                    </p>
                  </div>

                  {/* Learning Outcomes */}
                  <div className="pt-2 space-y-2 border-t border-neutral-900">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400 block">
                      Key Capabilities Acquired:
                    </span>
                    <ul className="space-y-1.5">
                      {cls.outcomes.slice(0, 3).map((out, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-neutral-300 font-light">
                          <CheckCircle className="w-3.5 h-3.5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                          <span>{out}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-neutral-900 flex items-center justify-between">
                  <button
                    onClick={() => {
                      scrollToBooking(undefined, cls.id);
                    }}
                    className="w-full py-2.5 bg-[#12121a] hover:bg-[#d4af37] hover:text-black text-xs font-semibold uppercase tracking-wider text-[#d4af37] rounded-sm transition-colors text-center"
                  >
                    Select This Class
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION: PRICING & ENROLLMENT PASSES */}
        <section className="max-w-6xl mx-auto px-6 md:px-12 space-y-12">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-mono tracking-[0.3em] text-[#d4af37] uppercase block">
              FLEXIBLE REGISTRATION
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl text-white font-medium">
              Choose How You Want to Attend
            </h2>
            <p className="text-sm text-neutral-400 font-light">
              Attend individually or enroll your core team. Special team discounts apply for 3+ delegates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            {WORKSHOP_PRICING_TIERS.map((tier) => {
              const isSelected = selectedTier === tier.id;
              return (
                <div
                  key={tier.id}
                  className={`p-8 rounded-sm border flex flex-col justify-between space-y-6 transition-all relative ${
                    tier.isPopular
                      ? 'bg-[#101018] border-[#d4af37] shadow-2xl shadow-[#d4af37]/15 ring-1 ring-[#d4af37]'
                      : 'bg-[#0b0b0e] border-neutral-800 hover:border-neutral-700'
                  }`}
                >
                  {tier.isPopular && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-[#d4af37] text-black text-[10px] font-mono uppercase tracking-widest font-bold rounded-sm shadow-md">
                      MOST POPULAR CHOICE
                    </span>
                  )}

                  <div className="space-y-4">
                    <div className="space-y-1">
                      <h3 className="font-serif text-2xl text-white">{tier.name}</h3>
                      <p className="text-xs text-neutral-400 font-light">{tier.description}</p>
                    </div>

                    <div className="py-2 border-y border-neutral-800">
                      <div className="flex items-baseline gap-2">
                        <span className="font-serif text-3xl sm:text-4xl font-bold text-white">
                          {tier.price}
                        </span>
                        <span className="text-xs text-neutral-500 font-mono">/ person</span>
                      </div>
                      {tier.savings && (
                        <span className="inline-block mt-1 text-[11px] font-mono text-emerald-400 font-semibold bg-emerald-950/40 border border-emerald-800 px-2 py-0.5 rounded-sm">
                          {tier.savings}
                        </span>
                      )}
                    </div>

                    {/* Features List */}
                    <ul className="space-y-2.5 text-xs text-neutral-300 font-light">
                      {tier.features.map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-[#d4af37] flex-shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="pt-4 border-t border-neutral-900">
                    <button
                      onClick={() => {
                        setSelectedTier(tier.id);
                        scrollToBooking(tier.id);
                      }}
                      className={`w-full py-3.5 text-xs uppercase tracking-widest font-bold rounded-sm transition-all ${
                        tier.isPopular || isSelected
                          ? 'bg-[#d4af37] text-black hover:bg-[#e2bd44] shadow-lg'
                          : 'bg-[#161622] text-white hover:bg-neutral-800 border border-neutral-700'
                      }`}
                    >
                      {tier.ctaText}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Corporate Team Callout */}
          <div className="p-6 bg-[#0f0f15] border border-[#d4af37]/30 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <span className="text-xs font-mono uppercase tracking-widest text-[#d4af37] block">
                ORGANISATIONAL TEAM RATES
              </span>
              <h4 className="font-serif text-xl text-white">Enrolling a Corporate Team of 3 or More?</h4>
              <p className="text-xs text-neutral-400">
                Special group rates, customized in-house delivery, and dedicated post-workshop advisory available.
              </p>
            </div>
            <a
              href={`tel:07049748121`}
              className="px-6 py-3 bg-[#d4af37] text-black font-semibold text-xs uppercase tracking-widest hover:bg-[#e2bd44] transition-all rounded-sm whitespace-nowrap flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call Cora: 0704 974 8121</span>
            </a>
          </div>
        </section>

        {/* SECTION: WHO SHOULD ATTEND */}
        <section className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="bg-[#0b0b0f] border border-[#d4af37]/20 rounded-sm p-8 md:p-14 space-y-8">
            <div className="max-w-2xl space-y-2">
              <span className="text-xs font-mono tracking-[0.3em] text-[#d4af37] uppercase block">
                AUDIENCE PROFILE
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium">
                Who Should Attend?
              </h2>
              <p className="text-sm text-neutral-400 font-light">
                Attend yourself, send your key people, or come together as an executive cohort.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {WORKSHOP_TARGET_AUDIENCE.map((item, idx) => (
                <div key={idx} className="p-6 bg-[#101017] border border-neutral-800 rounded-sm space-y-2">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#d4af37]" />
                    <h3 className="font-serif text-xl text-white">{item.role}</h3>
                  </div>
                  <p className="text-xs text-neutral-300 font-light leading-relaxed">
                    {item.benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION: FOUNDER & FRAMEWORK CREDENTIALS */}
        <section className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="bg-[#0e0e14] border border-[#d4af37]/40 rounded-sm p-8 md:p-14 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5">
                <div className="relative aspect-[3/4] max-h-[440px] w-full rounded-sm overflow-hidden border border-[#d4af37]/50 shadow-2xl group">
                  <img
                    src="/images/dr_naomi.jpg"
                    alt="Dr. Naomi Osemedua - Lead Strategist & Author"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#d4af37] bg-black/80 px-2 py-0.5 rounded-sm border border-[#d4af37]/30 block w-max mb-1">
                      Lead Strategist &amp; Author
                    </span>
                    <h3 className="font-serif text-2xl text-white">Dr. Naomi Osemedua</h3>
                    <p className="text-xs text-[#d4af37] font-mono">Chief Strategist • The CENTRESTAGE Company</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7 space-y-6 text-neutral-300 text-sm md:text-base font-light leading-relaxed">
                <span className="text-xs font-mono tracking-[0.3em] text-[#d4af37] uppercase block">
                  THE PROPRIETARY FRAMEWORK
                </span>
                <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium leading-tight">
                  Powered by <span className="text-gold-gradient italic">The Irreplaceable Advantage™</span>
                </h2>
                <p>
                  BAW draws on <strong>The Irreplaceable Advantage™</strong>, the proprietary framework developed by <strong>Dr. Naomi Osemedua</strong> around the distinctive ways people see, think, communicate and create value.
                </p>
                <p>
                  In a market where algorithms commoditize average work, human distinction and narrative authority become your only defensible business advantage.
                </p>

                <div className="p-4 bg-[#12121c] border-l-2 border-[#d4af37] rounded-r-sm font-serif italic text-white text-base">
                  "Great work should not go unseen. But making it visible and profitable requires strategy, story, and intentional positioning."
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION: SEAT RESERVATION & REGISTRATION FORM */}
        <section ref={bookingFormRef} className="max-w-4xl mx-auto px-6 md:px-12 scroll-mt-32">
          <div className="bg-[#0b0b0e] border border-[#d4af37]/40 rounded-sm p-8 sm:p-12 md:p-14 shadow-2xl space-y-8">
            
            <div className="text-center space-y-3 pb-6 border-b border-neutral-800">
              <span className="text-xs font-mono tracking-[0.3em] text-[#d4af37] uppercase block">
                RESERVE YOUR SEAT
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium">
                Register for The Business Advantage Workshop
              </h2>
              <p className="text-xs sm:text-sm text-neutral-400 font-light max-w-xl mx-auto">
                Seats are strictly limited to maintain executive interactivity and direct strategic feedback.
              </p>
            </div>

            {submitted ? (
              <div className="py-12 text-center space-y-6 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-[#d4af37]/10 border-2 border-[#d4af37] flex items-center justify-center mx-auto text-[#d4af37]">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-3xl text-white">Reservation Transmitted.</h3>
                <p className="text-sm text-neutral-300 font-light max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{formData.fullName}</strong>. Your workshop booking request has been received. Our team coordinator, <strong className="text-[#d4af37]">Cora</strong>, will reach out to confirm seat availability and invoice instructions.
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href={WORKSHOP_META.contactWhatsApp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-[#d4af37] text-black font-semibold text-xs uppercase tracking-wider rounded-sm flex items-center gap-2"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Instant WhatsApp Confirmation</span>
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-3 bg-neutral-900 text-neutral-300 hover:text-white text-xs uppercase tracking-wider rounded-sm border border-neutral-800"
                  >
                    Register Another Participant
                  </button>
                  <button
                    onClick={() => onNavigate('/')}
                    className="px-6 py-3 bg-[#12121a] hover:bg-[#d4af37] text-neutral-300 hover:text-black text-xs uppercase tracking-wider rounded-sm border border-[#d4af37]/40 transition-colors"
                  >
                    Return to Home
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleBookingSubmit} className="space-y-8">
                
                {/* Step 1: Select Attendance Package */}
                <div className="space-y-3">
                  <label className="text-xs font-mono text-[#d4af37] uppercase tracking-wider block">
                    1. Select Attendance Pass *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {WORKSHOP_PRICING_TIERS.map((t) => (
                      <div
                        key={t.id}
                        onClick={() => setSelectedTier(t.id)}
                        className={`p-4 rounded-sm border cursor-pointer transition-all ${
                          selectedTier === t.id
                            ? 'bg-[#141420] border-[#d4af37] text-white shadow-md'
                            : 'bg-[#0e0e14] border-neutral-800 text-neutral-400 hover:border-neutral-700'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-serif font-medium text-sm text-white">{t.name}</span>
                          {selectedTier === t.id && <span className="w-2 h-2 rounded-full bg-[#d4af37]" />}
                        </div>
                        <div className="font-serif font-bold text-lg text-[#d4af37]">{t.price}</div>
                        {t.savings && <span className="text-[10px] text-emerald-400 font-mono">{t.savings}</span>}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Step 2: Select Preferred Classes (if Single or 3-Class pass) */}
                {selectedTier !== 'full-series' && (
                  <div className="space-y-3 pt-2">
                    <div className="flex items-center justify-between">
                      <label className="text-xs font-mono text-[#d4af37] uppercase tracking-wider block">
                        2. Select Class Modules ({selectedClasses.length} Selected)
                      </label>
                      <span className="text-[11px] text-neutral-400 font-mono">
                        {selectedTier === 'single-class' ? 'Select 1 Class' : 'Select any 3 Classes'}
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {WORKSHOP_CLASSES.map((cls) => {
                        const isChecked = selectedClasses.includes(cls.id);
                        return (
                          <div
                            key={cls.id}
                            onClick={() => toggleClassSelection(cls.id)}
                            className={`p-3 rounded-sm border cursor-pointer flex items-center justify-between transition-colors ${
                              isChecked
                                ? 'bg-[#12121c] border-[#d4af37]/60 text-white'
                                : 'bg-[#0f0f15] border-neutral-800 text-neutral-400 hover:border-neutral-700'
                            }`}
                          >
                            <div className="space-y-0.5">
                              <span className="text-[10px] font-mono text-[#d4af37] block">
                                {cls.date}
                              </span>
                              <span className="font-serif text-sm text-neutral-200">
                                {cls.title}
                              </span>
                            </div>
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={() => {}}
                              className="accent-[#d4af37] w-4 h-4 cursor-pointer"
                            />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Step 3: Participant Information */}
                <div className="space-y-4 pt-4 border-t border-neutral-800">
                  <label className="text-xs font-mono text-[#d4af37] uppercase tracking-wider block">
                    {selectedTier === 'full-series' ? '2. Participant Details' : '3. Participant Details'}
                  </label>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-neutral-300 uppercase block">Full Name *</label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Dr. Kemi Johnson"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 bg-[#101016] border border-neutral-800 text-sm text-white placeholder-neutral-600 rounded-sm focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-neutral-300 uppercase block">Email Address *</label>
                      <input
                        type="email"
                        required
                        placeholder="name@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 bg-[#101016] border border-neutral-800 text-sm text-white placeholder-neutral-600 rounded-sm focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-neutral-300 uppercase block">Phone / WhatsApp *</label>
                      <input
                        type="tel"
                        required
                        placeholder="0803 000 0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 bg-[#101016] border border-neutral-800 text-sm text-white placeholder-neutral-600 rounded-sm focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-neutral-300 uppercase block">Organisation</label>
                      <input
                        type="text"
                        placeholder="Company name"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full px-4 py-3 bg-[#101016] border border-neutral-800 text-sm text-white placeholder-neutral-600 rounded-sm focus:outline-none focus:border-[#d4af37]"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-neutral-300 uppercase block">Number of Seats</label>
                      <select
                        value={formData.numberOfSeats}
                        onChange={(e) => setFormData({ ...formData, numberOfSeats: e.target.value })}
                        className="w-full px-4 py-3 bg-[#101016] border border-neutral-800 text-sm text-white rounded-sm focus:outline-none focus:border-[#d4af37]"
                      >
                        <option value="1">1 Seat</option>
                        <option value="2">2 Seats</option>
                        <option value="3">3 Seats (Team Rate)</option>
                        <option value="5+">5+ Seats (Corporate Cohort)</option>
                      </select>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-neutral-300 uppercase block">
                      Any specific business challenges or questions for Dr. Naomi?
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Briefly describe what your organisation is looking to solve or strengthen..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 bg-[#101016] border border-neutral-800 text-sm text-white placeholder-neutral-600 rounded-sm focus:outline-none focus:border-[#d4af37]"
                    />
                  </div>
                </div>

                {/* Submit Action */}
                <div className="space-y-3 pt-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full py-4 bg-[#d4af37] text-black font-bold text-xs uppercase tracking-widest hover:bg-[#e2bd44] transition-all rounded-sm shadow-xl flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Transmitting Seat Reservation...</span>
                      </>
                    ) : (
                      <>
                        <span>Confirm &amp; Reserve Seat</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-neutral-400 text-center font-mono">
                    Direct Inquiry Coordinator: Cora (0704 974 8121) • Powered by The CENTRESTAGE Company
                  </p>
                </div>

              </form>
            )}

          </div>
        </section>

      </div>
    </>
  );
};
