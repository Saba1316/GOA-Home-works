// index.js

import { calculate, filter } from './calculator.js';

// `calculate` ფუნქციის გამოყენება
let result1 = calculate(10, 5, 'add');
console.log(result1);  // 15

let result2 = calculate(10, 5, 'subtract');
console.log(result2);  // 5

let result3 = calculate(10, 5, 'multiply');
console.log(result3);  // 50

let result4 = calculate(10, 0, 'divide');
console.log(result4);  // Error: Division by zero

// `filter` ფუნქციის გამოყენება
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// filter ფუნქციის გამართვა: მხოლოდ ზუსტი ინდექსები
let evenNumbers = filter(numbers, function(num) {
    return num % 2 === 0;
});

console.log(evenNumbers);  // [2, 4, 6, 8, 10]

// filter ფუნქციის გამართვა: მხოლოდ რიცხვები, რომლებიც დიდი ან თანაბარი არიან 5
let numbersGreaterThanOrEqualTo5 = filter(numbers, function(num) {
    return num >= 5;
});

console.log(numbersGreaterThanOrEqualTo5);  // [5, 6, 7, 8, 9, 10]
