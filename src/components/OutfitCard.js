// OutfitCard.js
import React, { useState } from 'react';
import './outfitCard.css';

const OutfitCard = ({ outfit }) => {
  const [showDescription, setShowDescription] = useState(false);

  return (
    <div
      className="outfit-card"
      onMouseEnter={() => setShowDescription(true)}
      onMouseLeave={() => setShowDescription(false)}
    >
      <img src={outfit.image} alt={outfit.title} className="outfit-image" />
      <h3 className="outfit-title">{outfit.title}</h3>
      {showDescription && (
        <div className="description-dialogue">
          <p>{outfit.description}</p>
        </div>
      )}
    </div>
  );
};

export default OutfitCard;
