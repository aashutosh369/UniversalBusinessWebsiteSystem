import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import Container from '../ui/Container';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import GlassCard from '../ui/GlassCard';
import ImageFallback from '../ui/ImageFallback';
import { CheckCircle2, Star, ShieldCheck } from 'lucide-react';

export const Hero = () => {
  const { businessConfig } = useTheme();
  const { hero } = businessConfig;

  if (!hero) return null;

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-28 pb-16 overflow-hidden bg-[var(--color-surface)] text-[var(--color-text-primary)] transition-colors duration-500">
      {/* Dynamic Background Glow Blobs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column Text Content */}
          <motion.div
            key={`hero-text-${businessConfig.id}`}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-6"
          >
            {hero.badge && (
              <Badge variant="glass" size="lg" className="shadow-sm">
                {hero.badge}
              </Badge>
            )}

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-[var(--color-text-primary)] leading-[1.15] tracking-tight">
              {hero.title}
            </h1>

            <p className="text-lg sm:text-xl text-[var(--color-text-secondary)] leading-relaxed max-w-2xl">
              {hero.subtitle}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              {hero.ctaPrimary && (
                <Button
                  variant="primary"
                  size="lg"
                  href={hero.ctaPrimary.href}
                  icon={hero.ctaPrimary.icon || "Calendar"}
                >
                  {hero.ctaPrimary.text}
                </Button>
              )}

              {hero.ctaSecondary && (
                <Button
                  variant="glass"
                  size="lg"
                  href={hero.ctaSecondary.href}
                  icon={hero.ctaSecondary.icon || "ArrowRight"}
                >
                  {hero.ctaSecondary.text}
                </Button>
              )}
            </div>

            {/* Bullet Highlights */}
            {hero.highlights && (
              <div className="pt-6 border-t border-[var(--color-border,#e2e8f0)] flex flex-col items-start gap-3 text-sm sm:text-base font-semibold text-[var(--color-text-primary)]">
                {hero.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4.5 h-4.5 text-[var(--color-primary)] shrink-0" />
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Property Search UI Demo */}
            {hero.searchEnabled && hero.searchFields && (
              <div className="mt-8 p-4 bg-[var(--color-surface-card)] rounded-2xl border border-[var(--color-border,#e2e8f0)] shadow-lg flex flex-col sm:flex-row items-center gap-3">
                {hero.searchFields.map((field, idx) => (
                  <div key={idx} className="flex-1 w-full">
                    <label className="block text-[10px] uppercase font-bold text-[var(--color-text-secondary)] mb-1 ml-1">
                      {field.label}
                    </label>
                    <select className="w-full bg-[var(--color-surface-muted)] text-[var(--color-text-primary)] text-sm font-semibold p-2.5 rounded-xl border border-transparent hover:border-[var(--color-primary)]/30 focus:border-[var(--color-primary)] focus:ring-1 focus:ring-[var(--color-primary)] transition-all outline-none">
                      {field.options.map((opt, i) => (
                        <option key={i} value={opt}>{opt}</option>
                      ))}
                    </select>
                  </div>
                ))}
                <div className="w-full sm:w-auto mt-2 sm:mt-0 sm:pt-5">
                  <Button variant="primary" className="w-full sm:w-auto py-3" icon="Search">
                    {hero.searchButtonText || "Search"}
                  </Button>
                </div>
              </div>
            )}
          </motion.div>

          {/* Right Column Visual Media Card */}
          <motion.div
            key={`hero-media-${businessConfig.id}`}
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-[var(--radius-card,1.75rem)] overflow-hidden shadow-2xl border border-[var(--color-border,#e2e8f0)]">
              <ImageFallback
                src={hero.image}
                alt={businessConfig.name}
                className="w-full h-[450px] sm:h-[520px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>

            {/* Floating Glassmorphism Highlight Card */}
            <div className="absolute -bottom-6 -left-6 max-w-xs hidden sm:block">
              <GlassCard padding="p-4 sm:p-5" glow>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)] text-white flex items-center justify-center font-bold text-lg shadow-md shrink-0">
                    <Star className="w-6 h-6 fill-white" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1 text-amber-500 font-bold text-sm">
                      ★★★★★ <span className="text-[var(--color-text-primary)] font-extrabold">4.95 / 5</span>
                    </div>
                    <p className="text-xs text-[var(--color-text-secondary)] font-medium mt-0.5">
                      Top Verified Reviews
                    </p>
                  </div>
                </div>
              </GlassCard>
            </div>

            {/* Floating Top Right Badge */}
            <div className="absolute -top-4 -right-4 hidden sm:block">
              <GlassCard padding="p-3 px-4">
                <div className="flex items-center gap-2 text-xs font-bold text-[var(--color-text-primary)]">
                  <ShieldCheck className="w-4 h-4 text-[var(--color-primary)]" />
                  <span>100% Verified Quality</span>
                </div>
              </GlassCard>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
