import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import DarkTheme from "../../layouts/Dark";
import ProjectData from "../../data/project-details.json";
import ProjectIntroduction from "../../components/Project-introduction/project-introduction";
import ProjectGallery from "../../components/Project-gallery/project-gallery";
import ProjectVideo from "../../components/Project-video/project-video";

const ProjectDetails2Dark = ( {project} ) => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.scrollY > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.scrollY > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
        <div className="wrapper">
          <ProjectVideo projectVideoData={project} />
          <ProjectIntroduction projectIntroductionData={project.credit} />
          <ProjectGallery projectGalleryData={project.gallery}/>
          <Footer />
      </div>
    </DarkTheme>
  );
}

export const getStaticPaths = async () => {
  const data = ProjectData;

  const paths = data.map(project => {
    return{
      params: {id: project.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = ProjectData[id-1];

  return {
    props: { project: data}
  }


}

export default ProjectDetails2Dark;
