import { useRef, useState } from "react";
import { Link } from 'react-scroll';
import logo1 from "../../assets/general/Logo-3.png";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const container1 = useRef();

  // GSAP animation for logo (initial fade in)
  useGSAP(() => {
    gsap.from("nav img", { opacity: 0, y: -30, duration: 1 });
  });

  return (
    <header className="bg-slate-700 z-20 fixed w-full top-0 shadow-lg">
      <nav className="w-full mx-auto px-6  flex justify-between items-center text-white">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logo1} alt="Logo" className="w-24 h-18 logo" />
        </div>

        {/* Desktop Navigation Links */}
        <div ref={container1} className="text-   hidden md:flex space-x-10">
        <Link to="home" smooth={true} duration={300} className="hover:text-yellow-400 cursor-pointer transition duration-300 transform hover:scale-105">
           Home
          </Link>
          <Link to="about" smooth={true} duration={300} className="hover:text-yellow-400 cursor-pointer transition duration-300 transform hover:scale-105">
            About
          </Link>
          <Link to="team" smooth={true} duration={300} className="hover:text-yellow-400 cursor-pointer transition duration-300 transform hover:scale-105">
            Team
          </Link>
          <Link to="products" smooth={true} duration={300} className="hover:text-yellow-400 cursor-pointer transition duration-300 transform hover:scale-105">
            Products
          </Link>
          <Link to="reviews" smooth={true} duration={300} className="hover:text-yellow-400 cursor-pointer transition duration-300 transform hover:scale-105">
            Reviews
          </Link>
          <Link to="contact" smooth={true} duration={300} className="hover:text-yellow-400 cursor-pointer transition duration-300 transform hover:scale-105">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"} bg-gray-900 z-20 py-6 space-y-6 border-t-2 border-gray-200 transition-all duration-300 ease-in-out flex flex-col justify-center items-center`}
        style={{ padding: '10px' }}
      >
        <Link
          to="about"
          smooth={true}
          duration={300}
          className="text-white hover:text-yellow-400 cursor-pointer transition duration-300 transform hover:scale-105"
          onClick={() => setIsMobileMenuOpen(false)}
        >
         Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={300}
          className="text-white hover:text-yellow-400 cursor-pointer transition duration-300 transform hover:scale-105"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          About
        </Link>
        <Link
          to="team"
          smooth={true}
          duration={300}
          className="text-white hover:text-yellow-400 cursor-pointer transition duration-300 transform hover:scale-105"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Team
        </Link>
        <Link
          to="products"
          smooth={true}
          duration={300}
          className="text-white hover:text-yellow-400 cursor-pointer transition duration-300 transform hover:scale-105"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Products
        </Link>
        <Link
          to="reviews"
          smooth={true}
          duration={300}
          className="text-white hover:text-yellow-400 cursor-pointer transition duration-300 transform hover:scale-105"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Reviews
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={300}
          className="text-white hover:text-yellow-400 cursor-pointer transition duration-300 transform hover:scale-105"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          Contact
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
