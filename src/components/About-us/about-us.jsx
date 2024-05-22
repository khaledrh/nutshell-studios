/* eslint-disable @next/next/no-img-element */
import React from "react";
import VisionData from "../../data/sections/home-vision.json";

const AboutUs = () => {
  return (
    <section className="about-us section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 valign md-mb50">
            <div className="mb-50">
              <h6 className="fw-100 text-u ls10 mb-10">
                {VisionData.smallTitle}
              </h6>
              <h3 className="fw-600 text-u ls1 mb-30 color-font">
                {VisionData.title}
              </h3>
              <p>{VisionData.content}</p>
            </div>
          </div>
          <div className="col-lg-7 img">
            <img src={VisionData.image} alt="" />
            <div className="stauts">
              {VisionData.stauts.map((item) => (
                <div className="item" key={item.id}>
                  <h4>
                    {item.number}
                    <span>{item.letter}</span>
                  </h4>
                  <h6>{item.stautsName}</h6>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
