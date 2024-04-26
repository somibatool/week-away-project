import React from 'react'

const Gallery = () => {
  return (
    <div id='gallery' className='max-w-[1140px] m-auto w-full px-4 py-16'>
      <h2 className='text-center text-gray-700 p-4'>Gallery</h2>
      <div className='grid sm:grid-cols-5 gap-4'>
        <div className='sm:col-span-3 col-span-2 row-span-2'>
            <img className='w-full h-full object-cover ' src="https://media.istockphoto.com/id/689608638/photo/dusk-over-river.webp?b=1&s=170667a&w=0&k=20&c=t1KMobfuxV1yENcl7bOC3iS0gC5__e5Sekh7LZc85nE=" alt="" />
        </div>
        <div>
            <img className='w-full h-full object-cover ' src="https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.webp?b=1&s=170667a&w=0&k=20&c=VqVR2PMyaneOTn8f6wgEgM2V-zsHCzFMk6Wnm_kAf_k=" alt="" />
        </div>
        <div>
            <img className='w-full h-full object-cover ' src="https://media.istockphoto.com/id/1496615469/photo/serene-latin-woman-enjoy-sunset-with-gratitude.webp?b=1&s=170667a&w=0&k=20&c=G_ZZE_LmVpXi8VAJY85TfEu3L1Vw8FxTYJ0Fc0mDCU4=" alt="" />
        </div>
        <div>
            <img  className='w-full h-full object-cover 'src="https://media.istockphoto.com/id/831484332/photo/bird-feeding-at-backyard-feeder.webp?b=1&s=170667a&w=0&k=20&c=7DuOx6CCZ64ww9mVyFrEGjr0F-s2-3FUYlKZDyCAeUg=" alt="" />
        </div>
        <div>
            <img  className='w-full h-full object-cover 'src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG5hdHVyZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Gallery
