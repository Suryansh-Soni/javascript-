// default argument :
let btn = document.querySelector("button");

btn.addEventListener("dblclick", function (event) {
  console.log(event);
  console.log("button clicked.");
});

// keyboard Events
// keydown ->when the key was pressed
// keyup-> when the key is released
let ip = document.querySelector("input");
ip.addEventListener("keydown", function (e) {
  console.log(e);
  console.log("key was pressed .");
});

let form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault(); // helps to prevent the default action like after submitting going to diff page 
  alert("form submitted.");
});

