import "./navbar.css";

import React from "react";
import logo from "../../assets/logo.png";
import arrow from "../../assets/arrow_icon.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} className="logo" alt="" />
      <ul>
        <li>Home</li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select name="" id="">
            <option value="usd">USD</option>
            <option value="eur">EUR</option>
            <option value="gbp">INR</option>

        </select>
        <button>Sign Up  <img src={arrow} alt="" /></button>
      </div>
    </div>
    
  );
};

export default Navbar;
