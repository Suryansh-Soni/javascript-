// object : all the key in js are string by default.
let student = {
  name: "Suryansh",
  age: 20,
  grade: "A",
  2: "hello",
};
console.log(student.name);
console.log(student["age"]);
console.log(student["2"]);
delete student.grade;
console.log(student);


// objects in objects
const items={
    sugar:{
        weight:"2kg",
        brand:"xyz",
    },
    shampoo:{
        weight:"500gm",
        brand:"HeadnnSholder"
    }
}
console.log(items.shampoo.brand)

// Array of objects
const itemsArray=[
    {
       weight:"2kg",
        brand:"xyz", 
    },
    {
         weight:"500gm",
        brand:"HeadnnSholder"
    }
]
console.log(itemsArray[0].weight)
itemsArray[0].itemname="sugar"
console.log(itemsArray[0])

// Math object:
