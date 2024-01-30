import "./About.css"
import Layout from "../../Layout/Layout.jsx"
import whyUs from "../../Assets/images/validation.png"
import { whyUsData } from "../../Data/Index.js"



const About = () => {
  return (
    <Layout>
      <div className="about_page">
        <div className="about_hero">
          <h1 className="title">
            About Us
          </h1>
          <h5 className="subtitle">We are down to earth</h5>
        </div>
        <div className="wrapper">

          <div className="why_us">
            <div className="why_us_content">
              <h3 className="section_title">
                Why Us
              </h3>


              {whyUsData.map((item, index) => (
                <p className="text" key={index}>
                  {item.text}
                </p>
              ))}


            </div>
            <div className="why_us_image">
              <img src={whyUs} alt="" />
            </div>
          </div>
        </div>
      </div>
    </Layout>

  )
}

export default About
