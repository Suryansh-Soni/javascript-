// this in event listner.
let btn = document.querySelector(".btn");
let div = document.querySelector("div");

btn.addEventListener("click", function () {
  console.dir(this.innerText);
  this.style.backgroundColor = "blue";
});

// for multple element we do no write this code multiple time it increse reduncency
// make new function
function changecolor() {
  console.dir(this.innerText);
  this.style.backgroundColor = "blue";
}

// now use it
btn.addEventListener("click", changecolor);
div.addEventListener("click", changecolor);
