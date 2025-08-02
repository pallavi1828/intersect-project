import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => (
  <header className="navbar-container">

    <div className="navbar-top">
      {/* Logo */}
      <div className="navbar-logo">
        <img src="/images/logo.jpg" alt="Intersect Logo" />
      </div>

      {/* Brand Banner */}
      <div className="brand-banner">
        <img src="/images/brand-banner.jpg" alt="Intersect India Banner" />
      </div>

      {/* Contact Info */}
 <div className="contact-vertical">
  <p><a href="tel:+919113918195">+91 9113918195</a></p>
  <p><a href="mailto:info@intersectindia.com">info@intersectindia.com</a></p>
 <div className="navbar-social-icons">
  <a href="www.linkedin.com/in/intersect-india-private-limited-048a47376" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-linkedin"></i>
  </a>
  <a href="https://www.facebook.com/profile.php?id=61578294256132" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-facebook"></i>
  </a>
  
 
  <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-youtube"></i>
  </a>
  <a href="https://www.instagram.com/intersect_india_pvt_ltd/" target="_blank" rel="noopener noreferrer">
    <i className="fab fa-instagram"></i>
  </a>
</div>

</div>

    </div>
    {/* Navigation Links */}
    <nav className="nav-links">
      <Link to="/" className="nav-link">Home</Link>
      <Link to="/about" className="nav-link">About</Link>

      <div className="dropdown">
        <Link to="/solutions" className="nav-link">Solutions ▾</Link>
        <div className="dropdown-content">
          <Link to="/solutions/structured-cabling" className="dropdown-item">Structured Cabling</Link>
          <Link to="/solutions/routing-switching" className="dropdown-item">Routing & Switching</Link>
          <Link to="/solutions/secured-wireless" className="dropdown-item">Secured Wireless</Link>
          <Link to="/solutions/backhaul-rf" className="dropdown-item">Backhaul RF</Link>
          <Link to="/solutions/network-gateway-sdwan" className="dropdown-item">Network Gateway Security & SD-WAN</Link>
          <Link to="/solutions/video-conferencing" className="dropdown-item">Video Conferencing & Smart Boards</Link>
          <Link to="/solutions/ip-surveillance" className="dropdown-item">IP Surveillance</Link>
          <Link to="/solutions/storage" className="dropdown-item">Storage</Link>
          <Link to="/solutions/endpoints" className="dropdown-item">End User Computing</Link>
          <Link to="/solutions/system-security" className="dropdown-item">System Security</Link>
        </div>
      </div>

      <Link to="/accolades" className="nav-link">Accolades</Link>
      <Link to="/partners" className="nav-link">Partners</Link>
      <Link to="/customers" className="nav-link">Customers</Link>
      <Link to="/contact" className="nav-link">Contact</Link>
    </nav>
  </header>
);

export default Navbar;
