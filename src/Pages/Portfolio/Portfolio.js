import React from "react";
import { Helmet } from "react-helmet-async";
import Footer from "../Shared/Footer";
import Navbar from "../Shared/Navbar";
import MySkill from "./MySkill";
import Projects from "./Projects";
import Timeline from "./Timeline";

const Portfolio = () => {
  return (
    <>
    <Navbar />
    <div className="  my-20 max-w-7xl mx-auto">
       <Helmet><title>Portfolio</title></Helmet>
        <div className="mx-10">
            <h2 className="text-primary text-3xl  underline ">Name and Email Address</h2>
            <h1 className="font-semibold">Md .Istiak Hasan</h1>
            <h1 className="font-semibold">istieak.hasan1996@gmail.com</h1>
        </div>
      <div className="lg:grid grid-cols-2 my-20 mx-10">
      <div>
         <h2 className="text-primary text-3xl underline mb-10 ">My Education</h2>
      <ol className="relative border-l border-gray-200 dark:border-gray-700 ">
        <Timeline
          exam="BSC"
          year="2016-2020"
          institution="Computer Science and Engineering At Uttara University"
        />
        <Timeline
          exam="Web Design"
          year="2017"
          institution="CodersTrus Bangladesh"
        />
        <Timeline
          exam="HSC"
          year="2014-2015"
          institution="Govt Ashikh Mahmud Collage"
        />
        <Timeline
          exam="SSC"
          year="2007-2013"
          institution="Sharifpur High School"
        />
       
      </ol>
         </div>
         <div>
         <h2 className="text-primary text-3xl underline mb-10 ">My Skills</h2>
         <MySkill />

         </div>
      </div>
      <Projects />
    </div>
    <Footer />
    </>
  );
};

export default Portfolio;
