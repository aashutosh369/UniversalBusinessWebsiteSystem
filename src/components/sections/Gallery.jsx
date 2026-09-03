import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Modal from '../ui/Modal';
import ImageFallback from '../ui/ImageFallback';
import { Maximize2 } from 'lucide-react';

export const Gallery = ({ config }) => {
  const { businessConfig } = useTheme();
  const galleryConfig = businessConfig[config?.dataKey || 'galleryConfig'] || businessConfig.galleryConfig;
  const items = galleryConfig?.items || [];

  const [activeCategory, setActiveCategory] = useState('All');
  const [activeItem, setActiveItem] = useState(null);

  if (!items || items.length === 0) return null;

  const categories = ['All', ...new Set(items.map(i => i.category).filter(Boolean))];

  const filteredItems = activeCategory === 'All'
    ? items
    : items.filter(i => i.category === activeCategory);

  return (
    <section id={config?.id || "gallery"} className="py-8 bg-[var(--color-surface-muted)] text-[var(--color-text-primary)] transition-colors duration-500">
      <Container>
        <SectionHeading
          badge={galleryConfig.badge || "Gallery"}
          badgeIcon="Image"
          title={galleryConfig.title || "Visual Showcase"}
          subtitle={galleryConfig.subtitle}
        />

        {/* Filter Buttons */}
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

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <motion.div
              key={`${businessConfig.id}-gallery-${item.id || index}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="relative group rounded-[var(--radius-card,1.25rem)] overflow-hidden shadow-md cursor-pointer border border-[var(--color-border,#e2e8f0)] h-64"
              onClick={() => setActiveItem(item)}
            >
              <ImageFallback
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 text-white">
                <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-primary-light)]">
                  {item.category}
                </span>
                <h4 className="font-heading font-bold text-lg leading-tight mt-1">
                  {item.title}
                </h4>
                <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-white/90">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>Click to view photo</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>

      {/* Lightbox Modal */}
      {activeItem && (
        <Modal
          isOpen={!!activeItem}
          onClose={() => setActiveItem(null)}
          title={activeItem.title}
          maxWidth="max-w-4xl"
        >
          <div className="space-y-4">
            <div className="rounded-xl overflow-hidden max-h-[70vh]">
              <ImageFallback
                src={activeItem.image}
                alt={activeItem.title}
                className="w-full h-full object-contain mx-auto"
              />
            </div>
            <p className="text-sm text-[var(--color-text-secondary)] font-medium">
              {activeItem.caption || activeItem.title}
            </p>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Gallery;
