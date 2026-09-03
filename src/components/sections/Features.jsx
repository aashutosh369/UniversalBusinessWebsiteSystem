import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import { DynamicIcon } from '../../utils/icons';

export const Features = ({ config }) => {
  const { businessConfig } = useTheme();
  const featuresConfig = businessConfig[config?.dataKey || 'featuresConfig'];

  if (!featuresConfig || !featuresConfig.items) return null;

  return (
    <section id="features" className="py-8 bg-[var(--color-surface)] text-[var(--color-text-primary)] transition-colors duration-500">
      <Container>
        <SectionHeading
          badge="Why Choose Us"
          badgeIcon="ShieldCheck"
          title={featuresConfig.title}
          subtitle={featuresConfig.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresConfig.items.map((feature, index) => (
            <motion.div
              key={`${businessConfig.id}-feat-${feature.id || index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full group hover:border-[var(--color-primary)] transition-colors bg-[var(--color-surface-card)]">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-300 shadow-sm">
                  <DynamicIcon name={feature.icon} className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-heading font-bold text-[var(--color-text-primary)] mb-3 group-hover:text-[var(--color-primary)] transition-colors">
                  {feature.title}
                </h3>

                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Features;
