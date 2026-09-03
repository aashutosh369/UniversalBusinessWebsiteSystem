import React, { useState } from 'react';
import { ImageOff } from 'lucide-react';

export const ImageFallback = ({ src, alt, className, fallbackIcon, ...props }) => {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  if (hasError || !src) {
    return (
      <div 
        className={`flex flex-col items-center justify-center bg-[var(--color-surface-muted)] text-[var(--color-text-secondary)] border border-[var(--color-border)] ${className}`}
        {...props}
      >
        {fallbackIcon || <ImageOff className="w-8 h-8 mb-2 opacity-50" />}
        <span className="text-xs opacity-60 px-2 text-center">{alt || 'Image unavailable'}</span>
      </div>
    );
  }

  return (
    <>
      {isLoading && (
        <div className={`absolute inset-0 bg-slate-100 dark:bg-slate-800 animate-pulse ${className}`} />
      )}
      <img
        src={src}
        alt={alt}
        className={`${className} ${isLoading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
        onError={handleError}
        onLoad={handleLoad}
        {...props}
      />
    </>
  );
};

export default ImageFallback;
