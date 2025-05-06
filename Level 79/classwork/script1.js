// Use 3 examples of the rest operator

// Example 1

const colors = ["red", "green", "blue", "yellow"];
const [firstColor, secondColor, ...otherColors] = colors;

console.log(firstColor);   // "red"
console.log(secondColor);  // "green"
console.log(otherColors);  // ["blue", "yellow"]

// Example 2

function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
  }
  
  console.log(sum(1, 2, 3, 4));  // 10
  console.log(sum(5, 10));       // 15

// Example 3

const person = { name: "Saba", age: 15, job: "developer", city: "Tbilisi" };
const { name, age, ...otherDetails } = person;

console.log(name);        // "Saba"
console.log(age);         // 15
console.log(otherDetails); // { job: "developer", city: "Tbilisi" }