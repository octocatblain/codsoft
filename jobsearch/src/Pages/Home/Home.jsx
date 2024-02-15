import React from 'react'
import Layout from '../../Layout/Layout'
import "./Home.css"
import Search from '../../Components/Sections/Search/Search'
import Jobs from '../../Components/Sections/Jobs/Jobs'
import Value from '../../Components/Sections/Value/Value'
import { BsThreeDotsVertical, BsArrowDownCircle } from "react-icons/bs"

const Home = () => {
  const scrollToSearchBar = () => {
    const navbarHeight = document.getElementById('navbar').offsetHeight;
    const searchBarElem = document.getElementById('search_bar');
    if (searchBarElem) {
      const searchBarTop = searchBarElem.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: searchBarTop - navbarHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <Layout>
      <div className="home">
        <hero className="hero">
          <div className="hero_content">
            <article className='hero_title'>
              <div className='hero_header'>
                <h1 className="title">
                  Welcome to <span className='job'>Job<span>Search</span></span> <br /><span className='subtitle'>Your Gateway to Career Success</span></h1>
                <div className="icons">
                  <BsThreeDotsVertical className='icon' onClick={scrollToSearchBar} />
                  <BsArrowDownCircle className='icon arrow_down' onClick={scrollToSearchBar} />
                </div>
              </div>

              <p className="text">Are you ready to take the next step in your career journey? Look no further than <span className='job'>Job<span>Search</span></span> – your ultimate destination for finding the perfect job match. <br /><br /><br />Whether you're a seasoned professional or just starting out, <span className='job'>Job<span>Search</span></span> has the tools, resources, and opportunities to propel you towards your dream career.</p>
            </article>
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
