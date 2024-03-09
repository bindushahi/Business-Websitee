import React from "react";
import "../styles/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"; // Correct import statements

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <img src="resources/logo.PNG" alt="Logo" />
          </div>
          <div className="footer-info">
            <p>Empowering Success Through Innovation and Excellence</p>
            <p>Location: Kathmandu, Nepal</p>
          </div>
          <div className="footer-links">
            {/* Social Media Icons */}
            <ul className="social-icons">
              <li>
                <a
                  href="/"
                  target="_blank">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  target="_blank"
                
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a
                  href="/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
