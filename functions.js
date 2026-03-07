function functionname(name) {
  console.log(`the name is , ${name}hello ji `);
}
function functionname(name) {
  console.log("the name is ", name);
}
functionname("suryansh");

function printPrime(n) {
  for (let i = 2; i <= n; i++) {
    let isprime = true;
    for (let j = 2; j <= Math.sqrt(i); j++) {
      if (i % j === 0) {
        isprime = false;
        break;
      }
    }
    if (isprime) {
      console.log(i);
    }
  }
}

printPrime(10);

function printPoem() {
  console.log(`In quiet nights the stars all gleam,
Lighting paths for every dream.
Step by step we learn and grow,
More than yesterday we know.

Keep your hope and don’t give in,
Every loss can still be a win.
Small beginnings, strong and true,
Big bright futures wait for you. ✨`);
}
printPoem();

function dice() {
  console.log(Math.floor(Math.random() * 6) + 1);
}
dice();

// Return function :
function sum(a, b) {
  return a + b;
  console.log("hello "); // this will never run as the value is returned so,function ended
}
console.log(sum(sum(1, 2), 3));

function sumTillN(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumTillN(3));

function concatinateArray(arr) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    result += arr[i];
  }
  return result;
}
arr = ["hello ", " hi ", " no"];
console.log(concatinateArray(arr));

//function exrpession
//nameless function
let sum2 = function (a, b) {
  return a + b;
};
console.log(sum(1, 2));

// high order function:take one or multiple function as argument
function multigreet(func, n) {
  for (let i = 0; i <= n; i++) {
    func();
  }
}
let greet = function () {
  console.log("hello");
};
multigreet(greet, 3);
multigreet(function () {
  console.log("hi");
}, 3);

// factory function : highorder fn with return
function oddeven(req) {
  if (req == "odd") {
    return function (n) {
      console.log(!(n % 2 == 0));
    };
  } else if (req == "even") {
    return function (n) {
      console.log(n % 2 == 0);
    };
  } else {
    console.log("incorrect request");
  }
}

fun=oddeven("even");
fun(3)
