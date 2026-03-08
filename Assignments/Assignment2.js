// Task 1: take smallest number from user and print remaing largere number from an array .
array = [1, 2, 3, 4, 5, 6, 7];
console.log(array);
n = prompt("Enter the smallest number: ");
for (let i = 0; i < array.length; i++) {
  if (array[i] > n) console.log(array[i]);
}

// Task2: function to extract unique char from a string

let str = "Abcdabcedefgggh";
str = str.toLowerCase();

let ans = "";

for (let i of str) {
  if (!ans.includes(i)) {
    ans += i;
  }
}

console.log(ans);

// Task 3: wap to take list of country as input and return longest country name
counties = [
  "India",
  "U.S.",
  "Pakistan",
  "Afghanistan",
  "Andorra.",
  "Argentina",
];
function longestName(countries) {
  let longest = countries[0];
  for (i of countries) {
    if (longest.length < i.length) {
      longest = i;
    }
  }
  return longest;
}
console.log(longestName(counties));

// Task 4: count number of vowel in string
str = "ahran";
const vowel = function (str) {
  vcount = 0;
  for (i of str) {
    if (i == "a" || i == "e" || i == "i" || i == "o" || i == "u")
      vcount = vcount + 1;
  }
  return vcount;
};

console.log(vowel(str));

// Task 5: generate raandom number in a Range
let rand = function (st, ed) {
  num = Math.floor(Math.random() * (ed - st + 1)) + st;
  return num;
};

console.log(rand(2, 5));
