import React from 'react';
import heroImage from '../assets/pastworks/2.jpg'; // Adjust path based on where you place the image

const HeroSection = () => {
  return (
    <section
      className="relative h-screen bg-cover bg-center text-white flex items-center justify-end px-4" // Align to right
      style={{
        backgroundImage: `url(${heroImage})`, // Referencing the imported image
      }}
    >
      {/* Dark overlay to ensure text is readable */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Right-Aligned Section Content */}
      <div className="relative z-10 text-right max-w-3xl w-full pr-4 sm:pr-12">
        {/* Heading with custom font and gradient */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 drop-shadow-2xl">
          Powering Tomorrow, Today with Clean, Solar Energy
        </h1>

        {/* Paragraph with enhanced typography */}
        <p className="mt-6 text-sm sm:text-lg md:text-2xl font-light italic text-white opacity-90 leading-relaxed">
          Elevating businesses with innovation, sustainability, and passion.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center"> {/* Align buttons to the right */}
          <button className="px-8 py-3 bg-yellow-500 text-gray-900 rounded-full hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-xl">
            Get Started
          </button>
          <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-xl">
            About Us
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
