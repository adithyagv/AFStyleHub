import React,{useState} from "react";
import Login from "./page/login"
import Register from './page/register';
import Home from "./page/home"
import SearchResults from './page/SearchResults';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import DiwaliGallery from './page/DiwaliGallery';
import Formals from './page/formals';
import Partywear from './page/partywear';
function App() {
  const [savedOutfits, setSavedOutfits] = useState([]);
  return (
    <Router>
      <Routes>
      <Route path='/' element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path='/home' element={<Home />} />
      <Route path="/search-results" element={<SearchResults />} />
      <Route path="/formals" element={<Formals />} />
      <Route path="/diwali-gallery" element={<DiwaliGallery />} />
      <Route path="/partywear" element={<Partywear />} />
      </Routes>
  </Router>

  );
}

export default App;
