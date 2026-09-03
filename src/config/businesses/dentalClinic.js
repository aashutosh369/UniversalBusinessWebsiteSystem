export const dentalClinicConfig = {
  id: "dental-clinic",
  name: "Dentora Dental Care",
  shortName: "Dentora",
  businessType: "Dental Clinic",
  tagline: "Advanced Dental & Oral Care",
  badge: "Trusted Dental Care",

  theme: {
    id: "clinic-dental",
    colors: {
      primary: { DEFAULT: '#0f766e', light: '#14b8a6', dark: '#0d9488', foreground: '#ffffff' },
      secondary: { DEFAULT: '#1e293b', light: '#334155', foreground: '#f8fafc' },
      accent: { DEFAULT: '#059669', light: '#10b981', foreground: '#ffffff' },
      surface: { DEFAULT: '#F7F9F9', muted: '#F7F9F9', card: '#ffffff', glass: 'rgba(255, 255, 255, 0.90)' },
      text: { primary: '#1e293b', secondary: '#475569' },
      border: 'rgba(15, 118, 110, 0.10)'
    },
    typography: { heading: "'Inter', sans-serif", body: "'Inter', sans-serif" },
    radius: { brand: '0.5rem', card: '0.75rem', btn: '0.5rem' },
    glass: { blur: '8px', border: 'rgba(15, 118, 110, 0.10)' }
  },

  logo: { icon: "Smile", text: "DENTORA", subtext: "ADVANCED DENTAL & ORAL CARE" },

  contact: {
    phone: "+91 98765 43210",
    email: "hello@dentora-demo.in",
    whatsapp: "919876543210",
    whatsappMessage: "Hello Dentora Dental Care, I would like to inquire about booking a dental consultation.",
    address: "2nd Floor, Meridian Plaza, MG Road, Pune, Maharashtra",
    operatingHours: [
      { days: "Mon - Sat", hours: "9:00 AM - 8:00 PM" },
      { days: "Sun", hours: "By Appointment" }
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d121058.93187091677!2d73.7805654!3d18.5247663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },

  mobileActions: {
    call: true,
    whatsapp: true,
    primaryAction: {
      label: "Book Appointment",
      target: "#contact"
    }
  },

  socialLinks: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com"
  },

  hero: {
    badge: "Trusted Dental Care for You & Your Family",
    title: "Healthy Smiles Start With the Right Care.",
    subtitle: "Modern dentistry, experienced dentists and personalised treatment plans — all under one roof.",
    description: "From routine dental check-ups and painless cleaning to advanced smile makeovers and restorative treatments, our team provides comfortable, transparent and personalised dental care for patients of all ages.",
    ctaPrimary: { text: "Book an Appointment", href: "#contact", icon: "Calendar" },
    ctaSecondary: { text: "WhatsApp the Clinic", href: "https://wa.me/919876543210", icon: "MessageSquare" },
    image: "/images/dental/hero.jpg",
    highlights: ["Experienced Dental Professionals", "Modern Dental Technology", "Family-Friendly Care"]
  },

  trustStats: {
    headline: "Trusted by Thousands of Patients",
    stats: [
      { id: 1, label: "Patients Served", value: "5,000+", icon: "Users", trend: "Sample Clinic Data" },
      { id: 2, label: "Years of Clinical Experience", value: "10+", icon: "Award", trend: "Sample Clinic Data" },
      { id: 3, label: "Dental Treatments", value: "15+", icon: "Activity", trend: "Sample Clinic Data" },
      { id: 4, label: "Patient Rating", value: "4.9/5", icon: "Star", trend: "Sample Clinic Data" }
    ],
    certifications: []
  },

  about: {
    badge: "ABOUT DENTORA",
    title: "Modern Dentistry With a Patient-First Approach.",
    subtitle: "At Dentora Dental Care, we believe dental treatment should be comfortable, transparent and personalised.",
    description: "Our approach combines experienced dental professionals, modern equipment and clear treatment guidance so patients can make informed decisions about their oral health.\n\nWhether you need a routine check-up, relief from dental pain, restorative treatment or a smile makeover, our team focuses on creating a comfortable experience from consultation to follow-up.",
    experienceYears: "10+",
    doctorsCount: "5+",
    proceduresDone: "10,000+",
    imageMain: "/images/dental/about-main.jpg",
    imageSecondary: "/images/dental/about-secondary.jpg",
    featuresList: [
      "Personalised Treatment Plans",
      "Modern Dental Equipment",
      "Transparent Treatment Guidance",
      "Family Dental Care",
      "Hygiene-Focused Environment",
      "Convenient Appointment Scheduling"
    ]
  },

  servicesConfig: {
    badge: "COMPLETE ORAL CARE",
    title: "Dental Care for Every Stage of Your Smile.",
    subtitle: "Explore our range of preventive, restorative and cosmetic dental treatments.",
    items: [
      {
        id: "dental-checkup",
        category: "Preventive",
        title: "Dental Check-up",
        shortDescription: "Routine examination to assess your teeth, gums and overall oral health.",
        fullDescription: "Routine examination to assess your teeth, gums and overall oral health.",
        duration: "30 Mins",
        price: "Starting from ₹500",
        popular: true,
        icon: "Search",
        image: "/images/dental/doctor-1.jpg",
        features: ["Oral examination", "Digital X-rays if needed", "Personalised advice"]
      },
      {
        id: "teeth-cleaning",
        category: "Preventive",
        title: "Teeth Cleaning & Polishing",
        shortDescription: "Professional cleaning to help remove plaque and tartar and maintain healthier teeth and gums.",
        fullDescription: "Professional cleaning to help remove plaque and tartar and maintain healthier teeth and gums.",
        duration: "45 Mins",
        price: "Starting from ₹1500",
        popular: true,
        icon: "Sparkles",
        image: "/images/dental/doctor-2.jpg",
        features: ["Tartar removal", "Stain removal", "Polishing"]
      },
      {
        id: "root-canal",
        category: "Restorative",
        title: "Root Canal Treatment",
        shortDescription: "Treatment designed to address infection or damage within a tooth while helping preserve the natural tooth.",
        fullDescription: "Treatment designed to address infection or damage within a tooth while helping preserve the natural tooth.",
        duration: "60 Mins",
        price: "Starting from ₹4000",
        popular: false,
        icon: "Activity",
        image: "/images/dental/doctor-1.jpg",
        features: ["Pain relief", "Tooth preservation", "Modern techniques"]
      },
      {
        id: "dental-fillings",
        category: "Restorative",
        title: "Dental Fillings",
        shortDescription: "Tooth-coloured restorative fillings for treating cavities and restoring damaged teeth.",
        fullDescription: "Tooth-coloured restorative fillings for treating cavities and restoring damaged teeth.",
        duration: "30 Mins",
        price: "Starting from ₹1000",
        popular: false,
        icon: "Shield",
        image: "/images/dental/doctor-2.jpg",
        features: ["Tooth-coloured material", "Durable", "Prevents further decay"]
      },
      {
        id: "crowns-bridges",
        category: "Restorative",
        title: "Dental Crowns & Bridges",
        shortDescription: "Restorative solutions designed to protect damaged teeth and replace missing teeth.",
        fullDescription: "Restorative solutions designed to protect damaged teeth and replace missing teeth.",
        duration: "Varies",
        price: "Starting from ₹5000",
        popular: false,
        icon: "Layers",
        image: "/images/dental/doctor-1.jpg",
        features: ["Custom fit", "Natural look", "Durable materials"]
      },
      {
        id: "teeth-whitening",
        category: "Cosmetic",
        title: "Teeth Whitening",
        shortDescription: "Professional cosmetic whitening options for a brighter-looking smile.",
        fullDescription: "Professional cosmetic whitening options for a brighter-looking smile.",
        duration: "60 Mins",
        price: "Starting from ₹5000",
        popular: true,
        icon: "Sun",
        image: "/images/dental/doctor-2.jpg",
        features: ["Noticeable results", "Safe procedure", "Custom trays available"]
      },
      {
        id: "braces",
        category: "Orthodontics",
        title: "Braces & Orthodontics",
        shortDescription: "Orthodontic treatment options to improve tooth alignment and bite.",
        fullDescription: "Orthodontic treatment options to improve tooth alignment and bite.",
        duration: "Varies",
        price: "Starting from ₹30000",
        popular: false,
        icon: "Smile",
        image: "/images/dental/doctor-1.jpg",
        features: ["Metal & Ceramic options", "Bite correction", "Long-term results"]
      },
      {
        id: "clear-aligners",
        category: "Orthodontics",
        title: "Clear Aligners",
        shortDescription: "Discreet orthodontic treatment using removable clear aligners, where clinically suitable.",
        fullDescription: "Discreet orthodontic treatment using removable clear aligners, where clinically suitable.",
        duration: "Varies",
        price: "Starting from ₹50000",
        popular: true,
        icon: "CheckCircle",
        image: "/images/dental/doctor-2.jpg",
        features: ["Nearly invisible", "Removable", "Comfortable"]
      },
      {
        id: "dental-implants",
        category: "Restorative",
        title: "Dental Implants",
        shortDescription: "A long-term tooth replacement option for suitable patients with missing teeth.",
        fullDescription: "A long-term tooth replacement option for suitable patients with missing teeth.",
        duration: "Varies",
        price: "Starting from ₹25000",
        popular: false,
        icon: "Anchor",
        image: "/images/dental/doctor-1.jpg",
        features: ["Permanent solution", "Natural function", "Prevents bone loss"]
      },
      {
        id: "wisdom-tooth",
        category: "Surgical",
        title: "Wisdom Tooth Treatment",
        shortDescription: "Assessment and treatment planning for discomfort or complications related to wisdom teeth.",
        fullDescription: "Assessment and treatment planning for discomfort or complications related to wisdom teeth.",
        duration: "45 Mins",
        price: "Starting from ₹3000",
        popular: false,
        icon: "Scissors",
        image: "/images/dental/doctor-2.jpg",
        features: ["Safe extraction", "Pain management", "Quick recovery protocols"]
      },
      {
        id: "pediatric",
        category: "Pediatric",
        title: "Pediatric Dentistry",
        shortDescription: "Friendly dental care designed around children's oral health and comfort.",
        fullDescription: "Friendly dental care designed around children's oral health and comfort.",
        duration: "30 Mins",
        price: "Starting from ₹800",
        popular: false,
        icon: "Heart",
        image: "/images/dental/doctor-1.jpg",
        features: ["Child-friendly approach", "Preventive care", "Fluoride treatments"]
      },
      {
        id: "smile-design",
        category: "Cosmetic",
        title: "Smile Design",
        shortDescription: "Personalised cosmetic treatment planning to improve the appearance of your smile.",
        fullDescription: "Personalised cosmetic treatment planning to improve the appearance of your smile.",
        duration: "Varies",
        price: "Starting from ₹15000",
        popular: false,
        icon: "Camera",
        image: "/images/dental/doctor-2.jpg",
        features: ["Digital planning", "Veneers", "Complete makeover"]
      }
    ]
  },

  featuresConfig: {
    badge: "WHY CHOOSE US",
    title: "Why Patients Choose Dentora",
    subtitle: "We combine experienced care with modern technology for a comfortable experience.",
    items: [
      { id: 1, icon: "Users", title: "Experienced Dental Team", description: "Qualified dental professionals focused on personalised care." },
      { id: 2, icon: "Cpu", title: "Modern Dental Technology", description: "Modern equipment to support diagnosis and treatment planning." },
      { id: 3, icon: "Smile", title: "Comfortable Environment", description: "A clean and welcoming clinic designed to reduce dental anxiety." },
      { id: 4, icon: "FileText", title: "Transparent Guidance", description: "Clear explanations of treatment options before proceeding." },
      { id: 5, icon: "Heart", title: "Family-Friendly Dentistry", description: "Dental care options for children, adults and seniors." },
      { id: 6, icon: "Calendar", title: "Convenient Appointments", description: "Easy appointment booking through phone and WhatsApp." }
    ]
  },

  stepsConfig: {
    badge: "PATIENT JOURNEY",
    title: "Your Visit, Made Simple.",
    subtitle: "This section should reduce friction for first-time patients.",
    steps: [
      {
        number: "01",
        icon: "Phone",
        title: "Book an Appointment",
        description: "Call or WhatsApp the clinic to schedule your visit."
      },
      {
        number: "02",
        icon: "MessageSquare",
        title: "Dental Consultation",
        description: "Discuss your concerns with the dentist in a comfortable setting."
      },
      {
        number: "03",
        icon: "FileText",
        title: "Treatment Plan",
        description: "Understand the recommended treatment options and clear pricing."
      },
      {
        number: "04",
        icon: "Heart",
        title: "Follow-Up Care",
        description: "Continue with appropriate follow-up and preventive care for a lasting smile."
      }
    ]
  },

  technologyConfig: {
    badge: "OUR CLINIC",
    title: "Modern Dentistry. Thoughtful Experience.",
    subtitle: "We invest in modern equipment and maintain strict hygiene protocols to ensure a safe and comfortable visit.",
    image: "/images/dental/doctor-1.jpg",
    items: [
      { id: 1, icon: "Camera", title: "Digital Dental Imaging", description: "For accurate diagnosis and treatment planning." },
      { id: 2, icon: "Tool", title: "Modern Treatment Equipment", description: "To ensure efficient and comfortable procedures." },
      { id: 3, icon: "Shield", title: "Sterilisation & Hygiene Practices", description: "Strict protocols for patient safety." },
      { id: 4, icon: "Smile", title: "Comfortable Treatment Rooms", description: "Designed to reduce anxiety and promote relaxation." },
      { id: 5, icon: "Smartphone", title: "Digital Appointment Management", description: "Easy booking and reminders via WhatsApp." }
    ]
  },

  doctorsConfig: {
    badge: "OUR TEAM",
    title: "Meet Our Dental Care Team",
    subtitle: "Experienced professionals committed to healthier smiles.",
    items: [
      {
        id: 1,
        name: "Dr. Riya Mehta",
        role: "BDS, MDS — Conservative Dentistry & Endodontics",
        experience: "10+ Years",
        bio: "Focused on restorative dentistry, root canal treatment and preventive oral care.",
        image: "/images/dental/doctor-2.jpg",
        specialties: ["Root Canal", "Restorative"]
      },
      {
        id: 2,
        name: "Dr. Arjun Kapoor",
        role: "BDS, MDS — Orthodontics",
        experience: "8+ Years",
        bio: "Specialises in orthodontic treatment, bite correction and clear aligner planning.",
        image: "/images/dental/doctor-1.jpg",
        specialties: ["Braces", "Clear Aligners"]
      },
      {
        id: 3,
        name: "Dr. Neha Sharma",
        role: "BDS — Pediatric & Preventive Dentistry",
        experience: "6+ Years",
        bio: "Focused on creating comfortable and positive dental experiences for children.",
        image: "/images/dental/doctor-2.jpg",
        specialties: ["Pediatric Care", "Preventive"]
      }
    ]
  },

  galleryConfig: {
    badge: "Visual Showcase",
    title: "Inside Our Clinic",
    subtitle: "A clean, modern, and welcoming environment.",
    items: [
      { id: 1, title: "Clinic Reception", category: "Facility", image: "/images/dental/doctor-1.jpg" },
      { id: 2, title: "Treatment Room", category: "Facility", image: "/images/dental/doctor-2.jpg" },
      { id: 3, title: "Dental Equipment", category: "Technology", image: "/images/dental/doctor-1.jpg" },
      { id: 4, title: "Consultation Area", category: "Facility", image: "/images/dental/doctor-2.jpg" }
    ]
  },

  testimonialsConfig: {
    badge: "Sample Patient Experiences",
    title: "What Our Patients Say",
    subtitle: "Feedback from our demo clinic patients.",
    items: [
      {
        id: 1,
        name: "Sample Patient A",
        role: "Patient",
        rating: 5,
        quote: "I appreciated how clearly the dentist explained every step before starting the treatment. The entire experience felt comfortable and professional.",
        avatar: "/images/dental/about-main.jpg",
        verified: true,
        treatment: "Dental Check-up"
      },
      {
        id: 2,
        name: "Sample Patient B",
        role: "Patient",
        rating: 5,
        quote: "The clinic environment was clean and welcoming, and the team was very helpful throughout my visit.",
        avatar: "/images/dental/about-main.jpg",
        verified: true,
        treatment: "Root Canal"
      }
    ]
  },

  faqConfig: {
    badge: "FAQ",
    title: "Frequently Asked Questions",
    subtitle: "Common questions about appointments, treatments, and our clinic.",
    items: [
      { id: 1, category: "Appointments", question: "How do I book a dental appointment?", answer: "You can contact the clinic by phone or WhatsApp to request an appointment." },
      { id: 2, category: "Appointments", question: "Do I need an appointment for a dental check-up?", answer: "Appointments are recommended so the clinic can allocate sufficient time for your consultation." },
      { id: 3, category: "General", question: "What should I bring to my first appointment?", answer: "Bring any previous dental records, prescriptions or relevant medical information that may help your dentist understand your history." },
      { id: 4, category: "Pediatric", question: "Do you treat children?", answer: "Yes, pediatric dental care can be offered where the clinic has the appropriate dental professional and facilities." },
      { id: 5, category: "Treatments", question: "Do you offer braces or clear aligners?", answer: "Orthodontic treatment options can be discussed during a consultation to determine what may be suitable." },
      { id: 6, category: "General", question: "How long does a dental appointment take?", answer: "Appointment duration depends on the type of consultation or treatment. The clinic can provide an estimate when booking." },
      { id: 7, category: "Pricing", question: "How can I know the cost of treatment?", answer: "Treatment costs vary depending on the diagnosis and recommended treatment plan. The clinic can explain the expected cost during consultation." },
      { id: 8, category: "General", question: "Do you accept walk-ins?", answer: "Availability may vary. Patients are encouraged to call or WhatsApp before visiting." }
    ]
  },

  cta: {
    badge: "Experiencing Sudden Dental Pain?",
    title: "Take the First Step Toward a Healthier Smile.",
    description: "Book a consultation and discuss your dental concerns with our team. Contact us to check availability for emergencies.",
    buttonText: "Book Appointment",
    buttonHref: "#contact",
    phoneCallText: "WhatsApp Us: +91 98765 43210"
  },

  sections: [
    { id: "hero", enabled: true, order: 1 },
    { id: "trustBar", enabled: true, order: 2 },
    { id: "about", enabled: true, order: 3 },
    { id: "services", enabled: true, order: 4 },
    { id: "features", enabled: true, order: 5 },
    { id: "doctors", enabled: true, order: 6 },
    { id: "steps", enabled: true, order: 7 },
    { id: "technology", enabled: true, order: 8 },
    { id: "gallery", enabled: true, order: 9 },
    { id: "testimonials", enabled: true, order: 10 },
    { id: "faq", enabled: true, order: 11 },
    { id: "cta", enabled: true, order: 12 },
    { id: "contact", enabled: true, order: 13 }
  ]
};

export default dentalClinicConfig;
