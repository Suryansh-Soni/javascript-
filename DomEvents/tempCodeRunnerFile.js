let form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//   event.preventDefault(); // helps to prevent the default action like after submitting going to diff page
//   alert("form submitted.");
// });

// extract the data from the form
form.addEventListener("submit", function (event) {
  event.preventDefault();
  let inp = document.querySelector("input");
  // console.log(inp.innerText);// innerText donesnt work for user inputs .
  console.log(inp.value);
});