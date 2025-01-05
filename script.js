const container = document.querySelector('#container');
const resetButton = document.querySelector('#reset-button')
const sizeButton = document.querySelector('#grid-size')


function createGrid(size){
    container.innerHTML = '';
    let gridCont = size*50;
    container.style.width = `${gridCont}px`;
    container.style.height = `${gridCont}px`;
    for (let i = 0; i < size*size; i++){
        const div = document.createElement('div');
        div.classList.add('square');
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
        gridSize = 0;
    createGrid(gridSize);
    })
}

function changeSize (){
    sizeButton.addEventListener('click', () => {
        let userinp = prompt("Enter the size of the grid");
        gridSize = Number(userinp);
        createGrid(gridSize);
    })
}

let gridSize = 15;
gridReset();
changeSize();
createGrid(gridSize);
