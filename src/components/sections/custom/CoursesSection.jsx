import React from 'react';
import Container from '../../ui/Container';
import SectionHeading from '../../ui/SectionHeading';
import Card from '../../ui/Card';
import Button from '../../ui/Button';
import Badge from '../../ui/Badge';
import { GraduationCap, BookOpen, Award, CheckCircle2 } from 'lucide-react';

export const CoursesSection = () => {
  const faculty = [
    {
      name: "Prof. Rajesh Verma, PhD",
      role: "Head of Physics & STEM Pedagogy",
      exp: "Ex-IIT Kanpur Professor, 20+ Yrs Experience",
      image: "/images/coaching/mentor-1.jpg"
    },
    {
      name: "Dr. Ananya Sharma, MD",
      role: "Department Chair — Organic Biology & Chemistry",
      exp: "AIIMS New Delhi Rank 1 Alumni",
      image: "/images/coaching/mentor-2.jpg"
    }
  ];

  return (
    <section className="py-8 bg-[var(--color-surface-muted)] border-t border-[var(--color-border,#e2e8f0)]">
      <Container>
        <SectionHeading
          badge="Faculty & Pedagogy"
          badgeIcon="GraduationCap"
          title="Renowned Academic Faculty & Mentors"
          subtitle="Learn directly from IIT, AIIMS, and PhD professors with a proven rank-producing track record."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {faculty.map((f, i) => (
            <Card key={i} className="flex flex-col sm:flex-row items-center gap-6 p-6">
              <img
                src={f.image}
                alt={f.name}
                className="w-28 h-28 rounded-2xl object-cover shrink-0 border-2 border-[var(--color-primary)]"
              />
              <div className="space-y-1.5 text-center sm:text-left">
                <h4 className="font-heading font-bold text-lg text-[var(--color-text-primary)]">
                  {f.name}
                </h4>
                <p className="text-xs font-semibold text-[var(--color-primary)]">
                  {f.role}
                </p>
                <p className="text-xs text-[var(--color-text-secondary)]">
                  {f.exp}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default CoursesSection;
