import "./Footer.css"
import { BiSearchAlt } from "react-icons/bi"
import { BsTwitterX, BsFacebook, BsInstagram, BsWhatsapp } from "react-icons/bs";
import { SiHashnode } from "react-icons/si";


const column1 = [
  { header: "Product" },
  { link: "Overview" },
  { link: "Features" },
  { link: "Solutions" },
  { link: "Tutorials" },
  { link: "Pricing" },
];

const column2 = [
  { header: "Company" },
  { link: "About" },
  { link: "Careers" },
  { link: "Press" },
  { link: "News" },
  { link: "Contact" },
];
const column3 = [
  { header: "Resources" },
  { link: "Blog" },
  { link: "Events" },
  { link: "Help Centre" },
  { link: "Tutorials" },
  { link: "Support" },
];
const column4 = [
  { header: "Legal" },
  { link: "Terms" },
  { link: "Privacy" },
  { link: "Cookies" },
  { link: "Licenses" },
  { link: "Contact" },
];

function Footer() {
  return (
    <footer className='footer'>
      <div className="footer_about">
        <div className="footer_header">
          <BiSearchAlt className="icon footer_icon" />
          <h1 className="footer_title">Job<span>Search</span></h1>
        </div>
        <p className="text">We always make our job seekers find the best jobs and companies find the best candidates.</p>
        <div className="icons">
          <BsTwitterX />
          <BsFacebook />
          <BsInstagram />
          <SiHashnode />
          <BsWhatsapp />
        </div>
      </div>
      <div className="footer_links">
        <div className="links_column">
          {column1.map((item, index) => (
            <div key={index}>
              <h4 className="links__header">{item.header}</h4>
              <p className="link">{item.link}</p>
            </div>
          ))}
        </div>
        <div className="links_column">
          {column2.map((item, index) => (
            <div key={index}>
              <h4 className="links__header">{item.header}</h4>
              <p className="link">{item.link}</p>
            </div>
          ))}
        </div>
        <div className="links_column">
          {column3.map((item, index) => (
            <div key={index}>
              <h4 className="links__header">{item.header}</h4>
              <p className="link">{item.link}</p>
            </div>
          ))}
        </div>
        <div className="links_column">
          {column4.map((item, index) => (
            <div key={index}>
              <h4 className="links__header">{item.header}</h4>
              <p className="link">{item.link}</p>
            </div>
          ))}
        </div>
      </div>

    </footer>
  )
}

export default Footer
