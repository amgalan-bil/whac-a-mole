const body= document.getElementsByTagName('body')[0];
body.style.backgroundImage="url('mario-bg.jpg')";
const board = document.getElementById('board');


let current;
let currentMole;
let score=0;
let gameFinish=false;
const start = document.getElementsByClassName('start')[0];
// const end = document.getElementsByClassName('end')[0];
start.onclick = game;
// end.onclick = gameFinish(true);



function game(){

    for (let i = 0; i < 9; i++) {
    const pipe = document.createElement('div');
    pipe.id = i.toString();
    pipe.addEventListener("click",select);
    board.appendChild(pipe)

    }
 setInterval(makePlant, 1000)
 setInterval(makeMole, 1000)
 setInterval(finish,60000)
}

function random(){
    let numb = Math.floor(Math.random()*9)
    return numb.toString()
}

   
    
 let numb = random();
 setInterval(function(){numb=random()},1000)

function makePlant(){
    
    if (gameFinish) {
    return;
    }

    if(current){
    current.innerHTML="";
}
    let plant = document.createElement('img');
    plant.src='./piranha-plant.png';
    
    // if (current && current.id === numb) {
    //     return;
    // }
    current = document.getElementById(numb)
    current.style.display='flex'
    current.style.justifyContent='center'
    current.appendChild(plant)
}

function makeMole(){
    if(gameFinish){
        return;
    }

    if(currentMole){
    currentMole.innerHTML="";
}
    let mole = document.createElement('img');
    mole.src='./monty-mole.png';
    
    let num = random();
    // if(currentMole && currentMole.id === numb){
    //     return;
    // }

    if (num === numb || num === 0) {
        num++
    }else if(num === numb || num ===10){
        num--
    }

    currentMole = document.getElementById(num)
    // currentMole.style.display='flex'
    // currentMole.style.justifyContent='center'
    currentMole.appendChild(mole)
}
// let moleLoc = document.getElementById(numb);

function select(){
    if(gameFinish == true){
        return;
    }
    if (this == currentMole) {
        score+=10;
        document.getElementById("score").innerText = score.toString();
        makeMole()
        
    }else if(this == current){
        document.getElementById('score').innerText ="Game Over:" + score.toString()
        gameFinish = true;
    }
}


function finish(){
    document.getElementById('score').innerText ="Game Over:" + score.toString()
    gameFinish = true;
}