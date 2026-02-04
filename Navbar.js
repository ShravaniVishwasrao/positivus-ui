import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">✦ Positivus</div>

      <ul className="nav-links">
        <li>About us</li>
        <li>Services</li>
        <li>Use Cases</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>

      <button className="quote-btn">Request a quote</button>
    </nav>
  );
};

export default Navbar;
