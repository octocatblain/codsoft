import { useEffect } from "react";
import "./Jobs.css"
import { BiTimeFive } from "react-icons/bi"
import  ScrollReveal  from "scrollreveal";


const jobs = [
  {
    "id": 1,
    "jobName": "Web Developer",
    "jobTimeline": "Immediate",
    "jobDescription": "Exciting opportunity for a skilled web developer to join our team!",
    "hiringCompany": "Microsoft",
    "jobLocation": "Canada"
  },
  {
    "id": 2,
    "jobName": "Data Scientist",
    "jobTimeline": "Urgent",
    "jobDescription": "Looking for a talented data scientist to work on cutting-edge projects.",
    "hiringCompany": "Google",
    "jobLocation": "United States"
  },
  {
    "id": 3,
    "jobName": "Software Engineer",
    "jobTimeline": "Immediate",
    "jobDescription": "Join our dynamic team and work on innovative software solutions!",
    "hiringCompany": "Apple",
    "jobLocation": "United States"
  },
  {
    "id": 4,
    "jobName": "UX Designer",
    "jobTimeline": "ASAP",
    "jobDescription": "Passionate about creating user-friendly interfaces? Join us!",
    "hiringCompany": "Amazon",
    "jobLocation": "United States"
  },
  {
    "id": 5,
    "jobName": "Marketing Specialist",
    "jobTimeline": "Immediate",
    "jobDescription": "Seeking a creative marketing specialist to drive our campaigns forward.",
    "hiringCompany": "Facebook",
    "jobLocation": "United States"
  },
  {
    "id": 6,
    "jobName": "Product Manager",
    "jobTimeline": "Immediate",
    "jobDescription": "Lead the development of innovative products with our dynamic team.",
    "hiringCompany": "Tesla",
    "jobLocation": "United States"
  },
  {
    "id": 7,
    "jobName": "Frontend Developer",
    "jobTimeline": "Urgent",
    "jobDescription": "We're looking for a skilled frontend developer to join our team.",
    "hiringCompany": "Netflix",
    "jobLocation": "United States"
  },
  {
    "id": 8,
    "jobName": "Back-end Developer",
    "jobTimeline": "Immediate",
    "jobDescription": "Join our backend development team and work on exciting projects.",
    "hiringCompany": "Uber",
    "jobLocation": "United States"
  },
  {
    "id": 9,
    "jobName": "AI Researcher",
    "jobTimeline": "Urgent",
    "jobDescription": "Seeking an experienced AI researcher to push the boundaries of technology.",
    "hiringCompany": "IBM",
    "jobLocation": "United States"
  },
  {
    "id": 10,
    "jobName": "Cybersecurity Analyst",
    "jobTimeline": "Immediate",
    "jobDescription": "Protect our systems from cyber threats as a cybersecurity analyst.",
    "hiringCompany": "Cisco",
    "jobLocation": "United States"
  },
  {
    "id": 11,
    "jobName": "Graphic Designer",
    "jobTimeline": "Immediate",
    "jobDescription": "Passionate about design? Join our team as a graphic designer!",
    "hiringCompany": "Adobe",
    "jobLocation": "United States"
  },
  {
    "id": 12,
    "jobName": "Content Writer",
    "jobTimeline": "Immediate",
    "jobDescription": "Express your creativity as a content writer with our team.",
    "hiringCompany": "LinkedIn",
    "jobLocation": "United States"
  },
  {
    "id": 13,
    "jobName": "HR Manager",
    "jobTimeline": "Immediate",
    "jobDescription": "Lead our HR team and foster a positive work environment.",
    "hiringCompany": "Salesforce",
    "jobLocation": "United States"
  },
  {
    "id": 14,
    "jobName": "Customer Success Manager",
    "jobTimeline": "Immediate",
    "jobDescription": "Help our customers succeed with our products as a customer success manager.",
    "hiringCompany": "Zendesk",
    "jobLocation": "United States"
  },
  {
    "id": 15,
    "jobName": "DevOps Engineer",
    "jobTimeline": "Immediate",
    "jobDescription": "Join our team and help streamline our development processes as a DevOps engineer.",
    "hiringCompany": "Oracle",
    "jobLocation": "United States"
  },
  {
    "id": 16,
    "jobName": "Project Manager",
    "jobTimeline": "Immediate",
    "jobDescription": "Lead our project teams to success as a project manager.",
    "hiringCompany": "HP",
    "jobLocation": "United States"
  },
  {
    "id": 17,
    "jobName": "Technical Support Specialist",
    "jobTimeline": "Immediate",
    "jobDescription": "Provide technical assistance to our customers as a technical support specialist.",
    "hiringCompany": "Dell",
    "jobLocation": "United States"
  },
  {
    "id": 18,
    "jobName": "Sales Representative",
    "jobTimeline": "Immediate",
    "jobDescription": "Join our sales team and drive revenue growth as a sales representative.",
    "hiringCompany": "Samsung",
    "jobLocation": "United States"
  },
  {
    "id": 19,
    "jobName": "Financial Analyst",
    "jobTimeline": "Immediate",
    "jobDescription": "Analyze financial data and provide insights as a financial analyst.",
    "hiringCompany": "Goldman Sachs",
    "jobLocation": "United States"
  },
  {
    "id": 20,
    "jobName": "Quality Assurance Tester",
    "jobTimeline": "Immediate",
    "jobDescription": "Ensure the quality of our products as a quality assurance tester.",
    "hiringCompany": "Sony",
    "jobLocation": "United States"
  },
  {
    "id": 21,
    "jobName": "UX Researcher",
    "jobTimeline": "Immediate",
    "jobDescription": "Conduct user research and enhance user experience as a UX researcher.",
    "hiringCompany": "Square",
    "jobLocation": "United States"
  },
  {
    "id": 22,
    "jobName": "Network Engineer",
    "jobTimeline": "Immediate",
    "jobDescription": "Design and implement network solutions as a network engineer.",
    "hiringCompany": "Nvidia",
    "jobLocation": "United States"
  },
  {
    "id": 23,
    "jobName": "Database Administrator",
    "jobTimeline": "Immediate",
    "jobDescription": "Manage our databases efficiently as a database administrator.",
    "hiringCompany": "Intel",
    "jobLocation": "United States"
  },
  {
    "id": 24,
    "jobName": "UI Designer",
    "jobTimeline": "Immediate",
    "jobDescription": "Create visually appealing user interfaces as a UI designer.",
    "hiringCompany": "Twitter",
    "jobLocation": "United States"
  },
  {
    "id": 25,
    "jobName": "Full Stack Developer",
    "jobTimeline": "Immediate",
    "jobDescription": "Work on both frontend and backend technologies as a full stack developer.",
    "hiringCompany": "Dropbox",
    "jobLocation": "United States"
  },
  {
    "id": 26,
    "jobName": "Business Analyst",
    "jobTimeline": "Immediate",
    "jobDescription": "Analyze business processes and make recommendations as a business analyst.",
    "hiringCompany": "Airbnb",
    "jobLocation": "United States"
  },
  {
    "id": 27,
    "jobName": "Scrum Master",
    "jobTimeline": "Immediate",
    "jobDescription": "Facilitate our agile development process as a scrum master.",
    "hiringCompany": "PayPal",
    "jobLocation": "United States"
  },
  {
    "id": 28,
    "jobName": "System Administrator",
    "jobTimeline": "Immediate",
    "jobDescription": "Manage and maintain our IT systems as a system administrator.",
    "hiringCompany": "VMware",
    "jobLocation": "United States"
  },
  {
    "id": 29,
    "jobName": "Product Owner",
    "jobTimeline": "Immediate",
    "jobDescription": "Own the product vision and roadmap as a product owner.",
    "hiringCompany": "Cisco",
    "jobLocation": "United States"
  },
  {
    "id": 30,
    "jobName": "Technical Writer",
    "jobTimeline": "Immediate",
    "jobDescription": "Create clear and concise technical documentation as a technical writer.",
    "hiringCompany": "Intel",
    "jobLocation": "United States"
  },
  {
    "id": 31,
    "jobName": "UI/UX Designer",
    "jobTimeline": "Immediate",
    "jobDescription": "Combine design and user experience principles to create exceptional interfaces.",
    "hiringCompany": "Dropbox",
    "jobLocation": "United States"
  },
  {
    "id": 32,
    "jobName": "Cloud Engineer",
    "jobTimeline": "Immediate",
    "jobDescription": "Architect and implement cloud-based solutions as a cloud engineer.",
    "hiringCompany": "Amazon",
    "jobLocation": "United States"
  },
  {
    "id": 33,
    "jobName": "Product Marketing Manager",
    "jobTimeline": "Immediate",
    "jobDescription": "Develop and execute marketing strategies for our products as a product marketing manager.",
    "hiringCompany": "Google",
    "jobLocation": "United States"
  },
  {
    "id": 34,
    "jobName": "IT Security Specialist",
    "jobTimeline": "Immediate",
    "jobDescription": "Protect our information systems from cyber threats as an IT security specialist.",
    "hiringCompany": "Microsoft",
    "jobLocation": "United States"
  },
  {
    "id": 35,
    "jobName": "QA Engineer",
    "jobTimeline": "Immediate",
    "jobDescription": "Test and ensure the quality of our software products as a QA engineer.",
    "hiringCompany": "Oracle",
    "jobLocation": "United States"
  },
  {
    "id": 36,
    "jobName": "Business Development Manager",
    "jobTimeline": "Immediate",
    "jobDescription": "Identify and pursue business opportunities as a business development manager.",
    "hiringCompany": "Salesforce",
    "jobLocation": "United States"
  },
  {
    "id": 37,
    "jobName": "Technical Project Manager",
    "jobTimeline": "Immediate",
    "jobDescription": "Lead technical projects to successful completion as a technical project manager.",
    "hiringCompany": "Cisco",
    "jobLocation": "United States"
  },
  {
    "id": 38,
    "jobName": "Data Analyst",
    "jobTimeline": "Immediate",
    "jobDescription": "Analyze data and provide insights to support decision-making as a data analyst.",
    "hiringCompany": "Facebook",
    "jobLocation": "United States"
  },
  {
    "id": 39,
    "jobName": "UX/UI Designer",
    "jobTimeline": "Immediate",
    "jobDescription": "Combine design and user experience principles to create exceptional interfaces.",
    "hiringCompany": "Adobe",
    "jobLocation": "United States"
  },
  {
    "id": 40,
    "jobName": "Software Architect",
    "jobTimeline": "Immediate",
    "jobDescription": "Design and oversee the implementation of software solutions as a software architect.",
    "hiringCompany": "Google",
    "jobLocation": "United States"
  },
  {
    "id": 41,
    "jobName": "Business Intelligence Analyst",
    "jobTimeline": "Immediate",
    "jobDescription": "Gather and analyze business data to drive informed decision-making as a business intelligence analyst.",
    "hiringCompany": "LinkedIn",
    "jobLocation": "United States"
  },
  {
    "id": 42,
    "jobName": "Cloud Solutions Architect",
    "jobTimeline": "Immediate",
    "jobDescription": "Architect cloud solutions to meet business requirements as a cloud solutions architect.",
    "hiringCompany": "Amazon",
    "jobLocation": "United States"
  },
  {
    "id": 43,
    "jobName": "IT Support Specialist",
    "jobTimeline": "Immediate",
    "jobDescription": "Provide technical support to our employees as an IT support specialist.",
    "hiringCompany": "Netflix",
    "jobLocation": "United States"
  },
  {
    "id": 44,
    "jobName": "Data Engineer",
    "jobTimeline": "Immediate",
    "jobDescription": "Design and build data pipelines as a data engineer.",
    "hiringCompany": "Twitter",
    "jobLocation": "United States"
  },
  {
    "id": 45,
    "jobName": "Sales Manager",
    "jobTimeline": "Immediate",
    "jobDescription": "Lead our sales team to achieve revenue targets as a sales manager.",
    "hiringCompany": "Square",
    "jobLocation": "United States"
  },
  {
    "id": 46,
    "jobName": "Network Administrator",
    "jobTimeline": "Immediate",
    "jobDescription": "Manage and maintain our network infrastructure as a network administrator.",
    "hiringCompany": "Facebook",
    "jobLocation": "United States"
  },
  {
    "id": 47,
    "jobName": "Content Marketing Specialist",
    "jobTimeline": "Immediate",
    "jobDescription": "Develop and execute content marketing strategies to drive engagement and conversion.",
    "hiringCompany": "Dropbox",
    "jobLocation": "United States"
  },
  {
    "id": 48,
    "jobName": "Database Developer",
    "jobTimeline": "Immediate",
    "jobDescription": "Design and develop efficient database solutions as a database developer.",
    "hiringCompany": "Oracle",
    "jobLocation": "United States"
  },
  {
    "id": 49,
    "jobName": "Mobile App Developer",
    "jobTimeline": "Immediate",
    "jobDescription": "Develop innovative mobile applications as a mobile app developer.",
    "hiringCompany": "LinkedIn",
    "jobLocation": "United States"
  },
  {
    "id": 50,
    "jobName": "AI Engineer",
    "jobTimeline": "Immediate",
    "jobDescription": "Develop and deploy AI solutions to solve complex problems as an AI engineer.",
    "hiringCompany": "Microsoft",
    "jobLocation": "United States"
  }
]


const Jobs = () => {

  useEffect(() => {
    ScrollReveal().reveal('.job_card');
  }, []);

  return (
    <div className='job_section'>
      <div className="job_wrapper">

        {
          jobs.map((item) => (
            <div className="job_card" key={Math.random * 10}>
              <h3 className="job_title">{item.jobName}</h3>
              <div className="job_header">
                <h4 className="job_location"> {item.jobLocation}</h4>
                <div className="job_timeline">
                  <BiTimeFive className="icon" /> {item.jobTimeline}
                </div>
              </div>

              <p className="job_description">{item.jobDescription}</p>
              <div className="company">
                <h5 className="hiring_company">{item.hiringCompany}</h5>
                <img src="" alt="" />
              </div>
              <button className="apply_btn" type="submit">Apply Now</button>
            </div>
          ))
        }

      </div>

    </div>
  )
}

export default Jobs
