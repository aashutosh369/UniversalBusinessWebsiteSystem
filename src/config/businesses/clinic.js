export const clinicConfig = {
  id: "clinic",
  name: "Aura Aesthetic & Medical Spa",
  shortName: "Aura Clinic",
  businessType: "Clinic",
  tagline: "Premier Medical Aesthetics & Cellular Rejuvenation Clinic",
  badge: "FDA Approved Medical Spa",

  theme: {
    id: "clinic-aura",
    colors: {
      primary: { DEFAULT: '#0f766e', light: '#14b8a6', dark: '#0d9488', foreground: '#ffffff' },
      secondary: { DEFAULT: '#0f172a', light: '#1e293b', foreground: '#f8fafc' },
      accent: { DEFAULT: '#d97706', light: '#f59e0b', foreground: '#ffffff' },
      surface: { DEFAULT: '#f8fafc', muted: '#f1f5f9', card: '#ffffff', glass: 'rgba(255, 255, 255, 0.85)' },
      text: { primary: '#0f172a', secondary: '#475569' },
      border: 'rgba(15, 118, 110, 0.15)'
    },
    typography: { heading: "'Outfit', sans-serif", body: "'Inter', sans-serif" },
    radius: { brand: '1.25rem', card: '1.5rem', btn: '0.875rem' },
    glass: { blur: '16px', border: 'rgba(15, 118, 110, 0.15)' }
  },

  logo: { icon: "Sparkles", text: "AURA", subtext: "CLINIC & SPA" },

  contact: {
    phone: "+1 (800) 555-0199",
    email: "concierge@aurawellness.com",
    whatsapp: "18005550199",
    whatsappMessage: "Hello Aura Clinic, I would like to inquire about booking a skin consultation.",
    address: "450 Luxury Avenue, Suite 800, Beverly Hills, CA 90210",
    operatingHours: [
      { days: "Mon - Fri", hours: "9:00 AM - 8:00 PM" },
      { days: "Sat", hours: "10:00 AM - 6:00 PM" },
      { days: "Sun", hours: "By VIP Reservation Only" }
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26430.79322405073!2d-118.4116492!3d34.0736204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d74701%3A0x5a188f114c000f0!2sBeverly%20Hills%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
  },

  socialLinks: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com"
  },

  hero: {
    badge: "✨ 2026 Award-Winning Medical Aesthetic Clinic",
    title: "Reveal Your Radiant, Timeless Skin Confidence",
    subtitle: "Experience advanced FDA-cleared laser skin resurfacing, medical hydra-facials, and personalized anti-aging therapies delivered by board-certified physicians.",
    ctaPrimary: { text: "Book Consultation", href: "#contact", icon: "Calendar" },
    ctaSecondary: { text: "Explore Treatments", href: "#services", icon: "ArrowRight" },
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    highlights: ["100% Board Certified Physicians", "FDA-Cleared German Tech", "Zero Downtime Therapies"]
  },

  trustStats: {
    headline: "Trusted by 10,000+ Satisfied Patients & Clients",
    stats: [
      { id: 1, label: "Satisfied Patients", value: "10,000+", icon: "Users", trend: "+18% this year" },
      { id: 2, label: "Board Certified Doctors", value: "14+", icon: "Award", trend: "Top Tier Experts" },
      { id: 3, label: "Client Satisfaction Rating", value: "4.95 / 5", icon: "Star", trend: "2,400+ 5-Star Reviews" },
      { id: 4, label: "Clinical Excellence", value: "12+ Yrs", icon: "ShieldCheck", trend: "Established 2014" },
    ],
    certifications: [
      { name: "FDA Approved Equipment", icon: "CheckCircle2" },
      { name: "ISO 9001 Certified Clinic", icon: "Award" },
      { name: "Top Aesthetic Brand 2026", icon: "Sparkles" },
      { name: "100% Sterile Protocol", icon: "Shield" },
    ]
  },

  about: {
    badge: "About Aura Wellness",
    title: "Where Medical Science Meets Luxury Hospitality",
    subtitle: "Founded in 2014, Aura Aesthetic Clinic has set the golden standard for non-invasive clinical skin restoration.",
    description: "Our philosophy revolves around natural-looking restoration. We reject artificial, over-processed aesthetics, focusing instead on deep cellular stimulation, dermal nutrition, and harmonic facial balance. Every client receives a private 3D skin analysis followed by a doctor-curated treatment plan.",
    experienceYears: "12+",
    doctorsCount: "14+",
    proceduresDone: "25,000+",
    imageMain: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    featuresList: [
      "Private VIP Consultation Suites",
      "Doctor-Curated Individualized Protocols",
      "Post-Treatment Clinical Care Helpline",
      "Strict 100% Sterile Medical Protocols"
    ]
  },

  servicesConfig: {
    badge: "Our Specialized Solutions",
    title: "Clinical Medical Aesthetic Solutions",
    subtitle: "Explore our range of physician-administered skin resurfacing, anti-aging, and wellness therapies.",
    items: [
      {
        id: "laser-skin-rejuvenation",
        category: "Aesthetics",
        title: "Laser Skin Rejuvenation & Resurfacing",
        shortDescription: "FDA-cleared laser therapy targeting fine lines, pigmentation, and collagen restoration.",
        fullDescription: "Our medical-grade Pico-laser technology penetrates deep skin layers to stimulate natural collagen renewal and smooth uneven texture.",
        duration: "45 Mins",
        price: "$299",
        popular: true,
        icon: "Sparkles",
        image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80",
        features: ["FDA Cleared Non-invasive Tech", "Painless & No Downtime", "Noticeable Glow after 1st Session"]
      },
      {
        id: "hydra-facial",
        category: "Skin Therapy",
        title: "Signature Medical Hydra-Facial",
        shortDescription: "Deep vortex extraction, salicylic cleanse, and hyaluronic acid infusion.",
        fullDescription: "A multi-step medical facial treatment that purifies clogged pores and hydrates skin using antioxidant elixirs.",
        duration: "60 Mins",
        price: "$199",
        popular: true,
        icon: "Droplets",
        image: "https://images.unsplash.com/photo-1512290900673-7002fa016352?auto=format&fit=crop&w=800&q=80",
        features: ["Deep Pore Vacuum Extraction", "Peptide & Vitamin C Boosters", "Instant Radiant Hydration"]
      },
      {
        id: "botox-fillers",
        category: "Anti-Aging",
        title: "Botox & Dermal Volume Fillers",
        shortDescription: "Physician-administered precision anti-aging injections for smooth forehead & defined jawline.",
        fullDescription: "Expertly administered hyaluronic dermal fillers tailored to soften facial lines while preserving natural expression.",
        duration: "30 Mins",
        price: "$399",
        popular: false,
        icon: "HeartPulse",
        image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?auto=format&fit=crop&w=800&q=80",
        features: ["Board Certified Doctors", "Natural-looking Ergonomic Results", "Long Lasting 8-12 Months Effect"]
      }
    ]
  },

  featuresConfig: {
    title: "Why Discerning Patients Choose Aura Clinic",
    subtitle: "We combine world-class medical expertise with 7-star luxury spa hospitality.",
    items: [
      { id: 1, icon: "Award", title: "Board Certified Doctors", description: "Every aesthetic procedure is executed or supervised by experienced medical doctors." },
      { id: 2, icon: "Sparkles", title: "Next-Gen Medical Tech", description: "FDA-cleared aesthetic machinery imported from Germany & Switzerland." },
      { id: 3, icon: "ShieldCheck", title: "Transparent Pricing", description: "Upfront treatment plans with zero hidden charges or surprise costs." }
    ]
  },

  galleryConfig: {
    badge: "Visual Showcase",
    title: "Inside Aura Sanctuary",
    subtitle: "Witness our private clinical suites and patient outcomes.",
    items: [
      { id: 1, title: "Luxury VIP Consultation Suite", category: "Facility", image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=800&q=80" },
      { id: 2, title: "Pico Laser Session", category: "Treatments", image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&w=800&q=80" },
      { id: 3, title: "Medical Hydra-Facial", category: "Treatments", image: "https://images.unsplash.com/photo-1512290900673-7002fa016352?auto=format&fit=crop&w=800&q=80" }
    ]
  },

  testimonialsConfig: {
    badge: "Patient Reviews",
    title: "What Patients Say About Aura",
    subtitle: "Over 2,400+ verified 5-star reviews from satisfied patients.",
    items: [
      {
        id: 1,
        name: "Dr. Elena Rostova",
        role: "Senior Architect",
        rating: 5,
        quote: "Aura Clinic transformed my skin completely before my design summit! The Laser Rejuvenation yielded flawless glass skin.",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
        verified: true,
        treatment: "Laser Rejuvenation"
      },
      {
        id: 2,
        name: "Sophia Chen",
        role: "Fashion Director",
        rating: 5,
        quote: "The doctors at Aura are true sculptors. The jawline Botox and dermal fillers look completely natural!",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=200&q=80",
        verified: true,
        treatment: "Dermal Fillers"
      }
    ]
  },

  faqConfig: {
    badge: "FAQ",
    title: "Frequently Asked Questions",
    subtitle: "Clear answers regarding clinical safety, procedure timelines, and bookings.",
    items: [
      { id: 1, category: "General", question: "How do I schedule an initial consultation?", answer: "Book directly online, call +1 (800) 555-0199, or send a WhatsApp message to our patient concierge." },
      { id: 2, category: "Safety", question: "Are your procedures performed by certified doctors?", answer: "Yes, 100%. All medical aesthetic procedures are performed exclusively by board-certified physicians." }
    ]
  },

  cta: {
    badge: "Ready For Luminous Skin?",
    title: "Begin Your Aesthetic Transformation Today",
    description: "Book your consultation with our board-certified aesthetic doctors and receive a complimentary 3D Skin Diagnostic Analysis.",
    buttonText: "Schedule Consultation",
    buttonHref: "#contact",
    phoneCallText: "Direct Line: +1 (800) 555-0199"
  },

  sections: [
    { id: "hero", enabled: true, order: 1 },
    { id: "trustBar", enabled: true, order: 2 },
    { id: "doctors", enabled: true, order: 3 }, // Business-specific section
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

export default clinicConfig;
