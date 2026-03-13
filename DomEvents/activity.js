let btn = document.querySelector("button");

btn.addEventListener("click", () => {
  let h1 = document.querySelector("h1");
  let randomcolor = Randomcolor();

  h1.innerText = randomcolor;

  let div = document.querySelector("div");
  div.style.backgroundColor = randomcolor;

  console.log("color updated");
});

function Randomcolor() {
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);
  let red = Math.floor(Math.random() * 255);

  let color = `rgb(${red}, ${green}, ${blue})`;
  return color;
}
