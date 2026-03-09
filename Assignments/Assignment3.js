// Task1:
const avg = (arr) => {
  let sum = 0;
  for (let i of arr) {
    sum += i;
  }
  return  sum / arr.length;
};

let arr = [1, 2, 3, 4];
console.log(avg(arr));
