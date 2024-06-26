import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Services from "../../components/Services3/services3";
import Footer from "../../components/Footer/footer";
import PagesHeader from "../../components/Pages-header";
import AboutIntro from "../../components/About-intro";
import DarkTheme from "../../layouts/Dark";
import Team2 from "../../components/Team2/team2";
import GalleryGrid from "../../components/Works-style3/works-style3"

const About = () => {
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
      <Navbar nr={navbarRef} lr={logoRef}/>
      <PagesHeader />
      <AboutIntro />
      <Services style="4item"  />
      <Team2  />
      <GalleryGrid />
      <Footer />
    </DarkTheme>
  );
};

export default About;
