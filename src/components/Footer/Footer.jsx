import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="page-footer text-white text-lg font-small p-12 bg-gray-900">
      <div className="container text-center text-md-left pb-8">
        <div className="row">
          {/* Vision Section */}
          <div className="col-md-4 mx-auto">
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
              powers our lives.
            </p>
          </div>

          {/* Important Links */}
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold">Important Links</h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "70px" }}
            />

            <ScrollLink
              to="home"
              smooth={true}
              duration={300}
              className="text-white cursor-pointer block hover:text-blue-200 transition duration-300 ease-in-out transform hover:scale-110"
            >
              Home
            </ScrollLink>

            <ScrollLink
              to="about"
              smooth={true}
              duration={300}
              className="text-white cursor-pointer block hover:text-blue-200 transition duration-300 ease-in-out transform hover:scale-110"
            >
              About
            </ScrollLink>

            <ScrollLink
              to="team"
              smooth={true}
              duration={300}
              className="text-white cursor-pointer block hover:text-blue-200 transition duration-300 ease-in-out transform hover:scale-110"
            >
              Team
            </ScrollLink>

            <ScrollLink
              to="products"
              smooth={true}
              duration={300}
              className="text-white cursor-pointer block hover:text-blue-200 transition duration-300 ease-in-out transform hover:scale-110"
            >
              Products
            </ScrollLink>

            {/* Corrected Router Link for Page Navigation */}
            <RouterLink
              to="/policy"
              className="text-white block hover:text-blue-200 transition duration-300 ease-in-out transform hover:scale-110"
            >
              Policy
            </RouterLink>

            <ScrollLink
              to="contact"
              smooth={true}
              duration={300}
              className="text-white cursor-pointer block hover:text-blue-200 transition duration-300 ease-in-out transform hover:scale-110"
            >
              Contact
            </ScrollLink>
          </div>

          {/* Contact Section */}
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase font-weight-bold">Contact</h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p className="text-base">
              97/D, Usha Siddhi Kunj Vardhman Compound Lalpur, Ranchi,
              Jharkhand-834001
            </p>
            <p className="mt-4">
              BIT Sindri Dhanbad, Jharkhand JUT Namkum Ranchi, Jharkhand
            </p>
            <p>+91 9430649460</p>
            <p>Panjarrenewables@gmail.com</p>
          </div>
        </div>
      </div>

      <hr />

      {/* Social Links */}
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
            title="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
        </li>
      </ul>

      <hr />

      {/* Copyright */}
      <div className="text-center py-3">
        All copyright are reserved © Panjar Renewables
      </div>
    </footer>
  );
};

export default Footer;
