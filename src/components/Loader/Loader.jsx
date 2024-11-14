import React from 'react';
import { TailSpin } from 'react-loader-spinner';

const Loader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
    <TailSpin height="50" width="50" color="blue" />
  </div>
);

export default Loader;
