import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import SectionRenderer from '../components/sections/SectionRenderer';
import DemoToolbar from '../components/ui/DemoToolbar';
import MobileActionBar from '../components/layout/MobileActionBar';
import BookingModal from '../components/ui/BookingModal';
import siteConfig from '../config/siteConfig';

export const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-100 selection:bg-[var(--color-primary)] selection:text-white pb-[70px] lg:pb-0">
      <BookingModal />
      <MobileActionBar />
      {/* Navbar */}
      <Navbar />

      {/* Dynamic Section Renderer */}
      <SectionRenderer />

      {/* Footer */}
      <Footer />

      {/* Interactive Demo Theme Switcher Toolbar */}
      {siteConfig.features.enableThemeSwitcher && <DemoToolbar />}
    </div>
  );
};

export default Home;
