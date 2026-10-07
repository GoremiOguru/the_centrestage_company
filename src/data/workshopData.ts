export interface WorkshopClass {
  id: string;
  number: string;
  title: string;
  date: string;
  coreQuestion: string;
  description: string;
  outcomes: string[];
  image: string;
  badge: string;
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  rawPrice: number;
  savings?: string;
  description: string;
  features: string[];
  isPopular?: boolean;
  ctaText: string;
}

export const WORKSHOP_META = {
  title: "The Business Advantage Workshop (BAW)",
  subtitle: "Human value. Business advantage.",
  tagline: "The advantage your organisation needs may already be inside it.",
  framework: "The Irreplaceable Advantage™",
  founder: "Dr. Naomi Osemedua",
  founderTitle: "Chief Strategist at The CENTRESTAGE Company",
  location: "Abuja, Nigeria",
  schedule: "Thursdays, 11:00 AM – 4:00 PM",
  contactPerson: "Cora",
  contactPhone: "0704 974 8121",
  contactPhoneFormatted: "+234 704 974 8121",
  contactWhatsApp: "https://wa.me/2347049748121?text=Hello%20Cora,%20I%20would%20like%20to%20inquire%20about%20booking%20seats%20for%20The%20Business%20Advantage%20Workshop%20(BAW).",
};

export const WORKSHOP_CLASSES: WorkshopClass[] = [
  {
    id: "irreplaceable-business",
    number: "01",
    title: "The Irreplaceable Business",
    date: "Thursday, 15 October 2026",
    coreQuestion: "When customers have options, why should they choose your organisation?",
    description: "If the answer is unclear, people may compare you on price alone. This class helps participants identify the experience, perspective, capabilities and proof that make the organisation's value distinctive.",
    image: "/images/dynamic_keynote_session.jpg",
    badge: "Strategy & Distinction",
    outcomes: [
      "Recognise where the organisation sounds too similar to others in its market.",
      "Identify the strengths customers value most, including those the organisation has overlooked.",
      "Explain what makes the organisation worth choosing in clear, compelling language.",
      "Use specific examples and results to support that message in proposals and customer conversations.",
      "Prepare stronger answers to the questions and hesitations that commonly delay a buying decision."
    ]
  },
  {
    id: "mindset-advantage",
    number: "02",
    title: "The Mindset Advantage",
    date: "Thursday, 22 October 2026",
    coreQuestion: "What do people bring into work before they do any work at all?",
    description: "The way people think affects how they respond to pressure, approach customers, solve problems and work with one another. A discouraged or reactive team can miss possibilities that a more intentional team would see. This class helps participants examine the attitudes and assumptions shaping everyday performance.",
    image: "/images/interactive_workshop.jpg",
    badge: "Culture & Performance",
    outcomes: [
      "Recognise thought patterns that limit initiative, collaboration or performance.",
      "Respond to setbacks with greater ownership and a focus on solutions.",
      "Bring more constructive energy into meetings, customer interactions and daily work.",
      "Question familiar assumptions and consider new ways to address recurring problems.",
      "Introduce a practical team habit that encourages initiative and shared problem solving."
    ]
  },
  {
    id: "communication-advantage",
    number: "03",
    title: "The Communication Advantage",
    date: "Thursday, 29 October 2026",
    coreQuestion: "How many opportunities are lost between what was said and what was understood?",
    description: "A missed detail can delay delivery. A vague reply can lose an inquiry. A difficult conversation left unresolved can damage a valuable relationship. Communication affects both customer confidence and the cost of getting work done.",
    image: "/images/roundtable_advisory.jpg",
    badge: "Clarity & Negotiation",
    outcomes: [
      "Identify where communication gaps are costing time, opportunities or customer confidence.",
      "Respond to enquiries with greater clarity and a useful next step.",
      "Explain value and address price concerns without reaching immediately for a discount.",
      "Give clearer briefs and handovers that reduce repeated questions and avoidable work.",
      "Handle difficult customer and internal conversations in ways that protect relationships and move issues towards resolution."
    ]
  },
  {
    id: "story-advantage",
    number: "04",
    title: "The Story Advantage",
    date: "Thursday, 5 November 2026",
    coreQuestion: "Is your organisation's best work being overlooked because people cannot tell its story?",
    description: "A strong story helps customers understand your value before they meet you. It gives your team language they can use, your social media more substance and potential partners a reason to remember you.",
    image: "/images/thought_leadership_address.jpg",
    badge: "Narrative & Authority",
    outcomes: [
      "Articulate a clear organisational story grounded in what the organisation does and the difference it makes.",
      "Deliver a concise introduction or pitch that opens a stronger conversation.",
      "Develop story angles for LinkedIn and other social channels that can attract relevant enquiries.",
      "Identify where website, proposal and presentation copy needs a clearer, more compelling message.",
      "Turn real work and customer results into credible stories colleagues can use in posts, proposals and presentations."
    ]
  },
  {
    id: "people-advantage",
    number: "05",
    title: "The People Advantage",
    date: "Thursday, 12 November 2026",
    coreQuestion: "Are you paying for capability your organisation is barely using?",
    description: "People bring more than their job titles. They notice patterns, build relationships, solve problems and carry knowledge that may never appear in a report. When those strengths go unused, work can slow down while too much responsibility sits with a few people.",
    image: "/images/executive_workshop.jpg",
    badge: "Talent & Flow",
    outcomes: [
      "Identify valuable strengths and knowledge that are currently underused.",
      "Spot work that is delayed because ownership is unclear or too much depends on one person.",
      "Match a current organisational challenge with capabilities already available.",
      "Improve one responsibility or handover to reduce duplication and release capacity.",
      "Have more useful conversations about contribution, development and the work that keeps good people engaged."
    ]
  },
  {
    id: "trust-advantage",
    number: "06",
    title: "The Trust Advantage",
    date: "Thursday, 19 November 2026",
    coreQuestion: "People may know your name. What makes them confident enough to return?",
    description: "Trust is built through what customers experience after the promise is made. A slow response, an unresolved problem or poor follow up can quietly end a relationship that took time and money to begin.",
    image: "/images/mixer_executive_dinner.jpg",
    badge: "Retention & Loyalty",
    outcomes: [
      "Map the customer journey and identify where confidence grows or falls.",
      "Find gaps between what the organisation promises and what customers experience.",
      "Improve follow up and the way problems are owned and resolved.",
      "Create more natural opportunities for repeat business, recommendations and referrals.",
      "Identify the customer experiences that deserve immediate attention to protect important relationships."
    ]
  }
];

