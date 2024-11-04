import React from 'react';
import './savedOutfits.css';

const SavedOutfitsPage = ({ location }) => {
  const likedOutfits = location.state?.likedOutfits || [];

  return (
    <div className='saved-outfits-page'>
      <h2>Saved Outfits</h2>
      <div className='saved-outfits'>
        {likedOutfits.map((outfit, index) => (
          <div className='outfit-card' key={index}>
            <img src={outfit.imageUrl} alt={outfit.title} />
            <h3>{outfit.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedOutfitsPage;
