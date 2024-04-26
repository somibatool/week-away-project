import React from 'react'
import { BsChatSquare, BsChatSquareDots } from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='MAX-W-[1140px] w-full py-8 m-auto border-t-4'>
      <div className='flex items-centre m-auto justify-center'>
        <BsChatSquareDots size={30} className='text-[var(--primary-dark)] mr-2'/>
        <h1 className='text-xl font-bold text-gray-700'>WeekAWAY</h1>
      </div>
    </div>
  )
}

export default Footer
