const canvas = document.getElementById('game-canvas');
const ctx = canvas.getContext("2d");

//we will need the gamecontainer to make it blurry when we display the end menu
const gamecontainer = document.getEelementById('game-container');

const flappyImg = new Image();
flappyImg.src = './image/flappy_dunk.png';

//game constants
const FLAP_SPEED = -5;
const BIRD_WIDTH = 40;
const BIRD_HEIGHT = 30;
const PIPE_WIDTH = 50;
const PIPE_GAP = 125;

//bird variables
let birdX = 50;
let birdY = 50;
let birdVelocity = 0;
let birdAcceletarion = 0.1;

//pipe variables
let pipeX = 400;
let pipeY = canvas.height -200;

//score and highscore variables
let scoreDiv = document.getElementById('score-display');
let score = 0;
let highscore = 0;

document.body.onkeyup = function(e){
    if (e.code == 'space'){
        birdVelocity = FLAP_SPEED;
    }
}

function increaseScore(){
    //todo
}
function collisionCheck(){
    //todo
}
function hideEndMenu(){
    document.getElementById('end-menu').style.display='none';
    gamecontainer.classList.remove('backdrop-blur');
}
function showEndMenu(){
    document.getElementById('end-menu').style.display='block';
    gamecontainer.classList.add('backdrop-blur');
    document.getElementById('end-score').innerHTML = score;
}

function resetGame(){
    //todo:
}
function endGame(){
    //todo
}
function loop(){
    //reset the ctx after every loop iteration
    ctx.ClearReact(0,0, canvas.clientWidth, canvas.height);
    //draw flappy bird
    ctx.drawImage(flappyImg, birdX, birdY);
    //draw pipes
   // ctx.fillStyle = '#333';

   requestAnimationFrame(loop);
}

loop();