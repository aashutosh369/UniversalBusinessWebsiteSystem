import React from 'react';
import { motion } from 'framer-motion';
import Badge from './Badge';

export const SectionHeading = ({
  badge = null,
  badgeIcon = null,
  title,
  subtitle = null,
  align = 'center', // left | center | right
  className = ''
}) => {
  const alignments = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto"
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col max-w-3xl mb-12 sm:mb-16 ${alignments[align] || alignments.center} ${className}`}
    >
      {badge && (
        <Badge variant="primary" icon={badgeIcon} className="mb-4">
          {badge}
        </Badge>
      )}

      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-[var(--color-text-primary)] leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-[var(--color-text-secondary)]">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
