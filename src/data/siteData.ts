import type { NavItem, Capability, CaseStudy, EcosystemPillar, InsightArticle, ImpactStat, BrandFramework } from '../types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'HOME', path: '/' },
  { label: 'ABOUT', path: '/about' },
  { label: 'OUR WORK', path: '/our-work' },
  { label: 'ECOSYSTEM', path: '/ecosystem' },
  { label: 'INSIGHTS', path: '/insights' },
  { label: 'CONTACT', path: '/contact' },
];

export const BRAND_SHORTHAND = "Strategy. Story. Visibility.";

export const BRAND_FRAMEWORK: BrandFramework = {
  belief: "Great work should not go unseen.",
  purpose: "To turn distinctive value into influence.",
  mission: "We uncover value, shape perception and build influence through strategy, story and visibility.",
  vision: "A future where great ideas have the influence to change what is possible.",
  coreIdea: "Make great work impossible to overlook.",
  promise: "We bring what sets you apart to The CentreStage.",
  values: ["Clarity", "Creativity", "Excellence", "Collaboration", "Significance"],
  spirit: ["Curious", "Bold", "Human", "Intelligent", "Unexpected"],
  brandShorthand: "STRATEGY. STORY. VISIBILITY."
};

export const IMPACT_STATS: ImpactStat[] = [
  { number: 10, suffix: "+", label: "Years building reputation and visibility" },
  { number: 35, suffix: "+", label: "Organisations served" },
  { number: 1000, suffix: "+", label: "Entrepreneurs supported" },
  { number: 500, suffix: "+", label: "People trained" },
  { number: 50, suffix: "+", label: "Speaking engagements" },
  { number: 30, suffix: "+", label: "Events & conversations" },
  { number: 10000, suffix: "+", label: "Women reached through The Women With Stories" },
  { number: 4, suffix: "", label: "Continents reached" },
];

