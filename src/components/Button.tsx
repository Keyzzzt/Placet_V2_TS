import React from 'react';

import '../styles/App.scss';

const Button: React.FC = ({ children }) => {
  return (
    <div className='button-container'>
      <button className='button'>{children}</button>
    </div>
  );
};

export default Button;
