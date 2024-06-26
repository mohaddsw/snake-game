import {update as updateSnake,draw as drawSnake,SNAKE_SPEED,getSnakeHead,snakeIntersection} from './snake.js'
import {update as updateFood,draw as drawFood} from './food.js'
import {outsideGrid} from './grid.js'
let lastRenderTime = 0
const gameBoard=document.getElementById('game-board')
let gameOver=false



function main(currentTime) { //recrcive function
    if(gameOver){
        if(confirm('You Lost.Press ok to restart')){
            window.location="/"
        }
        return
    }

    let secoundLastRenderTime = (currentTime - lastRenderTime) / 1000
    window.requestAnimationFrame(main)
    if (secoundLastRenderTime < 1 / SNAKE_SPEED) return
    lastRenderTime = currentTime
    update()
    draw()
}

window.requestAnimationFrame(main)

function update(){
    updateSnake()
    updateFood()
    checkDeath()

}
function draw(){
    gameBoard.innerHTML=''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}

function checkDeath(){
    gameOver=outsideGrid(getSnakeHead()) || snakeIntersection()

}