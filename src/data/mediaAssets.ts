export interface MediaPhoto {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: 'Keynote & Speaking' | 'Corporate Convenings' | 'The Mixer & Networking' | 'Foundation & Impact' | 'Workshops & Mentorship';
  caption: string;
}

export const MEDIA_ASSETS = {
  founder: '/images/dr_naomi.jpg',
  founderPortrait: '/images/dr_naomi.jpg',
  culturalImpact: '/images/IMG_9807.jpg',
  founderKeynote: '/images/founder_keynote_naomi.jpg',
  naomiSpeakingStage: '/images/dr_naomi_speaking_stage.jpg',
  womenWithStories: '/images/women_with_stories_abuja.jpg',
  summitStage: '/images/summit_keynote_stage.jpg',
  executiveSpotlight: '/images/executive_spotlight_stage.jpg',
  corporateAnniversary: '/images/corporate_anniversary_summit.jpg',
  executivePanel: '/images/executive_panel_session.jpg',
  corporateGala: '/images/corporate_gala_celebration.jpg',
  thoughtLeadership: '/images/thought_leadership_address.jpg',
  masterclassAudience: '/images/masterclass_audience.jpg',
  dynamicKeynote: '/images/dynamic_keynote_session.jpg',
  strategyForum: '/images/strategy_forum_stage.jpg',
  executiveWorkshop: '/images/executive_workshop.jpg',
  interactiveWorkshop: '/images/interactive_workshop.jpg',
  roundtableAdvisory: '/images/roundtable_advisory.jpg',
  executiveDialogue: '/images/executive_dialogue.jpg',
  youthClubMentorship: '/images/youth_club_mentorship.jpg',
  mixerNetworking: '/images/mixer_evening_networking.jpg',
  mixerDinner: '/images/mixer_executive_dinner.jpg',
  mixerGathering: '/images/mixer_curated_gathering.jpg',
  mixerGalaNetworking: '/images/mixer_gala_networking.jpg',
  executiveAwardsCelebration: '/images/executive_awards_celebration.jpg',
  highTableConvening: '/images/high_table_convening.jpg',
  galaAddress: '/images/corporate_gala_address.jpg',
  summitSpotlight: '/images/executive_summit_spotlight.jpg',
};

