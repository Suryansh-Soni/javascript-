let parent = document.getElementById("parent");
let child = document.getElementById("child");

parent.addEventListener("click", function () {
  console.log("Parent Div Clicked");
});

child.addEventListener("click", function () {
  console.log("Button Clicked");
});

// event.stopPropogation : stop event bubbling
