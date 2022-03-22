import {update as updateSnake,draw as drawSnake,SNAKE_SPEED} from './snake.js'
let lastRenderTime = 0
const gameBoard=document.getElementById('game-board')



function main(currentTime) { //recrcive function
    let secoundLastRenderTime = (currentTime - lastRenderTime) / 1000
    window.requestAnimationFrame(main)
    if (secoundLastRenderTime < 1 / SNAKE_SPEED) return
    console.log('rendered')
    lastRenderTime = currentTime
    update()
    draw()
}

window.requestAnimationFrame(main)

function update(){
    updateSnake()
}
function draw(){
    drawSnake(gameBoard)
}