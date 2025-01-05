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
    }
}


let gridSize = 15;
gridReset();
changeSize();
createGrid(gridSize);

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