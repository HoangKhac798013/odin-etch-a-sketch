let GRID_SIZE_PX = 1000;
let gridSize = 0;
createGrid();

let resetGridSize = document.querySelector("#resetGridSize");
resetGridSize.addEventListener("click", createGrid);

function createGrid() {
  let grid = document.querySelector("#grid");
  gridSize = parseInt(prompt("Input the number of grids"));
  while(!Number.isInteger(gridSize) || gridSize > 100 || grid < 1) {  
    gridSize = parseInt(prompt("Please don't be stupid"));
    warning.textContent = "Please don't be stupid";
  }
  grid.replaceChildren();

  for (let i = 0; i < gridSize; i++) {
    let iSquare = createSquare("horizontal", i);
    for (let j = 0; j < gridSize; j++) {
      let jSquare = createSquare("vertical", j);
      jSquare.addEventListener("mouseover", (event) => {
        if(event.buttons === 1){
          jSquare.style.backgroundColor = "pink";
          console.log(`jSquare type is: ${typeof(jSquare)}`);
        }
      })
      iSquare.appendChild(jSquare);
    }
    grid.appendChild(iSquare);
  }
}

function createSquare(className, id) {
  let square = document.createElement("div");
  setMultiAttribute(square,"class:" + className, "id:gridNumber" + id);
  return square;
}

function setMultiAttribute(el) {
  for (let i=1; i < arguments.length; i++) {
    console.log(arguments[i]);
    let pair = arguments[i].split(":");
    el.setAttribute(pair[0], pair[1]);
  }
}
