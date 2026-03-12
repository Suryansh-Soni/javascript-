//  Properties of DOM
// innerText: it displays only the content that will be visible on the screan
// innerhtml : it reurn the html code involved
// innercontent : it returns conent writen in the html file. if any display none thisg is there it will be shown here
//  document.querySelector('p').innerText;

// Attribute Mainpulation

Object.getAttribute("id"); //give the id name
Object.setAttribute("id", "spiderman"); //change the id name to spiderman
//  changeing the Image
document.querySelector("img").setSttribute("src", "link2");

// Manipulating Style of the object  .style=>show the inline styles only not the css .
document.getAttribute("img").style.color = "green";
let link = document.querySelectorAll(".box a");
// for(let i=0;i<link.length;i++) link[i].style.color="green";
for (l of link) link.style.color = "purple";
// using classList: doc.selecter('p).classList.add('green')
// functions:.add(),.remove(),.contains(),.toggle()