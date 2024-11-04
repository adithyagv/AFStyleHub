import React from 'react';
import './productCard.css';

const ProductCard = ({ title, imageUrl, onLike }) => {
  return (
    <div className='product-card'>
      <img src={imageUrl} alt={title} />
      <h3>{title}</h3>
      <button onClick={onLike}>Like</button>
    </div>
  );
};

export default ProductCard;
