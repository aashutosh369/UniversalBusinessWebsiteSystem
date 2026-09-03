import defaultServices from '../data/services';
import defaultTestimonials from '../data/testimonials';
import defaultFAQs from '../data/faq';
import defaultGallery from '../data/gallery';
import defaultTrustStats from '../data/trustStats';
import defaultFeatures from '../data/features';

/**
 * Master Business Configuration
 * Everything about the business (Name, Type, Contact, Copywriting, Services, Sections control)
 * is centralized here. Modifying this single config allows re-skinning for any business type!
 */
export const businessConfig = {
  // Business Basics
  id: "aura-aesthetic-clinic",
  name: "Aura Aesthetic & Medical Spa",
  shortName: "Aura Clinic",
  businessType: "Clinic", // Salon, Gym, Clinic, Coaching, Consultant, Restaurant, Real Estate, Local Service
  tagline: "Premier Medical Aesthetics & Cellular Rejuvenation Clinic",
  badge: "FDA Approved Medical Spa",
  
  logo: {
    icon: "Sparkles", // Lucide Icon Name
    text: "AURA",
    subtext: "CLINIC & SPA"
  },

  // Contact Information
  contact: {
    phone: "+1 (800) 555-0199",
    altPhone: "+1 (800) 555-0188",
    email: "concierge@aurawellness.com",
    whatsapp: "18005550199",
    whatsappMessage: "Hello Aura Clinic, I would like to inquire about booking a skin consultation.",
    address: "450 Luxury Avenue, Suite 800, Beverly Hills, CA 90210",
    operatingHours: [
      { days: "Monday - Friday", hours: "9:00 AM - 8:00 PM" },
      { days: "Saturday", hours: "10:00 AM - 6:00 PM" },
      { days: "Sunday", hours: "By VIP Reservation Only" }
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26430.79322405073!2d-118.4116492!3d34.0736204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d6d74701%3A0x5a188f114c000f0!2sBeverly%20Hills%2C%20CA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
  },

  // Social Links
  socialLinks: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com"
  },

  // Hero Section Config
  hero: {
    badge: "✨ 2026 Award-Winning Medical Aesthetic Clinic",
    title: "Reveal Your Radiant, Timeless Skin Confidence",
    titleHighlight: "Timeless Skin Confidence",
    subtitle: "Experience advanced FDA-cleared laser skin resurfacing, medical hydra-facials, and personalized anti-aging therapies delivered by board-certified physicians in 7-star luxury.",
    ctaPrimary: {
      text: "Book Complimentary Consultation",
      href: "#contact",
      icon: "Calendar"
    },
    ctaSecondary: {
      text: "Explore Our Treatments",
      href: "#services",
      icon: "ArrowRight"
    },
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
    highlights: [
      "100% Board Certified Physicians",
      "FDA-Cleared German Technology",
      "Painless & Zero Downtime"
    ]
  },

  // About Section Config
  about: {
    badge: "About Aura Wellness",
    title: "Where Medical Science Meets Luxury Spa Hospitality",
    subtitle: "Founded in 2014, Aura Aesthetic & Medical Spa has set the golden standard for non-invasive clinical rejuvenation.",
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

  // Services Config
  servicesConfig: {
    badge: "Our Specialized Treatments",
    title: "Clinical Medical Aesthetic Solutions",
    subtitle: "Explore our range of physician-administered skin resurfacing, anti-aging, and wellness therapies.",
    items: defaultServices
  },

  // Trust & Stats Config
  trustStats: defaultTrustStats,

  // Features / Why Choose Us Config
  featuresConfig: defaultFeatures,

  // Testimonials Config
  testimonialsConfig: {
    badge: "Client Stories",
    title: "What Our Patients Say About Aura",
    subtitle: "Over 2,400+ 5-star verified reviews from satisfied clients who reclaimed their glowing skin confidence.",
    items: defaultTestimonials
  },

  // Gallery Config
  galleryConfig: {
    badge: "Visual Showcase",
    title: "Experience Aura Sanctuary & Outcomes",
    subtitle: "Take a peek inside our 7-star facility and witness real patient transformations.",
    items: defaultGallery
  },

  // FAQ Config
  faqConfig: {
    badge: "Frequently Asked Questions",
    title: "Everything You Need to Know",
    subtitle: "Have questions before your visit? Find clear answers regarding our clinical procedures, safety, and scheduling.",
    items: defaultFAQs
  },

  // CTA Section Config
  cta: {
    badge: "Ready For Luminous Skin?",
    title: "Begin Your Aesthetic Transformation Today",
    description: "Book your initial consultation with our board-certified aesthetic doctors and receive a complimentary 3D Skin Diagnostic Analysis valued at $150.",
    buttonText: "Claim Complimentary Consultation",
    buttonHref: "#contact",
    phoneCallText: "Or call direct: +1 (800) 555-0199"
  },

  // Section Ordering & Enabled Controls
  // This array dictates which sections render and in what order!
  sections: [
    { id: "hero", name: "Hero Section", enabled: true, order: 1 },
    { id: "trustBar", name: "Trust Indicators & Stats", enabled: true, order: 2 },
    { id: "about", name: "About Business", enabled: true, order: 3 },
    { id: "services", name: "Services Directory", enabled: true, order: 4 },
    { id: "features", name: "Why Choose Us", enabled: true, order: 5 },
    { id: "gallery", name: "Image Gallery", enabled: true, order: 6 },
    { id: "testimonials", name: "Client Reviews", enabled: true, order: 7 },
    { id: "faq", name: "FAQ Accordion", enabled: true, order: 8 },
    { id: "cta", name: "Conversion Banner", enabled: true, order: 9 },
    { id: "contact", name: "Contact & Location", enabled: true, order: 10 }
  ]
};

export default businessConfig;
