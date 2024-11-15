import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import heroImage from '../assets/pastworks/2.jpg'; // Adjust path
import { Link } from 'react-scroll';

const HeroSection = () => {
  const headingRef = useRef();
  const subheadingRef = useRef();
  const buttonRefs = useRef([]);

  useEffect(() => {
    // Create a GSAP timeline for continuous animation
    const tl = gsap.timeline({ repeat: -1, yoyo: true });

    // Heading Animation (no marker setting)
    tl.fromTo(headingRef.current, 
      { opacity: 0, x: -100 }, 
      { 
        opacity: 1, 
        x: 0, 
        duration: 2, 
        ease: 'power3.out', 
        repeatDelay: 1
      });

    // Subheading Animation
    tl.fromTo(subheadingRef.current, 
      { opacity: 0, x: -100 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 2, 
        ease: 'power3.out',
        repeatDelay: 1
      }, "<+0.5"); // Starts with a slight delay after the heading animation

    // Button Animations (looping)
    tl.fromTo(buttonRefs.current, 
      { opacity: 0, y: 30 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 2, 
        
        stagger: 0.3, 
        ease: 'power3.out',
        repeatDelay: 1 
      }, "<+1"); // Starts after subheading animation

  }, []);

  return (
    <section className="relative h-screen bg-cover bg-center text-white flex items-center justify-end px-4" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative z-10 text-right max-w-3xl w-full pr-4 sm:pr-12">
        <h1 ref={headingRef} className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 drop-shadow-2xl">
        Empowering life with solar energy  
        </h1>
        <p ref={subheadingRef} className="mt-6 text-sm sm:text-lg md:text-2xl font-light italic text-white opacity-90 leading-relaxed">
          Elevating businesses with innovation, sustainability, and passion.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-6 justify-center">
          <Link to="about">
          <button ref={el => buttonRefs.current[0] = el} className="px-8 py-3 bg-yellow-500 text-gray-900 rounded-full hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105 shadow-xl">
            About Us
          </button>
          </Link>
         <Link to="contact">
         <button ref={el => buttonRefs.current[1] = el} className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105 shadow-xl">
            Contact Us
          </button>
         
         </Link>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