export const WORKSHOP_PRICING_TIERS: PricingTier[] = [
  {
    id: "single-class",
    name: "One Class Pass",
    price: "₦70,000",
    rawPrice: 70000,
    description: "Choose the exact issue that needs urgent attention in your business today.",
    ctaText: "Select Single Class",
    features: [
      "Full access to 1 chosen intensive masterclass (5 hours)",
      "Interactive workbook & frameworks for chosen class",
      "Executive networking lunch & refreshments in Abuja",
      "Practical implementation templates",
      "Direct Q&A with Dr. Naomi"
    ]
  },
  {
    id: "three-class",
    name: "Any Three Classes",
    price: "₦180,000",
    rawPrice: 180000,
    savings: "Save ₦30,000",
    isPopular: true,
    description: "Target your top 3 growth bottlenecks with deeper organizational impact.",
    ctaText: "Choose 3 Classes Pass",
    features: [
      "Access to any 3 intensive masterclasses of your choice",
      "Complimentary Business Advantage Audit on 1 priority area",
      "Small Group Advisory Session with Dr. Naomi",
      "Business Application Kit (Standard Edition)",
      "1-Month Post-Workshop Implementation Check-in",
      "Executive networking lunches & materials included"
    ]
  },
  {
    id: "full-series",
    name: "All Six Classes (Full Series)",
    price: "₦300,000",
    rawPrice: 300000,
    savings: "Save ₦120,000",
    description: "Complete organizational transformation across strategy, people, story, and trust.",
    ctaText: "Book Full 6-Class Pass",
    features: [
      "Complete access to all 6 masterclasses in the series",
      "Comprehensive Business Advantage Executive Audit",
      "Priority Small Group Advisory & Strategy Review",
      "Full Business Application Kit & Organizational Playbook",
      "Dedicated Implementation Check-in & Follow-up",
      "Executive certificate of completion & networking lunches",
      "Eligibility for corporate team rate extensions"
    ]
  }
];

export const WORKSHOP_TARGET_AUDIENCE = [
  {
    role: "Founders & Business Owners",
    benefit: "Ready to protect pricing, strengthen market positioning, and build an irreplaceable competitive moat."
  },
  {
    role: "Executives & Managers",
    benefit: "Responsible for revenue results, team performance, customer retention, and strategic delivery."
  },
  {
    role: "HR Leaders & People Partners",
    benefit: "Investing in practical human capabilities that employees can immediately apply to eliminate rework."
  },
  {
    role: "Growth & Client-Facing Teams",
    benefit: "Whose daily communication, pitches, and relationship management directly impact company turnover."
  }
];
