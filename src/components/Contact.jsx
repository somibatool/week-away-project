import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1140px] m-auto w-full p-4 py-16'>
      <h2 className='text-center text-gray-700'>Send as a message</h2>
    <p className='text-center  text-gray-700 py-2'> we're standing by!</p>
    <div className='grid md:grid-cols-2'>
        <img className='w-full md:h-full object-cover p-2 max-h-[500px] h-[200px]' src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fG1vdW50YWlufGVufDB8fDB8fHww" alt="" />
        <form>
            <div className='grid grid-cols-2'>
                <input className='border m-2 p-2' type="text"  placeholder='First'/>
                <input className='border m-2 p-2' type="text"  placeholder='Last'/>
                <input className='border m-2 p-2' type="Email"  placeholder='Email'/>
                <input className='border m-2 p-2' type="number"  placeholder='Phone'/>
                <input className='border col-span-2 p-2 m-2' type="text"  placeholder='Address'/>
                <textarea className='border col-span-2 m-2 p-2' cols="30" rows="10"></textarea>
                <button className='col-span-2 m-2'>submit</button>
            </div>
        </form>
    </div>
    </div>
  )
}

export default Contact
