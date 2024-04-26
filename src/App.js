import React, {useState, useEffect} from 'react';
import TopBar from './components/TopBar';
import NavBar from './components/NavBar';
import { FaBars } from 'react-icons/fa';
import { BsChatSquareDot } from 'react-icons/bs';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram } from 'react-icons/fa';
import Hero from './components/Hero';
import Activities from './components/Activities';
import Booking from './components/Booking';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <TopBar/>
      <NavBar/>
      <Hero/>
      <Activities/>
      <Booking/>
      <Gallery/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;

