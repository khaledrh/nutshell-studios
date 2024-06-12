const loadingPace = (onVideoStart) => {
  const handlePaceDone = () => {
    if (onVideoStart===true) {
      document.querySelector("#preloader").classList.add("isdone");
      document.querySelector(".loading").classList.add("isdone");
    }
    
  };
 
  if(onVideoStart){
    console.log("pace start");
  }

  window.paceOptions = {
    ajax: false,
    document: false,
    eventLag: false,
    elements: {
      selectors: ['.my-page']
    }
  };

  Pace.on("start", function () {
    document.querySelector("#preloader").classList.remove("isdone");
    document.querySelector(".loading").classList.remove("isdone");
  });
  Pace.on("done", () => {
    document.querySelector("#preloader").classList.add("isdone");
    document.querySelector(".loading").classList.add("isdone");
  });

  if (document.querySelector("body").classList.contains("pace-done")) {
    document.querySelector("#preloader").classList.add("isdone");
    document.querySelector(".loading").classList.add("isdone");
  }

  window.addEventListener("load", () => {
    document.querySelector("#preloader").classList.add("isdone");
    document.querySelector(".loading").classList.add("isdone");
    if (document.querySelector('.pace-running')) {
      document.querySelector('.pace-running').classList.remove('pace-running')
    }
  });
};

export default loadingPace;
