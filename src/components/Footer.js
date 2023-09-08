import React from 'react';
import './style.css'; 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-info">
          <p>&copy; 2023 Glit Innovations</p>
          <p>Contact us: contact@glitinnovations.com</p>
          
          <a href="#top">Back to Top</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
