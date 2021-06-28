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
    document.getElementById('genereb').innerHTML = 'ARTE AMORE';
  }else if(progressHeight>40 & progressHeight<55) {
    document.getElementById('genereb').innerHTML = 'PSICOLOGIA';
  }else if(progressHeight>55 & progressHeight<67) {
    document.getElementById('genereb').innerHTML = 'MATEMATICA';
  }else if(progressHeight>67 & progressHeight<84) {
    document.getElementById('genereb').innerHTML = 'UNIVERSITA';
  }else {
    document.getElementById('genereb').innerHTML = 'BESTSELLER';
  }
  // hshshshshsh
  // hshshshshshshssh

  let genereb2 = document.querySelector('.genereb2');
  let inputmail2 = document.querySelector('.inputmail2');
  let inputmail3 = document.querySelector('.inputmail3');
  let textt2 = document.querySelector('.textt2');
  let butsend1 = document.querySelector('.butsend1');





  if (progressHeight>15 & progressHeight<29) {
    document.getElementById('emoticonesp').innerHTML = '<img src=\'img/Background (42).png\'  height="100px">';
    document.getElementById('emoticonetxt').innerHTML = 'Ei Simone!Aspetta un secondo!';
    document.getElementById('emoticonedel').innerHTML = '<i class="fas fa-times">';
    document.getElementById("emoticonetxt").style.border = "1px solid rgb(34, 113, 179)";
    document.getElementById("emoticonetxt").style.padding = "4px 8px";
  }else if(progressHeight>29 & progressHeight<44) {
    document.getElementById('emoticonesp').innerHTML = '<img src=\'img/Background (43).png\'  height="100px">';
    document.getElementById('emoticonetxt').innerHTML = 'Volevo dirti una cosa velocissima ';
    document.getElementById('emoticonedel').innerHTML = '<i class="fas fa-times">';
    document.getElementById("emoticonetxt").style.border = "1px solid rgb(34, 113, 179)";
    document.getElementById("emoticonetxt").style.padding = "4px 8px";
  }else if(progressHeight>44 & progressHeight<61) {
    document.getElementById('emoticonesp').innerHTML = '<img src=\'img/Background (44).png\'  height="100px">';
    document.getElementById('emoticonetxt').innerHTML = 'Voglio essere sicuro che dai un occhiata hai nostri Bestsellers';
    document.getElementById('emoticonedel').innerHTML = '<i class="fas fa-times">';
    document.getElementById("emoticonetxt").style.border = "1px solid rgb(34, 113, 179)";
    document.getElementById("emoticonetxt").style.padding = "4px 8px";
  }else if(progressHeight>61& progressHeight<75) {
    document.getElementById('emoticonesp').innerHTML ='<img src=\'img/Background (45).png\'  height="100px">';
    document.getElementById('emoticonetxt').innerHTML = 'OTTIMO!' + '<br>' + 'Piccola info,oggi il tempo sara\' soleggiato con 26°C' ;
    document.getElementById('emoticonedel').innerHTML = '<i class="fas fa-times">';
    document.getElementById("emoticonetxt").style.border = "1px solid rgb(34, 113, 179)";
    document.getElementById("emoticonetxt").style.padding = "4px 8px";

  }else {
    document.getElementById('emoticonesp').innerHTML = '';
    document.getElementById('emoticonetxt').innerHTML = '';
    document.getElementById('emoticonedel').innerHTML = '';
    document.getElementById("emoticonetxt").style.border = "1px solid transparent";
    document.getElementById("emoticonetxt").style.padding = "0px";
  }


  genereb2.classList.remove('genereb2');
  genereb2.classList.add('genereb1');

  inputmail2.classList.remove('inputmail2');
  inputmail2.classList.add('inputmail');

  inputmail3.classList.remove('inputmail3');
  inputmail3.classList.add('inputmail1');

  textt2.classList.remove('textt2');
  textt2.classList.add('textt');

  butsend1.classList.remove('butsend1');
  butsend1.classList.add('butsend');

  // hdhdhdhdhdhdhdhdhdhddhhd
  // smileemoticon
  // var active = document.querySelector('.active');
  // active.classList.remove('active');
  // active.classList.add('search');



  //
  //
  // // scroll
  // if (progressHeight<=100) {
  //   document.getElementById('progressHeight').innerHTML = progressHeight.toFixed();
  // }
}
