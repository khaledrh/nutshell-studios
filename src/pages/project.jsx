import React from "react";
import Navbar from "../components/Navbar/navbar";
import Footer from "../components/Footer/footer";
import DarkTheme from "../layouts/Dark";
import ProjectData from "../data/project-details2.json";
import ProjectIntroduction from "../components/Project-introduction/project-introduction";
import ProjectGallery from "../components/Project-gallery/project-gallery";
import ProjectVideo from "../components/Project-video/project-video";

const ProjectDetails2Dark = ({projectId} ) => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
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
          <ProjectVideo projectVideoData={ProjectData[projectId-1]} />
          <ProjectIntroduction projectIntroductionData={ProjectData[projectId-1].credit} />
          <ProjectGallery projectGalleryData={ProjectData[projectId-1].gallery}/>
          <Footer />
      </div>
    </DarkTheme>
  );
};

export async function getServerSideProps(context) {
  // Access the query parameter from the context object
  const { id } = context.query;

  // Fetch project details based on the ID
  // Replace this with your actual data fetching logic
  const projectId = id || 'default-project-id';

  // Return the props to the component
  return {
    props: {
      projectId,
    },
  };
}

// Export the page component
export default ProjectDetails2Dark;
