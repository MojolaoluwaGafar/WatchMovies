import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-light py-5">
      <div className="container">
        {/* Top Section */}
        <div className="row mb-4">
          {/* About Section */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">About WatchNow</h5>
            <p className="small">
              WatchNow is your one-stop destination for movies and TV shows.
              Discover, explore, and stay updated with your favorite
              entertainment.
            </p>
          </div>

          {/* Links Section */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="#home" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#top-rated"
                  className="text-light text-decoration-none"
                >
                  Top Rated
                </a>
              </li>
              <li>
                <a href="#popular" className="text-light text-decoration-none">
                  Popular
                </a>
              </li>
              <li>
                <a href="#contact" className="text-light text-decoration-none">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Social Section */}
          <div className="col-md-4 text-md-end">
            <h5 className="fw-bold mb-3">Follow Us</h5>
            <div className="d-flex gap-3 justify-content-md-end">
              <a href="#" className="text-light fs-5">
                <FaFacebookF />
              </a>
              <a href="#" className="text-light fs-5">
                <FaTwitter />
              </a>
              <a href="#" className="text-light fs-5">
                <FaInstagram />
              </a>
              <a href="#" className="text-light fs-5">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center border-top pt-3">
          <p className="small mb-0">
            &copy; {new Date().getFullYear()} WatchNow. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
