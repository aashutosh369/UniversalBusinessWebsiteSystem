import React from 'react';
import { motion } from 'framer-motion';

/**
 * Selective GlassCard Component
 * Implements 10% glassmorphism strategy for floating highlight cards, navbar overlays, and CTA accents.
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
      className={`backdrop-blur-[var(--glass-blur,16px)] bg-white/70 dark:bg-slate-900/75 border border-white/40 dark:border-slate-700/60 rounded-[var(--radius-card,1.25rem)] shadow-[0_8px_30px_rgb(0,0,0,0.06)] ${glow ? 'ring-2 ring-[var(--color-primary)]/20 shadow-glow' : ''} ${padding} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;
