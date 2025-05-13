// Make 3 examples of destructuring on list and 3 examples on object

// Lists
// Example 1

const numbers = [1, 2, 3];
const [first, second, third] = numbers;

console.log(first);   // 1
console.log(second);  // 2
console.log(third);   // 3

// Example 2

const colors = ["red", "green", "blue", "yellow"];
const [, , thirdColor] = colors;

console.log(thirdColor); // "blue"

// Example 3

const fruits = ["apple", "banana", "cherry", "date"];
const [firstFruit, secondFruit, ...rest] = fruits;

console.log(firstFruit); // "apple"
console.log(secondFruit); // "banana"
console.log(rest);       // ["cherry", "date"]

// Objects

// Example 1

const car = { brand: "Toyota", model: "Corolla", year: 2020 };
const { brand, model, year } = car;

console.log(brand);  // "Toyota"
console.log(model);  // "Corolla"
console.log(year);   // 2020

// Example 2

const user = { username: "Saba", password: "12345" };
const { username: userName, password: userPassword } = user;

console.log(userName);     // "Saba"
console.log(userPassword); // "12345"

// Example 3

const profile = { name: "Saba", age: 15 };
const { name, age, location = "Unknown" } = profile;

console.log(name);      // "Saba"
console.log(age);       // 15
console.log(location);  // "Unknown" (default value used)