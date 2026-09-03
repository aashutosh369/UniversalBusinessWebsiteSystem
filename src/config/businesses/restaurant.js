export const restaurantConfig = {
  id: "restaurant",
  name: "Savor Artisan Bistro & Culinary Lounge",
  shortName: "Savor Bistro",
  businessType: "Restaurant",
  tagline: "Farm-to-Table Gastronomy, Woodfired Crafting & Fine Wines",
  badge: "Michelin Guide Recommended 2026",

  theme: {
    id: "restaurant-savor",
    colors: {
      primary: { DEFAULT: '#b91c1c', light: '#dc2626', dark: '#991b1b', foreground: '#ffffff' },
      secondary: { DEFAULT: '#1c1917', light: '#292524', foreground: '#fafaf9' },
      accent: { DEFAULT: '#d97706', light: '#f59e0b', foreground: '#ffffff' },
      surface: { DEFAULT: '#fdfbf7', muted: '#f5efe6', card: '#ffffff', glass: 'rgba(253, 251, 247, 0.88)' },
      text: { primary: '#1c1917', secondary: '#44403c' },
      border: 'rgba(185, 28, 28, 0.15)'
    },
    typography: { heading: "'Playfair Display', serif", body: "'Inter', sans-serif" },
    radius: { brand: '1rem', card: '1.25rem', btn: '9999px' },
    glass: { blur: '18px', border: 'rgba(185, 28, 28, 0.15)' }
  },

  logo: { icon: "Utensils", text: "SAVOR", subtext: "ARTISAN BISTRO" },

  contact: {
    phone: "+1 (800) 555-3463",
    email: "reserve@savorbistro.com",
    whatsapp: "18005553463",
    whatsappMessage: "Hello Savor Bistro, I would like to reserve a dining table for tonight.",
    address: "88 Gourmet Boulevard, Downtown Chicago, IL 60611",
    operatingHours: [
      { days: "Lunch Service", hours: "11:30 AM - 3:00 PM Daily" },
      { days: "Dinner Service", hours: "5:00 PM - 11:00 PM Daily" },
      { days: "Weekend Brunch", hours: "10:00 AM - 3:30 PM (Sat & Sun)" }
    ],
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2970.3!2d-87.62!3d41.89!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDUzJzI0LjAiTiA4N8KwMzcnMTInMCJX!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
  },

  socialLinks: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    youtube: "https://youtube.com"
  },

  hero: {
    badge: "🍷 Michelin Guide Recommended Fine Dining",
    title: "Exquisite Farm-to-Table Gastronomy & Sommelier Wines",
    subtitle: "Indulge in prime dry-aged steaks, hand-rolled artisanal pastas, woodfired Neapolitan pizzas, and vintage Reserve wines in a romantic candlelit atmosphere.",
    ctaPrimary: { text: "Reserve A Table", href: "#contact", icon: "Utensils" },
    ctaSecondary: { text: "Explore Dinner Menu", href: "#services", icon: "ArrowRight" },
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=1200&q=80",
    highlights: ["100% Organic Local Produce", "Executive Chef Tasting Menu", "Cellar Master 500+ Wines"]
  },

  trustStats: {
    headline: "Over 50,000 Diners Celebrated Unforgettable Evenings",
    stats: [
      { id: 1, label: "Happy Diners Served", value: "50,000+", icon: "Heart", trend: "#1 Romantic Dining Spot" },
      { id: 2, label: "Master Chefs", value: "8+", icon: "Award", trend: "Parisian Trained" },
      { id: 3, label: "Sommelier Cellar Wines", value: "500+", icon: "Sparkles", trend: "Vintage Reserves" },
      { id: 4, label: "Culinary Rating", value: "4.96 / 5", icon: "Star", trend: "Top Chicago Bistro 2026" },
    ],
    certifications: [
      { name: "Michelin Guide Selected", icon: "Award" },
      { name: "Farm-to-Table Certified Organic", icon: "CheckCircle2" },
      { name: "Wine Spectator Award of Excellence", icon: "Sparkles" }
    ]
  },

  about: {
    badge: "Our Culinary Heritage",
    title: "Passion For Authentic Ingredients & Handcrafted Flavors",
    subtitle: "Founded in 2016 by Chef Antoine Laurent, Savor Bistro celebrates slow food crafting and heirloom harvests.",
    description: "Every dish tells a story. We source organic heirloom tomatoes, grass-fed wagyu beef, and fresh line-caught seafood daily from local sustainable farms. Our open woodfired hearth infuses natural smoky aroma into artisanal bread, woodfired meats, and roasted vegetables.",
    experienceYears: "10+",
    doctorsCount: "8+",
    proceduresDone: "50,000+",
    imageMain: "https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=800&q=80",
    imageSecondary: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80",
    featuresList: [
      "Open Hearth Woodfired Kitchen",
      "Private Chef VIP Tasting Table",
      "Sommelier Pairings for Every Course",
      "Heated Outdoor Patio Garden"
    ]
  },

  servicesConfig: {
    badge: "Gastronomic Offerings",
    title: "Signature Culinary Creations",
    subtitle: "Sample our executive chef's hand-crafted seasonal tasting menus.",
    items: [
      {
        id: "wagyu-ribeye-steak",
        category: "Chef Specials",
        title: "45-Day Dry Aged Wagyu Ribeye",
        shortDescription: "A5 Japanese Wagyu served with truffle bone marrow butter and wood-roasted asparagus.",
        fullDescription: "45-day dry-aged 14oz Wagyu ribeye seared over white oak embers, garnished with smoked sea salt, black truffle reduction, and duck fat potatoes.",
        duration: "Main Course",
        price: "$85",
        popular: true,
        icon: "Utensils",
        image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
        features: ["45-Day In-House Dry Aged", "A5 Japanese Certified Wagyu", "Truffle Reduction Sauce"]
      },
      {
        id: "lobster-truffle-tagliatelle",
        category: "Artisanal Pasta",
        title: "Maine Lobster & Truffle Tagliatelle",
        shortDescription: "Hand-rolled egg pasta with fresh poached lobster tail, saffron cream, and black winter truffles.",
        fullDescription: "House-made ribbon pasta tossed with butter-poached Maine lobster meat, French saffron reduction, Parmigiano-Reggiano, and shaved Norcia truffles.",
        duration: "Entrée",
        price: "$46",
        popular: true,
        icon: "Sparkles",
        image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
        features: ["Hand-Rolled Fresh Daily", "Poached Whole Lobster Tail", "Fresh Shaved Black Truffle"]
      },
      {
        id: "woodfired-truffle-pizza",
        category: "Woodfired Hearth",
        title: "Artisanal Truffle & Burrata Pizza",
        shortDescription: "San Marzano sauce, fresh Italian burrata, wild chanterelles, and white truffle oil.",
        fullDescription: "72-hour fermented sourdough crust baked at 900°F in our oak woodfired oven, topped with creamy Apulian burrata and wild mushrooms.",
        duration: "Handcrafted Pizza",
        price: "$32",
        popular: false,
        icon: "Flame",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
        features: ["72-Hr Sourdough Ferment", "Fresh Imported Italian Burrata", "900°F Oak Woodfire Oven"]
      }
    ]
  },

  featuresConfig: {
    title: "Why Savor Bistro Offers Unrivaled Dining Hospitality",
    subtitle: "Impeccable flavors, romantic atmosphere, and world-class wine pairings.",
    items: [
      { id: 1, icon: "Utensils", title: "Open Woodfire Kitchen", description: "Watch our master chefs sear Wagyu steaks and bake sourdough over oak coals." },
      { id: 2, icon: "Sparkles", title: "500+ Vintage Wine Cellar", description: "Bordeaux, Barolo, and Napa reserves curated by Sommelier Jean-Luc." },
      { id: 3, icon: "Heart", title: "Romantic Candlelit Dining", description: "Intimate velvet seating booth suites designed for special celebrations." }
    ]
  },

  galleryConfig: {
    badge: "Culinary Gallery",
    title: "A Feast For The Eyes",
    subtitle: "Explore our woodfired bistro atmosphere and chef platted creations.",
    items: [
      { id: 1, title: "45-Day Dry Aged Ribeye", category: "Dishes", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80" },
      { id: 2, title: "Romantic Candlelit Bistro Dining", category: "Ambiance", image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=800&q=80" },
      { id: 3, title: "Artisanal Woodfired Pizza Oven", category: "Hearth", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80" }
    ]
  },

  testimonialsConfig: {
    badge: "Diner Reviews",
    title: "Praise From Food Critics & Guests",
    subtitle: "Discover why food lovers return to Savor Bistro time after time.",
    items: [
      {
        id: 1,
        name: "Chef Gordon Vance",
        role: "Chicago Tribune Food Critic",
        rating: 5,
        quote: "Savor Bistro delivers one of the finest Wagyu ribeyes in the Midwest. The woodfired aroma and lobster pasta are unforgettable!",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
        verified: true,
        treatment: "Food Critic Review"
      },
      {
        id: 2,
        name: "Victoria Sterling",
        role: "Anniversary Celebration Guest",
        rating: 5,
        quote: "We celebrated our 10th anniversary at the private Chef's Table. Impeccable wine pairings and 7-star service!",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
        verified: true,
        treatment: "Anniversary Dinner"
      }
    ]
  },

  faqConfig: {
    badge: "Dining FAQ",
    title: "Frequently Asked Questions",
    subtitle: "Clear answers regarding reservations, dress code, and dietary needs.",
    items: [
      { id: 1, category: "Reservations", question: "How far in advance should I reserve a table?", answer: "We recommend reserving weekend dinner tables 1 to 2 weeks in advance. Walk-ins are welcomed at our lounge bar." },
      { id: 2, category: "Dietary", question: "Do you accommodate gluten-free or vegetarian diets?", answer: "Yes! We feature dedicated gluten-free handmade pasta and vegan plant-based culinary tasting menus." }
    ]
  },

  cta: {
    badge: "Reserve Your Culinary Experience",
    title: "Book Your Dining Table At Savor Bistro",
    description: "Join us for an unforgettable evening of farm-to-table gastronomy, woodfired flavors, and vintage wines.",
    buttonText: "Reserve Table Online",
    buttonHref: "#contact",
    phoneCallText: "Hostess Direct Line: +1 (800) 555-3463"
  },

  sections: [
    { id: "hero", enabled: true, order: 1 },
    { id: "trustBar", enabled: true, order: 2 },
    { id: "menu", enabled: true, order: 3 }, // Business-specific section
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

export default restaurantConfig;
