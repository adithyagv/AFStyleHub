// components/cards.js
import React from 'react';
import { FaHeart } from 'react-icons/fa'; // Importing the heart icon
import './cards.css';

const ProductCard = ({ title, imageUrl, detailsPage, onSave }) => {
  return (
    <div className='produc-card'>
      <img src={imageUrl} alt={title} className='produc-image' />
      <div className='produc-info'>
        <h3 className='produc-title'>{title}</h3>
        <FaHeart
          className='save-icon'
          onClick={() => onSave({ title, imageUrl, detailsPage })}
          title="Save this outfit"
        />
      </div>
    </div>
  );
};

export default ProductCard;
