import React from "react";
import Hero from "../../Components/Hero/Hero";
import Sidebar from "../../Components/Sidebar/Sidebar";
import Posts from "../../Components/Posts/Posts";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Hero />
      <div className="home__wrapper">
        <Posts />
        <Sidebar />
      </div>
      homepage
    </>
  );
};

export default Home;
