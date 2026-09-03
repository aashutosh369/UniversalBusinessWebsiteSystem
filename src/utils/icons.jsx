import React from 'react';
import * as LucideIcons from 'lucide-react';

/**
 * Dynamic Icon Component that renders Lucide icons safely based on string name.
 * Prevents application crash if an invalid icon name is supplied in business JSON/config.
 */
export const DynamicIcon = ({ name, className = "w-5 h-5", fallback = "HelpCircle", ...props }) => {
  const IconComponent = LucideIcons[name] || LucideIcons[fallback] || LucideIcons.Sparkles;
  return <IconComponent className={className} {...props} />;
};

export default DynamicIcon;
