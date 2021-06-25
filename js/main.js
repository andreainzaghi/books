window.addEventListener("scroll",function(){
  var header = document.querySelector("header");
    // var chart1 = document.querySelector(".chart");
  const hero = document.querySelector('.overlayblack');
  header.classList.toggle("sticky",window.scrollY > 0);
  hero.classList.toggle("overlay",window.scrollY > 0);
  // chart1.classList.toggle("bchartb",window.scrollY > 0);

})
