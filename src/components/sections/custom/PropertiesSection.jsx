import React from 'react';
import Container from '../../ui/Container';
import SectionHeading from '../../ui/SectionHeading';
import Card from '../../ui/Card';
import Badge from '../../ui/Badge';
import Button from '../../ui/Button';
import { Building2, Sparkles, MapPin, Eye } from 'lucide-react';

import { useTheme } from '../../../context/ThemeContext';

export const PropertiesSection = ({ config }) => {
  const { businessConfig } = useTheme();
  const sectionData = businessConfig[config?.dataKey || 'propertiesConfig'];

  if (!sectionData || !sectionData.items) return null;

  const properties = sectionData.items;

  return (
    <section id={config?.id || "featured"} className="py-8 bg-[var(--color-surface-muted)] border-t border-[var(--color-border,#e2e8f0)]">
      <Container>
        <SectionHeading
          badge={sectionData.badge || "Featured Estates"}
          badgeIcon="Building2"
          title={sectionData.title}
          subtitle={sectionData.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {properties.map((p, i) => (
            <Card key={i} className="p-0 overflow-hidden group">
              <div className="relative h-60 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <Badge variant="glass" size="sm">
                    {p.location}
                  </Badge>
                </div>
              </div>
              <div className="p-6 space-y-3">
                <h4 className="font-heading font-bold text-xl text-[var(--color-text-primary)]">
                  {p.title}
                </h4>
                <div className="text-2xl font-extrabold font-heading text-[var(--color-primary)]">
                  {p.price}
                </div>
                <p className="text-xs font-semibold text-[var(--color-text-secondary)]">
                  {p.specs}
                </p>
                <div className="pt-2">
                  <Button variant="outline" size="sm" className="w-full" href="#contact" icon="Eye">
                    Request VIP Private Showing
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default PropertiesSection;
