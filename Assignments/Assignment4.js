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




