// // Async function returns promise
// async function greet() {
//   throw "randomError";
//   return "helo";
// }
// greet()
//   .then(() => {
//     console.log("promise successfull");
//   })
//   .catch((e) => {
//     console.log("rejected", e);
//   });
let h1 = document.querySelector("h1");

function colorchange(color, delay) {
  return new Promise((resolve, reject) => {
    (setTimeout(() => {
      let num = Math.floor(Math.random() * 5) + 1;
      if (num > 3) {
        reject("Promise rejected.");
      }
      h1.style.color = color;
      console.log(`color changed to ${color}`);
      resolve("color change. ");
    }),
      delay);
  });
}
//  await help to do one after another execution

async function demo() {
  try{
  await colorchange("red", 1000);
  await colorchange("blue", 1000);
  await colorchange("green", 1000);
}catch(e){
  console.log("Error Ocure:",e)
}
}