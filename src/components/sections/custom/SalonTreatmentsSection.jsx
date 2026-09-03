import React from 'react';
import Container from '../../ui/Container';
import SectionHeading from '../../ui/SectionHeading';
import Card from '../../ui/Card';
import Badge from '../../ui/Badge';
import { Scissors, Sparkles, Heart } from 'lucide-react';

export const SalonTreatmentsSection = () => {
  const treatments = [
    {
      title: "French Balayage & Gloss",
      desc: "Hand-painted multi-dimensional highlights custom-toned for effortless sun-kissed gloss.",
      price: "$280"
    },
    {
      title: "Organic Keratin Silk Smoother",
      desc: "Eliminate 95% frizz and seal split ends with formaldehyde-free silk amino acids.",
      price: "$240"
    },
    {
      title: "Couture Bridal Hair & Glam",
      desc: "Private VIP suite bridal styling, airbrush makeup, and extension integration.",
      price: "$450"
    }
  ];

  return (
    <section className="py-8 bg-[var(--color-surface-muted)] border-t border-[var(--color-border,#e2e8f0)]">
      <Container>
        <SectionHeading
          badge="Salon Sanctuary"
          badgeIcon="Scissors"
          title="Bespoke Hair & Beauty Treatments"
          subtitle="Experience Paris-trained master colorists and organic hair wellness rituals."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {treatments.map((t, i) => (
            <Card key={i} className="p-6 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-heading font-bold text-lg text-[var(--color-text-primary)]">
                  {t.title}
                </h4>
                <span className="font-heading font-extrabold text-xl text-[var(--color-primary)]">
                  {t.price}
                </span>
              </div>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                {t.desc}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default SalonTreatmentsSection;
