// // Task 1: trying out Diff events

// mouseout
let input = document.querySelector("input");
input.addEventListener("mouseout", function (e) {
  console("mouseout");
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

// Task 3: Take the name from the user and display it dynamically but only letters .
let h3 = document.querySelector("h3");

input.addEventListener("input", function () {
  // remove all characters except letters and spaces
  let filteredValue = input.value.replace(/[^a-zA-Z ]/g, "");
  // update input box with filtered value
  input.value = filteredValue;
  // show inside heading
  h3.innerText = filteredValue;
});
