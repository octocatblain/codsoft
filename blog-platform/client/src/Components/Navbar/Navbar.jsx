import React from "react";

import "./Navbar.css";
import avatar from "../../Assets/images/person_4.jpg";
import facebook from "../../Assets/icons/facebook.png";
import instagram from "../../Assets/icons/instagram.png";
import github from "../../Assets/icons/github.png";
import twitter from "../../Assets/icons/twitter.png";

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="logo">
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={github} alt="github" />
          <img src={twitter} alt="twitter" />
        </div>
        <div className="menu-links">
          <ul>
            <li><Link to="/"> HOME</Link></li>
            <li><Link to=""> ABOUT</Link></li>

            <li><Link to="/contact">CONTACT </Link></li>
            <li><Link to="/write"> Write</Link></li>
            <li><Link to="/logout"> Logout</Link></li>
          </ul>
        </div>
        <div className="menu-btns">
          <Link to="/settings"><img src={avatar} alt="" /> </Link>
          <button><Link to="/login"> LOGIN</Link></button>
          <button>Search</button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
