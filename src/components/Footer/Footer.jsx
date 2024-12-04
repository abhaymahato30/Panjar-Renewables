import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer
      id="Footer"
      className="page-footer text-white text-lg font-small stylish-color-dark p-12  bg-gray-900 "
    >
      <div className="container text-center text-md-left pb-8">
        <div className="row">
          <div className="col-md-4 mx-auto">
            {/* Content */}
            <h5 className="text-uppercase font-weight-bold mt-3 mb-4">
              VISION OF THE COMPANY
            </h5>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "70px" }}
            />
            <p>
              To empower a sustainable future by leading the global transition
              to clean, renewable solar energy, making it accessible to every
              home, business, and community, and inspiring a world where the sun
              powers our lives
            </p>
          </div>
          <hr className="clearfix w-100 d-md-none" />
          <div id="link10" className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold">Important Links</h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "70px" }}
            />
             <Link
          to="home"
          className="text-white animated-link text-md cursor-pointer block hover:text-blue-200 transition duration-300 ease-in-out transform hover:scale-110"
        >
          Home
        </Link>
      
    
        <Link
            to="about" 
            smooth={true} 
            duration={300}
            className="text-white animated-link text-md cursor-pointer block hover:text-blue-200 transition duration-300 ease-in-out transform hover:scale-110"
          >
            About
          </Link>
          <Link
            to="team" 
            smooth={true} 
            duration={300}
            className="text-white animated-link text-md cursor-pointer block hover:text-blue-200 transition duration-300 ease-in-out transform hover:scale-110"
          >
            Team
          </Link>
          <Link
          to="products"
           smooth={true} 
           duration={300}
           className="text-white animated-link text-md cursor-pointer block hover:text-blue-200 transition duration-300 ease-in-out transform hover:scale-110"
          >
            Products
          </Link>
          <Link
          to="reviews"
           smooth={true} 
           duration={300}
           className="text-white animated-link text-md cursor-pointer block hover:text-blue-200 transition duration-300 ease-in-out transform hover:scale-110"
          >
            Reviews
          </Link>
          <Link
          to="contact"
           smooth={true} 
           duration={300}
           className="text-white animated-link text-md cursor-pointer block hover:text-blue-200 transition duration-300 ease-in-out transform hover:scale-110"
          >
            Contact
          </Link>
          </div>
          <hr className="clearfix w-100 d-md-none" />

          <hr className="clearfix w-100 d-md-none" />
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4 text-md">
            <h6 className="text-uppercase font-weight-bold">Contact</h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p className="text-base"> 97/D, Usha Siddhi Kunj Vardhman Compound Lalpur, Ranchi, Jharkhand-834001

             BIT Sindri Dhanbad, Jharkhand JUT Namkum Ranchi, Jharkhand </p>
             <p>+91 9430649460</p>
             <p>Panjarrenewables@gmail.com</p>
          </div>
        </div>
      </div>
      <hr />
      {/* Call to action */}
      <ul className="list-unstyled list-inline text-center py-3">
        <li className="list-inline-item">
          <h5 className="mb-1">Register for free</h5>
        </li>
        <li className="list-inline-item">
          <a
            href="https://www.facebook.com/panjarrenewables?mibextid=ZbWKwL"
            className="btn btn-outline-danger btn-rounded"
            title="Facebook"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
       
        <li className="list-inline-item">
          <a
            href="https://www.instagram.com/panjar_renewables/?utm_source=qr&igsh=ZTRjaGo1MzVobGR5"
            className="btn btn-outline-danger btn-rounded"
            title="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li className="list-inline-item">
          <a
            href="https://www.linkedin.com/company/panjar-renewables/"
            className="btn btn-outline-danger btn-rounded"
            title="linkedin"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </ul>
      <hr />
      {/* Copyright */}
      <div className="footer-copyright text-center py-3">
        All copyright are reserved @Panjar Renewables
      </div>
    </footer>
  );
};

export default Footer;
