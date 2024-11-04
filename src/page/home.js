import React, { useState } from 'react';
import './home.css';
import Slider from '../components/slider';
import ProductCard from '../components/cards';
import { CiSearch } from 'react-icons/ci';
import image1 from './assets/s1.jpg';
import image2 from './assets/s2.jpg';
import image3 from './assets/s3.jpg';
import product1 from './assets/product1.jpeg';
import product2 from './assets/product1.jpeg';
import product3 from './assets/product1.jpeg';
import product4 from './assets/product2.jpeg';
import product5 from './assets/product3.jpeg';
import product6 from './assets/product4.jpeg';
import product7 from './assets/product5.jpeg';
import diwali from './assets/diwali.jpg';
import sports from './assets/sports.jpg';
import party from './assets/party.jpg';
import logo from './assets/logo.svg';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const images = [image1, image2, image3];

  const products = [
    { title: 'Product 1', imageUrl: product1, detailsPage: '/product/1' },
    { title: 'Product 2', imageUrl: product2, detailsPage: '/product/2' },
    { title: 'Cream coloured trousers', imageUrl: product3, detailsPage: '/product/3' },
    { title: 'Black-white outfit', imageUrl: product4, detailsPage: '/product/4' },
    { title: 'Brown shirt with white trousers', imageUrl: product5, detailsPage: '/product/5' },
    { title: 'Formal fit with baggy pants', imageUrl: product6, detailsPage: '/product/6' },
    { title: 'White crop-top with black shorts', imageUrl: product7, detailsPage: '/product/7' },
  ];

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchKeyPress = (e) => {
    if (e.key === 'Enter') {
      navigate('/search-results', { state: { query: searchQuery } });
    }
  };

  const handleDiwaliClick = () => {
    navigate('/diwali-gallery');
  };
  const handleSportsWearClick = () => {
    navigate('/formals');
  };
  const handlePartyWearClick = () => {
    navigate('/partywear');
  };

  return (
    <div className="home-body">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      
      <div className="search-overlay">
        <input
          type="text"
          className="search-bar"
          placeholder="Search for outfits..."
          value={searchQuery}
          onChange={handleSearchChange}
          onKeyPress={handleSearchKeyPress}
        />
        <CiSearch className="icons" size={25} />
      </div>
      <div className="top">
        <div className="slider">
          <Slider images={images} interval={5000} />
        </div>
      </div>
      <div className="caption">
        <h2>Check out the latest outfits:</h2>
      </div>
      <div className="produc-slider">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            title={product.title}
            imageUrl={product.imageUrl}
            detailsPage={product.detailsPage}
          />
        ))}
      </div>
      <div className="festival" onClick={handleDiwaliClick}>
        <img src={diwali} alt="Diwali" />
      </div>
      <div className="festival" onClick={handleSportsWearClick}>
        <img src={sports} alt="Sports" />
      </div>
      <div className="festival" onClick={handlePartyWearClick}>
        <img src={party} alt="Party" />
      </div>
    </div>
  );
};

export default Home;
