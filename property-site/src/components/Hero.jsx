import React, { useState, useEffect } from 'react'

function Hero() {
  const slides = [
    {
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      title: "Find Your Dream Home",
      description: "Explore the best properties in town with us."
    },
    {
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      title: "Luxury Living Awaits",
      description: "Discover modern homes designed for comfort and style."
    },
    {
      image: "https://images.unsplash.com/photo-1449844908441-8829872d2607?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      title: "Family Moments Matter",
      description: "Create lasting memories in your perfect family home."
    },
    {
      image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1170&q=80",
      title: "Your Future Starts Here",
      description: "Invest in a property that grows with your dreams."
    }
  ]

  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  return (
    <div className="w-full h-screen relative overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('${slide.image}')` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
            <div className="max-w-4xl">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                {slide.title}
              </h1>
              <p className="text-lg md:text-2xl text-gray-300 mb-8">
                {slide.description}
              </p>
              <a href="#" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-md transition-all duration-300 inline-block">
                Get Started
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
          ></button>
        ))}
      </div>
    </div>
  )
}

export default Hero