import React from "react";

const ProjectIntroduction = ({ projectIntroductionData }) => {
  return (
    <section className="intro-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4">
            <div className="htit">
              <h4>
                <span>◦◦ </span> Credit
              </h4>
            </div>
          </div>
          <div className="col-lg-8 offset-lg-1 col-md-8">
            <div className="text js-scroll__content">
              <pre className="extra-text mb-10">
                {projectIntroductionData.content}
              </pre>
              <ul className="smp-list">
                {projectIntroductionData.spmList.map((item) => (
                  <ul key={item.id}>{item.name}</ul>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectIntroduction;
