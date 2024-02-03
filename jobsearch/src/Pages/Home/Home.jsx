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
        <Search />
        <Jobs />
        <Value />
      </div>
    </Layout>
  )
}

export default Home
