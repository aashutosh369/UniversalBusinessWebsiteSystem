export const gymConfig = {
  id: "gym",
  name: "IronCore Fitness",
  shortName: "IronCore",
  businessType: "Fitness Center",
  tagline: "Build Strength. Build Confidence.",
  badge: "Modern Fitness Center",

  theme: {
    id: "theme-gym",
    colors: {
      primary: { DEFAULT: '#ef4444', light: '#f87171', dark: '#b91c1c', foreground: '#ffffff' },
      secondary: { DEFAULT: '#0f172a', light: '#1e293b', foreground: '#f8fafc' },
      accent: { DEFAULT: '#f59e0b', light: '#fbbf24', foreground: '#ffffff' },
      surface: { DEFAULT: '#020617', muted: '#0f172a', card: '#1e293b', glass: 'rgba(15, 23, 42, 0.90)' },
      text: { primary: '#f8fafc', secondary: '#94a3b8' },
      border: 'rgba(239, 68, 68, 0.20)'
    },
    typography: { heading: "'Teko', sans-serif", body: "'Inter', sans-serif" },
    radius: { brand: '0rem', card: '0.25rem', btn: '0.25rem' },
    glass: { blur: '10px', border: 'rgba(239, 68, 68, 0.20)' }
  },

  logo: { icon: "Dumbbell", text: "IRONCORE", subtext: "FITNESS" },

  contact: {
    phone: "+91 98765 43210",
    email: "hello@ironcorefitness.in",
    whatsapp: "919876543210",
    whatsappMessage: "Hello IronCore Fitness, I'm interested in joining the gym.",
    address: "Sector 62, Noida, Uttar Pradesh",
    operatingHours: [
      { days: "Mon - Sat", hours: "5:30 AM - 10:00 PM" },
      { days: "Sun", hours: "7:00 AM - 1:00 PM" }
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.5620658428357!2d77.3592186150821!3d28.61291198242557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce56e3b5e14d1%3A0xc6c761b608827720!2sSector%2062%2C%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
  },
  
  mobileActions: {
    call: true,
    whatsapp: true,
    primaryAction: { label: "Join Now", target: "#contact" }
  },
  
  socialLinks: { instagram: "https://instagram.com", facebook: "https://facebook.com", twitter: "https://twitter.com" },

  hero: {
    badge: "Join the IronCore Community",
    title: "Build Strength. Build Confidence.",
    subtitle: "Modern equipment, experienced trainers and a supportive fitness community to help you reach your goals.",
    description: "New Member Offer — Get 20% OFF on your first 3 months. Start your fitness journey today.",
    ctaPrimary: { text: "Join Now", href: "#contact", icon: "Activity" },
    ctaSecondary: { text: "View Membership Plans", href: "#services", icon: "CreditCard" },
    image: "https://loremflickr.com/800/600/gym,workout?lock=47",
    highlights: ["Modern Equipment", "Certified Trainers", "Clean & Hygienic"]
  },

  about: {
    badge: "ABOUT IRONCORE",
    title: "Focused on strength, fitness and overall well-being.",
    subtitle: "IronCore Fitness is a modern fitness centre in Noida.",
    description: "Whether you are starting your fitness journey or working towards advanced goals, our trainers and equipment are here to support you. We provide a clean, energetic, and beginner-friendly environment with state-of-the-art facilities.",
    experienceYears: "7+",
    doctorsCount: "15+", 
    proceduresDone: "2,000+", 
    imageMain: "https://loremflickr.com/800/600/gym,weights?lock=48",
    imageSecondary: "https://loremflickr.com/800/600/fitness,training?lock=49",
    featuresList: ["Modern Fitness Equipment", "Certified Trainers", "Clean & Hygienic Facility", "Separate Changing Rooms", "Flexible Membership Plans", "Beginner-Friendly Environment"]
  },

  servicesConfig: {
    badge: "OUR PROGRAMS",
    title: "Training Programs",
    subtitle: "Designed to help you reach your fitness goals.",
    items: [
      { id: "p1", category: "Training", title: "General Fitness", shortDescription: "Improve overall health and stamina.", fullDescription: "Improve overall health and stamina.", duration: "Daily", price: "Included", popular: true, icon: "Activity", image: "https://loremflickr.com/800/600/fitness?lock=50", features: ["Cardio", "Basic Strength", "Stretching"] },
      { id: "p2", category: "Strength", title: "Weight Training", shortDescription: "Build strength with free weights and machines.", fullDescription: "Build strength with free weights and machines.", duration: "Daily", price: "Included", popular: true, icon: "Dumbbell", image: "https://loremflickr.com/800/600/weightlifting?lock=51", features: ["Free Weights", "Machines", "Form Guidance"] },
      { id: "p3", category: "Goal-Oriented", title: "Fat Loss Program", shortDescription: "Structured workouts focused on fat loss.", fullDescription: "Structured workouts focused on fat loss.", duration: "Custom", price: "Included", popular: true, icon: "Flame", image: "https://loremflickr.com/800/600/cardio,workout?lock=52", features: ["HIIT", "Cardio", "Diet Guidance"] },
      { id: "p4", category: "Goal-Oriented", title: "Muscle Building", shortDescription: "Hypertrophy focused training plans.", fullDescription: "Hypertrophy focused training plans.", duration: "Custom", price: "Included", popular: false, icon: "Target", image: "https://loremflickr.com/800/600/fitness,training?lock=53", features: ["Progressive Overload", "Strength Focus", "Diet Guidance"] },
      { id: "p5", category: "Specialized", title: "Personal Training", shortDescription: "1-on-1 coaching for accelerated results.", fullDescription: "1-on-1 coaching for accelerated results.", duration: "Hourly", price: "Add-on", popular: true, icon: "User", image: "https://loremflickr.com/800/600/gym,weights?lock=54", features: ["Custom Plan", "Form Correction", "Motivation"] },
      { id: "p6", category: "Training", title: "Functional Training", shortDescription: "Improve agility, balance, and core strength.", fullDescription: "Improve agility, balance, and core strength.", duration: "Daily", price: "Included", popular: false, icon: "Crosshair", image: "https://loremflickr.com/800/600/fitness?lock=55", features: ["Kettlebells", "TRX", "Plyometrics"] },
      { id: "p7", category: "Cardio", title: "Cardio Training", shortDescription: "Enhance cardiovascular health.", fullDescription: "Enhance cardiovascular health.", duration: "Daily", price: "Included", popular: false, icon: "Heart", image: "https://loremflickr.com/800/600/cardio,workout?lock=56", features: ["Treadmills", "Ellipticals", "Cycling"] },
      { id: "p8", category: "Strength", title: "Strength & Conditioning", shortDescription: "Advanced athletic performance training.", fullDescription: "Advanced athletic performance training.", duration: "Custom", price: "Included", popular: false, icon: "Zap", image: "https://loremflickr.com/800/600/gym,workout?lock=57", features: ["Powerlifting", "Agility Drills", "Endurance"] }
    ]
  },

  featuresConfig: {
    badge: "MEMBERSHIP PLANS",
    title: "Choose Your Membership",
    subtitle: "Flexible options tailored to your needs.",
    items: [
      { id: 1, icon: "User", title: "Basic — ₹999/month", description: "Gym Access, Cardio Area, Strength Equipment." },
      { id: 2, icon: "Users", title: "Standard — ₹1,499/month", description: "Full Gym Access, Cardio & Strength Training, Basic Trainer Guidance, Diet Guidance." },
      { id: 3, icon: "Star", title: "Premium — ₹2,499/month", description: "Full Gym Access, Personal Trainer, Customized Workout Plan, Basic Nutrition Guidance, Progress Tracking." }
    ]
  },

  stepsConfig: {
    badge: "GET STARTED",
    title: "Start Your Fitness Journey",
    subtitle: "Joining IronCore is easy and straightforward.",
    steps: [
      { number: "01", icon: "MapPin", title: "Visit the Gym", description: "Take a tour of our facility in Sector 62." },
      { number: "02", icon: "CreditCard", title: "Choose a Plan", description: "Select Basic, Standard, or Premium membership." },
      { number: "03", icon: "Activity", title: "Start Training", description: "Hit the floor and let our trainers guide you." }
    ]
  },

  galleryConfig: {
    badge: "OUR FACILITY",
    title: "Inside IronCore Fitness",
    subtitle: "State-of-the-art equipment and spaces.",
    items: [
      { id: 1, title: "Cardio Section", category: "Equipment", image: "https://loremflickr.com/800/600/cardio,workout?lock=58" },
      { id: 2, title: "Free Weights Area", category: "Equipment", image: "https://loremflickr.com/800/600/gym,weights?lock=59" },
      { id: 3, title: "Strength Machines", category: "Equipment", image: "https://loremflickr.com/800/600/weightlifting?lock=60" },
      { id: 4, title: "Functional Training Zone", category: "Facility", image: "https://loremflickr.com/800/600/fitness?lock=61" }
    ]
  },

  testimonialsConfig: {
    badge: "MEMBER REVIEWS",
    title: "What Our Members Say",
    subtitle: "Real feedback from our fitness community.",
    items: [
      { id: 1, name: "Vikram Sharma", role: "Member", rating: 5, quote: "Great gym with good equipment and supportive trainers.", avatar: "https://loremflickr.com/800/600/indian,man,face?lock=62", verified: true, treatment: "Standard Plan" },
      { id: 2, name: "Anjali Gupta", role: "Member", rating: 5, quote: "The trainers actually guide you instead of just giving you a workout.", avatar: "https://loremflickr.com/800/600/indian,woman,face?lock=63", verified: true, treatment: "Premium Plan" },
      { id: 3, name: "Karan Patel", role: "Member", rating: 5, quote: "Good atmosphere, clean equipment and reasonable membership fees.", avatar: "https://loremflickr.com/800/600/indian,man,face?lock=64", verified: true, treatment: "Basic Plan" }
    ]
  },

  faqConfig: {
    badge: "FAQ",
    title: "Frequently Asked Questions",
    subtitle: "Everything you need to know about joining.",
    items: [
      { id: 1, category: "Membership", question: "Do you offer trial classes?", answer: "Yes, you can drop by for a 1-day free trial session before committing to a membership." },
      { id: 2, category: "Facilities", question: "Are there separate changing rooms and lockers?", answer: "Yes, we have clean and secure separate changing rooms and lockers for men and women." },
      { id: 3, category: "Training", question: "Is personal training mandatory?", answer: "No, personal training is optional. Our floor trainers are always available for basic guidance and spotting." }
    ]
  },

  cta: {
    badge: "Limited Time Offer",
    title: "New Member Offer — Get 20% OFF",
    description: "Sign up for your first 3 months and get 20% off. Join the IronCore community today.",
    buttonText: "Join Now",
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

export default gymConfig;
