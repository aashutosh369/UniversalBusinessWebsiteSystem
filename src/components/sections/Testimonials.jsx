import React from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const Testimonials = () => {
  const { businessConfig } = useTheme();
  const testimonialsConfig = businessConfig.testimonialsConfig;
  const items = testimonialsConfig.items || [];

  if (!items || items.length === 0) return null;

  return (
    <section id="testimonials" className="py-8 bg-[var(--color-surface)] text-[var(--color-text-primary)] transition-colors duration-500">
      <Container>
        <SectionHeading
          badge={testimonialsConfig.badge || "Testimonials"}
          badgeIcon="Star"
          title={testimonialsConfig.title || "Real Client Feedback"}
          subtitle={testimonialsConfig.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item, index) => (
            <motion.div
              key={`${businessConfig.id}-testi-${item.id || index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Card className="h-full flex flex-col justify-between space-y-6 relative overflow-hidden bg-[var(--color-surface-card)]">
                <Quote className="absolute top-6 right-6 w-12 h-12 text-[var(--color-border,#e2e8f0)] -z-0 pointer-events-none opacity-50" />

                <div className="space-y-4 relative z-10">
                  {/* Star Rating */}
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>

                  {/* Quote Text */}
                  <p className="text-base text-[var(--color-text-primary)] leading-relaxed italic">
                    "{item.quote}"
                  </p>
                </div>

                {/* Footer User Info */}
                <div className="flex items-center justify-between pt-4 border-t border-[var(--color-border,#e2e8f0)] relative z-10">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="w-12 h-12 rounded-full object-cover border-2 border-[var(--color-primary)]/20"
                    />
                    <div>
                      <div className="flex items-center gap-1.5 font-heading font-bold text-[var(--color-text-primary)] text-base">
                        <span>{item.name}</span>
                        {item.verified && (
                          <CheckCircle2 className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                        )}
                      </div>
                      <span className="text-xs text-[var(--color-text-secondary)] font-medium">
                        {item.role}
                      </span>
                    </div>
                  </div>

                  {item.treatment && (
                    <Badge variant="primary" size="sm">
                      {item.treatment}
                    </Badge>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Testimonials;
