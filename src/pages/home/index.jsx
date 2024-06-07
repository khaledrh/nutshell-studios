import React from "react";
import Navbar from "../../components/Navbar/navbar";
import IntroWithSlider from "../../components/Intro-with-slider/intro-with-slider";
import Vision from "../../components/About-us/about-us";
import Mission from "../../components/About-us3/about-us3";
import Works from "../../components/Works/works";
import Numbers from "../../components/Numbers/numbers";
import VideoWithTestimonials from "../../components/Video-with-testimonials/video-with-testimonials";
import SkillsCircle from "../../components/Skills-circle/skills-circle";
import CallToAction from "../../components/Call-to-action/call-to-action";
import Footer from "../../components/Footer/footer";
import DarkTheme from "../../layouts/Dark";


const Homepage1 = () => {
  const fixedSlider = React.useRef(null);
  const MainContent = React.useRef(null);
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    setInterval(() => {
      if (fixedSlider.current) {
        var slidHeight = fixedSlider.current.offsetHeight;
      }
      if (MainContent.current) {
        MainContent.current.style.marginTop = slidHeight + "px";
      }
    }, 1000);
    var navbar = navbarRef.current;
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
  }, [fixedSlider, MainContent, navbarRef]);

  return (
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <IntroWithSlider sliderRef={fixedSlider} />
      <div ref={MainContent} className="main-content">
        <Vision />
        <Mission />
        <Works />
        <Numbers />
        {/* <VideoWithTestimonials /> */}
        {/* <SkillsCircle theme="dark" />  */}
        <CallToAction />
        <Footer />
      </div>
    </DarkTheme>
  );
};

export default Homepage1;
