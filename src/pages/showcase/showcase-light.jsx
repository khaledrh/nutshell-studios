import React from "react";
import Navbar from "../../components/Navbar/navbar";
import ShowcasesFullScreen from "../../components/Showcases-full-screen/showcases-full-screen";
import LightTheme from "../../layouts/Light";

const ShowcaseDark = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    document.querySelector("body").classList.add("contact-page");

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
    return () => {
      document.querySelector("body").classList.remove("contact-page");
    };
  }, [navbarRef]);

  return (
    <LightTheme>
          <Navbar nr={navbarRef} lr={logoRef} />
      <ShowcasesFullScreen />
    </LightTheme>
  );
};

export default ShowcaseDark;
