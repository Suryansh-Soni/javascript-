const max = prompt("enter the max number");
const random = Math.floor(Math.random() * max) + 1;
let guess = prompt("guess the number");
while (true) {
  if (guess == "quit") {
    console.log("quitting");
    break;
  }
  if (guess == random) {
    console.log("congrats buddy you are right");
    break;
  } else if (guess < random) {
    guess = prompt("hint:thoda chota number hai ladle .");
  } else {
    prompt("hint:thoda bada number hai ladle .");
  }
}
