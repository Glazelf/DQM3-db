import React, { FC, useEffect, useState } from 'react';

import { formatFamilyName, isFamily } from '../helpers/monsterDataHelper';

interface ImageWithFallbackProps {
  alt: string;
  src: string;
};

const ImageWithFallback: FC<ImageWithFallbackProps> = ({ src, alt }) => {
  const [imageError, setImageError] = useState<boolean>(false);
  let formattedSource = '';

  const handleImageError = () => {
    setImageError(true);
  };

  if (isFamily(src)) {
    formattedSource = `/families/${src}_icon.png`;
  } else {
    formattedSource = `/monsters/${src}.jpg`;
  }

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
    
    img.onerror = handleImageError;
  }, [formattedSource]);

  return (
    <>
      {!imageError && <img
        className='selected-monster'
        src={formattedSource}
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