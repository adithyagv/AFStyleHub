import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import './SearchResults.css'; // Make sure to create a CSS file for styling
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
import j1 from "./j1.jpg";
import j2 from "./j2.jpg";
import j3 from "./j3.jpg";
import j4 from "./j4.jpg";
import j5 from "./j5.jpg";
import j6 from "./j6.jpg";
import j7 from "./j7.jpg";
import j8 from "./j8.jpg";
import j9 from "./j9.jpg";
import j10 from "./j10.jpg";
import j11 from "./j11.jpg";
import j12 from "./j12.jpg";
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
import k13 from './k13.jpg';
import k14 from './k14.jpg';
import k15 from './k15.jpg';
import k16 from './k16.jpg';
import k17 from './k17.jpg';
import k18 from './k18.jpg';
import k19 from './k19.jpg';
import k20 from './k20.jpg';
import k21 from './k21.jpg';
import k22 from './k22.jpg';
import k23 from './k23.jpg';
import k24 from './k24.jpg';
import k25 from './k25.jpg';
import k26 from './k26.jpg';
import k27 from './k27.jpg';
import k28 from './k28.jpg';
import k29 from './k29.jpg';
import k30 from './k30.jpg';
import k31 from './k31.jpg';
import k32 from './k32.jpg';
import k33 from './k33.jpg';
import k34 from './k34.jpg';
import k35 from './k35.jpg';
import k36 from './k36.jpg';
import k37 from './k37.jpg';
const SearchResults = () => {
  const location = useLocation();
  const { query } = location.state || { query: '' };

  // Sample product data
  const products = [
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
    },
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
    },
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
    },
   
      // Existing data with updated URLs
      {
        id: 1,
        title: 'Traditional Lehenga',
        imageUrl: 'https://images.unsplash.com/photo-1581349483765-80d1b4fca26e', // Replace with your own URL
        description: 'A beautiful traditional lehenga adorned with intricate embroidery, perfect for Diwali festivities.'
      },
      {
        id: 2,
        title: 'Festive Saree',
        imageUrl: 'https://i.pinimg.com/474x/7e/83/f2/7e83f23b1957c6af8acfdfc98e41e8d2.jpg', // Replace with your own URL
        description: 'A stunning saree with vibrant colors and elegant patterns, ideal for making a statement.'
      },
      // Other existing items...
      {
        id: 101,
        title: 'Summer Floral Dress',
        imageUrl: k13,
        description: 'A light and breezy floral dress perfect for warm summer days and casual outings.'
      },
      {
        id: 102,
        title: 'Winter Wool Coat',
        imageUrl: k14,
        description: 'A stylish wool coat to keep you warm and fashionable during the cold season.'
      },
      {
        id: 103,
        title: 'Denim Jacket',
        imageUrl: k15,
        description: 'A classic denim jacket that pairs well with almost any casual outfit.'
      },
      {
        id: 104,
        title: 'Silk Scarf',
        imageUrl: k16,
        description: 'A luxurious silk scarf that adds a touch of elegance to any look.'
      },
      {
        id: 105,
        title: 'Running Sneakers',
        imageUrl: k17,
        description: 'Comfortable and durable sneakers designed for optimal performance during your runs.'
      },
      {
        id: 106,
        title: 'Beach Sandals',
        imageUrl: k18,
        description: 'Lightweight sandals perfect for a day at the beach or poolside relaxation.'
      },
      {
        id: 107,
        title: 'Vintage Leather Bag',
        imageUrl: k19,
        description: 'A vintage leather bag with ample space, ideal for everyday use and style.'
      },
      {
        id: 108,
        title: 'Oversized Hoodie',
        imageUrl: k20,
        description: 'A cozy oversized hoodie perfect for lounging or casual outings.'
      },
      {
        id: 109,
        title: 'Plaid Blazer',
        imageUrl: k21,
        description: 'A trendy plaid blazer that brings sophistication to both casual and formal outfits.'
      },
      {
        id: 110,
        title: 'Corduroy Pants',
        imageUrl: k22,
        description: 'Classic corduroy pants that combine comfort with a retro aesthetic.'
      },
      {
        id: 111,
        title: 'Wool Turtleneck Sweater',
        imageUrl: k23,
        description: 'A warm turtleneck sweater perfect for layering during cold months.'
      },
      {
        id: 112,
        title: 'Puffer Jacket',
        imageUrl: k24,
        description: 'A lightweight puffer jacket that provides warmth without bulk.'
      },
      {
        id: 113,
        title: 'Casual Polo Shirt',
        imageUrl: k25,
        description: 'A versatile polo shirt ideal for a relaxed, casual look.'
      },
      {
        id: 114,
        title: 'High-Waisted Jeans',
        imageUrl: k26,
        description: 'Flattering high-waisted jeans that offer both style and comfort.'
      },
      {
        id: 115,
        title: 'Graphic T-Shirt',
        imageUrl: k27,
        description: 'A trendy graphic T-shirt for a casual and expressive look.'
      },
      {
        id: 116,
        title: 'Wide-Leg Trousers',
        imageUrl: k28,
        description: 'Chic wide-leg trousers that are perfect for both office and casual wear.'
      },
      {
        id: 117,
        title: 'Raincoat',
        imageUrl: k29,
        description: 'A functional and stylish raincoat to keep you dry during wet weather.'
      },
      {
        id: 118,
        title: 'Sports Bra',
        imageUrl: k30,
        description: 'Supportive sports bra designed for high-impact workouts.'
      },
      {
        id: 119,
        title: 'Cargo Shorts',
        imageUrl: k31,
        description: 'Durable cargo shorts with multiple pockets, great for outdoor activities.'
      },
      {
        id: 120,
        title: 'Cashmere Sweater',
        imageUrl: k32,
        description: 'A luxurious cashmere sweater for a cozy and sophisticated winter look.'
      },
      {
        id: 121,
        title: 'Bomber Jacket',
        imageUrl: k33,
        description: 'A modern bomber jacket that adds edge to any outfit.'
      },
      {
        id: 122,
        title: 'Formal Blazer',
        imageUrl: k34,
        description: 'A sharp and tailored blazer perfect for business or formal events.'
      },
      {
        id: 123,
        title: 'Workout Leggings',
        imageUrl: k35,
        description: 'High-performance leggings for a variety of workouts, offering comfort and flexibility.'
      },
      {
        id: 124,
        title: 'Straw Hat',
        imageUrl: k36,
        description: 'A stylish straw hat, perfect for sunny days and beach outings.'
      },
      {
        id: 125,
        title: 'Leather Boots',
        imageUrl: k37,
        description: 'Rugged leather boots that provide both durability and style for various settings.'
      }
    ];
  

 // Filtering logic
 const filteredProducts = products.filter((product) =>
  product.title.toLowerCase().includes(query.toLowerCase())
);

// State to track the hovered product
const [hoveredProduct, setHoveredProduct] = useState(null);

return (
  <div className="search-results">
    <h2>Results for: {query}</h2>
    <div className="product-list">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <div
            key={product.id}
            className="product-card"
            onMouseEnter={() => setHoveredProduct(product.id)}
            onMouseLeave={() => setHoveredProduct(null)}
          >
            <img src={product.imageUrl} alt={product.title} className="product-image" />
            <h3 className="product-title">{product.title}</h3>
            {hoveredProduct === product.id && (
              <div className="description-dialogue">
                <p>{product.description}</p>
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No results found for "{query}"</p>
      )}
    </div>
  </div>
);
};

export default SearchResults;
