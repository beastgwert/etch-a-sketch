const grid = document.querySelector(".grid");
const button = document.querySelector("button");

function createGrid(gridSize){
    for(let i=0; i<gridSize; i++){
        for(let j=0; j<gridSize; j++){
            let size = grid.clientWidth/gridSize;
            console.log(size + " " + grid.clientWidth);
            const div = document.createElement("div");
            div.classList.add("box");
            div.style.width = `${size}px`;
            div.style.height = `${size}px`;
            console.log("here " + div.style.width);
            grid.appendChild(div);
        }
    }
}

createGrid(8);

button.addEventListener('click', () => {
    gridSize = prompt("Enter the dimensions of the grid (no more than 40)");
    grid.replaceChildren();
    createGrid(Math.min(40, gridSize));
})

grid.addEventListener('mouseover', (e) => {
    if(e.target.classList.contains('box')){
        e.target.classList.add('active');
    }
})