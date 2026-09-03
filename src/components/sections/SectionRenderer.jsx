import React from 'react';
import { useTheme } from '../../context/ThemeContext';

// Standard Core Sections
import Hero from './Hero';
import TrustBar from './TrustBar';
import About from './About';
import Services from './Services';
import Features from './Features';
import Gallery from './Gallery';
import Testimonials from './Testimonials';
import FAQ from './FAQ';
import CTA from './CTA';
import Contact from './Contact';
import StepsSection from './StepsSection';
import ShowcaseSection from './ShowcaseSection';

// Industry-Specific Custom Sections
import DoctorsSection from './custom/DoctorsSection';
import TrainersSection from './custom/TrainersSection';
import CoursesSection from './custom/CoursesSection';
import MenuSection from './custom/MenuSection';
import PropertiesSection from './custom/PropertiesSection';
import SalonTreatmentsSection from './custom/SalonTreatmentsSection';
import ConsultingServicesSection from './custom/ConsultingServicesSection';

/**
 * Standard & Extensible Section Component Registry Map
 */
const sectionRegistryMap = {
  hero: Hero,
  trustBar: TrustBar,
  about: About,
  services: Services,
  features: Features,
  gallery: Gallery,
  testimonials: Testimonials,
  faq: FAQ,
  cta: CTA,
  contact: Contact,
  steps: StepsSection,
  technology: ShowcaseSection,
  
  // Industry-Specific Extensions
  doctors: DoctorsSection,
  trainers: TrainersSection,
  courses: CoursesSection,
  menu: MenuSection,
  properties: PropertiesSection,
  treatments: SalonTreatmentsSection,
  advisory: ConsultingServicesSection
};

export const SectionRenderer = () => {
  const { businessConfig } = useTheme();

  const configuredSections = businessConfig.sections || [];

  // Filter active sections and sort by ascending order
  const activeSections = [...configuredSections]
    .filter((sec) => sec.enabled !== false)
    .sort((a, b) => (a.order || 0) - (b.order || 0));

  return (
    <main className="min-h-screen">
      {activeSections.map((sectionConfig) => {
        const sectionType = sectionConfig.type || sectionConfig.id;
        const ComponentToRender = sectionRegistryMap[sectionType];

        if (!ComponentToRender) {
          console.warn(`SectionRenderer: Section component "${sectionType}" not found for id "${sectionConfig.id}".`);
          return null;
        }

        return (
          <ComponentToRender
            key={`${businessConfig.id}-${sectionConfig.id}`}
            config={sectionConfig}
          />
        );
      })}
    </main>
  );
};

export default SectionRenderer;
