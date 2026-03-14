let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = inp.value;

  let delbtn = document.createElement("button");
  delbtn.innerText = "Delete";
  delbtn.classList.add("del");

  item.append(delbtn);
  ul.append(item);

  inp.value = "";

  delbtn.addEventListener("click", function () {
    let par = this.parentElement;
    par.remove();
  });
});
