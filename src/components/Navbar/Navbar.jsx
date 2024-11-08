// src/components/Navbar.js
import { useState } from "react";
import { Link } from "react-router-dom"; // Assuming you are using React Router
import logo1 from "../../assets/general/Logo1.png"

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header className="bg-white z-20 fixed ">
      <nav className="w-screen mx-auto px-16 py-0 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src={logo1} alt="Logo" className="w-16 h-16 " />
          {/* <span className="text-white text-2xl font-bold">panjar Ren</span> */}
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-10">
          <Link
            to="/home"
            className="text-cyan-950 font-medium text-base hover:text-blue-200 transition duration-300 ease-in-out transform hover:scale-110"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-cyan-950 font-medium text-base hover:text-blue-200 transition duration-300 ease-in-out transform hover:scale-110"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-cyan-950 font-medium text-base hover:text-blue-200 transition duration-300 ease-in-out transform hover:scale-110"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-emerald-950"
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
        className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"} bg-white py-2 px-6 space-y-4`}
      >
        <Link
          to="/home"
          className="text-cyan-950 text-sm block hover:text-blue-200 transition duration-300 ease-in-out transform hover:scale-110"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-cyan-950 text-sm block hover:text-blue-200 transition duration-300 ease-in-out transform hover:scale-110"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-cyan-950 text-sm block hover:text-blue-200 transition duration-300 ease-in-out transform hover:scale-110"
        >
          Contact
        </Link>
      </div>
    </header>
  );
}

export default Navbar;
