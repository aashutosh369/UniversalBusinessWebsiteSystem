/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: 'var(--color-primary, #0f766e)',
          light: 'var(--color-primary-light, #14b8a6)',
          dark: 'var(--color-primary-dark, #0d9488)',
          foreground: 'var(--color-primary-fg, #ffffff)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary, #0f172a)',
          light: 'var(--color-secondary-light, #1e293b)',
          foreground: 'var(--color-secondary-fg, #ffffff)',
        },
        accent: {
          DEFAULT: 'var(--color-accent, #d97706)',
          light: 'var(--color-accent-light, #f59e0b)',
          foreground: 'var(--color-accent-fg, #ffffff)',
        },
      },
      fontFamily: {
        heading: ['var(--font-heading, Outfit)', 'system-ui', 'sans-serif'],
        body: ['var(--font-body, Inter)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        brand: 'var(--radius-brand, 1.25rem)',
        card: 'var(--radius-card, 1.5rem)',
        btn: 'var(--radius-btn, 0.875rem)',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
        glow: '0 0 25px -5px var(--color-primary, rgba(15, 118, 110, 0.3))',
      },
      backdropBlur: {
        glass: 'var(--glass-blur, 16px)',
      }
    },
  },
  plugins: [],
}
