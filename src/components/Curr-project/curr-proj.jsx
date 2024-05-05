import React from "react";
import Navbar from "../Navbar/navbar";
import Footer from "../Footer/footer";
import DarkTheme from "../../layouts/Dark";
import ProjectDate from "../../data/project-details2.json";
import ProjectIntroduction from "../Project-introduction/project-introduction";
import ProjectGallery from "../Project-gallery/project-gallery";
import ProjectVideo from "../Project-video/project-video";
import { useLocation } from "react-router-dom";

const Project = () => {
  
  const location = useLocation();
  const num = parseInt(new URLSearchParams(location.search).get('num'), 10);
  return (
      <div className="wrapper">
        <ProjectVideo projectVideoDate={ProjectDate[num]} />
        <ProjectIntroduction projectIntroductionData={ProjectDate[num].credit} />
        <ProjectGallery projectVideoDate={ProjectDate}/>
        <Footer />
      </div>
  );
};

export default Project;
