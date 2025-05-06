// Use 3 examples of the spread operator

// Exampe 1

const fruits = ["apple", "banana", "cherry"];
const moreFruits = [...fruits, "date", "elderberry"];

console.log(fruits);        // ["apple", "banana", "cherry"]
console.log(moreFruits);    // ["apple", "banana", "cherry", "date", "elderberry"]

// Example 2

const person = { name: "Saba", age: 15 };
const updatedPerson = { ...person, job: "developer" };

console.log(person);        // { name: "John", age: 30 }
console.log(updatedPerson); // { name: "John", age: 30, job: "developer" }

// Example 3


const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const combinedArray = [...array1, ...array2];

console.log(combinedArray); // [1, 2, 3, 4, 5, 6]