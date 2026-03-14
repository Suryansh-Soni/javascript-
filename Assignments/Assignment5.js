// // Task 1: trying out Diff events

// mouseout
let input = document.querySelector("input");
input.addEventListener("mouseout", function (e) {
  alert("mouseout");
});

// keypress
input.addEventListener("keypress", function (e) {
  console.log(input.value);
});

//scroll
// let para = document.querySelector("p");
// para.addEventListener("scroll", function () {
//   console.log("scrolled");
// });

window.addEventListener("load", function () {
  console.log("Page fully loaded");
});

// Task 2: change the color of the button when clicked
let btn = document.querySelector("#btn");

btn.addEventListener("click", function () {
  btn.style.backgroundColor = "red";
});
