import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import { DynamicIcon } from '../../utils/icons';

export const StepsSection = ({ config }) => {
  const { businessConfig } = useTheme();
  const stepsConfig = businessConfig[config?.dataKey || 'stepsConfig'];

  if (!stepsConfig || !stepsConfig.steps) return null;

  return (
    <section id={config?.id || "steps"} className="py-8 bg-[var(--color-surface)] text-[var(--color-text-primary)] transition-colors duration-500">
      <Container>
        <SectionHeading
          badge={stepsConfig.badge || "Process"}
          badgeIcon="List"
          title={stepsConfig.title}
          subtitle={stepsConfig.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-12 left-[12.5%] right-[12.5%] h-0.5 bg-[var(--color-border)] z-0"></div>
          
          {stepsConfig.steps.map((step, index) => (
            <motion.div
              key={`${businessConfig.id}-step-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="relative z-10"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-24 h-24 rounded-full bg-[var(--color-surface-card)] border-4 border-[var(--color-surface)] shadow-md flex items-center justify-center mb-6 relative group">
                  <div className="absolute -inset-1 rounded-full bg-[var(--color-primary)] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <DynamicIcon name={step.icon} className="w-10 h-10 text-[var(--color-primary)]" />
                  {step.number && (
                    <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center text-xs font-bold shadow-sm">
                      {step.number}
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-heading font-bold text-[var(--color-text-primary)] mb-3">
                  {step.title}
                </h3>

                <p className="text-sm text-[var(--color-text-secondary)] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default StepsSection;
