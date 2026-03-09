// Task1:
const avg = (arr) => {
  let sum = 0;
  for (let i of arr) {
    sum += i;
  }
  return sum / arr.length;
};

let arr = [1, 2, 3, 4];
console.log(avg(arr));

// Task2:
let even = (n) => {
  if (n % 2 == 0) console.log(`${n} is even`);
  else {
    console.log(`${n} is odd`);
  }
};

even(48);



