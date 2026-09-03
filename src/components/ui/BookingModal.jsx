import React, { useState } from 'react';
import { useBooking } from '../../context/BookingContext';
import { useTheme } from '../../context/ThemeContext';
import Modal from './Modal';
import Button from './Button';
import { Calendar, Phone, User, Info, CheckCircle2 } from 'lucide-react';

const BookingModal = () => {
  const { isBookingModalOpen, closeBookingModal, prefilledService } = useBooking();
  const { businessConfig } = useTheme();
  const services = businessConfig.servicesConfig?.items || [];

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: prefilledService?.title || '',
    date: '',
    time: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isBookingModalOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      const message = `Hello ${businessConfig.name}, I would like to book an appointment / site visit.\nName: ${formData.name}\nPhone: ${formData.phone}\nService/Property: ${formData.service || 'General Enquiry'}\nPreferred Date: ${formData.date}\nPreferred Time: ${formData.time}`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${businessConfig.contact.whatsapp}?text=${encodedMessage}`;
      window.open(whatsappUrl, '_blank');
      closeBookingModal();
      setIsSubmitted(false);
      setFormData({ name: '', phone: '', service: '', date: '', time: '' });
    }, 1500);
  };

  return (
    <Modal isOpen={isBookingModalOpen} onClose={closeBookingModal} title="Book Site Visit / Consultation" maxWidth="max-w-md">
      {!isSubmitted ? (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-1">Full Name</label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-secondary)]" />
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full pl-9 pr-4 py-2 bg-[var(--color-surface-muted)] text-[var(--color-text-primary)] border border-[var(--color-border)] rounded-lg text-sm focus:ring-2 focus:ring-[var(--color-primary)] outline-none"
                placeholder="John Doe"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-1">Phone Number / WhatsApp</label>
            <div className="relative">
              <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-secondary)]" />
              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full pl-9 pr-4 py-2 bg-[var(--color-surface-muted)] text-[var(--color-text-primary)] border border-[var(--color-border)] rounded-lg text-sm focus:ring-2 focus:ring-[var(--color-primary)] outline-none"
                placeholder="+91 99117 86111"
              />
            </div>
          </div>

          {services.length > 0 && (
            <div>
              <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-1">Interested Option / Property</label>
              <div className="relative">
                <Info className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[var(--color-text-secondary)]" />
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full pl-9 pr-4 py-2 bg-[var(--color-surface-muted)] text-[var(--color-text-primary)] border border-[var(--color-border)] rounded-lg text-sm focus:ring-2 focus:ring-[var(--color-primary)] outline-none appearance-none"
                >
                  <option value="">General Site Visit Enquiry</option>
                  {services.map((s, i) => (
                    <option key={i} value={s.title}>{s.title}</option>
                  ))}
                </select>
              </div>
            </div>
          )}

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-1">Preferred Date</label>
              <input
                type="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-[var(--color-surface-muted)] text-[var(--color-text-primary)] border border-[var(--color-border)] rounded-lg text-sm focus:ring-2 focus:ring-[var(--color-primary)] outline-none"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[var(--color-text-primary)] mb-1">Preferred Time</label>
              <input
                type="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-[var(--color-surface-muted)] text-[var(--color-text-primary)] border border-[var(--color-border)] rounded-lg text-sm focus:ring-2 focus:ring-[var(--color-primary)] outline-none"
              />
            </div>
          </div>

          <div className="pt-4">
            <Button type="submit" className="w-full shadow-lg" icon="ArrowRight">
              Confirm & Proceed to WhatsApp
            </Button>
          </div>
        </form>
      ) : (
        <div className="flex flex-col items-center justify-center py-8 text-center space-y-4">
          <div className="w-16 h-16 bg-emerald-500/20 text-emerald-500 rounded-full flex items-center justify-center mb-2">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h3 className="text-xl font-bold text-[var(--color-text-primary)]">Request Initiated!</h3>
          <p className="text-sm text-[var(--color-text-secondary)]">
            Redirecting you to WhatsApp to complete your site visit request securely...
          </p>
        </div>
      )}
    </Modal>
  );
};

export default BookingModal;
