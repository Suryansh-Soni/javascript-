//   get element by id
// do in console in inspect

// let img = document.getElementsByClassName("oldImg");
// for (let i = 0; i < img.length; i++) {
//   console.dir(img[i].src());
// }

// get element by tag
document.getElementsByTagName("p")[1].innerText = "abc";

// query selector
document.querySelector("p"); //selects first p element
document.querySelector("div a"); //first ancor tag in div
let doc = document.querySelector("#myId"); //select first element with id=myId
document.querySelector(".myClass");
document.querySelectorAll("p"); //select all p elements,give node list
console.log(doc);
