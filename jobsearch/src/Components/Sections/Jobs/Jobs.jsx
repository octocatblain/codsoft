import { useEffect } from "react";
import "./Jobs.css"
import { BiTimeFive } from "react-icons/bi"
import  ScrollReveal  from "scrollreveal";


const jobs = [
  {
    id: 1,
    jobName: "web developer",
    jobTimeline: "now",
    jobDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci at dolore mollitia enim omnis necessitatibus perferendis quasi ea atque, laboriosam officiis ex placeat exercitationem excepturi sequi soluta nemo quibusdam architecto.",
    hiringCompany: "Microsoft",
    jobLocation: "Canada",
  },
  {
    id: 2,
    jobName: "software engineer",
    jobTimeline: "2 weeks",
    jobDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci at dolore mollitia enim omnis necessitatibus perferendis quasi ea atque, laboriosam officiis ex placeat exercitationem excepturi sequi soluta nemo quibusdam architecto.",
    hiringCompany: "IBM",
    jobLocation: "US",
  },
  {
    id: 3,
    jobName: "front-end developer",
    jobTimeline: "2 days",
    jobDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci at dolore mollitia enim omnis necessitatibus perferendis quasi ea atque, laboriosam officiis ex placeat exercitationem excepturi sequi soluta nemo quibusdam architecto.",
    hiringCompany: "Savannah Informatics",
    jobLocation: "Kenya",
  },
  {
    id: 4,
    jobName: "web developer",
    jobTimeline: "now",
    jobDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci at dolore mollitia enim omnis necessitatibus perferendis quasi ea atque, laboriosam officiis ex placeat exercitationem excepturi sequi soluta nemo quibusdam architecto.",
    hiringCompany: "Microsoft",
    jobLocation: "Canada",
  },
  {
    id: 5,
    jobName: "software engineer",
    jobTimeline: "2 weeks",
    jobDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci at dolore mollitia enim omnis necessitatibus perferendis quasi ea atque, laboriosam officiis ex placeat exercitationem excepturi sequi soluta nemo quibusdam architecto.",
    hiringCompany: "IBM",
    jobLocation: "US",
  },
  {
    id: 6,
    jobName: "front-end developer",
    jobTimeline: "2 days",
    jobDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci at dolore mollitia enim omnis necessitatibus perferendis quasi ea atque, laboriosam officiis ex placeat exercitationem excepturi sequi soluta nemo quibusdam architecto.",
    hiringCompany: "Savannah Informatics",
    jobLocation: "Kenya",
  },
  {
    id: 7,
    jobName: "web developer",
    jobTimeline: "now",
    jobDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci at dolore mollitia enim omnis necessitatibus perferendis quasi ea atque, laboriosam officiis ex placeat exercitationem excepturi sequi soluta nemo quibusdam architecto.",
    hiringCompany: "Microsoft",
    jobLocation: "Canada",
  },
  {
    id: 8,
    jobName: "software engineer",
    jobTimeline: "2 weeks",
    jobDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci at dolore mollitia enim omnis necessitatibus perferendis quasi ea atque, laboriosam officiis ex placeat exercitationem excepturi sequi soluta nemo quibusdam architecto.",
    hiringCompany: "IBM",
    jobLocation: "US",
  },
  {
    jobName: "front-end developer",
    jobTimeline: "2 days",
    jobDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci at dolore mollitia enim omnis necessitatibus perferendis quasi ea atque, laboriosam officiis ex placeat exercitationem excepturi sequi soluta nemo quibusdam architecto.",
    hiringCompany: "Savannah Informatics",
    jobLocation: "Kenya",
  },
  {
    id: 9,
    jobName: "web developer",
    jobTimeline: "now",
    jobDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci at dolore mollitia enim omnis necessitatibus perferendis quasi ea atque, laboriosam officiis ex placeat exercitationem excepturi sequi soluta nemo quibusdam architecto.",
    hiringCompany: "Microsoft",
    jobLocation: "Canada",
  },
  {
    id: 10,
    jobName: "software engineer",
    jobTimeline: "2 weeks",
    jobDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci at dolore mollitia enim omnis necessitatibus perferendis quasi ea atque, laboriosam officiis ex placeat exercitationem excepturi sequi soluta nemo quibusdam architecto.",
    hiringCompany: "IBM",
    jobLocation: "US",
  },
  {
    id: 1,
    jobName: "front-end developer",
    jobTimeline: "2 days",
    jobDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci at dolore mollitia enim omnis necessitatibus perferendis quasi ea atque, laboriosam officiis ex placeat exercitationem excepturi sequi soluta nemo quibusdam architecto.",
    hiringCompany: "Savannah Informatics",
    jobLocation: "Kenya",
  },
  {
    id: 12,
    jobName: "web developer",
    jobTimeline: "now",
    jobDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci at dolore mollitia enim omnis necessitatibus perferendis quasi ea atque, laboriosam officiis ex placeat exercitationem excepturi sequi soluta nemo quibusdam architecto.",
    hiringCompany: "Microsoft",
    jobLocation: "Canada",
  },
  {
    id: 13,
    jobName: "software engineer",
    jobTimeline: "2 weeks",
    jobDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci at dolore mollitia enim omnis necessitatibus perferendis quasi ea atque, laboriosam officiis ex placeat exercitationem excepturi sequi soluta nemo quibusdam architecto.",
    hiringCompany: "IBM",
    jobLocation: "US",
  },
  {
    id: 14,
    jobName: "front-end developer",
    jobTimeline: "2 days",
    jobDescription: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci at dolore mollitia enim omnis necessitatibus perferendis quasi ea atque, laboriosam officiis ex placeat exercitationem excepturi sequi soluta nemo quibusdam architecto.",
    hiringCompany: "Savannah Informatics",
    jobLocation: "Kenya",
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
