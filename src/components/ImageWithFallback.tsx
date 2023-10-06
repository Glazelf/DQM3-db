import React, { Component, useState } from 'react';

interface ImageWithFallbackProps {
  alt: string;
  fallbackSrc: string;
  src: string;
};

const ImageWithFallback: FC<ImageWithFallbackProps> = ({ src, fallbackSrc, alt }) => {
  const [imageError, setImageError] = useState<boolean>(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <img
      className='selected-monster'
      src={imageError ? fallbackSrc : src}
      alt={alt}
      onError={handleImageError}
    />
  );
}

export default ImageWithFallback;