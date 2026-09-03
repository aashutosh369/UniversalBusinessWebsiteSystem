import React from 'react';
import Container from '../../ui/Container';
import SectionHeading from '../../ui/SectionHeading';
import Card from '../../ui/Card';
import Badge from '../../ui/Badge';
import { Briefcase, TrendingUp, Award } from 'lucide-react';

export const ConsultingServicesSection = () => {
  const practices = [
    {
      title: "M&A Advisory & Valuation",
      desc: "Sell-side and buy-side due diligence, financial modeling, and target acquisition matching.",
      metric: "$450M Largest Deal"
    },
    {
      title: "Digital Process Automation",
      desc: "Legacy system migration, enterprise workflow automation, and AI analytics dashboards.",
      metric: "30% Cost Reduction"
    },
    {
      title: "100-Day PE Value Creation",
      desc: "Rapid operational turnaround and EBITDA expansion for private equity portfolio firms.",
      metric: "+38% EBITDA Booster"
    }
  ];

  return (
    <section className="py-8 bg-[var(--color-surface-muted)] border-t border-[var(--color-border,#e2e8f0)]">
      <Container>
        <SectionHeading
          badge="Core Practice Areas"
          badgeIcon="Briefcase"
          title="Executive Advisory Practice Areas"
          subtitle="Tailored management consulting led by ex-McKinsey partners."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {practices.map((p, i) => (
            <Card key={i} className="p-6 space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-heading font-bold text-lg text-[var(--color-text-primary)]">
                  {p.title}
                </h4>
              </div>
              <Badge variant="primary" size="sm">
                {p.metric}
              </Badge>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed pt-1">
                {p.desc}
              </p>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default ConsultingServicesSection;
