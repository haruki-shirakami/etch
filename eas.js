const container = document.querySelector('.grid-container');

for(var i = 0; i < 16*16; i++){
  container.appendChild(document.createElement('div'));
  container.lastElementChild.setAttribute("idx", `${i}`);
  container.lastElementChild.setAttribute("class", "grid-item") ;
}

function lightUp(e){
  this.classList.add("hovered");
}

function clear(e){
  pixels.forEach((pixel) => {
    pixel.classList.remove("hovered");
  });
}

const pixels = document.querySelectorAll('.grid-item');
pixels.forEach((pixel) => {
  pixel.addEventListener('mouseover', lightUp);
});

const button = document.querySelector('button');

button.addEventListener('click', clear);
