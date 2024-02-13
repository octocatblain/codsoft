import React from 'react'
import Layout from '../../Layout/Layout'
import "./Home.css"
import Search from '../../Components/Sections/Search/Search'
import Jobs from '../../Components/Sections/Jobs/Jobs'
import Value from '../../Components/Sections/Value/Value'

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <hero className="hero">
          <div className="hero_content">
            <article className='hero_title'>
              <h1 className="title">
                Welcome to <span className='job'>Job<span>Search</span></span> <br/><span className='subtitle'>Your Gateway to Career Success</span></h1>
              <p className="text">Are you ready to take the next step in your career journey? Look no further than <span className='job'>Job<span>Search</span></span> – your ultimate destination for finding the perfect job match. <br/><br/><br/>Whether you're a seasoned professional or just starting out, <span className='job'>Job<span>Search</span></span> has the tools, resources, and opportunities to propel you towards your dream career.</p>
            </article>
            {/* <div className="hero_image">
              <img src="https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
            </div> */}
          </div>
        </hero>
        <Search />
        <Jobs />
        <Value />
      </div>
    </Layout>
  )
}

export default Home
