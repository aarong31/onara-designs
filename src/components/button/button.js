import React from 'react';

import './button.scss';

const Button = ({ children, ...otherProps }) => (
  <button className='button custom' {...otherProps}>
    {children}
  </button>
);

export default Button;