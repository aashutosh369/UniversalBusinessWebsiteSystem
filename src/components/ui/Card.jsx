import React from 'react';
import { motion } from 'framer-motion';

export const Card = ({
  children,
  className = '',
  hoverEffect = true,
  padding = 'p-6 sm:p-8',
  onClick,
  ...props
}) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -6, transition: { duration: 0.2 } } : {}}
      onClick={onClick}
      className={`bg-[var(--color-surface-card)] text-[var(--color-text-primary)] rounded-[var(--radius-card,1.25rem)] border border-[var(--color-border,rgba(255,255,255,0.1))] shadow-md hover:shadow-2xl transition-all duration-300 ${padding} ${onClick ? 'cursor-pointer' : ''} ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Card;
