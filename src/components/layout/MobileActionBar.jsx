import React, { useState, useEffect } from 'react';
import { Phone, MessageSquare, Calendar } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

export const MobileActionBar = () => {
  const { businessConfig } = useTheme();
  const [isVisible, setIsVisible] = useState(false);
  const { mobileActions, contact } = businessConfig;

  useEffect(() => {
    // Show action bar after scrolling down a bit to not conflict with hero CTAs initially if desired,
    // or just show it immediately on mobile.
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(true); // Always true for now based on typical Indian UX, adjust if needed
      }
    };
    
    // Check initially
    handleScroll();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mobileActions) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          className="fixed bottom-0 left-0 right-0 z-50 lg:hidden pb-safe"
        >
          <div className="bg-[var(--color-surface)] border-t border-[var(--color-border)] shadow-[0_-4px_20px_rgba(0,0,0,0.05)] flex items-center p-2 gap-2">
            
            {mobileActions.call && contact?.phone && (
              <a
                href={`tel:${contact.phone.replace(/[^0-9+]/g, '')}`}
                className="flex-1 flex flex-col items-center justify-center py-2 text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors"
              >
                <Phone className="w-5 h-5 mb-1" />
                <span className="text-[10px] font-semibold uppercase tracking-wider">Call</span>
              </a>
            )}

            {mobileActions.whatsapp && contact?.whatsapp && (
              <a
                href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage || '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex flex-col items-center justify-center py-2 text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                <MessageSquare className="w-5 h-5 mb-1" />
                <span className="text-[10px] font-semibold uppercase tracking-wider">WhatsApp</span>
              </a>
            )}

            {mobileActions.primaryAction && (
              <a
                href={mobileActions.primaryAction.target}
                className="flex-[1.5] bg-[var(--color-primary)] text-white rounded-lg py-3 px-2 flex flex-col items-center justify-center shadow-md active:scale-95 transition-transform"
              >
                <span className="text-xs font-bold whitespace-nowrap">{mobileActions.primaryAction.label}</span>
              </a>
            )}

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileActionBar;
