// App.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar/SearchBar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import ImageModal from './components/ImageModal/ImageModal';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import Loader from './components/Loader/Loader';

const ACCESS_KEY = 'TSPYXE9lC1w6AVUHuEDi2N3pFqp99tyG9ouVhNJm6dY'; // Замените на ваш ключ


const App = () => {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [modalImage, setModalImage] = useState(null);

  const fetchImages = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.get('https://api.unsplash.com/search/photos', {
        params: { query, page, per_page: 12 },
        headers: { Authorization: `Client-ID ${ACCESS_KEY}` },
      });
      setImages((prevImages) => [...prevImages, ...response.data.results]);
    } catch (err) {
      setError('Failed to load images. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query) {
      fetchImages();
    }
  }, [query, page]);

  const handleSearchSubmit = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const openModal = (imageSrc) => {
    setModalImage(imageSrc);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  return (
    <div>
      <SearchBar onSubmit={handleSearchSubmit} />
      {error && <ErrorMessage message={error} />}
      <ImageGallery
        images={images}
        onImageClick={(src) => openModal(src)}
      />
      {loading && <Loader />}
      {images.length > 0 && !loading && <LoadMoreBtn onClick={handleLoadMore} />}
      <ImageModal isOpen={!!modalImage} imageSrc={modalImage} onClose={closeModal} />
    </div>
  );
};

export default App;
