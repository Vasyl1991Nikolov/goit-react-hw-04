import React from 'react';

const ImageGalleryItem = ({ src, alt }) => {
  return (
    <div>
      <img src={src} alt={alt} />
    </div>
  );
};

export default ImageGalleryItem;
