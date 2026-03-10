// let arr = [1, 2, 3, 4];
// let print = function (el) {
//   console.log(el);
// };
// arr.forEach(print);

let Students = [
  { name: "suryansh", age: 20 },
  { name: "Sumit", age: 20 },
  { name: "tejas", age: 20 },
];
arr2.forEach((student) => {
  console.log(student.age);
});

// // Map
let num = [1, 2, 3, 4, 5];
let double = num.map((el) => {
  return el * 2;
});

console.log(double);

// filter
// let num = [1, 2, 3, 4, 5];
// let double = num.filter((el) => {
//   return el % 2 == 0;
// });
// console.log(double);

// "every" similer to and operator
console.log([2, 3, 4].every((el) => el % 2 == 0));

// some function simiter to or
console.log([2, 3, 4].some((el) => el % 2 == 0));

// reduce function
// reduce((accumulator,elemet))
console.log([1, 2, 3, 4].reduce((res, el) => res + el));

let arr = [1, 2, 3, 4, 5];
// let max = -1;
// for (let i = 0; i < arr.length; i++) {
//   if (max < arr[i]) {
//     max = arr[i];
//   }
// }
// console.log(max);

let max = arr.reduce((max, el) => {
  if (max < el) {
    return el;
  } else {
    return max;
  }
});
console.log(max);

// practice q)
let nums = [10, 20, 30, 40];

let ans = nums.every((el) => el % 10 == 0);
console.log(ans);
let min = nums.reduce((min, el) => {
  if (min < el) return min;
  else return el;
});

console.log(min);

// Default parameters
function sum(a = 20, b = 30) {
  return a + b;
}
console.log(sum());

// iterables :spread : all individaual values of array/string is considere as ind agrument
let arr3 = [1, 2, 3, 4, 5, 6];
let arr4 = [148, 48, 489];
let copy = [...arr3];
console.log(copy);

console.log([...arr3, ...arr4]);

// on objects
const data = {
  email: "sbh@123",
  pass: "ygygvuh",
};
console.log((datacopy = { ...data }));

//rest

function sum(...args) {
  for (i of args) {
    console.log(i);
  }
}
sum(1, 2, 3, 4);

// ...args:values are stored ans array

// destructuring
let name2 = ["tonny ", "sony", "koni"];
// let winner=name[0]
// let runnerup=name[1];
// let secondRunnerup=name[2];

let [winner, runnerup, ...others] = name2;

console.log(winner);

// destructering on objects
const student = {
  name: "Suryansh",
  Sage: 23,
};
let { name, Sage } = student;
console.log(name);
let { name: username, age } = student;
