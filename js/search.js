
const icon = document.querySelector('.icon');
const search = document.querySelector('.search');

icon.onclick = function(){
  search.classList.toggle('active')
}

// emoticonesp

const emoticonetxt = document.querySelector('.meteo');
const icondelete = document.querySelector('.icondelete');

icondelete.onclick = function(){
  emoticonetxt.classList.toggle('deletee')
}

// gmail

var genereb1 = document.querySelector('.genereb1');
var inputmail = document.querySelector('.inputmail');
var inputmail1 = document.querySelector('.inputmail1');
var textt1 = document.querySelector('.textt1');
var butsend = document.querySelector('.butsend');


textt1.onclick = function(){
  genereb1.classList.toggle('genereb2');
  inputmail.classList.toggle('inputmail2');
  inputmail1.classList.toggle('inputmail3');
  textt1.classList.toggle('textt2');
  butsend.classList.toggle('butsend1');
}



// window.onscroll = function(){
//
// inputmail.classList.add('inputmail2');
// inputmail1.classList.add('inputmail3');
// textt1.classList.add('textt2');
// butsend.classList.add('butsend1');
// }
