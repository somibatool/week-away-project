import React, { useState, useEffect } from 'react';
// import {FaBars} from 'react-icons/fa'
import { BsChatSquareDots } from 'react-icons/bs'
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaInstagram, FaBars } from 'react-icons/fa'


const NavBar = () => {
  const [nav, setNav]= useState(false)
  const handleNav=()=>{
    setNav(!nav)
  }
  return (
    <div className='w-full min-h-[50px] overflow-y-hidden flex justify-between items-center absolute z-10 text-white bg-gray-700/80'>
      <ul className='overflow-y-hidden sm:flex px-4'>
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#gallery">Gallery</a>
        </li>
        <li>
          <a href="#deals">Deals</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>

      </ul>

      <div className='flex justify-between'>
        <FaFacebookF className='mx-4'/>
        <FaTwitter className='mx-4'/>
        <FaGooglePlusG className='mx-4'/>
        <FaInstagram className='mx-4'/>
      </div>
      <div onClick={handleNav} className='sm:hidden z-10'>
        <FaBars size={20} className='mr-4 cursor-pointer'/>
      </div>
      {/* mobile menu */}
      <div onClick={handleNav} className={nav ? "overflow-y-hidden  md:hidden  ease-in duration-300 absolute text-gray-300 left-8 top-0 w-full h-screen bg-black/90 px-4 py-7 flex flex-col":'absolute top-0 h-screen left=[-100%] ease-in duration-500'}>
        <ul className='h-full w-full text-center pt-12'>
        <li className='text-2xl py-8'>
          <a href="#">Home</a>
        </li>
        <li className='text-2xl py-8'>
          <a href="#gallery">Gallery</a>
        </li>
        <li className='text-2xl py-8'>
          <a href="#deals">Deals</a>
        </li>
        <li className='text-2xl py-8'>
          <a href="#contact">Contact</a>
        </li>
          
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
