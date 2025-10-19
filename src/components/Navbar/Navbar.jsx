import React, { useState } from "react";
import './Navbar.css';
import { IoIosSearch } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className="navbar">
      <div className="navigation">

        {/* Logo */}
        <div className="logo">
          <h3>Journey Through Ages</h3>
        </div>

        {/* Hamburger Icon */}
        <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Menu Content (Links + Search + Button) */}
        <div className={`menu-content ${menuOpen ? "active" : ""}`}>
          <ul className="menu-links">
            <li>Home</li>
            <li>Explore</li>
            <li>Experiences</li>
            <li>Travel Guides</li>
            <li>Blog</li>
            <li>About India</li>
          </ul>

          <div className="menu-search">
            <div className="search-box">
              <IoIosSearch />
              <input type="text" placeholder="Search" />
            </div>

            <div className="explore">
              <button>Start Exploring</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
