// // object : all the key in js are string by default.
// let student = {
//   name: "Suryansh",
//   age: 20,
//   grade: "A",
//   2: "hello",
// };
// console.log(student.name);
// console.log(student["age"]);
// console.log(student["2"]);
// delete student.grade;
// console.log(student);

// // objects in objects
// const items={
//     sugar:{
//         weight:"2kg",
//         brand:"xyz",
//     },
//     shampoo:{
//         weight:"500gm",
//         brand:"HeadnnSholder"
//     }
// }
// console.log(items.shampoo.brand)

// // Array of objects
// const itemsArray=[
//     {
//        weight:"2kg",
//         brand:"xyz",
//     },
//     {
//          weight:"500gm",
//         brand:"HeadnnSholder"
//     }
// ]
// console.log(itemsArray[0].weight)
// itemsArray[0].itemname="sugar"
// console.log(itemsArray[0])

// Math object:math.pi ,math.e,math.abs()

let n = -12;
console.log(Math.abs(n));
console.log(Math.floor(2.33));
console.log(Math.ceil(2.33));
console.log(Math.pow(2, 3));
console.log(Math.random()); // doenst give 1 and anything else is valid
// how to generate number in a interval 
console.log(Math.floor(Math.random()*5)+1);
//here this 1 is deciding the starting of the range and 5 is the ending of the range 
console.log(Math.floor(Math.random()*5)+20);

