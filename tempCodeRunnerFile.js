let num = [1, 2, 3, 4, 5];
let double = num.filter((el) => {
  return el % 2 == 0;
});
console.log(double);