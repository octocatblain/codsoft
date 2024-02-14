import React from 'react'
import Layout from '../../Layout/Layout'
import { FaMapMarkerAlt, FaGlobeAfrica } from 'react-icons/fa';
import { BiPaperPlane } from "react-icons/bi"
import { CgPhone } from "react-icons/cg"

const Contact = () => {
  return (
    <Layout>

      <div className="contact_section">
        <div className="contact_form">
          <h3 className="title">Send us a message</h3>
          <div className="form">
            <input type="text" name="name" id="name" placeholder='Name' />
            <input type="email" name="email" id="email" placeholder='Email' />
            <input type="text" name="subject" id="subject" placeholder='Subject' />
            <textarea name="message" id="message" placeholder='Message' ></textarea>
            <button className='contact_submit' type="submit">Send Message</button>
          </div>
        </div>

        <div className="contact_info">
          <div className="contact_info_title">Contact us</div>
          <p className="text">We're open for any suggestion or just to have a chat</p>
          <div className="contact_info_content">
            <div className="info-item">
              <FaMapMarkerAlt />
              <span>198 West 21th Street, Suite 721 New York NY 10016</span>
            </div>
            <div className="info-item">
              <CgPhone />
              <span>+1235 2355 98</span>
            </div>
            <div className="info-item">
              <BiPaperPlane />
              <span>info@yoursite.com</span>
            </div>
            <div className="info-item">
              <FaGlobeAfrica />
              <span>yoursite.com</span>
            </div>
          </div>
        </div>

      </div>

    </Layout>
  )
}

export default Contact
