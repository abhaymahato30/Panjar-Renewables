// src/components/Navbar.js
import { useRef, useState } from "react";
import { Link } from 'react-scroll' 
<<<<<<< HEAD
import logo1 from "../../assets/general/Logo1.png"
=======
import logo1 from "../../assets/general/Logo-3.png"
>>>>>>> 5b1c0c8 (Add existing project files prior to the push to GitHub.)
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
const container1 = useRef();
const links = document.querySelectorAll('.link');



  useGSAP(
    () => {
        // gsap code here...
        gsap.from("nav img", { 

        opacity:0,
        y:-30,
<<<<<<< HEAD
        delay:2,
        duration:2
=======
        
        duration:1
>>>>>>> 5b1c0c8 (Add existing project files prior to the push to GitHub.)



         }); 
         
         
       
    }
); // <-- scope is for selector text (optional)

  return (
    <header className="bg-white z-20 fixed ">
      <nav className="w-screen mx-auto px-16 py-0 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
<<<<<<< HEAD
          <img src={logo1} alt="Logo" className="w-16 h-16 logo" />
=======
          <img src={logo1} alt="Logo" className="w-32 h-24 logo" />
>>>>>>> 5b1c0c8 (Add existing project files prior to the push to GitHub.)
          {/* <span className="text-white text-2xl font-bold">panjar Ren</span> */}
        </div>

        {/* Desktop Navigation Links */}
        <div ref={container1} className="hidden md:flex space-x-10">
          <Link
            to="about" 
            smooth={true} 
            duration={300}
            className="hover:text-blue-400 cursor-pointer"
          >
            About
          </Link>
          <Link
            to="team" 
            smooth={true} 
            duration={300}
            className="hover:text-blue-400 cursor-pointer"
          >
            Team
          </Link>
          <Link
          to="products"
           smooth={true} 
           duration={300}
           className="hover:text-blue-400 cursor-pointer"
          >
            Products
          </Link>
          <Link
          to="reviews"
           smooth={true} 
           duration={300}
           className="hover:text-blue-400 cursor-pointer"
          >
            Reviews
          </Link>
          <Link
          to="contact"
           smooth={true} 
           duration={300}
           className="hover:text-blue-400 cursor-pointer"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-emerald-950"animated-
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
<<<<<<< HEAD
        className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"} bg-white py-2 px-6 space-y-4`}
=======
        className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"} bg-white py-2 space-y-4`}
>>>>>>> 5b1c0c8 (Add existing project files prior to the push to GitHub.)
      >
        <Link
          to="/home"
          className="text-cyan-950 animated-link text-sm block hover:text-blue-200 transition duration-300 ease-in-out transform hover:scale-110"
        >
          Home
        </Link>
<<<<<<< HEAD
        <Link
          to="/about"
          className="text-cyan-950 animated-link text-sm block hover:text-blue-200 transition duration-300 ease-in-out transform hover:scale-110"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-cyan-950 animated-link text-sm block hover:text-blue-200 transition duration-300 ease-in-out transform hover:scale-110"
        >
          Contact
        </Link>
=======
      
    
        <Link
            to="about" 
            smooth={true} 
            duration={300}
            className="text-cyan-950 animated-link text-sm block hover:text-blue-200 transition duration-300 ease-in-out transform hover:scale-110"
          >
            About
          </Link>
          <Link
            to="team" 
            smooth={true} 
            duration={300}
            className="text-cyan-950 animated-link text-sm block hover:text-blue-200 transition duration-300 ease-in-out transform hover:scale-110"
          >
            Team
          </Link>
          <Link
          to="products"
           smooth={true} 
           duration={300}
           className="text-cyan-950 animated-link text-sm block hover:text-blue-200 transition duration-300 ease-in-out transform hover:scale-110"
          >
            Products
          </Link>
          <Link
          to="reviews"
           smooth={true} 
           duration={300}
           className="text-cyan-950 animated-link text-sm block hover:text-blue-200 transition duration-300 ease-in-out transform hover:scale-110"
          >
            Reviews
          </Link>
          <Link
          to="contact"
           smooth={true} 
           duration={300}
           className="text-cyan-950 animated-link text-sm block hover:text-blue-200 transition duration-300 ease-in-out transform hover:scale-110"
          >
            Contact
          </Link>
>>>>>>> 5b1c0c8 (Add existing project files prior to the push to GitHub.)
      </div>
    </header>
  );
}

export default Navbar;
