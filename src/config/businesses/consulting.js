export const consultingConfig = {
  id: "consulting",
  name: "Vanguard Executive Strategy & Corporate Advisory",
  shortName: "Vanguard Advisory",
  businessType: "Consultant",
  tagline: "Scalable Corporate Growth, M&A Advisory & Private Equity Optimization",
  badge: "Global Management Consultancy 2026",

  theme: {
    id: "consulting-vanguard",
    colors: {
      primary: { DEFAULT: '#1d4ed8', light: '#3b82f6', dark: '#1e40af', foreground: '#ffffff' },
      secondary: { DEFAULT: '#0f172a', light: '#1e293b', foreground: '#f8fafc' },
      accent: { DEFAULT: '#06b6d4', light: '#22d3ee', foreground: '#0f172a' },
      surface: { DEFAULT: '#f8fafc', muted: '#f0f9ff', card: '#ffffff', glass: 'rgba(255, 255, 255, 0.88)' },
      text: { primary: '#0f172a', secondary: '#475569' },
      border: 'rgba(29, 78, 216, 0.15)'
    },
    typography: { heading: "'Plus Jakarta Sans', sans-serif", body: "'Inter', sans-serif" },
    radius: { brand: '0.75rem', card: '1rem', btn: '0.5rem' },
    glass: { blur: '16px', border: 'rgba(29, 78, 216, 0.15)' }
  },

  logo: { icon: "Briefcase", text: "VANGUARD", subtext: "ADVISORY GROUP" },

  contact: {
    phone: "+1 (800) 555-9011",
    email: "advisory@vanguardstrategy.com",
    whatsapp: "18005559011",
    whatsappMessage: "Hello Vanguard Advisory, I would like to schedule an executive strategy audit.",
    address: "500 Wall Street, 40th Floor, New York, NY 10005",
    operatingHours: [
      { days: "Mon - Fri", hours: "8:30 AM - 6:30 PM" },
      { days: "Sat & Sun", hours: "Closed for Board Meetings & Travel" }
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2!2d-74.008!3d40.706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzIxLjYiTiA3NMKwMDAnMjguOCJX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
  },

  socialLinks: {
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com"
  },

  hero: {
    badge: "📊 Rated Top Strategic Growth Advisors 2026",
    title: "Accelerate Revenue & Master Corporate Expansion",
    subtitle: "We partner with Fortune leaders, enterprise CEOs, and high-growth founders to optimize operations, capital structure, and international scaling.",
    ctaPrimary: { text: "Schedule Strategy Audit", href: "#contact", icon: "TrendingUp" },
    ctaSecondary: { text: "Explore Advisory Practice", href: "#services", icon: "ArrowRight" },
    image: "/images/consulting/hero.jpg",
    highlights: ["$2.4B+ Client Value Created", "Ex-McKinsey & BCG Partners", "100% Guaranteed Strategic ROI"]
  },

  trustStats: {
    headline: "Trusted by Fortune 500 Leaders & Enterprise Founders",
    stats: [
      { id: 1, label: "Client Value Created", value: "$2.4B+", icon: "TrendingUp", trend: "Proven Equity Growth" },
      { id: 2, label: "Senior Partners", value: "24+", icon: "Award", trend: "Ex-McKinsey & Harvard" },
      { id: 3, label: "M&A Deals Closed", value: "180+", icon: "Briefcase", trend: "Successful Mergers" },
      { id: 4, label: "Client Retention Rate", value: "98.4%", icon: "ShieldCheck", trend: "Long-term Partnerships" },
    ],
    certifications: [
      { name: "Certified Management Consultants (CMC)", icon: "Award" },
      { name: "M&A Financial Advisory Board", icon: "CheckCircle2" },
      { name: "Global Enterprise Strategy Award 2026", icon: "Sparkles" }
    ]
  },

  about: {
    badge: "The Vanguard Doctrine",
    title: "Data-Driven Strategy Engineered For Market Dominance",
    subtitle: "Founded on Wall Street in 2012, Vanguard Advisory provides senior execution leadership to Fortune corporations.",
    description: "We don't deliver 200-page slide decks that sit on shelves. We work directly in executive boardrooms to streamline capital allocation, eliminate operational drag, and structure cross-border acquisitions.",
    experienceYears: "14+",
    doctorsCount: "24+",
    proceduresDone: "450+",
    imageMain: "/images/consulting/about-main.jpg",
    imageSecondary: "/images/consulting/about-secondary.jpg",
    featuresList: [
      "Direct Boardroom Executive Mentorship",
      "Confidential M&A Valuation & Due Diligence",
      "Enterprise Digital Process Automation",
      "Global Capital Restructuring"
    ]
  },

  servicesConfig: {
    badge: "Advisory Practices",
    title: "Strategic Management & Capital Practices",
    subtitle: "Explore our executive consulting practices tailored for mid-market and enterprise growth.",
    items: [
      {
        id: "corporate-ma-advisory",
        category: "Corporate Finance",
        title: "Mergers & Acquisitions (M&A) Advisory",
        shortDescription: "End-to-end sell-side due diligence, buyer matching, valuation, and post-merger integration.",
        fullDescription: "Comprehensive M&A advisory helping enterprise founders maximize exit valuations and structure seamless cross-border transactions.",
        duration: "Strategic Practice",
        price: "Custom Audit",
        popular: true,
        icon: "Briefcase",
        image: "/images/consulting/service-1.jpg",
        features: ["Confidential Target Identification", "Discounted Cash Flow Valuation", "Post-Merger System Integration"]
      },
      {
        id: "digital-transformation",
        category: "Operations",
        title: "Enterprise Digital & Process Automation",
        shortDescription: "Modernize legacy systems, automate supply chain workflows, and deploy AI decision tools.",
        fullDescription: "Transform enterprise operations to eliminate operational drag, reduce overhead costs by up to 30%, and accelerate time to market.",
        duration: "Enterprise Audit",
        price: "Custom Advisory",
        popular: true,
        icon: "TrendingUp",
        image: "/images/consulting/service-2.jpg",
        features: ["AI Workflow Integration", "Legacy System Replacement", "30% Operational Cost Reduction"]
      },
      {
        id: "private-equity-growth",
        category: "Capital Growth",
        title: "Private Equity Value Creation",
        shortDescription: "100-day post-acquisition value acceleration plans for private equity portfolio companies.",
        fullDescription: "Rapid 100-day execution framework designed to boost EBITDA margin performance and accelerate revenue scaling.",
        duration: "100-Day Acceleration",
        price: "Performance Retainer",
        popular: false,
        icon: "Award",
        image: "/images/consulting/service-3.jpg",
        features: ["100-Day EBITDA Booster Plan", "Executive Talent Alignment", "International Market Entry"]
      }
    ]
  },

  featuresConfig: {
    title: "Why Global CEOs Choose Vanguard Advisory Group",
    subtitle: "Ex-McKinsey leadership, proven ROI track record, and hands-on execution.",
    items: [
      { id: 1, icon: "Briefcase", title: "Ex-McKinsey & BCG Senior Partners", description: "Every project is led by partners with 15+ years of Wall Street & Fortune 500 experience." },
      { id: 2, icon: "TrendingUp", title: "$2.4 Billion+ Client Equity Created", description: "Direct track record of expanding client market capitalization and revenue." },
      { id: 3, icon: "ShieldCheck", title: "Strict Confidentiality & NDAs", description: "Institutional grade privacy for sensitive corporate mergers and restructuring." }
    ]
  },

  galleryConfig: {
    badge: "Corporate Showcase",
    title: "Inside Vanguard Headquarters",
    subtitle: "Explore our Wall Street boardroom suites and client strategy summits.",
    items: [
      { id: 1, title: "Wall Street Executive Boardroom Suite", category: "Headquarters", image: "/images/consulting/service-4.jpg" },
      { id: 2, title: "Enterprise Executive Strategy Summit", category: "Strategy", image: "/images/consulting/service-1.jpg" },
      { id: 3, title: "Financial Center Tower Architecture", category: "Office", image: "/images/consulting/service-2.jpg" }
    ]
  },

  testimonialsConfig: {
    badge: "Executive Endorsements",
    title: "What Enterprise Leaders Say About Vanguard",
    subtitle: "Hear how Vanguard helped CEOs scale revenue and complete strategic mergers.",
    items: [
      {
        id: 1,
        name: "Marcus Vance",
        role: "CEO, NexaTech Global",
        rating: 5,
        quote: "Vanguard’s M&A advisory team was instrumental during our $450M acquisition. Their due diligence saved us $40M in valuation adjustments!",
        avatar: "/images/consulting/about-main.jpg",
        verified: true,
        treatment: "$450M M&A Deal"
      },
      {
        id: 2,
        name: "Eleanor Sterling",
        role: "Managing Director, Apex Capital",
        rating: 5,
        quote: "The 100-day portfolio value creation plan delivered a 38% increase in EBITDA margin within 4 months. Phenomenal execution!",
        avatar: "/images/consulting/about-main.jpg",
        verified: true,
        treatment: "Private Equity Value"
      }
    ]
  },

  faqConfig: {
    badge: "Consulting FAQ",
    title: "Frequently Asked Questions",
    subtitle: "Clear answers regarding our advisory engagements, fee structures, and audits.",
    items: [
      { id: 1, category: "Engagements", question: "How does Vanguard structure advisory engagements?", answer: "We offer project-based strategy audits, equity value creation retainers, and success-fee M&A transaction structures." },
      { id: 2, category: "Timelines", question: "How long does a typical corporate strategy audit take?", answer: "Initial enterprise audits take 3 to 4 weeks, delivering actionable ROI frameworks for executive approval." }
    ]
  },

  cta: {
    badge: "Ready For Market Dominance?",
    title: "Schedule Your Executive Strategy Audit Today",
    description: "Connect directly with our senior partners to audit your corporate capital structure, growth opportunities, and exit strategy.",
    buttonText: "Schedule Strategy Audit",
    buttonHref: "#contact",
    phoneCallText: "Executive Line: +1 (800) 555-9011"
  },

  sections: [
    { id: "hero", enabled: true, order: 1 },
    { id: "trustBar", enabled: true, order: 2 },
    { id: "advisory", enabled: true, order: 3 }, // Business-specific section
    { id: "about", enabled: true, order: 4 },
    { id: "services", enabled: true, order: 5 },
    { id: "features", enabled: true, order: 6 },
    { id: "gallery", enabled: true, order: 7 },
    { id: "testimonials", enabled: true, order: 8 },
    { id: "faq", enabled: true, order: 9 },
    { id: "cta", enabled: true, order: 10 },
    { id: "contact", enabled: true, order: 11 }
  ]
};

export default consultingConfig;
