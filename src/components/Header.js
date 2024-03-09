import React from "react";
import '../styles/Header.css'; 

const Header = () => {
  return (
    <header className="header" id="intro">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="logo">
            <a href="/">
              <img src="./logo.PNG" alt="Company Logo" />
            </a>
            <button
              type="button"
              className="navbar-toggler"
              id="navbar-toggler"
            >
              <i className="fas fa-bars"></i>
            </button>
          </div>
          <div className="nav-menu">
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
