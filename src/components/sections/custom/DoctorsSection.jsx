import React from 'react';
import { useTheme } from '../../../context/ThemeContext';
import Container from '../../ui/Container';
import SectionHeading from '../../ui/SectionHeading';
import Card from '../../ui/Card';
import ImageFallback from '../../ui/ImageFallback';
import { Stethoscope, Award, Calendar } from 'lucide-react';

export const DoctorsSection = ({ config }) => {
  const { businessConfig } = useTheme();
  const sectionData = businessConfig[config?.dataKey || 'doctorsConfig'];

  if (!sectionData || !sectionData.items) return null;

  return (
    <section className="py-10 bg-[var(--color-surface)] border-t border-[var(--color-border,#e2e8f0)]">
      <Container>
        <SectionHeading
          badge={sectionData.badge || "Our Team"}
          badgeIcon="Stethoscope"
          title={sectionData.title}
          subtitle={sectionData.subtitle}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {sectionData.items.map((doc, idx) => (
            <Card key={idx} className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-[var(--color-surface-card)]">
              <ImageFallback
                src={doc.image}
                alt={doc.name}
                className="w-28 h-28 rounded-2xl object-cover shrink-0 border-2 border-[var(--color-primary)]/20"
              />
              <div className="space-y-2 text-center sm:text-left">
                <h4 className="font-heading font-bold text-lg text-[var(--color-text-primary)]">
                  {doc.name}
                </h4>
                <p className="text-xs font-semibold text-[var(--color-primary)]">
                  {doc.role || doc.specialty}
                </p>
                <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                  {doc.bio}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default DoctorsSection;
