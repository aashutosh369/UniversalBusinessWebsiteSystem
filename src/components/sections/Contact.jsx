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
                className="flex items-center justify-center gap-3 p-4 rounded-[var(--radius-card,1.25rem)] bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>{contact.whatsappText || "Chat Direct on WhatsApp (+91 99117 86111)"}</span>
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
