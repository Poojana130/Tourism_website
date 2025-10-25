import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">
        
        <div className="footer-column">
          <h3>Journey Through Ages</h3>
          <p>
            Discover India, One Story at a Time.<br/>
            Journey Through Ages is your window into India’s rich
            heritage, breathtaking landscapes, and vibrant traditions.<br/>
            Explore, learn, and immerse yourself in the timeless beauty of this incredible land.
          </p>
        </div>

        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li>Home</li>
            <li>Explore</li>
            <li>Experiences</li>
            <li>Travel Guides</li>
            <li>Blog</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Resources</h4>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Connect With Us</h4>
          <ul>
            <li>Instagram</li>
            <li>YouTube</li>
            <li>Facebook</li>
          </ul>
        </div>

      </div>

      <div className="footer-bottom">
        ✦ © 2025 Incredible India 360. All Rights Reserved ✦
      </div>

    </footer>
  );
}
