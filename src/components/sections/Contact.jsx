import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import Button from '../ui/Button';
import { Phone, Mail, MapPin, MessageSquare, CheckCircle2 } from 'lucide-react';

export const Contact = () => {
  const { businessConfig } = useTheme();
  const { contact } = businessConfig;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceInterest: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedSuccess(true);
      setFormData({ fullName: '', email: '', phone: '', serviceInterest: '', message: '' });
      setTimeout(() => setSubmittedSuccess(false), 6000);
    }, 1200);
  };

  if (!contact) return null;

  return (
    <section id="contact" className="py-8 bg-[var(--color-surface)] text-[var(--color-text-primary)] transition-colors duration-500">
      <Container>
        <SectionHeading
          badge="Get In Touch"
          badgeIcon="Phone"
          title={`Contact ${businessConfig.shortName || businessConfig.name}`}
          subtitle="Have questions or ready to book your session? Reach out directly or visit our facility."
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Cards & WhatsApp Button */}
          <div className="lg:col-span-5 space-y-6">
            {/* Phone Card */}
            <Card padding="p-6" className="bg-[var(--color-surface-card)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-[var(--color-text-primary)] text-base">
                    Direct Phone Line
                  </h4>
                  <p className="text-xs text-[var(--color-text-secondary)] mb-2">Speak directly with our team</p>
                  <a
                    href={`tel:${contact.phone.replace(/[^0-9+]/g, '')}`}
                    className="text-base font-bold text-[var(--color-primary)] hover:underline"
                  >
                    {contact.phone}
                  </a>
                </div>
              </div>
            </Card>

            {/* Email Card */}
            <Card padding="p-6" className="bg-[var(--color-surface-card)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-[var(--color-text-primary)] text-base">
                    Email Inquiries
                  </h4>
                  <p className="text-xs text-[var(--color-text-secondary)] mb-2">Send message & questions</p>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-sm font-bold text-[var(--color-primary)] hover:underline"
                  >
                    {contact.email}
                  </a>
                </div>
              </div>
            </Card>

            {/* Address Card */}
            <Card padding="p-6" className="bg-[var(--color-surface-card)]">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-heading font-bold text-[var(--color-text-primary)] text-base">
                    Location Address
                  </h4>
                  <p className="text-xs text-[var(--color-text-secondary)] mt-1 leading-relaxed">
                    {contact.address}
                  </p>
                </div>
              </div>
            </Card>

            {/* WhatsApp Launcher */}
            {contact.whatsapp && (
              <a
                href={`https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(contact.whatsappMessage || '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 p-4 rounded-[var(--radius-card,1.25rem)] bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageSquare className="w-5 h-5 fill-white" />
                <span>Instant WhatsApp Concierge</span>
              </a>
            )}
          </div>

          {/* Right Column: Contact Form & Map */}
          <div className="lg:col-span-7 space-y-6">
            <Card padding="p-6 sm:p-10" className="bg-[var(--color-surface-card)]">
              <h3 className="text-2xl font-heading font-bold text-[var(--color-text-primary)] mb-2">
                Send Us A Message
              </h3>
              <p className="text-sm text-[var(--color-text-secondary)] mb-6">
                Fill out the quick form below and our advisor will reach back out shortly.
              </p>

              {submittedSuccess ? (
                <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 space-y-2 text-center animate-in fade-in">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="font-heading font-bold text-lg">Message Submitted Successfully!</h4>
                  <p className="text-xs">
                    Thank you! We have received your request and will contact you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Alex Morgan"
                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-border,#e2e8f0)] bg-[var(--color-surface-muted)] text-[var(--color-text-primary)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. +1 (555) 000-1122"
                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-border,#e2e8f0)] bg-[var(--color-surface-muted)] text-[var(--color-text-primary)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="alex@example.com"
                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-border,#e2e8f0)] bg-[var(--color-surface-muted)] text-[var(--color-text-primary)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1">
                        Service Interest
                      </label>
                      <select
                        name="serviceInterest"
                        value={formData.serviceInterest}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-[var(--color-border,#e2e8f0)] bg-[var(--color-surface-muted)] text-[var(--color-text-primary)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all"
                      >
                        <option value="">Select interest...</option>
                        {businessConfig.servicesConfig?.items.map(s => (
                          <option key={s.id} value={s.title}>{s.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[var(--color-text-primary)] mb-1">
                      Your Message or Inquiry
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please share any questions or preferred times..."
                      className="w-full px-4 py-3 rounded-xl border border-[var(--color-border,#e2e8f0)] bg-[var(--color-surface-muted)] text-[var(--color-text-primary)] text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)] transition-all"
                    />
                  </div>

                  <Button
                    variant="primary"
                    size="lg"
                    type="submit"
                    isLoading={isSubmitting}
                    icon="Send"
                    className="w-full"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                  </Button>
                </form>
              )}
            </Card>

            {/* Embedded Google Map */}
            {contact.mapEmbedUrl && (
              <div className="rounded-[var(--radius-card,1.25rem)] overflow-hidden border border-[var(--color-border,#e2e8f0)] shadow-md h-64">
                <iframe
                  title="Business Location Map"
                  src={contact.mapEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
