import React, { useState } from 'react';
import './formals.css';
import j1 from "./images/j1.jpg";
import j2 from "./images/j2.jpg";
import j3 from "./images/j3.jpg";
import j4 from "./images/j4.jpg";
import j5 from "./images/j5.jpg";
import j6 from "./images/j6.jpg";
import j7 from "./images/j7.jpg";
import j8 from "./images/j8.jpg";
import j9 from "./images/j9.jpg";
import j10 from "./images/j10.jpg";
import j11 from "./images/j11.jpg";
import j12 from "./images/j12.jpg";


const formalOutfits = [
    {
      id: 1,
      title: "Running Tracksuit",
      imageUrl: j1,
      description: "A sleek, breathable tracksuit designed for ultimate comfort and performance during your runs."
    },
    {
      id: 2,
      title: "Yoga Leggings",
      imageUrl: j2,
      description: "High-waisted, flexible leggings that provide support and stretch for your yoga and workout routines."
    },
    {
      id: 3,
      title: "Gym Tank Top",
      imageUrl: j3,
      description: "A moisture-wicking tank top that keeps you cool and comfortable while you push through tough workouts."
    },
    {
      id: 4,
      title: "Basketball Shorts",
      imageUrl: j4,
      description: "Lightweight and breathable shorts that allow for unrestricted movement on the court."
    },
    {
      id: 5,
      title: "Soccer Jersey",
      imageUrl: j5,
      description: "A stylish and breathable soccer jersey that provides comfort while you dominate the field."
    },
    {
      id: 6,
      title: "Compression Shirt",
      imageUrl: j6,
      description: "A form-fitting compression shirt that enhances muscle support and improves circulation during exercise."
    },
    {
      id: 7,
      title: "Cycling Bib Shorts",
      imageUrl: j7,
      description: "Padded bib shorts that offer excellent support and reduce chafing on long cycling trips."
    },
    {
      id: 8,
      title: "Training Hoodie",
      imageUrl: j8,
      description: "A warm and stylish hoodie, perfect for outdoor workouts or staying cozy during warmups."
    },
    {
      id: 9,
      title: "Tennis Skirt",
      imageUrl: j9,
      description: "A lightweight and breathable tennis skirt that offers style and functionality for the court."
    },
    {
      id: 10,
      title: "Boxing Gloves",
      imageUrl: j10,
      description: "Durable and padded boxing gloves that provide excellent protection and power for your punches."
    },
    {
      id: 11,
      title: "Swim Trunks",
      imageUrl: j11,
      description: "Quick-drying swim trunks designed for comfort and performance during swimming sessions."
    },
    {
      id: 12,
      title: "Hiking Boots",
      imageUrl: j12,
      description: "Sturdy and supportive hiking boots that provide excellent traction on all terrains."
    }
  ];


const FormalGallery = () => {
  const [showDescription, setShowDescription] = useState(null);

  return (
    <div className='title'>
      <header className='p2'>
        <h1>Sportswear Outfits</h1>
      </header>

      <div className="formal-gallery">
        {formalOutfits.map((outfit) => (
          <div
            className="formal-outfit-card"
            key={outfit.id}
            onMouseEnter={() => setShowDescription(outfit.id)}
            onMouseLeave={() => setShowDescription(null)}
          >
            <img src={outfit.imageUrl} alt={outfit.title} className="formal-outfit-image" />
            <h3 className="formal-outfit-title">{outfit.title}</h3>
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

export default FormalGallery;
