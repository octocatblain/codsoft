import React, { useState } from "react";

import "./Navbar.css";
import avatar from "../../Assets/images/person_4.jpg";
import facebook from "../../Assets/icons/facebook.png";
import instagram from "../../Assets/icons/instagram.png";
import github from "../../Assets/icons/github.png";
import twitter from "../../Assets/icons/twitter.png";

import { Link } from "react-router-dom";

const Navbar = () => {

  const [menuItem, setMenuItem] = useState("home");

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
            <li onClick={() => { setMenuItem("home") }}><Link to="/"> HOME{menuItem === "home" ? <hr /> : <></>}</Link></li>
            <li onClick={() => { setMenuItem("about") }}><Link to="/about"> ABOUT{menuItem === "about" ? <hr /> : <></>}</Link></li>
            <li onClick={() => { setMenuItem("contact") }}><Link to="/contact">CONTACT {menuItem === "contact" ? <hr /> : <></>}</Link></li>
            <li onClick={() => { setMenuItem("write") }}><Link to="/write"> Write{menuItem === "write" ? <hr /> : <></>}</Link></li>
            <li onClick={() => { setMenuItem("logout") }}><Link to="/logout"> Logout{menuItem === "logout" ? <hr /> : <></>}</Link></li>
          </ul>
        </div>
        <div className="menu-btns">
          <Link to="/settings"><img src={avatar} alt="" /> </Link>
          <button><Link to="/login"> LOGIN</Link></button>
          <i className="bi bi-search"></i>
        </div>
      </header>
    </>
  );
};

export default Navbar;
