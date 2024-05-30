import "./navbar.css";

import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import arrow from "../../assets/arrow_icon.png";
import  {CoinContext} from "../../context/CoinContext";
import { Link } from "react-router-dom";

const Navbar = () => {

  const { currency ,setCurrency } = useContext(CoinContext);

  const currecyHandler = (e) => {

    console.log(e.target.value);

    switch (e.target.value) {

      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
    }
  };

  return (
    <div className="navbar">
      <Link to={'/'}>
      <img src={logo} className="logo" alt="" />
      </Link>
      <ul>
        <Link>
        <li>Home</li>
        </Link>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select onChange={currecyHandler} name="" id="">
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        <button>
          Sign Up <img src={arrow} alt="" />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
