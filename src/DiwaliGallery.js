// DiwaliGallery.js
import React, { useState } from 'react';
import './diwaliGallery.css';
import lehenga from "./lehenga.jpg";
import saree from "./saree.jpg";
import kurta from "./kurta.jpg";
import i4 from "./i4.jpg";
import i5 from "./i5.jpg";
import i6 from "./i6.jpg";
import i7 from "./i7.jpg";
import i8 from "./i8.jpg";
import i9 from "./i9.jpg";
import i10 from "./i10.jpg";
import i11 from "./i11.jpg";
import i12 from "./i12.jpg";


const diwaliOutfits = [
  {
    id: 1,
    title: 'Traditional Lehenga',
    imageUrl: lehenga,
    description: 'A beautiful traditional lehenga adorned with intricate embroidery, perfect for Diwali festivities.',
  },
  {
    id: 2,
    title: 'Festive Saree',
    imageUrl: saree,
    description: 'A stunning saree with vibrant colors and elegant patterns, ideal for making a statement.',
  },
  {
    id: 3,
    title: 'Kurta Set',
    imageUrl: kurta,
    description: 'A classy and comfortable kurta set that brings elegance and festivity to your Diwali celebrations.',
  },
  {
    "id": 4,
    "title": "Embroidered Sherwani",
    "imageUrl": i4,
    "description": "A luxurious embroidered sherwani, perfect for traditional festivals and cultural gatherings."
  },
  {
    "id": 5,
    "title": "Printed Anarkali Dress",
    "imageUrl": i5,
    "description": "A vibrant Anarkali dress with intricate prints, bringing elegance to any festive celebration."
  },
  {
    "id": 6,
    "title": "Silk Saree",
    "imageUrl": i6,
    "description": "A graceful silk saree with traditional patterns, ideal for celebrating in style."
  },
  {
    "id": 7,
    "title": "Jacket Lehenga",
    "imageUrl": i7,
    "description": "An exquisite lehenga paired with a matching jacket, blending modern chic with festival traditions."
  },
  {
    "id": 8,
    "title": "Embellished Salwar Suit",
    "imageUrl": i8,
    "description": "A stunning salwar suit adorned with beautiful embellishments, perfect for festive gatherings."
  },
  {
    "id": 9,
    "title": "Classic Dhoti Kurta",
    "imageUrl": i9,
    "description": "A classic dhoti kurta with a modern twist, ideal for traditional celebrations and family events."
  },
  {
    "id": 10,
    "title": "Lehenga Choli",
    "imageUrl": i10,
    "description": "A gorgeous lehenga choli in vibrant colors, bringing festive cheer to every occasion."
  },
  {
    "id": 11,
    "title": "Banarasi Suit",
    "imageUrl": i11,
    "description": "A traditional Banarasi suit with rich patterns, making it a timeless choice for festival wear."
  },
  {
    "id": 12,
    "title": "Floral Embroidered Gown",
    "imageUrl": i12,
    "description": "An elegant gown with delicate floral embroidery, adding a touch of glamour to any festive event."
  }
];

const DiwaliGallery = () => {
  const [showDescription, setShowDescription] = useState(null);

  return (
    <div className='title'>
      <header className='p3'>
        <h1>Festive season outfits</h1>
      </header>
    
    <div className="diwali-gallery">
      
      {diwaliOutfits.map((outfit) => (
        <div
          className="diwali-outfit-card"
          key={outfit.id}
          onMouseEnter={() => setShowDescription(outfit.id)}
          onMouseLeave={() => setShowDescription(null)}
        >
          <img src={outfit.imageUrl} alt={outfit.title} className="diwali-outfit-image" />
          <h3 className="diwali-outfit-title">{outfit.title}</h3>
          {showDescription === outfit.id && (
            <div className="description-dialogue">
              <p>{outfit.description}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
  );
};

export default DiwaliGallery;
