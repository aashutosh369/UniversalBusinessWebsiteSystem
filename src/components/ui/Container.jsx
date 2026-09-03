import React from 'react';

export const Container = ({ children, className = "", size = "default" }) => {
  const sizes = {
    narrow: "max-w-4xl",
    default: "max-w-7xl",
    wide: "max-w-8xl",
    full: "max-w-full"
  };

  return (
    <div className={`mx-auto px-4 sm:px-6 lg:px-8 ${sizes[size] || sizes.default} ${className}`}>
      {children}
    </div>
  );
};

export default Container;
