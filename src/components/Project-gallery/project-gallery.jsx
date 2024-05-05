/* eslint-disable @next/next/no-img-element */
import React from "react";

const ProjectGallery = ({ projectVideoDate }) => {
  return (
    <section className="projdtal">
      <div className="popup-img">
        <div className="row">
          <div className="col-md-3 popimg">
            <img alt="" src="/img/portfolio/project2/1.png" />
          </div>
          <div className="col-md-3 popimg">
            <img alt="" src="/img/portfolio/project2/2.png" />
          </div>
          <div className="col-md-3 popimg">
            <img alt="" src="/img/portfolio/project2/3.png" />
          </div>
          <div className="col-md-3 popimg">
            <img alt="" src="/img/portfolio/project2/4.png" />
          </div>
          {/* <a href="#" className="col-md-12 popimg">
            <img alt="" src="/img/portfolio/project2/7.jpg" />
          </a> */}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
