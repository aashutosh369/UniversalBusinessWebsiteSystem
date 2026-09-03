import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import GlassCard from '../ui/GlassCard';
import ImageFallback from '../ui/ImageFallback';
import { CheckCircle2, Award } from 'lucide-react';

export const About = ({ config }) => {
  const { businessConfig } = useTheme();
  const { about } = businessConfig;

  if (!about) return null;

  return (
    <section id={config?.id || "about"} className="py-8 bg-[var(--color-surface)] text-[var(--color-text-primary)] transition-colors duration-500 overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Visual Image Stack */}
          <motion.div
            key={`about-img-${businessConfig.id}`}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative z-10 rounded-[var(--radius-card,1.5rem)] overflow-hidden shadow-xl border border-[var(--color-border,#e2e8f0)]">
              <ImageFallback
                src={about.imageMain}
                alt={about.title}
                className="w-full h-[400px] sm:h-[480px] object-cover"
              />
            </div>

            {/* Overlapping Secondary Image */}
            {about.imageSecondary && (
              <div className="absolute -bottom-8 -right-6 w-3/5 hidden sm:block z-20">
                <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-[var(--color-surface-card)]">
                  <ImageFallback
                    src={about.imageSecondary}
                    alt={about.title}
                    className="w-full h-44 object-cover"
                  />
                </div>
              </div>
            )}

            {/* Floating Experience Badge */}
            <div className="absolute -top-6 -left-6 z-30">
              <GlassCard padding="p-4 sm:p-5" glow>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center font-bold text-xl shadow-md">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="block text-2xl font-extrabold font-heading text-[var(--color-text-primary)] leading-none">
                      {about.experienceYears}
                    </span>
                    <span className="block text-xs font-semibold text-[var(--color-text-secondary)] mt-1">
                      Years of Excellence
                    </span>
                  </div>
                </div>
              </GlassCard>
            </div>
          </motion.div>

          {/* Right Text Description */}
          <motion.div
            key={`about-text-${businessConfig.id}`}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-6 space-y-6"
          >
            <SectionHeading
              badge={about.badge || "About Us"}
              badgeIcon="Building2"
              title={about.title}
              align="left"
              className="mb-6 max-w-full"
            />

            <p className="text-base sm:text-lg font-medium text-[var(--color-text-primary)] leading-relaxed">
              {about.subtitle}
            </p>

            <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed">
              {about.description}
            </p>

            {/* Features Bullet List */}
            {about.featuresList && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {about.featuresList.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2.5 text-sm font-semibold text-[var(--color-text-primary)]">
                    <CheckCircle2 className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Key Stat Counters */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-[var(--color-border,#e2e8f0)]">
              <div className="space-y-1">
                <span className="block text-2xl sm:text-3xl font-extrabold font-heading text-[var(--color-primary)]">
                  {about.experienceYears}
                </span>
                <span className="block text-xs font-medium text-[var(--color-text-secondary)]">Established Experience</span>
              </div>
              <div className="space-y-1">
                <span className="block text-2xl sm:text-3xl font-extrabold font-heading text-[var(--color-primary)]">
                  {about.doctorsCount}
                </span>
                <span className="block text-xs font-medium text-[var(--color-text-secondary)]">Certified Experts</span>
              </div>
              <div className="space-y-1">
                <span className="block text-2xl sm:text-3xl font-extrabold font-heading text-[var(--color-primary)]">
                  {about.proceduresDone}
                </span>
                <span className="block text-xs font-medium text-[var(--color-text-secondary)]">Satisfied Clients</span>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default About;
