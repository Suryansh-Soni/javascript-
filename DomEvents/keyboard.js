// // default argument :
// let btn = document.querySelector("button");

// btn.addEventListener("dblclick", function (event) {
//   console.log(event);
//   console.log("button clicked.");
// });

// // keyboard Events
// // keydown ->when the key was pressed
// // keyup-> when the key is released
// let ip = document.querySelector("input");
// ip.addEventListener("keydown", function (e) {
//   console.log(e);
//   console.log("key was pressed .");
// });

let form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//   event.preventDefault(); // helps to prevent the default action like after submitting going to diff page
//   alert("form submitted.");
// });

// extract the data from the form
form.addEventListener("submit", function (event) {
  event.preventDefault();
  // let user = document.querySelector("#user");
  // let pass = document.getElementById("pass");
  // // console.log(inp.innerText);// innerText donesnt work for user inputs .
  // console.log(user.value);
  // console.log(pass.value);

  let user = this.elements[0];
  let pass = this.elements[1];
  // console.log(inp.innerText);// innerText donesnt work for user inputs .
  console.log(user.value);
  console.log(pass.value);
});
