window.addEventListener("scroll",function(){
  var header = document.querySelector("header");
  const hero = document.querySelector('.overlayblack');
  header.classList.toggle("sticky",window.scrollY > 0);
  hero.classList.toggle("overlay",window.scrollY > 0);
})
