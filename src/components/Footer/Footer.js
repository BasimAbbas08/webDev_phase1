import React from 'react';
import './Footer.css';


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="#">Support</a>
        <a href="#">Community</a>
        <a href="#">Hosting</a>
        <a href="#">About</a>
      </div>
      <div className="social-media">
        <a href="#">Facebook</a>
        <a href="#">Instagram</a>
        <a href="#">Twitter</a>
      </div>
      <p>&copy; 2030 Airbnb. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
