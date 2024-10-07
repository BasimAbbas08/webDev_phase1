import React from 'react';
import './NavBar.css'; // Ensure this matches the correct CSS filename


function NavBar() {
  return (
    <nav className="navbar">
      <div className="logo">Airbnb</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Experiences</li>
        <li>Online Experiences</li>
      </ul>
      <div className="navbar-buttons">
  <button className="btn btn-secondary">Log in</button>
  <button className="btn btn-secondary">Sign up</button>
</div>

    </nav>
  );
}

export default NavBar;
