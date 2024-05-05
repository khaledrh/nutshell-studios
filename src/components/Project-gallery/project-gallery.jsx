/* eslint-disable @next/next/no-img-element */
import React from "react";

const renderGallery = (item) => (
  <div className="col-md-3 popimg">
    <img alt="" src={item} />
  </div>
);

const ProjectGallery = ({ projectGalleryData }) => {
  return (
    <section className="projdtal">
      <div className="popup-img">
        <div className="row">

          { projectGalleryData.map((item) =>
            renderGallery(item)
        )}

        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
