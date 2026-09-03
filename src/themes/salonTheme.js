/**
 * Salon Theme Preset: Lumina Luxury Beauty & Hair Salon
 * Style: Elegant Rose Gold, Warm Beige & Velvet Plum
 */
export const salonTheme = {
  id: 'salon-lumina',
  name: 'Lumina Luxury Salon',
  category: 'Salon / Beauty Spa',
  colors: {
    primary: {
      DEFAULT: '#be185d', // Pink 700 / Rose Gold
      light: '#db2777',   // Pink 600
      dark: '#9d174d',    // Pink 800
      foreground: '#ffffff',
    },
    secondary: {
      DEFAULT: '#292524', // Stone 900
      light: '#44403c',   // Stone 800
      foreground: '#fafaf9',
    },
    accent: {
      DEFAULT: '#eab308', // Gold Accent
      light: '#fde047',
      foreground: '#1c1917',
    },
    surface: {
      DEFAULT: '#ffffff',
      muted: '#fff1f2',   // Soft Rose Mist
      card: '#ffffff',
      glass: 'rgba(255, 255, 255, 0.8)',
    },
  },
  typography: {
    heading: "'Playfair Display', 'Outfit', serif",
    body: "'Inter', sans-serif",
  },
  radius: {
    brand: '2rem',
    card: '1.75rem',
    btn: '9999px', // Pill shape buttons for luxury salon
  },
  glass: {
    blur: '20px',
    border: 'rgba(190, 24, 93, 0.15)',
  },
};

export default salonTheme;
