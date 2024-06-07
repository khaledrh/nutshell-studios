/* eslint-disable @next/next/no-img-element */
import React from "react";
import initIsotope from "../../common/initIsotope";

const WorksStyle3 = () => {
  React.useEffect(() => {
    setTimeout(() => {
      initIsotope();
    }, 1000);
  }, []);
  return (
    <section id="studio" className="portfolio-cr section-ptb pb-50">
      <div className="container">
        
          <div className="row justify-content-center">
            <div className="col-lg-8 col-md-10">
              <div className="sec-head text-center">
                <h6 className="wow fadeIn" data-wow-delay=".5s">
                  Our Studio
                </h6>
                <h3 className="wow color-font">
                An original team of decision makers, creators, designers &amp; dreamers.
                </h3>
              </div>
            </div>
          </div>
      
        <div className="row">
          <div className="gallery-mons full-width">
            <div className="items graphic wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">

                  <a className="imago wow">
                    <img src="/img/portfolio/1.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>

              </div>

            </div>

            <div className="items web brand wow fadeInUp" data-wow-delay=".4s">
              <div className="item-img">

                  <a className="imago wow">
                    <img src="/img/portfolio/2.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>

              </div>

            </div>

            <div
              className="items width2 brand wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="item-img">

                  <a className="imago wow">
                    <img src="/img/portfolio/3.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>

              </div>
 
            </div>

            <div
              className="items width2 graphic wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="item-img">

                  <a className="imago wow">
                    <img src="/img/portfolio/4.jpg" alt="image" />
                    <div className="item-img-overlay"></div>
                  </a>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksStyle3;
