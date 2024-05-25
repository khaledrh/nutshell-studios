/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import DarkTheme from "../../layouts/Dark";
import ContactHeader from "../../components/Contact-header/contact-header";
import ContactForm from "../../components/Contact-form/contact-form";

const Contact = () => {
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
    <DarkTheme>
      <Navbar nr={navbarRef} lr={logoRef} />
      <ContactHeader />
        <ContactForm />
        <div className="map" id="ieatmaps">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3452.9617938059046!2d31.214590676266756!3d30.066629617518014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x145841111f4580ed%3A0x17f31a225a4dd9f6!2sNutshell%20VFX%20Studios!5e0!3m2!1sen!2seg!4v1695568133797!5m2!1sen!2seg"
          loading="fast" 
          ></iframe>
        </div>
        <Footer hideBGCOLOR />
    </DarkTheme>
  );
};

export default Contact;
