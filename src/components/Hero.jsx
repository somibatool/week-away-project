import React from 'react'

const Hero = () => {
  return (
    <div className='w-full h=[90vh]'>
        <img src="https://media.istockphoto.com/id/1426559579/photo/female-tourist-enjoying-watching-hot-air-balloons-flying-in-the-sky-at-rooftop-of-hotel-where.webp?b=1&s=170667a&w=0&k=20&c=3UHqaNl-0A91lLqknAUFiv9gcbHEx_GtLtvVKr6GH5c=" alt="" className='w-full h-full object-cover' />
        <div className='max-w-[1140px] m-auto'>
           <div className='absolute top-[40%] w-full md:[50%] max-w-[600px] h-full flex flex-col text-black p-4'>
           <h1 className='font-bold text-4xl'>Find Your Special Trip</h1>
            <h2 className='text-4xl py-4 italic'>With Weekaway</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem enim eos cum, nam voluptatem earum amet? Libero, quia hic aliquid sunt pariatur amet repellat, sit quidem ut neque minus doloremque?</p>
           </div>

        </div>
   </div>
    
  )
}

export default Hero
