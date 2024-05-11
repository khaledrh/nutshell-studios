import React from "react";
import Link from "next/link";
import appData from "../../data/app.json";
import { handleDropdown, handleMobileDropdown } from "../../common/navbar";

const Navbar = ({ lr, nr, theme }) => {
  return (
    <nav
      ref={nr}
      className={`navbar navbar-expand-lg change ${
        theme === "themeL" ? "light" : ""
      }`}
    >
      <div className="container">
        <Link href="/homepage/home1-dark">
          <a className="logo">
            {theme ? (
              theme === "themeL" ? (
                <img ref={lr} src={appData.darkLogo} alt="logo" />
              ) : (
                <img ref={lr} src={appData.lightLogo} alt="logo" />
              )
            ) : (
              <img ref={lr} src={appData.lightLogo} alt="logo" />
            )}
          </a>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          onClick={handleMobileDropdown}
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="icon-bar">
            <i className="fas fa-bars"></i>
          </span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            
            <li className="nav-item">
              <Link href="/homepage/home1-dark">
                <a className="nav-link">Home</a>
              </Link>
            </li>
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                About
              </span>
              <div className="dropdown-menu">
                <Link href="/about/about-dark">
                  <a className="dropdown-item">About</a>
                </Link>
                <Link href="/about/about-dark/#services">
                  <a className="dropdown-item">Services</a>
                </Link>
                <Link href="/about/about-dark/#team">
                  <a className="dropdown-item">Our Team</a>
                </Link>
                <Link href="/about/about-dark/#studio">
                  <a className="dropdown-item">Our Studio</a>
                </Link>
                
              </div>
            </li>
            <li className="nav-item dropdown" onClick={handleDropdown}>
              <span
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
                role="button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Works
              </span>
              <div className="dropdown-menu">
                <Link href="/works2/works2-dark">
                  <a className="dropdown-item">Portfolio</a>
                </Link>
                <Link href="/showcase/showcase-dark">
                  <a className="dropdown-item">Showreels</a>
                </Link>
                
              </div>
            </li>
            <li className="nav-item">
              <Link href="/career/career-dark">
                <a className="nav-link">Career</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/contact/contact-dark">
                <a className="nav-link">Contact</a>
              </Link>
            </li>
            

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
