export const realEstateConfig = {
  id: "realEstate",
  name: "Flats & Beyond",
  shortName: "Flats & Beyond",
  businessType: "Luxury Real Estate & Housing Advisory",
  tagline: "WHERE DREAMS FIND AN ADDRESS.",
  badge: "Premier Real Estate & Property Advisory",

  theme: {
    id: "theme-realestate-dark",
    isDark: true,
    colors: {
      primary: { DEFAULT: '#c5a059', light: '#d4af37', dark: '#9e7d3b', foreground: '#0d0c0a' },
      secondary: { DEFAULT: '#181613', light: '#24211d', foreground: '#f5f2eb' },
      accent: { DEFAULT: '#10b981', light: '#34d399', foreground: '#ffffff' },
      surface: { DEFAULT: '#0d0c0a', muted: '#14120f', card: '#1a1814', glass: 'rgba(13, 12, 10, 0.94)' },
      text: { primary: '#f5f2eb', secondary: '#a8a297' },
      border: 'rgba(197, 160, 89, 0.22)'
    },
    typography: { heading: "'Cinzel', serif", body: "'Plus Jakarta Sans', sans-serif" },
    radius: { brand: '0.5rem', card: '0.85rem', btn: '0.5rem' },
    glass: { blur: '16px', border: 'rgba(197, 160, 89, 0.22)' }
  },

  darkTheme: {
    id: "theme-realestate-dark",
    isDark: true,
    colors: {
      primary: { DEFAULT: '#c5a059', light: '#d4af37', dark: '#9e7d3b', foreground: '#0d0c0a' },
      secondary: { DEFAULT: '#181613', light: '#24211d', foreground: '#f5f2eb' },
      accent: { DEFAULT: '#10b981', light: '#34d399', foreground: '#ffffff' },
      surface: { DEFAULT: '#0d0c0a', muted: '#14120f', card: '#1a1814', glass: 'rgba(13, 12, 10, 0.94)' },
      text: { primary: '#f5f2eb', secondary: '#a8a297' },
      border: 'rgba(197, 160, 89, 0.22)'
    },
    typography: { heading: "'Cinzel', serif", body: "'Plus Jakarta Sans', sans-serif" },
    radius: { brand: '0.5rem', card: '0.85rem', btn: '0.5rem' },
    glass: { blur: '16px', border: 'rgba(197, 160, 89, 0.22)' }
  },

  lightTheme: {
    id: "theme-realestate-light",
    isDark: false,
    colors: {
      primary: { DEFAULT: '#c5a059', light: '#d4af37', dark: '#9e7d3b', foreground: '#ffffff' },
      secondary: { DEFAULT: '#1e293b', light: '#334155', foreground: '#f8fafc' },
      accent: { DEFAULT: '#059669', light: '#10b981', foreground: '#ffffff' },
      surface: { DEFAULT: '#F7F9F9', muted: '#EEF2F3', card: '#ffffff', glass: 'rgba(247, 249, 249, 0.95)' },
      text: { primary: '#1e293b', secondary: '#475569' },
      border: 'rgba(197, 160, 89, 0.18)'
    },
    typography: { heading: "'Cinzel', serif", body: "'Plus Jakarta Sans', sans-serif" },
    radius: { brand: '0.5rem', card: '0.85rem', btn: '0.5rem' },
    glass: { blur: '16px', border: 'rgba(197, 160, 89, 0.18)' }
  },

  logo: {
    image: "/images/realestate/logo.jpg",
    icon: "Building",
    text: "FLATS n BEYOND",
    subtext: "WHERE DREAMS FIND AN ADDRESS"
  },

  contact: {
    phone: "+91 99117 86111",
    email: "tanuj.arora@flatsandbeyond.in",
    whatsapp: "919911786111",
    whatsappText: "Chat Directly on WhatsApp (+91 99117 86111)",
    whatsappMessage: "Hello Tanuj Arora Sir, I visited Flats & Beyond website and would like to enquire about luxury flats and property booking.",
    address: "Prime Commercial Towers, Golf Course Road, Gurugram & Delhi NCR",
    operatingHours: [
      { days: "Monday – Sunday", hours: "9:00 AM – 8:30 PM (7 Days Site Visits)" }
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.472718914118!2d77.09441631504332!3d28.45931298315752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d18d4076326e5%3A0xb3a8080f0814a0f3!2sGolf%20Course%20Rd%2C%20Gurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    regulatory: { reraEnabled: true, registrationNumber: "HRERA-GGM-2024-FB99117", disclaimer: "RERA Registered Channel Partner & Property Advisory." }
  },

  mobileActions: {
    call: true,
    whatsapp: true,
    primaryAction: { label: "Book Site Visit", target: "#contact" }
  },

  socialLinks: { instagram: "https://instagram.com", facebook: "https://facebook.com", twitter: "https://twitter.com", linkedin: "https://linkedin.com" },

  hero: {
    badge: "✨ PREMIER HOUSING & REAL ESTATE ADVISORY",
    title: "Where Dreams Find An Address.",
    subtitle: "Discover handpicked 2, 3 & 4 BHK Luxury Flats, Penthouses, Builder Floors & High-Return Investment Properties across Gurugram, Delhi NCR & Noida.",
    ctaPrimary: { text: "Explore Luxury Properties", href: "#featured", icon: "Search" },
    ctaSecondary: { text: "Book Private Site Visit", href: "#contact", icon: "Calendar" },
    image: "/images/realestate/hero.jpg",
    highlights: ["Direct Advisory Guidance: Tanuj Arora (+91 99117 86111)", "100% Verified Legal Titles & RERA Compliant", "End-to-End Home Loan & Deal Closure Support"],
    searchEnabled: false,
    searchButtonText: "Find My Flat",
    searchFields: [
      { label: "Looking For", options: ["Buy Flat", "Rent / Lease", "Investment"] },
      { label: "Property Type", options: ["3 BHK Luxury Flat", "2 BHK Premium Flat", "4 BHK Penthouse", "Independent Builder Floor", "Commercial Shop"] },
      { label: "Prime Location", options: ["Golf Course Road", "Dwarka Expressway", "Southern Peripheral Rd", "Noida Sector 150", "South Delhi"] },
      { label: "Budget Range", options: ["₹75 Lakh - ₹1.2 Cr", "₹1.2 Cr - ₹2.5 Cr", "₹2.5 Cr - ₹5 Cr", "₹5 Cr+ Luxury"] }
    ]
  },

  trustStats: {
    badge: "PROVEN TRACK RECORD",
    title: "Delivering Trust & Dream Addresses",
    subtitle: "Helping families and investors secure prime properties with full transparency.",
    items: [
      { id: 1, value: "500+", label: "Happy Families Settled", icon: "Building" },
      { id: 2, value: "₹250+ Cr", label: "Property Inventory Handled", icon: "Users" },
      { id: 3, value: "100%", label: "Verified Legal Papers", icon: "Award" },
      { id: 4, value: "10+ Yrs", label: "NCR Market Expertise", icon: "MapPin" }
    ]
  },

  about: {
    badge: "ABOUT FLATS n BEYOND",
    title: "Premier Real Estate Advisory & Luxury Property Consultants",
    subtitle: "Where Dreams Find An Address.",
    description: "Flats n Beyond is a premier real estate consultancy built on absolute transparency, deep NCR market foresight, and buyer-first integrity.\n\nWhether you are seeking a luxury 3 or 4 BHK apartment, a private penthouse, an independent builder floor, or a high-return commercial asset across Gurugram, Delhi NCR & Noida, our team delivers complete end-to-end guidance from initial private site visit to final key handover.",
    experienceYears: "10+",
    doctorsCount: "15+",
    proceduresDone: "500+",
    imageMain: "/images/realestate/about-main.jpg",
    imageSecondary: "/images/realestate/about-secondary.jpg",
    featuresList: ["Direct Advisory Guidance: Tanuj Arora (+91 99117 86111)", "Direct Developer Deals & Zero Hidden Fees", "100% Legal Title & RERA Verification", "Complimentary AC Cab for Site Visits"]
  },

  propertyTypesConfig: {
    badge: "EXPLORE PROPERTY TYPES",
    title: "Tailored Living & Investment Options",
    subtitle: "Choose from curated residential and commercial categories.",
    items: [
      { id: 1, icon: "Building2", title: "Luxury 3 & 4 BHK Flats", description: "Spacious apartments in high-rise gated communities with clubhouses & pools." },
      { id: 2, icon: "Home", title: "Independent Builder Floors", description: "Exclusive low-density living with private parking, lift & terrace rights." },
      { id: 3, icon: "Key", title: "Penthouses & Villas", description: "Ultra-luxury sky villas offering panoramic city views and private plunge pools." },
      { id: 4, icon: "Map", title: "Residential Plots", description: "Gated township plots in booming growth corridors for custom home building." },
      { id: 5, icon: "Briefcase", title: "Commercial Offices", description: "Grade-A office spaces for corporates, startups, and high-yield investors." },
      { id: 6, icon: "ShoppingBag", title: "Retail Shops & Food Courts", description: "High-footfall commercial spaces in prime shopping malls & high streets." }
    ]
  },

  featuredPropertiesConfig: {
    badge: "HANDPICKED FEATURED DEALS",
    title: "Exclusive Featured Listings",
    subtitle: "Explore prime luxury residential options in Delhi NCR & Gurugram.",
    items: [
      {
        title: "The Grand Pavilion — 3 BHK Luxury Flat",
        price: "₹1.65 Cr*",
        specs: "3 BHK + Servant • 1,950 sq. ft. • Golf Course Extension",
        location: "Gurugram, Haryana",
        image: "/images/realestate/prop-1.jpg"
      },
      {
        title: "Skyline Royal Penthouse — 4 BHK",
        price: "₹3.45 Cr*",
        specs: "4 BHK Sky Villa • 3,400 sq. ft. • DLF Phase 5",
        location: "Golf Course Road, Gurugram",
        image: "/images/realestate/prop-2.jpg"
      },
      {
        title: "Urban Sanctuary — Independent Builder Floor",
        price: "₹1.15 Cr*",
        specs: "3 BHK Floor • 1,600 sq. ft. • Private Terrace & Lift",
        location: "Dwarka Expressway / South Delhi",
        image: "/images/realestate/prop-3.jpg"
      },
      {
        title: "Apex Horizon — Commercial High-Street Shop",
        price: "₹95 Lakh*",
        specs: "Retail Space • 650 sq. ft. • Assured Rental Income",
        location: "Noida Sector 150",
        image: "/images/realestate/prop-4.jpg"
      }
    ]
  },

  buyConfig: {
    badge: "Looking to Buy Your Dream Flat?",
    title: "Let Tanuj Arora Find Your Ideal Address.",
    description: "Share your location preferences and budget with us. We will arrange a personalized property walkthrough and negotiate the best deal for you.",
    buttonText: "Request Property Callback",
    buttonHref: "#contact",
    phoneCallText: "Direct Line: +91 99117 86111 (Tanuj Arora)"
  },

  rentConfig: {
    badge: "Looking to Rent?",
    title: "Premium Furnished & Unfurnished Rental Apartments.",
    description: "Browse curated 2 BHK, 3 BHK & Commercial Office Spaces available for immediate lease.",
    buttonText: "Browse Available Rentals",
    buttonHref: "#contact",
    phoneCallText: "Call for quick availability: +91 99117 86111"
  },

  sellConfig: {
    badge: "Looking to Sell / List Property?",
    title: "Want Maximum Value For Your Property?",
    subtitle: "Get expert valuation, professional property showcase, and direct access to pre-qualified buyers.",
    steps: [
      { number: "01", icon: "FileText", title: "Share Property Details", description: "Call or WhatsApp Tanuj Arora (+91 99117 86111) with property info." },
      { number: "02", icon: "Search", title: "Free Market Valuation", description: "Instant fair market assessment & price optimization." },
      { number: "03", icon: "Megaphone", title: "Premium Marketing", description: "Targeted buyer outreach & HD photo/video showcase." },
      { number: "04", icon: "Eye", title: "Vetted Site Visits", description: "Organized property walkthroughs with serious buyers only." },
      { number: "05", icon: "CheckCircle", title: "Seamless Closing", description: "Full legal paperwork, token collection, and registration support." }
    ]
  },

  whyChooseUsConfig: {
    badge: "WHY CHOOSE FLATS & BEYOND",
    title: "Why Buyers & Investors Trust Tanuj Arora",
    subtitle: "Uncompromising integrity, deep market insights, and client-first commitment.",
    items: [
      { id: 1, icon: "MapPin", title: "Deep NCR Market Knowledge", description: "Inside access to upcoming infrastructure, RERA approvals, and growth hotspots." },
      { id: 2, icon: "CheckSquare", title: "100% Legally Verified Listings", description: "Every flat title, land approval, and builder background is thoroughly audited." },
      { id: 3, icon: "Shield", title: "Zero Hidden Brokerage Surprise", description: "Clear, upfront terms with complete transaction transparency." },
      { id: 4, icon: "Target", title: "Bespoke Property Matching", description: "We match your budget, Vaastu preference, and commute needs accurately." },
      { id: 5, icon: "Eye", title: "Free Luxury Cab Site Visits", description: "Complimentary pickup & drop for hassle-free family site visits." },
      { id: 6, icon: "Briefcase", title: "End-to-End Loan & Registration", description: "Bank home loan sanctioning and registry support under one roof." }
    ]
  },

  areasConfig: {
    badge: "PRIME LOCATIONS WE COVER",
    title: "Explore Premium Delhi NCR Zones",
    subtitle: "Top growth corridors for living & investment.",
    items: [
      { id: 1, title: "Golf Course Road", category: "Gurugram", image: "/images/realestate/prop-5.jpg" },
      { id: 2, title: "Dwarka Expressway", category: "Gurugram / Delhi", image: "/images/realestate/prop-6.jpg" },
      { id: 3, title: "Southern Peripheral Rd", category: "Gurugram", image: "/images/realestate/prop-1.jpg" },
      { id: 4, title: "Noida Sector 150 & 62", category: "Noida", image: "/images/realestate/prop-2.jpg" }
    ]
  },

  advisorsConfig: {
    badge: "LEADERSHIP & ADVISORY",
    title: "Meet Your Lead Property Advisor",
    subtitle: "Personalized guidance backed by a decade of real estate leadership.",
    items: [
      { name: "Tanuj Arora", role: "Founder & Managing Director", specialty: "Luxury Housing & Commercial Investments — Delhi NCR", bio: "10+ Years Experience. Founder of Flats & Beyond. Dedicated to bringing integrity, personalized care, and premium property solutions to homebuyers.", image: "/images/realestate/logo.jpg" },
      { name: "Ananya Kapoor", role: "Senior Real Estate Consultant", specialty: "High-Rise Apartments & Penthouses", bio: "8+ Years Experience. Specializes in luxury residential developments and NRI investments.", image: "/images/realestate/prop-4.jpg" },
      { name: "Vivek Sharma", role: "Commercial Advisory Lead", specialty: "Retail Shops & Office Spaces", bio: "12+ Years Experience. Helps business owners and investors secure high-return commercial assets.", image: "/images/realestate/prop-5.jpg" }
    ]
  },

  buyingJourneyConfig: {
    badge: "OUR 5-STEP PROCESS",
    title: "From Dream to Key Handover",
    subtitle: "A smooth, stress-free property buying experience.",
    steps: [
      { number: "01", icon: "MessageSquare", title: "Initial Consultation", description: "Connect with Tanuj Arora (+91 99117 86111) to discuss budget & location." },
      { number: "02", icon: "List", title: "Handpicked Shortlist", description: "Receive 3-4 top verified flat options matching your criteria." },
      { number: "03", icon: "Eye", title: "Guided Site Visits", description: "Visit sample flats and inspect layout, amenities, and connectivity." },
      { number: "04", icon: "PieChart", title: "Best Price Negotiation", description: "We negotiate directly with top builders to get you the lowest deal." },
      { number: "05", icon: "CheckCircle", title: "Loan & Possession", description: "Complete documentation, bank loan approval, and key handover." }
    ]
  },

  propertyAmenitiesConfig: {
    badge: "WORLD-CLASS AMENITIES",
    title: "Features Of Our Signature Flats",
    subtitle: "Designed for modern luxury living.",
    items: [
      { id: 1, icon: "Car", title: "Covered Stilt Parking", description: "Reserved covered parking for residents & visitors." },
      { id: 2, icon: "Shield", title: "3-Tier Gated Security", description: "24/7 CCTV surveillance, smart access & security guards." },
      { id: 3, icon: "ArrowUp", title: "High-Speed Elevators", description: "Branded automatic lifts with ARD emergency power." },
      { id: 4, icon: "Zap", title: "100% Power Backup", description: "Uninterrupted electricity for flats and common areas." },
      { id: 5, icon: "Activity", title: "Modern Clubhouse & Gym", description: "Fully equipped fitness center, swimming pool & indoor games." },
      { id: 6, icon: "Sun", title: "Landscaped Gardens", description: "Open green parks, jogging tracks, and kids play areas." }
    ]
  },

  galleryConfig: {
    badge: "PROJECT SHOWCASE",
    title: "Inside Flats & Beyond Signature Spaces",
    subtitle: "Take a visual tour of sample luxury flat interiors.",
    items: [
      { id: 1, title: "Opulent Living Room", category: "Interior", image: "/images/realestate/prop-6.jpg" },
      { id: 2, title: "Master Bedroom Suite", category: "Interior", image: "/images/realestate/prop-1.jpg" },
      { id: 3, title: "Modular Italian Kitchen", category: "Interior", image: "/images/realestate/prop-2.jpg" },
      { id: 4, title: "Modern Facade & High-Rise", category: "Exterior", image: "/images/realestate/prop-3.jpg" },
      { id: 5, title: "Resort-Style Swimming Pool", category: "Amenities", image: "/images/realestate/prop-4.jpg" },
      { id: 6, title: "Panoramic Sun Deck", category: "Exterior", image: "/images/realestate/prop-5.jpg" }
    ]
  },

  testimonialsConfig: {
    badge: "CLIENT REVIEWS",
    title: "What Our Homebuyers Say About Flats & Beyond",
    subtitle: "Real stories from families who found their dream address with Tanuj Arora.",
    items: [
      { id: 1, name: "Rajesh & Meenakshi Malhotra", role: "3 BHK Flat Buyers in Gurugram", rating: 5, quote: "Tanuj Arora sir made our home buying process completely stress-free. From arranging luxury site visits to negotiating the best price with the builder, Flats & Beyond delivered 100% on their promise!", avatar: "/images/realestate/about-main.jpg", verified: true, treatment: "Gurugram 3 BHK Purchase" },
      { id: 2, name: "Vikramaditya Singh", role: "Investor", rating: 5, quote: "I invested in a commercial retail shop on Dwarka Expressway through Tanuj. His market foresight and RERA documentation check were outstanding. High returns guaranteed!", avatar: "/images/realestate/about-main.jpg", verified: true, treatment: "Commercial Investment" }
    ]
  },

  faqConfig: {
    badge: "FREQUENTLY ASKED QUESTIONS",
    title: "Got Questions? We Have Answers.",
    subtitle: "Clear answers to guide your flat buying decision.",
    items: [
      { id: 1, category: "General", question: "How do I schedule a site visit with Tanuj Arora?", answer: "You can call or WhatsApp us directly at +91 99117 86111. We will arrange a free AC cab pickup for you and your family." },
      { id: 2, category: "Services", question: "Do you charge extra brokerage for new developer projects?", answer: "No! For new launch and under-construction builder projects, our advisory services to homebuyers are 100% free of charge." },
      { id: 3, category: "Legal", question: "Are all properties listed with Flats & Beyond RERA approved?", answer: "Yes, 100%. We only showcase properties with verified land titles, RERA registration, and bank approvals." },
      { id: 4, category: "Financial", question: "Do you assist with bank home loans?", answer: "Yes, we have tie-ups with leading banks (HDFC, ICICI, SBI, Axis) to get your home loan approved at competitive interest rates." },
      { id: 5, category: "General", question: "Can I list my flat for resale or rental through Flats & Beyond?", answer: "Absolutely! Contact Tanuj Arora (+91 99117 86111) to get your property valued and listed for genuine buyers." }
    ]
  },

  enquiryCtaConfig: {
    badge: "CONNECT WITH TANUJ ARORA",
    title: "Ready To Find Your Dream Address?",
    description: "Connect directly with Tanuj Arora (+91 99117 86111) for personalized property guidance and exclusive deals.",
    buttonText: "Schedule Site Visit Now",
    buttonHref: "#contact",
    phoneCallText: "WhatsApp Direct: +91 99117 86111"
  },

  sections: [
    { id: "hero", type: "hero", enabled: true, order: 1 },
    { id: "trustStats", type: "trustBar", enabled: true, order: 2 },
    { id: "about", type: "about", enabled: true, order: 3 },
    { id: "propertyTypes", type: "features", dataKey: "propertyTypesConfig", enabled: true, order: 4 },
    { id: "featured", type: "properties", dataKey: "featuredPropertiesConfig", enabled: true, order: 5 },
    { id: "buy", type: "cta", dataKey: "buyConfig", enabled: true, order: 6 },
    { id: "rent", type: "cta", dataKey: "rentConfig", enabled: true, order: 7 },
    { id: "sell", type: "steps", dataKey: "sellConfig", enabled: true, order: 8 },
    { id: "whyChooseUs", type: "features", dataKey: "whyChooseUsConfig", enabled: true, order: 9 },
    { id: "areas", type: "gallery", dataKey: "areasConfig", enabled: true, order: 10 },
    { id: "advisors", type: "doctors", dataKey: "advisorsConfig", enabled: true, order: 11 },
    { id: "buyingJourney", type: "steps", dataKey: "buyingJourneyConfig", enabled: true, order: 12 },
    { id: "propertyAmenities", type: "features", dataKey: "propertyAmenitiesConfig", enabled: true, order: 13 },
    { id: "gallery", type: "gallery", enabled: true, order: 14 },
    { id: "testimonials", type: "testimonials", enabled: true, order: 15 },
    { id: "faq", type: "faq", enabled: true, order: 16 },
    { id: "enquiryCta", type: "cta", dataKey: "enquiryCtaConfig", enabled: true, order: 17 },
    { id: "contact", type: "contact", enabled: true, order: 18 }
  ]
};

export default realEstateConfig;
