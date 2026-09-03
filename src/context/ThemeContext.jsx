import React, { createContext, useContext, useState, useEffect } from 'react';
import businessPresets from '../config/businesses';
import { injectThemeVariables } from '../utils/themeInjector';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [activeBusinessKey, setActiveBusinessKey] = useState('realEstate');
  const [currentBusinessConfig, setCurrentBusinessConfig] = useState(
    businessPresets.realEstate || businessPresets['realEstate']
  );
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Apply CSS custom variables whenever business config, active preset, or dark mode toggles
  useEffect(() => {
    if (!currentBusinessConfig) return;

    let activeTheme = currentBusinessConfig.theme;
    
    // Check if toggled to light mode and lightTheme is defined
    if (!isDarkMode && currentBusinessConfig.lightTheme) {
      activeTheme = currentBusinessConfig.lightTheme;
    } else if (isDarkMode && currentBusinessConfig.darkTheme) {
      activeTheme = currentBusinessConfig.darkTheme;
    }

    if (activeTheme) {
      injectThemeVariables(activeTheme);
    }

    // Toggle html 'dark' class
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [currentBusinessConfig, isDarkMode]);

  const setPreset = (presetKey) => {
    const selectedConfig = businessPresets[presetKey] || businessPresets.realEstate;
    setActiveBusinessKey(presetKey);
    setCurrentBusinessConfig(selectedConfig);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider
      value={{
        activeKey: activeBusinessKey,
        businessConfig: currentBusinessConfig,
        theme: isDarkMode ? (currentBusinessConfig?.darkTheme || currentBusinessConfig?.theme) : (currentBusinessConfig?.lightTheme || currentBusinessConfig?.theme),
        isDarkMode,
        toggleDarkMode,
        setPreset,
        businessPresets,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);

export default ThemeContext;
