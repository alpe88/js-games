"use strict";
let canvas;
let context;

canvas = document.getElementById('canvas');
context = canvas.getContext('2d');

let canvasWidth = canvas.width;
let canvasHeight = canvas.height;

window.onload = init;

function init(){
    context.beginPath();
    context.lineWidth = "6";
    context.strokeStyle = "white";

    // Start the first frame request
    window.requestAnimationFrame(gameLoop);
}

let gameData = {
    player: {posx: 10, posy: 10},
    npc: {posx: canvasWidth - 30, posy: 10}
}


let secondsPassed = 0;
let oldTimeStamp = 0;
let movingSpeed = 50;

let fps;

function gameLoop(timeStamp) {

    // Move forward in time with a maximum amount
    secondsPassed = Math.min(secondsPassed, 0.1);
    oldTimeStamp = timeStamp;

    // Calculate fps
    fps = Math.round(1 / secondsPassed);

    console.log(fps);

    update(secondsPassed);
    // Perform the drawing operation
    draw();

    // The loop function has reached it's end. Keep requesting new frames
    window.requestAnimationFrame(gameLoop);
}

let timePassed = 0;

function update(secondsPassed) {
    timePassed += secondsPassed
}

function drawPaddle(posx, posy, width, height){
    context.rect(posx, posy, 20, 130);
    context.stroke();
}

function draw(){
    // Clear the entire canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    drawPaddle(gameData.player.posx, gameData.player.posy);
    drawPaddle(gameData.npc.posx, gameData.npc.posy);
}