export const CAPABILITIES: Capability[] = [
  {
    id: "positioning-reputation",
    title: "Positioning & Reputation",
    tagline: "Be known for the right things.",
    description: "Reputation is being formed whether you manage it or not. We help leaders and organisations clarify what they stand for, identify what they should be known for and close the distance between their actual value and how they are perceived.",
    includes: [
      "Positioning",
      "Reputation audits",
      "Messaging",
      "Stakeholder perception",
      "Communication direction",
      "Reputation advisory"
    ]
  },
  {
    id: "executive-leadership",
    title: "Executive & Leadership Presence",
    tagline: "How you lead should be reflected in how you show up.",
    description: "Expertise alone does not guarantee influence. We work with executives, founders and leaders to strengthen how they communicate, show up in important rooms and represent their expertise, organisations and ideas.",
    includes: [
      "Executive positioning",
      "Leadership communication",
      "Speaking positioning",
      "Profile development",
      "Media readiness",
      "Public presence"
    ]
  },
  {
    id: "storytelling-communication",
    title: "Storytelling & Communication",
    tagline: "Turn what you know into something people remember.",
    description: "Every organisation has information. Far fewer know how to turn that information into meaning. We uncover the human, organisational and cultural stories beneath the work and translate them into communication people can understand, remember and repeat.",
    includes: [
      "Narrative development",
      "Corporate storytelling",
      "Campaign messaging",
      "Content direction",
      "Presentations",
      "Communication assets"
    ]
  },
  {
    id: "thought-leadership",
    title: "Thought Leadership",
    tagline: "Don't just join the conversation. Bring a point of view.",
    description: "The most influential leaders and organisations are not simply visible. They contribute ideas that change how people think about an issue, industry or possibility. We help identify the ideas you can credibly own and develop them into intellectual property, content, conversations and platforms that build authority.",
    includes: [
      "Thought leadership positioning",
      "Signature ideas",
      "Editorial direction",
      "Reports and original research",
      "Content platforms",
      "Industry conversations"
    ]
  },
  {
    id: "experiences-convenings",
    title: "Experiences & Convenings",
    tagline: "The right room can change everything.",
    description: "Some opportunities only happen when the right people enter the same room. We shape conversations, events and experiences designed to create connection, exchange, visibility and possibility. From intimate executive conversations to conferences and signature gatherings, we think beyond logistics to the story, people and possibilities created in the room.",
    includes: [
      "Event concepts",
      "Conversation architecture",
      "Programme design",
      "Moderation",
      "Speaker curation",
      "Stakeholder engagement",
      "Signature experiences"
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "pan-african-banking",
    title: "Repositioning a Pan-African Financial Institution",
    clientCategory: "Financial Services & Economic Strategy",
    summary: "Reframing a decade of quiet regional innovation into a high-authority global market narrative.",
    context: "A prominent pan-African financial institution was undergoing significant operational modernization, yet market perception remained anchored to legacy retail banking models. Despite high-impact cross-border trade initiatives, their institutional voice was diluted by transactional public relations.",
    whatWeSaw: "An overlooked asset: unmatched proprietary intelligence on informal trade corridors and sovereign liquidity solutions across Sub-Saharan Africa that traditional quarterly reporting completely obscured.",
    whatWeDid: "We authored an overarching institutional narrative, 'The Corridor of Future Growth', repositioned the executive committee as sovereign trade authorities, and engineered exclusive invitation-only executive roundtables in London and Lagos.",
    whatChanged: "Shifted international investor perception, secured 40%+ increase in top-tier global financial media commentary, and earned direct advisory seats on continental trade policy committees.",
    quote: {
      text: "The CENTRESTAGE didn't just redesign our messaging—they forced us to recognize the profound authority we already possessed.",
      author: "Chief Strategy Officer",
      role: "Pan-African Financial Group"
    },
    metrics: [
      { label: "Media Authority Share", value: "+42%" },
      { label: "Policy Advisory Seats", value: "3 National Councils" },
      { label: "Institutional Trust Index", value: "+58%" }
    ]
  },
  {
    id: "tech-founder-authority",
    title: "Executive Visibility for Infrastructure Tech Founder",
    clientCategory: "Technology & Sovereign Infrastructure",
    summary: "Elevating a tech founder from product engineer to definitive global industry voice.",
    context: "A high-growth cloud infrastructure founder possessed exceptional technical IP and enterprise contracts, but struggled to articulate their broader systemic value to sovereign investors and policy makers.",
    whatWeSaw: "The founder was speaking in product features rather than economic sovereignty. The true story was about digital independence for emerging markets.",
    whatWeDid: "We defined 'The Sovereign Data Mandate' framework, curated high-stakes international keynote platforms, and trained the executive for global media broadcasts.",
    whatChanged: "Attracted $25M Series B lead institutional funding, established the founder as the leading voice on African data sovereignty, and opened doors to multilateral agency partnerships.",
    quote: {
      text: "They saw the strategic implication of our code before we even knew how to articulate it to sovereign governments.",
      author: "Founder & CEO",
      role: "Sovereign Cloud Networks"
    },
    metrics: [
      { label: "Series B Funding", value: "$25M" },
      { label: "Keynote Authority", value: "Global Stage" }
    ]
  },
  {
    id: "women-with-stories",
    title: "The Women With Stories Platform Expansion",
    clientCategory: "Social Impact & Narrative Movement",
    summary: "Architecting a global storytelling platform that rewrites how women's leadership is documented.",
    context: "Female leaders across Africa and the diaspora were driving structural change, yet their insights were relegated to generic panel sessions without lasting institutional documentation.",
    whatWeSaw: "A profound gap between statistical representation metrics and authentic, nuanced human storytelling. Statistics don't tell the story. Stories rewrite the stats.",
    whatWeDid: "Created 'The Women With Stories' convening and digital archive, designing intimate, high-impact storytelling formats and high-production editorial documentation.",
    whatChanged: "Expanded into a global movement reaching over 10,000 women across 4 continents with corporate foundation backing and an enduring archive of executive wisdom.",
    metrics: [
      { label: "Global Reach", value: "10,000+ Women" },
      { label: "Geographic Footprint", value: "4 Continents" }
    ]
  },
  {
    id: "energy-conglomerate-trust",
    title: "Energy Transition Reputation Transformation",
    clientCategory: "Energy & Infrastructure",
    summary: "Bridging the perception gap between legacy energy operations and sovereign green transition commitments.",
    context: "A leading energy conglomerate was making multi-million dollar investments in clean energy transitions, but public perception remained skeptical and critical.",
    whatWeSaw: "The company was publishing technical compliance documents instead of telling the story of energy access, local job creation, and industrial stability.",
    whatWeDid: "Conducted an intensive reputation audit, restructured corporate communications direction, and launched 'Energy for Human Progress' stakeholder forums.",
    whatChanged: "Rebuilt community trust metrics by 65%, aligned key government ministries around their long-term transition roadmap, and established clear regional leadership.",
    metrics: [
      { label: "Trust Score Increase", value: "+65%" },
      { label: "Stakeholder Alignment", value: "Unified Roadmap" }
    ]
  }
];

export const ECOSYSTEM_PILLARS: EcosystemPillar[] = [
  {
    id: "company",
    title: "The CENTRESTAGE Company",
    headline: "Where great work becomes difficult to overlook.",
    badge: "Commercial Heart",
    description: "The commercial heart of our ecosystem. We work with leaders and organisations across reputation, positioning, storytelling, executive presence, thought leadership and experiences.",
    ctaText: "Work With Us",
    enquiryType: "Work With Us"
  },
  {
    id: "foundation",
    title: "The CENTRESTAGE Foundation",
    headline: "Stories can change what statistics cannot.",
    badge: "Social Impact Platform",
    description: "The social impact expression of The CENTRESTAGE. The Foundation creates platforms that elevate stories, develop people and expand possibility.",
    nestedItems: [
      {
        title: "The Women With Stories",
        tagline: "Statistics don't tell the story. Stories rewrite the stats.",
        description: "A global storytelling movement changing the way women's experiences are seen, heard and remembered."
      },
      {
        title: "Africa Thru My Eyes",
        description: "A platform inviting Africans to tell richer, more human stories about the continent through their own eyes."
      },
      {
        title: "Young Adult Mentorship Programme",
        description: "Equipping emerging adults with the perspective, relationships and capabilities to navigate life, leadership and work."
      }
    ],
    ctaText: "Explore The Foundation",
    enquiryType: "Foundation"
  },
  {
    id: "club",
    title: "CentreStage Club",
    headline: "Future ready starts now.",
    badge: "Youth & School Development",
    description: "The world young people are entering is changing faster than the systems preparing them for it. CentreStage Club is a school based development experience helping young people discover who they are while building the capabilities the future will demand.\n\nStudents develop critical thinking, communication, public speaking, leadership, teamwork, adaptability and confidence while learning to recognise the value they bring in an AI disrupted world.",
    ctaText: "Bring CentreStage Club to Your School",
    enquiryType: "CentreStage Club"
  },
  {
    id: "irreplaceable",
    title: "The Irreplaceable Advantage™",
    headline: "What can only you bring?",
    badge: "Proprietary Framework",
    description: "In a world where technology can replicate more of what we do, the question of what makes us distinctive becomes increasingly important.\n\nThe Irreplaceable Advantage™ is our proprietary framework for identifying the distinctive combination of experience, perspective, knowledge, values, thinking and capability that makes an individual or organisation difficult to replicate.\n\nThe framework is being developed across assessments, leadership programmes, schools, organisations, speaking and original research.",
    ctaText: "Discover The Irreplaceable Advantage™",
    enquiryType: "Work With Us"
  },
  {
    id: "mixer",
    title: "The CentreStage Mixer",
    headline: "The right room changes everything.",
    badge: "Invite-Only Convening",
    description: "The CentreStage Mixer is an invite only gathering bringing leaders, thinkers, experts, creators and decision makers from different sectors into one carefully curated room.\n\nIt is not another networking event. It is a place for ideas to cross sectors, relationships to begin and unexpected possibilities to emerge.",
    ctaText: "Partner With The Mixer",
    enquiryType: "Partnerships"
  }
];

export const INSIGHTS_ARTICLES: InsightArticle[] = [
  {
    id: "great-work-isnt-enough",
    number: "01",
    title: "Great Work Isn't Enough: Why Excellent Organisations Still Get Overlooked",
    category: "Reputation",
    readTime: "6 min read",
    seoTerritory: "Brand positioning, organisational reputation, corporate visibility",
    excerpt: "You can be excellent at what you do and still remain completely invisible to the people who matter most. Excellence is table stakes; positioning is what creates authority.",
    publishedDate: "Launch Article",
    isPublished: true,
    fullContent: `
### The Illusion of Automatic Recognition

There is a comfortable lie that many leaders and organizations tell themselves: *If our work is good enough, the world will eventually find us.*

We see this assumption play out across corporations, social enterprises, tech founders, and executive suites. Teams pour millions into R&D, product refinement, and operational precision, believing that quality produces its own echo.

It does not.

In an era of hyper-saturated information, excellence is merely entry-level capability. It is table stakes. Without strategic positioning, even extraordinary work gets buried under the noise of lesser competitors who understand how to capture attention.

---

### The Gap Between Actual Value and Perceived Value

Every organization operates at the intersection of two reality vectors:
1. **Actual Value:** The genuine capability, IP, rigor, and results delivered.
2. **Perceived Value:** What key stakeholders, investors, partners, and regulators *believe* you deliver.

When there is a discrepancy between actual value and perceived value, value decays. You lose key talent to competitors with stronger employer brands. You lose institutional capital to companies with clearer narratives. You get left out of high-stakes conversations where policy and industry directions are set.

The CENTRESTAGE exists to close this precise gap.

---

### Three Structural Reasons Excellent Organizations Get Overlooked

#### 1. Confusing Information with Meaning
Most corporate communications consist of generic press releases, technical bullet points, and corporate speak. They state facts without conveying *significance*. When you present data without narrative context, you force your audience to do the heavy lifting of understanding why you matter. They rarely will.

#### 2. Speaking to Everyone Instead of the Right Room
Attempting to be globally visible to all audiences dilutes your positioning. Strategic visibility is surgical. It is about being unmissable to the specific decision-makers who hold the keys to your next horizon of influence.

#### 3. Treating Reputation as a Passive Consequence
Reputation is not something that happens *to* you after you finish working. Reputation is actively engineered through deliberate positioning, consistent narrative architecture, and executive presence.

---

### Moving From Unseen to Unmissable

To turn distinctive value into influence, organizations must shift their posture:
- **Stop broadcasting specs; start framing issues.** Leaders who own the framing of industry challenges automatically own the perceived solutions.
- **Identify your Irreplaceable Advantage.** Articulate the unique synthesis of perspective, history, and capability that no competitor can copy.
- **Build strategic platforms, not one-off announcements.** Authority is built through sustained intellectual contribution, not occasional PR spikes.

Great work should not go unseen. But making it visible requires strategy, story, and intentional positioning.
`
  },
  {
    id: "visibility-is-not-influence",
    number: "02",
    title: "Visibility Is Not Influence: The Difference Most Leaders Miss",
    category: "Leadership",
    readTime: "5 min read",
    seoTerritory: "Executive visibility, leadership influence, personal reputation, thought leadership",
    excerpt: "Being seen is easy. Being remembered for what matters—and having the authority to shape outcomes—is entirely different.",
    publishedDate: "Launch Article",
    isPublished: true,
    fullContent: `
### Noise vs. Presence

In the modern digital economy, visibility has been commoditized. Anyone can buy impressions, post daily videos, or secure superficial media mentions.

Yet, many highly visible leaders possess virtually zero genuine influence. When critical decisions are made behind closed doors, their opinions are not sought. When industry legislation is drafted, their perspective carries no weight.

Why? Because they confused **visibility** with **influence**.

---

### Defining the Anatomy of Influence

Influence is the capacity to affect character, development, behavior, or outcomes. In leadership terms, influence means:
- Setting the vocabulary that an industry uses to describe its challenges.
- Being the first telephone call when a sovereign government or enterprise needs strategic direction.
- Command over the narrative during times of market volatility.

Visibility is quantitative—how many people saw your name. Influence is qualitative—how deeply key people respect your authority.

---

### The Three Pillars of Executive Influence

#### Pillar 1: Intellectual Distinctiveness
You cannot build influence by repeating safe industry consensuses. Influential leaders possess a distinct point of view. They have examined standard assumptions and developed original frameworks that solve complex problems.

#### Pillar 2: Narrative Clarity
An idea that cannot be clearly remembered cannot influence. The most effective executives translate complex institutional strategies into simple, resonant human stories that endure long after they leave the boardroom.

#### Pillar 3: Selective Presence
Over-exposure breeds familiarity; curated presence builds gravitas. Influential leaders choose their platforms with extreme intentionality. They focus on high-yield convenings, authoritative publications, and direct stakeholder engagements.

---

### The CENTRESTAGE Distinction

Visibility is not the goal. **Significance is.**

When leaders move beyond chasing social media metrics and focus on shaping perception through authentic authority, they don't just join conversations—they direct them.
`
  },
  {
    id: "what-ai-cannot-replicate",
    number: "03",
    title: "What AI Cannot Replicate: The New Value of Human Distinction",
    category: "Future Readiness",
    readTime: "7 min read",
    seoTerritory: "AI and leadership, future of work, human skills, differentiation, The Irreplaceable Advantage™",
    excerpt: "As artificial intelligence commoditizes content creation and analytical execution, human distinction becomes the ultimate competitive advantage.",
    publishedDate: "Launch Article",
    isPublished: true,
    fullContent: `
### The Commoditization of Average

We have entered an epoch where artificial intelligence can synthesize market reports in seconds, draft code overnight, and generate infinite volumes of smooth, competent copy.

This introduces a radical economic truth: **Average intellectual output is now free.**

If your organisation's value proposition rests on routine execution, standard market advice, or generic communication, you are facing existential commoditization. When machines can replicate execution, what remains rare and valuable?

Human distinction.

---

### Introducing The Irreplaceable Advantage™

At The CENTRESTAGE, we developed **The Irreplaceable Advantage™** framework to address this specific shift. We ask a fundamental question: *What can only you bring?*

Human distinction is not built on technical skills alone. It is built on the unique combination of:
1. **Lived Perspective:** The lived experiences, cultural contexts, and hard-earned wisdom that no algorithm has lived through.
2. **Moral & Strategic Courage:** The ability to take responsibility for bold decisions in conditions of ambiguity.
3. **Relational Gravitas:** The genuine human empathy and trust that connects leaders in high-stakes convenings.
4. **Original Narrative Synthesis:** The capacity to connect disparate human stories into a vision that inspires action.

---

### Reclaiming Human Agency in an AI World

Organizations and executives who flourish in the coming decades will not compete with technology on speed or scale. They will out-human the competition on depth, trust, and distinction.

- **In Storytelling:** AI generates noise; humans create meaning.
- **In Leadership:** AI provides answers; humans define the right questions.
- **In Convening:** AI connects networks; humans build sacred trust in the right room.

When technology can replicate more of what we do, the question of what makes us distinctive becomes the single most important strategic priority.
`
  },
  {
    id: "what-are-you-known-for",
    number: "04",
    title: "What Are You Known For? The Reputation Question Every Organisation Should Be Able to Answer",
    category: "Reputation",
    readTime: "4 min read",
    seoTerritory: "organisational reputation, clarity, corporate identity",
    excerpt: "If five of your key stakeholders were asked to describe what sets your company apart in one sentence, would they give the same answer?",
    publishedDate: "Upcoming Insights",
    isPublished: false
  },
  {
    id: "the-attention-trap",
    number: "05",
    title: "The Attention Trap: Why Being Everywhere Can Weaken Your Brand",
    category: "Storytelling",
    readTime: "5 min read",
    seoTerritory: "brand strategy, focus, marketing noise",
    excerpt: "Omnipresence is often the enemy of premium positioning. Why restraint and focus create far greater brand authority.",
    publishedDate: "Upcoming Insights",
    isPublished: false
  },
  {
    id: "expert-to-authority",
    number: "06",
    title: "From Expert to Authority: What Actually Makes People Listen",
    category: "Influence",
    readTime: "6 min read",
    seoTerritory: "thought leadership, executive presence, authority building",
    excerpt: "Expertise is knowing the facts. Authority is having the clarity, courage, and platform to shape how others understand those facts.",
    publishedDate: "Upcoming Insights",
    isPublished: false
  },
  {
    id: "the-reputation-gap",
    number: "07",
    title: "The Reputation Gap: The Distance Between Who You Are and How You Are Perceived",
    category: "Reputation",
    readTime: "5 min read",
    seoTerritory: "reputation audit, brand positioning, perception management",
    excerpt: "Closing the gap between internal brilliance and external perception is the single fastest way to unlock market value.",
    publishedDate: "Upcoming Insights",
    isPublished: false
  },
  {
    id: "your-organisation-has-stories",
    number: "08",
    title: "Your Organisation Has Stories. The Question Is Whether Anyone Remembers Them",
    category: "Storytelling",
    readTime: "6 min read",
    seoTerritory: "corporate storytelling, executive narratives, internal communication",
    excerpt: "Information informs, but narrative endures. How to uncover the memorable human stories buried inside your corporate data.",
    publishedDate: "Upcoming Insights",
    isPublished: false
  },
  {
    id: "why-leaders-remain-invisible",
    number: "09",
    title: "Why Some of the Most Accomplished Leaders Remain Invisible",
    category: "Leadership",
    readTime: "5 min read",
    seoTerritory: "executive visibility, modesty trap, leadership presence",
    excerpt: "False modesty is a business liability. Why great leaders owe it to their organizations to step into strategic visibility.",
    publishedDate: "Upcoming Insights",
    isPublished: false
  },
  {
    id: "africa-story-ownership",
    number: "10",
    title: "Africa Does Not Have a Story Problem. It Has a Story Ownership Problem.",
    category: "Ideas & Culture",
    readTime: "8 min read",
    seoTerritory: "African narrative, global positioning, strategic storytelling",
    excerpt: "Reclaiming the narrative of African innovation, capital, and culture requires moving from being documented by others to owning the narrative architecture.",
    publishedDate: "Upcoming Insights",
    isPublished: false
  },
  {
    id: "the-right-room",
    number: "11",
    title: "The Right Room: Why Convening Is Becoming a Leadership Advantage",
    category: "Influence",
    readTime: "5 min read",
    seoTerritory: "executive convenings, networking, high-impact events",
    excerpt: "The most powerful opportunities rarely happen on open platforms. They occur when curated minds convene in spaces designed for genuine trust.",
    publishedDate: "Upcoming Insights",
    isPublished: false
  },
  {
    id: "the-irreplaceable-organisation",
    number: "12",
    title: "The Irreplaceable Organisation: What Makes a Company Difficult to Copy?",
    category: "Future Readiness",
    readTime: "7 min read",
    seoTerritory: "competitive advantage, Irreplaceable Advantage, strategic distinction",
    excerpt: "When features, pricing, and marketing can be quickly copied, your culture, narrative, and distinct perspective become your only defensible moat.",
    publishedDate: "Upcoming Insights",
    isPublished: false
  }
];
