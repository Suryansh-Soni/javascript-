obj1 = {
  name: "Suryansh",
  age: 21,
};
obj2 = {
  name: "Teja",
  age: 21,
};

const mergeObj = (obj1, obj2) => 
  ({ ...obj1, ...obj2 });


console.log(mergeObj(obj1,obj2))