
const initIsotope = () => {
  var grid = document.querySelectorAll(".gallery");
  var iso;
  imagesLoaded( grid, function() {
  if (grid.length >= 1) {
    grid.forEach((item) => {
      iso = new Isotope(item, {
        itemSelector: ".items",
      });
    });
  }
});

  var gridMons = document.querySelectorAll(".gallery-mons");
  imagesLoaded( gridMons, function() {
    if (gridMons.length >= 1) {
      gridMons.forEach((item) => {
        iso = new Isotope( item, {
          itemSelector: '.items',
          percentPosition: true,
          masonry: {
            columnWidth: '.width2'
          }
        });
      });
    }
  });


  var filtersElem = document.querySelector(".filtering");

  if (filtersElem) {
    filtersElem.addEventListener("click", function (event) {
      if (!matchesSelector(event.target, "span")) {
        return;
      }
      var filterValue = event.target.getAttribute("data-filter");
      filterValue = filterValue ?? "*";
      console.log(filterValue);
      iso.arrange({ filter: filterValue });
    });
    var buttonGroups = document.querySelectorAll(".filtering");
    for (var i = 0, len = buttonGroups.length; i < len; i++) {
      var buttonGroup = buttonGroups[i];
      radioButtonGroup(buttonGroup);
    }
    function radioButtonGroup(buttonGroup) {
      buttonGroup.addEventListener("click", function (event) {
        if (!matchesSelector(event.target, "span")) {
          return;
        }
        buttonGroup.querySelector(".active").classList.remove("active");
        event.target.classList.add("active");
      });
    }

    setTimeout( _ => 
      trigger( filtersElem, `click` ), 1000 );
      }
};

const trigger = (el, etype, custom) => {
  const evt = custom ?? new Event( etype, { bubbles: true, target: new EventTarget() } );
  el.dispatchEvent( evt );
};

export default initIsotope