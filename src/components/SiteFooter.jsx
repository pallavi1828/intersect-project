import React from "react";
import { Link } from "react-router-dom";
import "../styles/SiteFooter.css";

const SiteFooter = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        
{/* Company Info */}
<div className="footer-column">
  <h4>Company</h4>
  <p><strong>Intersect India Private Limited</strong></p>
  
  <p>📍 1st Floor, 4th N-Block, Kalpavalli Towers,</p>
    <p> 17/A, Dr Rajkumar Rd, 4N Block, Rajajinagar</p>
  <p>Bengaluru, Karnataka - 560010</p>
  <p>📞 <a href="tel:9113918195">+91 9113918195</a></p>
  <p><a href="tel:08079641699">     080 796 41699</a></p>
  <p>✉️ <a href="mailto:info@intersectindia.com">info@intersectindia.com</a></p>
  <p>
  📍 <a href="https://www.google.com/maps?q=Intersect+India+Private+Limited,+Rajajinagar+Bengaluru" target="_blank" rel="noopener noreferrer">
    View on Google Maps
  </a>
</p>

</div>

        {/* Quick Links */}
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/solutions">Solutions</Link></li>
            <li><Link to="/accolades">Accolades</Link></li>
            <li><Link to="/partners">Partners</Link></li>
            <li><Link to="/customers">Customers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        {/* Solutions Subpages */}
        <div className="footer-column">
          <h4>Solutions</h4>
          <ul>
            <li><Link to="/solutions/structured-cabling">Structured Cabling</Link></li>
            <li><Link to="/solutions/routing-switching">Routing & Switching</Link></li>
            <li><Link to="/solutions/secured-wireless">Secured Wireless</Link></li>
            <li><Link to="/solutions/backhaul-rf">Backhaul RF</Link></li>
            <li><Link to="/solutions/network-gateway-sdwan">Network Gateway & SD-WAN</Link></li>
            <li><Link to="/solutions/video-conferencing">Video Conferencing And Interactive Smart Boards</Link></li>
            <li><Link to="/solutions/ip-surveillance">IP Surveillance</Link></li>
            <li><Link to="/solutions/storage">Storage</Link></li>
            <li><Link to="/solutions/endpoints">End User Computing</Link></li>
            <li><Link to="/solutions/system-security">System Security</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-column">
          <h4>Follow Us</h4>
          <ul className="social-links">
            <li>
              <a href="www.linkedin.com/in/intersect-india-private-limited-048a47376" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i> LinkedIn
              </a>
            </li>
            
            <li>
              <a href="https://www.facebook.com/profile.php?id=61578294256132" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-facebook"></i> Facebook
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/intersect_india_pvt_ltd/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i> Instagram
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Intersect India Private Limited All rights reserved.</p>
      </div>
    </footer>
  );
};

export default SiteFooter;
