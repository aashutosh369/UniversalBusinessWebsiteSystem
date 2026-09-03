import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import siteConfig from '../../config/siteConfig';
import Container from '../ui/Container';
import { DynamicIcon } from '../../utils/icons';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export const Footer = () => {
  const { businessConfig } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t border-slate-800 transition-colors duration-500">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800/80">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              {businessConfig.logo.image ? (
                <img
                  src={businessConfig.logo.image}
                  alt={businessConfig.name}
                  className="h-10 sm:h-12 w-auto object-contain rounded-lg shadow-md"
                />
              ) : (
                <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)] text-white flex items-center justify-center shadow-lg">
                  <DynamicIcon name={businessConfig.logo.icon} className="w-5 h-5" />
                </div>
              )}
              <div>
                <span className="block font-heading font-extrabold text-xl text-white tracking-tight leading-none">
                  {businessConfig.logo.text}
                </span>
                <span className="block text-[10px] font-semibold tracking-widest text-[var(--color-primary-light)] uppercase mt-0.5">
                  {businessConfig.logo.subtext}
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {businessConfig.tagline}
            </p>

            {/* Social Icons */}
            {businessConfig.socialLinks && (
              <div className="flex items-center gap-3 pt-2">
                {Object.entries(businessConfig.socialLinks).map(([network, url]) => (
                  <a
                    key={network}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-[var(--color-primary)] hover:border-transparent transition-all duration-300 capitalize"
                    aria-label={`Follow on ${network}`}
                  >
                    <DynamicIcon name={network === 'facebook' ? 'Facebook' : network === 'instagram' ? 'Instagram' : network === 'twitter' ? 'Twitter' : network === 'linkedin' ? 'Linkedin' : network === 'youtube' ? 'Youtube' : 'Share2'} className="w-4 h-4" />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Quick Navigation Links */}
          <div>
            <h4 className="font-heading font-bold text-white text-base mb-4 tracking-wide uppercase text-xs">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-sm">
              {siteConfig.navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span className="text-[var(--color-primary-light)]">›</span>
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Key Solutions */}
          <div>
            <h4 className="font-heading font-bold text-white text-base mb-4 tracking-wide uppercase text-xs">
              Key Offerings
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              {businessConfig.servicesConfig?.items.slice(0, 5).map((service) => (
                <li key={service.id}>
                  <a href="#services" className="hover:text-white transition-colors">
                    {service.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="font-heading font-bold text-white text-base mb-4 tracking-wide uppercase text-xs">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[var(--color-primary-light)] shrink-0 mt-1" />
                <span>{businessConfig.contact.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[var(--color-primary-light)] shrink-0" />
                <a href={`tel:${businessConfig.contact.phone}`} className="hover:text-white transition-colors">
                  {businessConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[var(--color-primary-light)] shrink-0" />
                <a href={`mailto:${businessConfig.contact.email}`} className="hover:text-white transition-colors">
                  {businessConfig.contact.email}
                </a>
              </li>
              {businessConfig.contact.operatingHours && (
                <li className="flex items-start gap-3 pt-1 border-t border-slate-900">
                  <Clock className="w-4 h-4 text-[var(--color-primary-light)] shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <span className="block text-slate-300 font-semibold">
                      {businessConfig.contact.operatingHours[0].days}
                    </span>
                    <span>{businessConfig.contact.operatingHours[0].hours}</span>
                  </div>
                </li>
              )}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} {businessConfig.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Powered by <span>Universal Business Website System</span>
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
