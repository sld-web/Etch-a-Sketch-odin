const container = document.querySelector('#container');
const resetButton = document.querySelector('#reset-button')


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


 
createGrid(15);