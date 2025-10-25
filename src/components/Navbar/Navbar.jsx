import React, { useState } from "react";
import './Navbar.css';
import { IoIosSearch } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import HomePage from "../Home Page/HomePage";

export default function Navbar() {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const handletostatesofIndia = ()=>
  {
    navigate('/statesofIndia');
  }

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


            <li className="dropdown">
              Explore
            <ul className="dropdown-menu">
              <li onClick={handletostatesofIndia}>By State & UTs</li>
              <li>By Destinations </li>
            </ul>
            </li>


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
