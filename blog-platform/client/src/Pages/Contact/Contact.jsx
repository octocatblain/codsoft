import "./Contact.css"
import Layout from "../../Layout/Layout.jsx"

const Contact = () => {
  return (
    <Layout>
      <div className="contact_page">
        <div className="contact_hero">
          <h1 className="title">
            Contact Us
          </h1>
          <h5 className="subtitle">Give Us A Ring</h5>
        </div>
        <div className="contact_wrapper">
          <form className="contact_form">
            <h5  className="subtitle">Fill the Form below <i className="bi bi-arrow-down-circle"></i></h5>
            <input type="text" name="name" id="contactName" />
            <input type="email" name="email" id="contactEmail" />
            <textarea name="message" id="contactMessage" ></textarea>
            <button className="submit" type="submit">Send Message <i className="bi bi-telegram"></i></button>
          </form>
          <div className="contact_map">
            <h5 className="subtitle">Find Us Here <i className="bi bi-arrow-down-circle"></i></h5>
            <iframe className="map" src="" frameborder="0"></iframe>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Contact
