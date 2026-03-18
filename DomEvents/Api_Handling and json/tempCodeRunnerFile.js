let jsres = '{"fact":"I am a man","length":8}';

let validRes = JSON.parse(jsres);
console.log(validRes.fact);

let student = {
  name: "suryansh",
  class: "c3_49",
};

let stringres = JSON.stringify(student);
console.log(stringres);