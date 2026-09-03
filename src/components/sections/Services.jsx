import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import Modal from '../ui/Modal';
import ImageFallback from '../ui/ImageFallback';
import { Clock, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export const Services = ({ config }) => {
  const { businessConfig } = useTheme();
  const servicesConfig = businessConfig[config?.dataKey || 'servicesConfig'];

  if (!servicesConfig || !servicesConfig.items) return null;
  const services = servicesConfig?.items || [];

  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedService, setSelectedService] = useState(null);

  if (!services || services.length === 0) return null;

  const categories = ['All', ...new Set(services.map(s => s.category).filter(Boolean))];

  const filteredServices = activeCategory === 'All'
    ? services
    : services.filter(s => s.category === activeCategory);

  return (
    <section id={config?.id || "services"} className="py-8 bg-[var(--color-surface-muted)] text-[var(--color-text-primary)] transition-colors duration-500">
      <Container>
        <SectionHeading
          badge={servicesConfig.badge || "Services Directory"}
          badgeIcon="Sparkles"
          title={servicesConfig.title || "Featured Solutions"}
          subtitle={servicesConfig.subtitle}
        />

        {/* Filter Tabs */}
        {categories.length > 2 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[var(--color-primary)] text-white shadow-md'
                    : 'bg-[var(--color-surface-card)] text-[var(--color-text-secondary)] border border-[var(--color-border,rgba(255,255,255,0.08))] hover:bg-[var(--color-primary)]/10'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <motion.div
              key={`${businessConfig.id}-service-${service.id || index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="p-0 h-full flex flex-col justify-between group overflow-hidden rounded-[var(--radius-card,1.5rem)] border border-[var(--color-border,rgba(255,255,255,0.08))] shadow-md hover:shadow-2xl transition-all duration-300 bg-[var(--color-surface-card)]">
                {/* Image Area with Smooth Border Radius */}
                <div className="relative h-52 sm:h-56 overflow-hidden rounded-t-[var(--radius-card,1.5rem)] shrink-0">
                  <ImageFallback
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover rounded-t-[var(--radius-card,1.5rem)] group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent pointer-events-none" />

                  {/* Top Left Category Pill */}
                  {service.category && (
                    <div className="absolute top-4 left-4 z-10">
                      <Badge variant="glass" size="sm">
                        {service.category}
                      </Badge>
                    </div>
                  )}

                  {/* Top Right Popular Tag */}
                  {service.popular && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge variant="accent" size="sm" icon="Sparkles">
                        Popular
                      </Badge>
                    </div>
                  )}

                  {/* Bottom Duration & Price Bar */}
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white text-xs font-semibold z-10">
                    <div className="flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-lg border border-white/10">
                      <Clock className="w-3.5 h-3.5 text-[var(--color-primary-light,#38bdf8)]" />
                      <span>{service.duration}</span>
                    </div>
                    <div className="text-base font-extrabold font-heading text-amber-300 tracking-tight">
                      {service.price}
                    </div>
                  </div>
                </div>

                {/* Editorial Content Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-5">
                  <div className="space-y-2.5">
                    {/* Service Title */}
                    <h3 className="text-xl font-heading font-extrabold text-[var(--color-text-primary)] group-hover:text-[var(--color-primary)] transition-colors leading-snug line-clamp-1">
                      {service.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] line-clamp-2 leading-relaxed">
                      {service.shortDescription}
                    </p>
                  </div>

                  {/* Key Benefits */}
                  {service.features && service.features.length > 0 && (
                    <div className="space-y-2 pt-2">
                      {service.features.slice(0, 2).map((feat, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs font-semibold text-[var(--color-text-primary)]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[var(--color-primary)] shrink-0" />
                          <span className="truncate">{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* CTA Action Link */}
                  <div className="pt-3 border-t border-[var(--color-border,rgba(255,255,255,0.08))] flex items-center justify-between">
                    <button
                      onClick={() => { setSelectedService(null); setTimeout(() => setSelectedService(service), 10); }}
                      className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] hover:text-[var(--color-primary-light)] transition-colors group-hover:translate-x-1 duration-300 cursor-pointer"
                    >
                      <span>Explore Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <span className="text-[11px] text-[var(--color-text-secondary)] font-medium">
                      Instant Booking
                    </span>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Service Detail Modal */}
      {selectedService && (
        <Modal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          title={selectedService.title}
        >
          <div className="space-y-6">
            <div className="relative h-64 rounded-2xl overflow-hidden border border-[var(--color-border,rgba(255,255,255,0.08))]">
              <ImageFallback
                src={selectedService.image}
                alt={selectedService.title}
                className="w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white font-bold">
                <span className="text-2xl font-heading text-amber-300">{selectedService.price}</span>
                <span className="text-sm bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                  Duration: {selectedService.duration}
                </span>
              </div>
            </div>

            <div>
              <h4 className="font-heading font-bold text-lg text-[var(--color-text-primary)] mb-2">
                Overview & Scope
              </h4>
              <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed">
                {selectedService.fullDescription}
              </p>
            </div>

            {selectedService.features && (
              <div>
                <h4 className="font-heading font-bold text-sm text-[var(--color-text-primary)] mb-3">
                  Included Benefits & Specifications:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedService.features.map((feat, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-xs font-semibold text-[var(--color-text-primary)] bg-[var(--color-surface-muted)] p-3 rounded-xl border border-[var(--color-border,rgba(255,255,255,0.08))]">
                      <CheckCircle2 className="w-4 h-4 text-[var(--color-primary)] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-[var(--color-border,rgba(255,255,255,0.08))] flex gap-4">
              <Button
                variant="primary"
                size="md"
                className="w-full shadow-lg"
                href="#contact"
                onClick={() => setSelectedService(null)}
                icon="Calendar"
              >
                Schedule & Reserve Service
              </Button>
            </div>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Services;
