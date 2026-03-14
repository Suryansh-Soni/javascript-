// Task 1: trying out Diff events

// mouseout
let input = document.querySelector("input");
input.addEventListener("mouseout", function (e) {
  console.log("mouseout");
});

// keypress
input.addEventListener("keypress", function (e) {
  console.log(input.value);
});

//scroll
let para = document.querySelector("p");
para.addEventListener("scroll", function () {
  console.log("scrolled");
});

window.addEventListener("load", function () {
  console.log("Page fully loaded");
});
