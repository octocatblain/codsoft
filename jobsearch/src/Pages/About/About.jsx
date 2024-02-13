import "./About.css"
import Layout from "../../Layout/Layout";
import { BsArrowRightCircle } from "react-icons/bs"

const Promises = [
  {
    "title": "User-Centric Approach",
    "desc": "Your needs are at the heart of everything we do. From intuitive interface design to personalized job recommendations, we're committed to ensuring that your experience on JobSearch is seamless and rewarding."
  },
  {
    "title": "Innovative Technology",
    "desc": "Leveraging cutting-edge technology, our platform harnesses the power of artificial intelligence and machine learning to deliver precise job matches tailored to your unique skills, experience, and aspirations."
  },
  {
    "title": "Community Engagement",
    "desc": "We believe in the power of community. Through networking opportunities, career resources, and direct engagement with employers, JobSearch fosters a supportive ecosystem where job seekers can thrive and succeed."
  }
];


const About = () => {

  return (

    <Layout>
      <div className="about">
        <div className="about_hero">
          <div className="about_content">
            <h1 className="title">Empowering your Career Journey</h1>
            <p className="text">At <span>JobSearch</span>, we believe that every individual deserves the opportunity to pursue a fulfilling career path. <em>Our mission is simple:</em> to empower job seekers like you with the tools, resources, and support needed to navigate the ever-evolving world of employment.</p>
          </div>
          <div className="about_image"></div>
        </div>

        <div className="about_story">
          <h2 className="title">Our <span>Story</span></h2>
          <p className="text">Founded on the principle of bridging the gap between talent and opportunity, <span>JobSearch</span> emerged from a shared vision of revolutionizing the job search experience. Fueled by a passion for helping individuals unlock their full potential, our dedicated team embarked on a journey to create a platform that transcends traditional job hunting norms.</p>
          <div className="about_stats">
            <p className="text">Year founded: <span>2020</span></p>
            <p className="text">Jobs Posted: <span>222K+</span></p>
            <p className="text">Partner Companies: <span>220</span></p>
            <p className="text">Candidates helped: <span>2M+</span></p>
          </div>
        </div>

        <div className="about_values">
          <div className="values_content">
            <div className="about_apart">
              <h3 className="title">WHAT SETS US APART</h3>
              <p className="text">At <span>JobSearch</span>, we understand that the job search process can be daunting. That's why we've gone above and beyond to cultivate a platform that prioritizes user experience, personalization, and empowerment.</p>
            </div>
            <div className="about_promise">
              <h3 className="title">OUR PROMISE</h3>
              <p className="text">At <span>JobSearch</span>, we're not just another job board – we're your trusted partner in career advancement. Whether you're embarking on a new professional journey or seeking to elevate your current path, we're here to guide you every step of the way.</p>
            </div>
          </div>
          <div className="values_cards">
            {
              Promises.map((item, index) => (
                <div className="value_card" key={index}>
                  <div className="value_title">{item.title}</div>
                  <div className="value_desc">{item.desc}</div>
                </div>
              ))
            }
          </div>
        </div>

        <div className="about_cta">
          <p className="text">Join us on a transformative journey towards career success. Together, let's unlock new opportunities, realize your potential, and shape a brighter future. <br/>Welcome to <span>JobSearch</span> – where your career aspirations become reality.</p>
          <button className="about_cta_btn">Join the Community! <BsArrowRightCircle  className="icon"/></button>
        </div>
      </div>
    </Layout>

  )
}
export default About