import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import siteConfig from '../../config/siteConfig';
import Container from '../ui/Container';
import Button from '../ui/Button';
import { DynamicIcon } from '../../utils/icons';

export const Navbar = () => {
  const { businessConfig } = useTheme();
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[var(--color-surface-glass)] backdrop-blur-md shadow-md py-3 border-b border-[var(--color-border,#e2e8f0)]'
          : 'bg-transparent py-5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center shadow-md group-hover:scale-105 transition-transform duration-300">
              <DynamicIcon name={businessConfig.logo.icon} className="w-5 h-5" />
            </div>
            <div>
              <span className="block font-heading font-extrabold text-lg sm:text-xl tracking-tight text-[var(--color-text-primary)] leading-none">
                {businessConfig.logo.text}
              </span>
              <span className="block text-[10px] font-semibold tracking-widest text-[var(--color-primary)] uppercase mt-0.5">
                {businessConfig.logo.subtext}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[var(--color-text-primary)] hover:text-[var(--color-primary)] transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href={`tel:${businessConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
              className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-primary)]"
            >
              <span className="p-2 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)]">
                <Phone className="w-3.5 h-3.5" />
              </span>
              <span className="hidden xl:inline">{businessConfig.contact.phone}</span>
            </a>

            <Button
              variant="primary"
              size="sm"
              href="#contact"
              icon="Calendar"
            >
              Book Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[var(--color-text-primary)] rounded-lg hover:bg-[var(--color-primary)]/10 transition-colors"
            aria-label="Toggle Mobile Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[var(--color-surface-glass)] backdrop-blur-xl border-b border-[var(--color-border,#e2e8f0)] shadow-xl overflow-hidden"
          >
            <Container className="py-6 space-y-4">
              <div className="flex flex-col space-y-3">
                {siteConfig.navigation.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-base font-semibold text-[var(--color-text-primary)] hover:text-[var(--color-primary)] py-2 border-b border-[var(--color-border,#e2e8f0)]"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

              <div className="pt-4 flex flex-col gap-3">
                <Button
                  variant="primary"
                  size="md"
                  href="#contact"
                  icon="Calendar"
                  className="w-full"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Now
                </Button>

                {businessConfig.contact.whatsapp && (
                  <a
                    href={`https://wa.me/${businessConfig.contact.whatsapp}?text=${encodeURIComponent(businessConfig.contact.whatsappMessage || '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Chat on WhatsApp</span>
                  </a>
                )}
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
