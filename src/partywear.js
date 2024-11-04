import React, { useState } from 'react';
import './partywear.css';
import k1 from "./k1.jpg";
import k2 from "./k2.jpg";
import k3 from "./k3.jpg";
import k4 from "./k4.jpg";
import k5 from "./k5.jpg";
import k6 from "./k6.jpg";
import k7 from "./k7.jpg";
import k8 from "./k8.jpg";
import k9 from "./k9.jpg";
import k10 from "./k10.jpg";
import k11 from "./k11.jpg";
import k12 from "./k12.jpg";
const partyOutfits = [
  {
    id: 1,
    title: "Sequined Gown",
    imageUrl: k1,
    description: "A glamorous sequined gown that sparkles under the lights, perfect for evening parties and galas."
  },
  {
    id: 2,
    title: "Velvet Cocktail Dress",
    imageUrl: k2,
    description: "An elegant velvet cocktail dress that exudes luxury and style, ideal for cocktail parties and formal gatherings."
  },
  {
    id: 3,
    title: "Tuxedo Suit",
    imageUrl: k3,
    description: "A classic tuxedo suit tailored to perfection, bringing sophistication to any upscale event or celebration."
  },
  {
    id: 4,
    title: "Embroidered Anarkali",
    imageUrl: k4,
    description: "An exquisite Anarkali dress with detailed embroidery, perfect for traditional parties and festive occasions."
  },
  {
    id: 5,
    title: "Beaded Maxi Dress",
    imageUrl: k5,
    description: "A flowing maxi dress adorned with delicate beadwork, bringing effortless elegance to garden and beach parties."
  },
  {
    id: 6,
    title: "Jumpsuit with Cape",
    imageUrl: k6,
    description: "A chic and contemporary jumpsuit with a dramatic cape, ideal for making a bold statement at any party."
  },
  {
    id: 7,
    title: "Off-Shoulder Ball Gown",
    imageUrl: k7,
    description: "A stunning off-shoulder ball gown that adds a fairytale touch to your night, perfect for formal and grand events."
  },
  {
    id: 8,
    title: "Little Black Dress",
    imageUrl: k8,
    description: "The timeless little black dress, a must-have for cocktail parties and nights out with friends."
  },
  {
    id: 9,
    title: "Shimmery Bodycon Dress",
    imageUrl: k9,
    description: "A figure-hugging bodycon dress with shimmery details, designed to make you shine on the dance floor."
  },
  {
    id: 10,
    title: "Lace Midi Dress",
    imageUrl: k10,
    description: "A graceful lace midi dress that exudes feminine charm, perfect for tea parties and semi-formal occasions."
  },
  {
    id: 11,
    title: "Brocade Sherwani",
    imageUrl: k11,
    description: "A regal brocade sherwani that adds a touch of royalty to traditional celebrations and high-profile gatherings."
  },
  {
    id: 12,
    title: "Satin Slip Dress",
    imageUrl: k12,
    description: "A sleek satin slip dress that drapes elegantly, ideal for minimalist and effortlessly chic party looks."
  }
];


const PartyGallery = () => {
  const [showDescription, setShowDescription] = useState(null);

  return (
    <div className="title">
      <header className='p1'>
        <h1>Partywear Outfits</h1>
      </header>
      <div className="party-gallery">
        {partyOutfits.map((outfit) => (
          <div
            className="party-outfit-card"
            key={outfit.id}
            onMouseEnter={() => setShowDescription(outfit.id)}
            onMouseLeave={() => setShowDescription(null)}
          >
            <img src={outfit.imageUrl} alt={outfit.title} className="party-outfit-image" />
            <h3 className="party-outfit-title">{outfit.title}</h3>
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

export default PartyGallery;
