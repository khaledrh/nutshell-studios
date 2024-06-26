/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import projectData from "../../data/project-details.json";

const renderGridItem = (item, grid) => (
    <div
      className={`
      ${ 
        grid === 3
          ? "col-lg-4 col-md-6"
          : grid === 2
          ? "col-md-6"
          : "col-12"
        } 
        items ${item.categories}`}
        
      key={item.id}
    >
      <div className="item-img">
        <Link legacyBehavior href={`/portfolio/` + item.id} passHref>
          <div className="imago wow" data-wow-offset="400">
            <img src={item.projectCroppedImage} alt="image" />
            <div className="item-img-overlay"></div>
          </div>
        </Link>
      </div>
      <div className="cont wow fadeInUp" data-wow-offset="80">
        <h6>{item.title.first} {item.title.second}</h6>
        <span>
          <div>{item.categories}</div>
        </span>
      </div>
    </div>
);

const WorksStyle2 = ({ grid, hideFilter, filterPosition }) => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 500);
  }, []);
  return (
    <section
      className={`${
        grid ? (grid === 3 ? "three-column" : null) : null
      } portfolio section-padding pb-70`}
    >
      {!hideFilter && (
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="sec-head text-center">
                <h6>
                  Portfolio
                </h6>
                <h3 className="color-font">
                  Our Recent Web Design &amp; <br /> Some Past Projects.
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className={"container"}>
        <div className="row">
          {!hideFilter && (
            <div
              className={`filtering ${
                filterPosition === "center"
                  ? "text-center"
                  : filterPosition === "left"
                  ? "text-left"
                  : "text-right"
              } col-12`}
            >
              <div className="filter">
                <span data-filter="*" className="active">
                  All
                </span>
                <span data-filter=".tvc">TVC</span>
                <span data-filter=".film">Film</span>
                <span data-filter=".series">Series</span>
                <span data-filter=".music">MusicVideo</span>
                <span data-filter=".program">Program</span>
              </div>
            </div>
          )}
          
        </div>
        <div className="row gallery full-width">
              {projectData.map((item) =>
                renderGridItem(item, grid)

              )}
          </div>
      </div>
    </section>
  );
};

export default WorksStyle2;
