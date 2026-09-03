/**
 * Gym Theme Preset: Apex Performance Gym & Athletic Club
 * Style: Bold, High Energy, Crimson/Orange & Dark Charcoal
 */
export const gymTheme = {
  id: 'gym-apex',
  name: 'Apex Fitness & Gym',
  category: 'Gym / Fitness',
  colors: {
    primary: {
      DEFAULT: '#ea580c', // Orange 600
      light: '#f97316',   // Orange 500
      dark: '#c2410c',    // Orange 700
      foreground: '#ffffff',
    },
    secondary: {
      DEFAULT: '#18181b', // Zinc 900
      light: '#27272a',   // Zinc 800
      foreground: '#fafafa',
    },
    accent: {
      DEFAULT: '#dc2626', // Red 600
      light: '#ef4444',   // Red 500
      foreground: '#ffffff',
    },
    surface: {
      DEFAULT: '#ffffff',
      muted: '#f4f4f5',
      card: '#ffffff',
      glass: 'rgba(24, 24, 27, 0.85)',
    },
  },
  typography: {
    heading: "'Oswald', 'Montserrat', sans-serif",
    body: "'Inter', sans-serif",
  },
  radius: {
    brand: '0.5rem',
    card: '0.75rem',
    btn: '0.5rem',
  },
  glass: {
    blur: '12px',
    border: 'rgba(234, 88, 12, 0.25)',
  },
};

export default gymTheme;
