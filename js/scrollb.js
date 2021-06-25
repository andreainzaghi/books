let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
  let progressHeight = (window.pageYOffset/totalHeight)*100;

  progress.style.height = progressHeight + "%";
  console.log(progressHeight);
if (progressHeight<101) {
    document.getElementById('progressHeight').innerHTML = progressHeight.toFixed();
}



}
