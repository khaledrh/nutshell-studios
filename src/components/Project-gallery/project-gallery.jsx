import React, { useState, useEffect } from "react";

const getImageDimensions = (src) => {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      resolve({ width: img.width, height: img.height });
    };
    img.src = src;
  });
};

const renderGallery = (item, dimensions) => {
  const className = (dimensions.width === 1400 && dimensions.height === 600) ? "col-md-12 popimg mb-4" :
                    (dimensions.width === 600 && dimensions.height === 600) ? "col-md-50-3 popimg mb-4" : "";

  return (
    <div className={className} key={item}>
      <img alt="" src={item} />
    </div>
  );
};

const ProjectGallery = ({ projectGalleryData }) => {
  const [imageDimensions, setImageDimensions] = useState({});

  useEffect(() => {
    projectGalleryData.forEach(async (item) => {
      const dimensions = await getImageDimensions(item);
      setImageDimensions(prevState => ({ ...prevState, [item]: dimensions }));
    });
  }, [projectGalleryData]);

  return (
    <section className="projdtal">
      <div className="popup-img">
        <div className="row">
          {projectGalleryData.map((item) =>
            imageDimensions[item]
              ? renderGallery(item, imageDimensions[item])
              : null // Or some placeholder while loading
          )}
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
