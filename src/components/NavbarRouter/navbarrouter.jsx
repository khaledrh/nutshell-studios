import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home1Dark from "../homepage/home1-dark";
import AboutDark from "../about/about-dark";
import Works2Dark from "../works2/works2-dark";
import ShowcaseDark from "../showcase/showcase-dark";
import CareerDark from "../career/career-dark";
import ContactDark from "../contact/contact-dark";

const NavbarRouter = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Route path="/homepage/home1-dark" component={Home1Dark} />
        <Route path="/about/about-dark" component={AboutDark} />
        <Route path="/works2/works2-dark" component={Works2Dark} />
        <Route path="/showcase/showcase-dark" component={ShowcaseDark} />
        <Route path="/career/career-dark" component={CareerDark} />
        <Route path="/contact/contact-dark" component={ContactDark} />
      </div>
    </Router>
  );
};

export default NavbarRouter;