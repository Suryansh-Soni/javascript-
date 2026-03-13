// select all buttons
let btns = document.querySelectorAll("button");

function sayHello() {
  alert("hello");
}

// apply events to every button
for (let btn of btns) {
  btn.onclick = sayHello;

  btn.onmouseenter = function () {
    console.log("you entered a button");
  };

  console.dir(btn);
}

// for these two functions we can only have one value(function that will run).