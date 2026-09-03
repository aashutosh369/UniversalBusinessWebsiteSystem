/**
 * Consulting Theme Preset: Vanguard Executive Strategy & Advisory
 * Style: Deep Navy Blue, Electric Sapphire & Slate
 */
export const consultingTheme = {
  id: 'consulting-vanguard',
  name: 'Vanguard Corporate Advisory',
  category: 'Consultant / Corporate',
  colors: {
    primary: {
      DEFAULT: '#1d4ed8', // Blue 700
      light: '#3b82f6',   // Blue 500
      dark: '#1e40af',    // Blue 800
      foreground: '#ffffff',
    },
    secondary: {
      DEFAULT: '#0f172a', // Slate 900
      light: '#1e293b',   // Slate 800
      foreground: '#f8fafc',
    },
    accent: {
      DEFAULT: '#06b6d4', // Cyan 500
      light: '#22d3ee',   // Cyan 400
      foreground: '#0f172a',
    },
    surface: {
      DEFAULT: '#ffffff',
      muted: '#f0f9ff',
      card: '#ffffff',
      glass: 'rgba(255, 255, 255, 0.75)',
    },
  },
  typography: {
    heading: "'Plus Jakarta Sans', 'Inter', sans-serif",
    body: "'Inter', sans-serif",
  },
  radius: {
    brand: '0.75rem',
    card: '1rem',
    btn: '0.5rem',
  },
  glass: {
    blur: '16px',
    border: 'rgba(29, 78, 216, 0.15)',
  },
};

export default consultingTheme;
