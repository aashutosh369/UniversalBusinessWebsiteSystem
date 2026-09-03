import React from 'react';
import { motion } from 'framer-motion';

/**
 * Selective GlassCard Component
 * Implements glassmorphism strategy for floating highlight cards, navbar overlays, and CTA accents.
 */
export const GlassCard = ({
  children,
  className = '',
  hover = true,
  glow = false,
  padding = 'p-6 sm:p-8',
  ...props
}) => {
  return (
    <motion.div
      whileHover={hover ? { y: -4, scale: 1.01 } : {}}
      transition={{ duration: 0.25 }}
      className={`backdrop-blur-[var(--glass-blur,16px)] bg-[var(--color-surface-glass)] text-[var(--color-text-primary)] border border-[var(--color-border)] rounded-[var(--radius-card,1.25rem)] shadow-lg ${glow ? 'ring-2 ring-[var(--color-primary)]/20 shadow-glow' : ''} ${padding} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
