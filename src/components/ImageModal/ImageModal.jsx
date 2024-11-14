import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, imageSrc, onClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={{
        overlay: { backgroundColor: 'rgba(0, 0, 0, 0.8)' },
        content: { inset: '10% 10%', padding: '0' }
      }}
    >
      <img src={imageSrc} alt="Large version" style={{ width: '100%', height: 'auto' }} />
      <button onClick={onClose} style={{ position: 'absolute', top: 10, right: 10 }}>Close</button>
    </Modal>
  );
};

export default ImageModal;
