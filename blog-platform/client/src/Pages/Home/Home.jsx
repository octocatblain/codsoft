import React from "react";
import Hero from "../../Components/Hero/Hero";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Posts from "../../Components/Posts/Posts";
import "./Home.css";
import Layout from "../../Layout/Layout";

const Home = () => {
  return (
    <Layout>
      <Hero />
      <div className="home__wrapper">
        <Posts />
        <Sidebar />
      </div>
      homepage
    </Layout>
  );
};

export default Home;
