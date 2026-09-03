import React from 'react';
import { motion } from 'framer-motion';
import { DynamicIcon } from '../../utils/icons';
import { useBooking } from '../../context/BookingContext';

export const Button = ({
  children,
  variant = 'primary', // primary | secondary | outline | ghost | glass | accent
  size = 'md', // sm | md | lg
  icon = null,
  iconPosition = 'right',
  isLoading = false,
  className = '',
  href = null,
  onClick,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer select-none rounded-[var(--radius-btn,0.75rem)]";

  const variants = {
    primary: "bg-[var(--color-primary,#0f766e)] text-white hover:bg-[var(--color-primary-dark,#0d9488)] shadow-md hover:shadow-lg shadow-[var(--color-primary)]/20 focus:ring-[var(--color-primary)]",
    secondary: "bg-[var(--color-secondary,#0f172a)] text-white hover:bg-[var(--color-secondary-light,#1e293b)] shadow-md focus:ring-[var(--color-secondary)]",
    accent: "bg-[var(--color-accent,#d97706)] text-white hover:opacity-90 shadow-md focus:ring-[var(--color-accent)]",
    outline: "border-2 border-[var(--color-primary,#0f766e)] text-[var(--color-primary,#0f766e)] hover:bg-[var(--color-primary,#0f766e)] hover:text-white focus:ring-[var(--color-primary)]",
    ghost: "text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 focus:ring-slate-400",
    glass: "backdrop-blur-md bg-white/70 dark:bg-slate-900/70 border border-white/30 dark:border-slate-700/50 text-slate-800 dark:text-white hover:bg-white/90 dark:hover:bg-slate-800/90 shadow-glass focus:ring-[var(--color-primary)]"
  };

  const sizes = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2",
    lg: "text-base px-7 py-3.5 gap-2.5 font-semibold"
  };

  const content = (
    <>
      {isLoading ? (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" />
      ) : icon && iconPosition === 'left' ? (
        <DynamicIcon name={icon} className={size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} />
      ) : null}
      <span>{children}</span>
      {!isLoading && icon && iconPosition === 'right' && (
        <DynamicIcon name={icon} className={size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} />
      )}
    </>
  );

  const bookingContext = useBooking();

  if (href === '#contact' && bookingContext) {
    return (
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={(e) => {
          e.preventDefault();
          bookingContext.openBookingModal();
        }}
        className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
        {...props}
      >
        {content}
      </motion.button>
    );
  }

  if (href) {
    return (
      <motion.a
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        href={href}
        className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
        {...props}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {content}
    </motion.button>
  );
};

export default Button;
