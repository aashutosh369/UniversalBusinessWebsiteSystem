export const realEstateConfig = {
  id: "realEstate",
  name: "Nestora Realty",
  shortName: "Nestora",
  businessType: "Real Estate Agency",
  tagline: "FIND YOUR PLACE. BUILD YOUR FUTURE.",
  badge: "Premium Real Estate Advisory",

  theme: {
    id: "theme-realestate",
    colors: {
      primary: { DEFAULT: '#1e293b', light: '#334155', dark: '#0f172a', foreground: '#ffffff' },
      secondary: { DEFAULT: '#f8fafc', light: '#ffffff', foreground: '#0f172a' },
      accent: { DEFAULT: '#d97706', light: '#f59e0b', foreground: '#ffffff' },
      surface: { DEFAULT: '#f1f5f9', muted: '#f8fafc', card: '#ffffff', glass: 'rgba(255, 255, 255, 0.95)' },
      text: { primary: '#0f172a', secondary: '#475569' },
      border: 'rgba(30, 41, 59, 0.08)'
    },
    typography: { heading: "'Playfair Display', serif", body: "'Inter', sans-serif" },
    radius: { brand: '0rem', card: '0.25rem', btn: '0rem' },
    glass: { blur: '8px', border: 'rgba(30, 41, 59, 0.08)' }
  },

  logo: { icon: "Home", text: "NESTORA", subtext: "REALTY" },

  contact: {
    phone: "+91 98765 43210",
    email: "hello@nestora-demo.in",
    whatsapp: "919876543210",
    whatsappMessage: "Hello Nestora Realty, I would like to enquire about a property.",
    address: "5th Floor, Meridian Business Centre, Baner Road, Pune, Maharashtra",
    operatingHours: [
      { days: "Monday – Saturday", hours: "9:30 AM – 7:00 PM" },
      { days: "Sunday", hours: "By Appointment" }
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.355325852955!2d73.7844199!3d18.5580644!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bec7071e21b7%3A0xc078426d83a1f11a!2sBaner%20Road%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
    regulatory: { reraEnabled: true, registrationNumber: "Demo: RERA-XXX-00000", disclaimer: "This is a demo configuration. RERA number is fictitious." }
  },
  
  mobileActions: {
    call: true,
    whatsapp: true,
    primaryAction: { label: "Site Visit", target: "#contact" }
  },
  
  socialLinks: { instagram: "https://instagram.com", facebook: "https://facebook.com", twitter: "https://twitter.com" },

  hero: {
    badge: "PREMIUM REAL ESTATE ADVISORY",
    title: "Find a Place Worth Calling Home.",
    subtitle: "Discover thoughtfully selected residential and commercial properties with local expertise and guidance from search to transaction.",
    ctaPrimary: { text: "Explore Properties", href: "#featured", icon: "Search" },
    ctaSecondary: { text: "Schedule a Site Visit", href: "#contact", icon: "Calendar" },
    image: "/images/realestate/hero.jpg",
    highlights: ["Local Market Knowledge", "Curated Listings", "End-to-End Assistance"],
    searchEnabled: true,
    searchButtonText: "Search Properties",
    searchFields: [
      { label: "Looking For", options: ["Buy", "Rent"] },
      { label: "Property Type", options: ["Apartment", "Villa", "Plot", "Office", "Retail", "Independent House"] },
      { label: "Location", options: ["Pune", "Mumbai", "Bengaluru", "Noida", "Gurugram", "Hyderabad"] },
      { label: "Budget", options: ["₹50 Lakh", "₹1 Crore", "₹2 Crore", "₹3 Crore+"] }
    ]
  },

  trustStats: {
    badge: "SAMPLE METRICS",
    title: "Our Track Record",
    subtitle: "These are fictional demo metrics representing our agency experience.",
    items: [
      { id: 1, value: "500+", label: "Properties Showcased", icon: "Building" },
      { id: 2, value: "1,200+", label: "Clients Assisted", icon: "Users" },
      { id: 3, value: "15+", label: "Years of Experience", icon: "Award" },
      { id: 4, value: "12", label: "Local Markets Covered", icon: "MapPin" }
    ]
  },

  about: {
    badge: "ABOUT NESTORA",
    title: "Real Estate Guidance Built Around Your Goals.",
    subtitle: "Find Your Place. Build Your Future.",
    description: "Buying, selling or renting a property is a significant decision. At Nestora Realty, we combine local market knowledge, property discovery and personalised guidance to help clients navigate the process with greater clarity.\n\nOur approach focuses on understanding what matters to each client — location, budget, property type, lifestyle and long-term requirements.",
    experienceYears: "15+",
    doctorsCount: "20+", 
    proceduresDone: "1200+",
    imageMain: "/images/realestate/about-main.jpg",
    imageSecondary: "/images/realestate/about-secondary.jpg",
    featuresList: ["Local Expertise", "Premium Properties", "Transparent Process", "Personalised Service"]
  },

  propertyTypesConfig: {
    badge: "EXPLORE PROPERTIES",
    title: "Find Your Perfect Match",
    subtitle: "Discover a variety of property options tailored to your needs.",
    items: [
      { id: 1, icon: "Building2", title: "Apartments", description: "Modern apartments for individuals, couples and families." },
      { id: 2, icon: "Home", title: "Villas", description: "Spacious independent and gated-community villas." },
      { id: 3, icon: "Key", title: "Independent Houses", description: "Homes offering greater privacy and flexibility." },
      { id: 4, icon: "Map", title: "Plots", description: "Residential and selected development plots." },
      { id: 5, icon: "Briefcase", title: "Commercial Offices", description: "Workspaces for businesses and professionals." },
      { id: 6, icon: "ShoppingBag", title: "Retail Spaces", description: "Commercial spaces suitable for retail and service businesses." }
    ]
  },

  featuredPropertiesConfig: {
    badge: "FEATURED LISTINGS",
    title: "Featured Properties",
    subtitle: "Explore our handpicked selection of premium demo properties.",
    items: [
      {
        title: "Skyline Residences",
        price: "₹1.35 Cr*",
        specs: "3 BHK Apartment • 1,485 sq. ft. • Ready to Move",
        location: "Baner, Pune",
        image: "/images/realestate/prop-1.jpg"
      },
      {
        title: "Greenview Heights",
        price: "₹98 Lakh*",
        specs: "2 BHK Apartment • 1,120 sq. ft. • Under Development",
        location: "Whitefield, Bengaluru",
        image: "/images/realestate/prop-2.jpg"
      },
      {
        title: "The Courtyard Villa",
        price: "₹2.45 Cr*",
        specs: "4 BHK Villa • 2,850 sq. ft. • Ready to Move",
        location: "Wakad, Pune",
        image: "/images/realestate/prop-3.jpg"
      },
      {
        title: "Central Business Square",
        price: "₹1.10 Cr*",
        specs: "Commercial Office • 1,650 sq. ft. • Ready to Occupy",
        location: "Hinjewadi, Pune",
        image: "/images/realestate/prop-4.jpg"
      }
    ]
  },

  buyConfig: {
    badge: "Looking to Buy?",
    title: "Looking to Buy?",
    description: "Tell us what you are looking for and our team can help you explore suitable property options based on location, budget and requirements.",
    buttonText: "Find a Property",
    buttonHref: "#contact",
    phoneCallText: "Residential • Commercial • New Projects • Resale"
  },

  rentConfig: {
    badge: "Looking to Rent?",
    title: "Find a Rental That Fits Your Lifestyle.",
    description: "Browse 1 BHK, 2 BHK, 3 BHK, Furnished, Semi-Furnished, and Commercial options.",
    buttonText: "Explore Rentals",
    buttonHref: "#contact",
    phoneCallText: "Call for details: +91 98765 43210"
  },

  sellConfig: {
    badge: "Looking to Sell?",
    title: "Thinking About Selling Your Property?",
    subtitle: "Get guidance on positioning your property, understanding local market conditions and connecting with potential buyers.",
    steps: [
      { number: "01", icon: "FileText", title: "Share Details", description: "Share property details with our team." },
      { number: "02", icon: "Search", title: "Evaluation", description: "Property evaluation and market assessment." },
      { number: "03", icon: "Megaphone", title: "Marketing", description: "Marketing & Enquiries handling." },
      { number: "04", icon: "Eye", title: "Site Visits", description: "Coordinating potential buyer visits." },
      { number: "05", icon: "CheckCircle", title: "Closing", description: "Negotiation & transaction closing support." }
    ]
  },

  whyChooseUsConfig: {
    badge: "WHY CHOOSE US",
    title: "Why Choose Nestora",
    subtitle: "Professional advisory and transparent property transactions.",
    items: [
      { id: 1, icon: "MapPin", title: "Local Market Knowledge", description: "Understand neighbourhoods, pricing patterns and property options." },
      { id: 2, icon: "CheckSquare", title: "Curated Listings", description: "Focus on relevant properties based on client requirements." },
      { id: 3, icon: "Shield", title: "Transparent Guidance", description: "Explain important property details and process steps clearly." },
      { id: 4, icon: "Target", title: "Personalised Search", description: "Shortlist properties based on budget, location and lifestyle needs." },
      { id: 5, icon: "Eye", title: "Site Visit Support", description: "Coordinate property visits where available." },
      { id: 6, icon: "Briefcase", title: "End-to-End Assistance", description: "Support clients through enquiry, evaluation, negotiation and documentation coordination." }
    ]
  },

  areasConfig: {
    badge: "AREAS WE SERVE",
    title: "Explore Popular Locations",
    subtitle: "Sample property markets across India.",
    items: [
      { id: 1, title: "Pune", category: "Maharashtra", image: "/images/realestate/prop-5.jpg" },
      { id: 2, title: "Mumbai", category: "Maharashtra", image: "/images/realestate/prop-6.jpg" },
      { id: 3, title: "Bengaluru", category: "Karnataka", image: "/images/realestate/prop-1.jpg" },
      { id: 4, title: "Delhi NCR", category: "North India", image: "/images/realestate/prop-2.jpg" }
    ]
  },

  advisorsConfig: {
    badge: "OUR TEAM",
    title: "Meet Our Property Advisors",
    subtitle: "Experienced professionals guiding your property journey.",
    items: [
      { name: "Rohan Mehta", role: "Senior Property Advisor", specialty: "Residential Properties — Pune", bio: "10+ Years Experience. Focuses on finding the perfect residential match for families and professionals.", image: "/images/realestate/prop-3.jpg" },
      { name: "Ananya Kapoor", role: "Property Consultant", specialty: "Premium Residential & Investment Properties", bio: "8+ Years Experience. Specializes in high-yield investments and luxury living spaces.", image: "/images/realestate/prop-4.jpg" },
      { name: "Vivek Sharma", role: "Commercial Property Advisor", specialty: "Office & Retail Spaces", bio: "12+ Years Experience. Helps businesses find the right commercial spaces for growth.", image: "/images/realestate/prop-5.jpg" }
    ]
  },

  buyingJourneyConfig: {
    badge: "PROCESS",
    title: "From Search to Possession, With Clarity.",
    subtitle: "Your property buying journey simplified.",
    steps: [
      { number: "01", icon: "MessageSquare", title: "Tell Us Your Requirements", description: "Share location, budget, property type and preferences." },
      { number: "02", icon: "List", title: "Shortlist Properties", description: "Review suitable options based on your requirements." },
      { number: "03", icon: "Eye", title: "Schedule Site Visits", description: "Visit selected properties and evaluate them in person." },
      { number: "04", icon: "PieChart", title: "Evaluate & Negotiate", description: "Compare options and discuss terms." },
      { number: "05", icon: "CheckCircle", title: "Complete the Transaction", description: "Coordinate with relevant professionals for documentation and closing." }
    ]
  },

  propertyAmenitiesConfig: {
    badge: "AMENITIES",
    title: "Common Property Features",
    subtitle: "Modern amenities for comfortable living.",
    items: [
      { id: 1, icon: "Car", title: "Parking", description: "Dedicated parking spaces." },
      { id: 2, icon: "Shield", title: "Security", description: "24/7 security and surveillance." },
      { id: 3, icon: "ArrowUp", title: "Lift", description: "High-speed elevators." },
      { id: 4, icon: "Zap", title: "Power Backup", description: "Uninterrupted power supply." },
      { id: 5, icon: "Activity", title: "Gym", description: "Fully equipped fitness centers." },
      { id: 6, icon: "Sun", title: "Garden / Balcony", description: "Open green spaces and private balconies." }
    ]
  },

  galleryConfig: {
    badge: "GALLERY",
    title: "Explore Our Properties",
    subtitle: "A glimpse into the properties we represent.",
    items: [
      { id: 1, title: "Living Room", category: "Interior", image: "/images/realestate/prop-6.jpg" },
      { id: 2, title: "Bedroom", category: "Interior", image: "/images/realestate/prop-1.jpg" },
      { id: 3, title: "Kitchen", category: "Interior", image: "/images/realestate/prop-2.jpg" },
      { id: 4, title: "Exterior", category: "Exterior", image: "/images/realestate/prop-3.jpg" },
      { id: 5, title: "Clubhouse", category: "Amenities", image: "/images/realestate/prop-4.jpg" },
      { id: 6, title: "Balcony View", category: "Exterior", image: "/images/realestate/prop-5.jpg" }
    ]
  },

  testimonialsConfig: {
    badge: "SAMPLE REVIEWS",
    title: "What Our Clients Say",
    subtitle: "Demo testimonials showcasing client experiences.",
    items: [
      { id: 1, name: "Amit Patel", role: "Sample Homebuyer", rating: 5, quote: "The team understood our location and budget requirements and helped us shortlist properties without wasting time.", avatar: "/images/realestate/about-main.jpg", verified: true, treatment: "Property Purchase" },
      { id: 2, name: "Sneha Rao", role: "Sample Client", rating: 5, quote: "Communication was clear throughout the property search and site visit process.", avatar: "/images/realestate/about-main.jpg", verified: true, treatment: "Property Rental" }
    ]
  },

  faqConfig: {
    badge: "FAQ",
    title: "Frequently Asked Questions",
    subtitle: "Common questions about buying, selling, and renting.",
    items: [
      { id: 1, category: "General", question: "How do I find a property through your agency?", answer: "Share your preferred location, budget and property requirements and the team can help identify suitable options." },
      { id: 2, category: "Services", question: "Do you help with property site visits?", answer: "Site visits can be coordinated for available properties." },
      { id: 3, category: "Services", question: "Do you help sell properties?", answer: "Yes, property owners can submit their details for an initial discussion." },
      { id: 4, category: "Services", question: "Do you handle rental properties?", answer: "Rental support can be configured based on the markets and property types served." },
      { id: 5, category: "General", question: "Can I list my property?", answer: "Yes, use the property listing enquiry form to share your property details." },
      { id: 6, category: "Legal", question: "What documents are needed to buy a property?", answer: "Documentation varies by transaction and property type. Buyers should verify requirements with the relevant legal and professional advisors." },
      { id: 7, category: "Services", question: "Do you provide property valuation?", answer: "Valuation support can be offered depending on the agency's services. Configure this feature accordingly." },
      { id: 8, category: "General", question: "Do you guarantee property appreciation?", answer: "No. Property values can change based on market conditions, location and other factors." }
    ]
  },

  enquiryCtaConfig: {
    badge: "CONTACT US",
    title: "Tell Us What You're Looking For",
    description: "Share your property requirements, budget, or listing details and our advisors will connect with you.",
    buttonText: "Submit Enquiry",
    buttonHref: "#contact",
    phoneCallText: "WhatsApp Us: +91 98765 43210"
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
