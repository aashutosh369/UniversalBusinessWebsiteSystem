import defaultTheme from '../themes/defaultTheme';

/**
 * Active Theme Configuration
 * Can be overridden by selecting theme presets or updating design tokens.
 */
export const themeConfig = {
  activeTheme: defaultTheme,
  
  // Custom token overrides if desired per deployment
  customOverrides: {
    // e.g. primary: '#0d9488'
  }
};

export default themeConfig;
