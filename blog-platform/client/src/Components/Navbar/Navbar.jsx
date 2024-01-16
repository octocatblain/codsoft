import React from "react";

import "./Navbar.css";
import avatar from "../../Assets/images/person_4.jpg";
import facebook from "../../Assets/icons/facebook.png";
import instagram from "../../Assets/icons/instagram.png";
import github from "../../Assets/icons/github.png";
import twitter from "../../Assets/icons/twitter.png";

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
            <li>HOME</li>
            <li>ABOUT</li>

            <li>CONTACT</li>
            <li>Write</li>
            <li>Logout</li>
          </ul>
        </div>
        <div className="menu-btns">
          <img src={avatar} alt="" />
          <button>LOGIN</button>
          <button>Search</button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
