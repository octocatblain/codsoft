import "./Contact.css"
import Layout from '../../Layout/Layout'
import { FaMapMarkerAlt, FaGlobeAfrica } from 'react-icons/fa';
import { BiPaperPlane } from "react-icons/bi"
import { CgPhone } from "react-icons/cg"

const Contact = () => {
  return (
    <Layout>

      <div className="contact">
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
                <FaMapMarkerAlt className="icon" />
                <span>198 West 21th Street, Suite 721 Nairobi - KE 10016</span>
              </div>
              <div className="info-item">
                <CgPhone className="icon" />
                <span>+254 115 2355 98</span>
              </div>
              <div className="info-item">
                <BiPaperPlane className="icon" />
                <span>info@jobsearch.com</span>
              </div>
              <div className="info-item">
                <FaGlobeAfrica className="icon" />
                <span>jobsearch.com</span>
              </div>
            </div>
          </div>

        </div>

        <div className="contact map">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7977.5847538491325!2d36.81116789159048!3d-1.2993677447531362!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f10e7afcbe647%3A0x8c73172faa633890!2sUpper%20Hill%2C%20Nairobi!5e0!3m2!1sen!2ske!4v1707918761554!5m2!1sen!2ske"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>



    </Layout>
  )
}

export default Contact
