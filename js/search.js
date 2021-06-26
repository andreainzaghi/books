
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
