const container = document.querySelector('.grid-container');

for(var i = 0; i < 30*30; i++){
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

  var input = prompt("Enter height of new grid");

  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }

  for(var i = 0; i < input*input; i++){
    container.appendChild(document.createElement('div'));
    container.lastElementChild.setAttribute("idx", `${i}`);
    container.lastElementChild.setAttribute("class", "grid-item") ;
  }
  container.style.gridTemplateColumns = `repeat(${input}, 1fr)`;
  pixels = document.querySelectorAll('.grid-item');
  pixels.forEach((pixel) => {
    pixel.addEventListener('mouseover', lightUp);
  });
}

var pixels = document.querySelectorAll('.grid-item');

pixels.forEach((pixel) => {
  pixel.addEventListener('mouseover', lightUp);
});

const button = document.querySelector('button');

button.addEventListener('click', clear);
