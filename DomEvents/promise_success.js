// Java Script is a single threaded language
console.log("hell");
setTimeout(function () {
  console.log("hello");
}, 1000);

// then how does it wait and all but also in mean time it perform diff code lines
// it uses the browser .

// CallBack Hell
// callback inside callback

// function saveToDb(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) success();
//   else failure();
// }

// saveToDb(
//   "appna clg",
//   () => {
//     console.log("your data saved");
//     saveToDb(
//       "hello sir ji ",
//       () => {
//         console.log("Succes2");
//       },
//       () => {
//         console.log("failure 2");
//       },
//     );
//   },
//   () => {
//     console.log("weak connection .");
//   },
// );

// promises: objects that represent eventual completion of an asynchronous operation and its resulting value
// promise-> resolve and reject
// states : pending , rejected , fulfilled

function saveToDb(data) {
  return new Promise((resolve, reject ) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      resolve("Success,data saved ");
    } else {
      reject("failded");
    }
  });
}

// promise -> fulfilled->.then,reject->.catch
let req=saveToDb("hello sir ji kya hal ");
req.then(()=>{
  console.log("promise was resolve. ")
})
.catch(()=>{
  console.log("promise was rejected.")
})