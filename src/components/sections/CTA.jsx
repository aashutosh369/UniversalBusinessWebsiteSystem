import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import Container from '../ui/Container';
import Button from '../ui/Button';
import Badge from '../ui/Badge';
import { Phone } from 'lucide-react';

export const CTA = ({ config }) => {
  const { businessConfig } = useTheme();
  const cta = businessConfig[config?.dataKey || 'cta'];

  if (!cta) return null;

  return (
    <section id={config?.id || "cta"} className="py-10 bg-[var(--color-secondary)] text-white relative overflow-hidden transition-colors duration-500">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--color-primary)]/20 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6 bg-black/40 backdrop-blur-xl border border-white/10 p-8 sm:p-14 rounded-[var(--radius-card,1.75rem)] shadow-2xl">
          {cta.badge && (
            <Badge variant="accent" size="lg" icon="Sparkles" className="mx-auto">
              {cta.badge}
            </Badge>
          )}

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold tracking-tight text-white leading-tight">
            {cta.title}
          </h2>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
            {cta.description}
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              variant="primary"
              size="lg"
              href={cta.buttonHref || "#contact"}
              icon="Calendar"
              className="w-full sm:w-auto shadow-glow"
            >
              {cta.buttonText}
            </Button>

            {cta.phoneCallText && (
              <a
                href={`tel:${businessConfig.contact.phone.replace(/[^0-9+]/g, '')}`}
                className="flex items-center gap-2 text-sm font-semibold text-slate-300 hover:text-white transition-colors py-3 px-6"
              >
                <Phone className="w-4 h-4 text-[var(--color-primary-light)]" />
                <span>{cta.phoneCallText}</span>
              </a>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default CTA;
