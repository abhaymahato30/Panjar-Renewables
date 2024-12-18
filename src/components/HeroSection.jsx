import React from 'react';
import heroImage from '../assets/pastworks/2.jpg'; // Adjust path
import { Link } from 'react-scroll';

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-cover bg-center text-white flex items-center justify-center px-4" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 text-center max-w-3xl w-full pr-4 sm:pr-12">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight md:leading-[1.5] text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 drop-shadow-2xl">
          Empowering lives with solar energy
        </h1>
        <p className="mt-6 text-sm sm:text-lg md:text-2xl font-light italic text-white opacity-90 leading-relaxed">
          Elevating businesses with innovation, sustainability, and passion.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center">
          <Link to="about">
            <button className="px-8 py-3 bg-yellow-500 text-gray-900 rounded-full hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-xl">
              About Us
            </button>
          </Link>
          <Link to="contact">
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-xl">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
