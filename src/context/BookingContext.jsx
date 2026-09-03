import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState(null);

  const openBookingModal = (service = null) => {
    setPrefilledService(service);
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
    setPrefilledService(null);
  };

  return (
    <BookingContext.Provider
      value={{
        isBookingModalOpen,
        prefilledService,
        openBookingModal,
        closeBookingModal,
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => useContext(BookingContext);
