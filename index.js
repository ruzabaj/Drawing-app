const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

const decreaseBtn = document.getElementById('decrease');
const increaseBtn = document.getElementById('increase');
const sizeEL = document.getElementById('size');
const colorEL = document.getElementById('color');
const clear = document.getElementById('clear');


let keysPressed = false;
let x;
let y;

let size = 10
colorEL.value = 'black'
let color = colorEL.value

canvas.addEventListener('mousedown', (e)=>{
    keysPressed = true;

    x= e.offsetX;
    y= e.offsetY;
})

document.addEventListener('mouseup', (e) => {
    keysPressed = false

    x = undefined
    y = undefined
})

canvas.addEventListener('mousemove', (e)=>{
    if(keysPressed){
        const x2= e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2,y2);
        drawLine(x,y,x2,y2);

        x=x2;
        y=y2;
    }
})

function drawCircle(x, y){
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2)
    ctx.fillStyle = color;
    ctx.fill()
}

function drawLine(x1, y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1, y1)
    ctx.lineTo(x2, y2)
    ctx.strokeStyle = color
    ctx.lineWidth = size * 2
    ctx.stroke()
}

function updateSizeOnScreen() {
    sizeEL.innerText = size
}

increaseBtn.addEventListener('click', () => {
    size += 5

    if(size > 50) {
        size = 50
    }

    updateSizeOnScreen()
})

decreaseBtn.addEventListener('click', () => {
    size -= 5

    if(size < 5) {
        size = 5
    }

    updateSizeOnScreen()
})

colorEL.addEventListener('change', (e) => color = e.target.value)

clear.addEventListener('click', () => ctx.clearRect(0,0, canvas.width, canvas.height))