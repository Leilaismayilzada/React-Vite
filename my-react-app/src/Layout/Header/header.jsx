import React, { useState } from "react";
import "./Header.scss";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <div className="container">
      <nav className="Navbar">
        <div className="navbar-container">
          <div className="navbar-logo">
            <img
              src="https://flexiblog-minimal.netlify.app/static/e1abc27a01b56d93f5fcdff62c84fdd7/d7151/logo.webp"
              alt="Logo"
            />
          </div>
          <div className="navbar-icons">
            <button onClick={() => setIsSearchOpen(!isSearchOpen)}>
              <i className="ri-search-line">
              
              </i>
              <span>  Discover news, article</span>
            </button>
            <button className="burger-menu" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <i className="ri-menu-line"></i>
            </button>
          </div>
          <div className={`navbar-links ${isMenuOpen ? "open" : ""}`}>
            <a href="">Home</a>
            <a href="">Contact</a>
        
          </div>
        </div>
      </nav>

      {isSearchOpen && (
        <div className="search-modal">
          <div className="search-modal-content">
            <button className="close-button" onClick={() => setIsSearchOpen(false)}>
              <i className="ri-close-line"></i>
            </button>
            <input type="text" placeholder="Search for article" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
