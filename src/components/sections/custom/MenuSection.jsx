import React from 'react';
import Container from '../../ui/Container';
import SectionHeading from '../../ui/SectionHeading';
import Card from '../../ui/Card';
import Badge from '../../ui/Badge';
import { Utensils, Sparkles, Flame } from 'lucide-react';

export const MenuSection = () => {
  const menuHighlights = [
    {
      title: "Woodfired Prime Ribeye",
      price: "$85",
      desc: "45-day dry aged A5 Wagyu cooked over white oak embers with black truffle reduction.",
      tag: "Chef Specialty"
    },
    {
      title: "Maine Lobster Tagliatelle",
      price: "$46",
      desc: "Hand-rolled egg ribbon pasta with poached lobster tail, saffron cream & Norcia truffles.",
      tag: "Popular"
    },
    {
      title: "Artisanal Burrata Pizza",
      price: "$32",
      desc: "72-hour sourdough crust baked at 900°F with imported Apulian burrata and wild mushrooms.",
      tag: "Woodfired"
    }
  ];

  return (
    <section className="py-8 bg-[var(--color-surface-muted)] border-t border-[var(--color-border,#e2e8f0)]">
      <Container>
        <SectionHeading
          badge="Executive Menu"
          badgeIcon="Utensils"
          title="Chef Antoine's Signature Creations"
          subtitle="Explore our artisanal woodfired dishes crafted with organic local harvests."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {menuHighlights.map((m, i) => (
            <Card key={i} className="p-6 space-y-3 relative">
              <div className="flex items-center justify-between">
                <h4 className="font-heading font-bold text-lg text-[var(--color-text-primary)]">
                  {m.title}
                </h4>
                <span className="font-heading font-extrabold text-xl text-[var(--color-primary)]">
                  {m.price}
                </span>
              </div>
              <Badge variant="accent" size="sm">
                {m.tag}
              </Badge>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed pt-1">
                {m.desc}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MenuSection;
