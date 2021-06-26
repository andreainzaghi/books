let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
  var progressHeight = (window.pageYOffset/totalHeight)*100;

  progress.style.height = progressHeight + "%";
  // genere
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
  }else if(progressHeight>67 & progressHeight<84) {
    document.getElementById('genereb').innerHTML = 'UNIVERSITA';
  }else {
    document.getElementById('genereb').innerHTML = 'BESTSELLER';
  }
  // smileemoticon

  if (progressHeight>15 & progressHeight<29) {
    document.getElementById('emoticonesp').innerHTML = '<img src=\'img/Background (42).png\'  height="100px">';
    document.getElementById('emoticonetxt').innerHTML = 'Ei Simone!Aspetta un secondo!';
    document.getElementById('emoticonedel').innerHTML = 'X';
  }else if(progressHeight>29 & progressHeight<44) {
    document.getElementById('emoticonesp').innerHTML = '<img src=\'img/Background (43).png\'  height="100px">';
    document.getElementById('emoticonetxt').innerHTML = 'Volevo dirti una cosa velocissima ';
    document.getElementById('emoticonedel').innerHTML = 'X';
  }else if(progressHeight>44 & progressHeight<61) {
    document.getElementById('emoticonesp').innerHTML = '<img src=\'img/Background (44).png\'  height="100px">';
    document.getElementById('emoticonetxt').innerHTML = 'Voglio essere sicuro che dai un occhiata hai nostri Bestsellers';
    document.getElementById('emoticonedel').innerHTML = 'X';
  }else if(progressHeight>61& progressHeight<75) {
    document.getElementById('emoticonesp').innerHTML ='<img src=\'img/Background (45).png\'  height="100px">';
    document.getElementById('emoticonetxt').innerHTML = 'OTTIMO!' + '<br>' + 'Piccola info,oggi il meteo é soleggiato con 26°C' ;
    document.getElementById('emoticonedel').innerHTML = 'X';
  }else {
    document.getElementById('emoticonesp').innerHTML = '';
    document.getElementById('emoticonetxt').innerHTML = '';
    document.getElementById('emoticonedel').innerHTML = '';
  }

  // scroll
  if (progressHeight<=100) {
    document.getElementById('progressHeight').innerHTML = progressHeight.toFixed();
  }

}
