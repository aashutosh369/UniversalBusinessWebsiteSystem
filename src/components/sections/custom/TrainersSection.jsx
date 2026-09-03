import React from 'react';
import Container from '../../ui/Container';
import SectionHeading from '../../ui/SectionHeading';
import Card from '../../ui/Card';
import Button from '../../ui/Button';
import Badge from '../../ui/Badge';
import { Check, Star } from 'lucide-react';

export const TrainersSection = () => {
  const trainers = [
    {
      name: "Dave 'Iron' Vance",
      role: "Head Strength & Powerlifting Coach",
      specs: "CSCS Certified • 12+ Yrs Coaching • Ex-Powerlifter",
      image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?auto=format&fit=crop&w=600&q=80",
      tag: "Master Coach"
    },
    {
      name: "Marcus Sterling",
      role: "HYROX & High-Intensity Conditioning Director",
      specs: "NASM Master Coach • HYROX World Competitor",
      image: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80",
      tag: "HIIT Director"
    }
  ];

  const plans = [
    {
      name: "Standard Athletic Pass",
      price: "$89",
      period: "/Month",
      badge: "Flexible Access",
      popular: false,
      features: [
        "24/7 Keycard Facility Access 365 Days",
        "Eleiko & Hammer Strength Zone Access",
        "Locker Room & High-Pressure Shower Access",
        "Free High-Speed Wi-Fi & Parking"
      ]
    },
    {
      name: "VIP Performance Pass",
      price: "$149",
      period: "/Month",
      badge: "Best Value",
      popular: true,
      features: [
        "Everything in Standard Athletic Pass",
        "Infrared Sauna & Cold Plunge Suite Access",
        "Unlimited Group Functional HIIT Classes",
        "1 Monthly InBody DEXA Scan & Macro Audit",
        "1 Complimentary Personal Training Session"
      ]
    }
  ];

  return (
    <section className="py-8 bg-[var(--color-surface-muted)] text-[var(--color-text-primary)] transition-colors duration-500">
      <Container>
        <SectionHeading
          badge="Coaching & Memberships"
          badgeIcon="Flame"
          title="Elite Coaches & Membership Tiers"
          subtitle="Train with university-educated strength coaches and select the pass engineered to fuel your physical transformation."
        />

        {/* Head Coaches */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-primary)]">
              Head Athletic Coaches
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {trainers.map((t, i) => (
              <Card key={i} className="flex flex-col sm:flex-row items-center gap-6 p-6 bg-[var(--color-surface-card)] border border-[var(--color-border,rgba(255,255,255,0.08))] hover:border-[var(--color-primary)]/40 transition-all">
                <div className="relative shrink-0">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="w-28 h-28 sm:w-32 sm:h-32 rounded-2xl object-cover shadow-lg"
                  />
                  <div className="absolute -bottom-2.5 left-1/2 -translate-x-1/2">
                    <Badge variant="accent" size="sm">
                      {t.tag}
                    </Badge>
                  </div>
                </div>

                <div className="space-y-2 text-center sm:text-left">
                  <h4 className="font-heading font-extrabold text-xl text-[var(--color-text-primary)]">
                    {t.name}
                  </h4>
                  <p className="text-xs font-bold text-[var(--color-primary)]">
                    {t.role}
                  </p>
                  <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                    {t.specs}
                  </p>
                  <div className="pt-1 flex items-center justify-center sm:justify-start gap-1 text-amber-400 text-xs font-bold">
                    <Star className="w-3.5 h-3.5 fill-amber-400" />
                    <span>5.0 Rated Coach</span>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Membership Plans Grid */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-primary)]">
              Membership Plans
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {plans.map((p, idx) => (
              <Card
                key={idx}
                className={`p-8 flex flex-col justify-between relative bg-[var(--color-surface-card)] ${
                  p.popular
                    ? 'border-2 border-[var(--color-primary)]/70 shadow-lg ring-1 ring-[var(--color-primary)]/30'
                    : 'border border-[var(--color-border,rgba(255,255,255,0.08))]'
                }`}
              >
                {p.popular && (
                  <div className="absolute -top-3.5 right-6">
                    <Badge variant="accent" icon="Flame">
                      {p.badge}
                    </Badge>
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-heading font-extrabold text-[var(--color-text-primary)]">
                      {p.name}
                    </h3>
                    <p className="text-xs text-[var(--color-text-secondary)] mt-1">No annual contract, cancel anytime</p>
                  </div>

                  <div className="flex items-baseline gap-1 bg-[var(--color-primary)]/10 p-4 rounded-xl border border-[var(--color-primary)]/20">
                    <span className="text-4xl sm:text-5xl font-extrabold font-heading text-[var(--color-primary)]">
                      {p.price}
                    </span>
                    <span className="text-sm font-bold text-[var(--color-text-secondary)]">
                      {p.period}
                    </span>
                  </div>

                  <div className="space-y-3 pt-2">
                    {p.features.map((f, i) => (
                      <div key={i} className="flex items-start gap-3 text-xs sm:text-sm font-semibold text-[var(--color-text-primary)]">
                        <div className="w-5 h-5 rounded-full bg-[var(--color-primary)]/20 text-[var(--color-primary)] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                        <span className="leading-snug">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <Button
                    variant={p.popular ? 'primary' : 'outline'}
                    size="lg"
                    href="#contact"
                    className="w-full"
                    icon="Flame"
                  >
                    Select Membership Pass
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default TrainersSection;
