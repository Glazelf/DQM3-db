import React, { FC, useEffect, useState } from 'react';

import { formatFamilyName, isFamily } from '../helpers/monsterDataHelper';

interface ImageWithFallbackProps {
  alt: string;
  src: string;
};

const ImageWithFallback: FC<ImageWithFallbackProps> = ({ src, alt }) => {
  const [imageError, setImageError] = useState<boolean>(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const shortenedName = (name: string) => {
    if (isFamily(name)) {
      return formatFamilyName(name);
    }
    if (!name) {
      return name;
    }
    return name?.split(' ').map((part) => part.charAt(0) + '.').join(' ');
  }

  useEffect(() => {
    setImageError(false);
    const img = new Image();
    img.src = src;

    img.onerror = handleImageError;
  }, [src]);

  return (
    <>
      {!imageError && <img
        className='selected-monster'
        src={src}
        alt={alt}
        onError={handleImageError}
      />
      }
      {imageError &&
        <div className='fallback-name'>
          {shortenedName(alt)}
        </div>
      }
    </>
  );
}

export default ImageWithFallback;