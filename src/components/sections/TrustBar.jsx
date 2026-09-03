import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import Container from '../ui/Container';
import { DynamicIcon } from '../../utils/icons';

export const TrustBar = ({ config }) => {
  const { businessConfig } = useTheme();
  const trustStats = businessConfig[config?.dataKey || 'trustStats'];

  if (!trustStats) return null;
  
  const items = trustStats.stats || trustStats.items || [];

  return (
    <section className="py-8 bg-[var(--color-surface-muted)] text-[var(--color-text-primary)] transition-colors duration-500">
      <Container>
        {/* Integrated Unified Dark Surface Bar (No isolated rectangle boxes!) */}
        <div className="bg-[var(--color-surface-card)] rounded-[var(--radius-card,1.25rem)] border border-[var(--color-border,rgba(255,255,255,0.08))] p-6 sm:p-10 shadow-xl">
          {trustStats.title && (
            <div className="text-center mb-8">
              {trustStats.badge && <span className="text-xs font-bold text-[var(--color-primary)] uppercase tracking-wider">{trustStats.badge}</span>}
              <h2 className="text-2xl font-bold font-heading mt-2">{trustStats.title}</h2>
              {trustStats.subtitle && <p className="text-sm text-[var(--color-text-secondary)] mt-1">{trustStats.subtitle}</p>}
            </div>
          )}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 divide-y md:divide-y-0 md:divide-x divide-[var(--color-border,rgba(255,255,255,0.08))]">
            {items.map((stat, index) => (
              <motion.div
                key={`${businessConfig.id}-stat-${stat.id || index}`}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex flex-col items-center text-center px-4 pt-4 md:pt-0"
              >
                <div className="w-9 h-9 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center mb-3">
                  <DynamicIcon name={stat.icon} className="w-5 h-5" />
                </div>
                <span className="text-3xl sm:text-4xl font-heading font-extrabold text-[var(--color-text-primary)] tracking-tight">
                  {stat.value}
                </span>
                <span className="text-sm font-semibold text-[var(--color-text-primary)] mt-1">
                  {stat.label}
                </span>
                <span className="text-xs text-[var(--color-primary)] font-medium mt-0.5">
                  {stat.trend}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Minimal Certifications & Badges (No bright orange outlines!) */}
          {trustStats.certifications && (
            <div className="mt-8 pt-6 border-t border-[var(--color-border,rgba(255,255,255,0.08))] flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-[var(--color-text-secondary)]">
              {trustStats.certifications.map((cert, i) => (
                <div key={i} className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/20 dark:bg-white/5 border border-[var(--color-border,rgba(255,255,255,0.08))]">
                  <DynamicIcon name={cert.icon} className="w-3.5 h-3.5 text-[var(--color-primary)]" />
                  <span>{cert.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default TrustBar;
