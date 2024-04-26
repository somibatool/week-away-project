// import React from 'react';
import { AiFillPhone, AiOutlineClockCircle } from 'react-icons/ai'; // Corrected import statement
import { BsChatSquareDots } from 'react-icons/bs';

const TopBar = () => {
  return (
    <div className='flex justify-between items-centre px-4 py-2'>
      <div className='flex items-centre'>
        <BsChatSquareDots  size={30} className='text-[var{--primary-dark}] mr-2'/>
        <h1 className='text-xl font-bold text-gray-700'>WEEKWAY</h1>
      </div>
      <div className='flex'>
        <div className='hidden md:flex items-centre px-6'>
          <AiOutlineClockCircle size={28} className='mr-2 text-[var{--primary-dark}]'/>
          <p className='text-sm text-gray-700'>9PM-5PM</p>
        </div>
        <div className='hidden md:flex items-centre px-6'>
            <AiFillPhone size={20} className='mr-2 text-[var{--primary-dark}]'/>
            <p className='text-sm text-gray-700'>1-888-817-1234</p>
        </div>
        <button>Get a Free Quote</button>
      </div>
    </div>
  );
};

export default TopBar;
