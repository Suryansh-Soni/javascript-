let jsres = '{"fact":"I am a man","length":8}';

let validRes = JSON.parse(jsres);
console.log(validRes.fact);

let student = {
  name: "suryansh",
  class: "c3_49",
};

let stringres = JSON.stringify(student);
console.log(stringres);

// Testing Api Requests
// Ajax: asynchronus javascript and xml(json).

//http verbs: get, set, delete

//status code : 200-ok,404-not found,400-bad request,500 - internal server error.

// adding additional information in a api call :
// http://www.google.com/search   ?q=harry+potter-> q is the key and after that is its value

// Http Header :

// handlling Apis using fetch;
let url = "https://catfact.ninja/fact";
// fetch(url)
//   .then((res) => {
//     res.json().then((data) => {
//       console.log("data:", data);
//     });
//     console.log(res);
//   })
//   .catch((e) => {
//     console.log("error :", e);
//   });

async function getFacts() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);
    let res2 = await fetch(url);
    let data2 = await res.json();
    console.log(data2.fact);
  } catch (e) {
    console.log("error:", e);
  }
}
