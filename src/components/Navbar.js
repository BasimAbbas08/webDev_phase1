import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">Airbnb</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Experiences</li>
        <li>Online Experiences</li>
      </ul>
      <div className="user-menu">
        <button>Login</button>
        <button>Signup</button>
      </div>
    </nav>
  );
}

export default Navbar;
