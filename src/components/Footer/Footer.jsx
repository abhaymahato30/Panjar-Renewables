import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";

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
              VISION OF THE INSTITUTE
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
            <p>
              <a href="/home">Home</a>
            </p>
            <p>
              <a href="/about">About</a>
            </p>
            <p>
              <a href="/Constitution">Constitution</a>
            </p>
            <p>
              <a href="/contactus">ContactUs</a>
            </p>
          </div>
          <hr className="clearfix w-100 d-md-none" />

          <hr className="clearfix w-100 d-md-none" />
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase font-weight-bold">Contact</h6>
            <hr
              className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto"
              style={{ width: "60px" }}
            />
            <p> B I T SINDRI DHANBAD </p>
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
            href="https://www.facebook.com/acebitsindri"
            className="btn btn-outline-danger btn-rounded"
            title="Facebook"
          >
            <FontAwesomeIcon icon={faFacebook} />
          </a>
        </li>
        <li className="list-inline-item">
          <a
            href="https://twitter.com/AceSindri/"
            className="btn btn-outline-danger btn-rounded"
            title="Twitter"
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </li>
        <li className="list-inline-item">
          <a
            href="https://www.instagram.com/acebitsindri/"
            className="btn btn-outline-danger btn-rounded"
            title="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </li>
        <li className="list-inline-item">
          <a
            href="https://www.linkedin.com/in/ace-bit-sindri-82b557222/"
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
        all copyright are reserved @Panjar Renewables
      </div>
    </footer>
  );
};

export default Footer;
