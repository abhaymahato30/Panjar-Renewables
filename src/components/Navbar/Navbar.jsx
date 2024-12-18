import { useState } from "react";
import { Link } from "react-scroll";
import logo1 from "../../assets/general/Logo-3.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { FaWhatsapp } from "react-icons/fa"; // Import WhatsApp icon from react-icons

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  // GSAP animation for logo (initial fade in)
  useGSAP(() => {
    gsap.from("nav img", { opacity: 0, y: -30, duration: 1 });
  });

  return (
    <>
      {/* Banner Above Navbar */}
      <div className="bg-yellow-500 text-center py-2 text-white font-medium text-sm md:text-base z-30 fixed top-0 w-full">
        <a
         href="https://wa.me/9430649460" 
         target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 hover:text-gray-900 transition-all duration-300"
        >
          <FaWhatsapp className="text-white text-lg" /> {/* WhatsApp Icon */}
          For bulk orders, contact us on WhatsApp
        </a>
      </div>

      {/* Navbar */}
      <header className="z-20 fixed w-full top-0 shadow-lg bg-slate-900 mt-8"> {/* Change to bg-yellow-700 */}
        <nav className="w-full mx-auto px-6 flex justify-between items-center text-white py-4">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img src={logo1} alt="Logo" className="w-32 h-20 logo" />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex space-x-12 text-lg font-medium font-sans tracking-wide uppercase">
            <Link
              to="home"
              smooth={true}
              duration={300}
              className="hover:text-yellow-400 cursor-pointer transition duration-300 transform hover:scale-105 hover:underline"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={300}
              className="hover:text-yellow-400 cursor-pointer transition duration-300 transform hover:scale-105 hover:underline"
            >
              About
            </Link>
            <Link
              to="team"
              smooth={true}
              duration={300}
              className="hover:text-yellow-400 cursor-pointer transition duration-300 transform hover:scale-105 hover:underline"
            >
              Team
            </Link>
            <Link
              to="products"
              smooth={true}
              duration={300}
              className="hover:text-yellow-400 cursor-pointer transition duration-300 transform hover:scale-105 hover:underline"
            >
              Products
            </Link>
            <Link
              to="reviews"
              smooth={true}
              duration={300}
              className="hover:text-yellow-400 cursor-pointer transition duration-300 transform hover:scale-105 hover:underline"
            >
              Reviews
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={300}
              className="hover:text-yellow-400 cursor-pointer transition duration-300 transform hover:scale-105 hover:underline"
            >
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
          className={`md:hidden ${isMobileMenuOpen ? "block" : "hidden"} bg-gray-900 z-20 py-6 space-y-6 border-t-2 border-gray-200 transition-all duration-300 ease-in-out flex flex-col justify-center items-center`}
          style={{ padding: "10px" }}
        >
          <Link
            to="home"
            smooth={true}
            duration={300}
            className="text-lg font-medium font-sans text-white hover:text-yellow-400 cursor-pointer transition duration-300 transform hover:scale-105 hover:underline"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={300}
            className="text-lg font-medium font-sans text-white hover:text-yellow-400 cursor-pointer transition duration-300 transform hover:scale-105 hover:underline"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link
            to="team"
            smooth={true}
            duration={300}
            className="text-lg font-medium font-sans text-white hover:text-yellow-400 cursor-pointer transition duration-300 transform hover:scale-105 hover:underline"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Team
          </Link>
          <Link
            to="products"
            smooth={true}
            duration={300}
            className="text-lg font-medium font-sans text-white hover:text-yellow-400 cursor-pointer transition duration-300 transform hover:scale-105 hover:underline"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Products
          </Link>
          <Link
            to="reviews"
            smooth={true}
            duration={300}
            className="text-lg font-medium font-sans text-white hover:text-yellow-400 cursor-pointer transition duration-300 transform hover:scale-105 hover:underline"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Reviews
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={300}
            className="text-lg font-medium font-sans text-white hover:text-yellow-400 cursor-pointer transition duration-300 transform hover:scale-105 hover:underline"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </header>
    </>
  );
}

export default Navbar;
