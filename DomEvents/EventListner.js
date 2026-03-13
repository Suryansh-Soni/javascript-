// btn.addEventListner(event,callBack)
let btns = document.querySelectorAll("button");
for (let btn of btns) {
  btn.addEventListener("click", greet);
  btn.addEventListener("dblclick", goodbye);
}

function greet() {
  console.log("hello ji");
}
function goodbye() {
  console.log("goodbye");
}


let p=document.querySelector('p')


let box= document.querySelector(".box")
box.addEventListener("mouseenter",()=>{
    console.log("mouse inside div ")
})