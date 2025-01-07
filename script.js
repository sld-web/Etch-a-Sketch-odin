const container = document.querySelector('#container');
const resetButton = document.querySelector('#reset-button')
const sizeButton = document.querySelector('#grid-size');
const clearButton = document.querySelector('#clear');


function createGrid(size){
    container.innerHTML = '';
    for (let i = 0; i < size*size; i++){
        const div = document.createElement('div');
        div.classList.add('square');
        div.style.width = `${960/size}px`;
        div.style.height = `${960/size}px`;
        container.appendChild(div);
        let r = Math.floor(Math.random()*256);
        let g = Math.floor(Math.random()*256);
        let b = Math.floor(Math.random()*256);
        div.addEventListener('mouseover', () => {
            div.style.backgroundColor = `rgb(${r},${g},${b})`;
        })
    }
}

function gridReset (){
    resetButton.addEventListener('click', () => {
        gridSize = 16;
    createGrid(gridSize);
    });
}

function changeSize (){
    sizeButton.addEventListener('click', () => {
        let userinp = Number(prompt("Enter the size of the grid (1 - 100)"));
        if (userinp <= 100 && userinp >= 1){
            gridSize = userinp;
        }
        else {
            alert("please enter a number between 1 and 100");
            gridSize = 16;
        }
        createGrid(gridSize);
    });
}

function clearGrid (){
    clearButton.addEventListener('click', () => {
        const squares = document.querySelectorAll('.square');
        squares.forEach(square => {
            square.style.backgroundColor = '';
        });
    });
}

let gridSize = 16;
gridReset();
changeSize();
clearGrid();
createGrid(gridSize);
