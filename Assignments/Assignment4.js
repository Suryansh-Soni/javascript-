// Task 1:
let arr = [1, 2, 3, 4, 5];
const sum = (arr) => {
  let sum = 0;
  let avg = 0;
  for (i of arr) {
    sum += i * i;
  }
  avg = sum / arr.length;
  console.log(avg);
};

sum(arr);

// Task 2:
num = [1, 2, 3, 4, 5];
let arr2 = num.map((el) => {
  return (el += 5);
});
console.log(arr2);

// Taks3:
let str = ["abcd", "fghi"];
let struper = str.map((str) => {
  return str.toUpperCase();
});
console.log(struper);


