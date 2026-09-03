import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { BookingProvider } from './context/BookingContext';
import Home from './pages/Home';

export function App() {
  return (
    <ThemeProvider>
      <BookingProvider>
        <Home />
      </BookingProvider>
    </ThemeProvider>
  );
}

export default App;
