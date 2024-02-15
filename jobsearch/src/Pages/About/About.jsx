import "./About.css"
import Layout from "../../Layout/Layout";
import { BsArrowRightCircle } from "react-icons/bs"
import Accordion from '../../Components/Accordion/Accordion';

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

const faqs = [
  {
    "title": "What is JobSearch?",
    "content": "JobSearch is an online platform designed to help individuals find employment opportunities by providing a user-friendly interface to search and apply for jobs."
  },
  {
    "title": "How can I use JobSearch to find a job?",
    "content": "To use JobSearch, simply create an account, complete your profile, and start searching for jobs based on your preferences such as location, industry, and job title. You can also upload your resume to apply for jobs directly through the platform."
  },
  {
    "title": "Is JobSearch free to use?",
    "content": "Yes, JobSearch is completely free for job seekers. There are no subscription fees or charges for using the platform to search and apply for jobs."
  },
  {
    "title": "Can employers post job listings on JobSearch?",
    "content": "Yes, employers can post job listings on JobSearch to reach a large pool of potential candidates. They can create an account, fill out the necessary details about the job, and post it for job seekers to view and apply."
  },
  {
    "title": "How do I edit my profile on JobSearch?",
    "content": "To edit your profile on JobSearch, log in to your account, go to the profile section, and click on the edit button. From there, you can update your personal information, work experience, education, and skills."
  },
  {
    "title": "Is my personal information secure on JobSearch?",
    "content": "Yes, JobSearch takes the security and privacy of your personal information seriously. We use industry-standard security measures to protect your data from unauthorized access or disclosure."
  },
  {
    "title": "How can I contact JobSearch for support?",
    "content": "If you need assistance or have any questions about using JobSearch, you can contact our support team through the 'Contact Us' page on the website. We're here to help you with any inquiries or concerns you may have."
  }
]



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
          <p className="text">Join us on a transformative journey towards career success. Together, let's unlock new opportunities, realize your potential, and shape a brighter future. <br />Welcome to <span>JobSearch</span> – where your career aspirations become reality.</p>
          <button className="about_cta_btn">Join the Community! <BsArrowRightCircle className="icon" /></button>
        </div>

        <div className="about_faqs">
          <div className="ui faq_container">
            <h1 className="faq_section_title">FAQs</h1>
            <Accordion items={faqs} />
          </div>
        </div>
      </div>
    </Layout>

  )
}
export default About