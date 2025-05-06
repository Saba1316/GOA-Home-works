// Create 3 for... of loops and also comment on which data types this type of loop can be used.


// Example 1

// This loop can iterate over the elements of an array (iterable data type).
const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
    console.log(num);  // Output: 1, 2, 3, 4, 5
}


// Example 2

// This loop can iterate over the characters of a string (a type of iterable data).
const word = "hello";

for (const char of word) {
    console.log(char);  // Output: h, e, l, l, o
}


// Example 3

// This loop can iterate over the values in a Set (a collection of unique values).
const uniqueNumbers = new Set([1, 2, 3, 4]);

for (const value of uniqueNumbers) {
    console.log(value);  // Output: 1, 2, 3, 4
}
