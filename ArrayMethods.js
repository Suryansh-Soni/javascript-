let arr = [1, 2, 3, 4];
let print = function (el) {
  console.log(el);
};
arr.forEach(print);

let arr2 = [
  { name: "suryansh", age: 20 },
  { name: "Sumit", age: 20 },
  { name: "tejas", age: 20 },
];
arr2.forEach((student) => {
  console.log(student.age);
});
