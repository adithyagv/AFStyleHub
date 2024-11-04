// OutfitGallery.js
import React, { useState } from 'react';
import OutfitCard from './OutfitCard';
import './outfitGallery.css';

const OutfitGallery = ({ outfits }) => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter outfits based on the search query
  const filteredOutfits = outfits.filter((outfit) =>
    outfit.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="gallery-container">
      <input
        type="text"
        placeholder="Search for an outfit..."
        className="search-bar"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div className="outfit-gallery">
        {filteredOutfits.map((outfit) => (
          <OutfitCard key={outfit.id} outfit={outfit} />
        ))}
      </div>
    </div>
  );
};

export default OutfitGallery;
