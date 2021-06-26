let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
  var progressHeight = (window.pageYOffset/totalHeight)*100;

  progress.style.height = progressHeight + "%";

  if (progressHeight>=0 & progressHeight<12) {
      document.getElementById('genereb').innerHTML = 'AVVENTURA';
  }else if(progressHeight>12 & progressHeight<22) {
      document.getElementById('genereb').innerHTML = 'LETTERATURA';
  }else if(progressHeight>22 & progressHeight<40) {
      document.getElementById('genereb').innerHTML = 'ARTE';
  }else if(progressHeight>40 & progressHeight<55) {
      document.getElementById('genereb').innerHTML = 'PSICOLOGIA';
  }else if(progressHeight>55 & progressHeight<67) {
      document.getElementById('genereb').innerHTML = 'INFORMATICA';
  }else if(progressHeight>67 & progressHeight<76) {
      document.getElementById('genereb').innerHTML = 'UNIVERSITA';
  }else {
      document.getElementById('genereb').innerHTML = 'BESTSELLER';
  }

if (progressHeight<=100) {
    document.getElementById('progressHeight').innerHTML = progressHeight.toFixed();
}

}
