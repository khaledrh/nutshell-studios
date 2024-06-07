import React from "react";
import Navbar from "../../components/Navbar/navbar";
import ShowcasesFullScreen from "../../components/Showcases-full-screen/showcases-full-screen";
import DarkTheme from "../../layouts/Dark";

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
      if (window.scrollY > 300) {
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
    <DarkTheme>
          <Navbar nr={navbarRef} lr={logoRef} />
      <ShowcasesFullScreen />
    </DarkTheme>
  );
};

export default ShowcaseDark;
