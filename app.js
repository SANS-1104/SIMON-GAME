let gameSeq = [];
let userSeq = [];
let btns = ["red","yellow","blue","green"];
let highestScore = [];

let started = false;
let level = 0;
let p = document.querySelector("p");


function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}


function levelUp(){
    userSeq=[];
    level++;
    p.innerText = `Level ${level}`;
    let randIndx = Math.floor(Math.random()*4);
    let randColor = btns[randIndx];
    let randBtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
};

let startBtn = document.querySelector(".startBtn");
startBtn.addEventListener("click",function(){
    if(started == false){
      console.log("Game Started");
      started = true;
      levelUp();  
    }   
});

function reset(){
    started = 0;
    level = 0;
    gameSeq = [];
}

function checkAns(idx){
    if(userSeq[idx] === gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp(),1500);
        }
    }else{
        highestScore.push(level-1);
        let h3 = document.querySelector("h3");
        console.log(highestScore);
        p.innerText = `GAME OVER ! Your Score is :  ${level-1} \n Press any key to start`;
        h3.innerHTML = `Highest Score till now : ${Math.max(...highestScore)}`;
        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);
    let userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userColor);

    checkAns(userSeq.length-1);
};

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns){
    btn.addEventListener("click", btnPress);
}

