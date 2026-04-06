import React from 'react'

function Navbar() {
  return (
    <div className="w-full h-fit py-5.5 bg-green-800 border-b">
        <nav className="flex flex-row items-center justify-center">
            
            <ul className="flex flex-row space-x-10">
                <li><a href="#" className="px-3 py-2 text-lg text-white font-bold hover:scale-110 transition-all duration-100 hover:bg-black rounded-md hover:text-green-700">Home</a></li>
                <li><a href="#" className="px-3 py-2 text-lg text-white font-bold hover:scale-110 transition-all duration-100 hover:bg-black rounded-md hover:text-green-700">Properties</a></li>
                <li><a href="#" className="px-3 py-2 text-lg text-white font-bold hover:scale-110 transition-all duration-100 hover:bg-black rounded-md hover:text-green-700">Agents</a></li>
                <li><a href="#" className="px-3 py-2 text-lg text-white font-bold hover:scale-110 transition-all duration-100 hover:bg-black rounded-md hover:text-green-700">Contact</a></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar