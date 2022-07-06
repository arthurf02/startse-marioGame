const mario = document.querySelector(".super-mario");
const pipe = document.querySelector(".pipe-game");

let score=document.querySelector("#score");
let points=0;
const scorePoints= setInterval(()=>{
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");
  while(marioPosition > 80){
    points++;
    score.innerHTML=`${points}`;
    return;
  }
},400)

const jump = () => {
  mario.classList.add("jump-mario");

  setTimeout(() => {
    mario.classList.remove("jump-mario");
  }, 500);
};

const loopGame = setInterval(() => {
  const pipePosition = pipe.offsetLeft;
  const marioPosition = +window
    .getComputedStyle(mario)
    .bottom.replace("px", "");

  if (pipePosition <= 120 && pipePosition > 0 && marioPosition < 80) {
    pipe.style.animation = "none";
    pipe.style.left = `${pipePosition}px`;

    mario.style.animation = "none";
    mario.style.bottom = `${marioPosition}px`;

    mario.src = "./Images/mario-game-over.png";
    mario.style.width = "75px";
    mario.style.marginLeft = "45px";

    clearInterval(loopGame);
  }
},10);

document.addEventListener("keydown", jump);
