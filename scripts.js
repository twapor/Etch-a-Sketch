const value = document.querySelector('.value');
const input = document.querySelector('#size-selector');

value.textContent = input.value;
input.addEventListener('input', (event) => {
    value.textContent = event.target.value;
});

const eraser = document.querySelector('#erase');
eraser.addEventListener('click', () => {
    eraserOn = true;
});

const whitePaint = document.querySelector('#white');
whitePaint.addEventListener('click', () => {
    eraserOn = false;
});

let eraserOn = false;
const resize = document.querySelector('#resize');
resize.addEventListener('click', () => {resizeCanvas(input.value)})
const canvasContainer = document.querySelector('#canvas-container');

const clear = document.querySelector('#clear');
clear.addEventListener('click', () => {
    const allPixels = document.querySelectorAll('.pixel');
    allPixels.forEach(pixel => {
        pixel.classList.remove('white');
    });
});

function resizeCanvas(size){
    const grid = document.querySelector('.canvas-grid');
    canvasContainer.removeChild(grid);
    createCanvas(size);
}

function createCanvas(size,){
    const grid = document.createElement('div');
    grid.classList.add('canvas-grid');
    canvasContainer.appendChild(grid);
    for(let i= 0; i < size; i++){
        const row = document.createElement('div');
        row.classList.add('row');
        grid.appendChild(row);
        for(let j = 0; j < size; j++){
            const pixel = document.createElement('div');
            pixel.classList.add('pixel');
            pixel.style.width = 384 / size - 2 +`px`;
            pixel.style.height = 384 / size - 2 +`px`;
            pixel.addEventListener('mouseover', () => {
                if(eraserOn){
                    pixel.classList.remove('white');
                }
                else {
                    pixel.classList.add('white');
                }
            })
            row.appendChild(pixel);
        }

    }
}

createCanvas(16);