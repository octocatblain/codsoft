import React from "react";
import "./Sidebar.css";
import person from "../../Assets/images/person_4.jpg";
import facebook from "../../Assets/icons/facebook.png";
import instagram from "../../Assets/icons/instagram.png";
import github from "../../Assets/icons/github.png";
import twitter from "../../Assets/icons/twitter.png";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <h4 className="sidebar__title">About Me</h4>
        <img className="sidebar__about__img" src={person} alt="" />
        <p className="sidebar__about">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis
          doloribus itaque dolores facere? Impedit deleniti et ipsam culpa ea,
          assumenda rem ex, accusamus illum harum tempore consequuntur esse enim
          aspernatur?
        </p>
      </div>
      <div className="sidebarItem">
        <h4 className="sidebar__title">Categories</h4>
        <ul className="category__list">
          <li className="category__name">Lifestyle</li>
          <li className="category__name">Travel</li>
          <li className="category__name">Music</li>
          <li className="category__name">EatOuts</li>
          <li className="category__name">Reviews</li>
        </ul>
      </div>
      <div className="sidebarItem">
        <h4 className="sidebar__title">Our Socials</h4>
        <div className="sidebar__socials">
          <img src={facebook} alt="facebook" />
          <img src={instagram} alt="instagram" />
          <img src={github} alt="github" />
          <img src={twitter} alt="twitter" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