export const GALLERY_PHOTOS: MediaPhoto[] = [
  {
    id: 'dr-naomi-founder-portrait',
    src: MEDIA_ASSETS.founder,
    alt: 'Dr. Naomi - Founder & Chief Strategist',
    title: 'Dr. Naomi — Founder & Chief Strategist',
    category: 'Keynote & Speaking',
    caption: 'Visionary strategist helping organizations turn hidden value into enduring market authority.'
  },
  {
    id: 'cultural-impact-convening',
    src: MEDIA_ASSETS.culturalImpact,
    alt: 'Cultural & Creative Storytelling Convening',
    title: 'Cultural Heritage & Storytelling',
    category: 'Foundation & Impact',
    caption: 'Celebrating authentic African cultural expression, heritage, and community storytelling.'
  },
  {
    id: 'dr-naomi-speaking-stage',
    src: MEDIA_ASSETS.naomiSpeakingStage,
    alt: 'Keynote Stage and Strategic Leadership Address',
    title: 'Executive Keynotes & Speaking',
    category: 'Keynote & Speaking',
    caption: 'Inspiring leaders with strategic narrative clarity, conviction, and authoritative delivery.'
  },
  {
    id: 'dr-naomi-keynote',
    src: MEDIA_ASSETS.founderKeynote,
    alt: 'Continental Keynote & Narrative Authority',
    title: 'Continental Keynotes & Storytelling',
    category: 'Keynote & Speaking',
    caption: 'Shaping continental conversations around reputation, positioning, and human potential.'
  },
  {
    id: 'mixer-gala-networking',
    src: MEDIA_ASSETS.mixerGalaNetworking,
    alt: 'The CentreStage Mixer Gala & Executive Reception',
    title: 'The CentreStage Mixer Gala',
    category: 'The Mixer & Networking',
    caption: 'Uniting high-level business executives, innovators, and creators in an intimate setting.'
  },
  {
    id: 'executive-awards-celebration',
    src: MEDIA_ASSETS.executiveAwardsCelebration,
    alt: 'Corporate Excellence Awards Presentation',
    title: 'Excellence & Recognition Ceremonies',
    category: 'Corporate Convenings',
    caption: 'Celebrating high-impact milestones and spotlighting institutional leadership.'
  },
  {
    id: 'high-table-convening',
    src: MEDIA_ASSETS.highTableConvening,
    alt: 'Executive High Table Leadership Dinner',
    title: 'High-Table Stakeholder Convenings',
    category: 'The Mixer & Networking',
    caption: 'Curating exclusive dinners where decision-makers forge lasting strategic alliances.'
  },
  {
    id: 'summit-keynote',
    src: MEDIA_ASSETS.summitStage,
    alt: 'The CENTRESTAGE Keynote & Continental Summit',
    title: 'Keynote & Executive Positioning',
    category: 'Keynote & Speaking',
    caption: 'Elevating leadership narratives on continental and global conference stages.'
  },
  {
    id: 'women-with-stories-abuja',
    src: MEDIA_ASSETS.womenWithStories,
    alt: 'The Women With Stories - Iconic Womanhood Abuja',
    title: 'The Women With Stories',
    category: 'Foundation & Impact',
    caption: 'Architecting high-impact storytelling formats and authentic documentation.'
  },
  {
    id: 'corporate-anniversary',
    src: MEDIA_ASSETS.corporateAnniversary,
    alt: 'Corporate Anniversary & Stakeholder Summit',
    title: 'Milestone & Reputation Convenings',
    category: 'Corporate Convenings',
    caption: 'Shaping institutional milestone moments that reinforce long-term market authority.'
  },
  {
    id: 'executive-panel',
    src: MEDIA_ASSETS.executivePanel,
    alt: 'Executive Panel Dialogue & Thought Leadership',
    title: 'Executive Panel Architecture',
    category: 'Corporate Convenings',
    caption: 'Moderating and curating high-stakes conversations with industry decision makers.'
  },
  {
    id: 'mixer-dinner',
    src: MEDIA_ASSETS.mixerDinner,
    alt: 'The CentreStage Mixer Curated Executive Gathering',
    title: 'The CentreStage Mixer Dinner',
    category: 'The Mixer & Networking',
    caption: 'Curating invite-only dinners and gatherings where ideas cross sectors.'
  },
  {
    id: 'dynamic-keynote',
    src: MEDIA_ASSETS.dynamicKeynote,
    alt: 'Dr. Naomi delivering a keynote address',
    title: 'Signature Keynotes & Masterclasses',
    category: 'Keynote & Speaking',
    caption: 'Translating complex strategy into memorable, actionable human narratives.'
  },
  {
    id: 'youth-mentorship',
    src: MEDIA_ASSETS.youthClubMentorship,
    alt: 'CentreStage Club Youth & Student Development',
    title: 'CentreStage Club Development',
    category: 'Workshops & Mentorship',
    caption: 'Building future-ready capabilities, critical thinking, and confidence in emerging leaders.'
  },
  {
    id: 'roundtable-advisory',
    src: MEDIA_ASSETS.roundtableAdvisory,
    alt: 'Executive Roundtable & Strategy Advisory',
    title: 'Strategy Advisory & Roundtables',
    category: 'Corporate Convenings',
    caption: 'Working closely with executive teams to uncover distinction and engineer visibility.'
  },
  {
    id: 'mixer-networking',
    src: MEDIA_ASSETS.mixerNetworking,
    alt: 'The CentreStage Mixer evening conversation',
    title: 'Cross-Industry Convenings',
    category: 'The Mixer & Networking',
    caption: 'Creating spaces for authentic connection between founders, creatives, and executives.'
  },
  {
    id: 'masterclass-audience',
    src: MEDIA_ASSETS.masterclassAudience,
    alt: 'Executive Masterclass Audience',
    title: 'Reputation & Story Masterclasses',
    category: 'Workshops & Mentorship',
    caption: 'Equipping leaders and organizations with frameworks that withstand market noise.'
  },
  {
    id: 'corporate-gala',
    src: MEDIA_ASSETS.corporateGala,
    alt: 'Corporate Gala & Recognition Evening',
    title: 'Celebrations & High-Profile Dinners',
    category: 'Corporate Convenings',
    caption: 'Creating celebratory environments that spotlight excellence and transformative work.'
  },
  {
    id: 'gala-address',
    src: MEDIA_ASSETS.galaAddress,
    alt: 'High-Level Leadership Address',
    title: 'Leadership Addresses',
    category: 'Keynote & Speaking',
    caption: 'Giving voice to ideas that change what is possible in business and society.'
  }
];
