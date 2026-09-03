/**
 * Default Theme Preset: Aura Aesthetic & Medical Wellness Clinic
 * Style: Clean, Trustworthy, Luxurious Teal & Warm Gold Accents
 */
export const defaultTheme = {
  id: 'clinic-aura',
  name: 'Aura Luxury Wellness (Default)',
  category: 'Clinic / Medical Spa',
  colors: {
    primary: {
      DEFAULT: '#0f766e', // Teal 700
      light: '#14b8a6',   // Teal 500
      dark: '#115e59',    // Teal 800
      foreground: '#ffffff',
    },
    secondary: {
      DEFAULT: '#0f172a', // Slate 900
      light: '#1e293b',   // Slate 800
      foreground: '#f8fafc',
    },
    accent: {
      DEFAULT: '#d97706', // Amber 600 Gold
      light: '#f59e0b',   // Amber 500
      foreground: '#ffffff',
    },
    surface: {
      DEFAULT: '#ffffff',
      muted: '#f8fafc',
      card: '#ffffff',
      glass: 'rgba(255, 255, 255, 0.75)',
    },
  },
  typography: {
    heading: "'Outfit', 'Plus Jakarta Sans', sans-serif",
    body: "'Inter', sans-serif",
  },
  radius: {
    brand: '1.25rem',
    card: '1.5rem',
    btn: '0.875rem',
  },
  glass: {
    blur: '16px',
    border: 'rgba(15, 118, 110, 0.15)',
  },
};

export default defaultTheme;
