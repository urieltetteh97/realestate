import React from 'react'

function AboutUs() {
  return (
    <div className='w-full min-h-screen bg-green-800'>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="py-8 px-5 text-center">
          <h1 className="text-white text-6xl md:text-5xl py-5 text-start font-semibold">Our Story</h1>
          <p className="text-gray-300 text-lg md:text-xl text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
          <p className="text-gray-300 text-lg md:text-xl text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
          <p className="text-gray-300 text-lg md:text-xl text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
          <p className="text-gray-300 text-lg md:text-xl text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
        </div>
        <div className="py-8 px-5">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG91c2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60" alt="About Us" className="w-full h-full object-cover rounded-lg shadow-lg" />
        </div>
      </div>
    </div>
  )
}

export default AboutUs