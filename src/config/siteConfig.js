/**
 * Global Site & Technical Configuration
 * Handles Meta SEO tags, social media share defaults, analytics flags, and core navigation menu items.
 */
export const siteConfig = {
  name: "Flats & Beyond",
  version: "1.0.0",
  seo: {
    titleTemplate: "%s | Flats & Beyond",
    defaultTitle: "Flats & Beyond | Where Dreams Find An Address (Tanuj Arora)",
    defaultDescription: "Curated 2, 3 & 4 BHK Luxury Flats, Penthouses & Builder Floors across Delhi NCR & Gurugram. Direct advisory by Tanuj Arora (+91 99117 86111).",
    keywords: "flats and beyond, tanuj arora, luxury flats gurugram, 3 bhk flat delhi ncr, builder floor gurugram, penthouse, real estate advisory",
    ogImage: "/images/realestate/logo.jpg",
    twitterHandle: "@FlatsAndBeyond"
  },

  navigation: [
    { label: "Home", href: "#hero" },
    { label: "About Us", href: "#about" },
    { label: "Properties", href: "#featured" },
    { label: "Why Us", href: "#whyChooseUs" },
    { label: "Process", href: "#buyingJourney" },
    { label: "Gallery", href: "#gallery" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" }
  ],

  // Feature Flags for global features
  features: {
    enableThemeSwitcher: false, // Display floating theme preset demo panel
    enableWhatsAppButton: true, // Display direct quick float WhatsApp launcher
    enableBackToTop: true,
    enableModalPopups: true
  }
};

export default siteConfig;
