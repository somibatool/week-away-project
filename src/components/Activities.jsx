import React from 'react'

const Activities = () => {
  return (
    <div className='max-w-[1140px] m-auto w-full md:flex mt=[-75px]'>  
      <div className='relative p-4'>
        <h3 className='absolute z-20 top=[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%] text-2xl text-white font-bold mt-5'>Beach</h3>
      <img className='w-full h-full object-cover relative  border-4 border-white shadwo-lg'
       src="https://media.istockphoto.com/id/1457724042/photo/happy-asian-family-that-enjoys-beach-activities-during-the-summer-holidays-parent-and.webp?b=1&s=170667a&w=0&k=20&c=pABogBM41Q7vzZYfWsku0B3cWoVs4Ul3kHaJ2QbDvRs=" alt="" />
      </div>
      <div className='relative p-4'>
        <h3 className='absolute z-10 top=[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl text-white font-bold mt-5'>Nature</h3>
      <img src="https://media.istockphoto.com/id/1350993173/photo/winding-coast-road-in-corsica.webp?b=1&s=170667a&w=0&k=20&c=ysJU3NQUzj_GgVmwtCVvwa8XzzWPfnF3OSh3i4MxLIQ=" alt="" />
      </div>
      <div className='relative p-4'>
        <h3 className='absolute z-10 top=[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-2xl text-white font-bold mt-5'>Flower</h3>
      <img src="https://media.istockphoto.com/id/1461618586/photo/bird-taking-off.webp?b=1&s=170667a&w=0&k=20&c=qEYBDdJubL5xKPZ215O_rWYq7FE3IPjMExTizS8yQ1k=" alt="" />
      </div>
      
    </div>
    
  )
}

export default Activities
