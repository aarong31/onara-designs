import React from 'react';

import CustomButton from '../button/button';

import './collection-item.scss';

const CollectionItem = ({ id, name, price, imageUrl }) => (
  <div className='collection-item'>
    <div
      className='image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='collection-footer'>
      <span className='name has-text-black'>{name}</span>
      <span className='price has-text-black'>${price}</span>
    </div>
    <CustomButton> Add to Cart </CustomButton>
  </div>
);

export default CollectionItem;