import "./About.css"
import Layout from "../../Layout/Layout";

const About = () => {

  return (

    <Layout>
      <div className="about">
        <div className="about_hero">
          <div className="about_content">
            <h1 className="title">Empowering your Career Journey</h1>
            <p className="text">At <span>JobSearch</span>, we believe that every individual deserves the opportunity to pursue a fulfilling career path. Our mission is simple: to empower job seekers like you with the tools, resources, and support needed to navigate the ever-evolving world of employment.</p>
          </div>
          <div className="about_image"></div>
        </div>
      </div>
    </Layout>

  )
}

export default About