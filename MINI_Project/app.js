let h2 = document.querySelector("h2");

let btns = ["yellow", "red", "purple", "green"];
let gameSeq = [];
let userSeq = [];
let started = false;
let level = 0;

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("Game Started");
    started = true;
    levelUp(); // start first level
  }
});

function gameFlash(btn) {
  btn.classList.add("flash");

  setTimeout(function () {
    btn.classList.remove("flash");
  }, 100);
}

function userFlash(btn) {
  btn.classList.add("userFlash");

  setTimeout(function () {
    btn.classList.remove("userFlash");
  }, 100);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level : ${level}`;

  let random = Math.floor(Math.random() * 4);
  let randcolor = btns[random];

  gameSeq.push(randcolor);

  let randombtn = document.querySelector(`.${randcolor}`);
  gameFlash(randombtn);
}

function check(idx) {
  if (userSeq[idx] == gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    h2.innerText = "Game Over, press any key to start over.";

    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
  }
}

function btnPress() {
  let btn = this;
  userFlash(btn);

  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  check(userSeq.length - 1);
}

let allbtn = document.querySelectorAll(".btn");

for (let btn of allbtn) {
  btn.addEventListener("click", btnPress);
}