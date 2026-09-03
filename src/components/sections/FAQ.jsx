import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Accordion from '../ui/Accordion';
import Card from '../ui/Card';

export const FAQ = () => {
  const { businessConfig } = useTheme();
  const faqConfig = businessConfig.faqConfig;
  const items = faqConfig.items || [];

  const [activeCategory, setActiveCategory] = useState('All');

  if (!items || items.length === 0) return null;

  const categories = ['All', ...new Set(items.map(i => i.category).filter(Boolean))];

  const filteredItems = activeCategory === 'All'
    ? items
    : items.filter(i => i.category === activeCategory);

  return (
    <section id="faq" className="py-8 bg-[var(--color-surface-muted)] text-[var(--color-text-primary)] transition-colors duration-500">
      <Container size="narrow">
        <SectionHeading
          badge={faqConfig.badge || "FAQ"}
          badgeIcon="HelpCircle"
          title={faqConfig.title || "Frequently Asked Questions"}
          subtitle={faqConfig.subtitle}
        />

        {/* Filter Pill Tabs */}
        {categories.length > 2 && (
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-[var(--color-primary)] text-white shadow-md'
                    : 'bg-[var(--color-surface-card)] text-[var(--color-text-secondary)] border border-[var(--color-border,#e2e8f0)] hover:bg-[var(--color-primary)]/10'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <Card padding="p-6 sm:p-10" hoverEffect={false} className="bg-[var(--color-surface-card)]">
          <Accordion items={filteredItems} />
        </Card>
      </Container>
    </section>
  );
};

export default FAQ;
