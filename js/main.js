window.addEventListener("scroll",function(){
  var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);

  const hero = document.querySelector('.overlayblack');
  hero.classList.toggle("overlay",window.scrollY > 0);

    var chart1 = document.querySelector(".title-logo");
  chart1.classList.toggle("title-logo1",window.scrollY > 0);

  // const herowhite = document.querySelector('.btn-overlay');
  // herowhite.classList.toggle("overlaybutton",window.scrollY < 5);

})
