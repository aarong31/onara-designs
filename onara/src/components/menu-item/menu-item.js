import React from 'react';
import '../../main.styles.scss';

const MenuItem = ({ title, imageUrl, fixed, size, positionT}) => (
    <div className={`${size} menu-item`}>
    <div
      className={`${positionT} background-image`}
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;