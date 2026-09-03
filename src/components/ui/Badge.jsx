import React from 'react';
import { DynamicIcon } from '../../utils/icons';

export const Badge = ({
  children,
  icon = null,
  variant = 'primary', // primary | secondary | accent | glass | success | warning
  size = 'md',
  className = ''
}) => {
  const variants = {
    primary: "bg-[var(--color-primary)]/15 text-[var(--color-primary)] border border-[var(--color-primary)]/30 font-bold",
    secondary: "bg-[var(--color-surface-card)] text-[var(--color-text-primary)] border border-[var(--color-border,rgba(255,255,255,0.1))]",
    accent: "bg-[var(--color-accent)]/15 text-[var(--color-accent)] border border-[var(--color-accent)]/30 font-bold",
    glass: "backdrop-blur-md bg-[var(--color-surface-glass)] text-[var(--color-text-primary)] border border-[var(--color-border,rgba(255,255,255,0.1))] shadow-sm font-semibold",
    success: "bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 font-semibold",
    warning: "bg-amber-500/15 text-amber-400 border border-amber-500/30 font-semibold"
  };

  const sizes = {
    sm: "text-xs px-2.5 py-0.5 gap-1 font-medium",
    md: "text-xs px-3.5 py-1 gap-1.5 font-bold uppercase tracking-wider",
    lg: "text-sm px-4 py-1.5 gap-2 font-bold"
  };

  return (
    <span className={`inline-flex items-center rounded-full ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}>
      {icon && <DynamicIcon name={icon} className="w-3.5 h-3.5" />}
      <span>{children}</span>
    </span>
  );
};

export default Badge;
