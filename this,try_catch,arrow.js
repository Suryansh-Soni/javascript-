// // this refer to the current object in use .
// // const student = {
// //   name: "suryansh",
// //   age: 21,
// //   getage() {
// //     console.log(this);
// //     let age = this.age;
// //     console.log(`${age} is just a number`);
// //   },
// // };
// // student.getage();

// // window.alert("hello"); same
// // alert("hello");

// // // try catch
// // try {
// //   console.log(a);
// // } catch (e) {
// //   console.log("caught an error .");
// //   console.log(e);
// // }

// // arrow function

// const sum = (a, b) => {
//   //no "function" needed no keywords
//   console.log(a + b);
// };

// sum(2, 3);
// // for single argument
// const print = (str) => {
//   console.log(str);
// };

// print("hello ji ");

// // implisit return a single value

// const mult = (a, b) => a * b;
// console.log(mult(2, 3));

// // set time out function
// // callback function is the function which is a argument from another function
// // settimeout(function,time);
// console.log("hi there");
// setTimeout(() => {
//   console.log("3 sec bad");
// }, 4000);

// //set interval:wait for n sec and then print wait and print ....
// setInterval(() => {
//   console.log("hi");
// }, 2000);
// clearInterval();

// this with arrow function
// have lexical scope :same scope as parent for arrow function
// for normal function :: scope is till the object that call them
const student = {
  name: "suryansh",
  age: 21,
  getNAme: function () {
    console.log(this);
    // return this.name;
  },
  getAge: () => {
    console.log(this);
    // return this.age;
  },
};
student.getAge();
student.getNAme();
