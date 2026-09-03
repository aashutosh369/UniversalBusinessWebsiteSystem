/**
 * Global Site & Technical Configuration
 * Handles Meta SEO tags, social media share defaults, analytics flags, and core navigation menu items.
 */
export const siteConfig = {
  name: "Universal Business Website System",
  version: "1.0.0",
  seo: {
    titleTemplate: "%s | Aura Aesthetic & Medical Spa Clinic",
    defaultTitle: "Aura Aesthetic & Medical Spa Clinic | Premium Skin Care & Wellness",
    defaultDescription: "Experience premier medical aesthetic procedures, laser skin resurfacing, anti-aging therapies, and IV wellness drips administered by board-certified physicians.",
    keywords: "medical spa, laser treatment, skin rejuvenation, hydrafacial, botox, clinic, wellness drips",
    ogImage: "/images/clinic/hero.jpg",
    twitterHandle: "@AuraWellnessClinic"
  },

  navigation: [
    { label: "Home", href: "#hero" },
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Us", href: "#features" },
    { label: "Gallery", href: "#gallery" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" }
  ],

  // Feature Flags for global features
  features: {
    enableThemeSwitcher: true,  // Display floating theme preset demo panel
    enableWhatsAppButton: true, // Display direct quick float WhatsApp launcher
    enableBackToTop: true,
    enableModalPopups: true
  }
};

export default siteConfig;
