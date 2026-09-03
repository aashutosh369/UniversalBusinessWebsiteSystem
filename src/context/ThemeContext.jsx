import React, { createContext, useContext, useState, useEffect } from 'react';
import businessPresets from '../config/businesses';
import { injectThemeVariables } from '../utils/themeInjector';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [activeBusinessKey, setActiveBusinessKey] = useState('realEstate');
  const [currentBusinessConfig, setCurrentBusinessConfig] = useState(businessPresets.realEstate || businessPresets['realEstate']);

  // Apply CSS custom variables whenever business config or theme changes
  useEffect(() => {
    if (currentBusinessConfig && currentBusinessConfig.theme) {
      injectThemeVariables(currentBusinessConfig.theme);
    }
  }, [currentBusinessConfig]);

  const setPreset = (presetKey) => {
    const selectedConfig = businessPresets[presetKey] || businessPresets.clinic;
    setActiveBusinessKey(presetKey);
    setCurrentBusinessConfig(selectedConfig);
  };

  return (
    <ThemeContext.Provider
      value={{
        activeKey: activeBusinessKey,
        businessConfig: currentBusinessConfig,
        theme: currentBusinessConfig.theme,
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
