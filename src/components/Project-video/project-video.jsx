import React from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";

const ProjectVideo = ({ projectVideoData }) => {
  console.clear()
  const [isOpen, setOpen] = React.useState(false);
  return (
    <section>
      <div className="container-fluid">
        <div
          className="video-wrapper section-padding bg-img parallaxie halign"
          style={{
            backgroundImage: `url(${projectVideoData.projectHeaderImage})`,
          }}
          data-overlay-dark="4"
        >
          
          <div className="full-width text-center pt-150 ">
            {typeof window !== "undefined" && (
              <ModalVideo
                channel={projectVideoData.videoSource}
                autoplay
                isOpen={isOpen}
                videoId={projectVideoData.videoLink}
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
              <div className="vid-butn ">
                <span className="icon">
                  <i className="fas fa-play"></i>
                </span>
              </div>

            </a>
          </div>
         <div id="overlay" className=" text-left pl-50 pt-50 caption" >
            <h1>{projectVideoData.title.first} {projectVideoData.title.second} </h1>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default ProjectVideo;
