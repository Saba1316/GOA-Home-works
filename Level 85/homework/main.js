// main.js

// Import the functions from mathUtils.js using require
const { add, subtract } = require('./mathUtils');

// Perform some calculations
let sum = add(10, 5);
let difference = subtract(10, 5);

// Log the results to the console
console.log(`Sum: ${sum}`);         // Sum: 15
console.log(`Difference: ${difference}`); // Difference: 5
