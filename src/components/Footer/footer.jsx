/* eslint-disable @next/next/no-img-element */
import React from "react";
import appData from "../../data/app.json";

const Footer = ({ hideBGCOLOR }) => {
  return (
    <footer className={`${!hideBGCOLOR ? "sub-bg" : ""}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4">
            <div className="item md-mb50">
              <div className="title">
                <h5>Contact Us</h5>
              </div>
              <ul>
                <li>
                  <span className="icon pe-7s-map-marker"></span>
                  <div className="cont">
                    <h6>Official Address</h6>
                    <p>9 El Gezira El Wosta, Abu Al Feda, Zamalek, Cairo, Egypt </p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-mail"></span>
                  <div className="cont">
                    <h6>Email Us</h6>
                    <p>info@nutshell-studios.com</p>
                  </div>
                </li>
                <li>
                  <span className="icon pe-7s-call"></span>
                  <div className="cont">
                    <h6>Call Us</h6>
                    <p>+20 155 468 4452</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
         
          <div className="col-lg-4">
            <div className="item">
              <div className="logo">
                <img src={appData.lightLogo} alt="" />
              </div>
              <div className="social">
                <a href="https://www.facebook.com/profile.php?id=100088383735706&mibextid=nW3QTL">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="https://instagram.com/nutshell.studios?igshid=NTc4MTIwNjQ2YQ==">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="https://vimeo.com/nutshellstudios">
                  <i className="fab fa-vimeo"></i>
                </a>
                <a href="https://www.linkedin.com/company/nutshellstudios/">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
              <div className="copy-right">
                <p>
                    Follow us
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
