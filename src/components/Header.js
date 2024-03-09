import React, { useState, useEffect } from "react";
import "../styles/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${scrolling ? "scrolling" : ""}`} id="intro">
      {/* Navbar */}
      <nav className={`navbar  ${menuVisible ? "show" : ""}`}>
        <div className="container">
          <div className="logo">
            <a href="/">
              <img src="./resources/logo.PNG" alt="Company Logo" />
            </a>
            <button
              type="button"
              className="navbar-toggler"
              id="navbar-toggler"
              onClick={toggleMenu}
            >
              <FontAwesomeIcon icon={faBars} />
            </button>
          </div>
          <div className={`nav-menu ${menuVisible ? "show" : ""}`}>
            <ul>
              <li>
                <a href="index.html" className="nav-link">
                  Home
                </a>
              </li>
              <li>
                <a href="about.html" className="nav-link">
                  About
                </a>
              </li>
              <li>
                <a href="service.html" className="nav-link">
                  Services
                </a>
              </li>
              <li>
                <a href="contact.html" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="hero-div center container">
        <h1>Transform Your Website into a Brand Magnet</h1>
        <p>Connecting You with Excellence.</p>
        <div className="hero-btn">
          <button type="button" className="btn-trans">
            learn more
          </button>
          <button type="button" className="btn-white">
            Meet Our People
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
