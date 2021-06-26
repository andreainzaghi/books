let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
  var progressHeight = (window.pageYOffset/totalHeight)*100;

  progress.style.height = progressHeight + "%";

  // if (progressHeight < 95) {
  //    document.getElementById("btn-overlay").classList.toggle("overlaybutton");
  // }
if (progressHeight<101) {
    document.getElementById('progressHeight').innerHTML = progressHeight.toFixed();
}

}
