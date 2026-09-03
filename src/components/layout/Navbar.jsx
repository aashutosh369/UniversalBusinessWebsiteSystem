import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageSquare, Calendar, Sun, Moon } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import siteConfig from '../../config/siteConfig';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { DynamicIcon } from '../../utils/icons';

export const Navbar = () => {
  const { businessConfig, isDarkMode, toggleDarkMode } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth Navigation Handler for Desktop & Mobile
  const handleNavClick = (e, href) => {
    if (href && href.startsWith('#')) {
      e.preventDefault();
      setMobileMenuOpen(false);
      const targetId = href.replace('#', '');
      const element = document.getElementById(targetId);
      
      if (element) {
        setTimeout(() => {
          const navbarOffset = 80;
          const bodyTop = document.body.getBoundingClientRect().top;
          const elementTop = element.getBoundingClientRect().top;
          const elementPosition = elementTop - bodyTop;
          const offsetPosition = elementPosition - navbarOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  };

  // Desktop navigation items
  const desktopNavItems = siteConfig.navigation.filter(item =>
    ['Home', 'About Us', 'Properties', 'Why Us', 'Process', 'Contact'].includes(item.label)
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--color-surface-glass)] backdrop-blur-xl border-b border-[var(--color-border)] shadow-2xl py-3'
          : 'bg-[var(--color-surface-glass)] backdrop-blur-lg border-b border-[var(--color-border)] py-4'
      }`}
    >
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Brand Logo & Name */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center gap-3 group shrink-0"
          >
            {businessConfig.logo?.image ? (
              <div className="relative overflow-hidden rounded-full bg-[var(--color-surface-card)] p-0.5 border border-amber-500/40 shadow-md group-hover:scale-105 transition-all duration-300 shrink-0">
                <img
                  src={businessConfig.logo.image}
                  alt={businessConfig.name}
                  className="h-10 sm:h-11 w-10 sm:w-11 object-cover rounded-full"
                />
              </div>
            ) : (
              <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)] text-[var(--color-primary-fg,#0d0c0a)] font-bold flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300">
                <DynamicIcon name={businessConfig.logo?.icon || 'Building'} className="w-5 h-5" />
              </div>
            )}
            
            <div className="flex flex-col">
              <span className="font-heading font-black text-base sm:text-lg tracking-wider text-[var(--color-text-primary)] uppercase leading-none group-hover:text-[var(--color-primary)] transition-colors">
                {businessConfig.logo?.text || businessConfig.name}
              </span>
              <span className="text-[9px] sm:text-[10px] font-extrabold tracking-widest text-[var(--color-primary)] uppercase mt-1">
                {businessConfig.logo?.subtext || businessConfig.tagline}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-4 gap-6 xl:gap-8">
            {desktopNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm xl:text-base font-semibold tracking-wide text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors py-1 relative group cursor-pointer"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[var(--color-primary)] rounded-full transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA Bar */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            {/* Dark/Light Theme Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className="p-2.5 rounded-full bg-[var(--color-surface-card)] border border-[var(--color-border)] text-[var(--color-primary)] hover:scale-105 active:scale-95 transition-all duration-300 shadow-md cursor-pointer"
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle Theme Mode"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-[var(--color-text-primary)]" />}
            </button>

            {/* Direct Phone Pill */}
            {businessConfig.contact?.phone && (
              <a
                href={`tel:${businessConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                className="hidden xl:flex items-center gap-2.5 px-3.5 py-2 rounded-full bg-[var(--color-surface-card)] border border-[var(--color-border)] text-xs font-semibold text-[var(--color-text-primary)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all duration-300"
              >
                <span className="p-1.5 rounded-full bg-[var(--color-primary)]/20 text-[var(--color-primary)]">
                  <Phone className="w-3.5 h-3.5" />
                </span>
                <span>{businessConfig.contact.phone}</span>
              </a>
            )}

            {/* Book Site Visit CTA */}
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wide bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 hover:brightness-110 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 transform active:scale-95 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Site Visit</span>
            </a>
          </div>

          {/* Mobile Right Action Group */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-xl bg-[var(--color-surface-card)] border border-[var(--color-border)] text-[var(--color-primary)] hover:opacity-80 transition-colors"
              title={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
              aria-label="Toggle Theme Mode"
            >
              {isDarkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5 text-[var(--color-text-primary)]" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[var(--color-text-primary)] rounded-xl bg-[var(--color-surface-card)] border border-[var(--color-border)] hover:opacity-80 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-[var(--color-primary)]" /> : <Menu className="w-6 h-6 text-[var(--color-text-primary)]" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-[var(--color-surface-glass)] backdrop-blur-2xl border-b border-[var(--color-border)] shadow-2xl overflow-hidden"
          >
            <div className="px-4 py-6 space-y-5">
              <div className="grid grid-cols-2 gap-2">
                {siteConfig.navigation.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-sm font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-primary)] active:text-[var(--color-primary)] p-3 rounded-xl bg-[var(--color-surface-card)] border border-[var(--color-border)] transition-all cursor-pointer text-center block"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="pt-2 flex flex-col gap-3 border-t border-[var(--color-border)]">
                {businessConfig.contact?.phone && (
                  <a
                    href={`tel:${businessConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold bg-[var(--color-surface-card)] border border-[var(--color-border)] text-[var(--color-primary)] hover:opacity-90 transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Direct: {businessConfig.contact.phone}</span>
                  </a>
                )}

                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, '#contact')}
                  className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-extrabold uppercase tracking-wide bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 shadow-lg shadow-amber-500/30 cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Site Visit</span>
                </a>

                {businessConfig.contact?.whatsapp && (
                  <a
                    href={`https://wa.me/${businessConfig.contact.whatsapp}?text=${encodeURIComponent(businessConfig.contact.whatsappMessage || '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat on WhatsApp (+91 99117 86111)</span>
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
