
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

const genereb1 = document.querySelector('.genereb1');
const inputmail = document.querySelector('.inputmail');
const inputmail1 = document.querySelector('.inputmail1');
const textt1 = document.querySelector('.textt1');
const butsend = document.querySelector('.butsend');
textt1.onclick = function(){
  genereb1.classList.toggle('genereb2');
  inputmail.classList.toggle('inputmail2');
  inputmail1.classList.toggle('inputmail3');
  textt1.classList.toggle('textt2');
    butsend.classList.toggle('butsend1');
}
