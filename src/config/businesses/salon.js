export const salonConfig = {
  id: "salon",
  name: "Glow & Grace Salon",
  shortName: "Glow & Grace",
  businessType: "Beauty Salon",
  tagline: "Look Good. Feel Confident.",
  badge: "Premium Beauty Services",

  theme: {
    id: "theme-salon",
    colors: {
      primary: { DEFAULT: '#be185d', light: '#db2777', dark: '#9d174d', foreground: '#ffffff' },
      secondary: { DEFAULT: '#18181b', light: '#27272a', foreground: '#f8fafc' },
      accent: { DEFAULT: '#d97706', light: '#f59e0b', foreground: '#ffffff' },
      surface: { DEFAULT: '#fdf2f8', muted: '#fce7f3', card: '#ffffff', glass: 'rgba(255, 255, 255, 0.90)' },
      text: { primary: '#18181b', secondary: '#3f3f46' },
      border: 'rgba(190, 24, 93, 0.10)'
    },
    typography: { heading: "'Playfair Display', serif", body: "'Inter', sans-serif" },
    radius: { brand: '0.75rem', card: '1rem', btn: '9999px' },
    glass: { blur: '12px', border: 'rgba(190, 24, 93, 0.10)' }
  },

  logo: { icon: "Scissors", text: "GLOW & GRACE", subtext: "PREMIUM SALON" },

  contact: {
    phone: "+91 98765 43210",
    email: "hello@glowandgrace.in",
    whatsapp: "919876543210",
    whatsappMessage: "Hello Glow & Grace Salon, I would like to book an appointment.",
    address: "Gomti Nagar, Lucknow, Uttar Pradesh",
    operatingHours: [
      { days: "Mon - Sun", hours: "10:00 AM - 8:30 PM" }
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.877283914118!2d80.99616231504332!3d26.84391298315752!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399ce5bd22081919%3A0xc3c50119a0076a0a!2sGomti%20Nagar%2C%20Lucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },
  
  mobileActions: {
    call: true,
    whatsapp: true,
    primaryAction: { label: "Book Appointment", target: "#contact" }
  },
  
  socialLinks: { instagram: "https://instagram.com", facebook: "https://facebook.com", twitter: "https://twitter.com" },

  hero: {
    badge: "Welcome to Glow & Grace",
    title: "Look Good. Feel Confident.",
    subtitle: "Premium beauty and grooming services for women and men, delivered with care by experienced professionals.",
    description: "Get 15% OFF on your first visit. Book your appointment today and experience premium grooming at an affordable price.",
    ctaPrimary: { text: "Book an Appointment", href: "#contact", icon: "Calendar" },
    ctaSecondary: { text: "View Services", href: "#services", icon: "Sparkles" },
    image: "/images/salon/hero.jpg",
    highlights: ["Experienced Professionals", "Hygienic & Clean Environment", "Quality Beauty Products"]
  },

  about: {
    badge: "OUR STORY",
    title: "Dedicated to helping you look and feel your best.",
    subtitle: "Glow & Grace Salon is a modern unisex salon in Lucknow.",
    description: "From everyday grooming to special occasions, our experienced team provides quality services in a clean, comfortable and welcoming environment. We use only premium beauty products to ensure the best results for our clients.",
    experienceYears: "5+",
    doctorsCount: "10+", 
    proceduresDone: "5,000+", 
    imageMain: "/images/salon/about-main.jpg",
    imageSecondary: "/images/salon/about-secondary.jpg",
    featuresList: ["Experienced Professionals", "Hygienic & Clean Environment", "Quality Beauty Products", "Affordable Pricing", "Personalized Consultation", "Easy Appointment Booking"]
  },

  servicesConfig: {
    badge: "OUR SERVICES",
    title: "Premium Grooming & Beauty",
    subtitle: "Affordable luxury for men and women.",
    items: [
      { id: "s1", category: "Hair", title: "Haircut & Styling", shortDescription: "Expert haircuts and styling for all hair types.", fullDescription: "Expert haircuts and styling for all hair types.", duration: "30 Mins", price: "Starting from ₹299", popular: true, icon: "Scissors", image: "/images/salon/treatment-1.jpg", features: ["Consultation", "Hair Wash", "Styling"] },
      { id: "s2", category: "Hair", title: "Hair Spa", shortDescription: "Rejuvenating hair spa treatments.", fullDescription: "Rejuvenating hair spa treatments.", duration: "60 Mins", price: "Starting from ₹699", popular: false, icon: "Sparkles", image: "/images/salon/treatment-2.jpg", features: ["Deep Conditioning", "Head Massage", "Steam"] },
      { id: "s3", category: "Hair", title: "Hair Colour", shortDescription: "Global color, highlights, and touch-ups.", fullDescription: "Global color, highlights, and touch-ups.", duration: "90 Mins", price: "Starting from ₹999", popular: true, icon: "Palette", image: "/images/salon/treatment-3.jpg", features: ["Ammonia-free Options", "Expert Advice", "Color Protection"] },
      { id: "s4", category: "Skin", title: "Facial & Cleanup", shortDescription: "Refreshing facials for glowing skin.", fullDescription: "Refreshing facials for glowing skin.", duration: "45 Mins", price: "Starting from ₹499", popular: true, icon: "Smile", image: "/images/salon/treatment-4.jpg", features: ["Skin Analysis", "Deep Cleansing", "Hydration"] },
      { id: "s5", category: "Makeup", title: "Bridal Makeup", shortDescription: "Flawless bridal makeup for your special day.", fullDescription: "Flawless bridal makeup for your special day.", duration: "180 Mins", price: "Starting from ₹5,999", popular: false, icon: "Star", image: "/images/salon/treatment-1.jpg", features: ["HD Makeup", "Hair Styling", "Draping"] },
      { id: "s6", category: "Makeup", title: "Party Makeup", shortDescription: "Elegant makeup for parties and events.", fullDescription: "Elegant makeup for parties and events.", duration: "60 Mins", price: "Starting from ₹1,999", popular: false, icon: "Camera", image: "/images/salon/treatment-2.jpg", features: ["Base Setup", "Eye Makeup", "Setting"] },
      { id: "s7", category: "Body", title: "Manicure & Pedicure", shortDescription: "Complete hand and foot care.", fullDescription: "Complete hand and foot care.", duration: "45 Mins", price: "Starting from ₹599", popular: true, icon: "Activity", image: "/images/salon/treatment-3.jpg", features: ["Nail Shaping", "Cuticle Care", "Massage"] },
      { id: "s8", category: "Men", title: "Beard Styling", shortDescription: "Precision beard trimming and styling.", fullDescription: "Precision beard trimming and styling.", duration: "20 Mins", price: "Starting from ₹199", popular: true, icon: "Scissors", image: "/images/salon/treatment-4.jpg", features: ["Trimming", "Shaping", "Beard Wash"] },
      { id: "s9", category: "Men", title: "Men's Grooming Package", shortDescription: "Complete grooming package for men.", fullDescription: "Complete grooming package for men.", duration: "60 Mins", price: "Starting from ₹799", popular: false, icon: "User", image: "/images/salon/treatment-1.jpg", features: ["Haircut", "Beard Styling", "Cleanup"] },
      { id: "s10", category: "Women", title: "Women's Beauty Package", shortDescription: "Comprehensive beauty package for women.", fullDescription: "Comprehensive beauty package for women.", duration: "90 Mins", price: "Starting from ₹1,499", popular: false, icon: "Heart", image: "/images/salon/treatment-2.jpg", features: ["Facial", "Mani-Pedi", "Threading"] }
    ]
  },

  featuresConfig: {
    badge: "WHY CHOOSE US",
    title: "The Glow & Grace Experience",
    subtitle: "We prioritize hygiene, quality, and your comfort.",
    items: [
      { id: 1, icon: "Star", title: "Experienced Professionals", description: "Our stylists and therapists are highly trained." },
      { id: 2, icon: "Shield", title: "Hygienic Environment", description: "We follow strict sanitation and cleanliness protocols." },
      { id: 3, icon: "Award", title: "Quality Beauty Products", description: "Only premium, trusted brands are used for your skin and hair." },
      { id: 4, icon: "CreditCard", title: "Affordable Pricing", description: "Premium services at prices that won't break the bank." }
    ]
  },

  stepsConfig: {
    badge: "HOW IT WORKS",
    title: "Simple & Easy Booking",
    subtitle: "Get pampered in three easy steps.",
    steps: [
      { number: "01", icon: "Phone", title: "Book Appointment", description: "Call or WhatsApp us to schedule your visit." },
      { number: "02", icon: "MessageSquare", title: "Personalized Consultation", description: "Discuss your styling or skincare needs with our experts." },
      { number: "03", icon: "Sparkles", title: "Enjoy the Service", description: "Relax while our professionals work their magic." }
    ]
  },

  galleryConfig: {
    badge: "OUR SALON",
    title: "A Glimpse Inside",
    subtitle: "Clean, comfortable, and modern.",
    items: [
      { id: 1, title: "Styling Station", category: "Interior", image: "/images/salon/treatment-3.jpg" },
      { id: 2, title: "Hair Wash Area", category: "Facility", image: "/images/salon/treatment-4.jpg" },
      { id: 3, title: "Makeup Room", category: "Interior", image: "/images/salon/treatment-1.jpg" },
      { id: 4, title: "Premium Products", category: "Products", image: "/images/salon/treatment-2.jpg" }
    ]
  },

  testimonialsConfig: {
    badge: "CUSTOMER REVIEWS",
    title: "What Our Clients Say",
    subtitle: "Trusted by hundreds in Lucknow.",
    items: [
      { id: 1, name: "Sneha Verma", role: "Regular Client", rating: 5, quote: "The staff was professional and the service was excellent. Highly recommended.", avatar: "/images/salon/about-main.jpg", verified: true, treatment: "Hair Spa" },
      { id: 2, name: "Rahul Singh", role: "Client", rating: 5, quote: "Very clean salon with reasonable pricing and friendly staff.", avatar: "/images/salon/about-main.jpg", verified: true, treatment: "Men's Grooming" },
      { id: 3, name: "Priya Sharma", role: "Client", rating: 5, quote: "Loved my haircut and styling. Will definitely visit again.", avatar: "/images/salon/about-main.jpg", verified: true, treatment: "Haircut & Styling" }
    ]
  },

  faqConfig: {
    badge: "FAQ",
    title: "Frequently Asked Questions",
    subtitle: "Answers to common queries.",
    items: [
      { id: 1, category: "Booking", question: "Do I need to book in advance?", answer: "While we accept walk-ins, we highly recommend booking in advance to avoid waiting times." },
      { id: 2, category: "Services", question: "Are your products safe for sensitive skin?", answer: "Yes, we use high-quality, dermatologically tested products. Please inform us of any allergies before your service." },
      { id: 3, category: "General", question: "Do you offer bridal packages?", answer: "Yes, we offer comprehensive bridal makeup and pre-bridal packages. Contact us for detailed pricing." }
    ]
  },

  cta: {
    badge: "Special Offer",
    title: "Get 15% OFF on your first visit.",
    description: "Book your appointment today and experience premium grooming at an affordable price.",
    buttonText: "Book Now",
    buttonHref: "#contact",
    phoneCallText: "Call Us: +91 98765 43210"
  },

  sections: [
    { id: "hero", enabled: true, order: 1 },
    { id: "about", enabled: true, order: 2 },
    { id: "services", enabled: true, order: 3 },
    { id: "features", enabled: true, order: 4 },
    { id: "steps", enabled: true, order: 5 },
    { id: "gallery", enabled: true, order: 6 },
    { id: "testimonials", enabled: true, order: 7 },
    { id: "faq", enabled: true, order: 8 },
    { id: "cta", enabled: true, order: 9 },
    { id: "contact", enabled: true, order: 10 }
  ]
};

export default salonConfig;
