import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.css';


const ImageGallery = ({ images }) => {
  if (images.length === 0) return null;

  return (
    <ul>
      {images.map((image) => (
        <li key={image.id}>
          <ImageGalleryItem
            src={image.urls.small}
            alt={image.alt_description || 'Image'}
          />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
