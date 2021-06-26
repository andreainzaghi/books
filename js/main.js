window.addEventListener("scroll",function(){
  var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);

  const hero = document.querySelector('.overlayblack');
  hero.classList.toggle("overlay",window.scrollY > 0);

    // var chart1 = document.querySelector(".chart");
  // chart1.classList.toggle("bchartb",window.scrollY > 0);
  //
  // const herowhite = document.querySelector('.btn-overlay');
  // herowhite.classList.toggle("overlaybutton",window.scrollY < 5);

})
