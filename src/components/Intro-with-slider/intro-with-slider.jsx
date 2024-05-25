import React from "react";
import introData from "../../data/sections/home-intro.json";
import { Swiper, SwiperSlide } from "swiper/react";

import SwiperCore, { Navigation, Pagination, Parallax } from "swiper";
import BackgroundVideo from 'react-background-video-player';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import removeSlashFromPagination from "../../common/removeSlashpagination";
import fadeWhenScroll from "../../common/fadeWhenScroll";

import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

SwiperCore.use([Navigation, Pagination, Parallax]);

const IntroWithSlider = ({ sliderRef }) => {
  const [isOpen, setOpen] = React.useState(false);
  const [load, setLoad] = React.useState(true);
  React.useEffect(() => {
    fadeWhenScroll(document.querySelectorAll(".fixed-slider .caption"));
    setTimeout(() => {
      removeSlashFromPagination();
      setLoad(false);
    }, 1000);
  }, []);

  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  const paginationRef = React.useRef(null);

  return (
    <header
      ref={sliderRef}
      className="slider slider-prlx fixed-slider text-center"
    >
      <div className="swiper-container parallax-slider">
        {!load ? (
          <Swiper
            speed={1000}
            parallax={true}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
            pagination={{
              type: "fraction",
              clickable: true,
              el: paginationRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.params.pagination.el = paginationRef.current;
            }}
            onSwiper={(swiper) => {
              setTimeout(() => {
                for (var i = 0; i < swiper.slides.length; i++) {
                  swiper.slides[i].childNodes[0].setAttribute(
                    "data-swiper-parallax",
                    0.75 * swiper.width
                  );
                }

                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;

                swiper.params.pagination.el = paginationRef.current;

                swiper.navigation.destroy();
                swiper.navigation.init();
                swiper.navigation.update();

                swiper.pagination.destroy();
                swiper.pagination.init();
                swiper.pagination.update();
              });
            }}
            className="swiper-wrapper"
            slidesPerView={1}
          >
            {introData.map((slide, index) => (
              <SwiperSlide key={slide.id} className="swiper-slide">
                <div
                  className="bg-img valign"
                  style={{ backgroundImage: `url(${slide.image})` }}
                  data-overlay-dark="6"
                >
                  {index === 0 && (
                    <BackgroundVideo src="..\img\26.mp4" loop autoPlay />
                  )}
                  <div className="container">
                    <div className="row justify-content-center">
                      <div className="col-lg-8 col-md-10">
                        <div className="caption center mt-30">
                          <h1 className="color-font">{slide.title}</h1>
                          {slide?.content && <p>{slide.content}</p>}
                          {typeof window !== "undefined" && (
                            <ModalVideo
                              channel="vimeo"
                              isOpen={isOpen}
                              videoId="779815075"
                              onClose={() => setOpen(false)}
                            />
                          )}
                          <a
                            className="vid"
                            onClick={(e) => {
                              e.preventDefault();
                              setOpen(true);
                            }}
                          >
                            <div className="butn bord curve mt-30">
                              <span className="icon">
                                <i className="fas fa-play"></i>
                              </span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        ) : null}
        <div className="setone setwo">
          <div
            ref={navigationNextRef}
            className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer"
          >
            <i className="fas fa-chevron-right"></i>
          </div>
          <div
            ref={navigationPrevRef}
            className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer"
          >
            <i className="fas fa-chevron-left"></i>
          </div>
        </div>
        {/* <div ref={paginationRef} className="swiper-pagination top botm"></div> */}

        <div className="social-icon">
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
      </div>
    </header>
  );
};

export default IntroWithSlider;
