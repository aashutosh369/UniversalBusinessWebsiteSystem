import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import ImageFallback from '../ui/ImageFallback';
import { DynamicIcon } from '../../utils/icons';

export const ShowcaseSection = ({ config }) => {
  const { businessConfig } = useTheme();
  // Using the config key passed from SectionRenderer, or fallback to technologyConfig
  const sectionData = businessConfig[config?.dataKey || 'technologyConfig'];

  if (!sectionData || !sectionData.items) return null;

  return (
    <section id={config?.id || "showcase"} className="py-8 bg-[var(--color-surface-muted)] text-[var(--color-text-primary)] transition-colors duration-500 overflow-hidden">
      <Container>
        <SectionHeading
          badge={sectionData.badge || "Showcase"}
          badgeIcon="Star"
          title={sectionData.title}
          subtitle={sectionData.subtitle}
        />

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {sectionData.image && (
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="w-full lg:w-1/2"
            >
              <div className="relative rounded-[var(--radius-brand)] overflow-hidden shadow-xl aspect-square lg:aspect-auto lg:h-[600px]">
                <ImageFallback
                  src={sectionData.image}
                  alt={sectionData.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[var(--color-primary)]/20 to-transparent mix-blend-overlay"></div>
              </div>
            </motion.div>
          )}

          <div className={`w-full ${sectionData.image ? 'lg:w-1/2' : 'lg:w-full'} space-y-6`}>
            {sectionData.items.map((item, index) => (
              <motion.div
                key={`showcase-item-${item.id || index}`}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="flex gap-4 p-5 rounded-[var(--radius-card)] bg-[var(--color-surface-card)] shadow-sm hover:shadow-md transition-shadow border border-[var(--color-border)] group"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center group-hover:bg-[var(--color-primary)] group-hover:text-white transition-colors duration-300">
                  <DynamicIcon name={item.icon || 'CheckCircle'} className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold font-heading text-[var(--color-text-primary)] mb-1 group-hover:text-[var(--color-primary)] transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ShowcaseSection;
