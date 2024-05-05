/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import initIsotope from "../../common/initIsotope";
import projectData from "../../data/project-details2.json";

const renderGridItem = (item, grid) => (
    <div
      className={`${
        grid === 3
          ? "col-lg-4 col-md-6"
          : grid === 2
          ? "col-md-6"
          : "col-12"
      } items brand wow fadeInUp`}
      data-wow-delay=".4s"
    >
      <div className="item-img">
      <Link href={`/project-details2/project-details2-dark?id=${item.id}`}>
          <a className="imago wow">
            <img src={item.projectHeaderImage} alt="image" />
            <div className="item-img-overlay"></div>
          </a>
        </Link>
      </div>
      <div className="cont">
        <h6>{item.title.big}</h6>
        <span>
          <Link href="">Design</Link>,
          <Link href="">WordPress</Link>
        </span>
      </div>
    </div>
);

const WorksStyle2 = ({ grid, hideFilter, filterPosition }) => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
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
                <h6 className="wow fadeIn" data-wow-delay=".5s">
                  Portfolio
                </h6>
                <h3 className="wow color-font">
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
                <span data-filter=".brand">TVC</span>
                <span data-filter=".web">Film</span>
                <span data-filter=".graphic">Series</span>
                <span data-filter=".blah">MusicVideo</span>
                <span data-filter=".blahblah">Program</span>
              </div>
            </div>
          )}
          <div className="gallery full-width">
              {projectData.map((item) =>
                renderGridItem(item, grid)

              )}
          </div>

          

          
        </div>
      </div>
    </section>
  );
};

export default WorksStyle2;
