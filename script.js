let gameSeq = [];
let userSeq = [];
// let highScore = 0;

let btns = ["yellow","red","purple","green"];

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false){
        console.log("game started");
        started=true;

        levelUp();
    }
});

function gameFlash(btn){
  btn.classList.add("flash");
  setTimeout(function(){
    btn.classList.remove("flash");
  },250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function(){
      btn.classList.remove("userFlash");
    },250);
  }

function levelUp(){
    userSeq =[];
    level++;
    h2.innerText = `Level ${level}`;
    
    let randIdx = Math.floor(Math.random() * 3);
    let randomColor= btns[randIdx];
    let randBtn = document.querySelector(`.${randomColor}`);
    gameFlash(randBtn);
    // console.log(randBtn);
    // console.log(randIdx);
    // console.log(randomColor);
     gameSeq.push(randomColor);
     console.log(gameSeq);
}

function checkAns(idx){
  // console.log("curr level : ", level);
  // let idx = level-1;
   
  if(userSeq[idx] === gameSeq[idx]){
    if(userSeq.length == gameSeq.length){
      setTimeout(levelUp ,1000);
    }
  }else{
      h2.innerHTML = `Game Over! Your score was <b>${level}<b/> <br> Press any key to Start.`;
      document.querySelector("body").style.background="red";
      setTimeout(function(){
      document.querySelector("body").style.background="white";
       },150)
       reset();
  }
}

function btnPress(){
  let btn = this;
  userFlash(btn);

  useColor = btn.getAttribute("id");
  userSeq.push(useColor);

  checkAns(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress);
}

function reset() {
   started = false;
   gameSeq = [];
   userSeq = [];
   level = 0;
  //  highScore();
}

// function highScore(){
//     highScore=level;
//     let h3 = document.querySelector("h3");
//     h3.innerText = `High Score :${level}`;
//   }
