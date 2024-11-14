import React from 'react';

const LoadMoreBtn = ({ onClick }) => (
  <div style={{ textAlign: 'center', margin: '20px 0' }}>
    <button onClick={onClick}>Load more</button>
  </div>
);

export default LoadMoreBtn;
