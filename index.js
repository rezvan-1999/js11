// * ==================================2=====================================

/*
 todo: 1. Take the object from question 1  
 todo: 2. put all the values into an array with 2 ways that you’ve learned
*/

const obj = { number: 6043, age: 21, pt: 96 };

// first way
const firstWay = Object.values(obj);
console.log(firstWay);



// second way
let result = [];
for (const values in obj) {
  let getValues = obj[values];
  result.push(getValues);
}

console.log(result);
